import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Contact | Thailand Transfers",
  description: "Contact Thailand Transfers about route information, corrections or partnership questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PolicyPage
      eyebrow="Contact"
      title="Contact Thailand Transfers"
      intro="For booking changes, refunds or ticket confirmation, contact the partner or operator listed on your ticket. For website corrections, use the form below."
      showCorrectionForm
      sections={[
        {
          title: "Website contact",
          body: [
            "Email: hello@thailandtransferguide.com",
            "Use this for outdated route information, pickup point changes, correction requests, editorial questions or partnership inquiries.",
          ],
        },
        {
          title: "Booking support",
          body: [
            "Thailand Transfers does not sell tickets or operate transport services.",
            "If you already booked, the booking partner or operator handles payment issues, refunds, changes, pickup confirmation and ticket support.",
          ],
        },
      ]}
    />
  );
}
