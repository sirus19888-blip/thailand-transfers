import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("phuket-airport-to-patong-beach");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Phuket to Patong Beach: Airport Bus & Taxi",
  description:
    route?.seoDescription ??
    "Compare Phuket to Patong Beach airport bus, van and taxi options. Checked local bands start from THB125; review pickup points and live prices.",
  alternates: {
    canonical: "/routes/phuket-airport-to-patong-beach",
  },
});

export default function PhuketAirportToPatongBeachPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to beach transfer comparison"
      desktopDescription="Compare Phuket to Patong Beach airport transfer options, including airport bus, shared van, private taxi and taxi plus van combinations. Check airport pickup point, hotel drop-off area, luggage allowance and live partner prices before booking."
      mobileDescription="Compare bus, van and taxi options from Phuket to Patong Beach. Check current schedules, airport pickup points and luggage rules before booking."
      optionsHeading="Compare Phuket to Patong Beach bus and taxi options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check your airport pickup point, Patong hotel drop-off area, luggage allowance and current operator schedule before booking."
    />
  );
}
