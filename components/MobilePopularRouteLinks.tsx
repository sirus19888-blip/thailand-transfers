import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { popularRoutes } from "@/data/routes";

const featuredRouteIds = [
  "bangkok-pattaya",
  "dmk-pattaya",
  "suvarnabhumi-airport-hua-hin",
  "suvarnabhumi-airport-koh-chang-featured",
  "phuket-airport-patong-beach",
  "krabi-airport-ao-nang",
  "surat-thani-airport-koh-samui-featured",
  "bangkok-chiang-mai",
];

const featuredRoutes = featuredRouteIds
  .map((id) => popularRoutes.find((route) => route.id === id))
  .filter((route): route is (typeof popularRoutes)[number] => Boolean(route));

export function MobilePopularRouteLinks() {
  return (
    <section
      id="mobile-popular-routes"
      className="bg-[#f8f4ec] px-5 py-7 lg:hidden"
    >
      <div className="mx-auto max-w-md">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
          Popular Thailand transfer routes
        </p>

        <h2 className="mt-2 text-[24px] font-extrabold leading-tight tracking-[-0.03em] text-[#10201d]">
          Compare the most searched airport and island transfers
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#30465a]">
          Start with Bangkok Airport to Pattaya, Suvarnabhumi Airport to Hua
          Hin, Phuket Airport to Patong, Krabi Airport to Ao Nang and island
          ferry connections before checking live partner prices.
        </p>

        <div className="mt-5 space-y-3">
          {featuredRoutes.map((route) => (
            <Link
              key={route.id}
              href={route.href}
              className="block rounded-[20px] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[16px] font-extrabold leading-snug text-[#10201d]">
                    {route.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-[#30465a]">
                    {route.description}
                  </p>
                </div>

                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#0c5a4d]" />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="rounded-full bg-[#f8f4ec] px-3 py-1 text-[11px] font-bold text-[#c99a2e]">
                  {route.price}
                </p>
                <p className="text-[11px] font-semibold text-slate-500">
                  {route.duration}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/routes"
          className="mt-4 flex w-full items-center justify-center rounded-full border border-[#0c5a4d] bg-white px-5 py-3 text-sm font-extrabold text-[#0c5a4d]"
        >
          View all Thailand routes
        </Link>
      </div>
    </section>
  );
}
