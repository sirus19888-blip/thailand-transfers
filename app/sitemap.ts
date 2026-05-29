import type { MetadataRoute } from "next";
import { routePages } from "@/data/routePages";
import { legalLinks } from "@/data/legalPages";
import { siteUrl } from "./site";

const specialRouteSlugs = [
  "bangkok-airport-to-pattaya",
  "don-mueang-airport-to-pattaya",
];

function sitemapEntry(
  path: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routeSlugs = [
    ...specialRouteSlugs,
    ...routePages.map((route) => route.slug),
  ];

  return [
    sitemapEntry("/", lastModified, "weekly", 1),
    sitemapEntry("/routes", lastModified, "weekly", 0.9),
    sitemapEntry("/guides", lastModified, "weekly", 0.75),
    ...legalLinks.map((link) =>
      sitemapEntry(link.href, lastModified, "monthly", 0.4),
    ),
    sitemapEntry(
      "/travel-extras/thailand-tourist-sim",
      lastModified,
      "monthly",
      0.5,
    ),
    ...routeSlugs.map((slug) =>
      sitemapEntry(`/routes/${slug}`, lastModified, "weekly", 0.85),
    ),
    ...routeSlugs.map((slug) =>
      sitemapEntry(`/routes/${slug}/details`, lastModified, "monthly", 0.7),
    ),
  ];
}
