import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = createPageMetadata({
  title: "Trust Center",
  description:
    "How Thailand Transfer Guide checks route information, ranks transfer options, handles affiliate links and accepts corrections.",
  alternates: {
    canonical: "/trust-center",
  },
});

export default function TrustCenterPage() {
  return (
    <PolicyPage
      eyebrow="Trust Center"
      title="How we keep transfer guides useful and honest"
      intro="Thailand Transfer Guide is an independent travel comparison guide. We help travelers understand routes, pickup points, risks and partner booking rules before they pay."
      showCorrectionForm
      sections={[
        {
          title: "About us",
          body: [
            "We build tourist-friendly route guides for Thailand transfers because airport arrivals, ferry connections and return airport trips are often confusing after a long flight.",
            "We check route pages against public airport, operator, ferry and partner information, then write guidance around traveler suitability: arrival time, luggage, comfort, safety and price.",
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
      ]}
    />
  );
}
