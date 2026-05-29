import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-chang-to-bangkok");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Koh Chang to Bangkok Transfers | Ferry, Van, Bus & Taxi",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Chang to Bangkok. Check ferry, van, bus and private taxi options, pickup details, estimated travel times and final partner prices.",
  alternates: {
    canonical: "/routes/koh-chang-to-bangkok",
  },
};

const optionDetailsById = {
  "ferry-van": {
    label: "Island link",
    operator: "Ferry and van partner operators",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Simple island-to-city route", "Good balance of value and ease"],
    cons: ["Long travel day", "Pickup and drop-off rules vary"],
  },
  "ferry-bus": {
    label: "Best value",
    operator: "Ferry and bus partner operators",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/bus-ferry.png",
    pros: ["Budget-friendly route", "Good for Bangkok city drop-off"],
    cons: ["Longest option", "Less flexible with luggage"],
  },
  van: {
    label: "Shared",
    operator: "Shared van partner operators",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/van.png",
    pros: ["Often direct after ferry", "Useful for solo travelers"],
    cons: ["Limited luggage space", "Route details need checking"],
  },
  taxi: {
    label: "Flexible",
    operator: "Private island transfer",
    departures: "On demand",
    baggage: "Private car",
    image: "/assets/vehicles/mobile/taxi.png",
    pros: ["Most comfortable", "Better with luggage or family"],
    cons: ["Higher total price", "Ferry timing still matters"],
  },
};

type KohChangToBangkokPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function KohChangToBangkokPage({
  searchParams,
}: KohChangToBangkokPageProps) {
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
      badge="Island transfer comparison"
      desktopDescription="Compare transfer options from Koh Chang to Bangkok, including ferry plus van, ferry plus bus, shared van and private taxi. Check whether ferry crossing, hotel pickup, pier transfer and Bangkok drop-off are included before booking."
      mobileDescription="Compare ferry, van, bus and taxi options from Koh Chang to Bangkok. Check current schedules, ferry details, pickup points and luggage rules before booking."
      optionsHeading="Compare Koh Chang to Bangkok transfer options"
      detailsNote="For island routes, check whether your ticket includes the ferry crossing, hotel pickup, pier transfer, luggage allowance and Bangkok drop-off point. Current Ferry Koh Chang guidance shows service from 06:30 to 18:30."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Koh Chang - Bangkok"
          summaryLeftTitle="Ferry route"
          summaryLeftText="Pier timing matters"
          summaryRightTitle="Bangkok drop-off"
          summaryRightText="Check final area"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/koh-chang-to-bangkok/details"
          footerNote="Final prices and schedules may change. Current Ferry Koh Chang guidance shows service from 06:30 to 18:30; check hotel pickup, ferry crossing and Bangkok drop-off before booking."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
