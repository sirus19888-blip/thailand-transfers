import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { legalLinks } from "@/data/legalPages";

type PolicySection = {
  title: string;
  body: string[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: PolicySection[];
  showCorrectionForm?: boolean;
};

function SectionCards({ sections }: { sections: PolicySection[] }) {
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
              <h2 className="text-[17px] font-extrabold leading-snug text-[#10201d] lg:text-xl">
                {section.title}
              </h2>
            </div>
          </div>

          <div className="grid gap-3 px-4 py-4 text-sm leading-6 text-[#4b5d58]">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function CorrectionForm() {
  return (
    <form
      action="mailto:hello@thailandtransferguide.com"
      method="post"
      encType="text/plain"
      className="mt-5 overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
    >
      <div className="border-b border-[#e7e2d8] bg-[#fbfaf7] px-4 py-3">
        <h2 className="text-[17px] font-extrabold text-[#10201d]">
          Report outdated info
        </h2>
      </div>

      <div className="grid gap-3 p-4">
        <input
          name="route"
          placeholder="Route or page URL"
          className="min-h-12 rounded-2xl border border-[#e7e2d8] bg-white px-4 text-sm outline-none"
        />
        <select
          name="issue"
          className="min-h-12 rounded-2xl border border-[#e7e2d8] bg-white px-4 text-sm outline-none"
          defaultValue="pickup point"
        >
          <option value="pickup point">Pickup point</option>
          <option value="schedule">Schedule</option>
          <option value="ferry info">Ferry info</option>
          <option value="price range">Price range</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="details"
          placeholder="What should we check?"
          className="min-h-28 rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3 text-sm outline-none"
        />
        <button
          type="submit"
          className="min-h-12 rounded-2xl bg-[#0c5a4d] px-5 py-3 text-sm font-extrabold text-white shadow-sm"
        >
          Send correction
        </button>
      </div>
    </form>
  );
}

function LegalNav() {
  return (
    <nav className="mt-5 flex gap-2 overflow-x-auto pb-1">
      {legalLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="shrink-0 rounded-full bg-white px-3 py-2 text-xs font-extrabold text-[#0c5a4d] shadow-sm"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export function PolicyPage({
  eyebrow,
  title,
  intro,
  sections,
  showCorrectionForm = false,
}: PolicyPageProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="mx-auto max-w-md px-4 py-5 lg:hidden">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Back to home"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <FileText className="h-4 w-4 text-[#0c5a4d]" />
              <p className="text-[16px] font-extrabold text-[#10201d]">
                {eyebrow}
              </p>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Independent transfer guide
            </p>
          </div>

          <div
            aria-label="Trust note"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10201d] shadow-sm"
          >
            <ShieldCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
          <div className="relative mb-4 h-44 overflow-hidden rounded-[1.15rem] bg-[#10201d]">
            <Image
              src="/assets/hero/hero-mobile.png"
              alt="Thailand Transfers trust and policy guide"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 390px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/88 via-[#10201d]/24 to-transparent" />
            <div className="absolute inset-x-4 bottom-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f0c96a]">
                {eyebrow}
              </p>
              <h1 className="mt-1 text-[27px] font-extrabold leading-tight text-white">
                {title}
              </h1>
              <p className="mt-2 text-xs font-medium leading-5 text-white/82">
                {intro}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <SectionCards sections={sections} />
        </div>

        {showCorrectionForm ? <CorrectionForm /> : null}

        <LegalNav />
      </section>

      <section className="hidden px-5 py-14 lg:block">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl text-5xl font-black leading-tight tracking-normal">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4b5d58]">
              {intro}
            </p>

            <div className="mt-8">
              <SectionCards sections={sections} />
            </div>

            {showCorrectionForm ? <CorrectionForm /> : null}

            <LegalNav />
          </div>
        </Container>
      </section>

      <MobileBottomNav activeLabel="Guides" />
    </main>
  );
}
