import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("phuket-to-koh-phi-phi");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Phuket to Koh Phi Phi Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare ferry and speedboat options from Phuket to Koh Phi Phi. Check departure pier, arrival pier, luggage rules, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/phuket-to-koh-phi-phi",
  },
};

const optionDetailsById = {
  ferry: {
    label: "Best value",
    operator: "Phuket ferry partners",
    departures: "Live schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/ferry.png",
    pros: ["Good for luggage", "Best value for most travelers"],
    cons: ["Slower than speedboat", "Pier and pickup rules vary"],
  },
  speedboat: {
    label: "Fastest",
    operator: "Speedboat partner operators",
    departures: "Check dates",
    baggage: "Light bags",
    image: "/assets/vehicles/mobile/speedboat.png",
    pros: ["Fastest sea crossing", "Good for short stays"],
    cons: ["More weather sensitive", "Less comfortable with large luggage"],
  },
  "ferry-van": {
    label: "Door to pier",
    operator: "Hotel transfer and ferry partners",
    departures: "Live schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Can include hotel pickup", "Simpler pier connection"],
    cons: ["Longer total time", "Pickup areas can vary"],
  },
};

type PhuketToKohPhiPhiPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
  }>;
};

export default async function PhuketToKohPhiPhiPage({
  searchParams,
}: PhuketToKohPhiPhiPageProps) {
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
      desktopDescription="Compare ferry, speedboat and combined hotel transfer options from Phuket to Koh Phi Phi. Check departure pier, arrival pier, hotel pickup if included, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Phuket to Koh Phi Phi. Check live schedules, departure pier and luggage rules before booking."
      optionsHeading="Compare Phuket to Koh Phi Phi transfer options"
      detailsNote="For island routes, check the departure pier, arrival pier, hotel pickup if included, luggage allowance and weather-related schedule changes before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Phuket - Phi Phi"
          summaryLeftTitle="Pier details"
          summaryLeftText="Check departure pier"
          summaryRightTitle="Sea crossing"
          summaryRightText="Weather can affect trips"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/phuket-to-koh-phi-phi/details"
          footerNote="Live prices and schedules may change. Check departure pier, arrival pier, luggage rules and weather conditions before booking."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      }
    />
  );
}
