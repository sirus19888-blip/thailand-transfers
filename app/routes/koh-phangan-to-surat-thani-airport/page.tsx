import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phangan-to-surat-thani-airport");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Koh Phangan to Surat Thani Airport Transfers | Ferry, Bus & Van",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Phangan to Surat Thani Airport. Check ferry, bus, van and combined transfer options, pickup details, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-phangan-to-surat-thani-airport",
  },
};

export default function KohPhanganToSuratThaniAirportPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Island to airport transfer comparison"
      desktopDescription="Compare combined transfer options from Koh Phangan to Surat Thani Airport, including ferry plus bus, ferry plus van and ferry plus taxi routes. Check departure pier, airport arrival time, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry, bus, van and taxi combinations from Koh Phangan to Surat Thani Airport. Check live schedules, pier details and luggage rules before booking."
      optionsHeading="Compare Koh Phangan to Surat Thani Airport transfer options"
      detailsNote="For island-to-airport routes, allow extra time before your flight. Check your departure pier, ferry schedule, airport arrival time, luggage allowance and live operator schedule before booking."
    />
  );
}
