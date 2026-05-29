import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "Read how Thailand Transfer Guide uses privacy-friendly analytics, cookies and partner link tracking, plus how travelers can manage consent.",
  alternates: {
    canonical: "/cookie-policy",
  },
});

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      eyebrow="Cookies"
      title="Cookie Policy"
      intro="Cookies and similar tracking can help measure route usefulness and affiliate clicks. Marketing or analytics cookies that require consent should only be used with a clear consent choice."
      sections={[
        {
          title: "Essential cookies",
          body: [
            "Essential cookies may be used for basic site functionality, security or consent settings.",
            "These should be limited to what is needed for the site to work.",
          ],
        },
        {
          title: "Analytics",
          body: [
            "Analytics may measure anonymous events such as route search started, route result viewed, option expanded, map opened and partner link clicked.",
            "We prefer anonymous event data over collecting personal travel profiles.",
          ],
        },
        {
          title: "Affiliate tracking",
          body: [
            "Partner links may include route, option, CTA, language and arrival-time style sub-IDs.",
            "These parameters help us understand revenue per helpful route view instead of optimizing for clicks at any cost.",
          ],
        },
      ]}
    />
  );
}
