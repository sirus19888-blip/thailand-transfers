import Link from "next/link";
import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { Header } from "@/components/Header";
import { RouteHero } from "@/components/RouteHero";
import { RouteSummary } from "@/components/RouteSummary";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import { Container } from "@/components/Container";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SourceFreshnessPanel } from "@/components/SourceFreshnessPanel";
import { DesktopPersonalizedTripSummary } from "@/components/DesktopPersonalizedTripSummary";
import { RouteStructuredData } from "@/components/StructuredData";
import { getSourceFreshness } from "@/data/routeIntelligence";
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

function DesktopRouteOptions() {
  const freshness = getSourceFreshness(mobileRoute);

  return (
    <section id="route-options" className="bg-white py-10 lg:py-12">
      <Container>
        <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
          <div>
            <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              3 options found
            </p>
            <h2 className="text-[30px] font-extrabold tracking-normal text-[#10201d]">
              Choose the best BKK to Pattaya transfer
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#30465a]">
              One route, three practical choices. Check final price, schedule,
              luggage and pickup details before booking.
            </p>
          </div>

          <Link
            href="/routes/bangkok-airport-to-pattaya/details"
            className="inline-flex items-center justify-center rounded-full border border-[#0c5a4d] bg-white px-5 py-2.5 text-sm font-extrabold text-[#0c5a4d] transition hover:bg-[#f8f4ec]"
          >
            Pickup details
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {mobileRoute.options.map((option) => {
            const details =
              optionDetailsById[option.id as keyof typeof optionDetailsById];

            return (
              <article
                key={option.id}
                className="rounded-[18px] border border-[#e7e2d8] bg-white p-4 shadow-sm"
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
                  {details.label}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-[#10201d]">
                  {option.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  {option.bestFor}
                </p>

                <div className="mt-4 grid gap-2 text-sm">
                  <div className="rounded-2xl bg-[#fbfaf7] px-3 py-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                      Time
                    </p>
                    <p className="mt-1 font-extrabold text-[#10201d]">
                      {option.duration}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fbfaf7] px-3 py-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                      Pickup
                    </p>
                    <p className="mt-1 font-extrabold text-[#10201d]">
                      {option.pickup}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2">
                  <AffiliateButton
                    href={option.affiliateUrl}
                    trackingId={option.trackingId}
                    fullWidth
                  >
                    Check final price and ticket rules
                  </AffiliateButton>

                  <Link
                    href={`/routes/bangkok-airport-to-pattaya/details?option=${option.id}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0c5a4d] bg-white px-5 py-3 text-sm font-extrabold text-[#0c5a4d]"
                  >
                    View route details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 rounded-[24px] border border-[#e7e2d8] bg-[#fbfaf7] p-5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            Sources & freshness
          </h2>
          <SourceFreshnessPanel freshness={freshness} className="mt-3" />
        </div>
        <AffiliateDisclosure className="mt-2 text-center" />
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
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <RouteStructuredData route={mobileRoute} />
      <div className="lg:hidden">
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
      </div>

      <div className="hidden lg:block">
        <Header />

        <RouteHero />

        <RouteSummary />

        <DesktopPersonalizedTripSummary
          route={mobileRoute}
          arrivalTime={arrivalTime}
          passengers={passengers}
        />

        <DesktopRouteOptions />
      </div>

    </main>
  );
}
