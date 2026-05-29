import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import { getMobileVehicleImage } from "@/components/mobileVehicleAssets";
import { mainRoute, transferOptions } from "@/data/routes";
import type { RoutePageData } from "@/data/routePages";
import { getOptionLabel } from "@/data/routeIntelligence";

const mobileRoute: RoutePageData = {
  slug: mainRoute.slug,
  title: mainRoute.title,
  seoTitle: mainRoute.title,
  seoDescription: mainRoute.description,
  from: mainRoute.from,
  to: mainRoute.to,
  intro: mainRoute.description,
  mainAffiliateUrl: mainRoute.affiliateUrl,
  options: transferOptions.map((option) => ({
    id: option.id,
    name: option.name,
    price: "Final price on partner",
    duration: option.duration,
    pickup: option.pickup,
    bestFor: option.bestFor,
    trackingId: option.trackingId,
    affiliateUrl: option.affiliateUrl,
  })),
};

const optionDetailsById = Object.fromEntries(
  transferOptions.map((option) => [
    option.id,
    {
      label: getOptionLabel({
        id: option.id,
        name: option.name,
        price: option.price,
        duration: option.duration,
        pickup: option.pickup,
        bestFor: option.bestFor,
        trackingId: option.trackingId,
        affiliateUrl: option.affiliateUrl,
      }),
      operator: option.operator,
      departures: option.departures,
      baggage: option.baggage,
      image: getMobileVehicleImage(option.id),
      pros: option.pros,
      cons: option.cons,
    },
  ]),
);

export function MobileTransferOptionsScreen() {
  return (
    <MobilePriorityRouteOptionsScreen
      route={mobileRoute}
      title="BKK - Pattaya"
      summaryLeftTitle="Best for most tourists"
      summaryLeftText="Taxi if late"
      summaryRightTitle="Cheapest"
      summaryRightText="Bus if daytime"
      optionDetailsById={optionDetailsById}
      detailsHref="/routes/bangkok-airport-to-pattaya/details"
      footerNote="If you land after 20:00, choose taxi. Bus can work well during daytime arrivals if the schedule fits."
    />
  );
}
