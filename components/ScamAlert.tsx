import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";

type ScamAlertProps = {
  title?: string;
  warnings?: string[];
};

export function ScamAlert({
  title = "Avoid airport transfer scams",
  warnings,
}: ScamAlertProps) {
  const warningText =
    warnings?.[0] ??
    "Avoid random drivers inside the terminal. Use official counters, pre-booked services or trusted booking partners.";
  const simpleRule =
    warnings?.[1] ??
    "If someone approaches you randomly and pressures you to decide quickly, slow down and check your options first.";

  return (
    <section className="bg-white py-8 lg:py-10">
      <Container>
        <div className="grid gap-4 rounded-[18px] border border-[#e7e2d8] bg-[#fffdf8] p-4 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-5">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
              <AlertTriangle className="h-5 w-5" />
            </div>

            <div>
              <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#8b6a20]">
                Travel warning
              </p>

              <h2 className="text-[26px] font-extrabold tracking-normal text-[#10201d] lg:text-[30px]">
                {title}
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-sm leading-6 text-[#30465a]">
            <p>
              {warningText}
            </p>

            <div className="flex gap-3 rounded-2xl border border-[#e7e2d8] bg-white p-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />

              <div>
                <p className="text-sm font-extrabold text-[#10201d]">
                  Simple rule:
                </p>

                <p className="mt-1 text-sm leading-5 text-[#30465a]">
                  {simpleRule}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
