import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { mainRoute, popularRoutes } from "@/data/routes";

export const metadata: Metadata = {
  title: "All Thailand Transfer Routes | Thailand Transfers",
  description:
    "Browse popular Thailand transfer routes by airport, city, island and beach destination.",
  alternates: {
    canonical: "/routes",
  },
};

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-28 text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="border-b border-[#e7e2d8] bg-white py-10 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0df] text-[#c99a2e]">
              <Landmark className="h-6 w-6" />
            </div>

            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              All routes
            </p>

            <h1 className="text-[36px] font-extrabold tracking-[-0.04em] text-[#10201d] lg:text-[52px]">
              Browse Thailand transfer routes
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#30465a]">
              Compare airport transfers, city transfers, ferry connections and
              popular tourist routes across Thailand.
            </p>

            <div className="mt-6 lg:hidden">
              <AffiliateButton
                href={mainRoute.affiliateUrl}
                trackingId="click_12go_routes_mobile_bkk_pattaya"
                fullWidth
              >
                Check live BKK to Pattaya prices
              </AffiliateButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 lg:py-12">
        <Container>
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

                  <h2 className="text-[18px] font-extrabold leading-snug text-[#10201d]">
                    {route.title}
                  </h2>

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

      <Footer />
      <MobileBottomNav activeLabel="Routes" />
    </main>
  );
}
