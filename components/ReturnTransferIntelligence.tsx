"use client";

import { useMemo, useState } from "react";
import { Plane, ShieldCheck } from "lucide-react";
import type { RoutePageData } from "@/data/routePages";

function isReturnRoute(route: RoutePageData) {
  const text = `${route.from} ${route.to}`.toLowerCase();

  return (
    text.includes("airport") &&
    !route.from.toLowerCase().includes("airport")
  );
}

function getBaseBufferHours(route: RoutePageData) {
  const text = `${route.from} ${route.to}`.toLowerCase();

  if (text.includes("koh chang")) return 10;
  if (text.includes("hua hin")) return 6;
  if (text.includes("pattaya")) return 5;
  if (text.includes("samui") || text.includes("phangan")) return 8;

  return 5;
}

function formatLeaveTime(flightTime: string, bufferHours: number) {
  if (!flightTime) return "Choose flight time";

  const [hours, minutes] = flightTime.split(":").map(Number);
  const flightDate = new Date();

  flightDate.setHours(hours || 0, minutes || 0, 0, 0);
  flightDate.setHours(flightDate.getHours() - bufferHours);

  return flightDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ReturnTransferIntelligence({ route }: { route: RoutePageData }) {
  const [flightTime, setFlightTime] = useState("12:00");
  const [flightType, setFlightType] = useState("international");
  const [luggage, setLuggage] = useState("normal");
  const [dayType, setDayType] = useState("normal");

  const isReturn = isReturnRoute(route);
  const bufferHours = useMemo(() => {
    let buffer = getBaseBufferHours(route);

    if (flightType === "international") buffer += 1;
    if (luggage === "large") buffer += 1;
    if (dayType === "friday") buffer += 1;

    return buffer;
  }, [dayType, flightType, luggage, route]);

  if (!isReturn) return null;

  return (
    <section className="mt-3 rounded-[18px] border border-[#e7e2d8] bg-white p-3 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
          <Plane className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[12px] font-extrabold text-[#10201d]">
            When should I leave for my flight?
          </p>
          <p className="mt-1 text-[11px] leading-4 text-slate-600">
            Suggested hotel departure:{" "}
            <span className="font-extrabold text-[#0c5a4d]">
              around {formatLeaveTime(flightTime, bufferHours)}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
            Flight
          </span>
          <input
            type="time"
            value={flightTime}
            onChange={(event) => setFlightTime(event.target.value)}
            className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
          />
        </label>

        <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
            Type
          </span>
          <select
            value={flightType}
            onChange={(event) => setFlightType(event.target.value)}
            className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
          >
            <option value="international">International</option>
            <option value="domestic">Domestic</option>
          </select>
        </label>

        <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
            Luggage
          </span>
          <select
            value={luggage}
            onChange={(event) => setLuggage(event.target.value)}
            className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
          >
            <option value="normal">1 large + 1 small</option>
            <option value="large">Large family bags</option>
          </select>
        </label>

        <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
            Day
          </span>
          <select
            value={dayType}
            onChange={(event) => setDayType(event.target.value)}
            className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
          >
            <option value="normal">Normal day</option>
            <option value="friday">Friday / holiday / rain</option>
          </select>
        </label>
      </div>

      <div className="mt-3 flex gap-2 rounded-2xl bg-[#f8f4ec] px-3 py-2">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
        <p className="text-[11px] leading-4 text-[#4b5d58]">
          Do not choose the last possible bus or ferry if missing your flight
          would be expensive. Add extra buffer for Friday evening, holidays or
          heavy rain.
        </p>
      </div>
    </section>
  );
}
