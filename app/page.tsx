import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import { HeroSearch } from "@/components/HeroSearch";
import { MobileHomeCompact } from "@/components/MobileHomeCompact";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export const metadata: Metadata = createPageMetadata({
  title: "Thailand Transfer Guide | Compare Thailand Transfer Options",
  description:
    "Compare popular transfer routes in Thailand by bus, taxi, van and ferry. Find practical travel tips and check booking options with trusted partners.",
  alternates: {
    canonical: "/",
  },
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#10201d]">
      <HeroSearch />

      <MobileHomeCompact />

      <MobileBottomNav />
    </main>
  );
}
