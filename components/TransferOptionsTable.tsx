import Link from "next/link";
import {
  Bus,
  Car,
  Clock3,
  Luggage,
  MapPin,
  ShieldCheck,
  Train,
  Users,
} from "lucide-react";
import { transferOptions } from "@/data/routes";
import { AffiliateButton } from "./AffiliateButton";

const desktopRows = [
  ...transferOptions,
  {
    id: "train-taxi",
    name: "Train + Taxi",
    label: "Scenic",
    price: "฿60 – ฿150",
    priceNote: "per person",
    duration: "2h 15m – 2h 45m",
    departures: "Daily",
    baggage: "1 large + 1 small",
    pickup: "Airport Rail Link → Makkasan Station",
    bestFor: "Scenic & local experience",
    affiliateUrl: "https://12go.asia/?z=YOUR_AFFILIATE_ID",
    operator: "Rail + local taxi",
    image: "/assets/vehicles/van.png",
    pros: ["Local experience", "Low cost"],
    cons: ["Transfer needed", "Less convenient"],
    rating: "4.3",
    reviews: "842",
  },
];

function getOptionIcon(id: string) {
  if (id === "bus") return Bus;
  if (id === "taxi") return Car;
  if (id === "train-taxi") return Train;
  return Users;
}

function getBookLabel(id: string) {
  if (id === "taxi") return "Klook";
  if (id === "van") return "GYG";
  if (id === "train-taxi") return "Details";
  return "12Go";
}

function DesktopComparisonArea() {
  return (
    <div className="hidden items-start lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-5">
      <div className="self-start overflow-hidden rounded-[22px] border border-[#e7e2d8] bg-white shadow-xl shadow-black/5">
        <div className="flex items-center justify-between border-b border-[#e7e2d8] bg-white px-5 py-4">
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#0c5a4d]">
              Transfer options from Suvarnabhumi Airport (BKK) → Pattaya
            </p>
          </div>

          <p className="text-xs font-semibold text-slate-500">Prices in THB</p>
        </div>

        <table className="w-full table-fixed border-collapse text-left">
          <thead className="bg-[#fbfaf7]">
            <tr>
              <th className="w-[170px] px-3 py-3 text-[12px] font-extrabold text-[#10201d]">
                Option
              </th>
              <th className="w-[105px] px-3 py-3 text-[12px] font-extrabold text-[#10201d]">
                Price
              </th>
              <th className="w-[150px] px-3 py-3 text-[12px] font-extrabold text-[#10201d]">
                Time
              </th>
              <th className="w-[170px] px-3 py-3 text-[12px] font-extrabold text-[#10201d]">
                Pickup
              </th>
              <th className="w-[145px] px-3 py-3 text-[12px] font-extrabold text-[#10201d]">
                Best For
              </th>
              <th className="w-[125px] px-3 py-3 text-[12px] font-extrabold text-[#10201d]">
                Book
              </th>
            </tr>
          </thead>

          <tbody>
            {desktopRows.map((option) => {
              const Icon = getOptionIcon(option.id);

              return (
                <tr
                  key={option.id}
                  className="border-t border-[#e7e2d8] align-middle transition hover:bg-[#fbfaf7]"
                >
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef6f2] text-[#0c5a4d]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-[#10201d]">
                          {option.name}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-500">
                          {option.id === "van" ? "Minivan" : option.operator}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-3 py-4">
                    <p className="text-sm font-extrabold text-[#10201d]">
                      {option.price}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {option.priceNote}
                    </p>
                  </td>

                  <td className="px-3 py-4 text-sm text-[#30465a]">
                    <p className="font-semibold text-[#10201d]">
                      {option.duration}
                    </p>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      {option.departures}
                    </p>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      {option.baggage}
                    </p>
                  </td>

                  <td className="px-3 py-4 text-sm text-[#30465a]">
                    {option.pickup}
                  </td>

                  <td className="px-3 py-4 text-sm text-[#30465a]">
                    {option.bestFor}
                  </td>

                  <td className="px-3 py-4">
                    {option.id === "train-taxi" ? (
                      <Link
                        href="/routes/bangkok-airport-to-pattaya/details"
                        className="flex w-full items-center justify-center rounded-xl border border-[#0c5a4d] bg-white px-3 py-2 text-[12px] font-extrabold text-[#0c5a4d]"
                      >
                        Details
                      </Link>
                    ) : (
                      <a
                        href={option.affiliateUrl}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="flex w-full items-center justify-center rounded-xl bg-[#0c5a4d] px-3 py-2 text-[12px] font-extrabold text-white shadow-sm"
                      >
                        {getBookLabel(option.id)}
                      </a>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Link
          href="/routes/bangkok-airport-to-pattaya"
          className="flex items-center gap-2 border-t border-[#e7e2d8] px-5 py-4 text-sm font-extrabold text-[#0c5a4d]"
        >
          Compare all details
          <span>→</span>
        </Link>
      </div>

      <aside className="self-start space-y-4">
        <div className="overflow-hidden rounded-[22px] border border-[#e7e2d8] bg-[#fbfaf7] shadow-lg shadow-black/5">
          <div className="p-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              Stay connected in Thailand
            </p>

            <h3 className="mt-2 text-xl font-extrabold text-[#10201d]">
              Thailand Travel SIM
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#30465a]">
              High-speed data. Airport pickup. Keep maps, rides & bookings
              running smoothly.
            </p>

            <p className="mt-3 text-sm font-bold text-[#10201d]">From ฿199</p>

            <Link
              href="#travel-sim"
              className="mt-4 inline-flex rounded-xl bg-[#0c5a4d] px-4 py-2.5 text-xs font-extrabold text-white"
            >
              See SIM options
            </Link>
          </div>

          <div className="relative mx-5 mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-white">
            <img
              src="/assets/promo/sim-card.png"
              alt="Thailand Travel SIM"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[#e7e2d8] bg-[#fbfaf7] shadow-lg shadow-black/5">
          <div className="relative aspect-[16/9]">
            <img
              src="/assets/promo/hotel-transfer.png"
              alt="Hotel transfer"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
              Need a hassle-free start?
            </p>

            <h3 className="mt-2 text-xl font-extrabold text-[#10201d]">
              Hotel Transfer Recommended
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#30465a]">
              Door-to-door pickup from the airport to your hotel.
            </p>

            <Link
              href="/routes/bangkok-airport-to-pattaya"
              className="mt-4 inline-flex rounded-xl bg-[#0c5a4d] px-4 py-2.5 text-xs font-extrabold text-white"
            >
              See hotel transfer options
            </Link>
          </div>
        </div>

        <div className="rounded-[22px] border border-[#e7e2d8] bg-white p-5 shadow-lg shadow-black/5">
          <div className="flex flex-wrap gap-3 text-sm font-extrabold">
            <span className="text-[#f05a28]">klook</span>
            <span className="text-[#ef4335]">GetYourGuide</span>
            <span className="text-[#285f67]">viator</span>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            Trusted booking partners. We may earn a commission.
          </p>
        </div>

        <div className="rounded-[22px] border border-[#e7e2d8] bg-[#0c5a4d] p-5 text-white shadow-lg shadow-black/10">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#d5ab47]" />

            <div>
              <h3 className="font-extrabold">Safe & secure</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Your bookings are protected with trusted partners and encrypted
                connections.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function MobileTransferCards() {
  return (
    <div className="grid gap-4 lg:hidden">
      {transferOptions.map((option) => (
        <article
          key={option.id}
          className="rounded-[1.75rem] border border-[#e7e2d8] bg-white p-4 shadow-lg shadow-black/5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c99a2e]">
                {option.label}
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#10201d] min-[390px]:text-xl">
                {option.name}
              </h3>
            </div>

            <div className="rounded-2xl bg-[#f8f4ec] px-3 py-2 text-right">
              <p className="text-xs text-slate-500">from</p>
              <p className="text-sm font-bold text-[#10201d]">
                {option.price}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#fbfaf7] p-3">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Time
              </p>
              <p className="mt-1 text-sm font-semibold text-[#10201d]">
                {option.duration}
              </p>
            </div>

            <div className="rounded-2xl bg-[#fbfaf7] p-3">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Pickup
              </p>
              <p className="mt-1 text-sm font-semibold text-[#10201d]">
                {option.pickup}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-[#fbfaf7] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              Best for
            </p>
            <p className="mt-1 text-sm font-semibold text-[#10201d]">
              {option.bestFor}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-bold text-[#10201d]">Pros</p>

            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              {option.pros.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid gap-3">
            <AffiliateButton href={option.affiliateUrl} fullWidth>
              Check live price
            </AffiliateButton>

            <Link
              href="/routes/bangkok-airport-to-pattaya/details"
              className="flex w-full items-center justify-center rounded-full border border-[#0c5a4d] bg-white px-5 py-3 text-sm font-bold text-[#0c5a4d] transition hover:bg-[#f8f4ec]"
            >
              View route details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function TransferOptionsTable() {
  return (
    <section id="transfer-options" className="bg-white py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#c99a2e]">
              Compare options
            </p>

            <h2 className="text-[28px] font-extrabold tracking-[-0.03em] text-[#10201d]">
              Choose the best transfer for your trip
            </h2>
          </div>

          <p className="hidden max-w-[420px] text-sm leading-6 text-slate-600 lg:block">
            Start with a quick comparison. Prices are indicative and can change.
            Always check the live price before booking.
          </p>
        </div>

        <DesktopComparisonArea />
        <MobileTransferCards />

        <p className="mt-4 text-xs leading-6 text-slate-500">
          Some links may be affiliate links. We may earn a commission at no extra
          cost to you.
        </p>
      </div>
    </section>
  );
}
