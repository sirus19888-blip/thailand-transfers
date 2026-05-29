import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { RouteHero } from "@/components/RouteHero";
import { RouteSummary } from "@/components/RouteSummary";
import { TransferOptionsTable } from "@/components/TransferOptionsTable";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import { Container } from "@/components/Container";
import type { RoutePageData } from "@/data/routePages";

export const metadata: Metadata = {
  title: "Bangkok Airport to Pattaya Transfers | Bus, Taxi & Van",
  description:
    "Compare transfer options from Bangkok Suvarnabhumi Airport to Pattaya. Check bus, taxi and van travel times, prices and booking options with 12Go.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya",
  },
};

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
      price: "Check final price and ticket rules",
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
      price: "Check final price and ticket rules",
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
      price: "Check final price and ticket rules",
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
    departures: "Live schedule",
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
    departures: "Live schedule",
    baggage: "Check rules",
    image: "/assets/vehicles/mobile/van.png",
    pros: ["Smaller vehicle", "Useful for hotel-area transfers"],
    cons: ["May wait for other passengers", "Luggage rules vary"],
  },
};

type BangkokAirportToPattayaPageProps = {
  searchParams?: Promise<{
    date?: string;
    passengers?: string;
  }>;
};

export default async function BangkokAirportToPattayaPage({
  searchParams,
}: BangkokAirportToPattayaPageProps) {
  const params = await searchParams;
  const selectedDate = params?.date;
  const passengers = params?.passengers;

  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <div className="lg:hidden">
        <MobilePriorityRouteOptionsScreen
          route={mobileRoute}
          title="BKK - Pattaya"
          summaryLeftTitle="Airport route data"
          summaryLeftText="Check live offers"
          summaryRightTitle="Pattaya drop-off"
          summaryRightText="Choose by hotel area"
          optionDetailsById={optionDetailsById}
          detailsHref="/routes/bangkok-airport-to-pattaya/details"
          footerNote="Live prices and schedules may change. Allow extra time after landing and check the pickup point before booking."
          selectedDate={selectedDate}
          passengers={passengers}
        />
      </div>

      <div className="hidden lg:block">
        <Header />

        <RouteHero />

        <RouteSummary />

        <div id="route-options">
          <TransferOptionsTable />
        </div>

        <section className="bg-[#f8f4ec] py-12 lg:py-16">
          <Container>
            <div className="rounded-[2rem] border border-[#e7e2d8] bg-white p-6 shadow-xl shadow-black/5 lg:flex lg:items-center lg:justify-between lg:gap-8">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                  Need more details?
                </p>

                <h2 className="text-2xl font-bold text-[#10201d] lg:text-3xl">
                  See pickup instructions, airport steps and FAQ
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 lg:text-base lg:leading-7">
                  Open the route details page before booking if you want to know
                  what happens after landing.
                </p>
              </div>

              <div className="mt-5 flex w-full flex-col gap-3 lg:mt-0 lg:w-auto">
                <Link
                  href="/routes/bangkok-airport-to-pattaya/details"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#064e45] px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#033b35] lg:w-auto"
                >
                  View route details
                </Link>

                <Link
                  href="/routes/pattaya-to-bangkok-airport"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#064e45] bg-white px-6 py-4 text-sm font-bold text-[#064e45] transition hover:bg-[#f8f4ec] lg:w-auto"
                >
                  Need the return route?
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>

    </main>
  );
}
