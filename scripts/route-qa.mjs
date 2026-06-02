import { chromium } from "@playwright/test";
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const argv = new Set(process.argv.slice(2));
const shouldStartServer =
  process.env.AUDIT_START_SERVER === "1" || argv.has("--start-server");
const shouldScroll = process.env.AUDIT_SCROLL === "1" || argv.has("--scroll");
const auditPort = process.env.AUDIT_PORT ?? "3212";
const baseUrl =
  process.env.AUDIT_BASE_URL ??
  (shouldStartServer ? `http://127.0.0.1:${auditPort}` : "http://127.0.0.1:3000");
const outDir = process.env.AUDIT_OUT_DIR ?? "reports/route-qa";

const viewports = [
  { name: "desktop", width: 1440, height: 900, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

function localUrl(pathname) {
  return pathname === "/" ? `${baseUrl}/` : `${baseUrl}${pathname}`;
}

function categoryFor(pathname) {
  if (pathname === "/") return "home";
  if (pathname === "/routes") return "routes-hub";
  if (pathname.startsWith("/routes/") && pathname.endsWith("/details")) {
    return "route-details";
  }
  if (pathname.startsWith("/routes/bangkok-airport-to-pattaya/")) {
    return "bkk-pattaya-special";
  }
  if (pathname.startsWith("/routes/")) return "route-main";
  if (pathname.startsWith("/travel-extras/")) return "travel-extra";
  if (pathname.startsWith("/guides/")) return "guide";
  if (pathname === "/guides") return "guides-hub";
  return "support";
}

async function getSitemapPaths() {
  const response = await fetch(`${baseUrl}/sitemap.xml`);
  if (!response.ok) {
    throw new Error(`Could not fetch sitemap: ${response.status}`);
  }
  const xml = await response.text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname)
    .filter((pathname) => pathname !== "/robots.txt")
    .sort();

  return [...new Set(paths)];
}

async function scrollPage(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(Math.floor(window.innerHeight * 0.8), 360);
    const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await delay(35);
    }

    window.scrollTo(0, 0);
    await delay(35);
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(processRef) {
  const deadline = Date.now() + 45000;

  while (Date.now() < deadline) {
    if (processRef.exitCode !== null) {
      throw new Error(`Next server exited early with code ${processRef.exitCode}`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}

    await delay(500);
  }

  throw new Error("Timed out waiting for Next server");
}

function stopServer(processRef) {
  if (!processRef?.pid || processRef.exitCode !== null) return;

  processRef.stdout?.destroy();
  processRef.stderr?.destroy();
  processRef.stdin?.destroy();

  if (process.platform === "win32") {
    const killer = spawn(
      "taskkill",
      ["/PID", String(processRef.pid), "/T", "/F"],
      { stdio: "ignore" },
    );
    killer.unref();
  } else {
    processRef.kill("SIGTERM");
  }

  processRef.unref();
}

async function collectMetrics(page, pathname, viewportName) {
  return page.evaluate(
    async ({ pathname: currentPath, viewportName: currentViewport }) => {
      const text = document.body?.innerText ?? "";
      const viewportWidth = document.documentElement.clientWidth;
      const allElements = Array.from(document.querySelectorAll("body *"));
      const visibleElements = allElements.filter((element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          rect.width > 0 &&
          rect.height > 0
        );
      });

      const visibleH1 = Array.from(document.querySelectorAll("h1"))
        .filter((heading) => {
          const style = window.getComputedStyle(heading);
          const rect = heading.getBoundingClientRect();
          return (
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            rect.width > 0 &&
            rect.height > 0
          );
        })
        .map((heading) => heading.textContent?.trim().replace(/\s+/g, " "))
        .filter(Boolean);

      const overflow = visibleElements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            tag: element.tagName.toLowerCase(),
            text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 110),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            className:
              typeof element.className === "string"
                ? element.className.slice(0, 120)
                : "",
          };
        })
        .filter((item) => item.right > viewportWidth + 2 || item.left < -2)
        .filter((item) => item.width < viewportWidth * 4)
        .slice(0, 12);

      const images = Array.from(document.images).map((image) => ({
        alt: image.alt,
        src: image.currentSrc || image.src,
        complete: image.complete,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        loading: image.loading,
      }));
      const brokenImageCandidates = images
        .filter((image) => image.src && image.complete && image.naturalWidth === 0)
        .slice(0, 10);
      const brokenImages = [];

      for (const image of brokenImageCandidates) {
        let fetchStatus = 0;
        let fetchContentType = "";
        let fetchLength = 0;

        try {
          const response = await fetch(image.src, { cache: "no-store" });
          const bytes = await response.arrayBuffer();

          fetchStatus = response.status;
          fetchContentType = response.headers.get("content-type") ?? "";
          fetchLength = bytes.byteLength;
        } catch {}

        const fetchLooksLikeImage =
          fetchStatus >= 200 &&
          fetchStatus < 300 &&
          fetchContentType.startsWith("image/") &&
          fetchLength > 0;

        if (!fetchLooksLikeImage) {
          brokenImages.push({
            ...image,
            fetchStatus,
            fetchContentType,
            fetchLength,
          });
        }
      }

      const anchors = Array.from(document.querySelectorAll("a[href]")).map((anchor) => {
        const href = anchor.getAttribute("href") ?? "";
        let resolvedHref = "";
        try {
          resolvedHref = new URL(href, location.href).href;
        } catch {}

        return {
          text: anchor.textContent?.trim().replace(/\s+/g, " ") ?? "",
          href,
          resolvedHref,
        };
      });

      const affiliateCtas = anchors
        .filter((anchor) => anchor.resolvedHref.includes("12go.asia"))
        .map((anchor) => ({
          text: anchor.text.slice(0, 90),
          href: anchor.resolvedHref,
        }));

      const mapLinks = anchors
        .filter(
          (anchor) =>
            anchor.text.trim().toLowerCase() === "map" ||
            anchor.resolvedHref.includes("google.com/maps/search"),
        )
        .map((anchor) => {
          const url = new URL(anchor.resolvedHref);
          const query = url.searchParams.get("query") ?? "";
          const vague =
            /operator|selected|depending|depends|area|partner|meeting point|pickup point|arrival area|city|airport$/i.test(
              query,
            ) && !/gate\s*8|station|pier|terminal|railway/i.test(query);

          return {
            text: anchor.text.slice(0, 80),
            query,
            vague,
            href: anchor.resolvedHref,
          };
        });

      const internalLinks = anchors.filter(
        (anchor) =>
          anchor.resolvedHref.startsWith(location.origin) ||
          anchor.href.startsWith("/") ||
          anchor.href.startsWith("#"),
      );
      const detailsLinks = anchors.filter((anchor) =>
        anchor.resolvedHref.includes(`${location.origin}${currentPath}/details`),
      );

      return {
        viewport: currentViewport,
        title: document.title,
        visibleH1Count: visibleH1.length,
        visibleH1,
        canonical:
          document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
        textLength: text.length,
        hasComingSoon: /coming soon/i.test(text),
        hasUndefinedLike: /\b(undefined|null|NaN)\b/.test(text),
        hasMojibake: /Ă|Ä|Â|ďż˝|â€“|â€™|â€œ|â€/i.test(text),
        overflowCount: overflow.length,
        overflow,
        imageCount: images.length,
        brokenImages,
        affiliateCtaCount: affiliateCtas.length,
        affiliateCtas: affiliateCtas.slice(0, 10),
        mapLinkCount: mapLinks.length,
        vagueMapLinks: mapLinks.filter((link) => link.vague).slice(0, 10),
        detailsLinkCount: detailsLinks.length,
        internalLinkCount: internalLinks.length,
      };
    },
    { pathname, viewportName },
  );
}

async function inspectPath(context, pathname, viewportName) {
  const page = await context.newPage();
  const consoleMessages = [];
  const pageErrors = [];
  const badResponses = [];

  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      consoleMessages.push(message.text());
    }
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) {
      badResponses.push({
        status: response.status(),
        url: response.url(),
      });
    }
  });

  let response = null;
  let metrics = null;
  let error = null;

  try {
    response = await page.goto(localUrl(pathname), {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });
    await page.waitForLoadState("load", { timeout: 8000 }).catch(() => {});
    if (shouldScroll) {
      await scrollPage(page);
    }
    metrics = await collectMetrics(page, pathname, viewportName);
  } catch (caught) {
    error = caught instanceof Error ? caught.message : String(caught);
  } finally {
    await page.close();
  }

  return {
    path: pathname,
    category: categoryFor(pathname),
    viewport: viewportName,
    status: response?.status() ?? null,
    metrics,
    consoleMessages: consoleMessages.slice(0, 8),
    pageErrors: pageErrors.slice(0, 8),
    badResponses: badResponses
      .filter((item) => !item.url.includes("/_vercel/insights/script.js"))
      .slice(0, 8),
    localAnalytics404: badResponses.some((item) =>
      item.url.includes("/_vercel/insights/script.js"),
    ),
    error,
  };
}

function routeSlug(pathname) {
  return pathname.replace(/^\/routes\//, "").replace(/\/details$/, "");
}

function summarize(results) {
  const failures = results.filter((result) => {
    if (result.status !== 200 || result.error) return true;
    if (!result.metrics) return true;
    return (
      result.metrics.visibleH1Count !== 1 ||
      result.metrics.hasComingSoon ||
      result.metrics.hasUndefinedLike ||
      result.metrics.hasMojibake ||
      result.metrics.overflowCount > 0 ||
      result.metrics.brokenImages.length > 0 ||
      result.metrics.vagueMapLinks.length > 0 ||
      result.badResponses.length > 0 ||
      result.pageErrors.length > 0
    );
  });

  const routeRows = [];
  const mainRoutes = results
    .filter((result) => result.viewport === "desktop" && result.category === "route-main")
    .map((result) => result.path)
    .sort();

  for (const mainPath of mainRoutes) {
    const slug = routeSlug(mainPath);
    const routeResults = results.filter(
      (result) =>
        (result.path === mainPath || result.path === `${mainPath}/details`) &&
        (result.viewport === "desktop" || result.viewport === "mobile"),
    );
    const issueCount = routeResults.filter((result) => failures.includes(result)).length;
    const mainDesktop = routeResults.find(
      (result) => result.path === mainPath && result.viewport === "desktop",
    );
    const mainMobile = routeResults.find(
      (result) => result.path === mainPath && result.viewport === "mobile",
    );
    const detailsDesktop = routeResults.find(
      (result) => result.path === `${mainPath}/details` && result.viewport === "desktop",
    );

    routeRows.push({
      slug,
      mainStatus: mainDesktop?.status ?? null,
      mobileStatus: mainMobile?.status ?? null,
      detailsStatus: detailsDesktop?.status ?? null,
      desktopH1: mainDesktop?.metrics?.visibleH1?.[0] ?? "",
      mobileH1: mainMobile?.metrics?.visibleH1?.[0] ?? "",
      affiliateCtas: mainDesktop?.metrics?.affiliateCtaCount ?? 0,
      vagueMapLinks:
        (mainDesktop?.metrics?.vagueMapLinks.length ?? 0) +
        (detailsDesktop?.metrics?.vagueMapLinks.length ?? 0),
      issueCount,
    });
  }

  const byCategory = {};
  for (const result of results) {
    byCategory[result.category] ??= { pages: 0, checks: 0, failures: 0 };
    byCategory[result.category].checks += 1;
    byCategory[result.category].failures += failures.includes(result) ? 1 : 0;
    if (result.viewport === "desktop") byCategory[result.category].pages += 1;
  }

  return {
    checkedAt: new Date().toISOString(),
    baseUrl,
    pageCount: new Set(results.map((result) => result.path)).size,
    checkCount: results.length,
    failureCount: failures.length,
    byCategory,
    routeRows,
    failures: failures.map((result) => ({
      path: result.path,
      viewport: result.viewport,
      category: result.category,
      status: result.status,
      error: result.error,
      h1: result.metrics?.visibleH1 ?? [],
      overflow: result.metrics?.overflow ?? [],
      brokenImages: result.metrics?.brokenImages ?? [],
      vagueMapLinks: result.metrics?.vagueMapLinks ?? [],
      hasComingSoon: result.metrics?.hasComingSoon ?? false,
      hasUndefinedLike: result.metrics?.hasUndefinedLike ?? false,
      hasMojibake: result.metrics?.hasMojibake ?? false,
      badResponses: result.badResponses,
      pageErrors: result.pageErrors,
    })),
  };
}

await fs.mkdir(outDir, { recursive: true });

let server;
const serverLogs = [];
let browser;
const results = [];

try {
  if (shouldStartServer) {
    server = spawn(
      process.execPath,
      ["node_modules/next/dist/bin/next", "start", "-H", "127.0.0.1", "-p", auditPort],
      {
        cwd: process.cwd(),
        stdio: "pipe",
      },
    );
    server.stdout.on("data", (chunk) => serverLogs.push(chunk.toString()));
    server.stderr.on("data", (chunk) => serverLogs.push(chunk.toString()));
    await waitForServer(server);
  }

  const paths = await getSitemapPaths();
  browser = await chromium.launch({ headless: true });

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
      deviceScaleFactor: viewport.isMobile ? 2 : 1,
    });

    for (const pathname of paths) {
      results.push(await inspectPath(context, pathname, viewport.name));
    }

    await context.close();
  }

  await browser.close();
  browser = null;

  const summary = summarize(results);

  await fs.writeFile(
    path.join(outDir, "results.json"),
    JSON.stringify({ paths, results, summary }, null, 2),
    "utf8",
  );

  await fs.writeFile(path.join(outDir, "server.log"), serverLogs.join(""), "utf8");

  console.log(
    JSON.stringify(
      {
        checkedAt: summary.checkedAt,
        baseUrl: summary.baseUrl,
        pageCount: summary.pageCount,
        checkCount: summary.checkCount,
        failureCount: summary.failureCount,
        byCategory: summary.byCategory,
        routeRows: summary.routeRows,
        failureIndex: summary.failures.map((failure) => ({
          path: failure.path,
          viewport: failure.viewport,
          category: failure.category,
          status: failure.status,
          h1Count: failure.h1.length,
          overflowCount: failure.overflow.length,
          vagueMapCount: failure.vagueMapLinks.length,
          brokenImageCount: failure.brokenImages.length,
          hasMojibake: failure.hasMojibake,
          hasUndefinedLike: failure.hasUndefinedLike,
          badResponseCount: failure.badResponses.length,
          pageErrorCount: failure.pageErrors.length,
        })),
      },
      null,
      2,
    ),
  );

  if (summary.failureCount > 0) {
    process.exitCode = 1;
  }
} finally {
  if (browser) await browser.close();
  await fs.writeFile(path.join(outDir, "server.log"), serverLogs.join(""), "utf8");
  stopServer(server);
}
