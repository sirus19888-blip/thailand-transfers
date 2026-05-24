import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import { getRoutePageBySlug } from "@/data/routePages";

const route = getRoutePageBySlug("koh-phi-phi-to-phuket");

export const metadata: Metadata = {
  title: route?.seoTitle ?? "Koh Phi Phi to Phuket Transfers | Ferry & Speedboat",
  description:
    route?.seoDescription ??
    "Compare return transfer options from Koh Phi Phi to Phuket. Check ferry and speedboat choices, estimated travel times and partner booking options.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-phuket",
  },
};

export default function KohPhiPhiToPhuketPage() {
  if (!route) {
    notFound();
  }

  return (
    <RoutePageTemplate
      route={route}
      desktopDescription="Compare ferry and speedboat options from Koh Phi Phi back to Phuket. This route is useful for travelers returning from the Phi Phi Islands to Phuket hotels, Phuket Town or Phuket Airport connections."
      mobileDescription="Compare ferry and speedboat options from Koh Phi Phi to Phuket. Always check live availability, pier details and booking conditions before booking."
      optionsHeading="Compare Koh Phi Phi to Phuket transfer options"
      detailsNote="Prices, pier locations and availability can change. Always check live offers and booking conditions on the partner website before booking."
    />
  );
}
