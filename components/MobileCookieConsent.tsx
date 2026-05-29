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
    <div className="fixed inset-x-3 bottom-[calc(7.75rem+env(safe-area-inset-bottom))] z-[60] grid grid-cols-[1fr_auto] items-center gap-2 rounded-[18px] border border-[#e7e2d8] bg-white p-2.5 shadow-2xl shadow-black/20 lg:hidden">
      <div>
        <p className="text-[12px] font-extrabold text-[#10201d]">
          Privacy-friendly analytics
        </p>
        <Link
          href="/cookie-policy"
          className="mt-0.5 inline-flex text-[11px] font-semibold leading-4 text-[#0c5a4d]"
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
        className="min-h-10 rounded-2xl bg-[#0c5a4d] px-4 py-2 text-xs font-extrabold text-white"
      >
        Accept
      </button>
    </div>
  );
}
