import Image from "next/image";
import Link from "next/link";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { mobileVehicleAssets } from "@/components/mobileVehicleAssets";
import { ReturnTransferIntelligence } from "@/components/ReturnTransferIntelligence";
import { FerryIntelligence } from "@/components/FerryIntelligence";
import { TrackedAnchor } from "@/components/TrackedActions";
import { RouteAnalytics } from "@/components/RouteAnalytics";
import { RouteStructuredData } from "@/components/StructuredData";
import type { RoutePageData, RouteTransportOption } from "@/data/routePages";
import {
  affiliateMicroDisclosure,
  getDecisionLabels,
  getPickupMapUrl,
  getPriceGuidance,
  getRiskBadges,
  getRouteDecision,
  getSourceFreshness,
} from "@/data/routeIntelligence";
import {
  ArrowLeft,
  Clock3,
  Luggage,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

type OptionDetails = {
  label: string;
  operator: string;
  departures: string;
  baggage: string;
  image: string;
  pros: string[];
  cons: string[];
};

type MobilePriorityRouteOptionsScreenProps = {
  route: RoutePageData;
  title: string;
  summaryLeftTitle: string;
  summaryLeftText: string;
  summaryRightTitle: string;
  summaryRightText: string;
  optionDetailsById?: Record<string, OptionDetails>;
  detailsHref: string;
  footerNote: string;
  selectedDate?: string;
  passengers?: string;
};

function getBadgeColor(id: string) {
  if (id.includes("bus")) return "bg-emerald-500";
  if (id.includes("taxi")) return "bg-amber-500";
  if (id.includes("van")) return "bg-blue-500";
  return "bg-slate-500";
}

function getOptionDetails(
  option: RouteTransportOption,
  optionDetailsById: Record<string, OptionDetails> | undefined,
) {
  return (
    optionDetailsById?.[option.id] ?? {
      label: "Partner option",
      operator: "Partner operator",
      departures: "Current schedule",
      baggage: "Check rules",
      image: mobileVehicleAssets.van,
      pros: [option.bestFor, "Partner availability"],
      cons: ["Details can change", "Check ticket rules before booking"],
    }
  );
}

function getDetailsHref(detailsHref: string, optionId: string) {
  const separator = detailsHref.includes("?") ? "&" : "?";

  return `${detailsHref}${separator}option=${encodeURIComponent(optionId)}`;
}

function getRouteImage(route: RoutePageData) {
  return `/assets/routes/${route.slug}.png`;
}

function getCompactCtaLabel(option: RouteTransportOption) {
  const id = option.id.toLowerCase();
  const name = option.name.toLowerCase();

  if (id.includes("bus") || name.includes("bus")) {
    return "Check bus price";
  }

  if (id.includes("taxi") || name.includes("taxi")) {
    return "Check taxi";
  }

  if (
    id.includes("ferry") ||
    id.includes("speedboat") ||
    name.includes("ferry") ||
    name.includes("speedboat")
  ) {
    return "Live schedule";
  }

  return "Ticket rules";
}

const bkkPattayaDeepGuides = [
  { label: "Bus", href: "/routes/bangkok-airport-to-pattaya/bus" },
  { label: "Taxi", href: "/routes/bangkok-airport-to-pattaya/taxi" },
  { label: "Late arrival", href: "/routes/bangkok-airport-to-pattaya/late-arrival" },
  { label: "With luggage", href: "/routes/bangkok-airport-to-pattaya/with-luggage" },
  { label: "Gate 8", href: "/guides/bkk-airport-pickup-level-1-gate-8" },
];

export function MobilePriorityRouteOptionsScreen({
  route,
  title,
  summaryLeftTitle,
  summaryLeftText,
  summaryRightTitle,
  summaryRightText,
  optionDetailsById,
  detailsHref,
  footerNote,
  selectedDate,
  passengers = "2",
}: MobilePriorityRouteOptionsScreenProps) {
  const footerWithFreshness = footerNote.startsWith("Last checked")
    ? footerNote
    : `Last checked May 2026. ${footerNote}`;
  const passengerLabel =
    passengers === "1"
      ? "1 Adult"
      : passengers === "5"
        ? "5+ Adults"
        : `${passengers} Adults`;
  const optionsLabel = selectedDate
    ? `${route.options.length} options for ${selectedDate}`
    : `${route.options.length} best options found`;
  const freshness = getSourceFreshness(route);

  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-20">
      <RouteStructuredData route={route} />
      <RouteAnalytics route={route.slug} />
      <div className="mx-auto max-w-md px-4 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Back to search"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="text-center">
            <h1 className="text-[16px] font-extrabold text-[#10201d]">
              {title}
            </h1>

            <div className="mt-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
              <span>{selectedDate || "Choose date"}</span>
              <span>-</span>
              <span>{passengerLabel}</span>
            </div>
          </div>

          <div
            aria-label="Route preview"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <MapPin className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-3 shadow-lg shadow-black/5">
          <div className="relative h-44 overflow-hidden rounded-[1.15rem] bg-[#10201d]">
            <Image
              src={getRouteImage(route)}
              alt={`${route.from} to ${route.to} transfer route`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 390px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/88 via-[#10201d]/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#10201d]/55 via-[#10201d]/18 to-transparent" />
            <div className="absolute inset-x-4 top-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f0c96a] drop-shadow-sm">
                Best option for your situation
              </p>
            </div>
            <div className="absolute inset-x-4 bottom-4">
              <h2 className="text-[25px] font-extrabold leading-tight text-white">
                {route.to}
              </h2>
              <p className="mt-2 text-xs font-medium leading-5 text-white/82">
                {getRouteDecision(route)}
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              [summaryLeftTitle, summaryLeftText],
              [summaryRightTitle, summaryRightText],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2 rounded-2xl bg-[#f8f4ec] px-3 py-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                <div>
                  <p className="text-[12px] font-bold leading-snug text-[#10201d]">
                    {label}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {getDecisionLabels(route).map((item) => (
            <div
              key={item.label}
              className="rounded-[16px] border border-[#e7e2d8] bg-white px-3 py-2 shadow-sm"
            >
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#c99a2e]">
                {item.label}
              </p>
              <p className="mt-1 truncate text-[12px] font-extrabold text-[#10201d]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {route.slug === "bangkok-airport-to-pattaya" ? (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {bkkPattayaDeepGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="shrink-0 rounded-full bg-[#10201d] px-3 py-2 text-[11px] font-extrabold text-white"
              >
                {guide.label}
              </Link>
            ))}
          </div>
        ) : null}

        <ReturnTransferIntelligence route={route} />
        <FerryIntelligence route={route} />

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-sm font-extrabold text-[#10201d]">
            {optionsLabel}
          </p>

          <div className="flex items-center gap-1 rounded-xl border border-[#e7e2d8] bg-white px-3 py-2 text-xs font-bold text-[#10201d] shadow-sm">
            <span>{passengerLabel}</span>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {route.options.map((option) => {
            const details = getOptionDetails(option, optionDetailsById);

            return (
              <article
                key={option.id}
                className="overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
              >
                <div className="relative">
                  <div
                    className={`absolute left-0 top-0 z-10 rounded-br-2xl px-3 py-1.5 text-[11px] font-extrabold uppercase text-white ${getBadgeColor(
                      option.id,
                    )}`}
                  >
                    {details.label}
                  </div>

                  <div className="grid grid-cols-[108px_1fr] gap-4 p-3">
                    <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl bg-[#f8f4ec]">
                      <Image
                        src={details.image}
                        alt={option.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="pt-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="text-xl font-extrabold text-[#10201d]">
                            {option.name}
                          </h2>
                          <p className="mt-1 text-xs font-medium text-slate-500">
                            {details.operator}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-extrabold text-[#064e45]">
                            Final price
                          </p>
                          <p className="text-[10px] font-medium text-slate-500">
                            final on partner
                          </p>
                        </div>
                      </div>

                      <p className="mt-2 text-[11px] leading-4 text-slate-500">
                        {getPriceGuidance(option)}
                      </p>

                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-2xl bg-[#f8f4ec] px-2 py-2">
                          <Clock3 className="mx-auto h-3.5 w-3.5 text-[#0c5a4d]" />
                          <p className="mt-1 text-[11px] font-bold text-[#10201d]">
                            {option.duration}
                          </p>
                          <p className="mt-0.5 text-[9.5px] text-slate-500">
                            Time
                          </p>
                        </div>

                        <div className="rounded-2xl bg-[#f8f4ec] px-2 py-2">
                          <Users className="mx-auto h-3.5 w-3.5 text-[#0c5a4d]" />
                          <p className="mt-1 text-[11px] font-bold text-[#10201d]">
                            {details.departures}
                          </p>
                          <p className="mt-0.5 text-[9.5px] text-slate-500">
                            Departures
                          </p>
                        </div>

                        <div className="rounded-2xl bg-[#f8f4ec] px-2 py-2">
                          <Luggage className="mx-auto h-3.5 w-3.5 text-[#0c5a4d]" />
                          <p className="mt-1 text-[11px] font-bold text-[#10201d]">
                            {details.baggage}
                          </p>
                          <p className="mt-0.5 text-[9.5px] text-slate-500">
                            Luggage
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#e7e2d8] px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />

                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Pickup
                        </p>
                        <p className="mt-1 text-sm font-extrabold text-[#10201d]">
                          {option.pickup}
                        </p>
                      </div>
                      </div>

                      <TrackedAnchor
                        href={getPickupMapUrl(route, option)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-full border border-[#0c5a4d] px-3 py-2 text-[11px] font-extrabold text-[#0c5a4d]"
                        event="map_opened"
                        payload={{
                          route: route.slug,
                          option: option.id,
                          map_type: "pickup",
                        }}
                      >
                        Map
                      </TrackedAnchor>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-[#e7e2d8] px-4 py-3">
                    {getRiskBadges(route, option).map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-[#f0eadf] px-2.5 py-1 text-[10.5px] font-extrabold text-[#51615c]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-[#e7e2d8] px-4 py-3">
                    <div>
                      <p className="text-xs font-extrabold text-[#064e45]">
                        Pros
                      </p>
                      <ul className="mt-1 space-y-1 text-[11px] leading-4 text-slate-600">
                        {details.pros.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-extrabold text-slate-500">
                        Cons
                      </p>
                      <ul className="mt-1 space-y-1 text-[11px] leading-4 text-slate-600">
                        {details.cons.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-[#e7e2d8] px-4 py-3">
                    <div className="mb-3 rounded-2xl bg-[#fbfaf7] px-3 py-2">
                      <p className="text-[11px] font-extrabold text-[#10201d]">
                        {details.label}
                      </p>
                      <p className="mt-0.5 text-[10.5px] leading-4 text-slate-500">
                        {affiliateMicroDisclosure}
                      </p>
                    </div>

                    <div className="grid grid-cols-[0.78fr_1.22fr] gap-2">
                      <Link
                        href={getDetailsHref(detailsHref, option.id)}
                        className="flex min-h-10 items-center justify-center rounded-full border border-[#0c5a4d] px-3 py-2 text-[12px] font-extrabold text-[#0c5a4d]"
                      >
                        Details
                      </Link>

                      <AffiliateButton
                        href={option.affiliateUrl}
                        trackingId={option.trackingId}
                        variant="mobileCompact"
                        fullWidth
                      >
                        {getCompactCtaLabel(option)}
                      </AffiliateButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Sources & freshness: last checked {freshness.lastChecked}. Official source:
          {" "}
          {freshness.officialSource}. Partner source: {freshness.partnerSource}.
          Confidence: {freshness.confidence}. {footerWithFreshness}
        </p>
        <AffiliateDisclosure className="mt-2 text-center" />
      </div>
      <MobileBottomNav activeLabel="Routes" />
    </section>
  );
}
