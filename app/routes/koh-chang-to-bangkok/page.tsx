import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-chang-to-bangkok");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Koh Chang to Bangkok Transfers | Ferry, Van, Bus & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Chang to Bangkok. Check ferry, van, bus and private taxi options, pickup details, estimated travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-chang-to-bangkok",
  },
};

export default function KohChangToBangkokPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Island transfer comparison"
      desktopDescription="Compare transfer options from Koh Chang to Bangkok, including ferry plus van, ferry plus bus, shared van and private taxi. Check whether ferry crossing, hotel pickup, pier transfer and Bangkok drop-off are included before booking."
      mobileDescription="Compare ferry, van, bus and taxi options from Koh Chang to Bangkok. Check live schedules, ferry details, pickup points and luggage rules before booking."
      optionsHeading="Compare Koh Chang to Bangkok transfer options"
      detailsNote="For island routes, check whether your ticket includes the ferry crossing, hotel pickup, pier transfer, luggage allowance and Bangkok drop-off point. Allow extra time if you are connecting to a flight."
    />
  );
}
