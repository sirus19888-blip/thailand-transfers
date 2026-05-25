import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-krabi");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Koh Phi Phi to Krabi Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare ferry and speedboat options from Koh Phi Phi to Krabi. Check departure pier, arrival pier, luggage rules, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-krabi",
  },
};

export default function KohPhiPhiToKrabiPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Island ferry transfer comparison"
      desktopDescription="Compare ferry, speedboat and onward transfer options from Koh Phi Phi to Krabi. Check departure pier, arrival pier, Krabi drop-off area if included, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Koh Phi Phi to Krabi. Check live schedules, departure pier and luggage rules before booking."
      optionsHeading="Compare Koh Phi Phi to Krabi transfer options"
      detailsNote="For island routes, check the departure pier, arrival pier, onward transfer if included, luggage allowance and weather-related schedule changes before booking."
    />
  );
}
