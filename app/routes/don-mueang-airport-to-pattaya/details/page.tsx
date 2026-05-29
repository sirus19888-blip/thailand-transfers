import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { StandardRouteDetailsScreen } from "@/components/StandardRouteDetailsScreen";
import { donMueangPattayaRoute } from "@/data/donMueangPattayaRoute";

export const metadata: Metadata = createPageMetadata({
  title: "Don Mueang Airport to Pattaya Guide | Pickup Tips & FAQ",
  description:
    "Read practical tips for travelling from Don Mueang Airport to Pattaya. Check pickup points, travel times, luggage rules and booking advice.",
  alternates: {
    canonical: "/routes/don-mueang-airport-to-pattaya/details",
  },
});

export default function DonMueangAirportToPattayaDetailsPage() {
  return <StandardRouteDetailsScreen route={donMueangPattayaRoute} />;
}
