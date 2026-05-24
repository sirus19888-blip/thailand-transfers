import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { AffiliateButton } from "@/components/AffiliateButton";

export const metadata: Metadata = {
  title: "Koh Phi Phi to Phuket Transfers | Ferry & Speedboat",
  description:
    "Compare return transfer options from Koh Phi Phi to Phuket. Check ferry and speedboat choices, estimated travel times and partner booking options.",
  alternates: {
    canonical: "/routes/koh-phi-phi-to-phuket",
  },
};

const kohPhiPhiPhuketAffiliateUrl =
  "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-general";

const kohPhiPhiPhuketAffiliateUrls = {
  general:
    "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-general",
  ferry:
    "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-ferry",
  speedboat:
    "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-speedboat",
};

const kohPhiPhiPhuketOptions = [
  {
    id: "ferry",
    name: "Ferry",
    price: "Check live price",
    duration: "1h 30m – 3h",
    pickup: "Tonsai Pier or operator pier",
    bestFor: "Most travelers and luggage",
    trackingId: "click_12go_ferry_koh_phi_phi_phuket",
    affiliateUrl: kohPhiPhiPhuketAffiliateUrls.ferry,
  },
  {
    id: "speedboat",
    name: "Speedboat",
    price: "Check live price",
    duration: "1h – 1h 30m",
    pickup: "Tonsai Pier or operator pier",
    bestFor: "Fastest sea transfer",
    trackingId: "click_12go_speedboat_koh_phi_phi_phuket",
    affiliateUrl: kohPhiPhiPhuketAffiliateUrls.speedboat,
  },
];

export default function KohPhiPhiToPhuketPage() {
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
                Koh Phi Phi to Phuket transfers
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                Compare ferry and speedboat options from Koh Phi Phi back to
                Phuket. This route is useful for travelers returning from the
                Phi Phi Islands to Phuket hotels, Phuket Town or Phuket Airport
                connections.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <AffiliateButton
                  href={kohPhiPhiPhuketAffiliateUrl}
                  trackingId="click_12go_general_koh_phi_phi_phuket"
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
                Compare Koh Phi Phi to Phuket transfer options
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 lg:text-base lg:leading-7">
                Prices, pier locations and availability can change. Always check
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
                  {kohPhiPhiPhuketOptions.map((option) => (
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
            Koh Phi Phi to Phuket transfers
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Compare ferry and speedboat options from Koh Phi Phi to Phuket.
            Always check live availability, pier details and booking conditions
            before booking.
          </p>

          <div className="mt-6 space-y-3">
            {kohPhiPhiPhuketOptions.map((option) => (
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
