"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { getMobileVehicleImage } from "@/components/mobileVehicleAssets";
import type { RoutePageData } from "@/data/routePages";

type StandardMobileRouteOptionsProps = {
  route: RoutePageData;
  selectedDate?: string;
  passengers?: string;
};

function getOptionLabel(optionId: string) {
  if (optionId.includes("taxi")) return "Most flexible";
  if (optionId.includes("train")) return "Scenic option";
  if (optionId.includes("bus")) return "Best value";
  if (optionId.includes("van")) return "Shared ride";
  if (optionId.includes("flight")) return "Compare all";

  return "Live option";
}

function buildOptionDetails(route: RoutePageData) {
  return Object.fromEntries(
    route.options.map((option) => [
      option.id,
      {
        label: getOptionLabel(option.id),
        operator: `${option.name} partner operators`,
        departures: option.id.includes("taxi") ? "On demand" : "Live schedule",
        baggage: option.id.includes("taxi") ? "Private car" : "Check rules",
        image: getMobileVehicleImage(option.id),
        rating: option.id.includes("taxi") ? "4.8" : "4.5",
        reviews: "Partner details",
        pros: [option.bestFor, "Live partner availability"],
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
}: StandardMobileRouteOptionsProps) {
  return (
    <Suspense
      fallback={<StandardMobileRouteOptionsFallback route={route} />}
    >
      <StandardMobileRouteOptionsContent
        route={route}
        selectedDate={selectedDate}
        passengers={passengers}
      />
    </Suspense>
  );
}

function StandardMobileRouteOptionsFallback({ route }: { route: RoutePageData }) {
  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-20">
      <div className="mx-auto max-w-md px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-full bg-white shadow-sm" />

          <div className="text-center">
            <p className="text-[16px] font-extrabold text-[#10201d]">
              {compactRouteTitle(route)}
            </p>
            <p className="mt-1 text-[11px] font-medium text-slate-500">
              Loading route options
            </p>
          </div>

          <div className="h-10 w-10 rounded-full bg-white shadow-sm" />
        </div>

        <AffiliateDisclosure className="mt-5 text-center" />
      </div>

      <MobileBottomNav activeLabel="Routes" />
    </section>
  );
}

function StandardMobileRouteOptionsContent({
  route,
  selectedDate,
  passengers,
}: StandardMobileRouteOptionsProps) {
  const searchParams = useSearchParams();
  const queryDate = searchParams.get("date") ?? undefined;
  const queryPassengers = searchParams.get("passengers") ?? undefined;

  return (
    <StandardMobileRouteOptionsView
      route={route}
      selectedDate={selectedDate ?? queryDate}
      passengers={passengers ?? queryPassengers}
    />
  );
}

function StandardMobileRouteOptionsView({
  route,
  selectedDate,
  passengers,
}: StandardMobileRouteOptionsProps) {
  return (
    <MobilePriorityRouteOptionsScreen
      route={route}
      title={compactRouteTitle(route)}
      summaryLeftTitle="Route data"
      summaryLeftText="Check live offers"
      summaryRightTitle="Pickup details"
      summaryRightText="Confirm before booking"
      optionDetailsById={buildOptionDetails(route)}
      detailsHref={`/routes/${route.slug}/details`}
      footerNote="Live prices and schedules may change. Check pickup point, luggage rules and operator notes before booking."
      selectedDate={selectedDate}
      passengers={passengers}
    />
  );
}
