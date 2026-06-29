"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  cookieConsentAcceptedEvent,
  cookieConsentStorageKey,
} from "@/components/cookieConsentConfig";

export {
  cookieConsentAcceptedEvent,
  cookieConsentStorageKey,
} from "@/components/cookieConsentConfig";

type ConsentChoice = "accepted" | "denied";

type ConsentUpdate = {
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  analytics_storage: "granted" | "denied";
};

type ConsentWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (command: "consent", action: "update", update: ConsentUpdate) => void;
};

const grantedConsent: ConsentUpdate = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
};

const deniedConsent: ConsentUpdate = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

function updateConsent(choice: ConsentChoice) {
  const consentWindow = window as ConsentWindow;
  const consentUpdate = choice === "accepted" ? grantedConsent : deniedConsent;

  consentWindow.dataLayer = consentWindow.dataLayer || [];

  if (typeof consentWindow.gtag === "function") {
    consentWindow.gtag("consent", "update", consentUpdate);
    return;
  }

  consentWindow.dataLayer.push(["consent", "update", consentUpdate]);
}

export function MobileCookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      try {
        const storedChoice = window.localStorage.getItem(
          cookieConsentStorageKey,
        );

        setIsVisible(storedChoice !== "accepted" && storedChoice !== "denied");
      } catch (error) {
        setIsVisible(true);
      }
    }, 0);
  }, []);

  if (!isVisible) return null;

  const handleChoice = (choice: ConsentChoice) => {
    try {
      window.localStorage.setItem(cookieConsentStorageKey, choice);
    } catch (error) {}

    updateConsent(choice);

    if (choice === "accepted") {
      window.dispatchEvent(new Event(cookieConsentAcceptedEvent));
    }

    setIsVisible(false);
  };

  return (
    <div
      aria-live="polite"
      className="fixed inset-x-3 top-[calc(0.75rem+env(safe-area-inset-top))] z-[70] mx-auto grid max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-[14px] border border-[#d7eadf] bg-white/96 p-2.5 shadow-[0_18px_50px_rgba(16,32,29,0.18)] backdrop-blur lg:top-auto lg:bottom-5"
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
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleChoice("denied")}
          className="min-h-8 rounded-[12px] border border-[#0c5a4d] bg-white px-3 py-1.5 text-[11px] font-extrabold text-[#0c5a4d]"
        >
          Reject
        </button>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="min-h-8 rounded-[12px] bg-[#0c5a4d] px-3 py-1.5 text-[11px] font-extrabold text-white"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
