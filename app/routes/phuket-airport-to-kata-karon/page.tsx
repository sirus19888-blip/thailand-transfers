import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("phuket-airport-to-kata-karon");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Phuket Airport to Kata & Karon Bus & Taxi",
  description:
    route?.seoDescription ??
    "Compare Phuket Airport to Kata and Karon bus, van and taxi options. Check Smart Bus context, hotel drop-off, luggage rules and live fares.",
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
      desktopDescription="Compare Phuket Airport to Kata and Karon bus, van and taxi options, including airport bus, shared van, private taxi and taxi plus van combinations. Check airport pickup point, hotel drop-off area, luggage allowance and live partner prices before booking."
      mobileDescription="Compare bus, van and taxi options from Phuket Airport to Kata and Karon. Check current schedules, airport pickup points and luggage rules before booking."
      optionsHeading="Compare Phuket Airport to Kata and Karon bus and taxi options"
      detailsNote="For airport arrivals, allow extra time for immigration, baggage claim and possible flight delays. Check your airport pickup point, Kata or Karon hotel drop-off area, luggage allowance and current operator schedule before booking."
    />
  );
}
