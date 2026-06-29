import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { createPageMetadata } from "@/app/seo";
import { Header } from "@/components/Header";
import { LandingSteps } from "@/components/LandingSteps";
import { ScamAlert } from "@/components/ScamAlert";
import { PracticalTips } from "@/components/PracticalTips";
import { RouteFaq } from "@/components/RouteFaq";
import { RouteFinalCta } from "@/components/RouteFinalCta";
import { MobileRouteDetailsScreen } from "@/components/MobileRouteDetailsScreen";
import { Container } from "@/components/Container";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { RouteDetailsStructuredData } from "@/components/StructuredData";
import {
  bangkokAirportToPattayaDetailsFaqs,
  bangkokAirportToPattayaDetailsRoute,
} from "@/data/bangkokAirportToPattayaDetails";
import { affiliateMainCta } from "@/data/ctaCopy";
import { transferOptions } from "@/data/routes";

export const metadata: Metadata = createPageMetadata({
  title: "Bangkok Airport to Pattaya Guide | Pickup Tips & FAQ",
  description:
    "Read practical tips for travelling from Bangkok Suvarnabhumi Airport to Pattaya. Learn about pickup points, airport steps, scams to avoid and booking advice.",
  alternates: {
    canonical: "/routes/bangkok-airport-to-pattaya/details",
  },
});

type BangkokAirportToPattayaDetailsPageProps = {
  searchParams?: Promise<{
    option?: string | string[];
  }>;
};

export default async function BangkokAirportToPattayaDetailsPage({
  searchParams,
}: BangkokAirportToPattayaDetailsPageProps) {
  const query = await searchParams;
  const selectedOptionId = Array.isArray(query?.option)
    ? query.option[0]
    : query?.option;
  const busOption = transferOptions.find((option) => option.id === "bus");

  return (
    <>
      <RouteDetailsStructuredData
        route={bangkokAirportToPattayaDetailsRoute}
        faqs={bangkokAirportToPattayaDetailsFaqs}
      />
      <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
        <div className="lg:hidden">
          <MobileRouteDetailsScreen selectedOptionId={selectedOptionId} />
        </div>

        <div className="hidden lg:block">
          <Header />

        <section className="bg-[#f8f4ec] py-8 lg:py-16">
          <Container>
            <Link
              href="/routes/bangkok-airport-to-pattaya"
              className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#064e45] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to transfer options
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                  Route details
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-[#10201d] min-[390px]:text-4xl lg:text-6xl">
                  Bangkok Airport to Pattaya: pickup guide and travel tips
                </h1>

                <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                  Before booking your transfer, check what happens after landing,
                  where to go, what to avoid and which option is easiest for your
                  trip.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <AffiliateButton
                    href={busOption?.affiliateUrl ?? "#"}
                    trackingId={busOption?.trackingId}
                  >
                    {affiliateMainCta}
                  </AffiliateButton>

                  <Link
                    href="/routes/bangkok-airport-to-pattaya"
                    className="inline-flex items-center justify-center rounded-full border border-[#064e45] bg-white px-7 py-4 text-sm font-bold text-[#064e45] transition hover:bg-[#f8f4ec]"
                  >
                    Compare options
                  </Link>
                </div>
                <AffiliateDisclosure className="mt-3" />
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#e7e2d8] bg-white shadow-xl shadow-black/5">
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/assets/routes/bangkok-airport-to-pattaya.png"
                    alt="Bangkok Airport to Pattaya transfer route"
                    fill
                    priority
                    sizes="420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <LandingSteps />

        <ScamAlert />

        <PracticalTips />

        <RouteFaq />

        <RouteFinalCta />
        </div>
      </main>
    </>
  );
}
