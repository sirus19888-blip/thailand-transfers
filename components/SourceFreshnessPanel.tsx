import Link from "next/link";
import type { RouteSourceFreshness } from "@/data/routeIntelligence";
import { routePricesCheckedOn } from "@/data/routePrices";

type SourceFreshnessPanelProps = {
  freshness: RouteSourceFreshness;
  className?: string;
};

export function SourceFreshnessPanel({
  freshness,
  className = "",
}: SourceFreshnessPanelProps) {
  return (
    <div className={`grid gap-3 text-xs leading-5 text-slate-600 ${className}`}>
      <div className="grid gap-2">
        <p>
          <span className="font-extrabold text-[#10201d]">Last checked:</span>{" "}
          {freshness.lastChecked}
        </p>
        <p>
          <span className="font-extrabold text-[#10201d]">Source basis:</span>{" "}
          {freshness.officialSource}
        </p>
        <p>
          <span className="font-extrabold text-[#10201d]">Partner source:</span>{" "}
          {freshness.partnerSource}
        </p>
        <p>
          <span className="font-extrabold text-[#10201d]">Price ranges:</span>{" "}
          indicative THB ranges, where shown, checked {routePricesCheckedOn}
        </p>
        <p>
          <span className="font-extrabold text-[#10201d]">Confidence:</span>{" "}
          {freshness.confidence}
        </p>
      </div>

      {freshness.sourceNotes.length ? (
        <div className="flex flex-wrap gap-2">
          {freshness.sourceNotes.map((source) => (
            <span
              key={`${source.sourceType}-${source.label}`}
              className="inline-flex min-h-9 items-center rounded-full border border-[#d7eadf] bg-white px-3 py-2 text-[11px] font-extrabold text-[#0c5a4d]"
            >
              {source.label}
            </span>
          ))}
        </div>
      ) : null}

      <div className="border-t border-[#e7e2d8] pt-3">
        <p className="text-[11px] font-semibold leading-5 text-slate-600">
          Route pages are planning guidance, not live timetables. Final price,
          schedule, pickup point and support rules are confirmed by the booking
          partner or operator before payment.
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          <Link
            href="/corrections-policy"
            className="rounded-full border border-[#d7eadf] bg-white px-3 py-1.5 text-[10.5px] font-extrabold text-[#0c5a4d]"
          >
            Corrections policy
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#d7eadf] bg-white px-3 py-1.5 text-[10.5px] font-extrabold text-[#0c5a4d]"
          >
            Report outdated info
          </Link>
        </div>
      </div>
    </div>
  );
}
