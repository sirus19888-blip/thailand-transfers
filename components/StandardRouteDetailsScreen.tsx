import { Clock3, Luggage, MapPin } from "lucide-react";
import { IslandRouteDetailsTemplate } from "@/components/IslandRouteDetailsTemplate";
import type { RoutePageData } from "@/data/routePages";

type StandardRouteDetailsScreenProps = {
  route: RoutePageData;
  overviewImage?: string;
  selectedOptionId?: string;
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

function formatOptionNames(route: RoutePageData) {
  const names = route.options.map((option) => option.name);

  if (names.length <= 2) {
    return names.join(" and ");
  }

  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

function isAirportRoute(route: RoutePageData) {
  return `${route.from} ${route.to}`.toLowerCase().includes("airport");
}

function isIslandOrPierRoute(route: RoutePageData) {
  const text = `${route.from} ${route.to} ${route.options
    .map((option) => option.pickup)
    .join(" ")}`.toLowerCase();

  return (
    text.includes("koh ") ||
    text.includes("pier") ||
    text.includes("ferry") ||
    text.includes("boat") ||
    text.includes("island")
  );
}

function isAirportDropOffRoute(route: RoutePageData) {
  return route.to.toLowerCase().includes("airport");
}

function buildSteps(route: RoutePageData) {
  const airportRoute = isAirportRoute(route);
  const islandRoute = isIslandOrPierRoute(route);

  return [
    {
      number: "1",
      title: airportRoute
        ? "Confirm the airport pickup or drop-off point."
        : "Confirm your pickup point before travel.",
      description:
        "Check the partner ticket for the exact meeting point, station, pier or hotel pickup area before you leave.",
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
      title: islandRoute
        ? "Allow time for land and water transfer handovers."
        : `Travel from ${route.from} to ${route.to}.`,
      description:
        "Keep your booking confirmation ready and allow extra time for traffic, weather, operator handovers or local transfer delays.",
      image: "/assets/steps/meet-driver.png",
    },
    {
      number: "4",
      title: isAirportDropOffRoute(route)
        ? "Leave a buffer before flight check-in."
        : "Plan the final local connection.",
      description: isAirportDropOffRoute(route)
        ? "For airport drop-offs, leave extra time for traffic, terminal access and airline check-in rules."
        : "Some tickets finish at a terminal, pier, station or main road stop. Check whether you need a local taxi to your hotel.",
      image: getRouteImage(route),
    },
  ];
}

function buildTips(route: RoutePageData) {
  const mainOption = getPrimaryOption(route);
  const finalOption = getFinalOption(route);
  const optionsLabel = formatOptionNames(route);
  const airportRoute = isAirportRoute(route);
  const islandRoute = isIslandOrPierRoute(route);

  const tips = [
    `Compare ${optionsLabel} for ${route.from} to ${route.to}; coverage can differ by pickup point, luggage rules and final stop.`,
    `Best-value option to check first: ${mainOption.name}. Confirm partner availability before booking.`,
    `More flexible fallback: ${finalOption.name}. It is usually easier when the pickup point, luggage load or timing is sensitive.`,
    `Typical time shown by partners for ${mainOption.name}: ${mainOption.duration}. Traffic and local transfers can change this.`,
    `Pickup note for ${mainOption.name}: ${mainOption.pickup}. Always follow the exact ticket instructions.`,
    "Use partner details for the latest departure time, price, baggage allowance and operator rules.",
  ];

  if (airportRoute) {
    tips.push(
      "For airport routes, check the terminal, meeting point and flight buffer before paying."
    );
  }

  if (islandRoute) {
    tips.push(
      "For island or pier routes, check whether the ticket includes the boat leg and any onward hotel transfer."
    );
  }

  if (isAirportDropOffRoute(route)) {
    tips.push(
      "For airport arrivals, plan enough buffer before check-in because road traffic and pickup delays can compound."
    );
  }

  return tips;
}

function buildWarningParagraphs(route: RoutePageData) {
  const base = [
    `${route.from} to ${route.to} tickets can use different stations, counters, piers, hotel pickup areas or roadside stops depending on the operator.`,
    "Partner details are the best source for current schedule, price, baggage allowance and cancellation rules.",
  ];

  if (isIslandOrPierRoute(route)) {
    base.push(
      "If the route involves a pier, boat or island handover, confirm exactly which parts of the trip are included in the ticket."
    );
  }

  if (isAirportRoute(route)) {
    base.push(
      "For airport transfers, confirm the terminal or meeting point and keep enough time for immigration, baggage claim or check-in."
    );
  }

  return base;
}

function buildSimpleRule(route: RoutePageData) {
  if (isIslandOrPierRoute(route)) {
    return "If the pier, boat leg or final hotel transfer is not clearly included, choose a more flexible option or confirm the partner details before booking.";
  }

  if (isAirportRoute(route)) {
    return "If the terminal, meeting point or flight buffer is unclear, choose a more flexible option or confirm the partner details before booking.";
  }

  return "If the pickup point or final stop is not clear, choose a more flexible option or confirm the operator details before booking.";
}

function buildFaqs(route: RoutePageData) {
  const mainOption = getPrimaryOption(route);
  const finalOption = getFinalOption(route);
  const optionNames = formatOptionNames(route);

  return [
    {
      question: `What is the best option from ${route.from} to ${route.to}?`,
      answer: `${mainOption.name} is often a good first option to compare. ${finalOption.name} can be better if you need more flexibility, luggage space or direct pickup.`,
    },
    {
      question: "Do prices and schedules change?",
      answer:
        "Yes. Treat page times as planning guidance and check the partner ticket before booking.",
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
    {
      question: `Are all ${route.from} to ${route.to} options the same?`,
      answer: `No. ${optionNames} can differ by pickup point, final stop, luggage allowance, included local transfer and operator rules. Compare the partner ticket details before choosing.`,
    },
  ];
}

export function StandardRouteDetailsScreen({
  route,
  overviewImage,
  selectedOptionId,
}: StandardRouteDetailsScreenProps) {
  const primaryOption = getPrimaryOption(route);
  const finalOption = getFinalOption(route);
  const selectedOption =
    route.options.find((option) => option.id === selectedOptionId) ??
    primaryOption;
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
      heroDescription={`Before booking, compare partner options from ${route.from} to ${route.to}. Check pickup point, drop-off point, luggage rules, travel time and partner booking notes.`}
      heroImage={heroImage}
      heroAlt={`${route.from} to ${route.to} transfer`}
      stepsHeading={`${route.from} to ${route.to} details - step by step`}
      stepsIntro={`Use these notes to plan the transfer from ${route.from} to ${route.to} without pickup or drop-off surprises.`}
      warningMobileTitle="Check partner ticket details"
      warningMobileText="Pickup points, baggage rules and final drop-off can vary by operator. Always check the partner ticket before booking."
      warningTitle={`Check ${route.from} to ${route.to} pickup and drop-off before you book`}
      warningParagraphs={buildWarningParagraphs(route)}
      simpleRule={buildSimpleRule(route)}
      practicalTitle={`Small things that make ${route.to} transfers easier`}
      practicalIntro={`These notes are specific to the ${route.from} to ${route.to} route and help compare partner options.`}
      faqTitle={`Questions about ${route.from} to ${route.to}`}
      readyTitle={`Check final ${route.to} transfer prices before you travel`}
      readyText={`Compare ${route.options
        .map((option) => option.name.toLowerCase())
        .join(", ")} options from ${route.from} to ${route.to}.`}
      stickyLabel={primaryOption.name}
      mobileSelectedOptionId={selectedOption.id}
      primaryOptionId={primaryOption.id}
      finalOptionId={finalOption.id}
      steps={buildSteps(route)}
      quickFacts={[
        {
          icon: Clock3,
          title: "Typical travel time",
          text: `${selectedOption.name}: ${selectedOption.duration}. Compare partner options for your date before booking.`,
        },
        {
          icon: MapPin,
          title: "Pickup point",
          text: selectedOption.pickup,
        },
        {
          icon: Luggage,
          title: "Luggage and tickets",
          text: "Check baggage limits, included transfers and cancellation rules on the partner ticket.",
        },
      ]}
      tips={tips}
      faqs={buildFaqs(route)}
    />
  );
}
