import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroSearch } from "@/components/HeroSearch";
import { PopularRoutes } from "@/components/PopularRoutes";
import { PromoCards } from "@/components/PromoCards";
import { LandingSteps } from "@/components/LandingSteps";
import { ScamAlert } from "@/components/ScamAlert";
import { HomeHelp } from "@/components/HomeHelp";
import { MobileHomeCompact } from "@/components/MobileHomeCompact";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Thailand Transfer Guide | Compare Thailand Transfer Options",
  description:
    "Compare popular transfer routes in Thailand by bus, taxi, van and ferry. Find practical travel tips and check booking options with trusted partners.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#10201d]">
      <div className="hidden lg:block">
        <Header />
      </div>

      <HeroSearch />

      <MobileHomeCompact />

      <div className="hidden lg:block">
        <PopularRoutes />
        <HomeHelp />
        <LandingSteps />
        <ScamAlert />
        <PromoCards />
        <Footer />
      </div>

      <MobileBottomNav />

      <section className="hidden bg-white px-5 pt-4 pb-[calc(4rem+env(safe-area-inset-bottom))] text-center text-xs leading-5 text-slate-500 lg:block lg:px-8 lg:py-6">
        <AffiliateDisclosure className="mx-auto max-w-3xl" />
      </section>
    </main>
  );
}
