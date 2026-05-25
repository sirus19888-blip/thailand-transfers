import { CheckCircle2 } from "lucide-react";
import { practicalTips } from "@/data/routes";
import { Container } from "./Container";

export function PracticalTips() {
  return (
    <section id="travel-tips" className="bg-white py-10 lg:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              Practical tips
            </p>

            <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#10201d]">
              Small things that make your transfer easier
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#30465a]">
              These tips help visitors feel safe and prepared before choosing a
              bus, taxi or van.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {practicalTips.map((tip) => (
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
  );
}
