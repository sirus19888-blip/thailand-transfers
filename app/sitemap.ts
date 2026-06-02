import type { MetadataRoute } from "next";
import { routePages } from "@/data/routePages";
import { legalLinks } from "@/data/legalPages";
import { siteUrl } from "./site";

const specialRouteSlugs = [
  "bangkok-airport-to-pattaya",
  "don-mueang-airport-to-pattaya",
];

const highValueSeoPaths = [
  "/routes/bangkok-airport-to-pattaya/bus",
  "/routes/bangkok-airport-to-pattaya/taxi",
  "/routes/bangkok-airport-to-pattaya/late-arrival",
  "/routes/bangkok-airport-to-pattaya/with-luggage",
  "/guides/bkk-airport-pickup-level-1-gate-8",
];

const contentLastModified = "2026-05-29";

function sitemapEntry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified: contentLastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routeSlugs = [
    ...specialRouteSlugs,
    ...routePages.map((route) => route.slug),
  ];

  return [
    sitemapEntry("/", "weekly", 1),
    sitemapEntry("/routes", "weekly", 0.9),
    sitemapEntry("/guides", "weekly", 0.75),
    ...highValueSeoPaths.map((path) =>
      sitemapEntry(path, "monthly", 0.65),
    ),
    ...legalLinks.map((link) =>
      sitemapEntry(link.href, "monthly", 0.4),
    ),
    sitemapEntry(
      "/travel-extras/thailand-tourist-sim",
      "monthly",
      0.5,
    ),
    sitemapEntry(
      "/travel-extras/hotel-transfer",
      "monthly",
      0.55,
    ),
    ...routeSlugs.map((slug) =>
      sitemapEntry(`/routes/${slug}`, "weekly", 0.85),
    ),
    ...routeSlugs.map((slug) =>
      sitemapEntry(`/routes/${slug}/details`, "monthly", 0.7),
    ),
  ];
}
