import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { AffiliateButton } from "@/components/AffiliateButton";
import type { RoutePageData } from "@/data/routePages";

type RoutePageTemplateProps = {
  route: RoutePageData;
  badge?: string;
  desktopDescription?: string;
  mobileDescription?: string;
  optionsHeading?: string;
  detailsNote?: string;
};

function getTransportImage(option: RoutePageData["options"][number]) {
  const optionId = option.id.toLowerCase();
  const optionName = option.name.toLowerCase();

  if (optionId === "flight" && optionName.includes("transfer")) {
    return "/assets/vehicles/flight-taxi.png";
  }

  if (optionId.includes("bus") && optionId.includes("ferry")) {
    return "/assets/vehicles/bus-ferry.png";
  }

  if (optionId.includes("ferry") && optionId.includes("bus")) {
    return "/assets/vehicles/bus-ferry.png";
  }

  if (optionId.includes("van") && optionId.includes("ferry")) {
    return "/assets/vehicles/van-ferry.png";
  }

  if (optionId.includes("ferry") && optionId.includes("van")) {
    return "/assets/vehicles/van-ferry.png";
  }

  if (optionId.includes("speedboat")) {
    return "/assets/vehicles/speedboat.png";
  }

  if (optionId.includes("ferry")) {
    return "/assets/vehicles/ferry.png";
  }

  if (optionId.includes("train")) {
    return "/assets/vehicles/train.png";
  }

  if (optionId.includes("flight")) {
    return "/assets/vehicles/flight.png";
  }

  if (optionId.includes("taxi")) {
    return "/assets/vehicles/taxi.png";
  }

  if (optionId.includes("bus")) {
    return "/assets/vehicles/bus.png";
  }

  if (optionId.includes("van")) {
    return "/assets/vehicles/van.png";
  }

  return null;
}

export default function RoutePageTemplate({
  route,
  badge = "Return transfer comparison",
  desktopDescription,
  mobileDescription,
  optionsHeading,
  detailsNote,
}: RoutePageTemplateProps) {
  const generalTrackingId = `click_12go_general_${route.slug.replaceAll("-", "_")}`;

  return (
    <main className="min-h-screen bg-white pb-28 text-[#10201d] lg:pb-0">
      <div className="hidden lg:block">
        <Header />

        <section className="bg-[#f8f4ec] py-12 lg:py-20">
          <Container>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
                {badge}
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-[#10201d] min-[390px]:text-4xl lg:text-6xl">
                {route.title}
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                {desktopDescription ?? route.intro}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <AffiliateButton
                  href={route.mainAffiliateUrl}
                  trackingId={generalTrackingId}
                >
                  Check live prices on 12Go
                </AffiliateButton>

                <Link
                  href="/routes"
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
                {optionsHeading ??
                  `Compare ${route.from} to ${route.to} transfer options`}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 lg:text-base lg:leading-7">
                {detailsNote ??
                  "Prices, pickup points and availability can change. Always check live offers and booking conditions on the partner website before booking."}
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
                  {route.options.map((option) => (
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
            {badge}
          </p>

          <h1 className="text-3xl font-bold leading-tight">{route.title}</h1>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            {mobileDescription ?? route.intro}
          </p>

          <div className="mt-6 space-y-3">
            {route.options.map((option) => {
              const transportImage = getTransportImage(option);

              return (
                <div
                  key={option.id}
                  className="rounded-[24px] border border-[#e7e2d8] bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {transportImage ? (
                        <div className="relative aspect-[4/3] w-[86px] shrink-0 overflow-hidden rounded-2xl bg-[#f8f4ec]">
                          <Image
                            src={transportImage}
                            alt={option.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : null}

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
              );
            })}
          </div>

          <Link
            href="/routes"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#064e45] bg-white px-6 py-4 text-sm font-bold text-[#064e45]"
          >
            Back to all routes
          </Link>
        </section>
      </div>
    </main>
  );
}
