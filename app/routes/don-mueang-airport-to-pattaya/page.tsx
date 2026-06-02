import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { DesktopPersonalizedTripSummary } from "@/components/DesktopPersonalizedTripSummary";
import { donMueangPattayaRoute } from "@/data/donMueangPattayaRoute";

export const metadata: Metadata = createPageMetadata({
  title: "Don Mueang Airport to Pattaya Transfers | Taxi, Bus & Van",
  description:
    "Compare transfer options from Don Mueang Airport (DMK) to Pattaya. Check taxi, bus and van choices, estimated travel times and booking options.",
  alternates: {
    canonical: "/routes/don-mueang-airport-to-pattaya",
  },
});

type DonMueangAirportToPattayaPageProps = {
  searchParams?: Promise<{
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function DonMueangAirportToPattayaPage({
  searchParams,
}: DonMueangAirportToPattayaPageProps) {
  const params = await searchParams;
  const passengers = params?.passengers;
  const arrivalTime = params?.arrival_time;

  return (
    <RoutePageTemplate
      route={donMueangPattayaRoute}
      badge="Airport transfer comparison"
      desktopDescription="Compare transfer options from Don Mueang Airport (DMK) to Pattaya, including private taxi, shared van and combined bus options depending on the operator and travel date."
      optionsHeading="Compare DMK to Pattaya transfer options"
      detailsNote="Prices, pickup points and availability can change. Always check the partner offer, vehicle rules and pickup instruction before booking."
      desktopAfterHero={
        <DesktopPersonalizedTripSummary
          route={donMueangPattayaRoute}
          arrivalTime={arrivalTime}
          passengers={passengers}
        />
      }
    />
  );
}
