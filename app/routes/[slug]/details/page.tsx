import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { StandardRouteDetailsScreen } from "@/components/StandardRouteDetailsScreen";
import { getRoutePageBySlug } from "@/data/routePages";

const standardDetailsSlugs = [
  "pattaya-to-bangkok-airport",
  "hua-hin-to-bangkok",
  "pattaya-to-don-mueang-airport",
  "bangkok-to-hua-hin",
  "don-mueang-airport-to-hua-hin",
  "phuket-airport-to-patong-beach",
  "patong-beach-to-phuket-airport",
  "phuket-airport-to-kata-karon",
  "krabi-airport-to-ao-nang",
  "bangkok-to-chiang-mai",
  "chiang-mai-to-bangkok",
];

const seoBySlug: Record<string, { title: string; description: string }> = {
  "phuket-airport-to-patong-beach": {
    title: "Phuket to Patong Airport Transfer Guide",
    description:
      "Use the Phuket to Patong airport transfer guide for Smart Bus stop notes, taxi timing, luggage, late arrivals and hotel drop-off.",
  },
  "patong-beach-to-phuket-airport": {
    title: "Patong to Phuket Airport Transfer Guide",
    description:
      "Plan Patong to Phuket Airport transfer by taxi, bus or van. Check pickup point, traffic risk, luggage and buffer before check-in.",
  },
  "phuket-airport-to-kata-karon": {
    title: "Phuket Airport to Kata & Karon Transfer Guide",
    description:
      "Use the Phuket Airport to Kata and Karon guide for bus stop context, van/taxi bands, hotel drop-off and late-arrival choices.",
  },
};

type RouteDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    option?: string;
  }>;
};

export function generateStaticParams() {
  return standardDetailsSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RouteDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoutePageBySlug(slug);

  if (!route || !standardDetailsSlugs.includes(route.slug)) {
    return {
      title: "Route details",
    };
  }

  const seo = seoBySlug[route.slug] ?? {
    title: `${route.from} to ${route.to} Guide | Pickup Tips & FAQ`,
    description: `Read practical tips for travelling from ${route.from} to ${route.to}. Check pickup points, timing, luggage rules and booking advice.`,
  };

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/routes/${route.slug}/details`,
    },
  });
}

export default async function RouteDetailsPage({
  params,
  searchParams,
}: RouteDetailsPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const route = getRoutePageBySlug(slug);

  if (!route || !standardDetailsSlugs.includes(route.slug)) {
    notFound();
  }

  return (
    <StandardRouteDetailsScreen
      route={route}
      selectedOptionId={query?.option}
    />
  );
}
