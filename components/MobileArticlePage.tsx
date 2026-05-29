import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MobileBottomNav } from "@/components/MobileBottomNav";

type MobileArticlePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  backHref: string;
  ctaHref?: string;
  ctaTrackingId?: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

export function MobileArticlePage({
  eyebrow,
  title,
  intro,
  backHref,
  ctaHref,
  ctaTrackingId,
  sections,
}: MobileArticlePageProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d]">
      <section className="mx-auto max-w-md px-5 py-6 lg:hidden">
        <Link
          href={backHref}
          className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0c5a4d] bg-white px-4 py-2 text-sm font-extrabold text-[#0c5a4d]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="rounded-[8px] border border-[#e6ddce] bg-white p-5 shadow-[0_18px_45px_rgba(21,37,31,0.12)]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-[30px] font-black leading-tight tracking-normal">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#4b5d58]">{intro}</p>
        </div>

        <div className="mt-4 grid gap-4">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[8px] border border-[#e6ddce] bg-white p-4 shadow-[0_16px_38px_rgba(21,37,31,0.08)]"
            >
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-[#10201d]">
                    {section.title}
                  </h2>
                  <div className="mt-2 grid gap-2">
                    {section.body.map((item) => (
                      <div key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                        <p className="text-xs leading-5 text-slate-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {ctaHref ? (
          <div className="mt-4 rounded-[8px] border border-[#e6ddce] bg-white p-4 shadow-[0_16px_38px_rgba(21,37,31,0.08)]">
            <AffiliateButton
              href={ctaHref}
              trackingId={ctaTrackingId}
              fullWidth
            >
              Check final price and ticket rules
            </AffiliateButton>
            <AffiliateDisclosure className="mt-3 text-center" />
          </div>
        ) : null}
      </section>

      <section className="hidden min-h-screen items-center justify-center bg-[#064e45] p-8 text-center text-white lg:flex">
        <div className="max-w-xl">
          <h1 className="text-4xl font-black">{title}</h1>
          <p className="mt-4 text-white/75">
            This guide is optimized for the mobile route experience.
          </p>
        </div>
      </section>

      <MobileBottomNav activeLabel="Guides" />
    </main>
  );
}
