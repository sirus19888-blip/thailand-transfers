import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("surat-thani-airport-to-koh-phangan");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Surat Thani Airport to Koh Phangan Transfers | Bus, Van & Ferry",
  description:
    route?.seoDescription ??
    "Compare transfer options from Surat Thani Airport to Koh Phangan. Check bus, van, ferry and combined transfer options, pickup details, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/surat-thani-airport-to-koh-phangan",
  },
};

export default function SuratThaniAirportToKohPhanganPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to island transfer comparison"
      desktopDescription="Compare combined transfer options from Surat Thani Airport to Koh Phangan, including bus plus ferry, van plus ferry and taxi plus ferry routes. Check airport pickup point, departure pier, arrival pier, luggage allowance and live partner prices before booking."
      mobileDescription="Compare bus, van, taxi and ferry combinations from Surat Thani Airport to Koh Phangan. Check live schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Surat Thani Airport to Koh Phangan transfer options"
      detailsNote="For airport-to-island routes, allow extra time for baggage claim, pier transfer and ferry boarding. Check your airport pickup point, departure pier, arrival pier, luggage allowance and live operator schedule before booking."
    />
  );
}
