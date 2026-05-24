import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("pattaya-to-don-mueang-airport");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Pattaya to Don Mueang Airport Transfers | Taxi, Van & Bus",
  description:
    route?.seoDescription ??
    "Compare return transfer options from Pattaya to Don Mueang Airport. Check taxi, van and bus choices, estimated travel times and partner booking options.",
  alternates: {
    canonical: "/routes/pattaya-to-don-mueang-airport",
  },
};

export default function PattayaToDonMueangAirportPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      desktopDescription="Compare return transfer options from Pattaya to Don Mueang Airport (DMK). This route is useful for travelers flying with low-cost airlines or taking domestic flights from Bangkok."
      mobileDescription="Compare taxi, van and bus options from Pattaya to Don Mueang Airport. Always check live availability and pickup details before booking."
      optionsHeading="Compare Pattaya to Don Mueang Airport transfer options"
    />
  );
}
