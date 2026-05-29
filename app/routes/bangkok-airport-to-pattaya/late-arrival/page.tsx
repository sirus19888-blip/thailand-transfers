import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { MobileArticlePage } from "@/components/MobileArticlePage";

const partnerUrl =
  "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-late-arrival";

export const metadata: Metadata = createPageMetadata({
  title: "BKK to Pattaya Late Arrival Transfer Guide",
  description:
    "What to do if your flight lands late at Bangkok Suvarnabhumi Airport and you need to get to Pattaya safely.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya/late-arrival",
  },
});

export default function BkkPattayaLateArrivalPage() {
  return (
    <MobileArticlePage
      eyebrow="Late arrival"
      title="If you land late at BKK"
      intro="After a long flight, reduce moving parts. Taxi/private transfer is usually the cleanest choice after evening arrivals."
      backHref="/routes/bangkok-airport-to-pattaya"
      ctaHref={partnerUrl}
      ctaTrackingId="click_12go_bkk_pattaya_late_arrival"
      heroImageSrc="/assets/guides/last-ferry-late-arrival.png"
      heroImageAlt="Late arrival transfer planning in Thailand"
      sections={[
        {
          title: "Decision rule",
          body: [
            "If you land after 20:00, choose taxi or a flexible private transfer.",
            "If your flight is delayed, do not rely on the last possible bus.",
            "Keep screenshots of your booking and pickup instructions before leaving Wi-Fi.",
          ],
        },
        {
          title: "What to avoid",
          body: [
            "Avoid random drivers inside arrivals.",
            "Avoid unclear pickup points when you are tired and carrying luggage.",
            "Avoid booking a return transfer too close to your flight later in the trip.",
          ],
        },
      ]}
    />
  );
}
