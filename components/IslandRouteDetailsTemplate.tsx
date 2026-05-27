import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowLeft,
  Bus,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import type { RoutePageData } from "@/data/routePages";

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
};

type QuickFact = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

type IslandRouteDetailsTemplateProps = {
  route: RoutePageData;
  backHref: string;
  mobileTitle: string;
  mobileSubtitle: string;
  overviewImage: string;
  overviewAlt: string;
  overviewContent?: ReactNode;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  stepsHeading: string;
  stepsIntro: string;
  warningMobileTitle: string;
  warningMobileText: string;
  warningTitle: string;
  warningParagraphs: string[];
  simpleRule: string;
  practicalTitle: string;
  practicalIntro: string;
  faqTitle: string;
  readyTitle: string;
  readyText: string;
  stickyLabel: string;
  mobileSelectedOptionId?: string;
  primaryOptionId: string;
  finalOptionId: string;
  steps: Step[];
  quickFacts: QuickFact[];
  tips: string[];
  faqs: Faq[];
};

export function IslandRouteDetailsTemplate({
  route,
  backHref,
  mobileTitle,
  mobileSubtitle,
  overviewImage,
  overviewAlt,
  overviewContent,
  heroTitle,
  heroDescription,
  heroImage,
  heroAlt,
  stepsHeading,
  stepsIntro,
  warningMobileTitle,
  warningMobileText,
  warningTitle,
  warningParagraphs,
  simpleRule,
  practicalTitle,
  practicalIntro,
  faqTitle,
  readyTitle,
  readyText,
  stickyLabel,
  mobileSelectedOptionId,
  primaryOptionId,
  finalOptionId,
  steps,
  quickFacts,
  tips,
  faqs,
}: IslandRouteDetailsTemplateProps) {
  const primaryOption =
    route.options.find((option) => option.id === primaryOptionId) ??
    route.options[0];
  const finalOption =
    route.options.find((option) => option.id === finalOptionId) ??
    primaryOption;
  const mobileSelectedOption =
    route.options.find((option) => option.id === mobileSelectedOptionId) ??
    primaryOption;
  const mobileQuickFacts =
    mobileSelectedOptionId && mobileSelectedOption
      ? quickFacts.map((fact, index) => {
          if (index === 0) {
            return {
              ...fact,
              title: "Selected option",
              text: `${mobileSelectedOption.name}: ${mobileSelectedOption.duration}. ${mobileSelectedOption.bestFor}.`,
            };
          }

          if (index === 1) {
            return {
              ...fact,
              title: "Pickup point",
              text: mobileSelectedOption.pickup,
            };
          }

          return fact;
        })
      : quickFacts;

  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <section className="min-h-screen bg-[#fbfaf7] pb-32 lg:hidden">
        <div className="mx-auto max-w-md px-4 py-5">
          <div className="flex items-start justify-between gap-3">
            <Link
              href={backHref}
              aria-label="Back to transfer options"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div className="min-w-0 flex-1 text-center">
              <div className="mx-auto flex items-center justify-center gap-2">
                <Bus className="h-4 w-4 text-[#0c5a4d]" />
                <h1 className="truncate text-[16px] font-extrabold text-[#10201d]">
                  {mobileTitle}
                </h1>
              </div>

              <p className="mt-1 text-xs font-medium text-slate-500">
                {mobileSubtitle}
              </p>
            </div>

            <div
              aria-label="Route guide"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
            >
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-5 flex gap-6 overflow-x-auto border-b border-[#e7e2d8] text-sm font-bold text-slate-500">
            <a
              href="#mobile-route-overview"
              className="border-b-2 border-[#0c5a4d] pb-3 text-[#0c5a4d]"
            >
              Overview
            </a>
            <a href="#mobile-route-details" className="pb-3">
              Details
            </a>
            <a href="#mobile-route-tips" className="pb-3">
              Tips
            </a>
            <a href="#mobile-route-faqs" className="pb-3">
              FAQs
            </a>
          </div>

          <div
            id="mobile-route-overview"
            className="mt-4 overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
          >
            <div className="relative aspect-[16/10]">
              {overviewContent ?? (
                <Image
                  src={overviewImage}
                  alt={overviewAlt}
                  fill
                  priority
                  className="object-cover"
                />
              )}
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            {mobileQuickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.title}
                  className="rounded-[1.25rem] border border-[#e7e2d8] bg-white p-4 shadow-sm"
                >
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-[#10201d]">
                        {fact.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {fact.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            id="mobile-route-details"
            className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
          >
            <h2 className="text-lg font-extrabold text-[#10201d]">
              {stepsHeading}
            </h2>

            <div className="mt-4 space-y-3">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c5a4d] text-xs font-bold text-white">
                    {step.number}
                  </div>

                  <div>
                    <p className="text-sm font-bold leading-5 text-[#10201d]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="mobile-route-tips"
            className="mt-4 rounded-[1.5rem] border border-red-100 bg-red-50 p-4"
          >
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-red-500">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-base font-extrabold text-red-700">
                  {warningMobileTitle}
                </h2>

                <p className="mt-1 text-sm leading-6 text-red-700/80">
                  {warningMobileText}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <h2 className="text-lg font-extrabold text-[#10201d]">
              Practical notes
            </h2>

            <div className="mt-3 space-y-2">
              {tips.slice(0, 4).map((tip) => (
                <div key={tip} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                  <p className="text-xs leading-5 text-slate-600">{tip}</p>
                </div>
              ))}
            </div>

            <Link
              href={backHref}
              className="mt-4 flex w-full items-center justify-center rounded-2xl border border-[#0c5a4d] bg-white px-5 py-3 text-sm font-extrabold text-[#0c5a4d]"
            >
              Back to transfer options
            </Link>
          </div>

          <div
            id="mobile-route-faqs"
            className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
          >
            <h2 className="text-lg font-extrabold text-[#10201d]">FAQs</h2>

            <div className="mt-3 space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-3"
                >
                  <p className="text-sm font-bold text-[#10201d]">
                    {faq.question}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e7e2d8] bg-white/95 p-3 shadow-2xl backdrop-blur">
          <div className="mx-auto flex max-w-md items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-500">
                {stickyLabel}
                {mobileSelectedOptionId ? `: ${mobileSelectedOption.name}` : ""}
              </p>
              <p className="text-lg font-extrabold text-[#10201d]">
                Live price
                <span className="ml-1 text-xs font-medium text-slate-500">
                  on 12Go
                </span>
              </p>
            </div>

            <AffiliateButton
              href={mobileSelectedOption?.affiliateUrl ?? route.mainAffiliateUrl}
              trackingId={mobileSelectedOption?.trackingId}
              variant="detailsSticky"
            >
              See live price
            </AffiliateButton>
          </div>
        </div>
      </section>

      <div className="hidden lg:block">
        <Header />

        <section className="bg-[#f8f4ec] py-8 lg:py-16">
          <Container>
            <Link
              href={backHref}
              className="mb-6 inline-flex text-sm font-bold text-[#064e45] hover:underline"
            >
              Back to transfer options
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                  Route details
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#10201d] min-[390px]:text-4xl lg:text-6xl">
                  {heroTitle}
                </h1>

                <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                  {heroDescription}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AffiliateButton
                    href={primaryOption?.affiliateUrl ?? route.mainAffiliateUrl}
                    trackingId={primaryOption?.trackingId}
                  >
                    Check live prices on 12Go
                  </AffiliateButton>

                  <Link
                    href={backHref}
                    className="inline-flex items-center justify-center rounded-full border border-[#064e45] bg-white px-7 py-4 text-sm font-bold text-[#064e45] transition hover:bg-[#f8f4ec]"
                  >
                    Compare options
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#e7e2d8] bg-white shadow-xl shadow-black/5">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={heroImage}
                    alt={heroAlt}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 lg:py-12">
          <Container>
            <div className="mb-6 max-w-3xl">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                Route steps
              </p>

              <h2 className="text-[28px] font-extrabold text-[#10201d]">
                {stepsHeading}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#30465a]">
                {stepsIntro}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <p className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0c5a4d] text-[12px] font-extrabold text-white">
                      {step.number}
                    </p>

                    <h3 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#30465a]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f8f4ec] py-10 lg:py-12">
          <Container>
            <div className="grid gap-6 rounded-[28px] border border-[#e7e2d8] bg-white p-6 shadow-xl shadow-black/5 lg:grid-cols-[0.8fr_1.2fr] lg:p-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <AlertTriangle className="h-5 w-5" />
                </div>

                <div>
                  <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                    Travel warning
                  </p>

                  <h2 className="text-[28px] font-extrabold text-[#10201d]">
                    {warningTitle}
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-6 text-[#30465a]">
                {warningParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="flex gap-3 rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />

                  <div>
                    <p className="text-sm font-extrabold text-[#10201d]">
                      Simple rule:
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#30465a]">
                      {simpleRule}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 lg:py-12">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                  Practical tips
                </p>

                <h2 className="text-[28px] font-extrabold text-[#10201d]">
                  {practicalTitle}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#30465a]">
                  {practicalIntro}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {tips.map((tip) => (
                  <div
                    key={tip}
                    className="flex gap-3 rounded-[20px] border border-[#e7e2d8] bg-[#fbfaf7] p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </div>

                    <p className="text-sm leading-6 text-[#30465a]">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 lg:py-16">
          <Container>
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                FAQ
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#10201d] sm:text-4xl">
                {faqTitle}
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[2rem] border border-[#e7e2d8] bg-[#fbfaf7] p-5"
                >
                  <h3 className="text-lg font-bold text-[#10201d]">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#064e45] py-16 text-white lg:py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f0c96a]">
                  Ready to compare?
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {readyTitle}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  {readyText}
                </p>
              </div>

              <AffiliateButton
                href={finalOption?.affiliateUrl ?? route.mainAffiliateUrl}
                trackingId={finalOption?.trackingId}
              >
                Check live prices on 12Go
              </AffiliateButton>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
}
