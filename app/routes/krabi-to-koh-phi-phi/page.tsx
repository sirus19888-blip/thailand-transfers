import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("krabi-to-koh-phi-phi");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Krabi to Koh Phi Phi Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare ferry and speedboat options from Krabi to Koh Phi Phi. Check departure pier, arrival pier, luggage rules, travel times and final partner prices.",
  alternates: {
    canonical: "/routes/krabi-to-koh-phi-phi",
  },
};

const optionDetailsById = {
  ferry: {
    label: "Best value",
    operator: "Krabi ferry partners",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/ferry.png",
    pros: ["Good for luggage", "Reliable value for most travelers"],
    cons: ["Slower than speedboat", "Pier details must be checked"],
  },
  speedboat: {
    label: "Fastest",
    operator: "Speedboat partner operators",
    departures: "Check dates",
    baggage: "Light bags",
    image: "/assets/vehicles/mobile/speedboat.png",
    pros: ["Fast island crossing", "Good for tight daytime plans"],
    cons: ["More weather sensitive", "Less comfortable with large luggage"],
  },
  "van-ferry": {
    label: "Hotel link",
    operator: "Van and ferry partner operators",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/van-ferry.png",
    pros: ["Can include hotel pickup", "Useful from Ao Nang or Krabi town"],
    cons: ["Longer total time", "Pickup areas can vary"],
  },
};

type KrabiToKohPhiPhiPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
  }>;
};

export default async function KrabiToKohPhiPhiPage({
  searchParams,
}: KrabiToKohPhiPhiPageProps) {
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
      desktopDescription="Compare ferry, speedboat and combined transfer options from Krabi to Koh Phi Phi. Check departure pier, arrival pier, hotel pickup if included, luggage allowance and final partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Krabi to Koh Phi Phi. Check current schedules, departure pier and luggage rules before booking."
      optionsHeading="Compare Krabi to Koh Phi Phi transfer options"
      detailsNote="For island routes, check the departure pier, arrival pier, hotel pickup if included, luggage allowance and weather-related schedule changes before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Krabi - Phi Phi"
          summaryLeftTitle="Pier details"
          summaryLeftText="Check departure pier"
          summaryRightTitle="Sea crossing"
          summaryRightText="Weather can affect trips"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/krabi-to-koh-phi-phi/details"
          footerNote="Final prices and schedules may change. Check departure pier, arrival pier, luggage rules and weather conditions before booking."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      }
    />
  );
}
