import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("surat-thani-airport-to-koh-samui");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Surat Thani Airport to Koh Samui Transfers | Bus, Ferry & Van",
  description:
    route?.seoDescription ??
    "Compare transfer options from Surat Thani Airport to Koh Samui. Check bus plus ferry, van plus ferry and combined transfer options, airport pickup details, ferry crossing, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/surat-thani-airport-to-koh-samui",
  },
};

export default function SuratThaniAirportToKohSamuiPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to island transfer comparison"
      desktopDescription="Compare transfer options from Surat Thani Airport to Koh Samui, including bus plus ferry, van plus ferry, ferry plus van and combined airport-to-island tickets. Check airport pickup point, pier transfer, ferry crossing, Koh Samui arrival pier, luggage allowance and live partner prices before booking."
      mobileDescription="Compare bus, ferry and van transfer options from Surat Thani Airport to Koh Samui. Check live schedules, airport pickup points, ferry crossing and luggage rules before booking."
      optionsHeading="Compare Surat Thani Airport to Koh Samui transfer options"
      detailsNote="For airport-to-island transfers, allow extra time for baggage claim and possible flight delays. Check your airport pickup point, pier transfer, ferry crossing, Koh Samui arrival pier, hotel drop-off if included, luggage allowance and live operator schedule before booking."
    />
  );
}
