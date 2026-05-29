import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy information for Thailand Transfer Guide users, analytics and affiliate tracking.",
  alternates: {
    canonical: "/privacy-policy",
  },
});

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="We aim to collect as little personal information as possible. Route searches should work as travel planning data, not as personal profiles."
      sections={[
        {
          title: "Data we try not to collect",
          body: [
            "We do not need your passport number, booking reference, payment card, exact hotel room or private travel documents to show route guidance.",
            "Route inputs such as date, passengers or direction are used to help navigation and should not be treated as booking confirmation.",
          ],
        },
        {
          title: "Analytics and affiliate tracking",
          body: [
            "We may measure anonymous events such as route viewed, pickup guide opened, map opened and partner link clicked.",
            "Partner links may include route, option, language, CTA and similar sub-ID information so we can understand which route guidance is useful.",
          ],
        },
        {
          title: "EU privacy note",
          body: [
            "If analytics or marketing cookies that require consent are used, visitors should receive a clear consent choice before those cookies are placed.",
            "Affiliate tracking and analytics are described here and in our Cookie Policy so travelers can understand how the site is funded and measured.",
          ],
        },
      ]}
    />
  );
}
