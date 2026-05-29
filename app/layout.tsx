import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { DesktopComingSoon } from "@/components/DesktopComingSoon";
import { GlobalStructuredData } from "@/components/StructuredData";
import { LazyGoogleTagManager } from "@/components/LazyGoogleTagManager";
import { MobileCookieConsent } from "@/components/MobileCookieConsent";
import { siteName, siteUrl } from "./site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
    url: "/",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalStructuredData />
        <div className="contents lg:hidden">{children}</div>
        <LazyGoogleTagManager gtmId={gtmId} />
        <MobileCookieConsent />
        <div className="hidden lg:flex">
          <DesktopComingSoon />
        </div>
      </body>
    </html>
  );
}
