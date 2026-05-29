import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Landmark,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import {
  highDemandRouteSearches,
  mainRoute,
  popularRoutes,
} from "@/data/routes";
import {
  affiliateMicroDisclosure,
  getGuideStatus,
  getStatusDescription,
} from "@/data/routeIntelligence";

export const metadata: Metadata = {
  title: "All Thailand Transfer Routes | Thailand Transfers",
  description:
    "Browse popular Thailand transfer routes by airport, city, island and beach destination.",
  alternates: {
    canonical: "/routes",
  },
};

const routeCategories = [
  {
    id: "airport-routes",
    label: "Airport",
    icon: Plane,
  },
  {
    id: "island-routes",
    label: "Islands",
    icon: Waves,
  },
  {
    id: "beach-routes",
    label: "Beach",
    icon: MapPin,
  },
  {
    id: "live-searches",
    label: "Partner",
    icon: Search,
  },
];

const featuredMobileRoute =
  popularRoutes.find((route) => route.id === "bangkok-pattaya") ??
  popularRoutes[0];

const airportRoutes = popularRoutes.filter((route) =>
  route.title.toLowerCase().includes("airport"),
);

const islandRoutes = popularRoutes.filter((route) =>
  ["koh", "samui", "phangan", "phi phi"].some((keyword) =>
    route.title.toLowerCase().includes(keyword),
  ),
);

const beachRoutes = popularRoutes.filter((route) =>
  ["pattaya", "hua hin", "patong", "kata", "karon", "ao nang"].some(
    (keyword) => route.title.toLowerCase().includes(keyword),
  ),
);

function MobileRouteCard({
  route,
  compact = false,
}: {
  route: (typeof popularRoutes)[number];
  compact?: boolean;
}) {
  const slug = route.href.split("/").filter(Boolean).at(-1);
  const status = getGuideStatus(slug);

  return (
    <Link
      href={route.href}
      className="group block overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5"
    >
      <div
        className={`relative overflow-hidden ${
          compact ? "aspect-[16/7.8]" : "aspect-[16/9.2]"
        }`}
      >
        <Image
          src={route.image}
          alt={route.title}
          fill
          sizes="(max-width: 1023px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/72 via-[#10201d]/12 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-extrabold text-[#0c5a4d]">
            {status}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#10201d]/74 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
            <Clock3 className="h-3 w-3" />
            {route.duration}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-[17px] font-extrabold leading-snug text-[#10201d]">
          {route.title}
        </h3>
        <p className="mt-2 text-[13px] leading-5 text-[#4b5d58]">
          {route.description}
        </p>
        <p className="mt-2 text-[11px] font-semibold leading-4 text-[#667085]">
          {getStatusDescription(status)}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eee7dc] pt-3">
          <span className="inline-flex items-center gap-1 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#8b6b20]">
            Compare
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0c5a4d] text-white transition group-hover:bg-[#10201d]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function MobileRouteSection({
  id,
  eyebrow,
  title,
  routes,
}: {
  id: string;
  eyebrow: string;
  title: string;
  routes: typeof popularRoutes;
}) {
  return (
    <section id={id} className="pt-7">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-[23px] font-black tracking-normal text-[#10201d]">
            {title}
          </h2>
        </div>
        <span className="rounded-full bg-[#f0eadf] px-3 py-1 text-[11px] font-bold text-[#51615c]">
          {routes.length} routes
        </span>
      </div>

      <div className="grid gap-4">
        {routes.map((route) => (
          <MobileRouteCard key={route.id} route={route} compact />
        ))}
      </div>
    </section>
  );
}

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <section className="mx-auto max-w-md px-4 py-5 lg:hidden">
        <div className="relative min-h-[292px] overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-[#10201d] px-5 pb-6 pt-7 text-white shadow-lg shadow-black/5">
          <Image
            src="/assets/routes/bangkok-airport-to-pattaya-overview.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,32,29,0.2)_0%,rgba(16,32,29,0.82)_78%)]" />

          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/14 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur">
              <Landmark className="h-4 w-4 text-[#f4c86a]" />
              Route hub
            </div>

            <h1 className="max-w-[315px] text-[34px] font-black leading-[1.02] tracking-normal">
              Browse Thailand transfer routes
            </h1>
            <p className="mt-3 max-w-[315px] text-[14px] leading-6 text-white/86">
              Compare airport, island and beach transfers before you book.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ["Final", "rules"],
                ["Airport", "pickup"],
                ["Island", "ferries"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/18 bg-white/14 px-3 py-3 backdrop-blur"
                >
                  <p className="text-[16px] font-black leading-none">{label}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="-mt-5 px-3">
          <div className="relative z-20 rounded-[1.5rem] border border-[#e6ddce] bg-white p-3 shadow-[0_18px_45px_rgba(21,37,31,0.14)]">
            <div className="grid grid-cols-4 gap-2">
              {routeCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.id}
                    href={`#${category.id}`}
                    className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl bg-[#f8f4ec] px-2 py-2 text-center text-[11px] font-extrabold text-[#10201d]"
                  >
                    <Icon className="h-4 w-4 text-[#0c5a4d]" />
                    {category.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-2xl bg-[#0c5a4d] px-3 py-3 text-white">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#f4c86a]" />
              <p className="text-[12px] font-semibold leading-5">
                Partner prices and schedules stay current. Always confirm your
                ticket before paying.
              </p>
            </div>
          </div>
        </div>

        <section className="pt-7">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
                Start here
              </p>
              <h2 className="mt-1 text-[23px] font-black tracking-normal text-[#10201d]">
                Most checked route
              </h2>
            </div>
            <BadgeCheck className="h-6 w-6 text-[#0c5a4d]" />
          </div>

          <MobileRouteCard route={featuredMobileRoute} />

          <div className="mt-5">
            <AffiliateButton
              href={mainRoute.affiliateUrl}
              trackingId="click_12go_routes_mobile_bkk_pattaya"
              fullWidth
            >
              Compare final BKK to Pattaya prices
            </AffiliateButton>
            <AffiliateDisclosure className="mt-3 text-center" />
          </div>
        </section>

        <MobileRouteSection
          id="airport-routes"
          eyebrow="Airport transfers"
          title="Arrival routes"
          routes={airportRoutes}
        />

        <MobileRouteSection
          id="island-routes"
          eyebrow="Ferry connections"
          title="Island routes"
          routes={islandRoutes}
        />

        <MobileRouteSection
          id="beach-routes"
          eyebrow="Beach transfers"
          title="Beach routes"
          routes={beachRoutes}
        />

        <section id="live-searches" className="pt-7">
          <div className="rounded-[1.5rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              Partner availability searches
            </p>
            <h2 className="mt-1 text-[23px] font-black tracking-normal text-[#10201d]">
              Travelers often check next
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-[#4b5d58]">
              These searches open partner availability. Check exact pickup,
              luggage rules and operating days before booking.
            </p>

            <div className="mt-4 grid gap-3">
              {highDemandRouteSearches.slice(0, 6).map((route) => (
                <article
                  key={route.id}
                  className="rounded-2xl border border-[#eee7dc] bg-[#fbfaf7] p-4"
                >
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c99a2e]">
                    Partner search only
                  </p>
                  <h3 className="mt-2 text-[16px] font-extrabold leading-snug text-[#10201d]">
                    {route.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold leading-4 text-[#667085]">
                    {getStatusDescription("Partner search only")}
                  </p>
                  <p className="mt-2 text-[13px] leading-5 text-[#4b5d58]">
                    {route.description}
                  </p>
                  <div className="mt-3">
                    <AffiliateButton
                      href={route.affiliateUrl}
                      trackingId={route.trackingId}
                      variant="table"
                      fullWidth
                    >
                      See live schedule and pickup rules
                    </AffiliateButton>
                    <p className="mt-2 text-[10.5px] leading-4 text-slate-500">
                      {affiliateMicroDisclosure}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <AffiliateDisclosure className="mt-4 text-center" />
          </div>
        </section>
      </section>

      <section className="hidden border-b border-[#e7e2d8] bg-white py-10 lg:block lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0df] text-[#c99a2e]">
              <Landmark className="h-6 w-6" />
            </div>

            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              All routes
            </p>

            <h2 className="text-[36px] font-extrabold tracking-[-0.04em] text-[#10201d] lg:text-[52px]">
              Browse Thailand transfer routes
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#30465a]">
              Compare airport transfers, city transfers, ferry connections and
              popular tourist routes across Thailand.
            </p>

            <div className="mt-6 lg:hidden">
              <AffiliateButton
                href={mainRoute.affiliateUrl}
                trackingId="click_12go_routes_mobile_bkk_pattaya"
                fullWidth
              >
                Compare final BKK to Pattaya prices
              </AffiliateButton>
              <AffiliateDisclosure className="mt-3 text-center" />
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden py-8 lg:block lg:py-12">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popularRoutes.map((route) => (
              <Link
                key={route.id}
                href={route.href}
                className="group overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/8.5] overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="rounded-full bg-[#f8f4ec] px-3 py-1 text-[12px] font-bold text-[#c99a2e]">
                      {route.price}
                    </p>

                    <p className="text-[12px] font-semibold text-slate-500">
                      {route.duration}
                    </p>
                  </div>

                  <h2 className="text-[18px] font-extrabold leading-snug text-[#10201d]">
                    {route.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#30465a]">
                    {route.description}
                  </p>

                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-[#0c5a4d]">
                    Compare options
                    <ArrowRight className="h-4 w-4" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="hidden pb-8 lg:block lg:pb-14">
        <Container>
          <div className="rounded-[28px] border border-[#e7e2d8] bg-white p-5 shadow-xl shadow-black/5 lg:p-7">
            <div className="max-w-3xl">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                Partner searches
              </p>
              <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.03em] text-[#10201d] lg:text-[34px]">
                Routes travelers often check next
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#30465a] lg:text-base lg:leading-7">
                These are partner searches, not full Thailand Transfers
                guides yet. Check exact pickup points, luggage rules,
                operating days and current availability on the partner page.
              </p>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {highDemandRouteSearches.map((route) => (
                <article
                  key={route.id}
                  className="rounded-[20px] border border-[#eee7dc] bg-[#fbfaf7] p-4"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
                    {route.type}
                  </p>
                  <h3 className="mt-2 text-[17px] font-extrabold leading-snug text-[#10201d]">
                    {route.title}
                  </h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#30465a]">
                    {route.description}
                  </p>
                  <AffiliateButton
                    href={route.affiliateUrl}
                    trackingId={route.trackingId}
                    variant="table"
                    fullWidth
                  >
                    See live schedule and pickup rules
                  </AffiliateButton>
                </article>
              ))}
            </div>

            <AffiliateDisclosure className="mt-4 text-center" />
          </div>
        </Container>
      </section>

      <Footer />
      <MobileBottomNav activeLabel="Routes" />
    </main>
  );
}
