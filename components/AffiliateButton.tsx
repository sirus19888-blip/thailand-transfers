"use client";

type DataLayerWindow = Window & {
  dataLayer?: object[];
};

type AffiliateButtonProps = {
  href: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  trackingId?: string;
  variant?: "default" | "table" | "detailsSticky" | "mobileCompact";
};

export function AffiliateButton({
  href,
  children = "Check final price on partner site",
  fullWidth = false,
  trackingId,
  variant = "default",
}: AffiliateButtonProps) {
  function handleClick() {
    if (typeof window !== "undefined") {
      const trackingWindow = window as DataLayerWindow;
      const url = new URL(href);
      const subId = url.searchParams.get("sub_id") ?? trackingId;
      const [route = "unknown", option = "general"] = (subId ?? "")
        .replace(/^click_12go_/, "")
        .split(/-(?=[^-]+$)/);

      trackingWindow.dataLayer = trackingWindow.dataLayer || [];
      trackingWindow.dataLayer.push({
        event: "partner_click",
        click_id: trackingId,
        partner: "12go",
        affiliate_partner: "12go",
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
        ? "min-h-12 shrink-0 rounded-2xl bg-[#0c5a4d] px-5 py-3 text-sm font-extrabold shadow-lg shadow-black/10"
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

