import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("surat-thani-airport-to-koh-phangan");

export const metadata: Metadata = {
  title:
    route?.seoTitle ??
    "Surat Thani Airport to Koh Phangan Transfers | Bus, Van & Ferry",
  description:
    route?.seoDescription ??
    "Compare transfer options from Surat Thani Airport to Koh Phangan. Check bus, van, ferry and combined transfer options, pickup details, travel times and live partner prices.",
  alternates: {
    canonical: "/routes/surat-thani-airport-to-koh-phangan",
  },
};

const optionDetailsById = {
  "bus-ferry": {
    label: "Best value",
    operator: "Airport bus and ferry partners",
    departures: "Live schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/bus-ferry.png",
    rating: "4.4",
    reviews: "Partner details",
    pros: ["Simple airport-to-island ticket", "Good for budget travelers"],
    cons: ["Longer total travel time", "Fixed ferry timing"],
  },
  "van-ferry": {
    label: "Island link",
    operator: "Van and ferry partner operators",
    departures: "Live schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/van-ferry.png",
    rating: "4.5",
    reviews: "Partner details",
    pros: ["Smaller shared transfer", "Good bundled route option"],
    cons: ["Pickup point can vary", "Luggage rules need checking"],
  },
  "taxi-ferry": {
    label: "Flexible",
    operator: "Taxi and ferry transfer partners",
    departures: "Check dates",
    baggage: "Private car",
    image: "/assets/vehicles/taxi.png",
    rating: "4.7",
    reviews: "Partner details",
    pros: ["More control after landing", "Better with luggage or family"],
    cons: ["Higher total price", "Ferry details still matter"],
  },
};

type SuratThaniAirportToKohPhanganPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
  }>;
};

export default async function SuratThaniAirportToKohPhanganPage({
  searchParams,
}: SuratThaniAirportToKohPhanganPageProps) {
  if (!route) {
    notFound();
  }

  const params = await searchParams;
  const selectedDate = params?.date;
  const passengers = params?.passengers;

  return (
    <RoutePageTemplate
      route={route}
      badge="Airport to island transfer comparison"
      desktopDescription="Compare combined transfer options from Surat Thani Airport to Koh Phangan, including bus plus ferry, van plus ferry and taxi plus ferry routes. Check airport pickup point, departure pier, arrival pier, luggage allowance and live partner prices before booking."
      mobileDescription="Compare bus, van, taxi and ferry combinations from Surat Thani Airport to Koh Phangan. Check live schedules, pickup points and luggage rules before booking."
      optionsHeading="Compare Surat Thani Airport to Koh Phangan transfer options"
      detailsNote="For airport-to-island routes, allow extra time for baggage claim, pier transfer and ferry boarding. Check your airport pickup point, departure pier, arrival pier, luggage allowance and live operator schedule before booking."
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={route}
          title="Surat Thani - Phangan"
          summaryLeftTitle="Island route data"
          summaryLeftText="Ferry timing matters"
          summaryRightTitle="Airport pickup"
          summaryRightText="Check meeting point"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/surat-thani-airport-to-koh-phangan/details"
          footerNote="Live prices and schedules may change. Allow extra time after landing and check pier, ferry and hotel transfer rules."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      }
    />
  );
}
