import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("surat-thani-airport-to-koh-phangan");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Surat Thani to Koh Phangan Ferry & Bus",
  description:
    route?.seoDescription ??
    "Compare Surat Thani to Koh Phangan ferry plus bus, van or taxi tickets from the airport. Check Don Sak to Thong Sala timing and live prices.",
  alternates: {
    canonical: "/routes/surat-thani-airport-to-koh-phangan",
  },
});

const optionDetailsById = {
  "bus-ferry": {
    label: "Best value",
    operator: "Airport bus and ferry partners",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Simple airport-to-island ticket", "Good for budget travelers"],
    cons: ["Longer total travel time", "Fixed ferry timing"],
  },
  "van-ferry": {
    label: "Island link",
    operator: "Van and ferry partner operators",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Smaller shared transfer", "Good bundled route option"],
    cons: ["Pickup point can vary", "Luggage rules need checking"],
  },
  "taxi-ferry": {
    label: "Flexible",
    operator: "Taxi and ferry transfer partners",
    departures: "Check dates",
    baggage: "Private car",
    image: "/assets/vehicles/mobile/taxi.png",
    pros: ["More control after landing", "Better with luggage or family"],
    cons: ["Higher total price", "Ferry details still matter"],
  },
};

type SuratThaniAirportToKohPhanganPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function SuratThaniAirportToKohPhanganPage({
  searchParams,
}: SuratThaniAirportToKohPhanganPageProps) {
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
      desktopDescription="Compare Surat Thani to Koh Phangan ferry transfer options from the airport, including bus plus ferry, van plus ferry and taxi plus ferry routes. Check airport pickup point, Don Sak transfer, Thong Sala arrival, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry, bus, van and taxi combinations from Surat Thani to Koh Phangan. Check current schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Surat Thani to Koh Phangan ferry options"
      detailsNote="For airport-to-island routes, allow extra time for baggage claim, pier transfer and ferry boarding. Check your airport pickup point, departure pier, arrival pier, luggage allowance and current operator schedule before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Surat Thani - Phangan"
          summaryLeftTitle="Island route data"
          summaryLeftText="Ferry timing matters"
          summaryRightTitle="Airport pickup"
          summaryRightText="Check meeting point"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/surat-thani-airport-to-koh-phangan/details"
          footerNote="Final prices and schedules may change. Allow extra time after landing and check pier, ferry and hotel transfer rules."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
