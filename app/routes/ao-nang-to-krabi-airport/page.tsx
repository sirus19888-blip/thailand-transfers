import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { StandardMobileRouteOptions } from "@/components/StandardMobileRouteOptions";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("ao-nang-to-krabi-airport");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Ao Nang to Krabi Airport Transfers | Bus, Van & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Ao Nang to Krabi Airport. Check airport bus, shared van, private taxi, pickup details, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/ao-nang-to-krabi-airport",
  },
};

type AoNangToKrabiAirportPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function AoNangToKrabiAirportPage({
  searchParams,
}: AoNangToKrabiAirportPageProps) {
  if (!route) {
    notFound();
  }

  const params = await searchParams;
  const selectedDate = params?.date;
  const passengers = params?.passengers;
  const arrivalTime = params?.arrival_time;

  return (
    <RoutePageTemplate
      route={route}
      badge="Beach to airport transfer comparison"
      desktopDescription="Compare transfer options from Ao Nang to Krabi Airport, including airport bus, shared van, private taxi and taxi plus van combinations. Check hotel pickup area, airport drop-off point, luggage allowance and final partner prices before booking."
      mobileDescription="Compare bus, van and taxi options from Ao Nang to Krabi Airport. Check current schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Ao Nang to Krabi Airport transfer options"
      detailsNote="For airport transfers, allow extra time before your flight. Check your Ao Nang pickup point, Krabi Airport drop-off area, luggage allowance and current operator schedule before booking."
      mobileContent={
        <StandardMobileRouteOptions
          route={route}
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
