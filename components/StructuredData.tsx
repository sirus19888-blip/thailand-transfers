import type { RoutePageData } from "@/data/routePages";
import { siteName, siteUrl } from "@/app/site";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function GlobalStructuredData() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
          description:
            "Independent Thailand transfer route guide with pickup, luggage, safety and partner booking information.",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: siteUrl,
          inLanguage: "en",
        }}
      />
    </>
  );
}

export function RouteStructuredData({ route }: { route: RoutePageData }) {
  const routeUrl = `${siteUrl}/routes/${route.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Routes",
              item: `${siteUrl}/routes`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: route.title,
              item: routeUrl,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${route.from} to ${route.to} transfer options`,
          itemListElement: route.options.map((option, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: option.name,
            description: `${option.duration}. ${option.bestFor}.`,
            url: routeUrl,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: route.title,
          description: route.seoDescription,
          inLanguage: "en",
          mainEntityOfPage: routeUrl,
          publisher: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
          },
        }}
      />
    </>
  );
}
