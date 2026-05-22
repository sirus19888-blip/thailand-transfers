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
import { TrustBadges } from "./TrustBadges";

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
  return (
    <section className="hidden overflow-hidden bg-[#f8f4ec] lg:block">
      <Container className="py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
              Thailand airport transfers
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-[#10201d] xl:text-6xl">
              Compare Thailand airport transfers before you land
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Find buses, taxis and vans from Bangkok Airport to Pattaya and
              other popular Thailand routes. Compare options, read arrival tips
              and book through trusted partners.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#e7e2d8] bg-white p-5 shadow-xl shadow-black/5">
              <SearchFields />

              <div className="mt-5 flex items-center gap-4">
                <Link
                  href="/routes/bangkok-airport-to-pattaya"
                  className="inline-flex items-center justify-center rounded-full bg-[#064e45] px-7 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#033b35]"
                >
                  Find best options
                </Link>

                <p className="text-sm leading-6 text-slate-500">
                  Start with Bangkok Airport -&gt; Pattaya
                </p>
              </div>
            </div>

            <div className="mt-6">
              <TrustBadges />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#c99a2e]/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-[#064e45]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-3 shadow-2xl shadow-black/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/assets/hero/hero-desktop.png"
                  alt="Thailand airport transfer"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c99a2e]">
                  Recommended route
                </p>

                <p className="mt-1 text-xl font-bold text-[#10201d]">
                  Bangkok Airport -&gt; Pattaya
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-2xl bg-[#f8f4ec] p-3">
                    <p className="font-bold text-[#10201d]">Bus</p>
                    <p className="text-slate-500">Budget</p>
                  </div>

                  <div className="rounded-2xl bg-[#f8f4ec] p-3">
                    <p className="font-bold text-[#10201d]">Taxi</p>
                    <p className="text-slate-500">Comfort</p>
                  </div>

                  <div className="rounded-2xl bg-[#f8f4ec] p-3">
                    <p className="font-bold text-[#10201d]">Van</p>
                    <p className="text-slate-500">Groups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MobileHero() {
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
                Trusted routes. Verified info. Happy travels.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-32 px-5">
          <div className="rounded-[24px] border border-[#e7e2d8] bg-white p-2.5 shadow-lg shadow-black/10">
            <div className="grid grid-cols-[1fr_44px] gap-2.5">
              <div className="space-y-3">
                <label className="block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                  <span className="text-[12px] font-semibold text-[#98a2b3]">
                    From
                  </span>

                  <div className="mt-1.5 flex items-center gap-3">
                    <Plane className="h-4 w-4 text-[#0c5a4d]" />

                    <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                      Suvarnabhumi Airport (BKK)
                    </span>

                    <ChevronDown className="h-4 w-4 text-[#667085]" />
                  </div>
                </label>

                <label className="block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                  <span className="text-[12px] font-semibold text-[#98a2b3]">
                    To
                  </span>

                  <div className="mt-1.5 flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#0c5a4d]" />

                    <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                      Pattaya City
                    </span>

                    <ChevronDown className="h-4 w-4 text-[#667085]" />
                  </div>
                </label>
              </div>

              <div className="flex items-start justify-center pt-[39px]">
                <button
                  type="button"
                  aria-label="Swap route"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] bg-white shadow-md"
                >
                  <ArrowDownUp className="h-5 w-5 text-[#0c5a4d] stroke-[2.2]" />
                </button>
              </div>
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              <label className="block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                <span className="text-[12px] font-semibold text-[#98a2b3]">
                  Date
                </span>

                <div className="mt-1.5 flex items-center gap-2">
                  <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                    Tue, 27 May 2025
                  </span>

                  <CalendarDays className="h-4 w-4 text-[#667085]" />
                </div>
              </label>

              <label className="block min-h-[82px] rounded-[22px] border border-[#e7e2d8] px-4 py-3">
                <span className="text-[12px] font-semibold text-[#98a2b3]">
                  Passengers
                </span>

                <div className="mt-1.5 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#667085]" />

                  <span className="flex-1 text-[14px] font-semibold text-[#10201d]">
                    2 Adults
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
                  href="/routes/bangkok-airport-to-pattaya"
                  className="rounded-full bg-[#f3f4f6] px-2.5 py-1.5 text-center text-[10.5px] font-medium text-[#10201d]"
                >
                  Don Mueang → Pattaya
                </Link>

                <Link
                  href="/routes/bangkok-airport-to-pattaya"
                  className="rounded-full bg-[#f3f4f6] px-2.5 py-1.5 text-center text-[10.5px] font-medium text-[#10201d]"
                >
                  Bangkok → Hua Hin
                </Link>

                <Link
                  href="/routes/bangkok-airport-to-pattaya"
                  className="rounded-full bg-[#f3f4f6] px-2.5 py-1.5 text-center text-[10.5px] font-medium text-[#10201d]"
                >
                  Suvarnabhumi → Hua Hin
                </Link>
              </div>
            </div>

            <Link
              href="/routes/bangkok-airport-to-pattaya"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#0c5a4d] px-5 py-2.5 text-[14px] font-semibold text-white"
            >
              <span>Compare transport options</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[9.5px] text-[#2f6b5d]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Human-checked info</span>
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
                    Verified route info
                  </p>
                  <p className="mt-1 text-[11px] text-[#667085]">
                    Last updated today
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-[#e7e2d8] pl-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6f2]">
                  <ShieldCheck className="h-4 w-4 text-[#0c5a4d]" />
                </div>

                <div>
                  <p className="text-[12px] font-semibold text-[#10201d]">
                    Operator checked
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
