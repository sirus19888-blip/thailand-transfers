import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("phuket-to-koh-phi-phi");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Phuket to Koh Phi Phi Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare ferry and speedboat options from Phuket to Koh Phi Phi. Check departure pier, arrival pier, luggage rules, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/phuket-to-koh-phi-phi",
  },
};

export default function PhuketToKohPhiPhiPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Island ferry transfer comparison"
      desktopDescription="Compare ferry, speedboat and combined hotel transfer options from Phuket to Koh Phi Phi. Check departure pier, arrival pier, hotel pickup if included, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Phuket to Koh Phi Phi. Check live schedules, departure pier and luggage rules before booking."
      optionsHeading="Compare Phuket to Koh Phi Phi transfer options"
      detailsNote="For island routes, check the departure pier, arrival pier, hotel pickup if included, luggage allowance and weather-related schedule changes before booking."
    />
  );
}
