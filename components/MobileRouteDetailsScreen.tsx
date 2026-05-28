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

const optionContentById = {
  bus: {
    subtitle: "Airport pickup, bus stops and hotel transfer tips",
    steps: [
      {
        number: "1",
        title: "Clear immigration and collect your luggage.",
        description:
          "Allow time after landing before choosing a fixed bus. RRC advises booking a coach at least 1.5 hours after your estimated arrival time.",
      },
      {
        number: "2",
        title: "Go to Level 1, Gate 8.",
        description:
          "RRC lists the Suvarnabhumi Airport Pattaya counter at the passenger terminal on Level 1, Gate 8. Some partner tickets can still use a bus-terminal instruction, so follow the live voucher.",
      },
      {
        number: "3",
        title: "Check your Pattaya drop-off point.",
        description:
          "The airport-to-Pattaya RRC route ends at Pattaya Transport Station in North Pattaya. Jomtien services and intermediate Sukhumvit stops can be separate, so match the ticket to your hotel area.",
      },
      {
        number: "4",
        title: "Use taxi or private transfer for late arrivals.",
        description:
          "Scheduled bus options thin out at night. A taxi or pre-booked car is usually easier after an evening flight or with heavy luggage.",
      },
    ],
    quickFacts: [
      {
        icon: Clock3,
        title: "Typical travel time",
        text: "RRC publishes about 2 hours to Pattaya, depending on traffic. Allow extra time for immigration, baggage claim and bus check-in.",
      },
      {
        icon: MapPin,
        title: "Airport pickup",
        text: "Intercity buses to Pattaya are listed at Level 1, Gate 8 in the main terminal. Check the voucher in case your ticket uses the bus terminal or a partner counter.",
      },
      {
        icon: Luggage,
        title: "Luggage rules",
        text: "RRC allows 1 checked bag up to 20 kg plus 1 small personal bag free. Larger, heavier or extra items can be charged separately.",
      },
    ],
    warningTitle: "Check your drop-off point",
    warningText:
      "Pattaya bus tickets can end at Jomtien, North Pattaya or Sukhumvit-area stops. Pick the option that matches your hotel area, especially if you arrive with luggage.",
    tips: [
      "RRC currently publishes fixed airport-to-Pattaya departures rather than an on-demand service, so choose a time that leaves room after landing.",
      "The published airport pickup point for the Pattaya bus is Level 1, Gate 8.",
      "RRC asks passengers to check in before departure; allow at least 30 minutes at the counter when possible.",
      "Pattaya Transport Station is not a hotel drop-off. Plan a local taxi or songthaew if your hotel is not nearby.",
      "If your hotel is in Jomtien, confirm whether you booked the Jomtien route or a Pattaya station route.",
      "For late evening arrivals, a private taxi is usually the simplest option.",
    ],
  },
  taxi: {
    subtitle: "Private airport pickup, direct transfer and hotel drop-off tips",
    steps: [
      {
        number: "1",
        title: "Confirm the exact arrivals meeting point.",
        description:
          "Pre-booked private taxis use the meeting point shown on the live voucher. Airport public taxis are a separate service on Level 1.",
      },
      {
        number: "2",
        title: "Keep your driver or operator contact online.",
        description:
          "If immigration or baggage claim is slow, contact the operator from arrivals and keep your phone online after landing.",
      },
      {
        number: "3",
        title: "Check luggage and vehicle size.",
        description:
          "Book a larger car or private van if you have more than two large bags, sports equipment, a stroller or a family group.",
      },
      {
        number: "4",
        title: "Confirm your Pattaya hotel or full address.",
        description:
          "Private taxi is the clearest door-to-door option, but the driver still needs the exact hotel, condo or pickup area shown on your booking.",
      },
    ],
    quickFacts: [
      {
        icon: Clock3,
        title: "Typical travel time",
        text: "Plan about 1h 30m - 2h 30m to Pattaya by private car, with longer times possible during Bangkok or Pattaya traffic.",
      },
      {
        icon: MapPin,
        title: "Airport pickup",
        text: "Use the meeting point on your pre-booked voucher. If using airport public taxi instead, AOT lists taxis on Level 1 between Gates 4 and 7.",
      },
      {
        icon: Luggage,
        title: "Luggage rules",
        text: "Match the vehicle to your bags. AOT notes official taxi baggage charges can apply to large or multiple bags; pre-booked operators set capacity by vehicle.",
      },
    ],
    warningTitle: "Confirm the meeting point",
    warningText:
      "Do not go to the bus counter for a taxi booking. Use the arrivals meeting point and operator contact details from the live ticket.",
    tips: [
      "Private taxi is usually the simplest option after late evening flights.",
      "Check whether tolls, airport pickup, waiting time and hotel drop-off are included before paying.",
      "Choose a larger vehicle if you travel with more than two large suitcases.",
      "Do not use the bus counter for a taxi booking; follow the driver meeting instructions from the live voucher.",
      "Traffic can be heavier on Friday evenings, holidays and long weekends.",
    ],
  },
  van: {
    subtitle: "Shared transfer pickup, waiting time and hotel drop-off tips",
    steps: [
      {
        number: "1",
        title: "Check the shared transfer meeting point.",
        description:
          "Bell/RRC shared airport transfers list check-in on Level 1, Gate 8. Other partner vouchers may name a different airport counter or meeting point.",
      },
      {
        number: "2",
        title: "Allow time for the scheduled shared departure.",
        description:
          "Shared transfers leave by schedule and may wait for passengers. This is different from an on-demand private taxi.",
      },
      {
        number: "3",
        title: "Confirm hotel drop-off coverage.",
        description:
          "Bell/RRC describes shared Suvarnabhumi-Pattaya transfer as direct to the listed hotel. Check that your hotel is covered before booking.",
      },
      {
        number: "4",
        title: "Check luggage limits.",
        description:
          "Shared vehicles have limited luggage space. Larger bags, golf bags or family luggage may need a private taxi or private van.",
      },
    ],
    quickFacts: [
      {
        icon: Clock3,
        title: "Typical travel time",
        text: "Plan about 2h - 3h including scheduled departure, possible waiting time, hotel stops and traffic.",
      },
      {
        icon: MapPin,
        title: "Airport pickup",
        text: "Bell/RRC shared transfer check-in is listed at Level 1, Gate 8. Always use the exact counter or pickup point shown on your ticket.",
      },
      {
        icon: Luggage,
        title: "Luggage rules",
        text: "Check the shared-transfer baggage allowance before booking. If your bags exceed the operator rule, choose a private car or van.",
      },
    ],
    warningTitle: "Check if hotel drop-off is included",
    warningText:
      "Shared van tickets can differ by operator. Confirm whether the ticket goes to your hotel area or only to a Pattaya meeting point.",
    tips: [
      "Shared transfer can be a useful middle option when the schedule fits and your hotel is in the covered Pattaya area.",
      "Bell/RRC publishes fixed shared departures from Suvarnabhumi to Pattaya, so it is not as flexible as a private taxi.",
      "Confirm whether the ticket goes directly to your hotel or only to an operator point in Pattaya.",
      "Check luggage allowance before booking if you have more than one large bag.",
      "For late arrivals, private taxi is usually more predictable than a shared transfer.",
    ],
  },
};

const optionIdAliases: Record<string, keyof typeof optionContentById> = {
  "airport-bus": "bus",
  "airport bus": "bus",
  bus: "bus",
  "private-taxi": "taxi",
  "private taxi": "taxi",
  taxi: "taxi",
  "shared-van": "van",
  "shared van": "van",
  van: "van",
};

function normalizeOptionId(optionId: string | undefined) {
  if (!optionId) return undefined;

  return optionIdAliases[optionId.trim().toLowerCase()];
}

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

type MobileRouteDetailsScreenProps = {
  selectedOptionId?: string;
};

export function MobileRouteDetailsScreen({
  selectedOptionId,
}: MobileRouteDetailsScreenProps) {
  const normalizedOptionId = normalizeOptionId(selectedOptionId);
  const selectedOption =
    transferOptions.find((option) => option.id === normalizedOptionId) ??
    busOption ??
    transferOptions[0];
  const selectedContent =
    optionContentById[selectedOption?.id as keyof typeof optionContentById] ??
    optionContentById.bus;

  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-[calc(9rem+env(safe-area-inset-bottom))] lg:hidden">
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
              {selectedContent.subtitle}
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
          {selectedContent.quickFacts.map((fact) => {
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
                  <div className="min-w-0">
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
            {selectedContent.steps.map((step) => (
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
                {selectedContent.warningTitle}
              </h2>

              <p className="mt-1 text-sm leading-6 text-red-700/80">
                {selectedContent.warningText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            Practical notes
          </h2>

          <div className="mt-3 space-y-2">
            {selectedContent.tips.slice(0, 4).map((tip) => (
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

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Last checked May 2026. Route details are planning notes. Final price,
          schedule, pickup point and luggage rules must still be checked on the
          live ticket.
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e7e2d8] bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-2xl backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-slate-500">
              {selectedOption?.label ?? "Selected option"}
            </p>
            <p className="text-xs font-medium text-slate-500">
              {selectedOption?.name ?? "Selected option"}
            </p>
            <p className="text-lg font-extrabold text-[#10201d]">
              Live price
              <span className="ml-1 text-xs font-medium text-slate-500">
                on 12Go
              </span>
            </p>
          </div>

          <AffiliateButton
            href={
              selectedOption?.affiliateUrl ??
              taxiOption?.affiliateUrl ??
              mainRoute.affiliateUrl
            }
            trackingId={selectedOption?.trackingId ?? taxiOption?.trackingId}
            variant="detailsSticky"
          >
            See live price
          </AffiliateButton>
        </div>
      </div>
    </section>
  );
}
