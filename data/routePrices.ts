export type RouteOptionPrice = {
  from: number;
  to?: number;
  unit: "person" | "vehicle";
};

export const routePrices: Record<string, Record<string, RouteOptionPrice>> = {
  "bangkok-airport-to-pattaya": {
    bus: { from: 150, to: 250, unit: "person" },
    taxi: { from: 1300, to: 1900, unit: "vehicle" },
  },
  "don-mueang-airport-to-pattaya": {
    bus: { from: 180, to: 300, unit: "person" },
    van: { from: 400, to: 500, unit: "person" },
    taxi: { from: 1650, to: 2200, unit: "vehicle" },
  },
  "suvarnabhumi-airport-to-hua-hin": {
    bus: { from: 500, to: 600, unit: "person" },
    "bus-van": { from: 1000, to: 1200, unit: "person" },
    taxi: { from: 1800, to: 2800, unit: "vehicle" },
  },
  "bangkok-to-hua-hin": {
    van: { from: 200, to: 300, unit: "person" },
    bus: { from: 180, to: 280, unit: "person" },
    taxi: { from: 2300, to: 2800, unit: "vehicle" },
  },
  "phuket-airport-to-patong-beach": {
    bus: { from: 125, to: 200, unit: "person" },
    van: { from: 190, to: 400, unit: "person" },
    taxi: { from: 500, to: 1200, unit: "vehicle" },
  },
  "phuket-airport-to-kata-karon": {
    van: { from: 250, to: 450, unit: "person" },
    taxi: { from: 1000, to: 1400, unit: "vehicle" },
  },
  "krabi-airport-to-ao-nang": {
    "shared-van": { from: 145, to: 300, unit: "person" },
    "private-taxi": { from: 400, to: 900, unit: "vehicle" },
  },
  "suvarnabhumi-airport-to-koh-chang": {
    "bus-ferry": { from: 600, to: 900, unit: "person" },
  },
  "phuket-to-koh-phi-phi": {
    ferry: { from: 400, to: 650, unit: "person" },
    speedboat: { from: 700, to: 1100, unit: "person" },
  },
  "krabi-to-koh-phi-phi": {
    ferry: { from: 300, to: 450, unit: "person" },
  },
  "bangkok-to-chiang-mai": {
    bus: { from: 500, to: 900, unit: "person" },
    train: { from: 600, to: 1400, unit: "person" },
  },
};

export const routePricesCheckedOn = "2026-06";
