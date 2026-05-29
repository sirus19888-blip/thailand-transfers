"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Plane, ShieldCheck, MapPin } from "lucide-react";

const airportDestinations: Record<
  string,
  { label: string; route: string; routeName: string }[]
> = {
  bkk: [
    {
      label: "Pattaya",
      route: "/routes/bangkok-airport-to-pattaya",
      routeName: "BKK to Pattaya",
    },
    {
      label: "Hua Hin",
      route: "/routes/suvarnabhumi-airport-to-hua-hin",
      routeName: "BKK to Hua Hin",
    },
    {
      label: "Koh Chang",
      route: "/routes/suvarnabhumi-airport-to-koh-chang",
      routeName: "BKK to Koh Chang",
    },
  ],
  dmk: [
    {
      label: "Pattaya",
      route: "/routes/don-mueang-airport-to-pattaya",
      routeName: "DMK to Pattaya",
    },
    {
      label: "Hua Hin",
      route: "/routes/don-mueang-airport-to-hua-hin",
      routeName: "DMK to Hua Hin",
    },
  ],
  phuket: [
    {
      label: "Patong Beach",
      route: "/routes/phuket-airport-to-patong-beach",
      routeName: "Phuket Airport to Patong",
    },
    {
      label: "Kata / Karon",
      route: "/routes/phuket-airport-to-kata-karon",
      routeName: "Phuket Airport to Kata / Karon",
    },
  ],
  krabi: [
    {
      label: "Ao Nang",
      route: "/routes/krabi-airport-to-ao-nang",
      routeName: "Krabi Airport to Ao Nang",
    },
  ],
  "surat-thani": [
    {
      label: "Koh Samui",
      route: "/routes/surat-thani-airport-to-koh-samui",
      routeName: "Surat Thani Airport to Koh Samui",
    },
    {
      label: "Koh Phangan",
      route: "/routes/surat-thani-airport-to-koh-phangan",
      routeName: "Surat Thani Airport to Koh Phangan",
    },
  ],
  "chiang-mai": [
    {
      label: "Bangkok",
      route: "/routes/chiang-mai-to-bangkok",
      routeName: "Chiang Mai to Bangkok",
    },
  ],
};

const airports = [
  { value: "bkk", label: "BKK" },
  { value: "dmk", label: "DMK" },
  { value: "phuket", label: "Phuket" },
  { value: "krabi", label: "Krabi" },
  { value: "surat-thani", label: "Surat Thani" },
  { value: "chiang-mai", label: "Chiang Mai" },
];

function getLandingAdvice(airport: string, destination: string) {
  const hour = new Date().getHours();
  const isLate = hour >= 20 || hour < 6;
  const isIsland =
    destination.toLowerCase().includes("koh") ||
    destination.toLowerCase().includes("samui") ||
    destination.toLowerCase().includes("phangan");

  if (isIsland) {
    return {
      best: isLate ? "Sleep near the airport or choose a morning connection." : "Check the next ferry/van-ferry ticket first.",
      goTo:
        airport === "surat-thani"
          ? "Go to the operator meeting point inside Surat Thani Airport."
          : "Go to the confirmed airport pickup point on your ticket.",
      avoid: "Avoid tight same-day ferry plans after afternoon flight delays.",
    };
  }

  if (isLate) {
    return {
      best: "Private taxi is usually the easiest option right now.",
      goTo: "Use an official counter, pre-booked meeting point or partner ticket instructions.",
      avoid: "Avoid random drivers approaching you inside the terminal.",
    };
  }

  return {
    best: "Compare bus/van first, then taxi if luggage or waiting time matters.",
    goTo: "Go to the pickup level, gate, counter or meeting point shown on your ticket.",
    avoid: "Avoid booking before checking pickup rules, baggage limits and final drop-off.",
  };
}

export function JustLandedMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [airport, setAirport] = useState("bkk");
  const [destination, setDestination] = useState("Pattaya");
  const destinations = airportDestinations[airport];
  const selectedDestination =
    destinations.find((item) => item.label === destination) ?? destinations[0];
  const advice = useMemo(
    () => getLandingAdvice(airport, selectedDestination.label),
    [airport, selectedDestination.label],
  );

  function handleAirportChange(nextAirport: string) {
    setAirport(nextAirport);
    setDestination(airportDestinations[nextAirport][0].label);
  }

  return (
    <div
      id="just-landed"
      className="mt-3 rounded-[20px] border border-[#e7e2d8] bg-white p-3 shadow-sm"
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl bg-[#10201d] px-4 py-3 text-left text-white"
      >
        <span className="flex items-center gap-2 text-sm font-extrabold">
          <Plane className="h-4 w-4 text-[#f4c86a]" />
          I just landed
        </span>
        <span className="text-[11px] font-semibold text-white/70">
          {selectedDestination.routeName}
        </span>
      </button>

      {isOpen ? (
        <div className="mt-3 grid gap-3">
          <div className="grid grid-cols-2 gap-2">
            <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Airport
              </span>
              <select
                value={airport}
                onChange={(event) => handleAirportChange(event.target.value)}
                className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
              >
                {airports.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                Going to
              </span>
              <select
                value={selectedDestination.label}
                onChange={(event) => setDestination(event.target.value)}
                className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
              >
                {destinations.map((item) => (
                  <option key={item.label} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-2xl bg-[#f8f4ec] p-3">
            <div className="flex gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
              <div>
                <p className="text-sm font-extrabold text-[#10201d]">
                  {advice.best}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#4b5d58]">
                  {advice.goTo}
                </p>
              </div>
            </div>
            <p className="mt-2 flex gap-2 text-xs leading-5 text-[#8a3b1f]">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {advice.avoid}
            </p>
          </div>

          <Link
            href={selectedDestination.route}
            className="flex min-h-12 items-center justify-center rounded-2xl bg-[#0c5a4d] px-4 py-3 text-sm font-extrabold text-white"
          >
            Open safest route options
          </Link>
        </div>
      ) : null}
    </div>
  );
}
