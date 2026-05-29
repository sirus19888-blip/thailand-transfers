import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("hua-hin-to-bangkok");

export const metadata: Metadata = createPageMetadata({
  title: route?.seoTitle ?? "Hua Hin to Bangkok Transfers | Van, Bus, Train & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Hua Hin to Bangkok. Check van, bus, train and private taxi options, pickup details, estimated travel times and final partner prices.",
  alternates: {
    canonical: "/routes/hua-hin-to-bangkok",
  },
});

export default function HuaHinToBangkokPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="Return transfer comparison"
      desktopDescription="Compare transfer options from Hua Hin to Bangkok, including van, bus, train and private taxi. Check pickup points, Bangkok drop-off areas, luggage allowance and final partner prices before booking."
      mobileDescription="Compare van, bus, train and taxi options from Hua Hin to Bangkok. Check current schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Hua Hin to Bangkok transfer options"
      detailsNote="Check your pickup point in Hua Hin, Bangkok drop-off area, luggage allowance and current partner schedule before booking."
    />
  );
}
