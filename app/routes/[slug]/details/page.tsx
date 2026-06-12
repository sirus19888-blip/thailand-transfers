import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { StandardRouteDetailsScreen } from "@/components/StandardRouteDetailsScreen";
import { getRoutePageBySlug } from "@/data/routePages";

const standardDetailsSlugs = [
  "pattaya-to-bangkok-airport",
  "hua-hin-to-bangkok",
  "pattaya-to-don-mueang-airport",
  "suvarnabhumi-airport-to-bangkok",
  "bangkok-to-hua-hin",
  "don-mueang-airport-to-hua-hin",
  "phuket-airport-to-patong-beach",
  "patong-beach-to-phuket-airport",
  "phuket-airport-to-kata-karon",
  "krabi-airport-to-ao-nang",
  "bangkok-to-chiang-mai",
  "chiang-mai-to-bangkok",
];

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

  return createPageMetadata({
    title: `${route.from} to ${route.to} Guide | Pickup Tips & FAQ`,
    description: `Read practical tips for travelling from ${route.from} to ${route.to}. Check pickup points, timing, luggage rules and booking advice.`,
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
