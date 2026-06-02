"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const cookieConsentStorageKey = "thailand-transfers-cookie-consent";
export const cookieConsentAcceptedEvent =
  "thailand-transfers-cookie-consent-accepted";

export function MobileCookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMobileStickyCta, setHasMobileStickyCta] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setIsVisible(
        window.localStorage.getItem(cookieConsentStorageKey) !== "accepted",
      );
    }, 0);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const updateStickyPresence = () => {
      setHasMobileStickyCta(
        Boolean(document.querySelector("[data-mobile-sticky-cta='true']")),
      );
    };
    const observer = new MutationObserver(updateStickyPresence);

    updateStickyPresence();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isVisible]);

  if (!isVisible) return null;

  const bottomOffset = hasMobileStickyCta
    ? "bottom-[calc(8.6rem+env(safe-area-inset-bottom))]"
    : "bottom-[calc(4.25rem+env(safe-area-inset-bottom))]";

  return (
    <div
      className={`fixed inset-x-3 ${bottomOffset} z-[60] mx-auto grid max-w-md grid-cols-[1fr_auto] items-center gap-2 rounded-[16px] border border-[#d7eadf] bg-white/96 p-2 shadow-xl shadow-black/12 backdrop-blur lg:hidden`}
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
        className="min-h-9 rounded-[14px] bg-[#0c5a4d] px-4 py-2 text-[11px] font-extrabold text-white"
      >
        Accept
      </button>
    </div>
  );
}
