import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import Image from "next/image";
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
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { affiliateMainCta } from "@/data/ctaCopy";
import { mainRoute } from "@/data/routes";
import { getRoutePageBySlug } from "@/data/routePages";

export const metadata: Metadata = createPageMetadata({
  title: "Mobile Transfer Guides | Thailand Route Tips",
  description:
    "Mobile route guides for transfer planning in Thailand, including airport pickup, ferry timing, luggage and route-specific booking checks.",
  alternates: {
    canonical: "/guides",
  },
});

const guideRoutes = [
  {
    title: "BKK to Pattaya",
    href: "/routes/bangkok-airport-to-pattaya/details",
    imageSrc: "/assets/routes/bangkok-airport-to-pattaya.png",
    imageAlt: "Bangkok airport to Pattaya transfer route preview",
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
    imageSrc: "/assets/routes/suvarnabhumi-airport-to-koh-chang.png",
    imageAlt: "Suvarnabhumi Airport to Koh Chang transfer route preview",
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
    imageSrc: "/assets/routes/suvarnabhumi-airport-to-hua-hin.png",
    imageAlt: "Suvarnabhumi Airport to Hua Hin transfer route preview",
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
    imageSrc: "/assets/routes/phuket-airport-to-patong-beach.png",
    imageAlt: "Phuket Airport to Patong transfer route preview",
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
    imageSrc: "/assets/routes/surat-thani-airport-to-koh-samui.png",
    imageAlt: "Surat Thani Airport to Koh Samui transfer route preview",
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
    imageSrc: "/assets/routes/phuket-to-koh-phi-phi.png",
    imageAlt: "Phuket to Koh Phi Phi ferry route preview",
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
  {
    title: "Airport pickup point",
    imageSrc: "/assets/steps/immigration.png",
    imageAlt: "Airport arrival checkpoint",
  },
  {
    title: "Final drop-off",
    imageSrc: "/assets/promo/hotel-transfer.png",
    imageAlt: "Hotel transfer drop-off",
  },
  {
    title: "Luggage rules",
    imageSrc: "/assets/steps/baggage-claim.png",
    imageAlt: "Airport baggage claim",
  },
  {
    title: "Last ferry or late arrival",
    imageSrc: "/assets/guides/last-ferry-late-arrival.png",
    imageAlt: "Late arrival at a Thailand ferry pier",
  },
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
              <h1 className="text-[16px] font-extrabold leading-tight text-[#10201d]">
                Mobile Guides
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
          <div className="relative mb-4 h-44 overflow-hidden rounded-[1.15rem] bg-[#10201d]">
            <Image
              src="/assets/hero/hero-mobile.png"
              alt="Thailand transfer planning on mobile"
              fill
              priority
              sizes="(max-width: 448px) calc(100vw - 32px), 416px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/85 via-[#10201d]/25 to-transparent" />
            <div className="absolute inset-x-4 bottom-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f0c96a]">
                Mobile transfer notes
              </p>
              <h2 className="mt-1 text-[25px] font-extrabold leading-tight text-white">
                Check the route before you book
              </h2>
              <p className="mt-2 text-xs font-medium leading-5 text-white/80">
                Pickup points, luggage, ferry timing and final drop-off in one
                place.
              </p>
            </div>
          </div>

          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
            What to check
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {guideTopics.map((topic) => (
              <div
                key={topic.title}
                className="overflow-hidden rounded-2xl bg-[#f8f4ec]"
              >
                <div className="relative h-20">
                  <Image
                    src={topic.imageSrc}
                    alt={topic.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 190px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-12 items-center gap-2 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0c5a4d]" />
                  <span className="text-xs font-bold leading-snug text-[#10201d]">
                    {topic.title}
                  </span>
                </div>
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
              <div className="relative h-40 overflow-hidden bg-[#10201d]">
                <Image
                  src={guide.imageSrc}
                  alt={guide.imageAlt}
                  fill
                  sizes="(max-width: 448px) calc(100vw - 32px), 416px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/80 via-[#10201d]/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f0c96a]">
                      {guide.type}
                    </p>
                    <h2 className="mt-1 text-[24px] font-extrabold leading-tight text-white">
                      {guide.title}
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#0c5a4d] shadow-sm backdrop-blur">
                    {guide.type.includes("ferry") ||
                    guide.type.includes("island") ? (
                      <ShipWheel className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="space-y-2">
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
                  Verified route notes, partner ticket still required.
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
                    {affiliateMainCta}
                  </AffiliateButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Last checked June 2026. Route facts are planning notes. Final price,
          schedule, pickup point and luggage rules must still be checked on the
          partner ticket.
        </p>
        <AffiliateDisclosure className="mt-2 text-center" />
      </section>

      <div className="hidden lg:block">
        <Header />

        <section className="border-b border-[#e7e2d8] bg-white py-12">
          <Container>
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#0c5a4d]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to homepage
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0df] text-[#c99a2e]">
                  <BookOpen className="h-6 w-6" />
                </div>

                <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                  Mobile transfer guides
                </p>

                <h1 className="max-w-3xl text-[44px] font-black leading-[1.02] tracking-normal text-[#10201d]">
                  Checked route notes before you book
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#30465a]">
                  Practical Thailand transfer guides for pickup points, luggage,
                  ferry timing, late arrivals and final drop-off checks.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {guideTopics.map((topic) => (
                    <article
                      key={topic.title}
                      className="overflow-hidden rounded-[22px] border border-[#e7e2d8] bg-[#fbfaf7]"
                    >
                      <div className="relative h-28">
                        <Image
                          src={topic.imageSrc}
                          alt={topic.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 260px, 50vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-2 px-4 py-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0c5a4d]" />
                        <h2 className="text-sm font-extrabold text-[#10201d]">
                          {topic.title}
                        </h2>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#e7e2d8] bg-white shadow-xl shadow-black/10">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/assets/hero/hero-mobile.png"
                    alt="Thailand transfer planning guide"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/82 via-[#10201d]/16 to-transparent" />
                  <div className="absolute inset-x-7 bottom-7">
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#f0c96a]">
                      Route confidence
                    </p>
                    <h2 className="mt-2 max-w-xl text-3xl font-black leading-tight text-white">
                      Know the pickup, timing and ticket limits before payment
                    </h2>
                  </div>
                </div>

                <div className="grid gap-3 p-5">
                  <p className="text-sm leading-6 text-[#30465a]">
                    Use these guides as a pre-booking checklist. The final
                    price, pickup point, luggage policy and schedule must still
                    be confirmed on the partner ticket before payment.
                  </p>
                  <AffiliateDisclosure />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#fbfaf7] py-12">
          <Container>
            <div className="mb-7 flex items-end justify-between gap-6">
              <div>
                <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                  Guide library
                </p>
                <h2 className="text-[32px] font-black tracking-normal text-[#10201d]">
                  Popular route checks
                </h2>
              </div>

              <Link
                href="/routes"
                className="inline-flex items-center justify-center rounded-full border border-[#0c5a4d] bg-white px-5 py-3 text-sm font-extrabold text-[#0c5a4d]"
              >
                Browse all routes
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {guideRoutes.map((guide) => {
                const routeIcon =
                  guide.type.includes("ferry") ||
                  guide.type.includes("island") ? (
                    <ShipWheel className="h-5 w-5" />
                  ) : (
                    <MapPin className="h-5 w-5" />
                  );

                return (
                  <article
                    key={guide.title}
                    className="overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
                  >
                    <div className="relative aspect-[16/9] bg-[#10201d]">
                      <Image
                        src={guide.imageSrc}
                        alt={guide.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/80 via-[#10201d]/8 to-transparent" />
                      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f0c96a]">
                            {guide.type}
                          </p>
                          <h3 className="mt-1 text-2xl font-black leading-tight text-white">
                            {guide.title}
                          </h3>
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/92 text-[#0c5a4d] shadow-sm backdrop-blur">
                          {routeIcon}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 p-5">
                      <p className="rounded-[18px] bg-[#f8f4ec] px-4 py-3 text-sm font-bold leading-6 text-[#10201d]">
                        {guide.bestFor}
                      </p>

                      <div className="grid gap-2">
                        {guide.facts.slice(0, 2).map((fact) => (
                          <div key={fact} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                            <p className="text-sm leading-6 text-[#4b5d58]">
                              {fact}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-1 grid grid-cols-2 gap-2">
                        <Link
                          href={guide.href}
                          className="flex min-h-12 items-center justify-center rounded-[16px] border border-[#0c5a4d] bg-white px-4 py-3 text-center text-sm font-extrabold text-[#0c5a4d]"
                        >
                          Open guide
                        </Link>

                        <AffiliateButton
                          href={guide.affiliateUrl}
                          trackingId={guide.trackingId}
                          variant="table"
                          fullWidth
                        >
                          Check price
                        </AffiliateButton>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
              Last checked June 2026. Route facts are planning notes. Final
              price, schedule, pickup point and luggage rules must still be
              checked on the partner ticket.
            </p>
          </Container>
        </section>

        <Footer />
      </div>

      <MobileBottomNav activeLabel="Guides" />
    </main>
  );
}
