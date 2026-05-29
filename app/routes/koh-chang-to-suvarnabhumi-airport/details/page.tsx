import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-chang-to-suvarnabhumi-airport");

export const metadata: Metadata = {
  title: "Koh Chang to Suvarnabhumi Airport Guide | Ferry Transfer Tips",
  description:
    "Read practical tips for travelling from Koh Chang to Suvarnabhumi Airport. Check hotel pickup, ferry crossing, airport drop-off, flight buffer, luggage notes and FAQ.",
  alternates: {
    canonical: "/routes/koh-chang-to-suvarnabhumi-airport/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Confirm pickup on Koh Chang.",
    description:
      "Check whether your ticket starts at your hotel, a pier or an operator meeting point. Allow time to reach the pickup area.",
    image: "/assets/routes/koh-chang-to-suvarnabhumi-airport.png",
  },
  {
    number: "2",
    title: "Cross from Koh Chang to the mainland.",
    description:
      "Most airport routes include a ferry crossing first. Confirm ferry inclusion and timing before choosing a flight connection.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "3",
    title: "Continue by road toward Suvarnabhumi Airport.",
    description:
      "After the ferry, the route continues by van, bus or private car. Road time depends on traffic, stops and operator route.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "4",
    title: "Arrive at BKK with check-in buffer.",
    description:
      "Do not plan the route too close to flight departure. Leave extra time for ferry queues, traffic and airport check-in.",
    image: "/assets/steps/baggage-claim.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferry plus van is usually 6h 30m - 9h. Bus plus ferry is usually 7h - 10h. Private taxi can be 5h 30m - 7h 30m.",
  },
  {
    icon: MapPin,
    title: "Island pickup",
    text: "Pickup can be a Koh Chang hotel, pier or operator meeting point. Check the exact start point and reporting time.",
  },
  {
    icon: Luggage,
    title: "Airport buffer",
    text: "Check baggage limits and leave a realistic buffer before your Suvarnabhumi Airport flight.",
  },
];

const tips = [
  "Do not book a tight same-day flight after a long island transfer.",
  "Current Ferry Koh Chang guidance shows daily service from 06:30 to 18:30.",
  "Standalone ferry tickets are cash-only at the pier; combined transfer tickets can have different inclusions.",
  "Trat / Centrepoint Ferry has been suspended since July 2024 and has not resumed.",
  "Confirm whether hotel pickup, ferry crossing and airport drop-off are included.",
  "Private taxi is usually easier for families, luggage and early flights.",
  "Ferry queues and Bangkok traffic can change total travel time.",
];

const faqs = [
  {
    question: "How much time should I leave before my flight?",
    answer:
      "Leave a generous buffer. This route depends on island pickup, ferry timing and mainland traffic, so avoid tight same-day flight connections.",
  },
  {
    question: "Is private taxi better for airport transfers?",
    answer:
      "Private taxi is usually better if you have luggage, family or a fixed flight time. Shared transfers can be cheaper but need more schedule buffer.",
  },
  {
    question: "Is the ferry included?",
    answer:
      "It depends on the ticket. Combined airport transfers often include the ferry, but always check the partner details for ferry crossing and pier transfer.",
  },
  {
    question: "Can I fly from Trat instead?",
    answer:
      "Some travelers compare flight combinations from the Trat area, but connection details vary. Check current schedules and baggage rules carefully.",
  },
];

export default function KohChangToSuvarnabhumiAirportDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/koh-chang-to-suvarnabhumi-airport"
      mobileTitle="Koh Chang to BKK"
      mobileSubtitle="Island pickup, ferry crossing and airport drop-off"
      overviewImage="/assets/routes/koh-chang-to-suvarnabhumi-airport-overview.png"
      overviewAlt="Koh Chang to Suvarnabhumi Airport route"
      heroTitle="Koh Chang to Suvarnabhumi Airport: ferry transfer guide"
      heroDescription="Before booking, check island pickup, ferry crossing, mainland transfer, airport drop-off, luggage rules and how much flight buffer you need."
      heroImage="/assets/routes/koh-chang-to-suvarnabhumi-airport.png"
      heroAlt="Koh Chang to Suvarnabhumi Airport transfer"
      stepsHeading="Before your flight - step by step"
      stepsIntro="Use these steps to keep island pickup, ferry crossing and airport arrival timing realistic."
      warningMobileTitle="Leave a flight buffer"
      warningMobileText="Koh Chang airport transfers depend on the ferry window and mainland road transfer. Current ferry guidance shows service from 06:30 to 18:30."
      warningTitle="Do not plan a tight airport connection"
      warningParagraphs={[
        "The Koh Chang-to-BKK trip includes island pickup, ferry crossing, mainland transfer and airport drop-off.",
        "Current Ferry Koh Chang guidance shows daily service from 06:30 to 18:30, cash-only pier tickets for standalone ferry crossings, and Trat / Centrepoint Ferry suspended since July 2024.",
        "Use confirmed booking details and check ferry inclusion, luggage rules and scheduled airport arrival time before booking.",
      ]}
      simpleRule="Choose a transfer that reaches Suvarnabhumi Airport comfortably before check-in, especially during busy ferry or traffic periods."
      practicalTitle="Small things that make airport transfers easier"
      practicalIntro="These notes are specific to travelling from Koh Chang to Suvarnabhumi Airport by ferry and road transfer."
      faqTitle="Questions about Koh Chang to Suvarnabhumi Airport"
      readyTitle="Check final BKK transfer prices before leaving Koh Chang"
      readyText="Compare ferry plus van, bus plus ferry, private taxi and flight combinations from Koh Chang to Suvarnabhumi Airport."
      stickyLabel="Flight buffer"
      primaryOptionId="ferry-van"
      finalOptionId="taxi"
      steps={steps}
      quickFacts={quickFacts}
      tips={tips}
      faqs={faqs}
    />
  );
}
