import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-chang-to-bangkok");

export const metadata: Metadata = {
  title: "Koh Chang to Bangkok Guide | Ferry, Van, Bus & Taxi Tips",
  description:
    "Read practical tips for travelling from Koh Chang to Bangkok. Check hotel pickup, ferry crossing, mainland transfer, Bangkok drop-off, luggage notes and FAQ.",
  alternates: {
    canonical: "/routes/koh-chang-to-bangkok/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Confirm pickup on Koh Chang.",
    description:
      "Check whether your ticket starts at your hotel, a pier or an operator meeting point. Pickup areas can vary by provider.",
    image: "/assets/routes/koh-chang-to-bangkok.png",
  },
  {
    number: "2",
    title: "Cross from Koh Chang to the mainland.",
    description:
      "Most routes include a ferry crossing before the long road transfer. Confirm whether the ferry is included in the ticket.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "3",
    title: "Continue by van, bus or private taxi.",
    description:
      "After the ferry, the route continues by road toward Bangkok. Travel time depends on traffic, stops and operator route.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "4",
    title: "Check your Bangkok drop-off point.",
    description:
      "Some tickets finish at a station or operator point, while private transfers can go to selected hotel areas.",
    image: "/assets/routes/bangkok-koh-chang.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferry plus van is usually 7h - 10h. Ferry plus bus is usually 8h - 10h 30m. Private taxi can be 6h - 8h.",
  },
  {
    icon: MapPin,
    title: "Island pickup",
    text: "Pickup can be a Koh Chang hotel, pier or operator meeting point. Check the exact start point and reporting time.",
  },
  {
    icon: Luggage,
    title: "Ferry and luggage",
    text: "Check baggage limits and whether hotel pickup, ferry crossing, mainland transfer and Bangkok drop-off are included.",
  },
];

const tips = [
  "Confirm whether your ticket includes Koh Chang hotel pickup or starts at a pier.",
  "Check that the ferry crossing and mainland road transfer are included.",
  "Private taxi is usually easier for families, luggage and late departures.",
  "Ferry queues and Bangkok traffic can change total travel time.",
  "Large suitcases and extra bags may need stricter van or bus luggage rules.",
  "Check the Bangkok drop-off area before booking onward hotel transport.",
];

const faqs = [
  {
    question: "What is the easiest way from Koh Chang to Bangkok?",
    answer:
      "A ferry plus van or private taxi is usually easiest. The best choice depends on luggage, pickup area and how much comfort you want for the long road transfer.",
  },
  {
    question: "Is the ferry included?",
    answer:
      "It depends on the ticket. Combined island-to-Bangkok tickets often include the ferry, but always check live details for ferry crossing and pier transfer.",
  },
  {
    question: "Where will I be dropped in Bangkok?",
    answer:
      "Drop-off depends on operator and ticket type. Shared services may finish at a station or operator point, while private transfers can be more flexible.",
  },
  {
    question: "How long does the route take?",
    answer:
      "Most tickets take around 7h - 10h 30m depending on pickup, ferry queues, mainland transfer and Bangkok traffic.",
  },
];

export default function KohChangToBangkokDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/koh-chang-to-bangkok"
      mobileTitle="Koh Chang to Bangkok"
      mobileSubtitle="Island pickup, ferry crossing and Bangkok drop-off"
      overviewImage="/assets/routes/koh-chang-to-bangkok-overview.png"
      overviewAlt="Koh Chang to Bangkok route"
      heroTitle="Koh Chang to Bangkok: ferry transfer guide"
      heroDescription="Before booking, check island pickup, ferry crossing, mainland transfer, luggage rules, travel time and your final Bangkok drop-off point."
      heroImage="/assets/routes/koh-chang-to-bangkok.png"
      heroAlt="Koh Chang to Bangkok transfer"
      stepsHeading="Leaving Koh Chang - step by step"
      stepsIntro="Use these steps to keep pickup, ferry crossing and Bangkok drop-off details clear before booking."
      warningMobileTitle="Check the drop-off"
      warningMobileText="Shared transfers may finish at a station or operator point. Check the Bangkok drop-off before arranging your hotel transfer."
      warningTitle="Bangkok drop-off points can vary"
      warningParagraphs={[
        "The island-to-city trip includes pickup, ferry crossing, mainland transfer and a Bangkok drop-off that may not be your hotel.",
        "Use confirmed booking details and check ferry inclusion, luggage rules and the exact Bangkok arrival point before booking.",
      ]}
      simpleRule="If you need door-to-door travel in Bangkok, compare private taxi options or choose a shared ticket with a clear drop-off area."
      practicalTitle="Small things that make Koh Chang transfers easier"
      practicalIntro="These notes are specific to travelling from Koh Chang to Bangkok by ferry and road transfer."
      faqTitle="Questions about Koh Chang to Bangkok"
      readyTitle="Check live Bangkok transfer prices before leaving Koh Chang"
      readyText="Compare ferry plus van, ferry plus bus, shared van and private taxi options from Koh Chang to Bangkok."
      stickyLabel="Island link"
      primaryOptionId="ferry-van"
      finalOptionId="taxi"
      steps={steps}
      quickFacts={quickFacts}
      tips={tips}
      faqs={faqs}
    />
  );
}
