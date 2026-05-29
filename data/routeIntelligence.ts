import type { RoutePageData, RouteTransportOption } from "@/data/routePages";

export type GuideStatus = "Full guide" | "Quick guide" | "Partner search only";

const fullGuideSlugs = new Set([
  "bangkok-airport-to-pattaya",
  "pattaya-to-bangkok-airport",
  "hua-hin-to-bangkok",
  "pattaya-to-don-mueang-airport",
  "bangkok-to-hua-hin",
  "don-mueang-airport-to-hua-hin",
  "phuket-airport-to-patong-beach",
  "patong-beach-to-phuket-airport",
  "phuket-airport-to-kata-karon",
  "krabi-airport-to-ao-nang",
  "bangkok-to-chiang-mai",
  "chiang-mai-to-bangkok",
]);

export const affiliateMicroDisclosure =
  "Paid partner link. We may earn a commission at no extra cost to you.";

export function getGuideStatus(slug?: string, partnerOnly = false): GuideStatus {
  if (partnerOnly) return "Partner search only";
  if (slug && fullGuideSlugs.has(slug)) return "Full guide";

  return "Quick guide";
}

export function getStatusDescription(status: GuideStatus) {
  if (status === "Full guide") {
    return "Pickup, risk notes, FAQ, sources and last checked included.";
  }

  if (status === "Quick guide") {
    return "Basic route guidance plus partner booking checks.";
  }

  return "We do not have a full guide yet. This opens a partner search.";
}

export function getOptionLabel(option: RouteTransportOption) {
  const id = option.id.toLowerCase();
  const text = `${option.name} ${option.bestFor}`.toLowerCase();

  if (id.includes("bus") || text.includes("budget") || text.includes("low-cost")) {
    return "Cheapest typical option";
  }

  if (id.includes("taxi") || text.includes("door-to-door")) {
    return "Easiest door-to-door";
  }

  if (id.includes("flight") || id.includes("speedboat")) {
    return "Fastest";
  }

  if (id.includes("ferry") || text.includes("island")) {
    return "Best for daytime arrivals";
  }

  if (id.includes("van")) {
    return "Best with luggage";
  }

  return "Best for most tourists";
}

export function getDecisionLabels(route: RoutePageData) {
  const taxi =
    route.options.find((option) => option.id.includes("taxi")) ??
    route.options.find((option) => option.name.toLowerCase().includes("taxi"));
  const bus =
    route.options.find((option) => option.id.includes("bus")) ??
    route.options.find((option) => option.name.toLowerCase().includes("bus"));
  const fastest =
    route.options.find((option) => option.id.includes("flight")) ??
    route.options.find((option) => option.id.includes("speedboat")) ??
    taxi ??
    route.options[0];
  const mostTourists =
    route.options.find((option) => option.id.includes("ferry-van")) ??
    route.options.find((option) => option.id.includes("van")) ??
    taxi ??
    bus ??
    route.options[0];

  return [
    {
      label: "Best for most tourists",
      value: mostTourists?.name ?? "Compare options",
    },
    {
      label: "Cheapest",
      value: bus?.name ?? "Budget option",
    },
    {
      label: "Fastest",
      value: fastest?.name ?? "Fastest option",
    },
    {
      label: "Best after late arrival",
      value: taxi?.name ?? "Private transfer",
    },
  ];
}

export function getCtaLabel(option?: RouteTransportOption) {
  const id = option?.id.toLowerCase() ?? "";
  const name = option?.name.toLowerCase() ?? "";

  if (id.includes("taxi") || name.includes("taxi")) {
    return "Check taxi availability with partner";
  }

  if (id.includes("bus") || name.includes("bus")) {
    return "Check final bus price on partner site";
  }

  if (
    id.includes("ferry") ||
    id.includes("speedboat") ||
    name.includes("ferry") ||
    name.includes("speedboat")
  ) {
    return "See live schedule and pickup rules";
  }

  return "Continue to 12Go for ticket rules";
}

export function getRiskBadges(route: RoutePageData, option: RouteTransportOption) {
  const id = option.id.toLowerCase();
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();
  const badges: string[] = [];

  if (id.includes("taxi")) {
    badges.push("Door-to-door", "Good for families");
  }

  if (id.includes("bus")) {
    badges.push("Budget only", "Needs local taxi after drop-off", "Good for solo travelers");
  }

  if (id.includes("van")) {
    badges.push("Luggage rules vary", "Shared wait possible", "Avoid with large luggage");
  }

  if (id.includes("ferry") || id.includes("speedboat") || routeText.includes("ferry")) {
    badges.push("Last ferry risk", "Best before 18:00");
  }

  if (routeText.includes("airport") && !id.includes("taxi")) {
    badges.push("Late arrival risk");
  }

  if (routeText.includes("koh") || routeText.includes("phi phi")) {
    badges.push("Weather can affect ferries");
  }

  return Array.from(new Set(badges)).slice(0, 3);
}

export function getPriceGuidance(option: RouteTransportOption) {
  const id = option.id.toLowerCase();

  if (id.includes("taxi")) return "Typical mid-range option, usually per car. Final fare on partner.";
  if (id.includes("bus")) return "Typical budget option, usually per person. Final fare on partner.";
  if (id.includes("van")) return "Typical shared option; luggage rules vary. Final fare on partner.";
  if (id.includes("ferry") || id.includes("speedboat")) {
    return "Final fare depends on operator, pier and included pickup.";
  }

  return "Final price and ticket rules are confirmed by the partner.";
}

export function getRouteDecision(route: RoutePageData) {
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();

  if (routeText.includes("koh") || routeText.includes("ferry")) {
    return "If your flight lands after 14:00, check ferry timing carefully.";
  }

  if (routeText.includes("airport")) {
    return "If you land after 20:00, choose taxi or a flexible private transfer.";
  }

  return "Do not book the last possible departure if missing it would be expensive.";
}

export function getPickupMapUrl(route: RoutePageData, option?: RouteTransportOption) {
  const query = option
    ? `${option.pickup}, ${route.from}, Thailand`
    : `${route.from}, Thailand`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function getDropoffMapUrl(route: RoutePageData) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${route.to}, Thailand`,
  )}`;
}

export function getSourceFreshness(route: RoutePageData) {
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();
  const isIsland = routeText.includes("koh") || routeText.includes("ferry");

  return {
    lastChecked: "May 2026",
    confidence: isIsland ? "Medium" : "High",
    officialSource: isIsland
      ? "airport, ferry or operator public information"
      : "airport, station or operator public information",
    partnerSource: "12Go partner availability",
  };
}
