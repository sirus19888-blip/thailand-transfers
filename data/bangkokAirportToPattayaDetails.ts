import { mainRoute, transferOptions } from "@/data/routes";
import { getSourceFreshness } from "@/data/routeIntelligence";
import { routeFacts } from "@/data/routeFacts";
import type { RoutePageData } from "@/data/routePages";

const bangkokAirportToPattayaFactSet = routeFacts[mainRoute.slug];

export const bangkokAirportToPattayaDetailsIntro =
  bangkokAirportToPattayaFactSet?.intro ??
  "Before booking your transfer, check what happens after landing, where to go, what to avoid and which option is easiest for your trip.";

export const bangkokAirportToPattayaDetailsTips =
  bangkokAirportToPattayaFactSet?.tips ?? [
    "Do not accept random taxi offers inside the terminal.",
    "Check the pickup point before your flight lands.",
    "If you arrive late, a private taxi is usually easier than a bus.",
    "Keep screenshots of your booking and pickup instructions.",
    "Allow extra time during holidays, rain or evening traffic.",
  ];

export const bangkokAirportToPattayaDetailsWarnings =
  bangkokAirportToPattayaFactSet?.warnings ?? [
    "Avoid random drivers inside the terminal. Use official counters, pre-booked services or trusted booking partners.",
    "If someone approaches you randomly and pressures you to decide quickly, slow down and check your options first.",
  ];

export const bangkokAirportToPattayaDetailsFaqs =
  bangkokAirportToPattayaFactSet?.faqs ?? [
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
