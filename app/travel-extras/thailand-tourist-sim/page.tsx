import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Smartphone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Thailand Tourist SIM & eSIM | Thailand Transfers",
  description:
    "Compare practical options for staying connected in Thailand with a tourist SIM or eSIM.",
  alternates: {
    canonical: "/travel-extras/thailand-tourist-sim",
  },
};

const benefits = [
  "Use maps, Grab, hotel messages and booking confirmations after landing.",
  "Good option for tourists arriving at Bangkok, Phuket, Krabi or Surat Thani.",
  "Compare SIM or eSIM options before choosing what fits your trip.",
];

export default function ThailandTouristSimPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#10201d]">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="border-b border-[#e7e2d8] bg-white py-10 lg:py-14">
        <Container>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0c5a4d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0df] text-[#c99a2e]">
                <Smartphone className="h-6 w-6" />
              </div>

              <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                Travel extra
              </p>

              <h1 className="text-[36px] font-extrabold tracking-[-0.04em] text-[#10201d] lg:text-[52px]">
                Thailand Tourist SIM & eSIM
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#30465a]">
                Stay connected after landing in Thailand. Use mobile data for
                maps, transfer pickup instructions, hotel messages, ride apps
                and booking confirmations.
              </p>

              <div className="mt-6 grid gap-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3 rounded-[18px] border border-[#e7e2d8] bg-[#fbfaf7] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0c5a4d]" />
                    <p className="text-sm leading-6 text-[#30465a]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#e7e2d8] bg-white shadow-xl shadow-black/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/assets/promo/sim-card.png"
                  alt="Thailand Tourist SIM and eSIM"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-5">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
                  Coming soon
                </p>

                <h2 className="mt-2 text-xl font-extrabold text-[#10201d]">
                  SIM partner offers will be added here
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  This page is ready for a future SIM or eSIM affiliate partner.
                  For now, it explains why staying connected matters during
                  transfers in Thailand.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
