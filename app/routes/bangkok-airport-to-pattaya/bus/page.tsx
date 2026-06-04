import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { MobileArticlePage } from "@/components/MobileArticlePage";
import { bangkokAirportToPattayaSourceFreshness } from "@/data/bangkokAirportToPattayaDetails";

const busUrl =
  "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-bus-guide";

export const metadata: Metadata = createPageMetadata({
  title: "BKK Airport to Pattaya by Bus | Pickup and Luggage Guide",
  description:
    "Mobile guide for taking the airport bus from Suvarnabhumi Airport to Pattaya, including pickup, luggage, late arrival risk and partner ticket checks.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya/bus",
  },
});

export default function BkkPattayaBusGuidePage() {
  return (
    <MobileArticlePage
      eyebrow="Bus guide"
      title="BKK to Pattaya by bus"
      intro="Best for daytime arrivals, solo travelers and tight budgets when the fixed schedule fits your flight."
      backHref="/routes/bangkok-airport-to-pattaya"
      ctaHref={busUrl}
      ctaTrackingId="click_12go_bkk_pattaya_bus_guide"
      heroImageSrc="/assets/routes/bangkok-airport-to-pattaya.png"
      heroImageAlt="Bangkok airport to Pattaya bus transfer guide"
      sourceFreshness={bangkokAirportToPattayaSourceFreshness}
      sections={[
        {
          title: "Use it when",
          body: [
            "Your flight lands early enough to clear immigration, collect bags and reach the pickup point calmly.",
            "You travel with normal luggage: 1 large bag plus 1 small personal bag.",
            "You are comfortable arranging a local taxi after the Pattaya bus stop if needed.",
          ],
        },
        {
          title: "Avoid it when",
          body: [
            "Your flight lands late or close to the final departure window.",
            "You have large family luggage, golf bags, stroller or bulky items.",
            "Your hotel is far from the bus station and you do not want a last-mile taxi.",
          ],
        },
      ]}
    />
  );
}
