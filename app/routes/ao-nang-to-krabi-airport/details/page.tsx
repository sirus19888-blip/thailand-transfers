import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardRouteDetailsScreen } from "@/components/StandardRouteDetailsScreen";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("ao-nang-to-krabi-airport");

export const metadata: Metadata = {
  title: "Ao Nang to Krabi Airport Pickup Guide | Timing, Luggage & FAQ",
  description:
    "Read practical tips for travelling from Ao Nang to Krabi Airport. Check pickup points, timing, luggage rules and booking advice.",
  alternates: {
    canonical: "/routes/ao-nang-to-krabi-airport/details",
  },
};

export default function AoNangToKrabiAirportDetailsPage() {
  if (!route) {
    notFound();
  }

  return <StandardRouteDetailsScreen route={route} />;
}
