import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("phuket-to-koh-phi-phi");

export const metadata: Metadata = createPageMetadata({
  title:
    route?.seoTitle ??
    "Phuket to Phi Phi Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare Phuket to Phi Phi ferry and speedboat tickets from Rassada Pier. Checked local bands start from THB400; confirm Tonsai or Laemtong.",
  alternates: {
    canonical: "/routes/phuket-to-koh-phi-phi",
  },
});

const optionDetailsById = {
  ferry: {
    label: "Best value",
    operator: "Phuket ferry partners",
    departures: "Current schedule",
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
    departures: "Current schedule",
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
    arrival_time?: string;
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
  const arrivalTime = params?.arrival_time;

  return (
    <RoutePageTemplate
      route={route}
      badge="Island ferry transfer comparison"
      desktopDescription="Compare Phuket to Phi Phi ferry, speedboat and combined hotel transfer options from Rassada Pier or listed pickup points. Check Tonsai or Laemtong arrival, luggage allowance and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Phuket to Phi Phi. Check current schedules, departure pier and luggage rules before booking."
      optionsHeading="Compare Phuket to Phi Phi ferry and speedboat options"
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
          footerNote="Final prices and schedules may change. Check departure pier, arrival pier, luggage rules and weather conditions before booking."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
