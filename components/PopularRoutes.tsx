import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { popularRoutes } from "@/data/routes";
import { Container } from "./Container";

const homepageRouteIds = [
  "bangkok-pattaya",
  "dmk-pattaya",
  "suvarnabhumi-airport-hua-hin",
  "suvarnabhumi-airport-koh-chang-featured",
  "phuket-airport-patong-beach",
  "krabi-airport-ao-nang",
];

export function PopularRoutes() {
  const homepageRoutes = homepageRouteIds
    .map((id) => popularRoutes.find((route) => route.id === id))
    .filter((route): route is (typeof popularRoutes)[number] => Boolean(route));

  return (
    <section id="popular-routes" className="bg-[#f8f4ec] py-8 lg:py-10">
      <Container>
        <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
          <div>
            <p className="mb-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#8b6a20]">
              Popular airport transfers
            </p>

            <h2 className="text-[26px] font-extrabold tracking-normal text-[#10201d] lg:text-[30px]">
              Start with the routes travelers check most
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#30465a]">
              Six common airport routes with the clearest next step before you
              book.
            </p>
          </div>

          <Link
            href="/routes"
            className="inline-flex items-center justify-center rounded-full border border-[#0c5a4d] bg-white px-5 py-2.5 text-sm font-extrabold text-[#0c5a4d] transition hover:bg-[#f8f4ec]"
          >
            View all routes
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {homepageRoutes.map((route) => (
            <Link
              key={route.id}
              href={route.href}
              className="group grid overflow-hidden rounded-[18px] border border-[#e7e2d8] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[132px_1fr] lg:block"
            >
              <div className="relative min-h-[112px] overflow-hidden lg:aspect-[16/8.2]">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 132px, 0px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="rounded-full bg-[#f8f4ec] px-3 py-1 text-[11px] font-bold text-[#8b6a20]">
                    {route.price}
                  </p>

                  <p className="text-[11px] font-semibold text-slate-500">
                    {route.duration}
                  </p>
                </div>

                <h3 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
                  {route.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-5 text-[#30465a]">
                  {route.description}
                </p>

                <p className="mt-3 inline-flex items-center gap-1 text-[13px] font-extrabold text-[#0c5a4d]">
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
