import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-samui-to-surat-thani-airport");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Koh Samui to Surat Thani Airport Transfers | Ferry, Bus & Van",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Samui to Surat Thani Airport. Check ferry plus bus, ferry plus van and combined transfer options, island pickup details, ferry crossing, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-samui-to-surat-thani-airport",
  },
};

export default function KohSamuiToSuratThaniAirportPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Island to airport transfer comparison"
      desktopDescription="Compare transfer options from Koh Samui to Surat Thani Airport, including ferry plus bus, ferry plus van, van plus ferry plus bus and combined island-to-airport tickets. Check hotel pickup if included, departure pier, ferry crossing, mainland transfer, airport drop-off, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry, bus and van transfer options from Koh Samui to Surat Thani Airport. Check live schedules, departure pier, ferry crossing, airport drop-off and luggage rules before booking."
      optionsHeading="Compare Koh Samui to Surat Thani Airport transfer options"
      detailsNote="For island-to-airport transfers, allow extra time before your flight. Check hotel pickup if included, Koh Samui departure pier, ferry crossing, mainland transfer, Surat Thani Airport drop-off, luggage allowance, weather conditions and live operator schedule before booking."
    />
  );
}
