import Image from "next/image";
import { landingSteps } from "@/data/routes";
import { Container } from "./Container";

export function LandingSteps() {
  return (
    <section id="travel-tips" className="bg-white py-10 lg:py-12">
      <Container>
        <div className="mb-5 max-w-3xl">
          <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
            After landing
          </p>

          <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#10201d]">
            What happens after you land in Thailand?
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#30465a]">
            A simple step-by-step guide helps travelers understand what to do
            before they click a transfer booking link.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {landingSteps.map((step) => (
            <article
              key={step.id}
              className="overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
            >
              <div className="relative aspect-[16/8.5] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <p className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0c5a4d] text-[12px] font-extrabold text-white">
                  {step.number}
                </p>

                <h3 className="text-[18px] font-extrabold leading-snug text-[#10201d]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
