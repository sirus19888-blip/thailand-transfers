import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";

const checklistItems = [
  "Clear immigration",
  "Collect baggage",
  "Find pickup point",
  "Check ticket rules",
];

export function LandingSteps() {
  return (
    <section id="travel-tips" className="bg-[#fbfaf7] py-8 lg:py-10">
      <Container>
        <div className="rounded-[18px] border border-[#e7e2d8] bg-white p-4 shadow-sm lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8 lg:p-5">
          <div>
            <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              After landing
            </p>

            <h2 className="text-[26px] font-extrabold tracking-normal text-[#10201d] lg:text-[30px]">
              After landing checklist
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#30465a]">
              Follow the airport flow first, then check the exact pickup point
              and ticket rules before leaving the terminal.
            </p>

            <Link
              href="/guides/bkk-airport-pickup-level-1-gate-8"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#0c5a4d] bg-white px-4 py-2.5 text-sm font-extrabold text-[#0c5a4d]"
            >
              See airport arrival steps
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-4 grid gap-2 lg:mt-0">
            {checklistItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-[#f8f4ec] px-3 py-3"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0c5a4d]" />
                <p className="text-sm font-extrabold text-[#10201d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
