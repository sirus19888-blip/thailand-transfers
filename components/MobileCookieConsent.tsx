"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const cookieConsentStorageKey = "thailand-transfers-cookie-consent";
export const cookieConsentAcceptedEvent =
  "thailand-transfers-cookie-consent-accepted";

export function MobileCookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setIsVisible(
        window.localStorage.getItem(cookieConsentStorageKey) !== "accepted",
      );
    }, 0);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-live="polite"
      className="fixed inset-x-3 top-[calc(0.75rem+env(safe-area-inset-top))] z-[70] mx-auto grid max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-[14px] border border-[#d7eadf] bg-white/96 p-2.5 shadow-[0_18px_50px_rgba(16,32,29,0.18)] backdrop-blur lg:hidden"
    >
      <div>
        <p className="text-[11px] font-extrabold leading-4 text-[#10201d]">
          Privacy-friendly analytics.
        </p>
        <Link
          href="/cookie-policy"
          className="mt-0.5 inline-flex text-[10.5px] font-extrabold leading-4 text-[#0c5a4d]"
        >
          Cookie Policy
        </Link>
      </div>
      <button
        type="button"
        onClick={() => {
          window.localStorage.setItem(cookieConsentStorageKey, "accepted");
          window.dispatchEvent(new Event(cookieConsentAcceptedEvent));
          setIsVisible(false);
        }}
        className="min-h-8 rounded-[12px] bg-[#0c5a4d] px-3 py-1.5 text-[11px] font-extrabold text-white"
      >
        Accept
      </button>
    </div>
  );
}
