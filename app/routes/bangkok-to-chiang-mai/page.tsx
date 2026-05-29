import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("bangkok-to-chiang-mai");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Bangkok to Chiang Mai Transfers | Train, Bus & Flight",
  description:
    route?.seoDescription ??
    "Compare transfer options from Bangkok to Chiang Mai. Check train, bus and flight options, departure points, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/bangkok-to-chiang-mai",
  },
};

export default function BangkokToChiangMaiPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Long-distance route comparison"
      desktopDescription="Compare long-distance travel options from Bangkok to Chiang Mai, including train, bus and flight connections. Check departure point, travel time, baggage rules, overnight options and final partner prices before booking."
      mobileDescription="Compare train, bus and flight options from Bangkok to Chiang Mai. Check current schedules, departure points and baggage rules before booking."
      optionsHeading="Compare Bangkok to Chiang Mai transfer options"
      detailsNote="For long-distance routes, check your exact departure terminal or station, arrival point, baggage allowance, overnight travel details and current operator schedule before booking."
    />
  );
}
