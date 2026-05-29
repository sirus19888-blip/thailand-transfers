import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { MobileArticlePage } from "@/components/MobileArticlePage";

const taxiUrl =
  "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-taxi-guide";

export const metadata: Metadata = createPageMetadata({
  title: "BKK Airport to Pattaya by Taxi | Late Arrival Guide",
  description:
    "Mobile guide for private taxi from Suvarnabhumi Airport to Pattaya, including late arrival advice, luggage, pickup safety and partner booking checks.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya/taxi",
  },
});

export default function BkkPattayaTaxiGuidePage() {
  return (
    <MobileArticlePage
      eyebrow="Taxi guide"
      title="BKK to Pattaya by taxi"
      intro="Easiest door-to-door option for late arrivals, families, luggage and hotels away from bus stops."
      backHref="/routes/bangkok-airport-to-pattaya"
      ctaHref={taxiUrl}
      ctaTrackingId="click_12go_bkk_pattaya_taxi_guide"
      heroImageSrc="/assets/vehicles/mobile/taxi.png"
      heroImageAlt="Private taxi transfer from BKK Airport to Pattaya"
      sections={[
        {
          title: "Why it wins late",
          body: [
            "If you land after 20:00, private taxi is usually easier than chasing a fixed bus schedule.",
            "The driver can take you directly to Pattaya, Jomtien, Naklua, Pratumnak or your full hotel address.",
            "Choose a larger vehicle if you have more than two large suitcases.",
          ],
        },
        {
          title: "Safety checks",
          body: [
            "Avoid random drivers approaching you inside the terminal.",
            "Use an official counter, pre-booked meeting point or partner ticket instructions.",
            "Check tolls, waiting time, pickup point and luggage capacity before paying.",
          ],
        },
      ]}
    />
  );
}
