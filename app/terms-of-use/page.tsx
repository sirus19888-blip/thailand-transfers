import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Read the terms for using Thailand Transfer Guide, including route guidance limits, partner booking responsibility, travel risk and content accuracy.",
  alternates: {
    canonical: "/terms-of-use",
  },
});

export default function TermsOfUsePage() {
  return (
    <PolicyPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="Use Thailand Transfer Guide as planning guidance. Always confirm final prices, schedules, pickup points and ticket rules with the booking partner before paying."
      sections={[
        {
          title: "Independent guide",
          body: [
            "Thailand Transfer Guide is an independent route guide and comparison website.",
            "We do not operate buses, taxis, vans, trains, flights or ferries, and we do not sell tickets directly.",
          ],
        },
        {
          title: "Booking responsibility",
          body: [
            "Final price, availability, luggage rules, cancellation terms and customer support are handled by the partner or operator.",
            "Do not rely on a route page as proof that a specific departure, ferry or pickup point is available for your travel date.",
          ],
        },
        {
          title: "Travel risk",
          body: [
            "Traffic, weather, ferry conditions, flight delays and operator changes can affect transfer times.",
            "Leave extra time before flights and avoid booking the last possible connection when missing it would be expensive.",
          ],
        },
      ]}
    />
  );
}
