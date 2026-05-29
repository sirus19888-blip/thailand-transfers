import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("surat-thani-airport-to-koh-samui");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Surat Thani Airport to Koh Samui Transfers | Bus, Ferry & Van",
  description:
    route?.seoDescription ??
    "Compare transfer options from Surat Thani Airport to Koh Samui. Check bus plus ferry, van plus ferry and combined transfer options, airport pickup details, ferry crossing, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/surat-thani-airport-to-koh-samui",
  },
};

const optionDetailsById = {
  "bus-ferry": {
    label: "Best value",
    operator: "Airport bus and ferry partners",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Simple airport-to-island ticket", "Good value for most travelers"],
    cons: ["Fixed ferry timing", "Arrival pier can vary by operator"],
  },
  "van-ferry": {
    label: "Smaller ride",
    operator: "Van and ferry partner operators",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Smaller shared transfer", "Useful when bus seats are limited"],
    cons: ["Luggage rules can be stricter", "Pickup point must be checked"],
  },
  "bus-ferry-van": {
    label: "Hotel link",
    operator: "Combined transfer partners",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Can include more of the island connection", "Good for bundled travel"],
    cons: ["More moving parts", "Confirm if hotel drop-off is included"],
  },
  "ferry-van": {
    label: "Compare all",
    operator: "Ferry and van partner operators",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["More partner choices", "Useful for alternative departure times"],
    cons: ["Connection details vary", "Check airport pickup carefully"],
  },
};

type SuratThaniAirportToKohSamuiPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function SuratThaniAirportToKohSamuiPage({
  searchParams,
}: SuratThaniAirportToKohSamuiPageProps) {
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
      badge="Airport to island transfer comparison"
      desktopDescription="Compare transfer options from Surat Thani Airport to Koh Samui, including bus plus ferry, van plus ferry, ferry plus van and combined airport-to-island tickets. Check airport pickup point, pier transfer, ferry crossing, Koh Samui arrival pier, luggage allowance and final partner prices before booking."
      mobileDescription="Compare bus, ferry and van transfer options from Surat Thani Airport to Koh Samui. Check current schedules, airport pickup points, ferry crossing and luggage rules before booking."
      optionsHeading="Compare Surat Thani Airport to Koh Samui transfer options"
      detailsNote="For airport-to-island transfers, allow extra time for baggage claim and possible flight delays. Check your airport pickup point, pier transfer, ferry crossing, Koh Samui arrival pier, hotel drop-off if included, luggage allowance and current operator schedule before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Surat Thani - Koh Samui"
          summaryLeftTitle="Island route data"
          summaryLeftText="Pier transfer included"
          summaryRightTitle="Airport pickup"
          summaryRightText="Check operator desk"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/surat-thani-airport-to-koh-samui/details"
          footerNote="Final prices and schedules may change. Allow extra time after landing and check ferry, pier and hotel drop-off rules."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
