import { routePages, type RoutePageData, type RouteTransportOption } from "@/data/routePages";
import { getRiskBadges, getSourceFreshness } from "@/data/routeIntelligence";

export type PlaceType = "airport" | "city" | "island" | "pier" | "beach";
export type RouteCategory = "arrival" | "return" | "island" | "beach" | "city";
export type PriceUnit = "per_person" | "per_car";
export type TransportMode =
  | "bus"
  | "taxi"
  | "van"
  | "ferry"
  | "speedboat"
  | "train"
  | "flight";

export type RouteRecord = {
  slug: string;
  from_name: string;
  from_type: PlaceType;
  to_name: string;
  to_type: PlaceType;
  min_duration: string;
  max_duration: string;
  route_category: RouteCategory;
  last_checked_at: string;
  confidence_level: "High" | "Medium" | "Low";
  official_sources: string[];
  partner_sources: string[];
};

export type TransferOptionRecord = {
  route_id: string;
  mode: TransportMode;
  typical_price_min: number | null;
  typical_price_max: number | null;
  price_unit: PriceUnit;
  min_duration: string;
  max_duration: string;
  pickup_point: string;
  dropoff_point: string;
  luggage_rules: string;
  operating_hours: string;
  best_for: string[];
  avoid_if: string[];
  risk_badges: string[];
  affiliate_url: string;
  affiliate_partner: "12Go";
  last_checked_at: string;
};

export type RecommendationRule = {
  route_id: string;
  condition: string;
  recommended_option: string;
  reason: string;
};

function getPlaceType(name: string): PlaceType {
  const lower = name.toLowerCase();

  if (lower.includes("airport")) return "airport";
  if (lower.includes("koh") || lower.includes("phi phi")) return "island";
  if (lower.includes("pier")) return "pier";
  if (
    lower.includes("beach") ||
    lower.includes("pattaya") ||
    lower.includes("hua hin") ||
    lower.includes("ao nang") ||
    lower.includes("patong") ||
    lower.includes("kata") ||
    lower.includes("karon")
  ) {
    return "beach";
  }

  return "city";
}

function getRouteCategory(route: RoutePageData): RouteCategory {
  const fromType = getPlaceType(route.from);
  const toType = getPlaceType(route.to);

  if (fromType === "airport") return "arrival";
  if (fromType === "island" || toType === "island") return "island";
  if (toType === "airport") return "return";
  if (fromType === "beach" || toType === "beach") return "beach";

  return "city";
}

function splitDuration(duration: string) {
  const parts = duration.split(/[–-]/).map((part) => part.trim());

  return {
    min: parts[0] ?? duration,
    max: parts[1] ?? parts[0] ?? duration,
  };
}

function getMode(option: RouteTransportOption): TransportMode {
  const text = `${option.id} ${option.name}`.toLowerCase();

  if (text.includes("speedboat")) return "speedboat";
  if (text.includes("ferry")) return "ferry";
  if (text.includes("train")) return "train";
  if (text.includes("flight")) return "flight";
  if (text.includes("taxi")) return "taxi";
  if (text.includes("van")) return "van";

  return "bus";
}

function getTypicalPrice(mode: TransportMode) {
  if (mode === "taxi") return { min: 1200, max: 4500, unit: "per_car" as const };
  if (mode === "bus") return { min: 120, max: 450, unit: "per_person" as const };
  if (mode === "van") return { min: 250, max: 900, unit: "per_person" as const };
  if (mode === "train") return { min: 100, max: 1500, unit: "per_person" as const };
  if (mode === "flight") return { min: 900, max: 4500, unit: "per_person" as const };
  if (mode === "speedboat") return { min: 600, max: 1800, unit: "per_person" as const };

  return { min: 250, max: 1200, unit: "per_person" as const };
}

function getOperatingHours(route: RoutePageData, option: RouteTransportOption) {
  const mode = getMode(option);
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();

  if (mode === "taxi") return "On demand / confirm partner availability";
  if (routeText.includes("ferry") || routeText.includes("koh")) {
    return "Daytime ferry window; check last boat carefully";
  }

  return "Fixed schedule; check partner ticket before paying";
}

function getAvoidIf(route: RoutePageData, option: RouteTransportOption) {
  const mode = getMode(option);
  const avoids: string[] = [];
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();

  if (mode !== "taxi" && routeText.includes("airport")) {
    avoids.push("flight lands late", "large luggage without checking rules");
  }

  if (routeText.includes("ferry") || routeText.includes("koh")) {
    avoids.push("arrival after afternoon ferry window", "tight flight connection");
  }

  if (mode === "van") avoids.push("large luggage or stroller without vehicle check");

  return avoids;
}

function buildRouteRecord(route: RoutePageData): RouteRecord {
  const freshness = getSourceFreshness(route);
  const durations = route.options.map((option) => splitDuration(option.duration));

  return {
    slug: route.slug,
    from_name: route.from,
    from_type: getPlaceType(route.from),
    to_name: route.to,
    to_type: getPlaceType(route.to),
    min_duration: durations[0]?.min ?? "Check schedule",
    max_duration: durations[durations.length - 1]?.max ?? "Check schedule",
    route_category: getRouteCategory(route),
    last_checked_at: freshness.lastChecked,
    confidence_level: freshness.confidence as RouteRecord["confidence_level"],
    official_sources: [freshness.officialSource],
    partner_sources: [freshness.partnerSource],
  };
}

function buildTransferOption(route: RoutePageData, option: RouteTransportOption): TransferOptionRecord {
  const mode = getMode(option);
  const price = getTypicalPrice(mode);
  const duration = splitDuration(option.duration);

  return {
    route_id: route.slug,
    mode,
    typical_price_min: price.min,
    typical_price_max: price.max,
    price_unit: price.unit,
    min_duration: duration.min,
    max_duration: duration.max,
    pickup_point: option.pickup,
    dropoff_point: route.to,
    luggage_rules:
      mode === "taxi" ? "Choose vehicle size for family luggage" : "1 large + 1 small typical; check operator rules",
    operating_hours: getOperatingHours(route, option),
    best_for: [option.bestFor],
    avoid_if: getAvoidIf(route, option),
    risk_badges: getRiskBadges(route, option),
    affiliate_url: option.affiliateUrl,
    affiliate_partner: "12Go",
    last_checked_at: getSourceFreshness(route).lastChecked,
  };
}

function buildRecommendationRules(route: RoutePageData): RecommendationRule[] {
  const taxi = route.options.find((option) => getMode(option) === "taxi");
  const bus = route.options.find((option) => getMode(option) === "bus");
  const ferry = route.options.find((option) => getMode(option) === "ferry");
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();
  const rules: RecommendationRule[] = [];

  if (taxi) {
    rules.push({
      route_id: route.slug,
      condition: "2+ passengers, late arrival, family luggage or tight connection",
      recommended_option: taxi.id,
      reason: "Taxi/private transfer reduces pickup uncertainty and luggage friction.",
    });
  }

  if (bus) {
    rules.push({
      route_id: route.slug,
      condition: "1 traveler, daytime arrival, small budget",
      recommended_option: bus.id,
      reason: "Bus is usually the cheapest typical option when schedule and luggage rules fit.",
    });
  }

  if (ferry || routeText.includes("koh")) {
    rules.push({
      route_id: route.slug,
      condition: "island route or flight lands after 14:00",
      recommended_option: ferry?.id ?? route.options[0]?.id ?? "check-schedule",
      reason: "Ferry windows and weather can make late same-day transfers risky.",
    });
  }

  return rules;
}

export const routeRecords = routePages.map(buildRouteRecord);

export const transferOptionRecords = routePages.flatMap((route) =>
  route.options.map((option) => buildTransferOption(route, option)),
);

export const recommendationRules = routePages.flatMap(buildRecommendationRules);

export function getRouteRecordBySlug(slug: string) {
  return routeRecords.find((route) => route.slug === slug);
}

export function getTransferOptionsForRoute(slug: string) {
  return transferOptionRecords.filter((option) => option.route_id === slug);
}

export function getRecommendationRulesForRoute(slug: string) {
  return recommendationRules.filter((rule) => rule.route_id === slug);
}
