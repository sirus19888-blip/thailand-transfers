import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  title: "Hua Hin to Bangkok Transfers | Taxi, Van, Bus & Train",
  description:
    "Compare return transfer options from Hua Hin to Bangkok. Check taxi, van, bus and train choices, estimated travel times and partner booking options.",
  alternates: {
    canonical: "/routes/hua-hin-to-bangkok",
  },
};

const huaHinBangkokAffiliateUrl =
  "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-general";

const huaHinBangkokAffiliateUrls = {
  general:
    "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-general",
  taxi:
    "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-taxi",
  van:
    "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-van",
  bus:
    "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-bus",
  train:
    "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-train",
};

const huaHinBangkokOptions = [
  {
    id: "taxi",
    name: "Private Taxi",
    price: "Check live price",
    duration: "3h – 4h",
    pickup: "Hotel pickup in Hua Hin",
    bestFor: "Comfort and door-to-door travel",
    trackingId: "click_12go_taxi_hua_hin_bangkok",
    affiliateUrl: huaHinBangkokAffiliateUrls.taxi,
  },
  {
    id: "van",
    name: "Shared Van",
    price: "Check live price",
    duration: "3h 30m – 5h",
    pickup: "Operator pickup point or city area",
    bestFor: "Budget travelers",
    trackingId: "click_12go_van_hua_hin_bangkok",
    affiliateUrl: huaHinBangkokAffiliateUrls.van,
  },
  {
    id: "bus",
    name: "Bus / Coach",
    price: "Check live price",
    duration: "4h – 5h",
    pickup: "Hua Hin bus station or operator point",
    bestFor: "Low-cost return travel",
    trackingId: "click_12go_bus_hua_hin_bangkok",
    affiliateUrl: huaHinBangkokAffiliateUrls.bus,
  },
  {
    id: "train",
    name: "Train",
    price: "Check live price",
    duration: "4h – 5h 30m",
    pickup: "Hua Hin Railway Station",
    bestFor: "Scenic and flexible travel",
    trackingId: "click_12go_train_hua_hin_bangkok",
    affiliateUrl: huaHinBangkokAffiliateUrls.train,
  },
];

export default function HuaHinToBangkokPage() {
  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />

        <section className="bg-[#f8f4ec] py-12 lg:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                Return transfer comparison
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-[#10201d] min-[390px]:text-4xl lg:text-6xl">
                Hua Hin to Bangkok transfers
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                Compare return transfer options from Hua Hin to Bangkok. This
                route is useful for travelers heading back to Bangkok city after
                a beach stay in Hua Hin.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <AffiliateButton
                  href={huaHinBangkokAffiliateUrl}
                  trackingId="click_12go_general_hua_hin_bangkok"
                >
                  Check live prices on 12Go
                </AffiliateButton>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-[#064e45] bg-white px-7 py-4 text-sm font-bold text-[#064e45] transition hover:bg-[#f8f4ec]"
                >
                  Back to all routes
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 lg:py-14">
          <Container>
            <div className="mb-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                Options
              </p>

              <h2 className="text-2xl font-bold text-[#10201d] lg:text-3xl">
                Compare Hua Hin to Bangkok transfer options
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 lg:text-base lg:leading-7">
                Prices, pickup points and availability can change. Always check
                live offers and booking conditions on the partner website before
                booking.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#e7e2d8] bg-white shadow-xl shadow-black/5">
              <table className="w-full text-left">
                <thead className="bg-[#fbfaf7]">
                  <tr>
                    <th className="px-5 py-4 text-sm font-bold text-[#10201d]">
                      Option
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-[#10201d]">
                      Price
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-[#10201d]">
                      Time
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-[#10201d]">
                      Pickup
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-[#10201d]">
                      Best for
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-[#10201d]">
                      Book
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {huaHinBangkokOptions.map((option) => (
                    <tr
                      key={option.id}
                      className="border-t border-[#e7e2d8] align-middle"
                    >
                      <td className="px-5 py-5 text-sm font-bold text-[#10201d]">
                        {option.name}
                      </td>
                      <td className="px-5 py-5 text-sm text-slate-600">
                        {option.price}
                      </td>
                      <td className="px-5 py-5 text-sm text-slate-600">
                        {option.duration}
                      </td>
                      <td className="px-5 py-5 text-sm text-slate-600">
                        {option.pickup}
                      </td>
                      <td className="px-5 py-5 text-sm text-slate-600">
                        {option.bestFor}
                      </td>
                      <td className="px-5 py-5">
                        <AffiliateButton
                          href={option.affiliateUrl}
                          trackingId={option.trackingId}
                          variant="table"
                          fullWidth
                        >
                          See options
                        </AffiliateButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      </div>

      <div className="lg:hidden">
        <section className="min-h-screen bg-[#f8f4ec] px-5 py-10 text-[#10201d]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
            Return transfer comparison
          </p>

          <h1 className="text-3xl font-bold leading-tight">
            Hua Hin to Bangkok transfers
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Compare taxi, van, bus and train options from Hua Hin to Bangkok.
            Always check live availability and pickup details before booking.
          </p>

          <div className="mt-6 space-y-3">
            {huaHinBangkokOptions.map((option) => (
              <div
                key={option.id}
                className="rounded-[24px] border border-[#e7e2d8] bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-[#10201d]">
                      {option.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {option.duration}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {option.bestFor}
                    </p>
                  </div>

                  <p className="text-right text-xs font-bold text-[#064e45]">
                    Live price
                  </p>
                </div>

                <div className="mt-4">
                  <AffiliateButton
                    href={option.affiliateUrl}
                    trackingId={option.trackingId}
                    fullWidth
                  >
                    See options on 12Go
                  </AffiliateButton>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#064e45] bg-white px-6 py-4 text-sm font-bold text-[#064e45]"
          >
            Back to all routes
          </Link>
        </section>
      </div>
    </main>
  );
}
