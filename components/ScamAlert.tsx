import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";

export function ScamAlert() {
  return (
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

              <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#10201d]">
                Avoid airport transfer scams
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-sm leading-6 text-[#30465a]">
            <p>
              After landing, some travelers are approached by unofficial drivers
              or people offering “special prices”. This can be stressful,
              especially after a long flight.
            </p>

            <p>
              Use official counters, pre-booked services or trusted booking
              partners. Always check your pickup point and price before you leave
              the airport.
            </p>

            <div className="flex gap-3 rounded-2xl border border-[#e7e2d8] bg-[#fbfaf7] p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />

              <div>
                <p className="text-sm font-extrabold text-[#10201d]">
                  Simple rule:
                </p>

                <p className="mt-1 text-sm leading-6 text-[#30465a]">
                  If someone approaches you randomly and pressures you to decide
                  quickly, slow down and check your options first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
