import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-phuket");

export const metadata: Metadata = {
  title: "Koh Phi Phi to Phuket Guide | Ferry, Speedboat & Pier Tips",
  description:
    "Read practical tips for travelling from Koh Phi Phi to Phuket. Check Tonsai Pier, ferry and speedboat timing, Phuket arrival pier, luggage notes and FAQ.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-phuket/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Confirm your Koh Phi Phi departure pier.",
    description:
      "Most services start at Tonsai Pier or a listed operator pier. Check the reporting time and arrive early.",
    image: "/assets/routes/koh-phi-phi-to-phuket.png",
  },
  {
    number: "2",
    title: "Check in for ferry or speedboat boarding.",
    description:
      "Leave time for ticket checks and luggage handling. Pier areas can get busy around popular departure times.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "3",
    title: "Cross from Koh Phi Phi to Phuket.",
    description:
      "Ferry is usually easier with luggage. Speedboat is faster but more sensitive to sea conditions.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "4",
    title: "Check the Phuket arrival pier and onward transfer.",
    description:
      "Arrival can be at a listed Phuket pier. Check whether you need a separate taxi, van or hotel transfer after arrival.",
    image: "/assets/routes/phuket-to-koh-phi-phi.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferries are usually 1h 30m - 3h. Speedboats are usually 1h - 1h 30m depending on route and sea conditions.",
  },
  {
    icon: MapPin,
    title: "Departure pier",
    text: "Most tickets start at Tonsai Pier or an operator pier on Koh Phi Phi. Check the exact reporting time.",
  },
  {
    icon: Luggage,
    title: "Phuket arrival",
    text: "Check baggage limits and the listed Phuket arrival pier before arranging onward travel.",
  },
];

const tips = [
  "Arrive early at Tonsai Pier or the listed departure pier.",
  "Choose ferry for easier luggage handling and speedboat for the fastest crossing.",
  "Confirm the Phuket arrival pier before booking onward transport.",
  "Weather and sea conditions can affect speedboat schedules.",
  "Large suitcases and extra bags may need stricter speedboat luggage rules.",
  "If you have a flight from Phuket, leave a large buffer after the boat arrival.",
];

const faqs = [
  {
    question: "Where do I leave from on Koh Phi Phi?",
    answer:
      "Most services leave from Tonsai Pier or a listed operator pier. Check the partner ticket for the exact pier and reporting time.",
  },
  {
    question: "Is ferry or speedboat better to Phuket?",
    answer:
      "Ferry is usually better for luggage and value. Speedboat is faster, but can be more weather-sensitive and less comfortable with large bags.",
  },
  {
    question: "Where do I arrive in Phuket?",
    answer:
      "Arrival pier depends on the operator. Check the partner ticket before arranging onward taxi, van or airport transfer.",
  },
  {
    question: "Can I connect to a Phuket flight the same day?",
    answer:
      "Yes, but leave a large buffer. Boat schedules, sea conditions and road time from the pier to the airport can affect timing.",
  },
];

export default function KohPhiPhiToPhuketDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/koh-phi-phi-to-phuket"
      mobileTitle="Phi Phi to Phuket"
      mobileSubtitle="Departure pier, sea crossing and Phuket arrival"
      overviewImage="/assets/routes/koh-phi-phi-to-phuket-overview.png"
      overviewAlt="Koh Phi Phi to Phuket route"
      heroTitle="Koh Phi Phi to Phuket: ferry and speedboat guide"
      heroDescription="Before booking, check the Koh Phi Phi departure pier, ferry or speedboat timing, luggage rules, sea conditions, Phuket arrival pier and onward transfer needs."
      heroImage="/assets/routes/koh-phi-phi-to-phuket.png"
      heroAlt="Koh Phi Phi to Phuket transfer"
      stepsHeading="Before the boat - step by step"
      stepsIntro="Use these steps to keep the Phi Phi pier, sea crossing and Phuket arrival details clear."
      warningMobileTitle="Leave a buffer after arrival"
      warningMobileText="Boat schedules can shift with weather. If you have a Phuket flight or onward transfer, do not plan a tight connection."
      warningTitle="Do not plan tight onward connections"
      warningParagraphs={[
        "The Phi Phi-to-Phuket route depends on boat check-in, sea conditions and the listed Phuket arrival pier.",
        "Use confirmed booking details and check departure pier, baggage rules, arrival pier and onward travel time before booking.",
      ]}
      simpleRule="Leave extra time after the boat arrival if you are connecting to Phuket Airport, a long taxi ride or another booked transfer."
      practicalTitle="Small things that make Phuket transfers easier"
      practicalIntro="These notes are specific to travelling from Koh Phi Phi to Phuket by ferry or speedboat."
      faqTitle="Questions about Koh Phi Phi to Phuket"
      readyTitle="Check final Phuket transfer prices before you leave Phi Phi"
      readyText="Compare ferry and speedboat options from Koh Phi Phi to Phuket."
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
