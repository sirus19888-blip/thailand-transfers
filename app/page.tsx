import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroSearch } from "@/components/HeroSearch";
import { TransferOptionsTable } from "@/components/TransferOptionsTable";
import { PopularRoutes } from "@/components/PopularRoutes";
import { PromoCards } from "@/components/PromoCards";
import { LandingSteps } from "@/components/LandingSteps";
import { ScamAlert } from "@/components/ScamAlert";
import { PracticalTips } from "@/components/PracticalTips";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MobileTrustLinks } from "@/components/MobileTrustLinks";

export const metadata: Metadata = {
  title: "Thailand Transfers | Compare Thailand Transfer Options",
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
      <MobileTrustLinks />

      <div className="hidden lg:block">
        <TransferOptionsTable />
        <PopularRoutes />
        <LandingSteps />
        <ScamAlert />
        <PracticalTips />
        <PromoCards />
        <Footer />
      </div>

      <MobileBottomNav />

      <section className="bg-white px-5 pt-4 pb-[calc(4rem+env(safe-area-inset-bottom))] text-center text-xs leading-5 text-slate-500 lg:px-8 lg:py-6">
        <AffiliateDisclosure className="mx-auto max-w-3xl" />
      </section>
    </main>
  );
}
