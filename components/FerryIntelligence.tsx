import { Waves, ShieldCheck } from "lucide-react";
import type { RoutePageData } from "@/data/routePages";

function isIslandRoute(route: RoutePageData) {
  const text = `${route.from} ${route.to} ${route.intro}`.toLowerCase();

  return (
    text.includes("koh") ||
    text.includes("phi phi") ||
    text.includes("ferry") ||
    text.includes("speedboat")
  );
}

function getFerryAdvice(route: RoutePageData) {
  const text = `${route.from} ${route.to}`.toLowerCase();

  if (text.includes("koh chang")) {
    return {
      lastFerry: "Ferry Koh Chang guidance: roughly 06:30-18:30",
      warning: "If you arrive late, sleep near the airport/mainland or choose an early next-day transfer.",
    };
  }

  if (text.includes("samui") || text.includes("phangan")) {
    return {
      lastFerry: "Last ferry varies by operator and pier",
      warning: "If your flight lands after 14:00, check the ferry carefully before paying.",
    };
  }

  if (text.includes("phi phi")) {
    return {
      lastFerry: "Ferry/speedboat times vary by pier and weather",
      warning: "Avoid tight return flights after a Phi Phi boat connection.",
    };
  }

  return {
    lastFerry: "Check the ferry window before booking",
    warning: "Sea conditions, pier changes and reporting time can affect the full transfer.",
  };
}

export function FerryIntelligence({ route }: { route: RoutePageData }) {
  if (!isIslandRoute(route)) return null;

  const advice = getFerryAdvice(route);

  return (
    <section className="mt-3 rounded-[18px] border border-[#e7e2d8] bg-white p-3 shadow-sm">
      <div className="flex gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
          <Waves className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[12px] font-extrabold text-[#10201d]">
            Ferry intelligence
          </p>
          <p className="mt-1 text-[11px] leading-4 text-slate-600">
            {advice.lastFerry}
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          "Ferry + van vs taxi + ferry",
          "Hotel pickup may be included",
          "Weather can change boats",
          "Avoid tight flight returns",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-[#f8f4ec] px-3 py-2 text-[11px] font-extrabold leading-4 text-[#51615c]"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2 rounded-2xl bg-[#fff7ed] px-3 py-2">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#c2410c]" />
        <p className="text-[11px] leading-4 text-[#8a3b1f]">{advice.warning}</p>
      </div>
    </section>
  );
}
