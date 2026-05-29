import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("phuket-to-koh-phi-phi");

export const metadata: Metadata = {
  title: "Phuket to Koh Phi Phi Guide | Ferry, Speedboat & Pier Tips",
  description:
    "Read practical tips for travelling from Phuket to Koh Phi Phi. Check departure pier, ferry and speedboat timing, luggage notes, weather warnings and FAQ.",
  alternates: {
    canonical: "/routes/phuket-to-koh-phi-phi/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Check your Phuket departure pier or pickup area.",
    description:
      "Tickets can start at Rassada Pier, another Phuket pier or a hotel pickup area. Confirm the exact meeting point before travel day.",
    image: "/assets/routes/phuket-to-koh-phi-phi.png",
  },
  {
    number: "2",
    title: "Arrive early for ferry or speedboat check-in.",
    description:
      "Island boat operators usually require check-in before departure. Leave time for traffic, ticket checks and luggage handling.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "3",
    title: "Cross the Andaman Sea to Koh Phi Phi.",
    description:
      "Ferries are usually easier with luggage. Speedboats are faster but more sensitive to sea conditions.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "4",
    title: "Arrive at Tonsai Pier or the listed Phi Phi pier.",
    description:
      "Most tickets finish at the pier. Koh Phi Phi has limited road transport, so check your hotel access after arrival.",
    image: "/assets/routes/koh-phi-phi-to-phuket.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferries are usually 1h 30m - 3h. Speedboats are usually 1h - 1h 30m. Hotel transfer plus ferry can take 2h - 4h.",
  },
  {
    icon: MapPin,
    title: "Departure pier",
    text: "Check whether your ticket starts at a Phuket pier or includes hotel pickup before the boat crossing.",
  },
  {
    icon: Luggage,
    title: "Luggage and sea",
    text: "Large suitcases are usually easier on ferries. Speedboat baggage rules can be stricter and weather-sensitive.",
  },
];

const tips = [
  "Check the exact Phuket departure pier before booking transport to the pier.",
  "Arrive early for boat check-in, especially in high season.",
  "Choose ferry for easier luggage handling and speedboat for the fastest crossing.",
  "Confirm the Koh Phi Phi arrival pier and how to reach your hotel after arrival.",
  "Weather and sea conditions can affect speedboat schedules.",
  "If hotel pickup is included, check the pickup area and waiting time carefully.",
];

const faqs = [
  {
    question: "Is ferry or speedboat better from Phuket to Koh Phi Phi?",
    answer:
      "Ferry is usually better for luggage and value. Speedboat is faster, but can be more weather-sensitive and less comfortable with large bags.",
  },
  {
    question: "Which Phuket pier do boats leave from?",
    answer:
      "Many services use Rassada Pier, but some tickets use other piers or include hotel pickup. Always check the partner ticket details.",
  },
  {
    question: "Where do I arrive on Koh Phi Phi?",
    answer:
      "Most services arrive at Tonsai Pier or a listed Phi Phi pier. Check your hotel location because onward transport on the island is limited.",
  },
  {
    question: "Can bad weather affect the route?",
    answer:
      "Yes. Sea conditions can affect both ferry and speedboat schedules, especially speedboats. Check current operator information before booking.",
  },
];

export default function PhuketToKohPhiPhiDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/phuket-to-koh-phi-phi"
      mobileTitle="Phuket to Phi Phi"
      mobileSubtitle="Departure pier, sea crossing and arrival pier"
      overviewImage="/assets/routes/phuket-to-koh-phi-phi-overview.png"
      overviewAlt="Phuket to Koh Phi Phi route"
      heroTitle="Phuket to Koh Phi Phi: ferry and speedboat guide"
      heroDescription="Before booking, check your Phuket departure pier, hotel pickup if included, ferry or speedboat timing, luggage rules, sea conditions and Koh Phi Phi arrival pier."
      heroImage="/assets/routes/phuket-to-koh-phi-phi.png"
      heroAlt="Phuket to Koh Phi Phi transfer"
      stepsHeading="Before the boat - step by step"
      stepsIntro="Use these steps to keep the pier, boat check-in and Koh Phi Phi arrival details clear."
      warningMobileTitle="Check sea conditions"
      warningMobileText="Speedboats are faster, but weather and sea conditions can affect comfort, luggage rules and schedule reliability."
      warningTitle="Choose boat type around luggage and weather"
      warningParagraphs={[
        "The Phuket-to-Phi Phi route is a sea crossing, so the best option depends on luggage, weather and how much time you have.",
        "Use confirmed booking details and check departure pier, check-in time, baggage rules and Koh Phi Phi arrival pier before booking.",
      ]}
      simpleRule="Choose ferry if luggage and comfort matter more; choose speedboat only when the faster crossing fits the sea conditions and baggage rules."
      practicalTitle="Small things that make Phi Phi transfers easier"
      practicalIntro="These notes are specific to travelling from Phuket to Koh Phi Phi by ferry or speedboat."
      faqTitle="Questions about Phuket to Koh Phi Phi"
      readyTitle="Check final Phi Phi transfer prices before you go to the pier"
      readyText="Compare ferry, speedboat and hotel transfer plus ferry options from Phuket to Koh Phi Phi."
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
