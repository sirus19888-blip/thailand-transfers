export const mobileVehicleAssets = {
  bus: "/assets/vehicles/mobile/bus.png",
  busFerry: "/assets/vehicles/mobile/bus-ferry.png",
  ferry: "/assets/vehicles/mobile/ferry.png",
  flight: "/assets/vehicles/mobile/flight.png",
  flightTaxi: "/assets/vehicles/mobile/flight-taxi.png",
  speedboat: "/assets/vehicles/mobile/speedboat.png",
  taxi: "/assets/vehicles/mobile/taxi.png",
  train: "/assets/vehicles/mobile/train.png",
  van: "/assets/vehicles/mobile/van.png",
  vanFerry: "/assets/vehicles/mobile/van-ferry.png",
} as const;

export function getMobileVehicleImage(optionId: string) {
  if (optionId.includes("speedboat")) return mobileVehicleAssets.speedboat;
  if (optionId.includes("bus") && optionId.includes("ferry")) {
    return mobileVehicleAssets.busFerry;
  }
  if (optionId.includes("van") && optionId.includes("ferry")) {
    return mobileVehicleAssets.vanFerry;
  }
  if (optionId.includes("flight") && optionId.includes("taxi")) {
    return mobileVehicleAssets.flightTaxi;
  }
  if (optionId.includes("ferry")) return mobileVehicleAssets.ferry;
  if (optionId.includes("train")) return mobileVehicleAssets.train;
  if (optionId.includes("flight")) return mobileVehicleAssets.flight;
  if (optionId.includes("taxi")) return mobileVehicleAssets.taxi;
  if (optionId.includes("bus")) return mobileVehicleAssets.bus;
  if (optionId.includes("van")) return mobileVehicleAssets.van;

  return mobileVehicleAssets.van;
}
