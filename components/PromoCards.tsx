import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { promoCards } from "@/data/routes";
import { Container } from "./Container";

export function PromoCards() {
  return (
    <section id="travel-sim" className="bg-[#f8f4ec] py-8 lg:py-10">
      <Container>
        <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
          <div>
            <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#8b6a20]">
              Travel extras
            </p>

            <h2 className="text-[26px] font-extrabold tracking-normal text-[#10201d] lg:text-[30px]">
              Useful extras before your trip
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#30465a]">
              SIM and hotel transfer helpers, kept small so the route decision
              stays first.
            </p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {promoCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group grid overflow-hidden rounded-[18px] border border-[#e7e2d8] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[132px_1fr]"
            >
              <div className="relative hidden min-h-[112px] overflow-hidden md:block md:min-h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 132px, (min-width: 768px) 132px, 0px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-4">
                <p className="mb-2 w-fit rounded-full bg-[#f8f4ec] px-3 py-1 text-[11px] font-bold text-[#8b6a20]">
                  {card.label}
                </p>

                <h3 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-5 text-[#30465a]">
                  {card.description}
                </p>

                <p className="mt-3 inline-flex items-center gap-1 text-[13px] font-extrabold text-[#0c5a4d]">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
