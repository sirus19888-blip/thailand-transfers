import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { Suspense } from "react";
import { notFound } from "next/navigation";
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
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { RouteDetailsStructuredData } from "@/components/StructuredData";
import {
  MobilePersonalizedDetailsSticky,
  MobilePersonalizedTripCard,
} from "@/components/MobilePersonalizedTrip";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("suvarnabhumi-airport-to-koh-chang");
const ferryVanOption = route?.options.find((option) => option.id === "ferry-van");
const taxiOption = route?.options.find((option) => option.id === "taxi");

export const metadata: Metadata = createPageMetadata({
  title: "Suvarnabhumi Airport to Koh Chang Guide | Ferry Tips & FAQ",
  description:
    "Read practical tips for travelling from Bangkok Suvarnabhumi Airport to Koh Chang. Check airport pickup, pier transfer, ferry timing, luggage notes and booking advice.",
  alternates: {
    canonical: "/routes/suvarnabhumi-airport-to-koh-chang/details",
  },
});

const steps = [
  {
    number: "1",
    title: "Clear immigration and collect your luggage.",
    description:
      "Do not choose a tight transfer after landing. Immigration, baggage claim and walking to the meeting point can take longer than expected.",
    image: "/assets/steps/immigration.png",
  },
  {
    number: "2",
    title: "Find the exact airport meeting point.",
    description:
      "Check whether your ticket uses an airport counter, operator desk, driver meeting point or another pickup area at Suvarnabhumi.",
    image: "/assets/steps/baggage-claim.png",
  },
  {
    number: "3",
    title: "Travel to the mainland pier or Trat area.",
    description:
      "Most routes continue by road before the ferry. Confirm whether the mainland transfer and ferry are both included in the ticket.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "4",
    title: "Check the Koh Chang arrival and final drop-off.",
    description:
      "Some tickets finish at the pier, while others continue to selected areas or hotels. Always confirm the final drop-off before booking.",
    image: "/assets/routes/suvarnabhumi-airport-to-koh-chang.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferry plus van is usually 6h - 9h. Bus plus ferry is usually 7h - 10h. Private taxi can be 5h 30m - 8h depending on traffic and ferry timing.",
  },
  {
    icon: MapPin,
    title: "Airport pickup",
    text: "Pickup can be an airport counter, operator meeting point or private driver area. Follow the location shown on the partner ticket.",
  },
  {
    icon: Luggage,
    title: "Ferry and luggage",
    text: "Ferry Koh Chang guidance shows 06:30 to 18:30 daily service and cash-only standalone ferry tickets at the pier. Check baggage limits and whether your transfer includes ferry crossing and hotel drop-off.",
  },
];

const tips = [
  "Allow extra time after landing before choosing an island transfer.",
  "Current Ferry Koh Chang guidance shows daily service from 06:30 to 18:30.",
  "Standalone Ferry Koh Chang tickets are bought with cash at the pier on the day of travel.",
  "Trat / Centrepoint Ferry has been suspended since July 2024 and has not resumed.",
  "Confirm whether the ticket includes mainland transfer, ferry crossing and Koh Chang drop-off.",
  "Large suitcases, surf gear and extra bags may need a different vehicle or ticket rule.",
  "Weather, traffic and ferry queues can change the total travel time.",
];

const faqs = [
  {
    question: "What is the easiest way from Suvarnabhumi Airport to Koh Chang?",
    answer:
      "A private taxi or a combined ferry plus van ticket is usually easiest. The best choice depends on your arrival time, luggage and whether you need hotel drop-off on Koh Chang.",
  },
  {
    question: "What is the cheapest option?",
    answer:
      "Bus plus ferry or ferry plus van tickets are usually better value than a private taxi. Check partner availability and what each ticket includes before booking.",
  },
  {
    question: "Is the ferry included?",
    answer:
      "It depends on the operator and ticket type. Always check the partner ticket details for mainland transfer, ferry crossing and any island-side transfer.",
  },
  {
    question: "What if my flight arrives late?",
    answer:
      "Avoid tight connections. If you arrive late in the day, compare private transfer options and check ferry timing before booking.",
  },
];

function MobileDetails() {
  if (!route) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#fbfaf7] pb-28 lg:hidden">
      <RouteDetailsStructuredData route={route} faqs={faqs} />
      <div className="mx-auto max-w-md px-4 py-5">
        <div className="flex items-start justify-between gap-3">
          <Link
            href="/routes/suvarnabhumi-airport-to-koh-chang"
            aria-label="Back to transfer options"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="min-w-0 flex-1 text-center">
            <div className="mx-auto flex items-center justify-center gap-2">
              <Bus className="h-4 w-4 text-[#0c5a4d]" />
              <h1 className="truncate text-[16px] font-extrabold text-[#10201d]">
                BKK to Koh Chang
              </h1>
            </div>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Airport pickup, pier transfer and ferry crossing
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
              src="/assets/routes/suvarnabhumi-airport-to-koh-chang-overview.png"
              alt="Suvarnabhumi Airport to Koh Chang route"
              fill
              priority
              sizes="(max-width: 448px) calc(100vw - 32px), 416px"
              className="object-cover"
            />
          </div>
        </div>

        <Suspense fallback={null}>
          <MobilePersonalizedTripCard
            route={route}
            backHref="/routes/suvarnabhumi-airport-to-koh-chang"
            className="mt-4"
          />
        </Suspense>

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
                Check the last ferry
              </h2>

              <p className="mt-1 text-sm leading-6 text-red-700/80">
                Ferry Koh Chang currently runs from 06:30 to 18:30. Late
                arrivals, weather and ferry queues can change the route, so do
                not book a tight connection.
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
                  Ferry and weather buffer
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  This route still depends on mainland road time, pier reporting
                  time, ferry queues and sea conditions. Ferry Koh Chang
                  guidance shows daily service from 06:30 to 18:30.
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
                  If the schedule changes
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Trat / Centrepoint Ferry has been suspended since July 2024.
                  Check the operator ticket for the actual ferry, pier and next
                  available combined transfer.
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
            Check whether the ticket ends at the Koh Chang pier, includes the
            ferry crossing only, or continues to your hotel area on the island.
            Some services are not full door-to-door.
          </p>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <h2 className="text-lg font-extrabold text-[#10201d]">
            What to check before booking
          </h2>

          <div className="mt-3 space-y-2">
            {[
              "Airport pickup point, pier transfer, ferry crossing and island-side drop-off.",
              "Whether the fare includes ferry tickets, tolls, waiting time and large luggage.",
              "Extra space needs for families, strollers, golf bags or multiple suitcases.",
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
            href="/routes/suvarnabhumi-airport-to-koh-chang"
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
          route={route}
          selectedOptionId={ferryVanOption?.id}
          stickyLabel={ferryVanOption?.name ?? "Island link"}
        />
      </Suspense>

      <MobileBottomNav activeLabel="Routes" />
    </section>
  );
}
export default function SuvarnabhumiAirportToKohChangDetailsPage() {
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
              href="/routes/suvarnabhumi-airport-to-koh-chang"
              className="mb-6 inline-flex text-sm font-bold text-[#064e45] hover:underline"
            >
              Back to transfer options
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                  Route details
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[#10201d] min-[390px]:text-4xl lg:text-6xl">
                  Suvarnabhumi Airport to Koh Chang: ferry transfer guide
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                  Before booking, check airport pickup, mainland pier transfer,
                  ferry crossing, luggage rules and whether the ticket continues
                  to your Koh Chang hotel area.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AffiliateButton
                    href={ferryVanOption?.affiliateUrl ?? route.mainAffiliateUrl}
                    trackingId={ferryVanOption?.trackingId}
                  >
                    Check final price and ticket rules
                  </AffiliateButton>

                  <Link
                    href="/routes/suvarnabhumi-airport-to-koh-chang"
                    className="inline-flex items-center justify-center rounded-full border border-[#064e45] bg-white px-7 py-4 text-sm font-bold text-[#064e45] transition hover:bg-[#f8f4ec]"
                  >
                    Compare options
                  </Link>
                </div>
                <AffiliateDisclosure className="mt-3" />
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#e7e2d8] bg-white shadow-xl shadow-black/5">
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/assets/routes/suvarnabhumi-airport-to-koh-chang.png"
                    alt="Suvarnabhumi Airport to Koh Chang transfer"
                    fill
                    priority
                    sizes="(min-width: 1024px) 33vw, 0px"
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
                Use these steps to avoid tight ferry connections and pickup
                confusion on the way to Koh Chang.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 0px"
                      className="object-cover"
                    />
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
                    Check ferry timing before you book
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-6 text-[#30465a]">
                <p>
                  Koh Chang is an island route, so road time is only part of the
                  journey. Ferry schedules, queues, weather and late flight
                  arrivals can affect the total travel time.
                </p>

                <p>
                  Use confirmed booking details and check whether your ticket
                  includes the airport pickup, mainland transfer, ferry crossing
                  and island-side drop-off.
                </p>

                <div className="flex gap-3 rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />

                  <div>
                    <p className="text-sm font-extrabold text-[#10201d]">
                      Simple rule:
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#30465a]">
                      If your plane lands late in the day, check the last ferry
                      first. Current Ferry Koh Chang guidance shows 18:30 as
                      the daily service end time.
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
                  Small things that make Koh Chang transfers easier
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#30465a]">
                  These notes are specific to the airport-to-island route from
                  Suvarnabhumi Airport to Koh Chang.
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
                Questions about Suvarnabhumi Airport to Koh Chang
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
                  Check final Koh Chang transfer prices before you land
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  Compare ferry plus van, bus plus ferry, private taxi and
                  other partner options from Suvarnabhumi Airport to Koh Chang.
                </p>
              </div>

              <AffiliateButton
                href={taxiOption?.affiliateUrl ?? route.mainAffiliateUrl}
                trackingId={taxiOption?.trackingId}
              >
                Check final price and ticket rules
              </AffiliateButton>
            </div>
            <AffiliateDisclosure className="mt-4 text-white/70" />
          </Container>
        </section>
      </div>
    </main>
  );
}
