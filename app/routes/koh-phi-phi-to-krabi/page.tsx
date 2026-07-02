import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-krabi");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Phi Phi to Krabi Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare Phi Phi to Krabi ferry, speedboat and ferry-plus-van tickets. Check Tonsai to Klong Jilad, onward transfer and flight buffer.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-krabi",
  },
});

const optionDetailsById = {
  ferry: {
    label: "Best value",
    operator: "Phi Phi ferry partners",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/ferry.png",
    pros: ["Good for luggage", "Best value for most travelers"],
    cons: ["Slower than speedboat", "Krabi arrival pier can vary"],
  },
  speedboat: {
    label: "Fastest",
    operator: "Speedboat partner operators",
    departures: "Check dates",
    baggage: "Light bags",
    image: "/assets/vehicles/mobile/speedboat.png",
    pros: ["Fast island crossing", "Good for onward Krabi plans"],
    cons: ["More weather sensitive", "Less comfortable with large luggage"],
  },
  "ferry-van": {
    label: "Onward link",
    operator: "Ferry and van partner operators",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Useful for Krabi hotels or airport", "Can reduce pier planning"],
    cons: ["Longer total time", "Drop-off areas can vary"],
  },
};

type KohPhiPhiToKrabiPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function KohPhiPhiToKrabiPage({
  searchParams,
}: KohPhiPhiToKrabiPageProps) {
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
      badge="Island ferry transfer comparison"
      desktopDescription="Compare Phi Phi to Krabi ferry, speedboat and onward transfer options. Check Tonsai departure, Klong Jilad arrival, Krabi drop-off area if included, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Phi Phi to Krabi. Check current schedules, departure pier and luggage rules before booking."
      optionsHeading="Compare Phi Phi to Krabi ferry and speedboat options"
      detailsNote="For island routes, check the departure pier, arrival pier, onward transfer if included, luggage allowance and weather-related schedule changes before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Phi Phi - Krabi"
          summaryLeftTitle="Pier details"
          summaryLeftText="Check Tonsai Pier"
          summaryRightTitle="Sea crossing"
          summaryRightText="Weather can affect trips"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/koh-phi-phi-to-krabi/details"
          footerNote="Final prices and schedules may change. Check departure pier, Krabi arrival pier, luggage rules and onward transfer details before booking."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
