import type { Metadata } from "next";
import { MobileArticlePage } from "@/components/MobileArticlePage";

export const metadata: Metadata = {
  title: "BKK Airport Pickup Level 1 Gate 8 Guide",
  description:
    "Mobile pickup guide for Suvarnabhumi Airport Level 1 Gate 8, used by many Pattaya bus and shared transfer instructions.",
  alternates: {
    canonical: "/guides/bkk-airport-pickup-level-1-gate-8",
  },
};

export default function BkkPickupGate8GuidePage() {
  return (
    <MobileArticlePage
      eyebrow="Pickup guide"
      title="BKK Level 1 Gate 8"
      intro="A compact pickup guide for travelers whose ticket tells them to meet at Suvarnabhumi Airport Level 1, Gate 8."
      backHref="/routes/bangkok-airport-to-pattaya/details"
      sections={[
        {
          title: "Where to go",
          body: [
            "After immigration and baggage claim, follow signs toward the lower transport level.",
            "Look for Level 1 / Floor 1 and then Gate 8.",
            "Use your live voucher if it names a different counter, bus terminal or partner meeting point.",
          ],
        },
        {
          title: "Before leaving arrivals",
          body: [
            "Save a screenshot of your pickup instructions.",
            "Keep your phone online in case the operator sends a counter or gate update.",
            "Do not accept random driver offers if your ticket is for a bus or shared transfer.",
          ],
        },
      ]}
    />
  );
}
