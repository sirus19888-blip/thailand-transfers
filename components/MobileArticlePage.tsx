import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { SourceFreshnessPanel } from "@/components/SourceFreshnessPanel";
import { affiliateMainCta } from "@/data/ctaCopy";
import type { RouteSourceFreshness } from "@/data/routeIntelligence";

type ArticleSection = {
  title: string;
  body: string[];
};

type MobileArticlePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  backHref: string;
  ctaHref?: string;
  ctaTrackingId?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  sourceFreshness?: RouteSourceFreshness;
  sections: ArticleSection[];
};

function ArticleSections({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="grid gap-4">
      {sections.map((section) => (
        <section
          key={section.title}
          className="overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
        >
          <div className="border-b border-[#e7e2d8] bg-[#fbfaf7] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0c5a4d] shadow-sm">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h2 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
                {section.title}
              </h2>
            </div>
          </div>

          <div className="grid gap-2 px-4 py-4">
            {section.body.map((item) => (
              <div key={item} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                <p className="text-xs leading-5 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function MobileArticlePage({
  eyebrow,
  title,
  intro,
  backHref,
  ctaHref,
  ctaTrackingId,
  heroImageSrc = "/assets/hero/hero-mobile.png",
  heroImageAlt = "Thailand transfer guide",
  sourceFreshness,
  sections,
}: MobileArticlePageProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="mx-auto max-w-md px-4 py-5 lg:max-w-5xl lg:px-8 lg:py-12">
        <div className="flex items-center justify-between lg:hidden">
          <Link
            href={backHref}
            aria-label="Back"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-4 w-4 text-[#0c5a4d]" />
              <p className="text-[16px] font-extrabold text-[#10201d]">
                Route guide
              </p>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Checked notes before booking
            </p>
          </div>

          <div
            aria-label="Guide status"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ShieldCheck className="h-5 w-5" />
          </div>
        </div>

        <Link
          href={backHref}
          className="mb-6 hidden w-fit items-center gap-2 text-sm font-extrabold text-[#0c5a4d] lg:inline-flex"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5 lg:mt-0 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:p-5">
          <div className="relative h-44 overflow-hidden rounded-[1.15rem] bg-[#10201d] lg:h-full lg:min-h-[360px]">
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/88 via-[#10201d]/22 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 lg:inset-x-6 lg:bottom-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f0c96a]">
                {eyebrow}
              </p>
              <h1 className="mt-1 text-[27px] font-extrabold leading-tight text-white lg:text-[44px]">
                {title}
              </h1>
              <p className="mt-2 text-xs font-medium leading-5 text-white/82 lg:text-sm lg:leading-6">
                {intro}
              </p>
            </div>
          </div>

          <div className="mt-4 lg:mt-0 lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
                What this guide covers
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {sections.slice(0, 4).map((section) => (
                  <div
                    key={section.title}
                    className="min-h-16 rounded-2xl bg-[#f8f4ec] px-3 py-2"
                  >
                    <MapPin className="h-4 w-4 text-[#0c5a4d]" />
                    <p className="mt-1 text-[12px] font-extrabold leading-snug text-[#10201d]">
                      {section.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {ctaHref ? (
              <div className="mt-4 rounded-2xl bg-[#fbfaf7] p-3">
                <AffiliateButton
                  href={ctaHref}
                  trackingId={ctaTrackingId}
                  fullWidth
                >
                  {affiliateMainCta}
                </AffiliateButton>
                <AffiliateDisclosure className="mt-3 text-center" />
              </div>
            ) : (
              <p className="mt-4 rounded-2xl bg-[#fbfaf7] px-3 py-3 text-xs leading-5 text-slate-500">
                Save this guide before leaving arrivals, the pier or your hotel.
                Final ticket rules are handled by the partner/operator.
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <ArticleSections sections={sections} />
        </div>

        {sourceFreshness ? (
          <section className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <h2 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
              Sources & freshness
            </h2>
            <SourceFreshnessPanel
              freshness={sourceFreshness}
              className="mt-3"
            />
          </section>
        ) : null}
      </section>

      <div className="lg:hidden">
        <Footer />
      </div>
      <MobileBottomNav activeLabel="Guides" />
    </main>
  );
}
