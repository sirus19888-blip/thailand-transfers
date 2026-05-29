import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("don-mueang-airport-to-hua-hin");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Don Mueang Airport to Hua Hin Transfers | Train, Bus, Van & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Don Mueang Airport to Hua Hin. Check train, bus, bus plus van and private taxi options, airport pickup details, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/don-mueang-airport-to-hua-hin",
  },
});

export default function DonMueangAirportToHuaHinPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to beach transfer comparison"
      desktopDescription="Compare transfer options from Don Mueang Airport to Hua Hin, including train, bus, bus plus van and private taxi. Check airport pickup point, station or terminal details, Hua Hin drop-off location, luggage allowance and final partner prices before booking."
      mobileDescription="Compare train, bus, bus plus van and taxi options from Don Mueang Airport to Hua Hin. Check current schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Don Mueang Airport to Hua Hin transfer options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check your airport pickup point, departure station or terminal, Hua Hin drop-off location, luggage allowance and current operator schedule before booking."
    />
  );
}
