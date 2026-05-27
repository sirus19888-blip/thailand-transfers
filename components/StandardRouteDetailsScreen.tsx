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
  return overviewImage ?? `/assets/routes/${route.slug}-overview.svg`;
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

function RouteOverviewMap({ route }: { route: RoutePageData }) {
  return (
    <svg
      viewBox="0 0 1600 1000"
      role="img"
      aria-label={`${route.from} to ${route.to} route overview map`}
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={`${route.slug}-sea`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#bdeefa" />
          <stop offset="1" stopColor="#43c6df" />
        </linearGradient>
        <filter id={`${route.slug}-shadow`}>
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            floodColor="#0f2f2c"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      <rect width="1600" height="1000" fill="#f7f1e7" />
      <path
        d="M0 760 C230 690 300 790 520 715 C720 650 860 720 1060 640 C1240 568 1390 560 1600 610 L1600 1000 L0 1000 Z"
        fill={`url(#${route.slug}-sea)`}
      />
      <path
        d="M-40 780 C210 705 315 805 520 735 C725 665 870 735 1075 660 C1255 595 1405 582 1640 635"
        fill="none"
        stroke="#ffe7ad"
        strokeWidth="34"
        opacity="0.95"
      />
      <g opacity="0.5" stroke="#fff" strokeWidth="8" fill="none">
        <path d="M0 180 L1600 80" />
        <path d="M0 360 L1600 260" />
        <path d="M0 540 L1600 430" />
        <path d="M180 0 L120 760" />
        <path d="M430 0 L360 740" />
        <path d="M760 0 L690 700" />
        <path d="M1110 0 L1010 690" />
        <path d="M1370 0 L1290 700" />
      </g>
      <g opacity="0.55" fill="#91c983">
        <circle cx="260" cy="215" r="18" />
        <circle cx="515" cy="315" r="22" />
        <circle cx="850" cy="210" r="18" />
        <circle cx="1180" cy="350" r="24" />
        <circle cx="1370" cy="480" r="18" />
        <circle cx="620" cy="560" r="20" />
      </g>
      <path
        d="M315 645 C455 555 640 508 820 475 C980 445 1110 395 1270 285"
        fill="none"
        stroke="#064e45"
        strokeWidth="22"
        strokeLinecap="round"
        filter={`url(#${route.slug}-shadow)`}
      />
      <circle cx="315" cy="645" r="31" fill="#fff" stroke="#064e45" strokeWidth="13" />
      <circle cx="1270" cy="285" r="31" fill="#fff" stroke="#064e45" strokeWidth="13" />
      <g filter={`url(#${route.slug}-shadow)`}>
        <rect x="95" y="510" width="430" height="128" rx="26" fill="#fff" />
        <text x="140" y="565" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="700" fill="#064e45">
          {route.from}
        </text>
        <text x="140" y="612" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#315c58">
          Pickup area
        </text>
      </g>
      <g filter={`url(#${route.slug}-shadow)`}>
        <rect x="1035" y="155" width="455" height="128" rx="26" fill="#fff" />
        <text x="1080" y="210" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="700" fill="#064e45">
          {route.to}
        </text>
        <text x="1080" y="257" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#315c58">
          Drop-off area
        </text>
      </g>
      <g fill="#d5ab47">
        <path d="M250 410 l35 80 h-70z" />
        <rect x="238" y="490" width="24" height="72" />
        <path d="M1240 475 l35 80 h-70z" />
        <rect x="1228" y="555" width="24" height="72" />
      </g>
    </svg>
  );
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
      overviewContent={overviewImage ? undefined : <RouteOverviewMap route={route} />}
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
