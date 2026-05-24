import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("pattaya-to-bangkok-airport");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Pattaya to Bangkok Airport Transfers | Taxi, Van & Bus",
  description:
    route?.seoDescription ??
    "Compare transfer options from Pattaya to Bangkok Airport. Check taxi, van and bus options, pickup details, estimated travel times and live partner prices.",
  alternates: {
    canonical: "/routes/pattaya-to-bangkok-airport",
  },
};

export default function PattayaToBangkokAirportPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport transfer comparison"
      desktopDescription="Compare transfer options from Pattaya to Bangkok Airport, including private taxi, shared van and bus connections. Check pickup points, airport drop-off, luggage allowance and live partner prices before booking."
      mobileDescription="Compare taxi, van and bus options from Pattaya to Bangkok Airport. Check live schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Pattaya to Bangkok Airport transfer options"
      detailsNote="For airport transfers, allow extra time before your flight. Check your Pattaya pickup point, airport drop-off terminal, luggage allowance and live operator schedule before booking."
    />
  );
}
