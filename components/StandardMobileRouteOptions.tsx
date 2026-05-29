"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { getMobileVehicleImage } from "@/components/mobileVehicleAssets";
import type { RoutePageData } from "@/data/routePages";
import {
  getGuideStatus,
  getOptionLabel,
  getQuickGuideNotes,
} from "@/data/routeIntelligence";

type StandardMobileRouteOptionsProps = {
  route: RoutePageData;
  selectedDate?: string;
  passengers?: string;
  arrivalTime?: string;
  useProvidedParamsOnly?: boolean;
};

function buildOptionDetails(route: RoutePageData) {
  return Object.fromEntries(
    route.options.map((option) => [
      option.id,
      {
        label: getOptionLabel(option),
        operator: `${option.name} partner operators`,
        departures: option.id.includes("taxi") ? "On demand" : "Current schedule",
        baggage: option.id.includes("taxi") ? "Private car" : "Check rules",
        image: getMobileVehicleImage(option.id),
        pros: [option.bestFor, "Partner availability"],
        cons: ["Details can change", "Check ticket rules before booking"],
      },
    ]),
  );
}

function compactRouteTitle(route: RoutePageData) {
  const from = route.from
    .replace("Suvarnabhumi Airport", "BKK")
    .replace("Don Mueang Airport", "DMK")
    .replace("Krabi Airport", "KBV");
  const to = route.to
    .replace("Suvarnabhumi Airport", "BKK")
    .replace("Don Mueang Airport", "DMK")
    .replace("Krabi Airport", "KBV");

  return `${from} - ${to}`;
}

export function StandardMobileRouteOptions({
  route,
  selectedDate,
  passengers,
  arrivalTime,
  useProvidedParamsOnly,
}: StandardMobileRouteOptionsProps) {
  if (useProvidedParamsOnly) {
    return (
      <StandardMobileRouteOptionsView
        route={route}
        selectedDate={selectedDate}
        passengers={passengers}
        arrivalTime={arrivalTime}
      />
    );
  }

  return (
    <Suspense
      fallback={<StandardMobileRouteOptionsFallback route={route} />}
    >
      <StandardMobileRouteOptionsContent
        route={route}
        selectedDate={selectedDate}
        passengers={passengers}
        arrivalTime={arrivalTime}
      />
    </Suspense>
  );
}

function StandardMobileRouteOptionsFallback({ route }: { route: RoutePageData }) {
  const isQuickGuide = getGuideStatus(route.slug) === "Quick guide";
  const quickGuideNotes = isQuickGuide ? getQuickGuideNotes(route) : [];

  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-20">
      <div className="mx-auto max-w-md px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-full bg-white shadow-sm" />

          <div className="text-center">
            <h1 className="text-[16px] font-extrabold text-[#10201d]">
              {compactRouteTitle(route)}
            </h1>
            <p className="mt-1 text-[11px] font-medium text-slate-500">
              Quick guide
            </p>
          </div>

          <div className="h-10 w-10 rounded-full bg-white shadow-sm" />
        </div>

        <div className="mt-5 rounded-[18px] border border-[#e7e2d8] bg-white p-4 shadow-sm">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
            {isQuickGuide ? "Quick route notes" : "Route options"}
          </p>

          {quickGuideNotes.length ? (
            <div className="mt-3 divide-y divide-[#eee8dd]">
              {quickGuideNotes.map((note) => (
                <div key={note.title} className="py-3 first:pt-0 last:pb-0">
                  <h2 className="text-sm font-extrabold text-[#10201d]">
                    {note.title}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Check final schedule, luggage rules and pickup details on the
              partner page.
            </p>
          )}
        </div>

        <AffiliateDisclosure className="mt-4 text-center" />
      </div>

      <MobileBottomNav activeLabel="Routes" />
    </section>
  );
}

function StandardMobileRouteOptionsContent({
  route,
  selectedDate,
  passengers,
  arrivalTime,
}: Omit<StandardMobileRouteOptionsProps, "useProvidedParamsOnly">) {
  const searchParams = useSearchParams();
  const queryDate = searchParams.get("date") ?? undefined;
  const queryPassengers = searchParams.get("passengers") ?? undefined;
  const queryArrivalTime = searchParams.get("arrival_time") ?? undefined;

  return (
    <StandardMobileRouteOptionsView
      route={route}
      selectedDate={selectedDate ?? queryDate}
      passengers={passengers ?? queryPassengers}
      arrivalTime={arrivalTime ?? queryArrivalTime}
    />
  );
}

function StandardMobileRouteOptionsView({
  route,
  selectedDate,
  passengers,
  arrivalTime,
}: Omit<StandardMobileRouteOptionsProps, "useProvidedParamsOnly">) {
  const quickGuideNotes =
    getGuideStatus(route.slug) === "Quick guide"
      ? getQuickGuideNotes(route)
      : undefined;

  return (
    <MobilePriorityRouteOptionsScreen
      route={route}
      title={compactRouteTitle(route)}
      summaryLeftTitle="Route data"
      summaryLeftText="Final partner rules"
      summaryRightTitle="Pickup details"
      summaryRightText="Confirm before booking"
      optionDetailsById={buildOptionDetails(route)}
      detailsHref={`/routes/${route.slug}/details`}
      footerNote="Final prices and schedules are confirmed by the partner. Check pickup point, luggage rules and operator notes before booking."
      selectedDate={selectedDate}
      passengers={passengers}
      arrivalTime={arrivalTime}
      quickGuideNotes={quickGuideNotes}
    />
  );
}
