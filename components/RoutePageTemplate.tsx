import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  CheckCircle2,
  Clock3,
  Luggage,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SourceFreshnessPanel } from "@/components/SourceFreshnessPanel";
import { StandardMobileRouteOptions } from "@/components/StandardMobileRouteOptions";
import { RouteStructuredData } from "@/components/StructuredData";
import {
  getCompactCtaLabel,
  getDecisionLabels,
  getPickupMapInfo,
  getPriceGuidance,
  getRiskBadges,
  getRouteDecision,
  getSourceFreshness,
} from "@/data/routeIntelligence";
import type { RoutePageData } from "@/data/routePages";

type RoutePageTemplateProps = {
  route: RoutePageData;
  badge?: string;
  desktopDescription?: string;
  mobileDescription?: string;
  optionsHeading?: string;
  detailsNote?: string;
  mobileContent?: ReactNode;
  desktopAfterHero?: ReactNode;
  detailsHref?: string;
};

function getRouteImage(route: RoutePageData) {
  return `/assets/routes/${route.slug}.png`;
}

function getPrimaryOption(route: RoutePageData) {
  return route.options[0];
}

function getTaxiOption(route: RoutePageData) {
  return (
    route.options.find((option) => option.id.includes("taxi")) ??
    route.options.find((option) => option.name.toLowerCase().includes("taxi")) ??
    route.options[0]
  );
}

function getBudgetOption(route: RoutePageData) {
  return (
    route.options.find((option) => option.id.includes("bus")) ??
    route.options.find((option) => option.id.includes("van")) ??
    route.options[0]
  );
}

function getFastestOption(route: RoutePageData) {
  return (
    route.options.find((option) => option.id.includes("flight")) ??
    route.options.find((option) => option.id.includes("speedboat")) ??
    getTaxiOption(route)
  );
}

export default function RoutePageTemplate({
  route,
  badge = "Return transfer comparison",
  desktopDescription,
  mobileDescription,
  optionsHeading,
  detailsNote,
  mobileContent,
  desktopAfterHero,
  detailsHref,
}: RoutePageTemplateProps) {
  void mobileDescription;

  const generalTrackingId = `click_12go_general_${route.slug.replaceAll("-", "_")}`;
  const freshness = getSourceFreshness(route);
  const resolvedDetailsHref = detailsHref ?? `/routes/${route.slug}/details`;
  const primaryOption = getPrimaryOption(route);
  const budgetOption = getBudgetOption(route);
  const fastestOption = getFastestOption(route);
  const heroFacts = [
    {
      icon: ShieldCheck,
      label: "Start here",
      value: primaryOption.name,
      text: primaryOption.bestFor,
    },
    {
      icon: Clock3,
      label: "Typical time",
      value: primaryOption.duration,
      text: `First option shown for ${route.to}.`,
    },
    {
      icon: Users,
      label: "Budget check",
      value: budgetOption.name,
      text: budgetOption.duration,
    },
    {
      icon: Luggage,
      label: "Fastest option",
      value: fastestOption.name,
      text: fastestOption.bestFor,
    },
  ];
  const decisionLabels = getDecisionLabels(route);
  const bookingChecks = [
    "Confirm the exact pickup point, final stop and operator name before paying.",
    "Match the departure to your arrival time, luggage load and group size.",
    "Use the partner page for final price, live schedule and cancellation rules.",
  ];

  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <RouteStructuredData route={route} />
      <div className="hidden lg:block">
        <Header />

        <section className="relative overflow-hidden bg-[#10201d] py-14 lg:py-20">
          <Image
            src={getRouteImage(route)}
            alt={`${route.from} to ${route.to} transfer route`}
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,32,29,0.70)_0%,rgba(16,32,29,0.34)_48%,rgba(16,32,29,0.04)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,rgba(16,32,29,0.42)_0%,rgba(16,32,29,0)_100%)]" />

          <Container className="relative z-10">
            <div className="max-w-4xl text-white">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f0c96a]">
                {badge}
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] lg:text-6xl">
                {route.title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-white/88 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] lg:text-lg lg:leading-8">
                {desktopDescription ?? route.intro}
              </p>

              <div className="mt-5 flex max-w-3xl items-start gap-3 rounded-[20px] border border-white/16 bg-white/12 p-4 text-white backdrop-blur">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#f0c96a]" />
                <p className="text-sm font-semibold leading-6 text-white/86">
                  {getRouteDecision(route)}
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <AffiliateButton
                  href={route.mainAffiliateUrl}
                  trackingId={generalTrackingId}
                >
                  Check final price and ticket rules
                </AffiliateButton>

                <Link
                  href="#route-options"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/34 bg-white/12 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  Compare options
                </Link>
              </div>
              <AffiliateDisclosure className="mt-3 text-white/76" />
            </div>

            <div className="mt-9 grid max-w-6xl gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="min-h-[132px] rounded-[22px] border border-white/16 bg-white/12 p-4 text-white shadow-lg shadow-black/10 backdrop-blur"
                  >
                    <div className="flex items-center gap-2 text-[#f0c96a]">
                      <Icon className="h-4 w-4" />
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em]">
                        {fact.label}
                      </p>
                    </div>
                    <p className="mt-3 text-lg font-extrabold leading-tight">
                      {fact.value}
                    </p>
                    <p className="mt-2 text-xs font-medium leading-5 text-white/72">
                      {fact.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {desktopAfterHero}

        <section id="route-options" className="bg-[#fbfaf7] py-10 lg:py-14">
          <Container>
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
              <div>
                <div className="mb-6">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                    Options
                  </p>

                  <h2 className="text-2xl font-bold text-[#10201d] lg:text-3xl">
                    {optionsHeading ??
                      `Compare ${route.from} to ${route.to} transfer options`}
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 lg:text-base lg:leading-7">
                    {detailsNote ??
                      "Prices, pickup points and availability can change. Always check partner offers and booking conditions on the partner website before booking."}
                  </p>
                </div>

                <div className="mb-5 grid gap-3 lg:grid-cols-4">
                  {decisionLabels.map((item) => (
                    <div
                      key={item.label}
                      className="min-h-[118px] rounded-[20px] border border-[#e7e2d8] bg-white p-4 shadow-sm"
                    >
                      <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#c99a2e]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-extrabold leading-5 text-[#10201d]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-[28px] border border-[#e7e2d8] bg-white shadow-xl shadow-black/5">
                  <table className="w-full text-left">
                    <thead className="bg-[#f8f4ec]">
                      <tr>
                        <th className="w-[25%] px-5 py-4 text-sm font-bold text-[#10201d]">
                          Option
                        </th>
                        <th className="w-[15%] px-5 py-4 text-sm font-bold text-[#10201d]">
                          Price
                        </th>
                        <th className="w-[13%] px-5 py-4 text-sm font-bold text-[#10201d]">
                          Time
                        </th>
                        <th className="w-[23%] px-5 py-4 text-sm font-bold text-[#10201d]">
                          Pickup
                        </th>
                        <th className="w-[14%] px-5 py-4 text-sm font-bold text-[#10201d]">
                          Best for
                        </th>
                        <th className="w-[10%] px-5 py-4 text-sm font-bold text-[#10201d]">
                          Ticket check
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {route.options.map((option, index) => {
                        const pickupMap = getPickupMapInfo(route, option);
                        const riskBadges = getRiskBadges(route, option);

                        return (
                          <tr
                            key={option.id}
                            className="border-t border-[#e7e2d8] align-top transition hover:bg-[#fbfaf7]"
                          >
                            <td className="px-5 py-5">
                              <div className="flex gap-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-xs font-extrabold text-[#0c5a4d]">
                                  {index + 1}
                                </span>
                                <div>
                                  <p className="text-sm font-extrabold text-[#10201d]">
                                    {option.name}
                                  </p>
                                  <p className="mt-1 text-xs leading-5 text-slate-500">
                                    {getPriceGuidance(option)}
                                  </p>
                                  {riskBadges.length ? (
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                      {riskBadges.map((badge) => (
                                        <span
                                          key={badge}
                                          className="rounded-full bg-[#f0eadf] px-2 py-1 text-[10px] font-extrabold text-[#51615c]"
                                        >
                                          {badge}
                                        </span>
                                      ))}
                                    </div>
                                  ) : null}
                                  <Link
                                    href={`${resolvedDetailsHref}?option=${option.id}`}
                                    className="mt-3 inline-flex rounded-full border border-[#d7eadf] bg-white px-3 py-1.5 text-[11px] font-extrabold text-[#0c5a4d] transition hover:bg-[#eef6f2]"
                                  >
                                    Details
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm font-semibold leading-6 text-slate-600">
                              {option.price}
                            </td>
                            <td className="px-5 py-5">
                              <p className="text-sm font-extrabold text-[#10201d]">
                                {option.duration}
                              </p>
                              <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500">
                                Partner timing can vary by date.
                              </p>
                            </td>
                            <td className="px-5 py-5">
                              <div className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                                <div>
                                  <p className="text-sm font-semibold leading-6 text-slate-700">
                                    {option.pickup}
                                  </p>
                                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                                    {pickupMap.note}
                                  </p>
                                  <span className="mt-2 inline-flex rounded-full border border-[#d7eadf] bg-[#eef6f2] px-2 py-1 text-[10px] font-extrabold text-[#0c5a4d]">
                                    {pickupMap.label}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm font-semibold leading-6 text-slate-600">
                              {option.bestFor}
                            </td>
                            <td className="px-5 py-5">
                              <AffiliateButton
                                href={option.affiliateUrl}
                                trackingId={option.trackingId}
                                variant="table"
                                fullWidth
                              >
                                {getCompactCtaLabel(option)}
                              </AffiliateButton>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <AffiliateDisclosure className="mt-4 text-center" />
              </div>

              <aside className="space-y-4 xl:sticky xl:top-24">
                <div className="rounded-[24px] border border-[#d7eadf] bg-white p-5 shadow-lg shadow-black/5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0c5a4d]">
                        Tourist check
                      </p>
                      <h2 className="mt-1 text-lg font-extrabold text-[#10201d]">
                        Before you book
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {bookingChecks.map((check) => (
                      <div key={check} className="flex gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                        <p className="text-sm leading-6 text-slate-600">
                          {check}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#e7e2d8] bg-white p-5 shadow-lg shadow-black/5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
                    Fastest backup
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold text-[#10201d]">
                    {fastestOption.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {fastestOption.duration}. Use this as the flexible comparison point
                    when timing matters more than lowest price.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#e7e2d8] bg-white p-5 shadow-lg shadow-black/5">
                  <h2 className="text-lg font-extrabold text-[#10201d]">
                    Sources & freshness
                  </h2>
                  <SourceFreshnessPanel freshness={freshness} className="mt-3" />
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </div>

      <div className="lg:hidden">
        {mobileContent ?? <StandardMobileRouteOptions route={route} />}
      </div>
    </main>
  );
}
