import { MobilePriorityRouteOptionsScreen } from "@/components/MobilePriorityRouteOptionsScreen";
import { mobileVehicleAssets } from "@/components/mobileVehicleAssets";
import type { RoutePageData } from "@/data/routePages";

type MobileHuaHinTransferOptionsScreenProps = {
  route: RoutePageData;
  selectedDate?: string;
  passengers?: string;
};

const optionDetailsById = {
  bus: {
    label: "Cheapest typical option",
    operator: "Airport bus and partner coaches",
    departures: "Live schedule",
    baggage: "1 large + 1 small",
    image: mobileVehicleAssets.bus,
    pros: ["Simple airport pickup", "Good value for solo travelers"],
    cons: ["Fixed departure times", "Hua Hin drop-off may vary"],
  },
  taxi: {
    label: "Best for late arrivals",
    operator: "Private airport transfer",
    departures: "On demand",
    baggage: "Private car",
    image: mobileVehicleAssets.taxi,
    pros: ["Door-to-door comfort", "Best after long flights"],
    cons: ["Higher total price", "Travel time depends on traffic"],
  },
  "bus-van": {
    label: "Best with luggage",
    operator: "Bus plus van connection",
    departures: "Live schedule",
    baggage: "Check rules",
    image: mobileVehicleAssets.bus,
    pros: ["More partner choices", "Useful when direct seats are limited"],
    cons: ["May involve a transfer", "Check each pickup point carefully"],
  },
  flight: {
    label: "Avoid if flight lands late",
    operator: "Flight plus ground transfer",
    departures: "Check dates",
    baggage: "Airline rules",
    image: mobileVehicleAssets.flightTaxi,
    pros: ["Shows more route combinations", "Useful for unusual schedules"],
    cons: ["Usually not the simplest route", "Connection details vary"],
  },
};

export function MobileHuaHinTransferOptionsScreen({
  route,
  selectedDate,
  passengers,
}: MobileHuaHinTransferOptionsScreenProps) {
  return (
    <MobilePriorityRouteOptionsScreen
      route={route}
      title="BKK - Hua Hin"
      summaryLeftTitle="Best for most tourists"
      summaryLeftText="Taxi if late"
      summaryRightTitle="Cheapest"
      summaryRightText="Bus if daytime"
      optionDetailsById={optionDetailsById}
      detailsHref="/routes/suvarnabhumi-airport-to-hua-hin/details"
      footerNote="If you land after 20:00, choose taxi or a flexible private transfer. Do not book the last possible bus if missing it would be expensive."
      selectedDate={selectedDate}
      passengers={passengers}
    />
  );
}
