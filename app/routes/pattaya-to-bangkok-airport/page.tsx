import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("pattaya-to-bangkok-airport");

export const metadata: Metadata = {
  title: route?.seoTitle ?? "Pattaya to Bangkok Airport Transfers | Taxi, Van & Bus",
  description:
    route?.seoDescription ??
    "Compare return transfer options from Pattaya to Bangkok Airport. Check taxi, van and bus choices, estimated travel times and partner booking options.",
  alternates: {
    canonical: "/routes/pattaya-to-bangkok-airport",
  },
};

export default function PattayaToBangkokAirportPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      desktopDescription="Compare return transfer options from Pattaya to Bangkok Suvarnabhumi Airport (BKK). This route is popular for travelers heading back to the airport after a beach stay in Pattaya."
      mobileDescription="Compare taxi, van and bus options from Pattaya to Bangkok Suvarnabhumi Airport. Always check live availability and pickup details before booking."
      optionsHeading="Compare Pattaya to Bangkok Airport transfer options"
    />
  );
}
