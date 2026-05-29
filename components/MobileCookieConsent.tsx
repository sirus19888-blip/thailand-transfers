"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "thailand-transfers-cookie-consent";

export function MobileCookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setIsVisible(window.localStorage.getItem(storageKey) !== "accepted");
    }, 0);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-3 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-[60] rounded-[18px] border border-[#e7e2d8] bg-white p-3 shadow-2xl shadow-black/20 lg:hidden">
      <p className="text-[12px] font-extrabold text-[#10201d]">
        Privacy-friendly analytics
      </p>
      <p className="mt-1 text-[11px] leading-4 text-slate-600">
        We measure anonymous route decisions and partner clicks. Affiliate
        tracking is explained in our Cookie Policy.
      </p>
      <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
        <Link
          href="/cookie-policy"
          className="flex min-h-11 items-center justify-center rounded-2xl bg-[#f8f4ec] px-3 py-2 text-xs font-extrabold text-[#0c5a4d]"
        >
          Cookie Policy
        </Link>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(storageKey, "accepted");
            setIsVisible(false);
          }}
          className="min-h-11 rounded-2xl bg-[#0c5a4d] px-4 py-2 text-xs font-extrabold text-white"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
