"use client";

import { affiliateMainCta } from "@/data/ctaCopy";

type DataLayerWindow = Window & {
  dataLayer?: object[];
};

type AffiliateButtonProps = {
  href: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  trackingId?: string;
  partner?: string;
  variant?: "default" | "table" | "detailsSticky" | "mobileCompact";
};

function getTwelveGoTrackingDetails(href: string, trackingId?: string) {
  let subId = trackingId;

  try {
    const url = new URL(href);
    subId = url.searchParams.get("sub_id") ?? trackingId;
  } catch {
    subId = trackingId;
  }

  const [route = "unknown", option = "general"] = (subId ?? "")
    .replace(/^click_12go_/, "")
    .split(/-(?=[^-]+$)/);

  return { subId, route, option };
}

export function AffiliateButton({
  href,
  children = affiliateMainCta,
  fullWidth = false,
  trackingId,
  partner = "12go",
  variant = "default",
}: AffiliateButtonProps) {
  function handleClick() {
    if (typeof window !== "undefined") {
      const trackingWindow = window as DataLayerWindow;
      const affiliatePartner = partner.trim() || "12go";
      const isTwelveGo = affiliatePartner.toLowerCase() === "12go";
      const { subId, route, option } = isTwelveGo
        ? getTwelveGoTrackingDetails(href, trackingId)
        : { subId: undefined, route: "", option: "" };

      trackingWindow.dataLayer = trackingWindow.dataLayer || [];
      trackingWindow.dataLayer.push({
        event: "partner_click",
        click_id: trackingId,
        partner: affiliatePartner,
        affiliate_partner: affiliatePartner,
        affiliate_url: href,
        sub_id: subId,
        route,
        option,
        cta: typeof children === "string" ? children : "affiliate_button",
      });
    }
  }

  const baseClass =
    "inline-flex items-center justify-center text-center font-bold leading-tight text-white shadow-sm transition";

  const variantClass =
    variant === "table"
      ? "min-h-10 rounded-xl bg-[#0c5a4d] px-3 py-2 text-[12px] font-extrabold"
      : variant === "detailsSticky"
        ? "min-h-10 shrink-0 rounded-full bg-[#0c5a4d] px-3.5 py-2 text-[12px] font-extrabold shadow-md shadow-black/10"
        : variant === "mobileCompact"
          ? "min-h-10 rounded-full bg-[#064e45] px-3.5 py-2 text-[12px] font-extrabold hover:bg-[#033b35]"
          : "min-h-12 rounded-full bg-[#064e45] px-5 py-3 text-sm hover:bg-[#033b35]";

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      onClick={handleClick}
      className={`${baseClass} ${variantClass} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </a>
  );
}

