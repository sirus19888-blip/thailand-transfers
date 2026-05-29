import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phangan-to-surat-thani-airport");

export const metadata: Metadata = {
  title: "Koh Phangan to Surat Thani Airport Guide | Ferry Tips & FAQ",
  description:
    "Read practical tips for travelling from Koh Phangan to Surat Thani Airport. Check departure pier, ferry timing, mainland transfer, airport arrival buffer and luggage notes.",
  alternates: {
    canonical: "/routes/koh-phangan-to-surat-thani-airport/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Confirm your Koh Phangan departure pier.",
    description:
      "Check the pier, operator and reporting time on your partner ticket. Leave time to reach the pier before boarding closes.",
    image: "/assets/routes/koh-phangan-to-surat-thani-airport.png",
  },
  {
    number: "2",
    title: "Board the ferry to the mainland pier.",
    description:
      "Ferry timing is the fixed part of this route. Weather, queues and busy travel dates can affect the crossing.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "3",
    title: "Connect to the bus, van or taxi transfer.",
    description:
      "After the ferry, follow the operator connection to Surat Thani Airport. Check whether the mainland transfer is included.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "4",
    title: "Arrive at Surat Thani Airport with flight buffer.",
    description:
      "Do not plan this route too close to flight check-in. Leave extra time for ferry and road delays.",
    image: "/assets/steps/baggage-claim.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferry plus bus is usually 4h - 7h. Ferry plus van is usually 4h - 6h 30m. Ferry plus taxi can be 3h 30m - 6h.",
  },
  {
    icon: MapPin,
    title: "Departure pier",
    text: "Pickup is usually at a Koh Phangan pier or operator meeting point. Check the exact pier and reporting time.",
  },
  {
    icon: Luggage,
    title: "Airport buffer",
    text: "Check baggage limits and leave a realistic buffer before your flight from Surat Thani Airport.",
  },
];

const tips = [
  "Do not book the last possible ferry if you have a same-day flight.",
  "Check your departure pier and reporting time before leaving your hotel.",
  "Confirm whether the ferry and mainland transfer are included in one ticket.",
  "Large suitcases and extra bags may need stricter van or ferry luggage rules.",
  "Weather and ferry queues can affect airport arrival time.",
  "For early flights, consider travelling to Surat Thani the day before.",
];

const faqs = [
  {
    question: "How much time should I leave before my flight?",
    answer:
      "Leave a generous buffer. The route depends on ferry timing, mainland transfer and road conditions, so avoid tight same-day flight connections.",
  },
  {
    question: "Where do I start on Koh Phangan?",
    answer:
      "Most tickets start at a listed pier or operator meeting point. Check the partner ticket for the exact pier and reporting time.",
  },
  {
    question: "Is the airport transfer included after the ferry?",
    answer:
      "It depends on the ticket. Combined ferry plus bus or ferry plus van tickets usually include the mainland airport transfer, but always check the partner details.",
  },
  {
    question: "What if the ferry is delayed?",
    answer:
      "Ferry delays can affect the whole route. Choose a transfer with enough buffer before airport check-in, especially in bad weather.",
  },
];

export default function KohPhanganToSuratThaniAirportDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/koh-phangan-to-surat-thani-airport"
      mobileTitle="Phangan to Surat Airport"
      mobileSubtitle="Departure pier, ferry crossing and airport transfer"
      overviewImage="/assets/routes/koh-phangan-to-surat-thani-airport-overview.png"
      overviewAlt="Koh Phangan to Surat Thani Airport route"
      heroTitle="Koh Phangan to Surat Thani Airport: ferry transfer guide"
      heroDescription="Before booking, check the Koh Phangan departure pier, ferry timing, mainland transfer, airport drop-off, luggage rules and how much flight buffer you need."
      heroImage="/assets/routes/koh-phangan-to-surat-thani-airport.png"
      heroAlt="Koh Phangan to Surat Thani Airport transfer"
      stepsHeading="Before your flight - step by step"
      stepsIntro="Use these steps to keep the ferry, mainland transfer and airport arrival timing realistic."
      warningMobileTitle="Leave a flight buffer"
      warningMobileText="This route depends on ferry timing and mainland transfer time. Do not book it too close to airport check-in."
      warningTitle="Leave more time than the timetable suggests"
      warningParagraphs={[
        "The island-to-airport trip includes ferry boarding, ferry crossing, mainland transfer and airport drop-off. A delay in one part can affect the full chain.",
        "Use confirmed booking details and check the pier, ferry operator, luggage rules and scheduled airport arrival time before booking.",
      ]}
      simpleRule="Choose a transfer that reaches Surat Thani Airport well before check-in, not just before the flight departure time."
      practicalTitle="Small things that make airport transfers easier"
      practicalIntro="These notes are specific to travelling from Koh Phangan to Surat Thani Airport by ferry and mainland transfer."
      faqTitle="Questions about Koh Phangan to Surat Thani Airport"
      readyTitle="Check final airport transfer prices before you leave Koh Phangan"
      readyText="Compare ferry plus bus, ferry plus van and ferry plus taxi options from Koh Phangan to Surat Thani Airport."
      stickyLabel="Flight buffer"
      primaryOptionId="ferry-bus"
      finalOptionId="ferry-van"
      steps={steps}
      quickFacts={quickFacts}
      tips={tips}
      faqs={faqs}
    />
  );
}
