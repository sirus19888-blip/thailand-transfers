import { Clock3, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/Container";
import {
  getArrivalTimeLabel,
  getPassengerLabel,
  getPersonalizedOptionOrder,
  getPersonalizedPassengerAdvice,
  getPersonalizedTimingAdvice,
} from "@/data/routeIntelligence";
import type { RoutePageData } from "@/data/routePages";

type DesktopPersonalizedTripSummaryProps = {
  route: RoutePageData;
  arrivalTime?: string;
  passengers?: string;
};

export function DesktopPersonalizedTripSummary({
  route,
  arrivalTime,
  passengers,
}: DesktopPersonalizedTripSummaryProps) {
  const arrivalLabel = getArrivalTimeLabel(arrivalTime);
  const hasInput = Boolean(arrivalLabel || passengers);

  if (!hasInput) return null;

  const passengerLabel = getPassengerLabel(passengers);
  const recommendedOption =
    getPersonalizedOptionOrder(route, arrivalTime, passengers)[0] ??
    route.options[0];

  return (
    <section className="border-y border-[#e7e2d8] bg-[#fbfaf7] py-6">
      <Container>
        <div className="grid gap-4 rounded-[24px] border border-[#d8eadf] bg-white p-5 shadow-lg shadow-black/5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef8f3] text-[#0c5a4d]">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c5a4d]">
                Your selected trip
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-normal text-[#10201d]">
                Start with {recommendedOption.name}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#30465a]">
                {getPersonalizedTimingAdvice(route, arrivalTime)}
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[18px] bg-[#f4fbf7] px-4 py-3">
              <div className="flex items-center gap-2 text-[#0c5a4d]">
                <Clock3 className="h-4 w-4" />
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]">
                  Timing
                </p>
              </div>
              <p className="mt-1 text-sm font-extrabold text-[#10201d]">
                {arrivalLabel ?? "Selected timing"}
              </p>
            </div>

            <div className="rounded-[18px] bg-[#f4fbf7] px-4 py-3">
              <div className="flex items-center gap-2 text-[#0c5a4d]">
                <Users className="h-4 w-4" />
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]">
                  Travelers
                </p>
              </div>
              <p className="mt-1 text-sm font-extrabold text-[#10201d]">
                {passengerLabel}
              </p>
            </div>

            <p className="md:col-span-2 text-sm leading-6 text-[#30465a]">
              {getPersonalizedPassengerAdvice(route, passengers)}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
