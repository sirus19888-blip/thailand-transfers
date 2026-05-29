import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-phuket");

export const metadata: Metadata = {
  title:
    route?.seoTitle ?? "Koh Phi Phi to Phuket Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare transfer options from Koh Phi Phi to Phuket. Check ferry and speedboat options, pickup details, estimated travel times and live partner prices.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-phuket",
  },
};

const optionDetailsById = {
  ferry: {
    label: "Best value",
    operator: "Phi Phi ferry partners",
    departures: "Live schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/ferry.png",
    pros: ["Good for luggage", "Best value for most travelers"],
    cons: ["Slower than speedboat", "Phuket arrival pier can vary"],
  },
  speedboat: {
    label: "Fastest",
    operator: "Speedboat partner operators",
    departures: "Check dates",
    baggage: "Light bags",
    image: "/assets/vehicles/mobile/speedboat.png",
    pros: ["Fastest sea crossing", "Good for onward Phuket plans"],
    cons: ["More weather sensitive", "Less comfortable with large luggage"],
  },
};

type KohPhiPhiToPhuketPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
  }>;
};

export default async function KohPhiPhiToPhuketPage({
  searchParams,
}: KohPhiPhiToPhuketPageProps) {
  if (!route) {
    notFound();
  }

  const params = await searchParams;
  const selectedDate = params?.date;
  const passengers = params?.passengers;

  return (
    <RoutePageTemplate
      route={route}
      badge="Island transfer comparison"
      desktopDescription="Compare transfer options from Koh Phi Phi to Phuket, including ferry and speedboat services. Check departure pier, arrival pier, luggage rules and live partner prices before booking."
      mobileDescription="Compare ferry and speedboat options from Koh Phi Phi to Phuket. Check live schedules, pier details and luggage rules before booking."
      optionsHeading="Compare Koh Phi Phi to Phuket transfer options"
      detailsNote="For island routes, check your departure pier, Phuket arrival pier, luggage allowance, weather conditions and live operator schedule before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Phi Phi - Phuket"
          summaryLeftTitle="Pier details"
          summaryLeftText="Check Tonsai Pier"
          summaryRightTitle="Sea crossing"
          summaryRightText="Weather can affect trips"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/koh-phi-phi-to-phuket/details"
          footerNote="Live prices and schedules may change. Check departure pier, Phuket arrival pier, luggage rules and weather conditions before booking."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      }
    />
  );
}
