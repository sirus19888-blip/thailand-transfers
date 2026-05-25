"use client";

declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

type AffiliateButtonProps = {
  href: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  trackingId?: string;
  variant?: "default" | "table" | "detailsSticky";
};

export function AffiliateButton({
  href,
  children = "Book on 12Go",
  fullWidth = false,
  trackingId,
  variant = "default",
}: AffiliateButtonProps) {
  function handleClick() {
    if (!trackingId) return;

    console.log("Affiliate click:", trackingId);

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "affiliate_click",
        click_id: trackingId,
        affiliate_partner: "12go",
        affiliate_url: href,
      });
    }
  }

  const baseClass =
    "inline-flex items-center justify-center font-bold text-white shadow-sm transition";

  const variantClass =
    variant === "table"
      ? "rounded-xl bg-[#0c5a4d] px-3 py-2 text-[12px] font-extrabold"
      : variant === "detailsSticky"
        ? "shrink-0 rounded-2xl bg-[#0c5a4d] px-5 py-4 text-sm font-extrabold shadow-lg shadow-black/10"
        : "rounded-full bg-[#064e45] px-5 py-3 text-sm hover:bg-[#033b35]";

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={handleClick}
      className={`${baseClass} ${variantClass} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </a>
  );
}

