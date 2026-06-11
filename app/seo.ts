import type { Metadata } from "next";
import { siteName, siteUrl } from "./site";

const defaultSocialImage = "/assets/hero/hero-og.jpg";

function titleToString(title: Metadata["title"]) {
  if (typeof title === "string") {
    return title;
  }

  if (title && typeof title === "object") {
    if ("absolute" in title && title.absolute) {
      return String(title.absolute);
    }

    if ("default" in title && title.default) {
      return String(title.default);
    }
  }

  return siteName;
}

function descriptionToString(description: Metadata["description"]) {
  return typeof description === "string"
    ? description
    : "Independent Thailand transfer advice, route checks and partner booking guidance.";
}

function canonicalToPath(canonical: unknown) {
  if (!canonical) {
    return "/";
  }

  const value = String(canonical);

  if (value.startsWith(siteUrl)) {
    return value.slice(siteUrl.length) || "/";
  }

  if (value.startsWith("/")) {
    return value;
  }

  return `/${value}`;
}

function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

function absoluteSocialImageUrl(path: string) {
  return `${siteUrl}${path}`;
}

function formatSocialTitle(title: string) {
  if (
    title === siteName ||
    title.startsWith(`${siteName} |`) ||
    title.endsWith(`| ${siteName}`)
  ) {
    return title;
  }

  return `${title} | ${siteName}`;
}

function socialImageForPath(path: string) {
  const routeSlug = path.match(/^\/routes\/([^/]+)/)?.[1];

  if (routeSlug) {
    return `/assets/routes/${routeSlug}.png`;
  }

  if (path.startsWith("/travel-extras/thailand-tourist-sim")) {
    return "/assets/promo/sim-card.png";
  }

  if (path.startsWith("/guides/bkk-airport-pickup-level-1-gate-8")) {
    return "/assets/steps/immigration.png";
  }

  return defaultSocialImage;
}

export function createPageMetadata(metadata: Metadata): Metadata {
  const path = canonicalToPath(metadata.alternates?.canonical);
  const title = titleToString(metadata.title);
  const description = descriptionToString(metadata.description);
  const socialTitle = formatSocialTitle(title);
  const imageUrl = absoluteSocialImageUrl(socialImageForPath(path));
  const imageAlt = `${socialTitle} preview`;

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "website",
      siteName,
      url: absoluteUrl(path),
      title: socialTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}
