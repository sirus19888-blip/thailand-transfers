"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  cookieConsentAcceptedEvent,
  cookieConsentStorageKey,
} from "@/components/MobileCookieConsent";

type LazyGoogleTagManagerProps = {
  gtmId?: string;
};

export function LazyGoogleTagManager({ gtmId }: LazyGoogleTagManagerProps) {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    if (!gtmId) return;

    const updateConsent = () => {
      setCanLoad(
        window.localStorage.getItem(cookieConsentStorageKey) === "accepted",
      );
    };

    updateConsent();
    window.addEventListener(cookieConsentAcceptedEvent, updateConsent);

    return () =>
      window.removeEventListener(cookieConsentAcceptedEvent, updateConsent);
  }, [gtmId]);

  if (!gtmId || !canLoad) {
    return null;
  }

  const encodedGtmId = encodeURIComponent(gtmId);

  return (
    <>
      <Script id="gtm-data-layer" strategy="lazyOnload">
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
        strategy="lazyOnload"
      />
    </>
  );
}
