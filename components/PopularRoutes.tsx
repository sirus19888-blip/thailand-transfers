import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { popularRoutes } from "@/data/routes";
import { Container } from "./Container";

export function PopularRoutes() {
  return (
    <section id="popular-routes" className="bg-[#f8f4ec] py-10 lg:py-12">
      <Container>
        <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              Popular routes
            </p>

            <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#10201d]">
              Start with the most searched Thailand transfers
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#30465a]">
              Choose a route, compare transport options and continue to live
              booking prices through trusted partners.
            </p>
          </div>

          <Link
            href="/routes/bangkok-airport-to-pattaya"
            className="inline-flex items-center justify-center rounded-full border border-[#0c5a4d] bg-white px-5 py-2.5 text-sm font-extrabold text-[#0c5a4d] transition hover:bg-[#f8f4ec]"
          >
            View all routes
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((route) => (
            <Link
              key={route.id}
              href={route.href}
              className="group overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/8.5] overflow-hidden">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="rounded-full bg-[#f8f4ec] px-3 py-1 text-[12px] font-bold text-[#c99a2e]">
                    {route.price}
                  </p>

                  <p className="text-[12px] font-semibold text-slate-500">
                    {route.duration}
                  </p>
                </div>

                <h3 className="text-[18px] font-extrabold leading-snug text-[#10201d]">
                  {route.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  {route.description}
                </p>

                <p className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0c5a4d]">
                  Compare options
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
