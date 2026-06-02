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

const contactEmail = "bangkokpattayabus@gmail.com";

function PolicyParagraph({ text }: { text: string }) {
  if (text === `Email: ${contactEmail}`) {
    return (
      <p>
        Email:{" "}
        <span
          className="font-extrabold text-[#0c5a4d] underline-offset-4 hover:underline"
        >
          {contactEmail}
        </span>
      </p>
    );
  }

  return <p>{text}</p>;
}

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
              <PolicyParagraph key={paragraph} text={paragraph} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function CorrectionForm() {
  return (
    <section
      className="mt-5 overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
    >
      <div className="border-b border-[#e7e2d8] bg-[#fbfaf7] px-4 py-3">
        <h2 className="text-[17px] font-extrabold text-[#10201d]">
          Report outdated info
        </h2>
      </div>

      <div className="grid gap-3 p-4">
        <div className="rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] px-4 py-3">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
            Contact
          </p>
          <p className="mt-1 text-sm font-extrabold text-[#10201d]">
            {contactEmail}
          </p>
        </div>
        <div className="grid gap-2 text-sm leading-6 text-[#4b5d58]">
          <p>Include the route URL, issue type and what changed.</p>
          <p>
            Useful issue types: pickup point, schedule, ferry info, price range,
            luggage rule or operator note.
          </p>
        </div>
      </div>
    </section>
  );
}

function LegalNav() {
  return (
    <nav className="mt-5 flex flex-wrap gap-2 pb-1">
      {legalLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="max-w-full rounded-full bg-white px-3 py-2 text-center text-xs font-extrabold leading-4 text-[#0c5a4d] shadow-sm"
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
              alt="Thailand Transfer Guide trust and policy guide"
              fill
              priority
              sizes="(max-width: 448px) calc(100vw - 32px), 416px"
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
