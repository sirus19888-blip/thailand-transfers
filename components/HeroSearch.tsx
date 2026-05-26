"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownUp,
  ArrowRight,
  Bell,
  CalendarDays,
  ChevronDown,
  Landmark,
  MapPin,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "./Container";

const mobileFromOptions = [
  { value: "bkk", label: "Suvarnabhumi Airport (BKK)" },
  { value: "dmk", label: "Don Mueang Airport (DMK)" },
  { value: "bangkok", label: "Bangkok City" },
];

const mobileToOptions = [
  { value: "pattaya", label: "Pattaya City" },
  { value: "hua-hin", label: "Hua Hin" },
  { value: "koh-chang", label: "Koh Chang" },
  { value: "patong", label: "Patong" },
];

const mobileRouteOptions = [...mobileFromOptions, ...mobileToOptions];

const mobileRouteHrefs: Record<string, string> = {
  "bangkok-hua-hin": "/routes/bangkok-to-hua-hin",
  "bkk-hua-hin": "/routes/suvarnabhumi-airport-to-hua-hin",
  "bkk-koh-chang": "/routes/suvarnabhumi-airport-to-koh-chang",
  "bkk-pattaya": "/routes/bangkok-airport-to-pattaya",
  "dmk-hua-hin": "/routes/don-mueang-airport-to-hua-hin",
  "dmk-pattaya": "/routes/don-mueang-airport-to-pattaya",
  "hua-hin-bangkok": "/routes/hua-hin-to-bangkok",
  "koh-chang-bangkok": "/routes/koh-chang-to-bangkok",
  "koh-chang-bkk": "/routes/koh-chang-to-suvarnabhumi-airport",
  "pattaya-bkk": "/routes/pattaya-to-bangkok-airport",
  "pattaya-dmk": "/routes/pattaya-to-don-mueang-airport",
};

const mobilePassengerOptions = [
  { value: "1", label: "1 Adult" },
  { value: "2", label: "2 Adults" },
  { value: "3", label: "3 Adults" },
  { value: "4", label: "4 Adults" },
  { value: "5", label: "5+ Adults" },
];

function getMobileOptionsWithSelected(
  options: typeof mobileRouteOptions,
  selectedValue: string,
) {
  const selectedOption = mobileRouteOptions.find(
    (option) => option.value === selectedValue,
  );

  if (!selectedOption || options.some((option) => option.value === selectedValue)) {
    return options;
  }

  return [...options, selectedOption];
}

function SearchFields() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <label className="block rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          From
        </span>

        <select
          className="mt-2 w-full bg-transparent text-base font-semibold text-[#10201d] outline-none"
          defaultValue="bkk"
        >
          <option value="bkk">Suvarnabhumi Airport (BKK)</option>
          <option value="dmk">Don Mueang Airport (DMK)</option>
          <option value="bangkok">Bangkok City</option>
        </select>
      </label>

      <label className="block rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          To
        </span>

        <select
          className="mt-2 w-full bg-transparent text-base font-semibold text-[#10201d] outline-none"
          defaultValue="pattaya"
        >
          <option value="pattaya">Pattaya</option>
          <option value="hua-hin">Hua Hin</option>
          <option value="koh-chang">Koh Chang</option>
          <option value="patong">Patong</option>
        </select>
      </label>

      <label className="block rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          Date
        </span>

        <input
          type="date"
          className="mt-2 w-full bg-transparent text-base font-semibold text-[#10201d] outline-none"
        />
      </label>

      <label className="block rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          Passengers
        </span>

        <select
          className="mt-2 w-full bg-transparent text-base font-semibold text-[#10201d] outline-none"
          defaultValue="2"
        >
          <option value="1">1 passenger</option>
          <option value="2">2 passengers</option>
          <option value="3">3 passengers</option>
          <option value="4">4 passengers</option>
          <option value="5">5+ passengers</option>
        </select>
      </label>
    </div>
  );
}

function DesktopHero() {
  const [transferType, setTransferType] = useState<"airport" | "city">(
    "airport",
  );

  const isAirportTransfer = transferType === "airport";

  const searchHref = "/routes";

  return (
    <section className="hidden overflow-hidden bg-[#fbfaf7] lg:block">
      <div className="relative min-h-[660px] border-b border-[#e7e2d8]">
        <Image
          src="/assets/hero/hero-desktop.png"
          alt="Thailand airport transfer"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />

        <Container className="relative z-10">
          <div className="grid min-h-[660px] grid-cols-[0.9fr_1.1fr] items-center gap-10 py-14">
            <div className="max-w-[520px]">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
                Tourist-friendly transfer guide.
              </p>

              <h1 className="mt-5 text-[58px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#10201d]">
                Find the safest way from the airport to your destination
              </h1>

              <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-[#30465a]">
                We compare reliable transfer options — bus, taxi, van and more —
                so you can choose what is best for your trip, budget and arrival
                time.
                <span className="font-bold text-[#0c5a4d]">
                  {" "}
                  Check final prices, schedules and availability with our
                  booking partners.
                </span>
              </p>

              <div className="mt-8 grid max-w-[560px] grid-cols-4 gap-3">
                <div className="rounded-2xl border border-[#e7e2d8] bg-white/85 p-3 shadow-sm backdrop-blur">
                  <ShieldCheck className="h-5 w-5 text-[#0c5a4d]" />
                  <p className="mt-2 text-xs font-bold text-[#10201d]">
                    Practical route details
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e7e2d8] bg-white/85 p-3 shadow-sm backdrop-blur">
                  <ShieldCheck className="h-5 w-5 text-[#0c5a4d]" />
                  <p className="mt-2 text-xs font-bold text-[#10201d]">
                    Check live offers
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e7e2d8] bg-white/85 p-3 shadow-sm backdrop-blur">
                  <Users className="h-5 w-5 text-[#0c5a4d]" />
                  <p className="mt-2 text-xs font-bold text-[#10201d]">
                    Built for tourists
                  </p>
                </div>

                <div className="rounded-2xl border border-[#e7e2d8] bg-white/85 p-3 shadow-sm backdrop-blur">
                  <ShieldCheck className="h-5 w-5 text-[#0c5a4d]" />
                  <p className="mt-2 text-xs font-bold text-[#10201d]">
                    Clear route info
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[520px] rounded-[28px] border border-white/70 bg-white/92 p-4 shadow-2xl shadow-black/15 backdrop-blur-xl">
                <div className="mb-4 grid grid-cols-2 rounded-2xl bg-[#f8f4ec] p-1">
                  <button
                    type="button"
                    onClick={() => setTransferType("airport")}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm transition ${
                      isAirportTransfer
                        ? "bg-white font-extrabold text-[#0c5a4d] shadow-sm"
                        : "font-bold text-slate-500 hover:text-[#0c5a4d]"
                    }`}
                  >
                    <Plane className="h-4 w-4" />
                    Airport Transfer
                  </button>

                  <button
                    type="button"
                    onClick={() => setTransferType("city")}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm transition ${
                      !isAirportTransfer
                        ? "bg-white font-extrabold text-[#0c5a4d] shadow-sm"
                        : "font-bold text-slate-500 hover:text-[#0c5a4d]"
                    }`}
                  >
                    <Landmark className="h-4 w-4" />
                    City Transfer
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                      From
                    </span>

                    <div className="mt-2 flex items-center gap-3">
                      <Plane className="h-4 w-4 text-[#0c5a4d]" />

                      <select
                        key={`from-${transferType}`}
                        className="w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                        defaultValue={isAirportTransfer ? "bkk" : "bangkok-city"}
                      >
                        {isAirportTransfer ? (
                          <>
                            <option value="bkk">
                              Suvarnabhumi Airport (BKK)
                            </option>
                            <option value="dmk">Don Mueang Airport (DMK)</option>
                            <option value="bangkok">Bangkok City</option>
                          </>
                        ) : (
                          <>
                            <option value="bangkok-city">Bangkok City</option>
                            <option value="pattaya-city">Pattaya City</option>
                            <option value="phuket-town">Phuket Town</option>
                            <option value="chiang-mai-city">
                              Chiang Mai City
                            </option>
                          </>
                        )}
                      </select>
                    </div>
                  </label>

                  <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                      To
                    </span>

                    <div className="mt-2 flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[#0c5a4d]" />

                      <select
                        key={`to-${transferType}`}
                        className="w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                        defaultValue={isAirportTransfer ? "pattaya" : "hua-hin"}
                      >
                        {isAirportTransfer ? (
                          <>
                            <option value="pattaya">Pattaya (All Areas)</option>
                            <option value="hua-hin">Hua Hin</option>
                            <option value="koh-chang">Koh Chang</option>
                            <option value="patong">Patong</option>
                          </>
                        ) : (
                          <>
                            <option value="hua-hin">Hua Hin</option>
                            <option value="pattaya">Pattaya</option>
                            <option value="koh-chang">Koh Chang</option>
                            <option value="chiang-mai">Chiang Mai</option>
                          </>
                        )}
                      </select>
                    </div>
                  </label>

                  <div className="grid grid-cols-3 gap-3">
                    <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                        Date
                      </span>

                      <div className="mt-2 flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-[#0c5a4d]" />
                        <span className="text-sm font-extrabold text-[#10201d]">
                          Choose travel date
                        </span>
                      </div>
                    </label>

                    <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                        Time
                      </span>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm font-extrabold text-[#10201d]">
                          19:30
                        </span>
                      </div>
                    </label>

                    <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                        Pax
                      </span>

                      <div className="mt-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#0c5a4d]" />
                        <span className="text-sm font-extrabold text-[#10201d]">
                          2
                        </span>
                      </div>
                    </label>
                  </div>

                  <Link
                    href={searchHref}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0c5a4d] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-black/10 transition hover:bg-[#064e45]"
                  >
                    <span>Find Best Options</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <p className="text-center text-[11px] font-medium text-slate-500">
                    Browse available route pages and check live partner offers before booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function MobileHero() {
  const [mobileFrom, setMobileFrom] = useState("bkk");
  const [mobileTo, setMobileTo] = useState("pattaya");
  const [mobileDate, setMobileDate] = useState("");
  const [mobilePassengers, setMobilePassengers] = useState("2");
  const selectedMobileFrom =
    mobileRouteOptions.find((option) => option.value === mobileFrom) ??
    mobileFromOptions[0];
  const selectedMobileTo =
    mobileRouteOptions.find((option) => option.value === mobileTo) ??
    mobileToOptions[0];
  const mobileFromSelectOptions = getMobileOptionsWithSelected(
    mobileFromOptions,
    mobileFrom,
  );
  const mobileToSelectOptions = getMobileOptionsWithSelected(
    mobileToOptions,
    mobileTo,
  );
  const selectedMobilePassengers =
    mobilePassengerOptions.find((option) => option.value === mobilePassengers) ??
    mobilePassengerOptions[1];
  const mobileRouteHref =
    mobileRouteHrefs[`${mobileFrom}-${mobileTo}`] ?? "/routes";

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f6f1e8] pb-24 lg:hidden">
      <div className="relative mx-auto max-w-md overflow-hidden bg-[#f6f1e8]">
        <div className="relative h-[415px] overflow-hidden">
          <Image
            src="/assets/hero/hero-mobile.png"
            alt="Thailand transfer hero"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-[#f6f1e8]/65" />

          <div className="relative z-10 px-5 pt-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d5ab47] shadow-md">
                  <Landmark className="h-5 w-5 text-white" />
                </div>

                <div className="leading-tight">
                  <p className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-[#10201d]">
                    THAI TRANSFERS
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-[1.5px] w-8 rounded-full bg-[#d5ab47]" />
                    <p className="text-[10px] font-semibold text-[#364152]">
                      Airport & City Transfers
                    </p>
                    <div className="h-[1.5px] w-8 rounded-full bg-[#d5ab47]" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                aria-label="Notifications"
                className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm"
              >
                <Bell className="h-5 w-5 text-[#10201d] stroke-[2.1]" />
              </button>
            </div>

            <div className="mt-5 max-w-[215px]">
              <h1 className="text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#143f3a]">
                Plan your transfer in Thailand
              </h1>

              <p className="mt-2 text-[12px] font-medium leading-5 text-[#364152]">
                Clear route guides. Live partner offers. Happy travels.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-32 px-5">
          <div className="rounded-[24px] border border-[#e7e2d8] bg-white p-2.5 shadow-lg shadow-black/10">
            <div className="grid grid-cols-[1fr_44px] gap-2.5">
              <div className="space-y-3">
                <label className="relative block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                  <select
                    aria-label="From"
                    value={mobileFrom}
                    onChange={(event) => setMobileFrom(event.target.value)}
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                  >
                    {mobileFromSelectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <span className="text-[12px] font-semibold text-[#98a2b3]">
                    From
                  </span>

                  <div className="mt-1.5 flex items-center gap-3">
                    <Plane className="h-4 w-4 text-[#0c5a4d]" />

                    <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                      {selectedMobileFrom.label}
                    </span>

                    <ChevronDown className="h-4 w-4 text-[#667085]" />
                  </div>
                </label>

                <label className="relative block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                  <select
                    aria-label="To"
                    value={mobileTo}
                    onChange={(event) => setMobileTo(event.target.value)}
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                  >
                    {mobileToSelectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <span className="text-[12px] font-semibold text-[#98a2b3]">
                    To
                  </span>

                  <div className="mt-1.5 flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#0c5a4d]" />

                    <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                      {selectedMobileTo.label}
                    </span>

                    <ChevronDown className="h-4 w-4 text-[#667085]" />
                  </div>
                </label>
              </div>

              <div className="flex items-start justify-center pt-[39px]">
                <button
                  type="button"
                  aria-label="Swap route"
                  onClick={() => {
                    setMobileFrom(mobileTo);
                    setMobileTo(mobileFrom);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] bg-white shadow-md"
                >
                  <ArrowDownUp className="h-5 w-5 text-[#0c5a4d] stroke-[2.2]" />
                </button>
              </div>
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              <label className="relative block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                <input
                  aria-label="Date"
                  type="date"
                  value={mobileDate}
                  onChange={(event) => setMobileDate(event.target.value)}
                  className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                />

                <span className="text-[12px] font-semibold text-[#98a2b3]">
                  Date
                </span>

                <div className="mt-1.5 flex items-center gap-2">
                  <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                    {mobileDate || "Choose date"}
                  </span>

                  <CalendarDays className="h-4 w-4 text-[#667085]" />
                </div>
              </label>

              <label className="relative block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                <select
                  aria-label="Passengers"
                  value={mobilePassengers}
                  onChange={(event) => setMobilePassengers(event.target.value)}
                  className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                >
                  {mobilePassengerOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <span className="text-[12px] font-semibold text-[#98a2b3]">
                  Passengers
                </span>

                <div className="mt-1.5 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#667085]" />

                  <span className="flex-1 text-[14px] font-semibold text-[#10201d]">
                    {selectedMobilePassengers.label}
                  </span>

                  <ChevronDown className="h-4 w-4 text-[#667085]" />
                </div>
              </label>
            </div>

            <div className="mt-3">
              <p className="mb-2 text-[12px] font-semibold text-[#143f3a]">
                Popular routes
              </p>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/routes/bangkok-airport-to-pattaya"
                  className="rounded-full bg-[#0c5a4d] px-2.5 py-1.5 text-center text-[10.5px] font-medium text-white"
                >
                  Suvarnabhumi → Pattaya
                </Link>

                <Link
                  href="/routes/don-mueang-airport-to-pattaya"
                  className="rounded-full bg-[#f3f4f6] px-2.5 py-1.5 text-center text-[10.5px] font-medium text-[#10201d]"
                >
                  Don Mueang → Pattaya
                </Link>

                <Link
                  href="/routes/bangkok-to-hua-hin"
                  className="rounded-full bg-[#f3f4f6] px-2.5 py-1.5 text-center text-[10.5px] font-medium text-[#10201d]"
                >
                  Bangkok → Hua Hin
                </Link>

                <Link
                  href="/routes/suvarnabhumi-airport-to-hua-hin"
                  className="rounded-full bg-[#f3f4f6] px-2.5 py-1.5 text-center text-[10.5px] font-medium text-[#10201d]"
                >
                  Suvarnabhumi → Hua Hin
                </Link>
              </div>
            </div>

            <Link
              href={mobileRouteHref}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#0c5a4d] px-5 py-2.5 text-[14px] font-semibold text-white"
            >
              <span>Compare transport options</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[9.5px] text-[#2f6b5d]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Practical travel info</span>
            </div>

            <div className="h-3.5 w-px bg-[#d0d5dd]" />

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>No hidden steps</span>
            </div>

            <div className="h-3.5 w-px bg-[#d0d5dd]" />

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Tourist-friendly</span>
            </div>
          </div>

          <div className="mt-3 rounded-[20px] border border-[#e7e2d8] bg-white p-3 shadow-sm">
            <div className="grid grid-cols-[1fr_1fr] gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-[#d9d9d9]" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-[#c7c7c7]" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-[#b5b5b5]" />
                </div>

                <div>
                  <p className="text-[12px] font-semibold text-[#10201d]">
                    Route information
                  </p>
                  <p className="mt-1 text-[11px] text-[#667085]">
                    Check live offers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-[#e7e2d8] pl-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6f2]">
                  <ShieldCheck className="h-4 w-4 text-[#0c5a4d]" />
                </div>

                <div>
                  <p className="text-[12px] font-semibold text-[#10201d]">
                    Partner booking links
                  </p>
                  <p className="mt-1 text-[11px] text-[#667085]">
                    by local experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroSearch() {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  );
}
