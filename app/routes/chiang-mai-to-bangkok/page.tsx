import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("chiang-mai-to-bangkok");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Chiang Mai to Bangkok Transfers | Train, Bus & Flight",
  description:
    route?.seoDescription ??
    "Compare transfer options from Chiang Mai to Bangkok. Check train, bus and flight options, departure points, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/chiang-mai-to-bangkok",
  },
};

export default function ChiangMaiToBangkokPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Long-distance route comparison"
      desktopDescription="Compare long-distance travel options from Chiang Mai to Bangkok, including train, bus and flight connections. Check departure point, travel time, baggage rules, overnight options and live partner prices before booking."
      mobileDescription="Compare train, bus and flight options from Chiang Mai to Bangkok. Check live schedules, departure points and baggage rules before booking."
      optionsHeading="Compare Chiang Mai to Bangkok transfer options"
      detailsNote="For long-distance routes, check your exact departure terminal or station, arrival point, baggage allowance, overnight travel details and live operator schedule before booking."
    />
  );
}
