import type { RoutePageData, RouteTransportOption } from "@/data/routePages";

export type GuideStatus = "Full guide" | "Quick guide" | "Partner search only";

export type QuickGuideNote = {
  title: string;
  body: string;
};

export type RouteSourceNote = {
  label: string;
  sourceType: "operator" | "public" | "partner";
};

export type RouteSourceFreshness = {
  lastChecked: string;
  confidence: "High" | "Medium";
  officialSource: string;
  partnerSource: string;
  sourceNotes: RouteSourceNote[];
};

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

export type ArrivalTimeValue = "now" | "morning" | "afternoon" | "late";

const arrivalTimeLabels: Record<ArrivalTimeValue, string> = {
  now: "Arriving now",
  morning: "Before 14:00",
  afternoon: "14:00-20:00",
  late: "After 20:00",
};

type TransportProfile = {
  isTaxi: boolean;
  isBus: boolean;
  isVan: boolean;
  isFerry: boolean;
  isSpeedboat: boolean;
  isFlight: boolean;
  isTrain: boolean;
};

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

export function normalizeArrivalTime(
  value?: string,
): ArrivalTimeValue | undefined {
  if (!value) return undefined;

  if (
    value === "now" ||
    value === "morning" ||
    value === "afternoon" ||
    value === "late"
  ) {
    return value;
  }

  return undefined;
}

export function getArrivalTimeLabel(value?: string) {
  const arrivalTime = normalizeArrivalTime(value);

  return arrivalTime ? arrivalTimeLabels[arrivalTime] : undefined;
}

export function getPassengerCount(passengers?: string) {
  const parsed = Number.parseInt(passengers ?? "2", 10);

  if (Number.isNaN(parsed)) return 2;

  return Math.min(Math.max(parsed, 1), 5);
}

export function getPassengerLabel(passengers?: string) {
  const count = getPassengerCount(passengers);

  if (count === 1) return "1 Adult";
  if (count >= 5) return "5+ Adults";

  return `${count} Adults`;
}

function getTransportProfile(option: RouteTransportOption): TransportProfile {
  const text = `${option.id} ${option.name} ${option.bestFor}`.toLowerCase();

  return {
    isTaxi: text.includes("taxi") || text.includes("private"),
    isBus: text.includes("bus") || text.includes("coach"),
    isVan: text.includes("van"),
    isFerry: text.includes("ferry"),
    isSpeedboat: text.includes("speedboat"),
    isFlight: text.includes("flight"),
    isTrain: text.includes("train"),
  };
}

function getRouteText(route: RoutePageData) {
  return `${route.from} ${route.to} ${route.intro}`.toLowerCase();
}

function formatList(items: string[]) {
  const cleanItems = items.filter(Boolean);

  if (cleanItems.length <= 1) return cleanItems[0] ?? "";
  if (cleanItems.length === 2) return cleanItems.join(" and ");

  return `${cleanItems.slice(0, -1).join(", ")} and ${cleanItems.at(-1)}`;
}

function cleanRouteIntro(intro: string) {
  return intro
    .replace(
      /\s*Thailand Transfer Guide is an independent travel comparison website\.\s*/g,
      " ",
    )
    .replace(
      /\s*Booking and support are handled by travel partners and operators\.\s*/g,
      " ",
    )
    .replace(/\s+/g, " ")
    .trim();
}

function getIntroSummary(route: RoutePageData) {
  const cleanIntro = cleanRouteIntro(route.intro);
  const sentences = cleanIntro.match(/[^.!?]+[.!?]/g);

  if (!sentences?.length) return cleanIntro;

  return sentences.slice(0, 2).join(" ").trim();
}

function getOptionDurationSummary(route: RoutePageData) {
  return route.options
    .map((option) => `${option.name}: ${option.duration}`)
    .join("; ");
}

function getOptionPickupSummary(route: RoutePageData) {
  return route.options
    .map((option) => `${option.name}: ${option.pickup}`)
    .join("; ");
}

function isAirportRoute(route: RoutePageData) {
  return getRouteText(route).includes("airport");
}

function isIslandRoute(route: RoutePageData) {
  const text = getRouteText(route);

  return (
    text.includes("koh") ||
    text.includes("phi phi") ||
    text.includes("samui") ||
    text.includes("phangan") ||
    text.includes("ferry")
  );
}

function hasTaxiOption(route: RoutePageData) {
  return route.options.some((option) => getTransportProfile(option).isTaxi);
}

function hasScheduledSeatOption(route: RoutePageData) {
  return route.options.some((option) => {
    const profile = getTransportProfile(option);

    return (
      profile.isBus ||
      profile.isVan ||
      profile.isFerry ||
      profile.isSpeedboat ||
      profile.isTrain
    );
  });
}

export function getQuickGuideNotes(route: RoutePageData): QuickGuideNote[] {
  const optionNames = formatList(route.options.map((option) => option.name));
  const routeIsAirport = isAirportRoute(route);
  const routeIsIsland = isIslandRoute(route);
  const airportDirection = route.to.toLowerCase().includes("airport")
    ? "For airport drop-off, leave a buffer before your flight."
    : "For airport pickup, leave a buffer for immigration, baggage and terminal walking.";
  const connectionCheck = routeIsIsland
    ? "For island or ferry routes, confirm the pier, boat leg, last usable departure and onward transfer before payment."
    : routeIsAirport
      ? airportDirection
      : "For city or beach transfers, confirm the exact meeting point and final drop-off area before payment.";

  return [
    {
      title: "Route shape",
      body: `${getIntroSummary(route)} Current guide options are ${optionNames}.`,
    },
    {
      title: "Pickup reality",
      body: `Pickup wording differs by option: ${getOptionPickupSummary(route)}. Check the partner ticket for the exact meeting point and whether hotel pickup or hotel drop-off is included.`,
    },
    {
      title: "Timing check",
      body: `Planning durations in this guide: ${getOptionDurationSummary(route)}. ${connectionCheck} Final schedule, luggage rules and price are confirmed on the partner page.`,
    },
  ];
}

function getPersonalizedOptionScore(
  route: RoutePageData,
  option: RouteTransportOption,
  index: number,
  arrivalTime?: string,
  passengers?: string,
) {
  const arrival = normalizeArrivalTime(arrivalTime);
  const passengerCount = passengers ? getPassengerCount(passengers) : undefined;
  const profile = getTransportProfile(option);
  let score = route.options.length - index;

  if (arrival === "late") {
    if (profile.isTaxi) score += 70;
    if (profile.isVan) score += 14;
    if (profile.isBus) score -= 24;
    if (profile.isFerry || profile.isSpeedboat) score -= isIslandRoute(route) ? 8 : 20;
    if (profile.isFlight) score -= 8;
  }

  if (arrival === "now") {
    if (profile.isTaxi) score += 42;
    if (profile.isVan) score += 16;
    if (profile.isFerry || profile.isSpeedboat) score += isIslandRoute(route) ? 10 : 0;
    if (profile.isBus) score -= isAirportRoute(route) ? 6 : 0;
  }

  if (arrival === "morning") {
    if (profile.isBus) score += 28;
    if (profile.isFerry || profile.isSpeedboat) score += 26;
    if (profile.isVan) score += 20;
    if (profile.isTrain) score += 10;
    if (profile.isTaxi) score -= 4;
  }

  if (arrival === "afternoon") {
    if (profile.isTaxi && isAirportRoute(route)) score += 28;
    if (profile.isVan) score += 18;
    if (profile.isFerry || profile.isSpeedboat) score += 12;
    if (profile.isBus && isAirportRoute(route)) score -= 6;
  }

  if (passengerCount === 1) {
    if (profile.isBus || profile.isFerry || profile.isTrain) score += 20;
    if (profile.isVan) score += 6;
    if (profile.isTaxi) score -= 12;
  }

  if (passengerCount === 3 || passengerCount === 4) {
    if (profile.isTaxi) score += 24;
    if (profile.isVan) score += 22;
    if (profile.isBus) score -= 4;
    if (profile.isFerry || profile.isSpeedboat) score += 6;
  }

  if (passengerCount && passengerCount >= 5) {
    if (profile.isTaxi) score += 42;
    if (profile.isVan) score += 32;
    if (profile.isBus) score -= 8;
    if (profile.isFerry || profile.isSpeedboat) score += 8;
  }

  return score;
}

export function getPersonalizedOptionOrder(
  route: RoutePageData,
  arrivalTime?: string,
  passengers?: string,
) {
  if (!normalizeArrivalTime(arrivalTime) && !passengers) {
    return route.options;
  }

  return [...route.options].sort((left, right) => {
    const leftIndex = route.options.findIndex((option) => option.id === left.id);
    const rightIndex = route.options.findIndex((option) => option.id === right.id);
    const leftScore = getPersonalizedOptionScore(
      route,
      left,
      leftIndex,
      arrivalTime,
      passengers,
    );
    const rightScore = getPersonalizedOptionScore(
      route,
      right,
      rightIndex,
      arrivalTime,
      passengers,
    );

    if (rightScore !== leftScore) return rightScore - leftScore;

    return leftIndex - rightIndex;
  });
}

function getPersonalizedOption(
  route: RoutePageData,
  arrivalTime?: string,
  passengers?: string,
) {
  return getPersonalizedOptionOrder(route, arrivalTime, passengers)[0] ?? route.options[0];
}

export function getPersonalizedTimingAdvice(
  route: RoutePageData,
  arrivalTime?: string,
) {
  const arrival = normalizeArrivalTime(arrivalTime);

  if (!arrival) return getRouteDecision(route);

  if (arrival === "late") {
    if (isIslandRoute(route)) {
      return "After 20:00: check the last ferry or speedboat before moving to the pier.";
    }

    if (isAirportRoute(route)) {
      return "After 20:00: use taxi or private transfer first; fixed departures are only a backup.";
    }

    return "After 20:00: choose the most flexible departure and avoid the last tight connection.";
  }

  if (arrival === "afternoon") {
    if (isIslandRoute(route)) {
      return "14:00-20:00: check the last ferry or speedboat and keep a pier-transfer buffer.";
    }

    if (isAirportRoute(route)) {
      return "14:00-20:00: keep buffer for bags, immigration and traffic before booking.";
    }

    return "14:00-20:00: compare the next scheduled departure with a flexible backup.";
  }

  if (arrival === "morning") {
    if (isIslandRoute(route)) {
      return "Before 14:00: scheduled ferry or van options usually make the cleanest plan.";
    }

    if (isAirportRoute(route)) {
      return "Before 14:00: bus or shared van can work well if the partner schedule fits.";
    }

    return "Before 14:00: compare scheduled options first, then keep a flexible backup.";
  }

  if (isIslandRoute(route)) {
    return "Arriving now: check live ferry or speedboat availability before moving to the pier.";
  }

  if (isAirportRoute(route)) {
    return "Arriving now: choose the clearest pickup now; use private transfer if bags slow you down.";
  }

  return "Arriving now: choose the next confirmed departure and avoid unclear pickup instructions.";
}

export function getPersonalizedPassengerAdvice(
  route: RoutePageData,
  passengers?: string,
) {
  const count = getPassengerCount(passengers);
  const hasTaxi = hasTaxiOption(route);
  const hasScheduledSeat = hasScheduledSeatOption(route);

  if (count === 1) {
    if (hasScheduledSeat) {
      return "1 Adult: start with scheduled seats; upgrade only for timing, luggage or comfort.";
    }

    return "1 Adult: compare the first available option and check pickup details carefully.";
  }

  if (count === 2) {
    return "2 Adults: compare the recommended shared option against a private transfer backup.";
  }

  if (count === 3 || count === 4) {
    if (hasTaxi) {
      return `${count} Adults: compare private car or van first if luggage matters.`;
    }

    return `${count} Adults: choose the option with the clearest pickup and baggage rules.`;
  }

  if (hasTaxi) {
    return "5+ Adults: compare private van or larger car before buying separate seats.";
  }

  return "5+ Adults: check seat count, luggage rules and whether pickup is included.";
}

function getTimingTileValue(route: RoutePageData, arrivalTime?: string) {
  const arrival = normalizeArrivalTime(arrivalTime);

  if (!arrival) return isIslandRoute(route) ? "Ferry timing" : "Check timing";
  if (arrival === "late") return isIslandRoute(route) ? "Last ferry risk" : "Late buffer";
  if (arrival === "afternoon") return isIslandRoute(route) ? "Last pier buffer" : "Traffic buffer";
  if (arrival === "morning") return "Day schedule";

  return "Live pickup";
}

function getAvoidTileValue(route: RoutePageData, arrivalTime?: string) {
  const arrival = normalizeArrivalTime(arrivalTime);

  if (arrival === "late") return isIslandRoute(route) ? "Last ferry" : "Fixed last bus";
  if (arrival === "afternoon") return isIslandRoute(route) ? "Tight pier run" : "No buffer";
  if (arrival === "now") return "Unclear pickup";
  if (arrival === "morning") return "Too-tight booking";

  return isAirportRoute(route) ? "Late mismatch" : "Last departure";
}

export function getPersonalizedRouteDecision(
  route: RoutePageData,
  arrivalTime?: string,
  passengers?: string,
) {
  if (!normalizeArrivalTime(arrivalTime) && !passengers) {
    return getRouteDecision(route);
  }

  const arrivalLabel = getArrivalTimeLabel(arrivalTime) ?? "Your trip";
  const recommendedOption = getPersonalizedOption(route, arrivalTime, passengers);
  const avoidText = getAvoidTileValue(route, arrivalTime).toLowerCase();

  return `${arrivalLabel}: start with ${recommendedOption.name}. Avoid ${avoidText} unless partner rules fit.`;
}

export function getPersonalizedDecisionLabels(
  route: RoutePageData,
  arrivalTime?: string,
  passengers?: string,
) {
  if (!normalizeArrivalTime(arrivalTime) && !passengers) {
    return getDecisionLabels(route);
  }

  const recommendedOption = getPersonalizedOption(route, arrivalTime, passengers);

  return [
    {
      label: "Your match",
      value: recommendedOption?.name ?? "Compare options",
    },
    {
      label: "Timing",
      value: getTimingTileValue(route, arrivalTime),
    },
    {
      label: "Group fit",
      value: getPassengerLabel(passengers),
    },
    {
      label: "Avoid",
      value: getAvoidTileValue(route, arrivalTime),
    },
  ];
}

export function getPersonalizedOptionNote(
  route: RoutePageData,
  option: RouteTransportOption,
  arrivalTime?: string,
  passengers?: string,
) {
  const arrival = normalizeArrivalTime(arrivalTime);
  const arrivalLabel = getArrivalTimeLabel(arrivalTime) ?? "Your timing";
  const passengerLabel = getPassengerLabel(passengers);
  const passengerCount = getPassengerCount(passengers);
  const profile = getTransportProfile(option);
  const recommendedOption = getPersonalizedOption(route, arrivalTime, passengers);
  const isRecommended = recommendedOption?.id === option.id;
  const routeIsIsland = isIslandRoute(route);
  const routeIsAirport = isAirportRoute(route);

  let label = isRecommended ? "Best match for your trip" : "Backup for your trip";
  let timingTag = "Check timing";
  let groupTag = "Check fit";
  let checkTag = "Ticket rules";
  let timeReason = `${arrivalLabel}: confirm the partner schedule before booking.`;

  if (arrival === "late") {
    if (profile.isTaxi) {
      label = isRecommended ? "Best after 20:00" : label;
      timingTag = "Late-safe";
      checkTag = "Meeting point";
      timeReason = `${arrivalLabel}: this is flexible after immigration, baggage delays and evening traffic.`;
    } else if (profile.isFerry || profile.isSpeedboat) {
      label = "Only if last boat fits";
      timingTag = "Last boat risk";
      checkTag = "Last departure";
      timeReason = `${arrivalLabel}: use only if the partner still has a same-day boat and enough pier buffer.`;
    } else if (profile.isBus) {
      label = "Backup only after 20:00";
      timingTag = "Fixed schedule";
      checkTag = "Last bus";
      timeReason = `${arrivalLabel}: fixed departures can be missed after immigration, baggage or flight delay.`;
    } else {
      timingTag = "Confirm late slot";
      checkTag = "Departure time";
      timeReason = `${arrivalLabel}: use only with a confirmed late departure and clear pickup point.`;
    }
  } else if (arrival === "morning") {
    if (profile.isBus || profile.isVan || profile.isFerry || profile.isSpeedboat || profile.isTrain) {
      label = isRecommended ? "Good daytime value" : label;
      timingTag = "Day schedule";
      checkTag = routeIsIsland ? "Pier time" : "Departure time";
      timeReason = `${arrivalLabel}: scheduled options can work well when pickup and departure time match.`;
    } else {
      timingTag = "Flexible pickup";
      checkTag = "Vehicle size";
      timeReason = `${arrivalLabel}: choose this for comfort, direct pickup or luggage rather than lowest price.`;
    }
  } else if (arrival === "afternoon") {
    if (routeIsIsland || profile.isFerry || profile.isSpeedboat) {
      timingTag = "Last boat buffer";
      checkTag = "Pier cutoff";
      timeReason = `${arrivalLabel}: keep buffer for the last ferry or speedboat and do not book a tight pier run.`;
    } else if (routeIsAirport) {
      timingTag = "Traffic buffer";
      checkTag = "Pickup time";
      timeReason = `${arrivalLabel}: allow time for bags, airport walking and traffic before paying.`;
    } else {
      timingTag = "Schedule buffer";
      checkTag = "Next departure";
      timeReason = `${arrivalLabel}: compare the next confirmed departure with a flexible backup.`;
    }
  } else if (arrival === "now") {
    if (profile.isTaxi) {
      label = isRecommended ? "Best for immediate pickup" : label;
      timingTag = "Ready now";
      checkTag = "Driver point";
      timeReason = `${arrivalLabel}: this keeps pickup flexible if bags, queues or traffic slow you down.`;
    } else {
      timingTag = "Next slot";
      checkTag = "Live schedule";
      timeReason = `${arrivalLabel}: check live availability before moving to the counter, pier or station.`;
    }
  }

  if (passengerCount === 1) {
    groupTag = profile.isTaxi ? "Comfort upgrade" : "Solo value";
  } else if (passengerCount === 2) {
    groupTag = profile.isTaxi ? "Comfort backup" : "Good for 2";
  } else if (passengerCount === 3 || passengerCount === 4) {
    groupTag = profile.isTaxi || profile.isVan ? "Good group fit" : "Seat-by-seat";
  } else {
    groupTag = profile.isTaxi || profile.isVan ? "Check vehicle size" : "Check seat count";
  }

  const groupReason =
    passengerCount === 1
      ? profile.isTaxi
        ? `${passengerLabel}: this is mainly a comfort upgrade, not the cheapest choice.`
        : `${passengerLabel}: seat-based options usually make better budget sense.`
      : passengerCount >= 5
        ? profile.isTaxi || profile.isVan
          ? `${passengerLabel}: confirm vehicle size and luggage space before paying.`
          : `${passengerLabel}: check seat count and luggage rules before buying separate tickets.`
        : profile.isTaxi || profile.isVan
          ? `${passengerLabel}: this can reduce luggage and pickup friction for a small group.`
          : `${passengerLabel}: compare total seat cost against a private transfer backup.`;

  return {
    label,
    text: `${timeReason} ${groupReason}`,
    timingTag,
    groupTag,
    checkTag,
    isRecommended,
  };
}

export function getPersonalizedDetailsChecks(
  route: RoutePageData,
  option: RouteTransportOption,
  arrivalTime?: string,
  passengers?: string,
) {
  const arrival = normalizeArrivalTime(arrivalTime);
  const passengerCount = getPassengerCount(passengers);
  const profile = getTransportProfile(option);
  const checks = [
    `Selected option: ${option.name}. Confirm pickup point for ${route.from} to ${route.to}.`,
  ];

  if (arrival === "late") {
    checks.push(
      profile.isTaxi
        ? "After 20:00: confirm driver meeting point, waiting time and hotel drop-off."
        : "After 20:00: confirm the last usable departure before paying.",
    );
  } else if (arrival === "afternoon") {
    checks.push(
      isIslandRoute(route)
        ? "14:00-20:00: confirm last ferry, pier reporting time and onward transfer."
        : "14:00-20:00: leave buffer for traffic, baggage and pickup instructions.",
    );
  } else if (arrival === "morning") {
    checks.push(
      "Before 14:00: scheduled options can work, but still match the ticket time to your actual arrival.",
    );
  } else if (arrival === "now") {
    checks.push(
      "Arriving now: check live partner availability before moving to the pickup point.",
    );
  }

  if (passengerCount >= 5) {
    checks.push("5+ Adults: confirm seat count, vehicle capacity and luggage space.");
  } else if (passengerCount >= 3) {
    checks.push(`${passengerCount} Adults: compare total seat price with a private vehicle backup.`);
  } else if (passengerCount === 1) {
    checks.push("1 Adult: scheduled seats are usually best value when timing fits.");
  } else {
    checks.push("2 Adults: compare shared seats against a private transfer backup.");
  }

  return checks;
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

export function getCompactCtaLabel(option?: RouteTransportOption) {
  const id = option?.id.toLowerCase() ?? "";
  const name = option?.name.toLowerCase() ?? "";

  if (
    id.includes("ferry") ||
    id.includes("speedboat") ||
    name.includes("ferry") ||
    name.includes("speedboat")
  ) {
    return "Live schedule";
  }

  if (id.includes("bus") || name.includes("bus")) {
    return "Check bus price";
  }

  if (id.includes("taxi") || name.includes("taxi")) {
    return "Check taxi";
  }

  if (id.includes("van") || name.includes("van")) {
    return "Check van";
  }

  return "Ticket rules";
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

function isSpecificPickupPoint(pickup: string) {
  const text = pickup.toLowerCase();
  const specificMarkers = [
    "gate 8",
    "level 1",
    "floor 1",
    "bus station",
    "transport station",
    "railway station",
    "train station",
    "ton sai pier",
    "tonsai pier",
    "pier",
    "terminal",
  ];
  const genericMarkers = [
    "hotel pickup",
    "hotel area",
    "city area",
    "operator point",
    "operator pickup",
    "operator pier",
    "partner pickup",
    "selected pickup",
    "voucher point",
    "meeting point",
    "arrivals hall",
    "depends on operator",
  ];

  if (specificMarkers.some((marker) => text.includes(marker))) {
    return true;
  }

  return !genericMarkers.some((marker) => text.includes(marker));
}

export function getPickupMapInfo(
  route: RoutePageData,
  option?: RouteTransportOption,
) {
  const pickup = option?.pickup ?? route.from;
  const isSpecific = isSpecificPickupPoint(pickup);

  if (!isSpecific) {
    return {
      label: "Ticket point",
      note: "Exact pickup is shown on the partner ticket or voucher.",
      isSpecific,
    };
  }

  return {
    label: "Specific point",
    note: "Use this as a planning point. Still follow the exact partner ticket.",
    isSpecific,
  };
}

function getRouteSourceNotes(route: RoutePageData): RouteSourceNote[] {
  const notes: RouteSourceNote[] = [];
  const routeText = `${route.slug} ${route.from} ${route.to}`.toLowerCase();

  if (
    route.slug === "bangkok-airport-to-pattaya" ||
    route.slug === "pattaya-to-bangkok-airport"
  ) {
    notes.push({
      label: "Airport Pattaya Bus / Roong Reuang Coach",
      sourceType: "operator",
    });
  }

  if (route.slug === "suvarnabhumi-airport-to-hua-hin") {
    notes.push({
      label: "RRC Suvarnabhumi Airport - Hua Hin",
      sourceType: "operator",
    });
  }

  if (routeText.includes("koh-chang")) {
    notes.push({
      label: "Koh Chang ferry timetable reference",
      sourceType: "public",
    });
  }

  notes.push({
    label: "12Go partner availability",
    sourceType: "partner",
  });

  return notes;
}

export function getSourceFreshness(route: RoutePageData): RouteSourceFreshness {
  const routeText = `${route.from} ${route.to} ${route.intro}`.toLowerCase();
  const isIsland = routeText.includes("koh") || routeText.includes("ferry");
  const sourceNotes = getRouteSourceNotes(route);
  const hasOperatorSource = sourceNotes.some(
    (link) => link.sourceType === "operator",
  );
  const hasPublicSource = sourceNotes.some((link) => link.sourceType === "public");

  return {
    lastChecked: "May 2026",
    confidence: isIsland && !hasOperatorSource ? "Medium" : "High",
    officialSource: hasOperatorSource
      ? "operator public information plus partner availability"
      : hasPublicSource
        ? "public ferry or route reference plus partner availability"
        : "partner availability plus public route context",
    partnerSource: "12Go partner availability",
    sourceNotes,
  };
}
