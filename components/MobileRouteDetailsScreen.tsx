import Image from "next/image";
import Link from "next/link";
import { mainRoute, transferOptions } from "@/data/routes";
import { AffiliateButton } from "./AffiliateButton";
import {
  AlertTriangle,
  ArrowLeft,
  Bus,
  CheckCircle2,
  Clock3,
  Luggage,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Clear immigration and collect your luggage.",
    description:
      "Do not choose a tight bus after landing. Immigration, baggage claim and walking to Level 1 can take longer than expected.",
  },
  {
    number: "2",
    title: "Go to the official transport area.",
    description:
      "For many bus tickets, check-in is around Level 1 near Exit 8. Some services use the Suvarnabhumi Bus Terminal, so follow the live ticket instructions.",
  },
  {
    number: "3",
    title: "Check your Pattaya drop-off point.",
    description:
      "Buses may finish at Jomtien Bus Station, North Pattaya Bus Station or Sukhumvit-area stops. Plan a local taxi if your hotel is not nearby.",
  },
  {
    number: "4",
    title: "Use taxi or private transfer for late arrivals.",
    description:
      "Scheduled bus options thin out at night. A taxi or pre-booked car is usually easier after an evening flight or with heavy luggage.",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Bus usually takes about 2h - 2h 30m. Taxi is often 1h 30m - 2h 30m depending on traffic and hotel area.",
  },
  {
    icon: MapPin,
    title: "Airport pickup",
    text: "Bus check-in is commonly on Level 1 near Exit 8 or at the airport bus terminal. Private transfers meet in the arrivals area shown on the ticket.",
  },
  {
    icon: Luggage,
    title: "Luggage rules",
    text: "Bus and van tickets can have baggage limits. Private taxi is easier with larger suitcases, golf bags or family luggage.",
  },
];

const tips = [
  "Roong Reuang Coach services to Jomtien commonly run through the day, with live availability varying by date.",
  "Some North Pattaya bus departures are separate from Jomtien services, so check the destination before booking.",
  "The 999 Bus route has limited daily departures, so it is not ideal for late arrivals.",
  "Allow at least 2 hours after scheduled landing before choosing a fixed bus departure.",
  "If your hotel is in Central Pattaya, Jomtien or Naklua, confirm which drop-off point is closest.",
  "For late evening arrivals, a private taxi is usually the simplest option.",
];

const faqs = [
  {
    question: "What is the best option from BKK Airport to Pattaya?",
    answer:
      "Bus is usually best value if the schedule matches your flight. Private taxi is best for late arrivals, hotel drop-off, luggage or groups.",
  },
  {
    question: "Where do buses leave from at Suvarnabhumi Airport?",
    answer:
      "Many Pattaya bus services use the Level 1 transport area near Exit 8, while some tickets may route via the airport bus terminal. Always follow the exact live ticket instructions.",
  },
  {
    question: "How long does BKK Airport to Pattaya take?",
    answer:
      "Plan around 2h - 2h 30m by bus and 1h 30m - 2h 30m by taxi. Friday evening, holiday and Bangkok traffic can make the journey longer.",
  },
  {
    question: "Should I book before landing?",
    answer:
      "It is safer to compare live options before arrival, especially in high season or if your flight lands close to the final bus departures.",
  },
];

const busOption = transferOptions.find((option) => option.id === "bus");
const taxiOption = transferOptions.find((option) => option.id === "taxi");

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
              <h1 className="truncate text-[16px] font-extrabold text-[#10201d]">
                BKK to Pattaya
              </h1>
            </div>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Airport pickup, bus stops and hotel transfer tips
            </p>
          </div>

          <div
            aria-label="Route guide"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ShieldCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 flex gap-6 overflow-x-auto border-b border-[#e7e2d8] text-sm font-bold text-slate-500">
          <a
            href="#mobile-route-overview"
            className="border-b-2 border-[#0c5a4d] pb-3 text-[#0c5a4d]"
          >
            Overview
          </a>
          <a href="#mobile-route-details" className="pb-3">
            Details
          </a>
          <a href="#mobile-route-tips" className="pb-3">
            Tips
          </a>
          <a href="#mobile-route-faqs" className="pb-3">
            FAQs
          </a>
        </div>

        <div
          id="mobile-route-overview"
          className="mt-4 overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src="/assets/routes/bangkok-airport-to-pattaya-overview.png"
              alt="Suvarnabhumi Airport to Pattaya route map"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {quickFacts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.title}
                className="rounded-[1.25rem] border border-[#e7e2d8] bg-white p-4 shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#10201d]">
                      {fact.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {fact.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          id="mobile-route-details"
          className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
        >
          <h2 className="text-lg font-extrabold text-[#10201d]">
            After you land - step by step
          </h2>

          <div className="mt-4 space-y-3">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c5a4d] text-xs font-bold text-white">
                  {step.number}
                </div>

                <div>
                  <p className="text-sm font-bold leading-5 text-[#10201d]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="mobile-route-tips"
          className="mt-4 rounded-[1.5rem] border border-red-100 bg-red-50 p-4"
        >
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-red-500">
              <AlertTriangle className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-extrabold text-red-700">
                Check your drop-off point
              </h2>

              <p className="mt-1 text-sm leading-6 text-red-700/80">
                Pattaya bus tickets can end at Jomtien, North Pattaya or
                Sukhumvit-area stops. Pick the option that matches your hotel
                area, especially if you arrive with luggage.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            Practical notes
          </h2>

          <div className="mt-3 space-y-2">
            {tips.slice(0, 4).map((tip) => (
              <div key={tip} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                <p className="text-xs leading-5 text-slate-600">{tip}</p>
              </div>
            ))}
          </div>

          <Link
            href="/routes/bangkok-airport-to-pattaya"
            className="mt-4 flex w-full items-center justify-center rounded-2xl border border-[#0c5a4d] bg-white px-5 py-3 text-sm font-extrabold text-[#0c5a4d]"
          >
            Back to transfer options
          </Link>
        </div>

        <div
          id="mobile-route-faqs"
          className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
        >
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
            <p className="text-xs font-medium text-slate-500">Best value</p>
            <p className="text-lg font-extrabold text-[#10201d]">
              Live price
              <span className="ml-1 text-xs font-medium text-slate-500">
                on 12Go
              </span>
            </p>
          </div>

          <AffiliateButton
            href={busOption?.affiliateUrl ?? taxiOption?.affiliateUrl ?? mainRoute.affiliateUrl}
            trackingId={busOption?.trackingId ?? taxiOption?.trackingId}
            variant="detailsSticky"
          >
            See live price
          </AffiliateButton>
        </div>
      </div>
    </section>
  );
}
