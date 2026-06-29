import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GlobalStructuredData } from "@/components/StructuredData";
import { LazyGoogleTagManager } from "@/components/LazyGoogleTagManager";
import { MobileCookieConsent } from "@/components/MobileCookieConsent";
import { cookieConsentStorageKey } from "@/components/cookieConsentConfig";
import { siteName, siteUrl } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  appleWebApp: {
    capable: true,
    title: siteName,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Compare airport transfers in Thailand, including buses, taxis, shared vans, and private airport pickup options.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName,
    url: `${siteUrl}/`,
    title: siteName,
    description:
      "Compare airport transfers in Thailand, including buses, taxis, shared vans, and private airport pickup options.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Compare airport transfers in Thailand, including buses, taxis, shared vans, and private airport pickup options.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const encodedGtmId = gtmId ? encodeURIComponent(gtmId) : undefined;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
              wait_for_update: 500
            });

            try {
              if (window.localStorage.getItem('${cookieConsentStorageKey}') === 'accepted') {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  analytics_storage: 'granted'
                });
              }
            } catch (error) {}
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {encodedGtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodedGtmId}`}
              height={0}
              width={0}
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <GlobalStructuredData />
        <div className="contents">{children}</div>
        <LazyGoogleTagManager gtmId={gtmId} />
        <MobileCookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
