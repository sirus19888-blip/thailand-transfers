import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { transferOptions } from "@/data/routes";
import {
  bangkokAirportToPattayaDetailsFaqs as faqs,
  bangkokAirportToPattayaDetailsRoute as routeData,
} from "@/data/bangkokAirportToPattayaDetails";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { MobileBottomNav } from "./MobileBottomNav";
import {
  MobilePersonalizedDetailsSticky,
  MobilePersonalizedTripCard,
} from "@/components/MobilePersonalizedTrip";
import { SaveScreenshotButton, TrackedAnchor } from "@/components/TrackedActions";
import {
  getDropoffMapUrl,
  getPickupMapUrl,
  getSourceFreshness,
} from "@/data/routeIntelligence";
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
          "Allow time after landing before choosing a fixed bus. RRC asks passengers to be at the boarding point before departure, and flight delays can make tight bus times risky.",
      },
      {
        number: "2",
        title: "Go to Level 1, Gate 8.",
        description:
          "RRC lists the Suvarnabhumi Airport Pattaya counter at the passenger terminal on Level 1, Gate 8. Some partner tickets can still use a bus-terminal instruction, so follow the partner voucher.",
      },
      {
        number: "3",
        title: "Check your Pattaya drop-off point.",
        description:
          "The airport-to-Pattaya RRC route goes to Pattaya Transport Station in North Pattaya. The 22:00 note says North Pattaya Bus Station, not Jomtien, so match the ticket to your hotel area.",
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
    planningNotes: [
      {
        title: "Late arrival rule",
        text: "RRC currently lists airport-to-Pattaya buses at 7:30, 9:30, 11:30, 13:30, 15:30, 17:30 and 18:30, with a 22:00 note for North Pattaya Bus Station. If your flight lands late, compare taxi or private transfer.",
      },
      {
        title: "First and last bus",
        text: "The first listed airport-to-Pattaya bus is 7:30. RRC notes the 22:00 service goes to North Pattaya Bus Station and does not stop at Jomtien Bus Station.",
      },
    ],
    lastMile:
      "If the bus ends at North Pattaya or Jomtien, plan a local ride to your hotel. This is not the same as door-to-door hotel drop-off.",
    bookingChecks: [
      "Included: 1 checked bag up to 20 kg plus 1 small personal bag on RRC.",
      "Not included: local taxi or songthaew from the bus station to your hotel.",
      "Extra bags, golf bags, bicycles, surfboards and strollers can be charged separately by RRC.",
    ],
    tips: [
      "RRC currently publishes fixed airport-to-Pattaya departures rather than an on-demand service, so choose a time that leaves room after landing.",
      "The published airport pickup point for the Pattaya bus is Level 1, Gate 8.",
      "The published fare on the RRC page is 139 THB per seat, but always check the partner ticket before paying.",
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
          "Pre-booked private taxis use the meeting point shown on the partner voucher. Airport public taxis are a separate service on Level 1.",
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
      "Do not go to the bus counter for a taxi booking. Use the arrivals meeting point and operator contact details from the partner ticket.",
    planningNotes: [
      {
        title: "Late arrival rule",
        text: "AOT lists Suvarnabhumi public taxis as a 24-hour service at Floor 1, between Gates 4 and 7. Pre-booked taxis use the meeting point on your voucher.",
      },
      {
        title: "No fixed last departure",
        text: "Private taxi is on-demand or pre-booked, so there is no bus-style last departure. Confirm waiting time, tolls, luggage space and the exact Pattaya address before travel.",
      },
    ],
    lastMile:
      "Private taxi is the clearest door-to-door option. Confirm whether your drop-off is Pattaya City, Jomtien, Naklua, Pratumnak or a full hotel/condo address.",
    bookingChecks: [
      "AOT public taxi adds a 50 Baht airport surcharge.",
      "Toll fees are paid by passengers unless your pre-booked ticket says otherwise.",
      "Large or multiple bags can trigger baggage rules or require a larger vehicle.",
    ],
    tips: [
      "Private taxi is usually the simplest option after late evening flights.",
      "Check whether tolls, airport pickup, waiting time and hotel drop-off are included before paying.",
      "Choose a larger vehicle if you travel with more than two large suitcases.",
      "Do not use the bus counter for a taxi booking; follow the driver meeting instructions from the partner voucher.",
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
    planningNotes: [
      {
        title: "Late arrival rule",
        text: "Shared transfers run on fixed schedules. If your flight lands late, compare private taxi because shared departures may not match your arrival time.",
      },
      {
        title: "Check the final meeting point",
        text: "Bell/RRC lists Suvarnabhumi shared-transfer check-in at the passenger terminal on Level 1, Gate 8. Other vouchers can still name a different partner point.",
      },
    ],
    lastMile:
      "Shared tickets can be hotel drop-off, area drop-off or terminal drop-off depending on the operator. Match the ticket to your exact Pattaya hotel area.",
    bookingChecks: [
      "Check whether hotel drop-off is included before booking.",
      "Check the luggage allowance because shared vehicles have limited space.",
      "If you travel with family luggage, golf bags or a stroller, compare a private car or van.",
    ],
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

const busOption = transferOptions.find((option) => option.id === "bus");

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
  const selectedRouteOption =
    routeData.options.find((option) => option.id === selectedOption?.id) ??
    routeData.options[0];
  const freshness = getSourceFreshness(routeData);

  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-28 lg:hidden">
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

          <Link
            href="/routes"
            aria-label="Browse all routes"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ShieldCheck className="h-5 w-5" />
          </Link>
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
              sizes="(max-width: 1024px) 100vw, 390px"
              className="object-cover"
            />
          </div>
        </div>

        <Suspense fallback={null}>
          <MobilePersonalizedTripCard
            route={routeData}
            selectedOptionId={selectedRouteOption.id}
            backHref="/routes/bangkok-airport-to-pattaya"
            className="mt-4"
          />
        </Suspense>

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

        <div className="mt-4 grid gap-3">
          {selectedContent.planningNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-[1.25rem] border border-[#e7e2d8] bg-white p-4 shadow-sm"
            >
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                  <Clock3 className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-[#10201d]">
                    {note.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {note.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
              <MapPin className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-extrabold text-[#10201d]">
                Pattaya last mile
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {selectedContent.lastMile}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            Pickup and drop-off maps
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Save a screenshot of the partner pickup instructions before you
            leave arrivals. Map links open Google Maps without an API key.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <TrackedAnchor
              href={getPickupMapUrl(routeData, selectedRouteOption)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-2xl border border-[#0c5a4d] px-3 py-3 text-center text-xs font-extrabold text-[#0c5a4d]"
              event="map_opened"
              payload={{
                route: routeData.slug,
                option: selectedRouteOption.id,
                map_type: "pickup",
              }}
            >
              Open pickup in Google Maps
            </TrackedAnchor>
            <TrackedAnchor
              href={getDropoffMapUrl(routeData)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-2xl border border-[#0c5a4d] px-3 py-3 text-center text-xs font-extrabold text-[#0c5a4d]"
              event="map_opened"
              payload={{
                route: routeData.slug,
                option: selectedRouteOption.id,
                map_type: "dropoff",
              }}
            >
              Open drop-off in Google Maps
            </TrackedAnchor>
          </div>
          <div className="mt-2">
            <SaveScreenshotButton route={routeData.slug} />
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            What to check before booking
          </h2>

          <div className="mt-3 space-y-2">
            {selectedContent.bookingChecks.map((item) => (
              <div key={item} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                <p className="text-xs leading-5 text-slate-600">{item}</p>
              </div>
            ))}
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

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            Sources & freshness
          </h2>
          <div className="mt-3 grid gap-2 text-xs leading-5 text-slate-600">
            <p>
              <span className="font-extrabold text-[#10201d]">
                Last checked:
              </span>{" "}
              {freshness.lastChecked}
            </p>
            <p>
              <span className="font-extrabold text-[#10201d]">
                Official source:
              </span>{" "}
              {freshness.officialSource}
            </p>
            <p>
              <span className="font-extrabold text-[#10201d]">
                Partner source:
              </span>{" "}
              {freshness.partnerSource}
            </p>
            <p>
              <span className="font-extrabold text-[#10201d]">
                Confidence:
              </span>{" "}
              {freshness.confidence}
            </p>
          </div>
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
          Last checked May 2026. Thailand Transfer Guide is an independent travel
          comparison guide, not the transport operator. Booking, payment,
          ticket changes and support are handled by the booking partner or
          operator. Final price, schedule, pickup point and luggage rules must
          still be checked on the partner ticket.
        </p>
        <AffiliateDisclosure className="mt-2 text-center" />
      </div>

      <Suspense fallback={null}>
        <MobilePersonalizedDetailsSticky
          route={routeData}
          selectedOptionId={selectedRouteOption.id}
          stickyLabel={selectedOption?.name ?? "Selected option"}
        />
      </Suspense>

      <MobileBottomNav activeLabel="Routes" />
    </section>
  );
}
