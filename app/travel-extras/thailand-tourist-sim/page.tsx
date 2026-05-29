import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Luggage,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TicketCheck,
  Wifi,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { mainRoute } from "@/data/routes";

export const metadata: Metadata = createPageMetadata({
  title: "Thailand Tourist SIM & eSIM",
  description:
    "Compare practical options for staying connected in Thailand with a tourist SIM or eSIM.",
  alternates: {
    canonical: "/travel-extras/thailand-tourist-sim",
  },
});

const benefits = [
  "Use maps, Grab, hotel messages and booking confirmations after landing.",
  "Choose eSIM before travel if your phone supports it, or buy a physical SIM after arrival.",
  "Bring your passport for tourist SIM registration when buying or registering a local SIM.",
];

const mobileBenefits = [
  {
    title: "Maps after landing",
    text: "Keep airport pickup instructions, hotel messages and route maps available.",
    icon: Wifi,
  },
  {
    title: "Before or after arrival",
    text: "Use eSIM if your phone supports it, or buy a physical tourist SIM in Thailand.",
    icon: Smartphone,
  },
  {
    title: "Passport registration",
    text: "Tourist SIM registration can require your passport and SIM package details.",
    icon: BadgeCheck,
  },
];

const upcomingExtras = [
  {
    title: "Airport fast track",
    text: "Planned",
    icon: TicketCheck,
  },
  {
    title: "Luggage storage",
    text: "Planned",
    icon: Luggage,
  },
  {
    title: "Travel protection",
    text: "Planned",
    icon: ShieldCheck,
  },
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
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="mx-auto max-w-md px-4 py-5 lg:hidden">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-[#10201d] px-5 pb-6 pt-6 text-white shadow-lg shadow-black/5">
          <Image
            src="/assets/promo/sim-card.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25 blur-[1px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,32,29,0.58)_0%,rgba(16,32,29,0.96)_82%)]" />

          <div className="relative z-10">
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/14 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur"
            >
              <ArrowLeft className="h-4 w-4 text-[#f4c86a]" />
              Home
            </Link>

            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#f4c86a]">
              Travel extras
            </p>
            <h1 className="max-w-[320px] text-[32px] font-black leading-[1.03] tracking-normal">
              Thailand Tourist SIM & eSIM
            </h1>
            <p className="mt-3 max-w-[320px] text-[14px] leading-6 text-white/86">
              Practical mobile data options for maps, pickup instructions,
              hotel messages and booking confirmations.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-2xl border border-white/18 bg-white/14 px-3 py-3 backdrop-blur">
              <Sparkles className="h-5 w-5 shrink-0 text-[#f4c86a]" />
              <p className="text-[12px] font-semibold leading-5 text-white/86">
                Provider prices and plan rules can change. Always check the
                official provider page before buying.
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-5 px-3">
          <div className="relative z-20 rounded-[1.5rem] border border-[#e6ddce] bg-white p-4 shadow-[0_18px_45px_rgba(21,37,31,0.14)]">
            <div className="grid gap-3">
              {mobileBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="flex gap-3 rounded-2xl bg-[#f8f4ec] p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0c5a4d] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-[15px] font-extrabold text-[#10201d]">
                        {benefit.title}
                      </h2>
                      <p className="mt-1 text-[12px] leading-5 text-[#4b5d58]">
                        {benefit.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-4">
              <AffiliateButton
                href={mainRoute.affiliateUrl}
                trackingId="click_12go_sim_mobile_transfer"
                fullWidth
              >
                Compare final transfer prices
              </AffiliateButton>
              <AffiliateDisclosure className="mt-3 text-center" />
            </div>
          </div>
        </div>

        <section className="pt-7">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
                Official checks
              </p>
              <h2 className="mt-1 text-[23px] font-black tracking-normal text-[#10201d]">
                SIM notes
              </h2>
            </div>
            <Clock3 className="h-6 w-6 text-[#0c5a4d]" />
          </div>

          <div className="grid gap-4">
            {verifiedNotes.map((note) => (
              <a
                key={note.title}
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
                  Official source
                </p>
                <h3 className="mt-2 text-[17px] font-extrabold leading-snug text-[#10201d]">
                  {note.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-[#4b5d58]">
                  {note.text}
                </p>
              </a>
            ))}
          </div>

          <p className="mt-4 text-center text-[11px] leading-5 text-slate-500">
            Last checked May 2026. Mobile plan prices, fair-use rules,
            registration steps and airport shop availability can change.
          </p>
        </section>

        <section className="pt-7">
          <div className="rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              More extras
            </p>
            <h2 className="mt-1 text-[23px] font-black tracking-normal text-[#10201d]">
              Planned travel extras
            </h2>

            <div className="mt-4 grid gap-3">
              {upcomingExtras.map((extra) => {
                const Icon = extra.icon;

                return (
                  <article
                    key={extra.title}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#eee7dc] bg-[#fbfaf7] p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c5a4d] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-[15px] font-extrabold text-[#10201d]">
                        {extra.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#f0eadf] px-3 py-1 text-[11px] font-bold text-[#51615c]">
                      {extra.text}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      <section className="hidden border-b border-[#e7e2d8] bg-white py-10 lg:block lg:py-14">
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

              <h2 className="text-[36px] font-extrabold tracking-[-0.04em] text-[#10201d] lg:text-[52px]">
                Thailand Tourist SIM & eSIM
              </h2>

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
                  A local SIM or eSIM is useful for current pickup instructions,
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
                    Compare final transfer prices
                  </AffiliateButton>
                  <AffiliateDisclosure className="mt-3 text-center" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden bg-[#fbfaf7] py-8 lg:block lg:py-12">
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
