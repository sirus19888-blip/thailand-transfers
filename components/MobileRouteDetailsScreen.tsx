import Image from "next/image";
import Link from "next/link";
import { mainRoute, transferOptions } from "@/data/routes";
import { AffiliateButton } from "./AffiliateButton";
import {
  AlertTriangle,
  ArrowLeft,
  Bus,
  Heart,
  MapPin,
  Share2,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Follow Arrivals signs and go through immigration.",
  },
  {
    number: "2",
    title: "Collect your luggage and head to Exit B on Level 1.",
  },
  {
    number: "3",
    title: "Walk to the Bus Terminal or pickup meeting point.",
  },
  {
    number: "4",
    title: "Show your e-ticket or booking confirmation.",
  },
  {
    number: "5",
    title: "Board the air-conditioned transfer to Pattaya.",
  },
];

const faqs = [
  {
    question: "How long does the bus take?",
    answer: "About 2h 30m depending on traffic.",
  },
  {
    question: "Is taxi faster?",
    answer: "Usually yes, especially if you go directly to your hotel.",
  },
  {
    question: "Should I book before landing?",
    answer: "It is safer to compare options before you arrive.",
  },
];

const busOption = transferOptions.find((option) => option.id === "bus");

export function MobileRouteDetailsScreen() {
  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-32 lg:hidden">
      <div className="mx-auto max-w-md px-4 py-5">
        <div className="flex items-start justify-between gap-3">
          <Link
            href="/routes/bangkok-airport-to-pattaya"
            aria-label="Back to transfer options"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="min-w-0 flex-1 text-center">
            <div className="mx-auto flex items-center justify-center gap-2">
              <Bus className="h-4 w-4 text-[#0c5a4d]" />
              <h1 className="truncate text-[16px] font-extrabold tracking-[-0.02em] text-[#10201d]">
                Bus: BKK → Pattaya
              </h1>
            </div>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Airport Bus by Bell Travel
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Share route"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
            >
              <Share2 className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Save route"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex gap-6 overflow-x-auto border-b border-[#e7e2d8] text-sm font-bold text-slate-500">
          <button className="border-b-2 border-[#0c5a4d] pb-3 text-[#0c5a4d]">
            Overview
          </button>
          <button className="pb-3">Details</button>
          <button className="pb-3">Reviews</button>
          <button className="pb-3">FAQs</button>
        </div>

        <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5">
          <div className="relative aspect-[16/10]">
            <Image
              src="/assets/routes/bkk-pattaya-map.png"
              alt="BKK to Pattaya route map"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            After you land — step by step
          </h2>

          <div className="mt-4 space-y-3">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c5a4d] text-xs font-bold text-white">
                  {step.number}
                </div>

                <p className="pt-1 text-sm leading-5 text-slate-700">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7]">
            <div className="grid grid-cols-[1fr_110px]">
              <div className="p-3">
                <p className="text-sm font-extrabold text-[#10201d]">
                  Bus Terminal
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Level 1, Gate 8. Follow the official counter signs.
                </p>
              </div>

              <div className="relative min-h-[100px]">
                <Image
                  src="/assets/steps/meet-driver.png"
                  alt="Bus terminal pickup point"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-red-100 bg-red-50 p-4">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-red-500">
              <AlertTriangle className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-extrabold text-red-700">
                Avoid scams
              </h2>

              <p className="mt-1 text-sm leading-6 text-red-700/80">
                Only buy tickets at the official counter or use a trusted online
                booking partner. Ignore people offering “cheap taxi-van”.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            How to find the counter
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            The bus counter is usually located near the ground transportation
            area. Follow official signs and check your booking instructions
            before leaving the arrivals hall.
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-[#e7e2d8]">
            <div className="relative aspect-[16/9]">
              <Image
                src="/assets/steps/immigration.png"
                alt="Airport guide"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Link
            href="/routes/bangkok-airport-to-pattaya"
            className="mt-4 flex w-full items-center justify-center rounded-2xl border border-[#0c5a4d] bg-white px-5 py-3 text-sm font-extrabold text-[#0c5a4d]"
          >
            Back to transfer options
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/promo/sim-card.png"
                alt="Thailand tourist SIM"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <p className="text-sm font-extrabold text-[#10201d]">
                Thailand Tourist SIM
              </p>
              <p className="mt-1 text-xs text-slate-500">
                4G/5G · useful after landing
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/promo/hotel-transfer.png"
                alt="Hotel transfer"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <p className="text-sm font-extrabold text-[#10201d]">
                Hotel transfer
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Door-to-door pickup
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">FAQs</h2>

          <div className="mt-3 space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-3"
              >
                <p className="text-sm font-bold text-[#10201d]">
                  {faq.question}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e7e2d8] bg-white/95 p-3 shadow-2xl backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-slate-500">From</p>
            <p className="text-lg font-extrabold text-[#10201d]">
              ฿132
              <span className="ml-1 text-xs font-medium text-slate-500">
                / person
              </span>
            </p>
          </div>

          <AffiliateButton
            href={busOption?.affiliateUrl ?? mainRoute.affiliateUrl}
            trackingId={busOption?.trackingId}
            variant="detailsSticky"
          >
            See live price & book
          </AffiliateButton>
        </div>
      </div>
    </section>
  );
}
