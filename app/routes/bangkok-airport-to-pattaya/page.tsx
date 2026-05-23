import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { RouteHero } from "@/components/RouteHero";
import { RouteSummary } from "@/components/RouteSummary";
import { TransferOptionsTable } from "@/components/TransferOptionsTable";
import { MobileTransferOptionsScreen } from "@/components/MobileTransferOptionsScreen";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Bangkok Airport to Pattaya Transfers | Bus, Taxi & Van",
  description:
    "Compare transfer options from Bangkok Suvarnabhumi Airport to Pattaya. Check bus, taxi and van travel times, prices and booking options with 12Go.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya",
  },
};

export default function BangkokAirportToPattayaPage() {
  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <div className="lg:hidden">
        <MobileTransferOptionsScreen />
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

              <Link
                href="/routes/bangkok-airport-to-pattaya/details"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#064e45] px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#033b35] lg:mt-0 lg:w-auto"
              >
                View route details
              </Link>
            </div>
          </Container>
        </section>
      </div>

    </main>
  );
}
