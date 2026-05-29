import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-krabi");

export const metadata: Metadata = {
  title: "Koh Phi Phi to Krabi Guide | Ferry, Speedboat & Pier Tips",
  description:
    "Read practical tips for travelling from Koh Phi Phi to Krabi. Check Tonsai Pier, ferry and speedboat timing, Krabi arrival pier, onward transfer and luggage notes.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-krabi/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Confirm your Koh Phi Phi departure pier.",
    description:
      "Most services start at Tonsai Pier or a listed operator pier. Check the reporting time and arrive early.",
    image: "/assets/routes/koh-phi-phi-to-krabi.png",
  },
  {
    number: "2",
    title: "Check in for ferry or speedboat boarding.",
    description:
      "Leave time for ticket checks and luggage handling. Pier areas can get crowded around popular departure times.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "3",
    title: "Cross from Koh Phi Phi to the Krabi coast.",
    description:
      "Ferry is usually easier with luggage. Speedboat is faster but more sensitive to weather and sea conditions.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "4",
    title: "Check Krabi arrival and onward transfer.",
    description:
      "Some tickets finish at the pier, while others include van transfer to Krabi areas or the airport.",
    image: "/assets/routes/krabi-to-koh-phi-phi.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferries are usually 1h 30m - 3h. Speedboats can be 45m - 1h 30m. Ferry plus van can take 2h - 4h.",
  },
  {
    icon: MapPin,
    title: "Departure pier",
    text: "Most tickets start at Tonsai Pier or an operator pier on Koh Phi Phi. Check the exact reporting time.",
  },
  {
    icon: Luggage,
    title: "Krabi arrival",
    text: "Check baggage limits and whether onward transfer to Krabi town, Ao Nang or the airport is included.",
  },
];

const tips = [
  "Arrive early at Tonsai Pier or the listed departure pier.",
  "Choose ferry for easier luggage handling and speedboat for the fastest crossing.",
  "Confirm the Krabi arrival pier and any onward drop-off area.",
  "Weather and sea conditions can affect speedboat schedules.",
  "Large suitcases and extra bags may need stricter speedboat luggage rules.",
  "If you need Krabi Airport, check whether ferry plus van is included.",
];

const faqs = [
  {
    question: "Where do I leave from on Koh Phi Phi?",
    answer:
      "Most services leave from Tonsai Pier or a listed operator pier. Check the partner ticket for the exact pier and reporting time.",
  },
  {
    question: "Is ferry or speedboat better to Krabi?",
    answer:
      "Ferry is usually better for luggage and value. Speedboat is faster, but can be more weather-sensitive and less comfortable with large bags.",
  },
  {
    question: "Can I book onward transfer in Krabi?",
    answer:
      "Some ferry plus van tickets include onward transfer to Krabi areas or the airport. Check the partner ticket details before booking.",
  },
  {
    question: "Can bad weather affect the trip?",
    answer:
      "Yes. Sea conditions can affect both ferry and speedboat schedules, especially speedboats. Check current operator information before booking.",
  },
];

export default function KohPhiPhiToKrabiDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/koh-phi-phi-to-krabi"
      mobileTitle="Phi Phi to Krabi"
      mobileSubtitle="Departure pier, sea crossing and Krabi arrival"
      overviewImage="/assets/routes/koh-phi-phi-to-krabi-overview.png"
      overviewAlt="Koh Phi Phi to Krabi route"
      heroTitle="Koh Phi Phi to Krabi: ferry and speedboat guide"
      heroDescription="Before booking, check the Koh Phi Phi departure pier, ferry or speedboat timing, luggage rules, sea conditions, Krabi arrival pier and any onward transfer."
      heroImage="/assets/routes/koh-phi-phi-to-krabi.png"
      heroAlt="Koh Phi Phi to Krabi transfer"
      stepsHeading="Before the boat - step by step"
      stepsIntro="Use these steps to keep the Phi Phi pier, sea crossing and Krabi arrival details clear."
      warningMobileTitle="Check onward transfer"
      warningMobileText="Some tickets end at the Krabi pier, while others continue by van. Check the drop-off before booking."
      warningTitle="Check where the Krabi side of the ticket ends"
      warningParagraphs={[
        "The Phi Phi-to-Krabi route can be only a boat ticket or a combined ferry plus van connection.",
        "Use confirmed booking details and check departure pier, baggage rules, arrival pier and any onward Krabi drop-off before booking.",
      ]}
      simpleRule="If you need Ao Nang, Krabi town or Krabi Airport, choose a ticket that clearly includes the onward transfer."
      practicalTitle="Small things that make Krabi transfers easier"
      practicalIntro="These notes are specific to travelling from Koh Phi Phi to Krabi by ferry or speedboat."
      faqTitle="Questions about Koh Phi Phi to Krabi"
      readyTitle="Check final Krabi transfer prices before you leave Phi Phi"
      readyText="Compare ferry, speedboat and ferry plus van options from Koh Phi Phi to Krabi."
      stickyLabel="Best value"
      primaryOptionId="ferry"
      finalOptionId="ferry-van"
      steps={steps}
      quickFacts={quickFacts}
      tips={tips}
      faqs={faqs}
    />
  );
}
