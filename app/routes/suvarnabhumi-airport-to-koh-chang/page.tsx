import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("suvarnabhumi-airport-to-koh-chang");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Suvarnabhumi Airport to Koh Chang Transfers | Ferry, Van, Bus & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Suvarnabhumi Airport to Koh Chang. Check ferry, van, bus, taxi and flight options, airport pickup details, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/suvarnabhumi-airport-to-koh-chang",
  },
};

const optionDetailsById = {
  "ferry-van": {
    label: "Island link",
    operator: "Ferry and van partner operators",
    departures: "Live schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/van-ferry.png",
    rating: "4.5",
    reviews: "Partner details",
    pros: ["Direct island routing", "Good balance of price and convenience"],
    cons: ["Includes ferry timing", "Pickup point must be checked"],
  },
  "bus-ferry": {
    label: "Best value",
    operator: "Bus and ferry partner operators",
    departures: "Live schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/bus-ferry.png",
    rating: "4.4",
    reviews: "Partner details",
    pros: ["Budget-friendly airport route", "Ferry leg usually coordinated"],
    cons: ["Longer total travel time", "Less flexible after a delayed flight"],
  },
  taxi: {
    label: "Most flexible",
    operator: "Private airport transfer",
    departures: "On demand",
    baggage: "Private car",
    image: "/assets/vehicles/taxi.png",
    rating: "4.8",
    reviews: "Partner details",
    pros: ["Best with luggage or family", "More control after landing"],
    cons: ["Higher total price", "Ferry and island drop-off details vary"],
  },
  flight: {
    label: "Compare all",
    operator: "Flight plus ground transfer",
    departures: "Check dates",
    baggage: "Airline rules",
    image: "/assets/vehicles/flight-taxi.png",
    rating: "4.3",
    reviews: "Partner details",
    pros: ["Useful for unusual schedules", "Shows wider partner combinations"],
    cons: ["Connection details vary", "Usually needs careful timing"],
  },
};

type SuvarnabhumiAirportToKohChangPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
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

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport arrival transfer comparison"
      desktopDescription="Compare transfer options from Suvarnabhumi Airport to Koh Chang, including ferry plus van, bus plus ferry, private taxi and flight combinations. Check airport pickup points, ferry crossing, pier transfer, luggage allowance and Koh Chang hotel drop-off before booking."
      mobileDescription="Compare ferry, van, bus, taxi and flight options from Suvarnabhumi Airport to Koh Chang. Check live schedules, airport pickup details, ferry crossing and luggage rules before booking."
      optionsHeading="Compare Suvarnabhumi Airport to Koh Chang transfer options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check pickup location, ferry crossing, pier transfer, luggage allowance, Koh Chang hotel drop-off and the timing of the last ferry before booking."
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
          footerNote="Live prices and schedules may change. Allow extra time after landing and check the last ferry before booking."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      }
    />
  );
}
