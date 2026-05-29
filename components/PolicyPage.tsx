import Link from "next/link";
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

      <section className="px-5 py-7 lg:px-0 lg:py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="mb-5 inline-flex min-h-11 items-center rounded-full border border-[#0c5a4d] px-4 py-2 text-sm font-extrabold text-[#0c5a4d] lg:hidden"
            >
              Back home
            </Link>

            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e] lg:text-sm">
              {eyebrow}
            </p>
            <h1 className="mt-2 text-[34px] font-black leading-tight tracking-normal lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#4b5d58] lg:text-lg lg:leading-8">
              {intro}
            </p>

            <div className="mt-6 grid gap-4">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[8px] border border-[#e6ddce] bg-white p-5 shadow-[0_16px_38px_rgba(21,37,31,0.08)] lg:rounded-[24px] lg:p-6"
                >
                  <h2 className="text-xl font-extrabold text-[#10201d]">
                    {section.title}
                  </h2>
                  <div className="mt-3 grid gap-3 text-sm leading-6 text-[#4b5d58]">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {showCorrectionForm ? (
              <form
                action="mailto:hello@thailandtransferguide.com"
                method="post"
                encType="text/plain"
                className="mt-5 rounded-[8px] border border-[#e6ddce] bg-white p-5 shadow-[0_16px_38px_rgba(21,37,31,0.08)] lg:rounded-[24px]"
              >
                <h2 className="text-xl font-extrabold text-[#10201d]">
                  Report outdated info
                </h2>
                <div className="mt-4 grid gap-3">
                  <input
                    name="route"
                    placeholder="Route or page URL"
                    className="min-h-12 rounded-2xl border border-[#e7e2d8] px-4 text-sm outline-none"
                  />
                  <select
                    name="issue"
                    className="min-h-12 rounded-2xl border border-[#e7e2d8] px-4 text-sm outline-none"
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
                    className="min-h-28 rounded-2xl border border-[#e7e2d8] px-4 py-3 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="min-h-12 rounded-2xl bg-[#0c5a4d] px-5 py-3 text-sm font-extrabold text-white"
                  >
                    Send correction
                  </button>
                </div>
              </form>
            ) : null}

            <nav className="mt-6 flex flex-wrap gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-white px-3 py-2 text-xs font-extrabold text-[#0c5a4d] shadow-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </section>

      <MobileBottomNav activeLabel="Guides" />
    </main>
  );
}
