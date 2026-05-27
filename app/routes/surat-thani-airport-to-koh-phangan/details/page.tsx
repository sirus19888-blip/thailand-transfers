import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("surat-thani-airport-to-koh-phangan");

export const metadata: Metadata = {
  title: "Surat Thani Airport to Koh Phangan Guide | Ferry Tips & FAQ",
  description:
    "Read practical tips for travelling from Surat Thani Airport to Koh Phangan. Check airport pickup, pier transfer, ferry crossing, luggage notes and booking advice.",
  alternates: {
    canonical: "/routes/surat-thani-airport-to-koh-phangan/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Collect your luggage before choosing the tightest ferry.",
    description:
      "Airport processing and baggage claim can take longer than expected. Leave time before the airport-to-pier transfer.",
    image: "/assets/steps/immigration.png",
  },
  {
    number: "2",
    title: "Find the airport operator desk or meeting point.",
    description:
      "Combined tickets can use different counters at Surat Thani Airport. Follow the pickup details shown on your live ticket.",
    image: "/assets/steps/baggage-claim.png",
  },
  {
    number: "3",
    title: "Transfer to the mainland ferry pier.",
    description:
      "Most tickets include a road transfer before the ferry to Koh Phangan. Check the pier, operator and departure time.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "4",
    title: "Confirm the Koh Phangan arrival pier.",
    description:
      "Many tickets finish at the pier. If you need hotel drop-off, check whether an island-side transfer is included.",
    image: "/assets/routes/surat-thani-airport-to-koh-phangan.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Bus plus ferry is usually 4h - 7h. Van plus ferry is usually 4h - 6h 30m. Taxi plus ferry can be 3h 30m - 6h.",
  },
  {
    icon: MapPin,
    title: "Airport pickup",
    text: "Pickup is usually at Surat Thani Airport or an operator airport meeting point. Check the exact desk and departure time.",
  },
  {
    icon: Luggage,
    title: "Pier and luggage",
    text: "Check baggage limits and whether the ticket includes airport transfer, ferry crossing and any Koh Phangan drop-off.",
  },
];

const tips = [
  "Allow extra time after landing before choosing a ferry connection.",
  "Check whether the ticket ends at the Koh Phangan pier or includes hotel transfer.",
  "Confirm the listed pier, ferry operator and ferry departure before booking.",
  "Large suitcases and extra bags may need stricter van or ferry luggage rules.",
  "Late arrivals can have fewer same-day ferry options to Koh Phangan.",
  "Weather and ferry queues can affect the total airport-to-island travel time.",
];

const faqs = [
  {
    question: "What is the easiest way from Surat Thani Airport to Koh Phangan?",
    answer:
      "A combined bus plus ferry or van plus ferry ticket is usually easiest because it connects the airport, mainland pier and ferry in one booking.",
  },
  {
    question: "Is hotel drop-off on Koh Phangan included?",
    answer:
      "Often the ticket ends at the Koh Phangan pier. Check the live ticket details if you need hotel drop-off or an island-side transfer.",
  },
  {
    question: "How long does the transfer take?",
    answer:
      "Most airport-to-Koh Phangan tickets take around 4h - 7h depending on airport processing, pier transfer, ferry timing and operator route.",
  },
  {
    question: "What if my flight is delayed?",
    answer:
      "Avoid tight ferry connections. If your flight arrives late, compare live departures and choose a ticket with realistic airport processing time.",
  },
];

export default function SuratThaniAirportToKohPhanganDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/surat-thani-airport-to-koh-phangan"
      mobileTitle="Surat Thani to Phangan"
      mobileSubtitle="Airport pickup, pier transfer and ferry crossing"
      overviewImage="/assets/routes/surat-thani-airport-to-koh-phangan-overview.png"
      overviewAlt="Surat Thani Airport to Koh Phangan route"
      heroTitle="Surat Thani Airport to Koh Phangan: ferry transfer guide"
      heroDescription="Before booking, check the airport pickup point, mainland pier transfer, ferry crossing, Koh Phangan arrival pier, luggage rules and whether island-side drop-off is included."
      heroImage="/assets/routes/surat-thani-airport-to-koh-phangan.png"
      heroAlt="Surat Thani Airport to Koh Phangan transfer"
      stepsHeading="After you land - step by step"
      stepsIntro="Use these steps to avoid ferry confusion and check whether your ticket ends at the pier or continues on Koh Phangan."
      warningMobileTitle="Do not rush the ferry connection"
      warningMobileText="Airport delays, baggage claim, road transfer and ferry timing all affect this route. Choose a realistic departure after landing."
      warningTitle="Do not rush the ferry connection"
      warningParagraphs={[
        "The airport-to-Phangan trip includes several pieces: airport pickup, road transfer, ferry crossing and sometimes island-side drop-off.",
        "Use confirmed booking details and check the pier, ferry operator, luggage rules and whether Koh Phangan hotel transfer is part of the ticket.",
      ]}
      simpleRule="Choose a ticket that gives you enough time for baggage claim and the airport-to-pier transfer before the ferry."
      practicalTitle="Small things that make Koh Phangan transfers easier"
      practicalIntro="These notes are specific to the airport-to-island route from Surat Thani Airport to Koh Phangan."
      faqTitle="Questions about Surat Thani Airport to Koh Phangan"
      readyTitle="Check live Koh Phangan transfer prices after you land"
      readyText="Compare bus plus ferry, van plus ferry and taxi plus ferry options from Surat Thani Airport to Koh Phangan."
      stickyLabel="Best value"
      primaryOptionId="bus-ferry"
      finalOptionId="van-ferry"
      steps={steps}
      quickFacts={quickFacts}
      tips={tips}
      faqs={faqs}
    />
  );
}
