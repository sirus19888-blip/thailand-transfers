import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { MobileArticlePage } from "@/components/MobileArticlePage";
import { bangkokAirportToPattayaSourceFreshness } from "@/data/bangkokAirportToPattayaDetails";

const partnerUrl =
  "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-with-luggage";

export const metadata: Metadata = createPageMetadata({
  title: "BKK to Pattaya With Luggage | Transfer Guide",
  description:
    "How to choose a BKK Airport to Pattaya transfer when travelling with suitcases, family luggage, stroller or bulky items.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya/with-luggage",
  },
});

export default function BkkPattayaWithLuggagePage() {
  return (
    <MobileArticlePage
      eyebrow="Luggage guide"
      title="BKK to Pattaya with luggage"
      intro="Baggage rules can change the best option. Large suitcases, stroller or family bags usually make taxi/private van safer."
      backHref="/routes/bangkok-airport-to-pattaya"
      ctaHref={partnerUrl}
      ctaTrackingId="click_12go_bkk_pattaya_with_luggage"
      heroImageSrc="/assets/steps/baggage-claim.png"
      heroImageAlt="Baggage claim before a Thailand airport transfer"
      sourceFreshness={bangkokAirportToPattayaSourceFreshness}
      sections={[
        {
          title: "Normal luggage",
          body: [
            "Bus or shared van can work if you have about 1 large bag plus 1 small personal bag.",
            "Check the ticket luggage rule before paying because partner/operator rules vary.",
            "Plan a local taxi after bus drop-off if the final stop is not your hotel.",
          ],
        },
        {
          title: "Large luggage",
          body: [
            "Choose private taxi or private van for family luggage, stroller, golf bags or bulky items.",
            "Match the vehicle size to your bags before booking.",
            "Shared vans can have stricter space limits and may wait for other passengers.",
          ],
        },
      ]}
    />
  );
}
