import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("patong-beach-to-phuket-airport");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Patong Beach to Phuket Airport Transfers | Bus, Van & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Patong Beach to Phuket Airport. Check airport bus, shared van, private taxi and taxi plus van options, pickup details, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/patong-beach-to-phuket-airport",
  },
});

export default function PatongBeachToPhuketAirportPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Beach to airport transfer comparison"
      desktopDescription="Compare transfer options from Patong Beach to Phuket Airport, including airport bus, shared van, private taxi and taxi plus van combinations. Check hotel pickup area, airport drop-off point, luggage allowance and final partner prices before booking."
      mobileDescription="Compare bus, van and taxi options from Patong Beach to Phuket Airport. Check current schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Patong Beach to Phuket Airport transfer options"
      detailsNote="For airport transfers, allow extra time before your flight. Check your Patong pickup point, Phuket Airport drop-off area, luggage allowance and current operator schedule before booking."
    />
  );
}
