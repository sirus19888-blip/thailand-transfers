import type { RoutePageData } from "@/data/routePages";

export const donMueangPattayaRoute: RoutePageData = {
  slug: "don-mueang-airport-to-pattaya",
  title: "Don Mueang Airport to Pattaya transfers",
  seoTitle: "Don Mueang Airport to Pattaya Transfers | Taxi, Bus & Van",
  seoDescription:
    "Compare transfer options from Don Mueang Airport (DMK) to Pattaya. Check taxi, bus and van choices, estimated travel times and booking options.",
  from: "Don Mueang Airport",
  to: "Pattaya",
  intro:
    "Compare transfer options from Don Mueang Airport (DMK) to Pattaya, including private taxi, shared van and combined bus options depending on the operator and travel date.",
  mainAffiliateUrl:
    "https://12go.asia/en/travel/Don-Mueang-Airport/Pattaya/?z=15791301&sub_id=dmk-pattaya-general",
  options: [
    {
      id: "taxi",
      name: "Private Taxi",
      price: "Check live price",
      duration: "2h - 2h 30m",
      pickup: "DMK arrivals area",
      bestFor: "Comfort and late arrivals",
      trackingId: "click_12go_taxi_dmk_pattaya",
      affiliateUrl:
        "https://12go.asia/en/travel/Don-Mueang-Airport/Pattaya/?z=15791301&sub_id=dmk-pattaya-taxi",
    },
    {
      id: "van",
      name: "Shared Van",
      price: "Check live price",
      duration: "2h 30m - 3h 30m",
      pickup: "Operator meeting point",
      bestFor: "Budget travelers",
      trackingId: "click_12go_van_dmk_pattaya",
      affiliateUrl:
        "https://12go.asia/en/travel/Don-Mueang-Airport/Pattaya/?z=15791301&sub_id=dmk-pattaya-van",
    },
    {
      id: "bus",
      name: "Bus / Combined Transfer",
      price: "Check live price",
      duration: "3h+",
      pickup: "Depends on operator",
      bestFor: "Flexible travelers",
      trackingId: "click_12go_bus_dmk_pattaya",
      affiliateUrl:
        "https://12go.asia/en/travel/Don-Mueang-Airport/Pattaya/?z=15791301&sub_id=dmk-pattaya-bus",
    },
  ],
};
