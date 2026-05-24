import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

export default function KohChangToSuvarnabhumiAirportPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport transfer comparison"
      desktopDescription="Compare transfer options from Koh Chang to Suvarnabhumi Airport, including ferry plus van, bus plus ferry, private taxi and flight combinations. Check whether ferry crossing, hotel pickup, pier transfer, luggage allowance and airport drop-off are included before booking."
      mobileDescription="Compare ferry, van, taxi and flight options from Koh Chang to Suvarnabhumi Airport. Check live schedules, pickup points, ferry details and luggage rules before booking."
      optionsHeading="Compare Koh Chang to Suvarnabhumi Airport transfer options"
      detailsNote="For airport transfers from Koh Chang, allow extra time before your flight. Check whether your ticket includes ferry crossing, hotel pickup, pier transfer, luggage allowance and Suvarnabhumi Airport drop-off."
    />
  );
}
