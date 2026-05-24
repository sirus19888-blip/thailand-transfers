import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("hua-hin-to-bangkok");

export const metadata: Metadata = {
  title: route?.seoTitle ?? "Hua Hin to Bangkok Transfers | Taxi, Van, Bus & Train",
  description:
    route?.seoDescription ??
    "Compare return transfer options from Hua Hin to Bangkok. Check taxi, van, bus and train choices, estimated travel times and partner booking options.",
  alternates: {
    canonical: "/routes/hua-hin-to-bangkok",
  },
};

export default function HuaHinToBangkokPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      desktopDescription="Compare return transfer options from Hua Hin to Bangkok. This route is useful for travelers heading back to Bangkok city after a beach stay in Hua Hin."
      mobileDescription="Compare taxi, van, bus and train options from Hua Hin to Bangkok. Always check live availability and pickup details before booking."
      optionsHeading="Compare Hua Hin to Bangkok transfer options"
    />
  );
}
