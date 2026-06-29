"use client";

import Script from "next/script";

type LazyGoogleTagManagerProps = {
  gtmId?: string;
};

export function LazyGoogleTagManager({ gtmId }: LazyGoogleTagManagerProps) {
  if (!gtmId) {
    return null;
  }

  const encodedGtmId = encodeURIComponent(gtmId);

  return (
    <>
      <Script id="gtm-data-layer" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
          });
        `}
      </Script>
      <Script
        id="gtm-script"
        src={`https://www.googletagmanager.com/gtm.js?id=${encodedGtmId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
