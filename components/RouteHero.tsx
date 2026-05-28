import Image from "next/image";
import Link from "next/link";
import { mainRoute } from "@/data/routes";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { Container } from "./Container";

export function RouteHero() {
  return (
    <section className="bg-[#f8f4ec] py-6 lg:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="mb-6 inline-flex text-sm font-bold text-[#064e45] hover:underline"
            >
              ← Back to home
            </Link>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
              Route guide
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#10201d] min-[390px]:text-4xl sm:text-5xl lg:text-6xl">
              {mainRoute.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
              Compare the easiest ways to travel from Suvarnabhumi Airport to
              Pattaya. Choose between airport bus, private taxi and shared van,
              then continue to live prices through a trusted booking partner.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#e7e2d8] bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  From
                </p>
                <p className="mt-1 text-sm font-bold text-[#10201d]">
                  {mainRoute.from}
                </p>
              </div>

              <div className="rounded-2xl border border-[#e7e2d8] bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  To
                </p>
                <p className="mt-1 text-sm font-bold text-[#10201d]">
                  {mainRoute.to}
                </p>
              </div>

              <div className="rounded-2xl border border-[#e7e2d8] bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Best start
                </p>
                <p className="mt-1 text-sm font-bold text-[#10201d]">
                  Compare before landing
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={mainRoute.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#064e45] px-7 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#033b35]"
              >
                Check live prices on 12Go
              </a>

              <a
                href="#route-options"
                className="inline-flex items-center justify-center rounded-full border border-[#064e45] bg-white px-7 py-4 text-sm font-bold text-[#064e45] transition hover:bg-[#f8f4ec]"
              >
                Compare options
              </a>
            </div>
            <AffiliateDisclosure className="mt-3" />
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-3 shadow-2xl shadow-black/10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-[4/5]">
              <Image
                src="/assets/hero/hero-desktop.png"
                alt="Bangkok Airport to Pattaya transfer"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-4 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c99a2e]">
                Popular transfer
              </p>

              <p className="mt-1 text-lg font-bold text-[#10201d]">
                Bus, taxi or van
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Compare comfort, price and travel time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
