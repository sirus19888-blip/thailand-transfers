import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("phuket-airport-to-kata-karon");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Phuket Airport to Kata and Karon Transfers | Bus, Van & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Phuket Airport to Kata and Karon. Check airport bus, shared van, private taxi and taxi plus van options, pickup details, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/phuket-airport-to-kata-karon",
  },
});

export default function PhuketAirportToKataKaronPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to beach transfer comparison"
      desktopDescription="Compare transfer options from Phuket Airport to Kata and Karon, including airport bus, shared van, private taxi and taxi plus van combinations. Check airport pickup point, hotel drop-off area, luggage allowance and final partner prices before booking."
      mobileDescription="Compare bus, van and taxi options from Phuket Airport to Kata and Karon. Check current schedules, airport pickup points and luggage rules before booking."
      optionsHeading="Compare Phuket Airport to Kata and Karon transfer options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check your airport pickup point, Kata or Karon hotel drop-off area, luggage allowance and current operator schedule before booking."
    />
  );
}
