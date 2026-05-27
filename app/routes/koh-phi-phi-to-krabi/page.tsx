import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-krabi");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Koh Phi Phi to Krabi Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare ferry and speedboat options from Koh Phi Phi to Krabi. Check departure pier, arrival pier, luggage rules, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-krabi",
  },
};

const optionDetailsById = {
  ferry: {
    label: "Best value",
    operator: "Phi Phi ferry partners",
    departures: "Live schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/ferry.png",
    rating: "4.5",
    reviews: "Partner details",
    pros: ["Good for luggage", "Best value for most travelers"],
    cons: ["Slower than speedboat", "Krabi arrival pier can vary"],
  },
  speedboat: {
    label: "Fastest",
    operator: "Speedboat partner operators",
    departures: "Check dates",
    baggage: "Light bags",
    image: "/assets/vehicles/mobile/speedboat.png",
    rating: "4.4",
    reviews: "Partner details",
    pros: ["Fast island crossing", "Good for onward Krabi plans"],
    cons: ["More weather sensitive", "Less comfortable with large luggage"],
  },
  "ferry-van": {
    label: "Onward link",
    operator: "Ferry and van partner operators",
    departures: "Live schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    rating: "4.5",
    reviews: "Partner details",
    pros: ["Useful for Krabi hotels or airport", "Can reduce pier planning"],
    cons: ["Longer total time", "Drop-off areas can vary"],
  },
};

type KohPhiPhiToKrabiPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
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

  return (
    <RoutePageTemplate
      route={route}
      badge="Island ferry transfer comparison"
      desktopDescription="Compare ferry, speedboat and onward transfer options from Koh Phi Phi to Krabi. Check departure pier, arrival pier, Krabi drop-off area if included, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Koh Phi Phi to Krabi. Check live schedules, departure pier and luggage rules before booking."
      optionsHeading="Compare Koh Phi Phi to Krabi transfer options"
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
          footerNote="Live prices and schedules may change. Check departure pier, Krabi arrival pier, luggage rules and onward transfer details before booking."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      }
    />
  );
}
