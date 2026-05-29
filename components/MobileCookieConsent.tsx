import Link from "next/link";
import Script from "next/script";

export const cookieConsentStorageKey = "thailand-transfers-cookie-consent";
export const cookieConsentAcceptedEvent =
  "thailand-transfers-cookie-consent-accepted";

type MobileCookieConsentProps = {
  gtmId?: string;
};

export function MobileCookieConsent({ gtmId }: MobileCookieConsentProps) {
  const consentConfig = JSON.stringify({
    key: cookieConsentStorageKey,
    event: cookieConsentAcceptedEvent,
    gtmId: gtmId ?? "",
  });

  return (
    <>
      <div
        id="mobile-cookie-consent"
        hidden
        className="fixed inset-x-3 bottom-[calc(7.75rem+env(safe-area-inset-bottom))] z-[60] grid grid-cols-[1fr_auto] items-center gap-2 rounded-[18px] border border-[#e7e2d8] bg-white p-2.5 shadow-2xl shadow-black/20 lg:hidden"
      >
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
          id="mobile-cookie-consent-accept"
          type="button"
          className="min-h-10 rounded-2xl bg-[#0c5a4d] px-4 py-2 text-xs font-extrabold text-white"
        >
          Accept
        </button>
      </div>

      <Script id="mobile-cookie-consent-script" strategy="afterInteractive">
        {`
          (() => {
            const config = ${consentConfig};
            const banner = document.getElementById("mobile-cookie-consent");
            const acceptButton = document.getElementById("mobile-cookie-consent-accept");

            if (!banner || !acceptButton) return;

            const runWhenIdle = (callback) => {
              if ("requestIdleCallback" in window) {
                window.requestIdleCallback(callback, { timeout: 2500 });
                return;
              }

              window.setTimeout(callback, 1500);
            };

            const loadGtm = () => {
              if (!config.gtmId || window.__ttgGtmLoaded) return;

              window.__ttgGtmLoaded = true;
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
              });

              const script = document.createElement("script");
              script.async = true;
              script.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(config.gtmId);
              document.head.appendChild(script);
            };

            const hasAccepted = () => {
              try {
                return window.localStorage.getItem(config.key) === "accepted";
              } catch {
                return false;
              }
            };

            if (hasAccepted()) {
              runWhenIdle(loadGtm);
              return;
            }

            banner.hidden = false;

            acceptButton.addEventListener("click", () => {
              try {
                window.localStorage.setItem(config.key, "accepted");
              } catch {}

              banner.hidden = true;
              window.dispatchEvent(new Event(config.event));
              runWhenIdle(loadGtm);
            });
          })();
        `}
      </Script>
    </>
  );
}
