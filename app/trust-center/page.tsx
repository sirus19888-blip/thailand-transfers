import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { PolicyPage } from "@/components/PolicyPage";
import { routePricesCheckedOn } from "@/data/routePrices";

export const metadata: Metadata = createPageMetadata({
  title: "Trust Center",
  description:
    "How Thailand Transfer Guide checks route information, ranks transfer options, handles affiliate links and accepts corrections.",
  alternates: {
    canonical: "/trust-center",
  },
});

function formatReviewedMonth(value: string) {
  const parsed = new Date(`${value}-01T00:00:00.000Z`);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  }).format(parsed);
}

export default function TrustCenterPage() {
  const lastReviewed = formatReviewedMonth(routePricesCheckedOn);

  return (
    <PolicyPage
      eyebrow="Trust Center"
      title="How we keep transfer guides useful and honest"
      intro="Thailand Transfer Guide is an independent travel comparison guide by Paweł Giżyński, built from first-hand Thailand travel experience and transparent route research."
      showCorrectionForm
      sections={[
        {
          title: "Who runs Thailand Transfer Guide",
          body: [
            "Thailand Transfer Guide is an independent guide created and maintained by Paweł Giżyński, an independent creator from Poland who lived in Bangkok for two years and traveled widely across Thailand. It is not a travel agency, tour operator or transport company, and it does not sell tickets.",
            "Why you can trust it: the guide combines first-hand experience of arriving, transferring and getting around Thailand with transparent research. We compile each route from public sources: official airport, operator and ferry information together with live partner availability, then present options clearly with cited sources, last-checked dates and honest price ranges. Final price, schedule and booking are always confirmed on the partner site.",
            "How the guide is funded: we may earn an affiliate commission when you book through partner links, at no extra cost to you. Recommendations are based on route suitability (arrival time, luggage, safety, price, convenience), not commission alone.",
            `Last reviewed: ${lastReviewed}.`,
          ],
        },
        {
          title: "How we verify routes and prices",
          body: [
            "We build tourist-friendly route guides for transfer planning in Thailand because airport arrivals, ferry connections and return airport trips are often confusing after a long flight.",
            "Route pages are checked against public airport, operator, ferry and partner information, then written around traveler suitability: arrival time, luggage, comfort, safety and price.",
            `Price ranges use the shared route price dataset last checked in ${lastReviewed}; final prices, schedules, pickup rules and support conditions are confirmed on the partner site before payment.`,
          ],
        },
        {
          title: "How we make money",
          body: [
            "We may earn a commission when you book through partner links. This does not increase your price.",
            "Our recommendations are based on route suitability, not only commission: arrival time, luggage, safety, price, convenience and whether the option fits tired tourists.",
          ],
        },
        {
          title: "How we rank transfer options",
          body: [
            "We compare options by arrival time, luggage, safety, price, convenience, pickup clarity, drop-off clarity and risk of missing a fixed departure or ferry.",
            "A cheap bus can be the best option in the daytime. A private taxi can be the safer recommendation after a late arrival or with family luggage.",
          ],
        },
        {
          title: "What we do not do",
          body: [
            "We do not operate buses, taxis, vans or ferries. We do not sell tickets.",
            "We cannot change, refund or confirm bookings. Booking support is handled by the partner or transport operator shown on your ticket.",
          ],
        },
        {
          title: "Editorial policy",
          body: [
            "Top route pages are reviewed regularly, with last checked dates shown in route content where available.",
            "Sources include official airport/operator/ferry information and partner availability pages. If a price, pickup point or schedule changes, the partner ticket is the final source before payment.",
          ],
        },
        {
          title: "Corrections contact",
          body: [
            "Email: thailandtransferguide@gmail.com",
            "Use this address for outdated pickup points, schedule changes, ferry updates, price range corrections or source notes we should review.",
          ],
        },
      ]}
    />
  );
}
