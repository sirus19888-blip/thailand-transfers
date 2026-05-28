import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Smartphone } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { mainRoute } from "@/data/routes";

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
  "Choose eSIM before travel if your phone supports it, or buy a physical SIM after arrival.",
  "Bring your passport for tourist SIM registration when buying or registering a local SIM.",
];

const verifiedNotes = [
  {
    title: "AIS tourist eSIM and SIM plans",
    text: "AIS currently lists Lucky Tourist SIM options with eSIM purchase links, including 1, 5, 8, 15, 30 and 60 day packages. Terms say VAT is extra and plan terms can change.",
    href: "https://www.ais.th/consumers/package/international/tourist-plan",
  },
  {
    title: "dtac tourist eSIM plans",
    text: "dtac currently lists Happy Tourist 299 eSIM for 8 days with 15 GB at max speed and Happy Tourist 599 eSIM for 15 days with 30 GB at max speed.",
    href: "https://dtac.co.th/en/prepaid/touristsim.html",
  },
  {
    title: "SIM registration",
    text: "dtac's registration page says prepaid tourist SIM users need registration and should bring passport, SIM card and SIM package. It lists airport service points including BKK, DMK, Phuket, Samui, Chiang Mai and Krabi.",
    href: "https://www.dtac.co.th/en/prepaid/touristsim-register.html",
  },
];

export default function ThailandTouristSimPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-28 text-[#10201d] lg:pb-0">
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
                  Checked travel note
                </p>

                <h2 className="mt-2 text-xl font-extrabold text-[#10201d]">
                  Pick data before your transfer
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  A local SIM or eSIM is useful for live pickup instructions,
                  driver messages, maps and ride apps. Thailand mobile plans
                  change often, so use official provider pages for current
                  price, data allowance and activation rules.
                </p>

                <div className="mt-4 lg:hidden">
                  <AffiliateButton
                    href={mainRoute.affiliateUrl}
                    trackingId="click_12go_sim_mobile_transfer"
                    fullWidth
                  >
                    Check live transfer prices
                  </AffiliateButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fbfaf7] py-8 lg:py-12">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {verifiedNotes.map((note) => (
              <a
                key={note.title}
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[24px] border border-[#e7e2d8] bg-white p-5 shadow-lg shadow-black/5 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
                  Official source
                </p>
                <h2 className="mt-2 text-lg font-extrabold text-[#10201d]">
                  {note.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#30465a]">
                  {note.text}
                </p>
              </a>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Last checked May 2026. Mobile plan prices, fair-use rules,
            registration steps and airport shop availability can change. Check
            the provider page before buying.
          </p>
        </Container>
      </section>

      <Footer />
      <MobileBottomNav activeLabel="Extras" />
    </main>
  );
}
