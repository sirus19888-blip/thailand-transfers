import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-chang-to-suvarnabhumi-airport");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Koh Chang to Suvarnabhumi Airport Transfers | Ferry, Van, Taxi & Flight",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Chang to Suvarnabhumi Airport. Check ferry, van, taxi and flight options, pickup details, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-chang-to-suvarnabhumi-airport",
  },
};

const optionDetailsById = {
  "ferry-van": {
    label: "Airport link",
    operator: "Ferry and van partner operators",
    departures: "Live schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    rating: "4.5",
    reviews: "Partner details",
    pros: ["Simple island-to-airport route", "Good value before flights"],
    cons: ["Needs flight buffer", "Pickup rules vary"],
  },
  "bus-ferry": {
    label: "Best value",
    operator: "Bus and ferry partner operators",
    departures: "Live schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    rating: "4.4",
    reviews: "Partner details",
    pros: ["Budget-friendly airport route", "Ferry leg usually coordinated"],
    cons: ["Longer total travel time", "Less flexible before flights"],
  },
  taxi: {
    label: "Flexible",
    operator: "Private airport transfer",
    departures: "On demand",
    baggage: "Private car",
    image: "/assets/vehicles/mobile/taxi.png",
    rating: "4.8",
    reviews: "Partner details",
    pros: ["More control before a flight", "Better with luggage or family"],
    cons: ["Higher total price", "Ferry timing still matters"],
  },
  flight: {
    label: "Compare all",
    operator: "Flight plus ground transfer",
    departures: "Check dates",
    baggage: "Airline rules",
    image: "/assets/vehicles/mobile/flight-taxi.png",
    rating: "4.3",
    reviews: "Partner details",
    pros: ["Useful for unusual schedules", "Shows wider partner combinations"],
    cons: ["Connection details vary", "Usually needs careful timing"],
  },
};

type KohChangToSuvarnabhumiAirportPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
  }>;
};

export default async function KohChangToSuvarnabhumiAirportPage({
  searchParams,
}: KohChangToSuvarnabhumiAirportPageProps) {
  if (!route) {
    notFound();
  }

  const params = await searchParams;
  const selectedDate = params?.date;
  const passengers = params?.passengers;

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport transfer comparison"
      desktopDescription="Compare transfer options from Koh Chang to Suvarnabhumi Airport, including ferry plus van, bus plus ferry, private taxi and flight combinations. Check whether ferry crossing, hotel pickup, pier transfer, luggage allowance and airport drop-off are included before booking."
      mobileDescription="Compare ferry, van, taxi and flight options from Koh Chang to Suvarnabhumi Airport. Check live schedules, pickup points, ferry details and luggage rules before booking."
      optionsHeading="Compare Koh Chang to Suvarnabhumi Airport transfer options"
      detailsNote="For airport transfers from Koh Chang, allow extra time before your flight. Check whether your ticket includes ferry crossing, hotel pickup, pier transfer, luggage allowance and Suvarnabhumi Airport drop-off."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Koh Chang - BKK"
          summaryLeftTitle="Flight buffer"
          summaryLeftText="Leave extra time"
          summaryRightTitle="Ferry route"
          summaryRightText="Pier timing matters"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/koh-chang-to-suvarnabhumi-airport/details"
          footerNote="Live prices and schedules may change. Leave extra time before flights and check hotel pickup, ferry crossing and airport drop-off rules."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      }
    />
  );
}
