import { BadgeDollarSign, ShieldCheck, TriangleAlert } from "lucide-react";
import { Container } from "./Container";

const helpItems = [
  {
    title: "Safest option first",
    text: "We start with the route choice that fits tired arrivals, luggage and pickup clarity.",
    icon: ShieldCheck,
  },
  {
    title: "Cheap backup",
    text: "Then we show the sensible lower-cost option when timing and luggage still work.",
    icon: BadgeDollarSign,
  },
  {
    title: "What to avoid",
    text: "We flag risky pickup situations, late arrivals and pressure from random drivers.",
    icon: TriangleAlert,
  },
];

export function HomeHelp() {
  return (
    <section className="bg-white py-8 lg:py-10">
      <Container>
        <div className="mb-5">
          <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
            How we help
          </p>
          <h2 className="text-[26px] font-extrabold tracking-normal text-[#10201d] lg:text-[30px]">
            Transfer decisions without the noise
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {helpItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex gap-3 rounded-[18px] border border-[#e7e2d8] bg-[#fbfaf7] p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0c5a4d] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold leading-snug text-[#10201d]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-5 text-[#4b5d58]">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
