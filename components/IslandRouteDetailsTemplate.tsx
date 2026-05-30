import Image from "next/image";
import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowLeft,
  Bus,
  CheckCircle2,
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
import { SaveScreenshotButton, TrackedAnchor } from "@/components/TrackedActions";
import type { RoutePageData } from "@/data/routePages";
import {
  getDropoffMapUrl,
  getPickupMapUrl,
  getSourceFreshness,
} from "@/data/routeIntelligence";

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
};

type QuickFact = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

function isAirportRoute(route: RoutePageData) {
  return `${route.from} ${route.to}`.toLowerCase().includes("airport");
}

function isIslandOrPierRoute(route: RoutePageData) {
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();

  return (
    routeText.includes("koh") ||
    routeText.includes("phi phi") ||
    routeText.includes("ferry") ||
    routeText.includes("pier")
  );
}

function buildMobilePlanningNotes(route: RoutePageData) {
  const airportRoute = isAirportRoute(route);
  const islandOrPierRoute = isIslandOrPierRoute(route);
  const routeText = `${route.from} ${route.to}`.toLowerCase();

  if (routeText.includes("koh chang")) {
    return [
      {
        title: "Ferry operating window",
        text: "Current Ferry Koh Chang guidance shows daily service from 06:30 to 18:30. Standalone ferry tickets are bought with cash at the pier.",
      },
      {
        title: "Centrepoint status",
        text: "Trat / Centrepoint Ferry has been suspended since July 2024. Check partner ticket details for the actual ferry, pier and transfer coverage.",
      },
    ];
  }

  if (islandOrPierRoute) {
    return [
      {
        title: "Ferry and weather buffer",
        text: airportRoute
          ? "Island routes that connect with an airport still depend on pier reporting time, ferry crossing and sea conditions. Avoid tight flight connections before or after the transfer."
          : "Island routes can depend on pier reporting time, ferry crossing and sea conditions. Avoid tight flight or train connections after the transfer.",
      },
      {
        title: "If the schedule changes",
        text: "Check the operator ticket for the next available ferry or combined transfer. Private road transfer does not replace the ferry crossing where one is required.",
      },
    ];
  }

  if (airportRoute) {
    return [
      {
        title: "Arrival buffer",
        text: "If this route starts after a flight, allow time for immigration, baggage claim, walking to the meeting point and possible flight delay before choosing a fixed schedule.",
      },
      {
        title: "If you miss a fixed departure",
        text: "For scheduled buses, vans, ferries or combined tickets, check the next available departure. If timing is tight, compare private taxi or private transfer options.",
      },
    ];
  }

  return [
    {
      title: "Schedule buffer",
      text: "For fixed bus, van or train departures, arrive early and keep time for traffic, station checks and luggage handling.",
    },
    {
      title: "If you miss it",
      text: "Check the next available departure before changing station or operator. Private taxi is usually the fallback when schedule flexibility matters.",
    },
  ];
}

function buildMobileLastMile(route: RoutePageData, selectedOptionName: string) {
  const routeText = `${route.from} ${route.to}`.toLowerCase();

  if (routeText.includes("pattaya")) {
    return "Check whether your ticket ends at North Pattaya, Jomtien, an operator point or your hotel. Shared services and buses are not always door-to-door.";
  }

  if (isIslandOrPierRoute(route)) {
    return "Check the exact pier and whether onward hotel, airport or city transfer is included after the boat. Some tickets end at the pier only.";
  }

  if (selectedOptionName.toLowerCase().includes("taxi")) {
    return "Private taxi is usually the most direct option, but the driver still needs the exact hotel, condo, airport terminal or full address.";
  }

  return "Check whether the final stop is a hotel, station, terminal, pier, airport, bus stop or operator point. Plan a local ride if drop-off is not door-to-door.";
}

function buildMobileBookingChecks(
  route: RoutePageData,
  selectedOptionName: string,
) {
  const checks = [
    "Check the exact pickup point, reporting time and final drop-off on the partner ticket.",
    "Check baggage allowance, extra-bag rules and whether large items need a bigger vehicle.",
  ];

  if (isIslandOrPierRoute(route)) {
    checks.push(
      "Check whether ferry crossing, pier transfer and onward transfer are included.",
    );
  }

  if (isAirportRoute(route)) {
    checks.push(
      "If this connects with a flight, leave extra time for traffic, weather, baggage and airport processing.",
    );
  }

  if (selectedOptionName.toLowerCase().includes("taxi")) {
    checks.push(
      "Check whether tolls, waiting time, airport pickup and luggage capacity are included.",
    );
  } else {
    checks.push(
      "Check whether the service is fixed schedule, shared transfer or door-to-door.",
    );
  }

  return checks;
}

type IslandRouteDetailsTemplateProps = {
  route: RoutePageData;
  backHref: string;
  mobileTitle: string;
  mobileSubtitle: string;
  overviewImage: string;
  overviewAlt: string;
  overviewContent?: ReactNode;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  stepsHeading: string;
  stepsIntro: string;
  warningMobileTitle: string;
  warningMobileText: string;
  warningTitle: string;
  warningParagraphs: string[];
  simpleRule: string;
  practicalTitle: string;
  practicalIntro: string;
  faqTitle: string;
  readyTitle: string;
  readyText: string;
  stickyLabel: string;
  mobileSelectedOptionId?: string;
  primaryOptionId: string;
  finalOptionId: string;
  steps: Step[];
  quickFacts: QuickFact[];
  tips: string[];
  faqs: Faq[];
};

export function IslandRouteDetailsTemplate({
  route,
  backHref,
  mobileTitle,
  mobileSubtitle,
  overviewImage,
  overviewAlt,
  overviewContent,
  heroTitle,
  heroDescription,
  heroImage,
  heroAlt,
  stepsHeading,
  stepsIntro,
  warningMobileTitle,
  warningMobileText,
  warningTitle,
  warningParagraphs,
  simpleRule,
  practicalTitle,
  practicalIntro,
  faqTitle,
  readyTitle,
  readyText,
  stickyLabel,
  mobileSelectedOptionId,
  primaryOptionId,
  finalOptionId,
  steps,
  quickFacts,
  tips,
  faqs,
}: IslandRouteDetailsTemplateProps) {
  const primaryOption =
    route.options.find((option) => option.id === primaryOptionId) ??
    route.options[0];
  const finalOption =
    route.options.find((option) => option.id === finalOptionId) ??
    primaryOption;
  const mobileSelectedOption =
    route.options.find((option) => option.id === mobileSelectedOptionId) ??
    primaryOption;
  const mobileQuickFacts =
    mobileSelectedOptionId && mobileSelectedOption
      ? quickFacts.map((fact, index) => {
          if (index === 0) {
            return {
              ...fact,
              title: "Selected option",
              text: `${mobileSelectedOption.name}: ${mobileSelectedOption.duration}. ${mobileSelectedOption.bestFor}.`,
            };
          }

          if (index === 1) {
            return {
              ...fact,
              title: "Pickup point",
              text: mobileSelectedOption.pickup,
            };
          }

          return fact;
        })
      : quickFacts;
  const mobilePlanningNotes = buildMobilePlanningNotes(route);
  const mobileLastMile = buildMobileLastMile(route, mobileSelectedOption.name);
  const mobileBookingChecks = buildMobileBookingChecks(
    route,
    mobileSelectedOption.name,
  );
  const freshness = getSourceFreshness(route);

  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <RouteDetailsStructuredData route={route} faqs={faqs} />
      <section className="min-h-screen bg-[#fbfaf7] pb-28 lg:hidden">
        <div className="mx-auto max-w-md px-4 py-5">
          <div className="flex items-start justify-between gap-3">
            <Link
              href={backHref}
              aria-label="Back to transfer options"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div className="min-w-0 flex-1 text-center">
              <div className="mx-auto flex items-center justify-center gap-2">
                <Bus className="h-4 w-4 text-[#0c5a4d]" />
                <h1 className="truncate text-[16px] font-extrabold text-[#10201d]">
                  {mobileTitle}
                </h1>
              </div>

              <p className="mt-1 text-xs font-medium text-slate-500">
                {mobileSubtitle}
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
              {overviewContent ?? (
                <Image
                  src={overviewImage}
                  alt={overviewAlt}
                  fill
                  priority
                  sizes="(max-width: 448px) calc(100vw - 32px), 416px"
                  className="object-cover"
                />
              )}
            </div>
          </div>

          <Suspense fallback={null}>
            <MobilePersonalizedTripCard
              route={route}
              selectedOptionId={mobileSelectedOptionId}
              backHref={backHref}
              className="mt-4"
            />
          </Suspense>

          <div className="mt-4 grid gap-3">
            {mobileQuickFacts.map((fact) => {
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
            {mobilePlanningNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-[1.25rem] border border-[#e7e2d8] bg-white p-4 shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                    <ShieldCheck className="h-4 w-4" />
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
              {stepsHeading}
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
                  {warningMobileTitle}
                </h2>

                <p className="mt-1 text-sm leading-6 text-red-700/80">
                  {warningMobileText}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <h2 className="text-lg font-extrabold text-[#10201d]">
              Last-mile check
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {mobileLastMile}
            </p>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <h2 className="text-lg font-extrabold text-[#10201d]">
              Pickup and drop-off maps
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Save a screenshot before you leave the airport, pier or hotel.
              Google Maps links open as a search, so confirm the exact partner
              meeting point on your ticket.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <TrackedAnchor
                href={getPickupMapUrl(route, mobileSelectedOption)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-2xl border border-[#0c5a4d] px-3 py-3 text-center text-xs font-extrabold text-[#0c5a4d]"
                event="map_opened"
                payload={{
                  route: route.slug,
                  option: mobileSelectedOption.id,
                  map_type: "pickup",
                }}
              >
                Open pickup in Google Maps
              </TrackedAnchor>

              <TrackedAnchor
                href={getDropoffMapUrl(route)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-2xl border border-[#0c5a4d] px-3 py-3 text-center text-xs font-extrabold text-[#0c5a4d]"
                event="map_opened"
                payload={{
                  route: route.slug,
                  option: mobileSelectedOption.id,
                  map_type: "dropoff",
                }}
              >
                Open drop-off in Google Maps
              </TrackedAnchor>
            </div>
            <div className="mt-2">
              <SaveScreenshotButton route={route.slug} />
            </div>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <h2 className="text-lg font-extrabold text-[#10201d]">
              What to check before booking
            </h2>

            <div className="mt-3 space-y-2">
              {mobileBookingChecks.map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                  <p className="text-xs leading-5 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
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

            <Link
              href="/corrections-policy"
              className="mt-3 flex min-h-12 items-center justify-center rounded-2xl bg-[#f8f4ec] px-4 py-3 text-sm font-extrabold text-[#0c5a4d]"
            >
              Report outdated info
            </Link>
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
              href={backHref}
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
            selectedOptionId={mobileSelectedOptionId}
            stickyLabel={stickyLabel}
          />
        </Suspense>

        <MobileBottomNav activeLabel="Routes" />
      </section>

      <div className="hidden lg:block">
        <Header />

        <section className="bg-[#f8f4ec] py-8 lg:py-16">
          <Container>
            <Link
              href={backHref}
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
                  {heroTitle}
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                  {heroDescription}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AffiliateButton
                    href={primaryOption?.affiliateUrl ?? route.mainAffiliateUrl}
                    trackingId={primaryOption?.trackingId}
                  >
                    Check final price and ticket rules
                  </AffiliateButton>

                  <Link
                    href={backHref}
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
                    src={heroImage}
                    alt={heroAlt}
                    fill
                    priority
                    sizes="420px"
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
                Route steps
              </p>

              <h2 className="text-[28px] font-extrabold text-[#10201d]">
                {stepsHeading}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#30465a]">
                {stepsIntro}
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
                      sizes="(min-width: 1024px) 25vw, 50vw"
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
                    {warningTitle}
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-6 text-[#30465a]">
                {warningParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="flex gap-3 rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />

                  <div>
                    <p className="text-sm font-extrabold text-[#10201d]">
                      Simple rule:
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#30465a]">
                      {simpleRule}
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
                  {practicalTitle}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#30465a]">
                  {practicalIntro}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {tips.map((tip) => (
                  <div
                    key={tip}
                    className="flex gap-3 rounded-[20px] border border-[#e7e2d8] bg-[#fbfaf7] p-4"
                  >
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
                {faqTitle}
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[2rem] border border-[#e7e2d8] bg-[#fbfaf7] p-5"
                >
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
                  {readyTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  {readyText}
                </p>
              </div>

              <AffiliateButton
                href={finalOption?.affiliateUrl ?? route.mainAffiliateUrl}
                trackingId={finalOption?.trackingId}
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
