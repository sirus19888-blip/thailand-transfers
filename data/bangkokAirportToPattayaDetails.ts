import { mainRoute, transferOptions } from "@/data/routes";
import { getSourceFreshness } from "@/data/routeIntelligence";
import type { RoutePageData } from "@/data/routePages";

export const bangkokAirportToPattayaDetailsFaqs = [
  {
    question: "What is the best option from BKK Airport to Pattaya?",
    answer:
      "Bus is usually best value if the schedule matches your flight. Private taxi is best for late arrivals, hotel drop-off, luggage or groups.",
  },
  {
    question: "Where do buses leave from at Suvarnabhumi Airport?",
    answer:
      "RRC lists the Suvarnabhumi Airport pickup at Level 1, Gate 8. Some partner tickets can use a different counter or bus-terminal instruction, so always follow the exact partner ticket.",
  },
  {
    question: "How long does BKK Airport to Pattaya take?",
    answer:
      "Plan around 2h - 2h 30m by bus and 1h 30m - 2h 30m by taxi. Friday evening, holiday and Bangkok traffic can make the journey longer.",
  },
  {
    question: "Should I book before landing?",
    answer:
      "It is safer to compare partner options before arrival, especially in high season or if your flight lands close to the final bus departures.",
  },
];

export const bangkokAirportToPattayaDetailsRoute: RoutePageData = {
  slug: mainRoute.slug,
  title: mainRoute.title,
  seoTitle: mainRoute.title,
  seoDescription: mainRoute.description,
  from: mainRoute.from,
  to: mainRoute.to,
  intro: mainRoute.description,
  mainAffiliateUrl: mainRoute.affiliateUrl,
  options: transferOptions.map((option) => ({
    id: option.id,
    name: option.name,
    price: "Final price on partner",
    duration: option.duration,
    pickup: option.pickup,
    bestFor: option.bestFor,
    trackingId: option.trackingId,
    affiliateUrl: option.affiliateUrl,
  })),
};

export const bangkokAirportToPattayaSourceFreshness = getSourceFreshness(
  bangkokAirportToPattayaDetailsRoute,
);
