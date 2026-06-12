import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("suvarnabhumi-airport-to-bangkok");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Suvarnabhumi Airport to Bangkok Transfers | Taxi, Van & Bus",
  description:
    route?.seoDescription ??
    "Compare transfer options from Suvarnabhumi Airport to Bangkok. Check taxi, van, bus and city transfer options, pickup details and final partner prices.",
  alternates: {
    canonical: "/routes/suvarnabhumi-airport-to-bangkok",
  },
});

export default function SuvarnabhumiAirportToBangkokPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport city transfer comparison"
      desktopDescription="Compare taxi, van, bus and city transfer options from Suvarnabhumi Airport to Bangkok after landing at BKK. Check airport pickup point, Bangkok drop-off, luggage rules and final partner prices before booking."
      mobileDescription="Compare taxi, van, bus and city transfer options from Suvarnabhumi Airport to Bangkok. Check current partner details, pickup points and luggage rules before booking."
      optionsHeading="Compare Suvarnabhumi Airport to Bangkok transfer options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check your airport pickup point, Bangkok drop-off, luggage allowance and current partner schedule before booking."
    />
  );
}
