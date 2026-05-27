import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-samui-to-surat-thani-airport");

export const metadata: Metadata = {
  title: "Koh Samui to Surat Thani Airport Guide | Ferry Tips & FAQ",
  description:
    "Read practical tips for travelling from Koh Samui to Surat Thani Airport. Check hotel pickup, departure pier, ferry crossing, mainland transfer, airport buffer and luggage notes.",
  alternates: {
    canonical: "/routes/koh-samui-to-surat-thani-airport/details",
  },
};

const steps = [
  {
    number: "1",
    title: "Check pickup or departure pier on Koh Samui.",
    description:
      "Some tickets start at a pier, while others include hotel pickup. Confirm the exact reporting time and pickup area.",
    image: "/assets/routes/koh-samui-to-surat-thani-airport.png",
  },
  {
    number: "2",
    title: "Board the ferry to the mainland.",
    description:
      "Ferry timing controls the rest of the route. Weather, queues and busy travel days can change the total transfer time.",
    image: "/assets/vehicles/ferry.png",
  },
  {
    number: "3",
    title: "Connect to the mainland bus or van.",
    description:
      "Follow the operator connection after the ferry. Check whether the mainland transfer to Surat Thani Airport is included.",
    image: "/assets/steps/meet-driver.png",
  },
  {
    number: "4",
    title: "Reach Surat Thani Airport with time to spare.",
    description:
      "Leave enough time for check-in and security. Avoid tight connections from island ferry routes to flights.",
    image: "/assets/steps/baggage-claim.png",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    title: "Typical travel time",
    text: "Ferry plus bus is usually 3h - 5h. Ferry plus van is usually 3h - 5h 30m. Combined options can take 4h - 6h.",
  },
  {
    icon: MapPin,
    title: "Island pickup",
    text: "Pickup can be a Koh Samui pier, hotel pickup area or operator meeting point depending on the ticket.",
  },
  {
    icon: Luggage,
    title: "Flight buffer",
    text: "Check baggage limits and leave extra time before your Surat Thani Airport flight, especially in bad weather.",
  },
];

const tips = [
  "Check whether hotel pickup is included or whether you must reach the pier yourself.",
  "Do not choose the tightest ferry if you have a same-day flight.",
  "Confirm the Koh Samui departure pier, ferry operator and mainland transfer.",
  "Large suitcases and extra bags may need stricter van or ferry luggage rules.",
  "Weather and ferry queues can affect airport arrival time.",
  "For early flights, consider staying near Surat Thani the night before.",
];

const faqs = [
  {
    question: "What is the easiest way from Koh Samui to Surat Thani Airport?",
    answer:
      "A combined ferry plus bus or ferry plus van ticket is usually easiest because it connects the island ferry and mainland airport transfer.",
  },
  {
    question: "Is hotel pickup on Koh Samui included?",
    answer:
      "Sometimes, but not always. Check the live ticket for hotel pickup areas, departure pier and reporting time.",
  },
  {
    question: "How long does the transfer take?",
    answer:
      "Most Koh Samui to Surat Thani Airport tickets take around 3h - 6h depending on pickup, ferry timing and mainland transfer.",
  },
  {
    question: "Can I do this before a same-day flight?",
    answer:
      "Yes, but leave a realistic buffer. Ferry delays, weather and road transfer time can affect airport arrival.",
  },
];

export default function KohSamuiToSuratThaniAirportDetailsPage() {
  if (!route) {
    notFound();
  }

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref="/routes/koh-samui-to-surat-thani-airport"
      mobileTitle="Samui to Surat Airport"
      mobileSubtitle="Island pickup, ferry crossing and airport transfer"
      overviewImage="/assets/routes/koh-samui-to-surat-thani-airport-overview.png"
      overviewAlt="Koh Samui to Surat Thani Airport route"
      heroTitle="Koh Samui to Surat Thani Airport: ferry transfer guide"
      heroDescription="Before booking, check hotel pickup if included, Koh Samui departure pier, ferry crossing, mainland transfer, airport drop-off, luggage rules and flight buffer."
      heroImage="/assets/routes/koh-samui-to-surat-thani-airport.png"
      heroAlt="Koh Samui to Surat Thani Airport transfer"
      stepsHeading="Before your flight - step by step"
      stepsIntro="Use these steps to keep the island pickup, ferry crossing and airport arrival timing realistic."
      warningMobileTitle="Leave a flight buffer"
      warningMobileText="Koh Samui airport transfers via Surat Thani depend on ferry timing and mainland road transfer. Avoid tight flight connections."
      warningTitle="Do not plan a tight airport connection"
      warningParagraphs={[
        "The Samui-to-airport trip includes island pickup or pier reporting, ferry crossing, mainland transfer and airport drop-off.",
        "Use confirmed booking details and check the departure pier, ferry operator, luggage rules and scheduled airport arrival time before booking.",
      ]}
      simpleRule="Choose a transfer that reaches Surat Thani Airport comfortably before check-in, especially if weather is uncertain."
      practicalTitle="Small things that make Samui airport transfers easier"
      practicalIntro="These notes are specific to travelling from Koh Samui to Surat Thani Airport by ferry and mainland transfer."
      faqTitle="Questions about Koh Samui to Surat Thani Airport"
      readyTitle="Check live Surat Thani Airport transfer prices before you leave Samui"
      readyText="Compare ferry plus bus, ferry plus van and combined transfer options from Koh Samui to Surat Thani Airport."
      stickyLabel="Best value"
      primaryOptionId="ferry-bus"
      finalOptionId="ferry-van"
      steps={steps}
      quickFacts={quickFacts}
      tips={tips}
      faqs={faqs}
    />
  );
}
