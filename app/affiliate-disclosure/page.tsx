import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Learn how Thailand Transfer Guide uses paid partner links, how commissions may work and how recommendations stay focused on traveler suitability.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <PolicyPage
      eyebrow="Disclosure"
      title="Affiliate Disclosure"
      intro="Some links on Thailand Transfer Guide are paid partner links. We may earn a commission at no extra cost to you."
      sections={[
        {
          title: "How affiliate links work",
          body: [
            "When you click a partner link and book on the partner website, we may receive a commission.",
            "This helps keep route guides free while still making clear that final price, ticket rules and support are handled by the partner.",
          ],
        },
        {
          title: "How recommendations are made",
          body: [
            "We recommend options based on tourist suitability: arrival time, luggage, comfort, safety, convenience and price.",
            "Affiliate commission is not the only ranking factor, and some routes may show warnings even when a paid partner link is available.",
          ],
        },
      ]}
    />
  );
}
