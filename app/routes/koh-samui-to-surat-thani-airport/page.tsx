import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-samui-to-surat-thani-airport");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Koh Samui to Surat Thani Airport Ferry & Bus",
  description:
    route?.seoDescription ??
    "Compare Koh Samui to Surat Thani Airport ferry plus bus or van tickets. Check island pickup, mainland transfer, weather risk and flight buffer.",
  alternates: {
    canonical: "/routes/koh-samui-to-surat-thani-airport",
  },
});

const optionDetailsById = {
  "ferry-bus": {
    label: "Best value",
    operator: "Ferry and airport bus partners",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Simple island-to-airport ticket", "Good value before a flight"],
    cons: ["Fixed ferry timing", "Needs flight buffer"],
  },
  "ferry-van": {
    label: "Airport link",
    operator: "Ferry and van partner operators",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Smaller shared transfer", "Can include more pickup coverage"],
    cons: ["Pickup area can vary", "Luggage rules need checking"],
  },
  "van-ferry-bus": {
    label: "Bundled",
    operator: "Combined island transfer partners",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["More complete island-to-airport chain", "Useful with hotel pickup"],
    cons: ["More moving parts", "Connection details vary"],
  },
  "bus-ferry-van": {
    label: "Compare all",
    operator: "Combined partner operators",
    departures: "Check dates",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Shows wider partner options", "Useful for unusual departure times"],
    cons: ["Route details vary", "Check airport arrival time carefully"],
  },
};

type KohSamuiToSuratThaniAirportPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function KohSamuiToSuratThaniAirportPage({
  searchParams,
}: KohSamuiToSuratThaniAirportPageProps) {
  if (!route) {
    notFound();
  }

  const params = await searchParams;
  const selectedDate = params?.date;
  const passengers = params?.passengers;
  const arrivalTime = params?.arrival_time;

  return (
    <RoutePageTemplate
      route={route}
      badge="Island to airport transfer comparison"
      desktopDescription="Compare Koh Samui to Surat Thani Airport ferry transfer options, including ferry plus bus, ferry plus van, van plus ferry plus bus and combined island-to-airport tickets. Check hotel pickup if included, departure pier, ferry crossing, mainland transfer, airport drop-off, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry, bus and van transfer options from Koh Samui to Surat Thani Airport. Check current schedules, departure pier, ferry crossing, airport drop-off and luggage rules before booking."
      optionsHeading="Compare Koh Samui to Surat Thani Airport ferry options"
      detailsNote="For island-to-airport transfers, allow extra time before your flight. Check hotel pickup if included, Koh Samui departure pier, ferry crossing, mainland transfer, Surat Thani Airport drop-off, luggage allowance, weather conditions and current operator schedule before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Samui - Surat Airport"
          summaryLeftTitle="Flight buffer"
          summaryLeftText="Leave extra time"
          summaryRightTitle="Ferry chain"
          summaryRightText="Pier plus road transfer"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/koh-samui-to-surat-thani-airport/details"
          footerNote="Final prices and schedules may change. Leave extra time before flights and check ferry, pier and airport drop-off rules."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
