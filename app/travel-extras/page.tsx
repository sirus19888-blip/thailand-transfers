import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { PromoCards } from "@/components/PromoCards";

export const metadata: Metadata = createPageMetadata({
  title: "Thailand Travel Extras",
  description:
    "Useful Thailand travel extras for tourist SIMs, eSIMs and hotel transfer planning.",
  alternates: {
    canonical: "/travel-extras",
  },
});

export default function TravelExtrasPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="border-b border-[#e7e2d8] bg-white py-8 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              Travel extras
            </p>

            <h1 className="text-[34px] font-extrabold tracking-normal text-[#10201d] lg:text-[52px]">
              Thailand travel extras for a smoother arrival
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#30465a]">
              Quick helpers for staying online after landing and checking when
              hotel pickup is actually included.
            </p>
          </div>
        </Container>
      </section>

      <PromoCards />

      <Footer />
      <MobileBottomNav activeLabel="Extras" />
    </main>
  );
}
