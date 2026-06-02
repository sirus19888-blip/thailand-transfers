import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  TicketCheck,
  TriangleAlert,
  Users,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { transferOptions } from "@/data/routes";
import { routePages, type RoutePageData } from "@/data/routePages";

export const metadata: Metadata = createPageMetadata({
  title: "Thailand Hotel Transfer Guide",
  description:
    "Know when hotel pickup is included, when private taxi is safer, and what to check before booking hotel transfers in Thailand.",
  alternates: {
    canonical: "/travel-extras/hotel-transfer",
  },
});

type InfoCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

function getRoute(slug: string) {
  const route = routePages.find((item) => item.slug === slug);

  if (!route) {
    throw new Error(`Missing route data for ${slug}`);
  }

  return route;
}

function getOption(route: RoutePageData, ids: string[]) {
  return (
    ids
      .map((id) => route.options.find((option) => option.id === id))
      .find(Boolean) ?? route.options[0]
  );
}

const bkkTaxi =
  transferOptions.find((option) => option.id === "taxi") ?? transferOptions[0];
const bkkVan =
  transferOptions.find((option) => option.id === "van") ?? transferOptions[0];
const phuketPatongRoute = getRoute("phuket-airport-to-patong-beach");
const krabiAoNangRoute = getRoute("krabi-airport-to-ao-nang");
const huaHinRoute = getRoute("suvarnabhumi-airport-to-hua-hin");
const phuketPatongTaxi = getOption(phuketPatongRoute, ["taxi", "taxi-van"]);
const krabiAoNangTaxi = getOption(krabiAoNangRoute, ["taxi", "taxi-van"]);
const huaHinTaxi = getOption(huaHinRoute, ["taxi", "bus-van"]);

const decisionCards: InfoCard[] = [
  {
    title: "Private hotel transfer",
    text: "Best when you need the simplest door-to-door plan, late pickup, family luggage or a fixed hotel address.",
    icon: Car,
  },
  {
    title: "Shared hotel pickup",
    text: "Can be cheaper, but pickup windows, hotel coverage and waiting time depend on the operator ticket.",
    icon: Users,
  },
  {
    title: "Hotel area drop-off",
    text: "This is not always your exact hotel. Some tickets end at a station, pier, counter or nearby area.",
    icon: Building2,
  },
];

const ticketChecks = [
  "Exact pickup point or hotel pickup area",
  "Pickup time, waiting time and reporting time",
  "Whether drop-off is hotel, station, pier or area only",
  "Luggage allowance and larger-vehicle rules",
  "Tolls, airport pickup fees and night surcharge wording",
  "Operator contact details shown on the partner ticket",
];

const avoidChecks = [
  "Do not assume hotel transfer means door-to-door unless the ticket says so.",
  "Avoid shared pickup if your flight, ferry or checkout timing is tight.",
  "Do not book a small vehicle if you have family luggage, stroller or sports bags.",
];

const routeCtas = [
  {
    title: "BKK to Pattaya private taxi",
    text: "Useful for late arrivals, families and direct hotel drop-off in Pattaya.",
    routeHref: "/routes/bangkok-airport-to-pattaya",
    affiliateUrl: bkkTaxi.affiliateUrl,
    trackingId: bkkTaxi.trackingId,
    cta: "Check private taxi rules",
  },
  {
    title: "BKK to Pattaya shared van",
    text: "Compare only if the pickup point, luggage rule and hotel coverage fit your ticket.",
    routeHref: "/routes/bangkok-airport-to-pattaya",
    affiliateUrl: bkkVan.affiliateUrl,
    trackingId: bkkVan.trackingId,
    cta: "Check shared transfer rules",
  },
  {
    title: "Phuket Airport to Patong",
    text: "A hotel-area route where private taxi is usually simpler after landing.",
    routeHref: "/routes/phuket-airport-to-patong-beach",
    affiliateUrl: phuketPatongTaxi.affiliateUrl,
    trackingId: phuketPatongTaxi.trackingId,
    cta: "Check Phuket hotel transfer",
  },
  {
    title: "Krabi Airport to Ao Nang",
    text: "Short airport-to-hotel route where vehicle size and pickup clarity matter.",
    routeHref: "/routes/krabi-airport-to-ao-nang",
    affiliateUrl: krabiAoNangTaxi.affiliateUrl,
    trackingId: krabiAoNangTaxi.trackingId,
    cta: "Check Krabi hotel transfer",
  },
  {
    title: "BKK to Hua Hin",
    text: "Longer beach transfer where private pickup can reduce station and luggage friction.",
    routeHref: "/routes/suvarnabhumi-airport-to-hua-hin",
    affiliateUrl: huaHinTaxi.affiliateUrl,
    trackingId: huaHinTaxi.trackingId,
    cta: "Check Hua Hin transfer",
  },
];

function DecisionCard({ item }: { item: InfoCard }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[20px] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f0df] text-[#0c5a4d]">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="mt-3 text-lg font-extrabold text-[#10201d]">
        {item.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#4b5d58]">{item.text}</p>
    </article>
  );
}

export default function HotelTransferPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="mx-auto max-w-md px-4 py-5 lg:hidden">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-[#10201d] px-5 pb-6 pt-6 text-white shadow-lg shadow-black/5">
          <Image
            src="/assets/promo/hotel-transfer.png"
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 448px) calc(100vw - 32px), 416px"
            className="object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,32,29,0.5)_0%,rgba(16,32,29,0.96)_82%)]" />

          <div className="relative z-10">
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/14 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur"
            >
              <ArrowLeft className="h-4 w-4 text-[#f4c86a]" />
              Home
            </Link>

            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#f4c86a]">
              Travel extra
            </p>
            <div
              role="heading"
              aria-level={1}
              className="max-w-[330px] text-[32px] font-black leading-[1.03] tracking-normal"
            >
              Thailand hotel transfer guide
            </div>
            <p className="mt-3 max-w-[330px] text-[14px] leading-6 text-white/86">
              Know when hotel pickup is included, when private taxi is safer,
              and what to check before paying.
            </p>

            <div className="mt-5 flex items-start gap-2 rounded-2xl border border-white/18 bg-white/14 px-3 py-3 backdrop-blur">
              <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#f4c86a]" />
              <p className="text-[12px] font-semibold leading-5 text-white/86">
                Hotel transfer is only door-to-door when the partner ticket says
                exact hotel pickup or exact hotel drop-off.
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-5 px-3">
          <div className="relative z-20 grid gap-3">
            {decisionCards.map((item) => (
              <DecisionCard key={item.title} item={item} />
            ))}
          </div>

          <div className="relative z-20 mt-3 rounded-[1.5rem] border border-[#e6ddce] bg-white p-4 shadow-[0_18px_45px_rgba(21,37,31,0.12)]">
            <AffiliateButton
              href={bkkTaxi.affiliateUrl}
              trackingId={bkkTaxi.trackingId}
              fullWidth
            >
              Compare private hotel transfer
            </AffiliateButton>
            <AffiliateDisclosure className="mt-3 text-center" />
          </div>
        </div>

        <section className="pt-7">
          <div className="rounded-[1.5rem] border border-red-100 bg-red-50 p-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-red-500">
                <TriangleAlert className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-red-700">
                  What to avoid
                </h2>
                <div className="mt-2 grid gap-2">
                  {avoidChecks.map((item) => (
                    <p key={item} className="text-sm leading-6 text-red-700/80">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-7">
          <div className="rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              Booking check
            </p>
            <h2 className="mt-1 text-[23px] font-black tracking-normal text-[#10201d]">
              Before you pay
            </h2>
            <div className="mt-4 grid gap-2">
              {ticketChecks.map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                  <p className="text-xs leading-5 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-7">
          <div className="grid gap-4">
            {routeCtas.slice(0, 3).map((route) => (
              <article
                key={route.title}
                className="rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
              >
                <h2 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
                  {route.title}
                </h2>
                <p className="mt-2 text-[13px] leading-6 text-[#4b5d58]">
                  {route.text}
                </p>
                <div className="mt-3 grid grid-cols-[0.82fr_1.18fr] gap-2">
                  <Link
                    href={route.routeHref}
                    className="flex min-h-10 items-center justify-center rounded-full border border-[#0c5a4d] px-3 py-2 text-[12px] font-extrabold text-[#0c5a4d]"
                  >
                    Guide
                  </Link>
                  <AffiliateButton
                    href={route.affiliateUrl}
                    trackingId={route.trackingId}
                    variant="mobileCompact"
                    fullWidth
                  >
                    {route.cta}
                  </AffiliateButton>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] leading-5 text-slate-500">
            Last checked May 2026. Final pickup, waiting time, vehicle size and
            hotel coverage are confirmed by the partner ticket.
          </p>
        </section>
      </section>

      <section className="hidden border-b border-[#e7e2d8] bg-white py-10 lg:block lg:py-14">
        <Container>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0c5a4d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0df] text-[#c99a2e]">
                <Building2 className="h-6 w-6" />
              </div>

              <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                Travel extra
              </p>

              <h1 className="max-w-3xl text-[40px] font-extrabold leading-[1.04] tracking-normal text-[#10201d] lg:text-[58px]">
                Thailand hotel transfer guide
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#30465a]">
                Hotel pickup and hotel drop-off can be excellent, but the words
                are not enough. The ticket must say exactly where pickup starts,
                where drop-off ends and what luggage or waiting rules apply.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Use private taxi when timing, luggage or hotel address matters.",
                  "Use shared transfer only when the pickup window and hotel coverage are clear.",
                  "Treat hotel area, operator point and voucher point as different from exact hotel pickup.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[18px] border border-[#e7e2d8] bg-[#fbfaf7] p-4"
                  >
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />
                    <p className="text-sm leading-6 text-[#30465a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#e7e2d8] bg-white shadow-xl shadow-black/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/assets/promo/hotel-transfer.png"
                  alt="Thailand hotel transfer pickup"
                  fill
                  className="object-cover"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, 0px"
                />
              </div>

              <div className="p-5">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
                  Critical rule
                </p>

                <h2 className="mt-2 text-xl font-extrabold text-[#10201d]">
                  Door-to-door only if the ticket says it
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  A premium transfer decision is not just taxi vs van. It is
                  exact pickup, exact drop-off, luggage fit, waiting time and
                  whether the operator covers your hotel area.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden bg-[#fbfaf7] py-8 lg:block lg:py-12">
        <Container>
          <div className="mb-6 max-w-3xl">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              Decision guide
            </p>
            <h2 className="mt-2 text-[32px] font-black tracking-normal text-[#10201d]">
              Choose by risk, not by label
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {decisionCards.map((item) => (
              <DecisionCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="hidden bg-white py-8 lg:block lg:py-12">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[24px] border border-red-100 bg-red-50 p-5">
              <div className="flex items-start gap-3">
                <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <h2 className="text-2xl font-extrabold text-red-700">
                    Avoid these mistakes
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {avoidChecks.map((item) => (
                      <p key={item} className="text-sm leading-6 text-red-700/80">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#e7e2d8] bg-[#fbfaf7] p-5">
              <div className="flex items-start gap-3">
                <TicketCheck className="mt-1 h-5 w-5 shrink-0 text-[#0c5a4d]" />
                <div>
                  <h2 className="text-2xl font-extrabold text-[#10201d]">
                    Ticket checklist
                  </h2>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {ticketChecks.map((item) => (
                      <div key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                        <p className="text-sm leading-6 text-[#30465a]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden bg-[#fbfaf7] py-8 lg:block lg:py-12">
        <Container>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                Partner checks
              </p>
              <h2 className="mt-2 text-[32px] font-black tracking-normal text-[#10201d]">
                Routes where hotel transfer details matter
              </h2>
            </div>
            <Clock3 className="h-7 w-7 shrink-0 text-[#0c5a4d]" />
          </div>

          <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-5">
            {routeCtas.map((route) => (
              <article
                key={route.title}
                className="rounded-[22px] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
              >
                <h3 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
                  {route.title}
                </h3>
                <p className="mt-2 min-h-[96px] text-sm leading-6 text-[#30465a]">
                  {route.text}
                </p>
                <div className="mt-4 grid gap-2">
                  <Link
                    href={route.routeHref}
                    className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-[#0c5a4d] px-3 py-2 text-[12px] font-extrabold text-[#0c5a4d]"
                  >
                    Route guide
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <AffiliateButton
                    href={route.affiliateUrl}
                    trackingId={route.trackingId}
                    variant="table"
                    fullWidth
                  >
                    {route.cta}
                  </AffiliateButton>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Last checked May 2026. Final pickup, waiting time, vehicle size and
            hotel coverage are confirmed by the partner ticket.
          </p>
          <AffiliateDisclosure className="mt-3 text-center" />
        </Container>
      </section>

      <Footer />
      <MobileBottomNav activeLabel="Extras" />
    </main>
  );
}
