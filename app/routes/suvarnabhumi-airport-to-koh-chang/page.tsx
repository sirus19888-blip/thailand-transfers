import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

export default function SuvarnabhumiAirportToKohChangPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport arrival transfer comparison"
      desktopDescription="Compare transfer options from Suvarnabhumi Airport to Koh Chang, including ferry plus van, bus plus ferry, private taxi and flight combinations. Check airport pickup points, ferry crossing, pier transfer, luggage allowance and Koh Chang hotel drop-off before booking."
      mobileDescription="Compare ferry, van, bus, taxi and flight options from Suvarnabhumi Airport to Koh Chang. Check live schedules, airport pickup details, ferry crossing and luggage rules before booking."
      optionsHeading="Compare Suvarnabhumi Airport to Koh Chang transfer options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check pickup location, ferry crossing, pier transfer, luggage allowance, Koh Chang hotel drop-off and the timing of the last ferry before booking."
    />
  );
}
