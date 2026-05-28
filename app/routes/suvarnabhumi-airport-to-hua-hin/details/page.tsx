import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, Bus, CheckCircle2, Clock3, Luggage, MapPin, ShieldCheck } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("suvarnabhumi-airport-to-hua-hin");
const busOption = route?.options.find((option) => option.id === "bus");
const taxiOption = route?.options.find((option) => option.id === "taxi");

export const metadata: Metadata = {
  title: "Suvarnabhumi Airport to Hua Hin Guide | Pickup Tips & FAQ",
  description:
    "Read practical tips for travelling from Bangkok Suvarnabhumi Airport to Hua Hin. Check airport pickup points, travel times, luggage notes and booking advice.",
  alternates: {
    canonical: "/routes/suvarnabhumi-airport-to-hua-hin/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Clear immigration and collect your luggage.",
    description:
      "Do not book a tight departure after landing. Immigration, baggage claim and walking time can vary by flight.",
    image: "/assets/steps/immigration.png",
  },
  {
    number: "2",
    title: "Check your ticket for the exact meeting point.",
    description:
      "For airport bus tickets, the common pickup area is Level 1 near Gate 8, but always follow your operator instructions.",
    image: "/assets/steps/baggage-claim.png",
  },
  {
    number: "3",
    title: "Go to the official counter or private transfer meeting area.",
    description:
      "Use official counters, your confirmed online booking, or a named driver meeting point. Avoid random offers in the arrivals hall.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "4",
    title: "Confirm the Hua Hin drop-off before boarding.",
    description:
      "Some tickets end at Hua Hin Bus Station or an operator stop, while private taxis can usually continue to your hotel.",
    image: "/assets/routes/suvarnabhumi-airport-to-hua-hin.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Airport bus is usually 3h 30m - 5h. Private taxi is usually 2h 45m - 4h depending on traffic.",
  },
  {
    icon: MapPin,
    title: "Airport pickup",
    text: "Bus pickup is commonly around Level 1 / Gate 8. Private taxi pickup depends on the operator meeting point.",
  },
  {
    icon: Luggage,
    title: "Luggage",
    text: "Check the live ticket rules before booking, especially for vans, large suitcases, golf bags or surf gear.",
  },
];

const tips = [
  "Allow extra time after landing before choosing a bus departure.",
  "Check whether your Hua Hin ticket ends at Hua Hin Bus Station, Bluport area, an operator stop or your hotel.",
  "For evening arrivals, compare private taxi options because direct bus departures may be limited.",
  "Keep your booking confirmation ready before leaving the arrivals area.",
  "If you travel with children, heavy luggage or a late flight, door-to-door taxi is usually the simplest option.",
  "Live prices and schedules can change by date, operator and availability.",
];

const faqs = [
  {
    question: "What is the easiest way from Suvarnabhumi Airport to Hua Hin?",
    answer:
      "A private taxi is usually the easiest option after a long flight because it can take you directly from the airport meeting point to your Hua Hin hotel.",
  },
  {
    question: "What is the cheapest option?",
    answer:
      "The airport bus is usually the best value option when seats are available. Check the live schedule and baggage rules before booking.",
  },
  {
    question: "Where is the bus pickup at BKK?",
    answer:
      "The Hua Hin airport bus is commonly boarded from the ground transportation area on Level 1, often near Gate 8. Always follow the pickup point shown on your ticket.",
  },
  {
    question: "How long does the trip take?",
    answer:
      "Expect around 3h 30m - 5h by bus and around 2h 45m - 4h by private taxi, depending on traffic, airport processing time and your Hua Hin drop-off.",
  },
];

function MobileDetails() {
  if (!route) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-32 lg:hidden">
      <div className="mx-auto max-w-md px-4 py-5">
        <div className="flex items-start justify-between gap-3">
          <Link
            href="/routes/suvarnabhumi-airport-to-hua-hin"
            aria-label="Back to transfer options"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="min-w-0 flex-1 text-center">
            <div className="mx-auto flex items-center justify-center gap-2">
              <Bus className="h-4 w-4 text-[#0c5a4d]" />
              <h1 className="truncate text-[16px] font-extrabold text-[#10201d]">
                BKK to Hua Hin
              </h1>
            </div>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Airport bus, taxi and partner transfers
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
          <a href="#mobile-route-overview" className="border-b-2 border-[#0c5a4d] pb-3 text-[#0c5a4d]">
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
              src="/assets/routes/suvarnabhumi-airport-to-hua-hin-overview.png"
              alt="Suvarnabhumi Airport to Hua Hin route"
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
              <div key={fact.title} className="rounded-[1.25rem] border border-[#e7e2d8] bg-white p-4 shadow-sm">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#10201d]">{fact.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{fact.text}</p>
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
                  <p className="text-sm font-bold leading-5 text-[#10201d]">{step.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{step.description}</p>
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
                Avoid unofficial offers
              </h2>

              <p className="mt-1 text-sm leading-6 text-red-700/80">
                Use your confirmed booking, official airport counters or a named
                driver pickup. Do not accept pressured offers inside arrivals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="rounded-[1.25rem] border border-[#e7e2d8] bg-white p-4 shadow-sm">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                <ShieldCheck className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-extrabold text-[#10201d]">
                  Arrival buffer
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  After landing at Suvarnabhumi, allow time for immigration,
                  baggage claim, walking to the meeting point and Bangkok
                  traffic before choosing a fixed departure.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-[#e7e2d8] bg-white p-4 shadow-sm">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                <ShieldCheck className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-extrabold text-[#10201d]">
                  If you miss a fixed departure
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Check the next live bus or van departure first. If timing is
                  tight, compare private taxi because it is not tied to a fixed
                  public timetable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            Last-mile check
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Check whether the ticket ends at Hua Hin hotel, bus station,
            operator point or a central stop. If it is not door-to-door, plan a
            local ride to your exact hotel or condo.
          </p>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            What to check before booking
          </h2>

          <div className="mt-3 space-y-2">
            {[
              "Exact airport pickup point, reporting time and final Hua Hin drop-off.",
              "Whether tolls, waiting time, airport pickup and large luggage are included.",
              "Baggage allowance for families, strollers, golf bags or multiple suitcases.",
            ].map((item) => (
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
            {tips.slice(0, 4).map((tip) => (
              <div key={tip} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                <p className="text-xs leading-5 text-slate-600">{tip}</p>
              </div>
            ))}
          </div>

          <Link
            href="/routes/suvarnabhumi-airport-to-hua-hin"
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
              <div key={faq.question} className="rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-3">
                <p className="text-sm font-bold text-[#10201d]">{faq.question}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          Last checked May 2026. Thailand Transfers is an independent travel
          comparison guide, not the transport operator. Booking, payment,
          ticket changes and support are handled by the booking partner or
          operator. Final price, schedule, pickup point and luggage rules must
          still be checked on the live ticket.
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e7e2d8] bg-white/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-2xl backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-slate-500">Best value</p>
            <p className="text-base font-extrabold text-[#10201d]">
              Live price
              <span className="ml-1 text-xs font-medium text-slate-500">
                on 12Go
              </span>
            </p>
          </div>

          <AffiliateButton
            href={busOption?.affiliateUrl ?? route.mainAffiliateUrl}
            trackingId={busOption?.trackingId}
            variant="detailsSticky"
          >
            See live price
          </AffiliateButton>
        </div>
      </div>
    </section>
  );
}

export default function SuvarnabhumiAirportToHuaHinDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <div className="lg:hidden">
        <MobileDetails />
      </div>

      <div className="hidden lg:block">
        <Header />

        <section className="bg-[#f8f4ec] py-8 lg:py-16">
          <Container>
            <Link
              href="/routes/suvarnabhumi-airport-to-hua-hin"
              className="mb-6 inline-flex text-sm font-bold text-[#064e45] hover:underline"
            >
              Back to transfer options
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                  Route details
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#10201d] min-[390px]:text-4xl lg:text-6xl">
                  Suvarnabhumi Airport to Hua Hin: pickup guide and travel tips
                </h1>

                <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                  Before booking your transfer, check where to go after landing,
                  how airport bus pickup works, when a taxi is easier and what
                  to confirm before leaving Bangkok Airport.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AffiliateButton
                    href={busOption?.affiliateUrl ?? route.mainAffiliateUrl}
                    trackingId={busOption?.trackingId}
                  >
                    Check live prices on 12Go
                  </AffiliateButton>

                  <Link
                    href="/routes/suvarnabhumi-airport-to-hua-hin"
                    className="inline-flex items-center justify-center rounded-full border border-[#064e45] bg-white px-7 py-4 text-sm font-bold text-[#064e45] transition hover:bg-[#f8f4ec]"
                  >
                    Compare options
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#e7e2d8] bg-white shadow-xl shadow-black/5">
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/assets/routes/suvarnabhumi-airport-to-hua-hin.png"
                    alt="Suvarnabhumi Airport to Hua Hin transfer"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 lg:py-12">
          <Container>
            <div className="mb-6 max-w-3xl">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                After landing
              </p>

              <h2 className="text-[28px] font-extrabold text-[#10201d]">
                What happens after you land at BKK?
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#30465a]">
                Use these steps to choose a realistic departure time and find
                the right pickup point for Hua Hin.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>

                  <div className="p-4">
                    <p className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0c5a4d] text-[12px] font-extrabold text-white">
                      {step.number}
                    </p>

                    <h3 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#30465a]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f8f4ec] py-10 lg:py-12">
          <Container>
            <div className="grid gap-6 rounded-[28px] border border-[#e7e2d8] bg-white p-6 shadow-xl shadow-black/5 lg:grid-cols-[0.8fr_1.2fr] lg:p-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <AlertTriangle className="h-5 w-5" />
                </div>

                <div>
                  <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                    Travel warning
                  </p>

                  <h2 className="text-[28px] font-extrabold text-[#10201d]">
                    Avoid airport transfer pressure
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-6 text-[#30465a]">
                <p>
                  After landing, travelers can be approached by unofficial
                  drivers or people offering quick transfers. For Hua Hin, a
                  long-distance ride, this can lead to unclear prices or pickup
                  confusion.
                </p>

                <p>
                  Use official counters, pre-booked services or trusted booking
                  partners. Always confirm pickup point, Hua Hin drop-off,
                  luggage allowance and live price before boarding.
                </p>

                <div className="flex gap-3 rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />

                  <div>
                    <p className="text-sm font-extrabold text-[#10201d]">
                      Simple rule:
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#30465a]">
                      If your ticket says airport bus, go to the listed counter
                      or Level 1 pickup area. If your ticket says private taxi,
                      follow the named operator meeting instructions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 lg:py-12">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                  Practical tips
                </p>

                <h2 className="text-[28px] font-extrabold text-[#10201d]">
                  Small things that make the Hua Hin transfer easier
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#30465a]">
                  These notes are specific to the airport-to-beach route from
                  Suvarnabhumi Airport to Hua Hin.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {tips.map((tip) => (
                  <div key={tip} className="flex gap-3 rounded-[20px] border border-[#e7e2d8] bg-[#fbfaf7] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </div>

                    <p className="text-sm leading-6 text-[#30465a]">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 lg:py-16">
          <Container>
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                FAQ
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#10201d] sm:text-4xl">
                Questions about Suvarnabhumi Airport to Hua Hin
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-[2rem] border border-[#e7e2d8] bg-[#fbfaf7] p-5">
                  <h3 className="text-lg font-bold text-[#10201d]">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#064e45] py-16 text-white lg:py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f0c96a]">
                  Ready to compare?
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Check live Hua Hin transfer prices before you land
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  Compare airport bus, private taxi, bus plus van and other
                  partner options from Suvarnabhumi Airport to Hua Hin.
                </p>
              </div>

              <AffiliateButton
                href={taxiOption?.affiliateUrl ?? route.mainAffiliateUrl}
                trackingId={taxiOption?.trackingId}
              >
                Check live prices on 12Go
              </AffiliateButton>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
}
