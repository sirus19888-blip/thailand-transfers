import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-phuket");

export const metadata: Metadata = {
  title: route?.seoTitle ?? "Koh Phi Phi to Phuket Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Phi Phi to Phuket. Check ferry and speedboat options, pickup details, estimated travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-phuket",
  },
};

export default function KohPhiPhiToPhuketPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Island transfer comparison"
      desktopDescription="Compare transfer options from Koh Phi Phi to Phuket, including ferry and speedboat services. Check departure pier, arrival pier, luggage rules and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Koh Phi Phi to Phuket. Check live schedules, pier details and luggage rules before booking."
      optionsHeading="Compare Koh Phi Phi to Phuket transfer options"
      detailsNote="For island routes, check your departure pier, Phuket arrival pier, luggage allowance, weather conditions and live operator schedule before booking."
    />
  );
}
