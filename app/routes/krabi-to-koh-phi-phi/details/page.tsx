import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("krabi-to-koh-phi-phi");

export const metadata: Metadata = createPageMetadata({
  title: "Krabi to Koh Phi Phi Guide | Ferry, Speedboat & Pier Tips",
  description:
    "Read practical tips for travelling from Krabi to Koh Phi Phi. Check departure pier, ferry and speedboat timing, luggage notes, weather warnings and FAQ.",
  alternates: {
    canonical: "/routes/krabi-to-koh-phi-phi/details",
  },
});

const steps = [
  {
    number: "1",
    title: "Check your Krabi departure pier or pickup area.",
    description:
      "Tickets can start at a Krabi pier, Ao Nang area pickup or another operator point. Confirm the exact meeting point.",
    image: "/assets/routes/krabi-to-koh-phi-phi.png",
  },
  {
    number: "2",
    title: "Arrive early for boat check-in.",
    description:
      "Leave time for road transfer, ticket checks and luggage handling before the ferry or speedboat leaves.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "3",
    title: "Cross from Krabi coast to Koh Phi Phi.",
    description:
      "Ferries are usually easier with bags. Speedboats can be faster, but the ride depends more on sea conditions.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "4",
    title: "Arrive at Tonsai Pier or the listed Phi Phi pier.",
    description:
      "Most tickets finish at the pier. Check how you will reach your hotel or beach area after arrival.",
    image: "/assets/routes/koh-phi-phi-to-krabi.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferries are usually 1h 30m - 3h. Speedboats can be 45m - 1h 30m. Van plus ferry can take 2h - 4h.",
  },
  {
    icon: MapPin,
    title: "Departure point",
    text: "Check whether your ticket starts at a Krabi pier or includes pickup from Ao Nang, Krabi town or another area.",
  },
  {
    icon: Luggage,
    title: "Luggage and sea",
    text: "Ferry is usually easier for suitcases. Speedboat baggage rules can be stricter and more weather-dependent.",
  },
];

const tips = [
  "Check the exact Krabi departure pier or hotel pickup area before booking.",
  "Arrive early for ferry or speedboat check-in.",
  "Choose ferry for easier luggage handling and speedboat for the fastest crossing.",
  "Confirm the Koh Phi Phi arrival pier and hotel access after arrival.",
  "Weather and sea conditions can affect speedboat schedules.",
  "For Ao Nang pickup, check whether the road transfer and boat are one ticket.",
];

const faqs = [
  {
    question: "What is the easiest way from Krabi to Koh Phi Phi?",
    answer:
      "A ferry or a van plus ferry ticket is usually easiest. Speedboat is faster, but it can be more weather-sensitive and stricter with luggage.",
  },
  {
    question: "Can I start from Ao Nang?",
    answer:
      "Some tickets include Ao Nang or Krabi area pickup before the boat. Check the partner ticket for pickup zones and departure pier.",
  },
  {
    question: "Where do boats arrive on Koh Phi Phi?",
    answer:
      "Most services arrive at Tonsai Pier or a listed Phi Phi pier. Check hotel access because onward road transport is limited.",
  },
  {
    question: "Is speedboat always better?",
    answer:
      "No. Speedboat is faster, but ferry is often more comfortable with luggage and can be a better value for many travelers.",
  },
];

export default function KrabiToKohPhiPhiDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/krabi-to-koh-phi-phi"
      mobileTitle="Krabi to Phi Phi"
      mobileSubtitle="Departure pier, sea crossing and arrival pier"
      overviewImage="/assets/routes/krabi-to-koh-phi-phi-overview.png"
      overviewAlt="Krabi to Koh Phi Phi route"
      heroTitle="Krabi to Koh Phi Phi: ferry and speedboat guide"
      heroDescription="Before booking, check your Krabi departure pier, hotel pickup if included, ferry or speedboat timing, luggage rules, sea conditions and Koh Phi Phi arrival pier."
      heroImage="/assets/routes/krabi-to-koh-phi-phi.png"
      heroAlt="Krabi to Koh Phi Phi transfer"
      stepsHeading="Before the boat - step by step"
      stepsIntro="Use these steps to keep the pier, boat check-in and Koh Phi Phi arrival details clear."
      warningMobileTitle="Check sea conditions"
      warningMobileText="Speedboats can save time, but weather and sea conditions affect comfort, luggage rules and schedule reliability."
      warningTitle="Choose boat type around luggage and weather"
      warningParagraphs={[
        "The Krabi-to-Phi Phi route is a sea crossing, so pier access, luggage and weather matter as much as the listed travel time.",
        "Use confirmed booking details and check departure point, check-in time, baggage rules and Koh Phi Phi arrival pier before booking.",
      ]}
      simpleRule="Choose ferry if luggage and comfort matter more; choose speedboat only when the faster crossing fits the sea conditions and baggage rules."
      practicalTitle="Small things that make Phi Phi transfers easier"
      practicalIntro="These notes are specific to travelling from Krabi to Koh Phi Phi by ferry or speedboat."
      faqTitle="Questions about Krabi to Koh Phi Phi"
      readyTitle="Check final Phi Phi transfer prices before you leave Krabi"
      readyText="Compare ferry, speedboat and van plus ferry options from Krabi to Koh Phi Phi."
      stickyLabel="Best value"
      primaryOptionId="ferry"
      finalOptionId="speedboat"
      steps={steps}
      quickFacts={quickFacts}
      tips={tips}
      faqs={faqs}
    />
  );
}
