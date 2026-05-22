import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { promoCards } from "@/data/routes";
import { Container } from "./Container";

export function PromoCards() {
  return (
    <section id="travel-sim" className="bg-[#f8f4ec] py-10 lg:py-12">
      <Container>
        <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              Travel extras
            </p>

            <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#10201d]">
              Add useful extras before your trip
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#30465a]">
              SIM cards, hotel pickup and other helpful services for a smoother
              arrival in Thailand.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {promoCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group grid overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[180px_1fr]"
            >
              <div className="relative min-h-[150px] overflow-hidden md:min-h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-5">
                <p className="mb-2 w-fit rounded-full bg-[#f8f4ec] px-3 py-1 text-[12px] font-bold text-[#c99a2e]">
                  {card.label}
                </p>

                <h3 className="text-[20px] font-extrabold leading-snug text-[#10201d]">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  {card.description}
                </p>

                <p className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[#0c5a4d]">
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
