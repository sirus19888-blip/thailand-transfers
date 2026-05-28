import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  MapPin,
  ShipWheel,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { mainRoute } from "@/data/routes";
import { getRoutePageBySlug } from "@/data/routePages";

export const metadata: Metadata = {
  title: "Thailand Transfer Guides | Mobile Route Tips",
  description:
    "Mobile route guides for Thailand transfers, including airport pickup, ferry timing, luggage and route-specific booking checks.",
  alternates: {
    canonical: "/guides",
  },
};

const guideRoutes = [
  {
    title: "BKK to Pattaya",
    href: "/routes/bangkok-airport-to-pattaya/details",
    affiliateUrl: mainRoute.affiliateUrl,
    trackingId: "click_12go_guide_bkk_pattaya",
    type: "Airport to city",
    bestFor: "Best when you need a simple airport exit to Pattaya, Jomtien or a direct hotel ride.",
    facts: [
      "Airport bus counters are checked against the Suvarnabhumi Level 1 transport area near Gate 8.",
      "RRC lists about 2 hours to Pattaya and airport departures at 7:30, 9:30, 11:30, 13:30, 15:30, 17:30 and 18:30, with a 22:00 North Pattaya note.",
      "Taxi is the better pick for late arrivals, heavy luggage, children or direct hotel drop-off.",
    ],
  },
  {
    title: "BKK to Koh Chang",
    href: "/routes/suvarnabhumi-airport-to-koh-chang/details",
    affiliateUrl: getRoutePageBySlug("suvarnabhumi-airport-to-koh-chang")!
      .mainAffiliateUrl,
    trackingId: "click_12go_guide_bkk_koh_chang",
    type: "Airport to island",
    bestFor: "Best planned as a road transfer plus ferry, not as a pure car ride.",
    facts: [
      "The checked main ferry crossing uses Ao Thammachat on the mainland for Koh Chang.",
      "Current ferry guidance shows daily Ferry Koh Chang service from 06:30 to 18:30, with cash-only tickets at the pier.",
      "Trat / Centrepoint Ferry has been suspended since July 2024 and has not resumed.",
      "Confirm whether the ticket continues after the ferry to your west-coast hotel area.",
    ],
  },
  {
    title: "BKK to Hua Hin",
    href: "/routes/suvarnabhumi-airport-to-hua-hin/details",
    affiliateUrl: getRoutePageBySlug("suvarnabhumi-airport-to-hua-hin")!
      .mainAffiliateUrl,
    trackingId: "click_12go_guide_bkk_hua_hin",
    type: "Airport to beach city",
    bestFor: "Best for fixed coach departures or private transfer after an international flight.",
    facts: [
      "Dedicated airport coach service is checked from Suvarnabhumi Level 1 / Gate 8 to Hua Hin Bus Station.",
      "RRC lists about 5 hours for the airport coach, depending on traffic.",
      "Private taxi is usually easier with children, large luggage, a delayed flight or a late arrival.",
    ],
  },
  {
    title: "Phuket Airport to Patong",
    href: "/routes/phuket-airport-to-patong-beach/details",
    affiliateUrl: getRoutePageBySlug("phuket-airport-to-patong-beach")!
      .mainAffiliateUrl,
    trackingId: "click_12go_guide_phuket_airport_patong",
    type: "Airport to beach",
    bestFor: "Best for choosing between low-cost Smart Bus and direct taxi/private transfer.",
    facts: [
      "Phuket Smart Bus confirms the airport route through Thalang, Laguna, Kamala, Patong, Karon, Kata and Rawai.",
      "The checked Smart Bus fare is fixed per person per trip and payment is made on the bus.",
      "Use live bus tracking or current timetable checks because Phuket traffic can shift travel time.",
    ],
  },
  {
    title: "Surat Thani Airport to Koh Samui",
    href: "/routes/surat-thani-airport-to-koh-samui/details",
    affiliateUrl: getRoutePageBySlug("surat-thani-airport-to-koh-samui")!
      .mainAffiliateUrl,
    trackingId: "click_12go_guide_surat_thani_koh_samui",
    type: "Airport plus ferry",
    bestFor: "Best handled as one connected bus or van plus ferry ticket.",
    facts: [
      "The checked route uses ground transfer from Surat Thani Airport toward Don Sak ferry piers.",
      "Seatran confirms the Don Sak to Koh Samui ferry route; ticketed packages can use different operators.",
      "Flight delays can break tight ferry connections, so avoid the last practical boat of the day.",
    ],
  },
  {
    title: "Phuket to Koh Phi Phi",
    href: "/routes/phuket-to-koh-phi-phi/details",
    affiliateUrl: getRoutePageBySlug("phuket-to-koh-phi-phi")!
      .mainAffiliateUrl,
    trackingId: "click_12go_guide_phuket_phi_phi",
    type: "Island ferry",
    bestFor: "Best for comparing larger ferry comfort with faster speedboat timing.",
    facts: [
      "Checked ferry and speedboat listings use Phuket Rassada Pier to Phi Phi Tonsai Pier.",
      "Some services continue to Laemtong Bay, so confirm the exact Phi Phi arrival point before booking.",
      "Ferry is more luggage-friendly; speedboat is faster but more sensitive to sea and weather conditions.",
    ],
  },
];

const guideTopics = [
  "Airport pickup point",
  "Final drop-off",
  "Luggage rules",
  "Last ferry or late arrival",
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-12 text-[#10201d]">
      <section className="mx-auto min-h-screen max-w-md px-4 py-5 lg:hidden">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Back to home"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-4 w-4 text-[#0c5a4d]" />
              <h1 className="text-[16px] font-extrabold text-[#10201d]">
                Transfer Guides
              </h1>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Checked route notes before booking
            </p>
          </div>

          <div
            aria-label="Guide checklist"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <CheckCircle2 className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
            What to check
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {guideTopics.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-2 rounded-2xl bg-[#f8f4ec] px-3 py-2"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0c5a4d]" />
                <span className="text-xs font-bold text-[#10201d]">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {guideRoutes.map((guide) => (
            <article
              key={guide.title}
              className="overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
                      {guide.type}
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-[#10201d]">
                      {guide.title}
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                    {guide.type.includes("ferry") ||
                    guide.type.includes("island") ? (
                      <ShipWheel className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="rounded-2xl bg-[#f8f4ec] px-3 py-2">
                    <p className="text-xs font-bold leading-5 text-[#10201d]">
                      {guide.bestFor}
                    </p>
                  </div>

                  {guide.facts.map((fact) => (
                    <div key={fact} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                      <p className="text-xs leading-5 text-slate-600">
                        {fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 border-t border-[#e7e2d8] px-4 py-3">
                <p className="text-xs font-bold leading-5 text-slate-500">
                  Verified route notes, live ticket still required.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={guide.href}
                    className="flex items-center justify-center rounded-xl border border-[#0c5a4d] bg-white px-3 py-2 text-[12px] font-extrabold text-[#0c5a4d]"
                  >
                    Open guide
                  </Link>
                  <AffiliateButton
                    href={guide.affiliateUrl}
                    trackingId={guide.trackingId}
                    variant="table"
                    fullWidth
                  >
                    Live price
                  </AffiliateButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Last checked May 2026. Route facts are planning notes. Final price,
          schedule, pickup point and luggage rules must still be checked on the
          live ticket.
        </p>
        <AffiliateDisclosure className="mt-2 text-center" />
      </section>

      <MobileBottomNav activeLabel="Guides" />
    </main>
  );
}
