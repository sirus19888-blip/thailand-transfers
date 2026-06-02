"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Search,
  ShieldCheck,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import {
  highDemandRouteSearches,
  mainRoute,
  popularRoutes,
} from "@/data/routes";
import {
  affiliateMicroDisclosure,
  getGuideStatus,
  getStatusDescription,
} from "@/data/routeIntelligence";

type RouteCardData = (typeof popularRoutes)[number];
type PartnerSearchData = (typeof highDemandRouteSearches)[number];
type TabId = "airport" | "islands" | "beach" | "partner";

const featuredRoute =
  popularRoutes.find((route) => route.id === "bangkok-pattaya") ??
  popularRoutes[0];

const tabs: { id: TabId; label: string }[] = [
  { id: "airport", label: "Airport" },
  { id: "islands", label: "Islands" },
  { id: "beach", label: "Beach" },
  { id: "partner", label: "Partner only" },
];

const airportRoutes = popularRoutes.filter((route) =>
  route.title.toLowerCase().includes("airport"),
);

const islandRoutes = popularRoutes.filter((route) =>
  ["koh", "samui", "phangan", "phi phi"].some((keyword) =>
    route.title.toLowerCase().includes(keyword),
  ),
);

const beachRoutes = popularRoutes.filter((route) =>
  ["pattaya", "hua hin", "patong", "kata", "karon", "ao nang"].some(
    (keyword) => route.title.toLowerCase().includes(keyword),
  ),
);

function matchesQuery(
  item: Pick<RouteCardData, "title" | "description">,
  query: string,
) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  return `${item.title} ${item.description}`
    .toLowerCase()
    .includes(normalizedQuery);
}

function RouteCard({ route }: { route: RouteCardData }) {
  const slug = route.href.split("/").filter(Boolean).at(-1);
  const status = getGuideStatus(slug);

  return (
    <Link
      href={route.href}
      className="group block overflow-hidden rounded-[18px] border border-[#e7e2d8] bg-white shadow-sm"
    >
      <div className="relative aspect-[16/7.8] overflow-hidden">
        <Image
          src={route.image}
          alt={route.title}
          fill
          loading="eager"
          sizes="(max-width: 1023px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/72 via-[#10201d]/12 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-extrabold text-[#0c5a4d]">
            {status}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#10201d]/74 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
            <Clock3 className="h-3 w-3" />
            {route.duration}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
          {route.title}
        </h3>
        <p className="mt-2 text-[13px] leading-5 text-[#4b5d58]">
          {route.description}
        </p>
        <p className="mt-2 text-[11px] font-semibold leading-4 text-[#667085]">
          {getStatusDescription(status)}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eee7dc] pt-3">
          <span className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#8b6b20]">
            Compare
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0c5a4d] text-white transition group-hover:bg-[#10201d]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function PartnerCard({ route }: { route: PartnerSearchData }) {
  return (
    <article className="rounded-[18px] border border-[#eee7dc] bg-white p-4 shadow-sm">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
        Partner search only
      </p>
      <h3 className="mt-2 text-[16px] font-extrabold leading-snug text-[#10201d]">
        {route.title}
      </h3>
      <p className="mt-1 text-[11px] font-semibold leading-4 text-[#667085]">
        {getStatusDescription("Partner search only")}
      </p>
      <p className="mt-2 text-[13px] leading-5 text-[#4b5d58]">
        {route.description}
      </p>
      <div className="mt-3">
        <AffiliateButton
          href={route.affiliateUrl}
          trackingId={route.trackingId}
          variant="table"
          fullWidth
        >
          See live schedule and pickup rules
        </AffiliateButton>
        <p className="mt-2 text-[10.5px] leading-4 text-slate-500">
          {affiliateMicroDisclosure}
        </p>
      </div>
    </article>
  );
}

export function RoutesMobileHub() {
  const [activeTab, setActiveTab] = useState<TabId>("airport");
  const [query, setQuery] = useState("");

  const routesForTab = useMemo(() => {
    if (activeTab === "islands") {
      return islandRoutes.filter((route) => matchesQuery(route, query));
    }

    if (activeTab === "beach") {
      return beachRoutes.filter((route) => matchesQuery(route, query));
    }

    return airportRoutes.filter((route) => matchesQuery(route, query));
  }, [activeTab, query]);

  const partnerRoutes = useMemo(
    () =>
      highDemandRouteSearches
        .filter((route) => matchesQuery(route, query))
        .slice(0, 6),
    [query],
  );

  return (
    <section className="mx-auto max-w-md px-4 py-5 lg:hidden">
      <div className="rounded-[22px] border border-[#e7e2d8] bg-white p-4 shadow-sm">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
          Route hub
        </p>
        <h1 className="mt-1 text-[28px] font-black leading-tight tracking-normal text-[#10201d]">
          Browse transfer routes
        </h1>

        <label className="mt-4 flex min-h-12 items-center gap-2 rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] px-3">
          <Search className="h-4 w-4 text-[#0c5a4d]" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search airport, island or beach"
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#10201d] outline-none placeholder:text-slate-400"
          />
        </label>
      </div>

      <section className="pt-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              Start here
            </p>
            <h2 className="mt-1 text-[22px] font-black tracking-normal text-[#10201d]">
              Most checked route
            </h2>
          </div>
          <BadgeCheck className="h-6 w-6 text-[#0c5a4d]" />
        </div>

        <RouteCard route={featuredRoute} />

        <div className="mt-4">
          <AffiliateButton
            href={mainRoute.affiliateUrl}
            trackingId="click_12go_routes_mobile_bkk_pattaya"
            fullWidth
          >
            Compare final BKK to Pattaya prices
          </AffiliateButton>
          <AffiliateDisclosure className="mt-3 text-center" />
        </div>
      </section>

      <section className="pt-6">
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-[12px] font-extrabold transition ${
                  isActive
                    ? "bg-[#0c5a4d] text-white"
                    : "bg-white text-[#10201d] shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-[18px] border border-[#e7e2d8] bg-white/70 p-3">
          <div className="mb-3 flex items-center gap-2 rounded-2xl bg-white px-3 py-3">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#0c5a4d]" />
            <p className="text-[12px] font-semibold leading-5 text-[#4b5d58]">
              Check exact pickup, luggage rules and operating days before
              booking.
            </p>
          </div>

          <div className="grid gap-3">
            {activeTab === "partner"
              ? partnerRoutes.map((route) => (
                  <PartnerCard key={route.id} route={route} />
                ))
              : routesForTab.map((route) => (
                  <RouteCard key={route.id} route={route} />
                ))}
          </div>

          {activeTab !== "partner" && routesForTab.length === 0 ? (
            <p className="rounded-2xl bg-white px-3 py-4 text-center text-sm font-semibold text-slate-500">
              No matching route in this tab.
            </p>
          ) : null}
        </div>
      </section>
    </section>
  );
}
