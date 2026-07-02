import Link from "next/link";
import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import { Container } from "@/components/Container";
import { DesktopPersonalizedTripSummary } from "@/components/DesktopPersonalizedTripSummary";
import type { RoutePageData } from "@/data/routePages";

export const metadata: Metadata = createPageMetadata({
  title: "Bangkok Airport to Pattaya Transfers | Bus, Taxi & Van",
  description:
    "Compare transfer options from Bangkok Suvarnabhumi Airport to Pattaya. Check bus, taxi and van travel times, prices and booking options with 12Go.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya",
  },
});

const mobileRoute: RoutePageData = {
  slug: "bangkok-airport-to-pattaya",
  title: "Bangkok Airport to Pattaya Transfers",
  seoTitle: "Bangkok Airport to Pattaya Transfers | Bus, Taxi & Van",
  seoDescription:
    "Compare transfer options from Bangkok Suvarnabhumi Airport to Pattaya. Check bus, taxi and van travel times, prices and booking options with 12Go.",
  from: "Suvarnabhumi Airport",
  to: "Pattaya",
  intro:
    "Compare bus, private taxi and van transfer options from Bangkok Suvarnabhumi Airport to Pattaya before you land.",
  mainAffiliateUrl:
    "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-general",
  options: [
    {
      id: "bus",
      name: "Airport Bus",
      duration: "2h - 2h 30m",
      pickup: "Level 1, Gate 8 or voucher point",
      bestFor:
        "Best value for travelers landing early enough for scheduled departures",
      trackingId: "click_12go_bus_bkk_pattaya",
      affiliateUrl:
        "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-bus",
    },
    {
      id: "taxi",
      name: "Private Taxi",
      duration: "1h 30m - 2h 30m",
      pickup: "Arrivals hall or private driver meeting point",
      bestFor: "Late arrivals, families, luggage and door-to-door travel",
      trackingId: "click_12go_taxi_bkk_pattaya",
      affiliateUrl:
        "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-taxi",
    },
    {
      id: "van",
      name: "Shared Van",
      duration: "2h - 3h",
      pickup: "Airport meeting point or partner pickup area",
      bestFor:
        "Travelers who want a smaller shared transfer and flexible drop-off",
      trackingId: "click_12go_van_bkk_pattaya",
      affiliateUrl:
        "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-van",
    },
  ],
};

const optionDetailsById = {
  bus: {
    label: "Cheapest typical option",
    operator: "Roong Reuang Coach and partner buses",
    departures: "Current schedule",
    baggage: "Check ticket",
    image: "/assets/vehicles/mobile/bus.png",
    pros: ["Lowest typical price", "Direct airport-to-Pattaya route"],
    cons: ["Fixed schedule", "May need local taxi after drop-off"],
  },
  taxi: {
    label: "Best for late arrivals",
    operator: "Private airport transfer",
    departures: "On demand",
    baggage: "Private car",
    image: "/assets/vehicles/mobile/taxi.png",
    pros: ["Door-to-door", "Best after evening arrivals"],
    cons: ["Higher total price", "Traffic can change travel time"],
  },
  van: {
    label: "Best with luggage",
    operator: "Van and minibus partner operators",
    departures: "Current schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/van.png",
    pros: ["Smaller vehicle", "Useful for hotel-area transfers"],
    cons: ["May wait for other passengers", "Luggage rules vary"],
  },
};

const bkkDeepGuides = [
  {
    label: "Airport bus",
    href: "/routes/bangkok-airport-to-pattaya/bus",
    text: "Gate 8, schedule risk and when the bus makes sense.",
  },
  {
    label: "Private taxi",
    href: "/routes/bangkok-airport-to-pattaya/taxi",
    text: "Door-to-door choice for late arrivals, luggage and families.",
  },
  {
    label: "Late arrival",
    href: "/routes/bangkok-airport-to-pattaya/late-arrival",
    text: "What to avoid if your flight lands close to the last departures.",
  },
  {
    label: "With luggage",
    href: "/routes/bangkok-airport-to-pattaya/with-luggage",
    text: "How bags change the bus, van and taxi decision.",
  },
  {
    label: "Gate 8 guide",
    href: "/guides/bkk-airport-pickup-level-1-gate-8",
    text: "Level 1 pickup guide for tickets that mention Gate 8.",
  },
];

function DesktopBkkDeepGuides() {
  return (
    <section className="border-b border-[#e7e2d8] bg-white py-8">
      <Container>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              Route-specific checks
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-[#10201d]">
              BKK to Pattaya details tourists actually need
            </h2>
          </div>
          <Link
            href="/routes/bangkok-airport-to-pattaya/details"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#0c5a4d] px-5 py-2 text-sm font-extrabold text-[#0c5a4d] transition hover:bg-[#eef6f2]"
          >
            Full route details
          </Link>
        </div>

        <div className="grid gap-3 lg:grid-cols-5">
          {bkkDeepGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-[20px] border border-[#e7e2d8] bg-[#fbfaf7] p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <p className="text-sm font-extrabold text-[#10201d]">
                {guide.label}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                {guide.text}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

type BangkokAirportToPattayaPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
    arrival_time?: string;
  }>;
};

export default async function BangkokAirportToPattayaPage({
  searchParams,
}: BangkokAirportToPattayaPageProps) {
  const params = await searchParams;
  const selectedDate = params?.date;
  const passengers = params?.passengers;
  const arrivalTime = params?.arrival_time;

  return (
    <RoutePageTemplate
      route={mobileRoute}
      badge="Airport transfer comparison"
      desktopDescription="Compare bus, private taxi and van transfer options from Bangkok Suvarnabhumi Airport to Pattaya before you land. Check pickup point, luggage fit, late-arrival risk and final partner ticket rules."
      optionsHeading="Choose the best BKK to Pattaya transfer"
      detailsNote="One airport route, three practical choices. Final price, live schedule, luggage and pickup details are confirmed by the partner before booking."
      detailsHref="/routes/bangkok-airport-to-pattaya/details"
      desktopAfterHero={
        <>
          <DesktopPersonalizedTripSummary
            route={mobileRoute}
            arrivalTime={arrivalTime}
            passengers={passengers}
          />
          <DesktopBkkDeepGuides />
        </>
      }
      mobileContent={
        <MobilePriorityRouteOptionsScreen
          route={mobileRoute}
          title="BKK - Pattaya"
          summaryLeftTitle="Airport route data"
          summaryLeftText="Final partner rules"
          summaryRightTitle="Pattaya drop-off"
          summaryRightText="Choose by hotel area"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/bangkok-airport-to-pattaya/details"
          footerNote="Final prices and schedules are confirmed by the partner. Allow extra time after landing and check the pickup point before booking."
          selectedDate={selectedDate}
          passengers={passengers}
          arrivalTime={arrivalTime}
        />
      }
    />
  );
}
