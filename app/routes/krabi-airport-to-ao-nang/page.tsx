import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("krabi-airport-to-ao-nang");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Krabi Airport to Ao Nang Transfers | Bus, Van & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Krabi Airport to Ao Nang. Check airport bus, shared van, private taxi, pickup details, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/krabi-airport-to-ao-nang",
  },
};

export default function KrabiAirportToAoNangPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to beach transfer comparison"
      desktopDescription="Compare transfer options from Krabi Airport to Ao Nang, including airport bus, shared van, private taxi and taxi plus van combinations. Check airport pickup point, Ao Nang hotel drop-off area, luggage allowance and final partner prices before booking."
      mobileDescription="Compare bus, van and taxi options from Krabi Airport to Ao Nang. Check current schedules, airport pickup points and luggage rules before booking."
      optionsHeading="Compare Krabi Airport to Ao Nang transfer options"
      detailsNote="For airport arrivals, allow extra time for baggage claim and possible flight delays. Check your airport pickup point, Ao Nang hotel drop-off area, luggage allowance and current operator schedule before booking."
    />
  );
}
