import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use | Thailand Transfers",
  description: "Terms of use for Thailand Transfers route guides and partner links.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <PolicyPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="Use Thailand Transfers as planning guidance. Always confirm final prices, schedules, pickup points and ticket rules with the booking partner before paying."
      sections={[
        {
          title: "Independent guide",
          body: [
            "Thailand Transfers is an independent route guide and comparison website.",
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
