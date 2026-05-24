import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("suvarnabhumi-airport-to-hua-hin");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Suvarnabhumi Airport to Hua Hin Transfers | Bus, Taxi & Van",
  description:
    route?.seoDescription ??
    "Compare transfer options from Suvarnabhumi Airport to Hua Hin. Check bus, private taxi, bus plus van and flight transfer options, airport pickup details, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/suvarnabhumi-airport-to-hua-hin",
  },
};

export default function SuvarnabhumiAirportToHuaHinPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to beach transfer comparison"
      desktopDescription="Compare transfer options from Suvarnabhumi Airport to Hua Hin, including airport bus, private taxi, bus plus van and flight transfer combinations. Check airport pickup point, Hua Hin drop-off location, luggage allowance and live partner prices before booking."
      mobileDescription="Compare bus, taxi, bus plus van and flight transfer options from Suvarnabhumi Airport to Hua Hin. Check live schedules, airport pickup points and luggage rules before booking."
      optionsHeading="Compare Suvarnabhumi Airport to Hua Hin transfer options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check your airport pickup point, Hua Hin drop-off location, luggage allowance and live operator schedule before booking."
    />
  );
}
