import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("bangkok-to-hua-hin");

export const metadata: Metadata = createPageMetadata({
  title: route?.seoTitle ?? "Bangkok to Hua Hin Transfers | Van, Bus, Train & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Bangkok to Hua Hin. Check van, bus, train and private taxi options, pickup details, estimated travel times and final partner prices.",
  alternates: {
    canonical: "/routes/bangkok-to-hua-hin",
  },
});

export default function BangkokToHuaHinPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      badge="City to beach transfer comparison"
      desktopDescription="Compare transfer options from Bangkok to Hua Hin, including shared van, bus, train and private taxi. Check pickup location, Hua Hin drop-off point, luggage allowance and final partner prices before booking."
      mobileDescription="Compare van, bus, train and taxi options from Bangkok to Hua Hin. Check current schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Bangkok to Hua Hin transfer options"
      detailsNote="For Bangkok to Hua Hin transfers, check your pickup location, departure station, Hua Hin drop-off point, luggage allowance and current operator schedule before booking. Weekend traffic from Bangkok to Hua Hin can be heavier than usual."
    />
  );
}
