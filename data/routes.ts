export const mainRoute = {
  slug: "bangkok-airport-to-pattaya",
  routeKey: "bkk_pattaya",
  title: "Bangkok Suvarnabhumi Airport (BKK) to Pattaya",
  shortTitle: "BKK to Pattaya",
  from: "Suvarnabhumi Airport (BKK)",
  to: "Pattaya",
  description:
    "Compare bus, taxi and van options from Bangkok Suvarnabhumi Airport (BKK) to Pattaya before you land.",
  affiliateUrl:
    "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-general",
};

export const transferOptions = [
  {
    id: "bus",
    trackingId: "click_12go_bus_bkk_pattaya",
    name: "Bus",
    operator: "Airport Bus by Bell Travel",
    label: "Best value",
    price: "฿132",
    priceNote: "per person",
    duration: "2h 30m",
    departures: "Every 1–2 hrs",
    pickup: "BKK Bus Terminal (Level 1)",
    baggage: "1 large + 1 small",
    bestFor: "Budget travelers",
    pros: ["Cheapest option", "Direct to Central Pattaya"],
    cons: ["May take longer in traffic", "Fixed schedule"],
    image: "/assets/vehicles/bus.png",
    rating: "4.5",
    reviews: "1,248",
    affiliateUrl:
      "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-bus",
  },
  {
    id: "taxi",
    trackingId: "click_12go_taxi_bkk_pattaya",
    name: "Private Taxi",
    operator: "Licensed Meter Taxi",
    label: "Fastest",
    price: "฿1,250",
    priceNote: "per car",
    duration: "1h 45m",
    departures: "24/7",
    pickup: "Arrivals Level (Meet & Greet)",
    baggage: "2 large + 2 small",
    bestFor: "Comfort and late arrivals",
    pros: ["Fastest door-to-door", "Private and comfortable"],
    cons: ["Higher price", "Traffic dependent"],
    image: "/assets/vehicles/taxi.png",
    rating: "4.8",
    reviews: "3,612",
    affiliateUrl:
      "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-taxi",
  },
  {
    id: "van",
    trackingId: "click_12go_van_bkk_pattaya",
    name: "Shared Van",
    operator: "Door-to-door Service",
    label: "Most convenient",
    price: "฿220",
    priceNote: "per person",
    duration: "2h",
    departures: "Every 30–60 min",
    pickup: "Door 3 (Arrivals)",
    baggage: "1 large + 1 small",
    bestFor: "Small groups and hotel areas",
    pros: ["Hotel drop-off", "Frequent departures"],
    cons: ["May stop at other hotels", "Short wait possible"],
    image: "/assets/vehicles/van.png",
    rating: "4.6",
    reviews: "2,017",
    affiliateUrl:
      "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-van",
  },
];

export const popularRoutes = [
  {
    id: "bangkok-pattaya",
    title: "Bangkok Airport to Pattaya",
    description: "The most popular airport transfer for beach trips.",
    price: "from ฿122",
    duration: "1h 30m – 3h",
    image: "/assets/routes/bangkok-pattaya.png",
    href: "/routes/bangkok-airport-to-pattaya",
  },
  {
    id: "dmk-pattaya",
    title: "Don Mueang Airport to Pattaya",
    description: "Transfer options from Don Mueang Airport to Pattaya.",
    price: "coming soon",
    duration: "coming soon",
    image: "/assets/routes/bangkok-pattaya.png",
    href: "/routes/don-mueang-airport-to-pattaya",
  },
];

export const promoCards = [
  {
    id: "sim-card",
    title: "Thailand Tourist SIM",
    description: "Stay online after landing with a tourist SIM or eSIM.",
    image: "/assets/promo/sim-card.png",
    href: "#travel-sim",
    label: "Travel extra",
  },
  {
    id: "hotel-transfer",
    title: "Hotel transfer",
    description: "Compare private pickup options for hotels and resorts.",
    image: "/assets/promo/hotel-transfer.png",
    href: "/routes/bangkok-airport-to-pattaya",
    label: "Comfort option",
  },
];

export const landingSteps = [
  {
    id: "immigration",
    number: "01",
    title: "Clear immigration",
    description:
      "After landing, follow the signs to immigration. Keep your passport and arrival information ready.",
    image: "/assets/steps/immigration.png",
  },
  {
    id: "baggage",
    number: "02",
    title: "Collect your baggage",
    description:
      "Check the baggage carousel screens and collect your luggage before going to the arrival hall.",
    image: "/assets/steps/baggage-claim.png",
  },
  {
    id: "pickup",
    number: "03",
    title: "Find your pickup point",
    description:
      "Use the booking instructions to find the bus counter, van point or driver meeting area.",
    image: "/assets/steps/meet-driver.png",
  },
];

export const practicalTips = [
  "Do not accept random taxi offers inside the terminal.",
  "Check the pickup point before your flight lands.",
  "If you arrive late, a private taxi is usually easier than a bus.",
  "Keep screenshots of your booking and pickup instructions.",
  "Allow extra time during holidays, rain or evening traffic.",
];

export const plannedRoutes = [
  {
    id: "dmk-pattaya",
    title: "Don Mueang Airport (DMK) to Pattaya",
    slug: "don-mueang-airport-to-pattaya",
    status: "planned",
  },
  {
    id: "bangkok-hua-hin",
    title: "Bangkok to Hua Hin",
    slug: "bangkok-to-hua-hin",
    status: "planned",
  },
  {
    id: "bkk-hua-hin",
    title: "Suvarnabhumi Airport (BKK) to Hua Hin",
    slug: "bangkok-airport-to-hua-hin",
    status: "planned",
  },
  {
    id: "bangkok-koh-chang",
    title: "Bangkok to Koh Chang",
    slug: "bangkok-to-koh-chang",
    status: "planned",
  },
  {
    id: "phuket-patong",
    title: "Phuket Airport to Patong",
    slug: "phuket-airport-to-patong",
    status: "planned",
  },
  {
    id: "krabi-ao-nang",
    title: "Krabi Airport to Ao Nang",
    slug: "krabi-airport-to-ao-nang",
    status: "planned",
  },
  {
    id: "surat-thani-koh-samui",
    title: "Surat Thani to Koh Samui",
    slug: "surat-thani-to-koh-samui",
    status: "planned",
  },
];

