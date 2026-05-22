import Image from "next/image";
import Link from "next/link";
import { transferOptions } from "@/data/routes";
import { AffiliateButton } from "./AffiliateButton";
import { ArrowLeft, ChevronDown, Heart, ShieldCheck } from "lucide-react";

function getBadgeColor(id: string) {
  if (id === "bus") return "bg-emerald-500";
  if (id === "taxi") return "bg-amber-500";
  return "bg-blue-500";
}

export function MobileTransferOptionsScreen() {
  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-24 lg:hidden">
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
            <h1 className="text-[16px] font-extrabold tracking-[-0.02em] text-[#10201d]">
              BKK → Pattaya City
            </h1>

            <div className="mt-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
              <span>Tue, 27 May 2025</span>
              <span>·</span>
              <span>2 Adults</span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Save route"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 rounded-[22px] border border-[#e7e2d8] bg-white p-3 shadow-sm">
          <div className="flex gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
              <ShieldCheck className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[12px] font-bold leading-snug text-[#10201d]">
                Verified route info
              </p>
              <p className="mt-1 text-[11px] text-slate-500">Updated today</p>
            </div>
          </div>

          <div className="flex gap-3 border-l border-[#e7e2d8] pl-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
              <ShieldCheck className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[12px] font-bold leading-snug text-[#10201d]">
                Operator checked
              </p>
              <p className="mt-1 text-[11px] text-slate-500">Local experts</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm font-extrabold text-[#10201d]">
            3 best options found
          </p>

          <button className="flex items-center gap-1 rounded-xl border border-[#e7e2d8] bg-white px-3 py-2 text-xs font-bold text-[#10201d] shadow-sm">
            <span>Recommended</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {transferOptions.map((option) => (
            <article
              key={option.id}
              className="overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
            >
              <div className="relative">
                <div
                  className={`absolute left-0 top-0 z-10 rounded-br-2xl px-3 py-1.5 text-[11px] font-extrabold uppercase text-white ${getBadgeColor(
                    option.id
                  )}`}
                >
                  {option.label}
                </div>

                <div className="grid grid-cols-[108px_1fr] gap-4 p-3">
                  <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl bg-[#f8f4ec]">
                    <Image
                      src={option.image}
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
                          {option.operator}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-extrabold text-[#064e45]">
                          {option.price}
                        </p>
                        <p className="text-[10px] font-medium text-slate-500">
                          {option.priceNote}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-[11px] font-bold text-[#10201d]">
                          {option.duration}
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Travel time
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-[#10201d]">
                          {option.departures}
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Departures
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-[#10201d]">
                          {option.baggage}
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Luggage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#e7e2d8] px-4 py-3">
                  <p className="text-xs font-bold text-slate-500">
                    Board at
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-[#10201d]">
                    {option.pickup}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-[#e7e2d8] px-4 py-3">
                  <div>
                    <p className="text-xs font-extrabold text-[#064e45]">
                      Pros
                    </p>
                    <ul className="mt-1 space-y-1 text-[11px] leading-4 text-slate-600">
                      {option.pros.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold text-slate-500">
                      Cons
                    </p>
                    <ul className="mt-1 space-y-1 text-[11px] leading-4 text-slate-600">
                      {option.cons.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-[#e7e2d8] px-4 py-3">
                  <div className="text-sm font-bold text-[#10201d]">
                    ⭐ {option.rating}
                    <span className="ml-1 text-xs font-medium text-slate-500">
                      ({option.reviews})
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href="/routes/bangkok-airport-to-pattaya/details"
                      className="rounded-2xl border border-[#064e45] px-4 py-3 text-xs font-extrabold text-[#064e45]"
                    >
                      Details
                    </Link>

                    <AffiliateButton href={option.affiliateUrl}>
                      See live price
                    </AffiliateButton>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Prices in THB · Estimates only · May vary by time & traffic
        </p>
      </div>
    </section>
  );
}
