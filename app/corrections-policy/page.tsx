import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Corrections Policy",
  description: "Report outdated pickup points, schedules, ferry information or price ranges.",
  alternates: {
    canonical: "/corrections-policy",
  },
};

export default function CorrectionsPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Corrections"
      title="Corrections Policy"
      intro="Route details change. Help us keep pickup points, ferry notes, schedules and price guidance useful for travelers."
      showCorrectionForm
      sections={[
        {
          title: "What to report",
          body: [
            "Report outdated pickup point, schedule, ferry information, pier status, drop-off note, luggage rule or price range.",
            "Include the route, what changed and where you saw the updated information if possible.",
          ],
        },
        {
          title: "How we review corrections",
          body: [
            "We compare reports with public airport, operator, ferry and partner information before updating route pages.",
            "When a route has higher uncertainty, we lower confidence and tell travelers to check partner ticket details carefully.",
          ],
        },
      ]}
    />
  );
}
