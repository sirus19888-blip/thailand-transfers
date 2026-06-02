"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock3, ShieldCheck, Users } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import type { RoutePageData, RouteTransportOption } from "@/data/routePages";
import {
  getArrivalTimeLabel,
  getCompactCtaLabel,
  getPassengerLabel,
  getPersonalizedDetailsChecks,
  getPersonalizedOptionNote,
} from "@/data/routeIntelligence";

type MobilePersonalizedTripCardProps = {
  route: RoutePageData;
  selectedOptionId?: string;
  backHref?: string;
  className?: string;
};

type MobilePersonalizedDetailsStickyProps = {
  route: RoutePageData;
  selectedOptionId?: string;
  stickyLabel?: string;
};

function getQueryValue(value: string | null) {
  return value && value.trim() ? value : undefined;
}

function getSelectedOption(
  route: RoutePageData,
  selectedOptionId?: string,
  queryOptionId?: string,
): RouteTransportOption {
  const normalizedQueryOptionId = queryOptionId?.trim();
  const normalizedSelectedOptionId = selectedOptionId?.trim();
  const fallbackOption = route.options[0] ?? {
    id: "general",
    name: "Selected option",
    price: "Partner price",
    duration: "Check partner",
    pickup: route.from,
    bestFor: "Travelers checking partner details",
    trackingId: "",
    affiliateUrl: route.mainAffiliateUrl,
  };

  return (
    route.options.find((option) => option.id === normalizedQueryOptionId) ??
    route.options.find((option) => option.id === normalizedSelectedOptionId) ??
    fallbackOption
  );
}

function getTripContext(searchParams: ReturnType<typeof useSearchParams>) {
  const arrivalTime = getQueryValue(searchParams.get("arrival_time"));
  const passengers = getQueryValue(searchParams.get("passengers"));
  const option = getQueryValue(searchParams.get("option"));

  return {
    arrivalTime,
    passengers,
    option,
    arrivalLabel: getArrivalTimeLabel(arrivalTime),
    passengerLabel: getPassengerLabel(passengers),
  };
}

function hasPersonalizedContext(arrivalTime?: string, passengers?: string) {
  return Boolean(arrivalTime || passengers);
}

export function MobilePersonalizedTripCard({
  route,
  selectedOptionId,
  backHref,
  className = "",
}: MobilePersonalizedTripCardProps) {
  const searchParams = useSearchParams();
  const context = getTripContext(searchParams);
  const selectedOption = getSelectedOption(route, selectedOptionId, context.option);
  const note = getPersonalizedOptionNote(
    route,
    selectedOption,
    context.arrivalTime,
    context.passengers,
  );
  const backParams = new URLSearchParams(searchParams.toString());
  const checks = getPersonalizedDetailsChecks(
    route,
    selectedOption,
    context.arrivalTime,
    context.passengers,
  );
  backParams.delete("option");
  const personalizedBackHref =
    backHref && backParams.toString()
      ? `${backHref}?${backParams.toString()}`
      : backHref;

  if (!hasPersonalizedContext(context.arrivalTime, context.passengers)) {
    return null;
  }

  return (
    <div
      className={`rounded-[1.25rem] border border-[#d8eadf] bg-[#f4fbf7] p-4 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0c5a4d] shadow-sm">
          <ShieldCheck className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0c5a4d]">
            Your selected trip
          </p>
          <h2 className="mt-1 text-base font-extrabold leading-5 text-[#10201d]">
            {selectedOption.name} for {context.passengerLabel.toLowerCase()}
          </h2>
          <p className="mt-2 text-xs leading-5 text-[#41524d]">
            {note.text}
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-white px-3 py-2">
          <div className="flex items-center gap-1.5 text-[#0c5a4d]">
            <Clock3 className="h-3.5 w-3.5" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em]">
              Timing
            </p>
          </div>
          <p className="mt-1 text-xs font-extrabold text-[#10201d]">
            {context.arrivalLabel ?? note.timingTag}
          </p>
        </div>

        <div className="rounded-2xl bg-white px-3 py-2">
          <div className="flex items-center gap-1.5 text-[#0c5a4d]">
            <Users className="h-3.5 w-3.5" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em]">
              Travelers
            </p>
          </div>
          <p className="mt-1 text-xs font-extrabold text-[#10201d]">
            {context.passengerLabel}
          </p>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {checks.slice(1, 3).map((check) => (
          <div key={check} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
            <p className="text-xs leading-5 text-[#41524d]">{check}</p>
          </div>
        ))}
      </div>

      {backHref ? (
        <Link
          href={personalizedBackHref ?? backHref}
          className="mt-3 flex min-h-10 items-center justify-center rounded-2xl border border-[#0c5a4d] bg-white px-4 py-2 text-xs font-extrabold text-[#0c5a4d]"
        >
          Back to personalized options
        </Link>
      ) : null}
    </div>
  );
}

export function MobilePersonalizedDetailsSticky({
  route,
  selectedOptionId,
  stickyLabel,
}: MobilePersonalizedDetailsStickyProps) {
  const searchParams = useSearchParams();
  const context = getTripContext(searchParams);
  const selectedOption = getSelectedOption(route, selectedOptionId, context.option);
  const timingText = context.arrivalLabel ?? "Selected timing";
  const subline = hasPersonalizedContext(context.arrivalTime, context.passengers)
    ? `${timingText} - ${context.passengerLabel}`
    : "Price and ticket rules on partner";

  return (
    <div
      data-mobile-sticky-cta="true"
      className="fixed inset-x-0 bottom-[calc(3.55rem+env(safe-area-inset-bottom))] z-40 border-t border-[#e7e2d8] bg-white/95 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur"
    >
      <div className="mx-auto grid max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-extrabold leading-4 text-[#10201d]">
            {selectedOption?.name ?? stickyLabel ?? "Selected option"}
          </p>
          <p className="text-[10px] font-semibold leading-4 text-slate-500">
            {subline}
          </p>
        </div>

        <AffiliateButton
          href={selectedOption?.affiliateUrl ?? route.mainAffiliateUrl}
          trackingId={selectedOption?.trackingId}
          variant="detailsSticky"
        >
          {getCompactCtaLabel(selectedOption)}
        </AffiliateButton>
      </div>
    </div>
  );
}
