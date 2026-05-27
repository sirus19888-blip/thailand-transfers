import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import type { RoutePageData } from "@/data/routePages";

type StandardRouteDetailsScreenProps = {
  route: RoutePageData;
  overviewImage?: string;
};

function getRouteImage(route: RoutePageData) {
  return `/assets/routes/${route.slug}.png`;
}

function getOverviewImage(route: RoutePageData, overviewImage?: string) {
  return overviewImage ?? `/assets/routes/${route.slug}-overview.png`;
}

function getPrimaryOption(route: RoutePageData) {
  return route.options[0];
}

function getFinalOption(route: RoutePageData) {
  return (
    route.options.find((option) => option.id.includes("taxi")) ??
    route.options[0]
  );
}

function isAirportRoute(route: RoutePageData) {
  return `${route.from} ${route.to}`.toLowerCase().includes("airport");
}

function buildSteps(route: RoutePageData) {
  const airportRoute = isAirportRoute(route);

  return [
    {
      number: "1",
      title: airportRoute
        ? "Confirm the airport pickup or drop-off point."
        : "Confirm your pickup point before travel.",
      description:
        "Check the live ticket for the exact meeting point, station, pier or hotel pickup area before you leave.",
      image: "/assets/steps/immigration.png",
    },
    {
      number: "2",
      title: "Check schedule, luggage and operator notes.",
      description:
        "Departure times, baggage rules and included transfers can vary by operator, date and vehicle type.",
      image: "/assets/steps/baggage-claim.png",
    },
    {
      number: "3",
      title: `Travel from ${route.from} to ${route.to}.`,
      description:
        "Keep your booking confirmation ready and allow extra time for traffic, weather or local transfer delays.",
      image: "/assets/steps/meet-driver.png",
    },
    {
      number: "4",
      title: "Plan the final local connection.",
      description:
        "Some tickets finish at a terminal, pier, station or main road stop. Check whether you need a local taxi to your hotel.",
      image: getRouteImage(route),
    },
  ];
}

function buildTips(route: RoutePageData) {
  const mainOption = getPrimaryOption(route);

  return [
    `Best-value option: ${mainOption.name}. Check live availability before booking.`,
    `Typical time shown by partners: ${mainOption.duration}. Traffic and local transfers can change this.`,
    `Pickup note: ${mainOption.pickup}. Always follow the exact ticket instructions.`,
    "Private taxi is usually easier with large luggage, children or a tight flight connection.",
    "Shared vans and buses can be cheaper, but pickup points and baggage rules vary.",
    "Use live partner details for the latest departure time, price and operator rules.",
  ];
}

function buildFaqs(route: RoutePageData) {
  const mainOption = getPrimaryOption(route);
  const finalOption = getFinalOption(route);

  return [
    {
      question: `What is the best option from ${route.from} to ${route.to}?`,
      answer: `${mainOption.name} is often a good first option to compare. ${finalOption.name} can be better if you need more flexibility, luggage space or direct pickup.`,
    },
    {
      question: "Do prices and schedules change?",
      answer:
        "Yes. Treat page times as planning guidance and check the live partner ticket before booking.",
    },
    {
      question: "Should I book before travel day?",
      answer:
        "Booking ahead is useful in high season, around holidays and whenever you need a fixed pickup time.",
    },
    {
      question: "What should I check before paying?",
      answer:
        "Check pickup point, drop-off point, baggage allowance, cancellation rules and whether local transfers are included.",
    },
  ];
}

export function StandardRouteDetailsScreen({
  route,
  overviewImage,
}: StandardRouteDetailsScreenProps) {
  const primaryOption = getPrimaryOption(route);
  const finalOption = getFinalOption(route);
  const overview = getOverviewImage(route, overviewImage);
  const heroImage = getRouteImage(route);
  const tips = buildTips(route);

  return (
    <IslandRouteDetailsTemplate
      route={route}
      backHref={`/routes/${route.slug}`}
      mobileTitle={`${route.from} to ${route.to}`}
      mobileSubtitle="Pickup, timing and booking details"
      overviewImage={overview}
      overviewAlt={`${route.from} to ${route.to} route overview map`}
      heroTitle={`${route.from} to ${route.to}: transfer guide`}
      heroDescription={`Before booking, compare live options from ${route.from} to ${route.to}. Check pickup point, drop-off point, luggage rules, travel time and partner booking notes.`}
      heroImage={heroImage}
      heroAlt={`${route.from} to ${route.to} transfer`}
      stepsHeading="Route details - step by step"
      stepsIntro={`Use these notes to plan the transfer from ${route.from} to ${route.to} without pickup or drop-off surprises.`}
      warningMobileTitle="Check live ticket details"
      warningMobileText="Pickup points, baggage rules and final drop-off can vary by operator. Always check the live ticket before booking."
      warningTitle="Check pickup and drop-off before you book"
      warningParagraphs={[
        "Routes in Thailand can use different stations, counters, piers, hotel pickup areas or roadside stops depending on the operator.",
        "Live partner details are the best source for current schedule, price, baggage allowance and cancellation rules.",
      ]}
      simpleRule="If the pickup point or final stop is not clear, choose a more flexible option or confirm the operator details before booking."
      practicalTitle={`Small things that make ${route.to} transfers easier`}
      practicalIntro={`These notes are specific to the ${route.from} to ${route.to} route and help compare live partner options.`}
      faqTitle={`Questions about ${route.from} to ${route.to}`}
      readyTitle={`Check live ${route.to} transfer prices before you travel`}
      readyText={`Compare ${route.options
        .map((option) => option.name.toLowerCase())
        .join(", ")} options from ${route.from} to ${route.to}.`}
      stickyLabel={primaryOption.name}
      primaryOptionId={primaryOption.id}
      finalOptionId={finalOption.id}
      steps={buildSteps(route)}
      quickFacts={[
        {
          icon: Clock3,
          title: "Typical travel time",
          text: `${primaryOption.name}: ${primaryOption.duration}. Compare all live options for your date before booking.`,
        },
        {
          icon: MapPin,
          title: "Pickup point",
          text: primaryOption.pickup,
        },
        {
          icon: Luggage,
          title: "Luggage and tickets",
          text: "Check baggage limits, included transfers and cancellation rules on the live ticket.",
        },
      ]}
      tips={tips}
      faqs={buildFaqs(route)}
    />
  );
}
