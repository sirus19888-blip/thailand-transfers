import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  ClipboardCheck,
  Plane,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

const routeShortcuts = [
  {
    label: "BKK → Pattaya",
    href: "/routes/bangkok-airport-to-pattaya",
    meta: "Beach transfer",
  },
  {
    label: "DMK → Pattaya",
    href: "/routes/don-mueang-airport-to-pattaya",
    meta: "Taxi or van",
  },
  {
    label: "BKK → Hua Hin",
    href: "/routes/suvarnabhumi-airport-to-hua-hin",
    meta: "Coast route",
  },
  {
    label: "BKK → Koh Chang",
    href: "/routes/suvarnabhumi-airport-to-koh-chang",
    meta: "Ferry link",
  },
  {
    label: "Phuket → Patong",
    href: "/routes/phuket-airport-to-patong-beach",
    meta: "Beach route",
  },
  {
    label: "Krabi → Ao Nang",
    href: "/routes/krabi-airport-to-ao-nang",
    meta: "Short hop",
  },
];

const infoTabs = [
  {
    id: "help",
    label: "Help",
    icon: ShieldCheck,
    title: "How we help",
    body: "Safest option first, a sensible cheaper backup, and the traps to avoid.",
  },
  {
    id: "landing",
    label: "Landing",
    icon: ClipboardCheck,
    title: "After landing",
    body: "Immigration → baggage → pickup point → ticket rules.",
    href: "/guides/bkk-airport-pickup-level-1-gate-8",
    cta: "Arrival steps",
  },
  {
    id: "warning",
    label: "Scams",
    icon: TriangleAlert,
    title: "Avoid transfer scams",
    body: "Avoid random drivers inside the terminal. Use official counters or trusted partners.",
  },
  {
    id: "extras",
    label: "Extras",
    icon: BadgeDollarSign,
    title: "Travel extras",
    body: "SIM and hotel-transfer helpers stay one tap away.",
    href: "/travel-extras/thailand-tourist-sim",
    cta: "SIM options",
  },
];

export function MobileHomeCompact() {
  return (
    <section className="bg-[#fbfaf7] px-4 pb-[calc(4.35rem+env(safe-area-inset-bottom))] pt-2 lg:hidden">
      <div className="mx-auto grid max-w-md gap-2.5">
        <div className="rounded-[18px] border border-[#e7e2d8] bg-white p-2.5 shadow-sm">
          <div className="mb-2 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#8b6b20]">
                Popular airport transfers
              </p>
              <h2 className="text-[17px] font-extrabold leading-tight text-[#10201d]">
                Popular airport routes
              </h2>
            </div>
            <Plane className="h-5 w-5 shrink-0 text-[#0c5a4d]" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {routeShortcuts.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="min-h-[46px] rounded-2xl bg-[#f8f4ec] px-2.5 py-1.5"
              >
                <p className="text-[12px] font-extrabold leading-tight text-[#10201d]">
                  {route.label}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold leading-3 text-[#667085]">
                  {route.meta}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/routes"
            className="mt-2 flex min-h-9 items-center justify-center gap-2 rounded-full border border-[#0c5a4d] bg-white px-4 py-1.5 text-[12px] font-extrabold text-[#0c5a4d]"
          >
            View all routes
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-[18px] border border-[#e7e2d8] bg-white p-2.5 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            {infoTabs.map((item, index) => {
              const Icon = item.icon;

              return (
                <details
                  key={item.id}
                  open={index === 0}
                  className="group rounded-2xl bg-[#f8f4ec]"
                >
                  <summary className="flex min-h-[48px] cursor-pointer list-none items-center gap-2 px-2.5 py-2 text-[10px] font-extrabold text-[#10201d] [&::-webkit-details-marker]:hidden">
                    <Icon className="h-4 w-4 shrink-0 text-[#0c5a4d]" />
                    <span>{item.label}</span>
                  </summary>

                  <div className="border-t border-white/80 px-2.5 pb-2.5 pt-1">
                    <h3 className="text-[13px] font-extrabold text-[#10201d]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-4 text-[#4b5d58]">
                      {item.body}
                    </p>

                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0c5a4d]"
                      >
                        {item.cta}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ) : null}
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        <AffiliateDisclosure className="text-center text-[10px] leading-4" />
      </div>
    </section>
  );
}
