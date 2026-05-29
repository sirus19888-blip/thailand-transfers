import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("suvarnabhumi-airport-to-koh-chang");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Suvarnabhumi Airport to Koh Chang Transfers | Ferry, Van, Bus & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Suvarnabhumi Airport to Koh Chang. Check ferry, van, bus, taxi and flight options, airport pickup details, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/suvarnabhumi-airport-to-koh-chang",
  },
});

const optionDetailsById = {
  "ferry-van": {
    label: "Island link",
    operator: "Ferry and van partner operators",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Direct island routing", "Good balance of price and convenience"],
    cons: ["Includes ferry timing", "Pickup point must be checked"],
  },
  "bus-ferry": {
    label: "Best value",
    operator: "Bus and ferry partner operators",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Budget-friendly airport route", "Ferry leg usually coordinated"],
    cons: ["Longer total travel time", "Less flexible after a delayed flight"],
  },
  taxi: {
    label: "Most flexible",
    operator: "Private airport transfer",
    departures: "On demand",
    baggage: "Private car",
    image: "/assets/vehicles/mobile/taxi.png",
    pros: ["Best with luggage or family", "More control after landing"],
    cons: ["Higher total price", "Ferry and island drop-off details vary"],
  },
  flight: {
    label: "Compare all",
    operator: "Flight plus ground transfer",
    departures: "Check dates",
    baggage: "Airline rules",
    image: "/assets/vehicles/mobile/flight-taxi.png",
    pros: ["Useful for unusual schedules", "Shows wider partner combinations"],
    cons: ["Connection details vary", "Usually needs careful timing"],
  },
};

type SuvarnabhumiAirportToKohChangPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function SuvarnabhumiAirportToKohChangPage({
  searchParams,
}: SuvarnabhumiAirportToKohChangPageProps) {
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
      badge="Airport arrival transfer comparison"
      desktopDescription="Compare transfer options from Suvarnabhumi Airport to Koh Chang, including ferry plus van, bus plus ferry, private taxi and flight combinations. Check airport pickup points, ferry crossing, pier transfer, luggage allowance and Koh Chang hotel drop-off before booking."
      mobileDescription="Compare ferry, van, bus, taxi and flight options from Suvarnabhumi Airport to Koh Chang. Check current schedules, airport pickup details, ferry crossing and luggage rules before booking."
      optionsHeading="Compare Suvarnabhumi Airport to Koh Chang transfer options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Current Ferry Koh Chang guidance shows service from 06:30 to 18:30; check pickup location, ferry crossing, pier transfer, luggage allowance and Koh Chang hotel drop-off before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="BKK - Koh Chang"
          summaryLeftTitle="Island route data"
          summaryLeftText="Ferry timing matters"
          summaryRightTitle="Airport pickup"
          summaryRightText="Check meeting point"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/suvarnabhumi-airport-to-koh-chang/details"
          footerNote="Final prices and schedules may change. Current Ferry Koh Chang guidance shows service from 06:30 to 18:30; check your partner ticket before booking."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
