import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phangan-to-surat-thani-airport");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Koh Phangan to Surat Thani Airport Transfers | Ferry, Bus & Van",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Phangan to Surat Thani Airport. Check ferry, bus, van and combined transfer options, pickup details, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/koh-phangan-to-surat-thani-airport",
  },
});

const optionDetailsById = {
  "ferry-bus": {
    label: "Best value",
    operator: "Ferry and airport bus partners",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Simple island-to-airport ticket", "Good value for most travelers"],
    cons: ["Fixed ferry timing", "Needs flight buffer"],
  },
  "ferry-van": {
    label: "Airport link",
    operator: "Ferry and van partner operators",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Smaller shared transfer", "Good bundled airport connection"],
    cons: ["Pickup point can vary", "Luggage rules need checking"],
  },
  "ferry-taxi": {
    label: "Flexible",
    operator: "Ferry and taxi transfer partners",
    departures: "Check dates",
    baggage: "Private car",
    image: "/assets/vehicles/mobile/taxi.png",
    pros: ["More control before flights", "Better with luggage or family"],
    cons: ["Higher total price", "Still depends on ferry timing"],
  },
};

type KohPhanganToSuratThaniAirportPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function KohPhanganToSuratThaniAirportPage({
  searchParams,
}: KohPhanganToSuratThaniAirportPageProps) {
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
      desktopDescription="Compare combined transfer options from Koh Phangan to Surat Thani Airport, including ferry plus bus, ferry plus van and ferry plus taxi routes. Check departure pier, airport arrival time, luggage allowance and final partner prices before booking."
      mobileDescription="Compare ferry, bus, van and taxi combinations from Koh Phangan to Surat Thani Airport. Check current schedules, pier details and luggage rules before booking."
      optionsHeading="Compare Koh Phangan to Surat Thani Airport transfer options"
      detailsNote="For island-to-airport routes, allow extra time before your flight. Check your departure pier, ferry schedule, airport arrival time, luggage allowance and current operator schedule before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Phangan - Surat Airport"
          summaryLeftTitle="Flight buffer"
          summaryLeftText="Leave extra time"
          summaryRightTitle="Pier details"
          summaryRightText="Check departure pier"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/koh-phangan-to-surat-thani-airport/details"
          footerNote="Final prices and schedules may change. Leave a realistic flight buffer and check ferry, pier and airport drop-off rules."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
