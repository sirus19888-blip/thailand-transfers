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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#10201d]">
      <div className="hidden lg:block">
        <Header />
      </div>

      <HeroSearch />

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
    </main>
  );
}
