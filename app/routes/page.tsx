import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BaggageClaim,
  Bus,
  Car,
  Clock3,
  Landmark,
  MapPinned,
  Route as RouteIcon,
  type LucideIcon,
} from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { RoutesMobileHub } from "@/components/RoutesMobileHub";
import { highDemandRouteSearches, popularRoutes } from "@/data/routes";

export const metadata: Metadata = createPageMetadata({
  title: "All Thailand Transfer Routes",
  description:
    "Browse popular Thailand transfer routes by airport, city, island and beach destination.",
  alternates: {
    canonical: "/routes",
  },
});

type DirectoryLink = {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

const featuredGuideLinks: DirectoryLink[] = [
  {
    title: "Bus guide",
    href: "/routes/bangkok-airport-to-pattaya/bus",
    description: "Airport bus timing, pickup and luggage notes.",
    icon: Bus,
  },
  {
    title: "Taxi guide",
    href: "/routes/bangkok-airport-to-pattaya/taxi",
    description: "Private transfer comfort, pickup and pricing checks.",
    icon: Car,
  },
  {
    title: "Late arrival",
    href: "/routes/bangkok-airport-to-pattaya/late-arrival",
    description: "Safer choices after evening or delayed flights.",
    icon: Clock3,
  },
  {
    title: "With luggage",
    href: "/routes/bangkok-airport-to-pattaya/with-luggage",
    description: "Baggage-friendly route and vehicle guidance.",
    icon: BaggageClaim,
  },
];

const mainRouteLinks: DirectoryLink[] = popularRoutes.map((route) => ({
  title: route.title,
  href: route.href,
}));

const detailedRouteLinks: DirectoryLink[] = popularRoutes.map((route) => ({
  title: `${route.title} details`,
  href: `${route.href}/details`,
}));

const airportTransferRoutes = popularRoutes.filter((route) =>
  route.title.toLowerCase().includes("airport"),
);

const cityIslandRoutes = popularRoutes.filter(
  (route) => !route.title.toLowerCase().includes("airport"),
);

function FeaturedGuideCard({ link }: { link: DirectoryLink }) {
  const Icon = link.icon ?? RouteIcon;

  return (
    <Link
      href={link.href}
      className="group flex min-h-[132px] flex-col justify-between rounded-[18px] border border-[#e7e2d8] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div>
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f0df] text-[#0c5a4d]">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-[15px] font-extrabold leading-snug text-[#10201d]">
          {link.title}
        </h3>
        <p className="mt-2 text-[12px] leading-5 text-[#4b5d58]">
          {link.description}
        </p>
      </div>
      <p className="mt-3 inline-flex items-center gap-1 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#0c5a4d]">
        Open guide
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
      </p>
    </Link>
  );
}

function DesktopRouteCard({ route }: { route: (typeof popularRoutes)[number] }) {
  return (
    <Link
      href={route.href}
      className="group overflow-hidden rounded-[24px] border border-[#e7e2d8] bg-white shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/8.5] overflow-hidden">
        <Image
          src={route.image}
          alt={route.title}
          fill
          sizes="(min-width: 1024px) 33vw, 0px"
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
  );
}

function DesktopRouteCategorySection({
  id,
  eyebrow,
  title,
  description,
  routes,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  routes: typeof popularRoutes;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 max-w-3xl">
        <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-[28px] font-black tracking-normal text-[#10201d]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#30465a]">
          {description}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <DesktopRouteCard key={route.id} route={route} />
        ))}
      </div>
    </section>
  );
}

function DirectoryLinkGroup({
  title,
  description,
  links,
}: {
  title: string;
  description: string;
  links: DirectoryLink[];
}) {
  return (
    <section className="overflow-hidden rounded-[20px] border border-[#e7e2d8] bg-white shadow-sm">
      <div className="border-b border-[#e7e2d8] bg-[#fbfaf7] px-4 py-4 lg:px-5">
        <h3 className="text-[18px] font-extrabold leading-snug text-[#10201d]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-[#4b5d58]">
          {description}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex min-h-12 items-center justify-between gap-3 border-b border-[#eee7dc] px-4 py-3 text-sm transition hover:bg-[#fbfaf7] sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b xl:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <span className="min-w-0 font-semibold leading-5 text-[#10201d]">
              {link.title}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-[#0c5a4d] transition group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function RouteDirectorySection() {
  return (
    <section className="border-y border-[#e7e2d8] bg-[#fffdf8] py-8 lg:py-12">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f0df] text-[#0c5a4d]">
              <MapPinned className="h-5 w-5" />
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e] lg:text-[12px]">
              Complete directory
            </p>
            <h2 className="mt-2 text-[26px] font-black leading-tight tracking-normal text-[#10201d] lg:text-[36px]">
              All route guides
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#30465a] lg:text-base lg:leading-7">
              Browse every published Thailand transfer guide from one clear,
              crawlable route directory.
            </p>
          </div>

          <div className="rounded-full border border-[#d7eadf] bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0c5a4d] shadow-sm">
            {mainRouteLinks.length} routes
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGuideLinks.map((link) => (
            <FeaturedGuideCard key={link.href} link={link} />
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <DirectoryLinkGroup
            title="Main transfer routes"
            description="Primary route pages for airport, city, beach and island transfers."
            links={mainRouteLinks}
          />
          <DirectoryLinkGroup
            title="Detailed route guides"
            description="Pickup notes, timing, luggage guidance and route-specific FAQ pages."
            links={detailedRouteLinks}
          />
        </div>
      </Container>
    </section>
  );
}

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-[5.5rem] text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />
      </div>

      <RoutesMobileHub />

      <section className="hidden border-b border-[#e7e2d8] bg-white py-10 lg:block lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0df] text-[#c99a2e]">
              <Landmark className="h-6 w-6" />
            </div>

            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              All routes
            </p>

            <h1 className="text-[36px] font-extrabold tracking-normal text-[#10201d] lg:text-[52px]">
              Browse Thailand transfer routes
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#30465a]">
              Compare airport transfers, city transfers, ferry connections and
              popular tourist routes across Thailand.
            </p>
          </div>
        </Container>
      </section>

      <section className="hidden py-8 lg:block lg:py-12">
        <Container>
          <div className="grid gap-10">
            <DesktopRouteCategorySection
              id="airport-transfers"
              eyebrow="Airport transfers"
              title="Airport routes travelers check most"
              description="Direct airport transfer pages for arrivals, departures and beach-area connections."
              routes={airportTransferRoutes}
            />

            <DesktopRouteCategorySection
              id="city-island-routes"
              eyebrow="City and island transfers"
              title="City, beach and island routes"
              description="Long-distance, ferry-connected and return routes where timing, luggage and final drop-off matter."
              routes={cityIslandRoutes}
            />
          </div>
        </Container>
      </section>

      <RouteDirectorySection />

      <section className="hidden pb-8 lg:block lg:pb-14">
        <Container>
          <div className="rounded-[28px] border border-[#e7e2d8] bg-white p-5 shadow-xl shadow-black/5 lg:p-7">
            <div className="max-w-3xl">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
                Partner searches
              </p>
              <h2 className="mt-2 text-[26px] font-extrabold tracking-normal text-[#10201d] lg:text-[34px]">
                Routes travelers often check next
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#30465a] lg:text-base lg:leading-7">
                These are partner searches, not full Thailand Transfer Guide pages
                yet. Check exact pickup points, luggage rules, operating days
                and current availability on the partner page.
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
