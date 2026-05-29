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
    operator: "Roong Reuang Coach / Airport Pattaya Bus",
    label: "Cheapest typical option",
    price: "Typical budget option",
    priceNote: "final on partner",
    duration: "2h - 2h 30m",
    departures: "Current schedule",
    pickup: "Level 1, Gate 8 or voucher point",
    baggage: "1 large + 1 small",
    bestFor: "Budget travelers",
    pros: ["Lowest typical price", "Direct airport-to-Pattaya route"],
    cons: ["Fixed schedule", "May need local taxi after drop-off"],
    image: "/assets/vehicles/bus.png",
    affiliateUrl:
      "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-bus",
  },
  {
    id: "taxi",
    trackingId: "click_12go_taxi_bkk_pattaya",
    name: "Private Taxi",
    operator: "Licensed Meter Taxi",
    label: "Easiest door-to-door",
    price: "Typical per car option",
    priceNote: "final on partner",
    duration: "1h 45m",
    departures: "On demand",
    pickup: "Arrivals or driver meeting point",
    baggage: "2 large + 2 small",
    bestFor: "Comfort and late arrivals",
    pros: ["Fastest door-to-door", "Private and comfortable"],
    cons: ["Higher price", "Traffic dependent"],
    image: "/assets/vehicles/taxi.png",
    affiliateUrl:
      "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-taxi",
  },
  {
    id: "van",
    trackingId: "click_12go_van_bkk_pattaya",
    name: "Shared Van",
    operator: "Door-to-door Service",
    label: "Best with luggage",
    price: "Typical shared option",
    priceNote: "final on partner",
    duration: "2h",
    departures: "Current schedule",
    pickup: "Airport or partner meeting point",
    baggage: "1 large + 1 small",
    bestFor: "Small groups and hotel areas",
    pros: ["Hotel drop-off", "Frequent departures"],
    cons: ["May stop at other hotels", "Short wait possible"],
    image: "/assets/vehicles/van.png",
    affiliateUrl:
      "https://12go.asia/en/travel/Suvarnabhumi-Airport/Pattaya/?z=15791301&sub_id=bkk-pattaya-van",
  },
];

export const popularRoutes = [
  {
    id: "bangkok-pattaya",
    title: "Bangkok Airport to Pattaya",
    description: "The most popular airport transfer for beach trips.",
    price: "Final price on partner",
    duration: "1h 30m – 3h",
    image: "/assets/routes/bangkok-airport-to-pattaya.png",
    href: "/routes/bangkok-airport-to-pattaya",
  },
  {
    id: "dmk-pattaya",
    title: "Don Mueang Airport to Pattaya",
    description: "Compare taxi, van and bus options from DMK to Pattaya.",
    price: "Final price on partner",
    duration: "2h – 3h 30m",
    image: "/assets/routes/don-mueang-airport-to-pattaya.png",
    href: "/routes/don-mueang-airport-to-pattaya",
  },
  {
    id: "bangkok-hua-hin",
    title: "Bangkok to Hua Hin",
    description: "City to beach transfer from Bangkok to Hua Hin.",
    price: "Final price on partner",
    duration: "3h – 5h",
    image: "/assets/routes/bangkok-to-hua-hin.png",
    href: "/routes/bangkok-to-hua-hin",
  },
  {
    id: "suvarnabhumi-airport-hua-hin",
    title: "Suvarnabhumi Airport to Hua Hin",
    description: "Airport to beach transfer from Bangkok Suvarnabhumi Airport to Hua Hin.",
    price: "Final price on partner",
    duration: "3h 30m – 5h",
    image: "/assets/routes/suvarnabhumi-airport-to-hua-hin.png",
    href: "/routes/suvarnabhumi-airport-to-hua-hin",
  },
  {
    id: "don-mueang-airport-hua-hin",
    title: "Don Mueang Airport to Hua Hin",
    description: "Airport to beach transfer from Bangkok Don Mueang Airport to Hua Hin.",
    price: "Final price on partner",
    duration: "4h – 6h",
    image: "/assets/routes/don-mueang-airport-to-hua-hin.png",
    href: "/routes/don-mueang-airport-to-hua-hin",
  },
  {
    id: "suvarnabhumi-airport-koh-chang-featured",
    title: "Suvarnabhumi Airport to Koh Chang",
    description: "Airport arrival transfer with van, taxi and ferry connections to Koh Chang.",
    price: "Final price on partner",
    duration: "6h – 9h",
    image: "/assets/routes/suvarnabhumi-airport-to-koh-chang.png",
    href: "/routes/suvarnabhumi-airport-to-koh-chang",
  },
  {
  id: "bangkok-chiang-mai",
  title: "Bangkok to Chiang Mai",
  description: "Compare train, bus and flight options to northern Thailand.",
  price: "Final price on partner",
  duration: "1h 15m – 14h",
  image: "/assets/routes/bangkok-to-chiang-mai.png",
  href: "/routes/bangkok-to-chiang-mai",
},
  {
    id: "surat-thani-airport-koh-samui-featured",
    title: "Surat Thani Airport to Koh Samui",
    description: "Airport to island transfer from Surat Thani Airport to Koh Samui.",
    price: "Final price on partner",
    duration: "3h 30m – 5h",
    image: "/assets/routes/surat-thani-airport-to-koh-samui.png",
    href: "/routes/surat-thani-airport-to-koh-samui",
  },
  {
    id: "phuket-airport-patong-beach",
    title: "Phuket Airport to Patong Beach",
    description: "Airport to beach transfer from Phuket Airport to Patong Beach.",
    price: "Final price on partner",
    duration: "1h – 2h",
    image: "/assets/routes/phuket-airport-to-patong-beach.png",
    href: "/routes/phuket-airport-to-patong-beach",
  },
  {
    id: "patong-beach-phuket-airport",
    title: "Patong Beach to Phuket Airport",
    description: "Beach to airport transfer from Patong Beach to Phuket Airport.",
    price: "Final price on partner",
    duration: "1h – 2h",
    image: "/assets/routes/patong-beach-to-phuket-airport.png",
    href: "/routes/patong-beach-to-phuket-airport",
  },
  {
    id: "phuket-airport-kata-karon",
    title: "Phuket Airport to Kata and Karon",
    description: "Airport transfer from Phuket Airport to Kata and Karon beach areas.",
    price: "Final price on partner",
    duration: "1h 15m – 2h 30m",
    image: "/assets/routes/phuket-airport-to-kata-karon.png",
    href: "/routes/phuket-airport-to-kata-karon",
  },
{
  id: "krabi-airport-ao-nang",
  title: "Krabi Airport to Ao Nang",
  description: "Airport transfer to Ao Nang hotels and beach areas.",
  price: "Final price on partner",
  duration: "30m – 1h 30m",
  image: "/assets/routes/krabi-airport-to-ao-nang.png",
  href: "/routes/krabi-airport-to-ao-nang",
},
{
  id: "ao-nang-krabi-airport",
  title: "Ao Nang to Krabi Airport",
  description: "Return airport transfer from Ao Nang to Krabi Airport.",
  price: "Final price on partner",
  duration: "30m – 1h 30m",
  image: "/assets/routes/ao-nang-to-krabi-airport.png",
  href: "/routes/ao-nang-to-krabi-airport",
},
  {
    id: "koh-samui-surat-thani-airport",
    title: "Koh Samui to Surat Thani Airport",
    description: "Island to airport transfer from Koh Samui to Surat Thani Airport.",
    price: "Final price on partner",
    duration: "3h – 5h",
    image: "/assets/routes/koh-samui-to-surat-thani-airport.png",
    href: "/routes/koh-samui-to-surat-thani-airport",
  },
  {
  id: "phuket-koh-phi-phi",
  title: "Phuket to Koh Phi Phi",
  description: "Compare ferry and speedboat options to Phi Phi Islands.",
  price: "Final price on partner",
  duration: "1h – 3h",
  image: "/assets/routes/phuket-to-koh-phi-phi.png",
  href: "/routes/phuket-to-koh-phi-phi",
},
  {
    id: "pattaya-bangkok-airport",
    title: "Pattaya to Bangkok Airport",
    description: "Return transfer from Pattaya to Bangkok Airport.",
    price: "Final price on partner",
    duration: "1h 45m – 3h 30m",
    image: "/assets/routes/pattaya-to-bangkok-airport.png",
    href: "/routes/pattaya-to-bangkok-airport",
  },
  {
    id: "pattaya-don-mueang-airport",
    title: "Pattaya to Don Mueang Airport",
    description: "Return transfer from Pattaya to Don Mueang Airport.",
    price: "Final price on partner",
    duration: "2h – 4h 30m",
    image: "/assets/routes/pattaya-to-don-mueang-airport.png",
    href: "/routes/pattaya-to-don-mueang-airport",
  },
  {
    id: "hua-hin-bangkok-return",
    title: "Hua Hin to Bangkok",
    description: "Return transfer from Hua Hin to Bangkok city.",
    price: "Final price on partner",
    duration: "3h – 5h 30m",
    image: "/assets/routes/hua-hin-to-bangkok.png",
    href: "/routes/hua-hin-to-bangkok",
  },
  {
    id: "koh-phi-phi-phuket-return",
    title: "Koh Phi Phi to Phuket",
    description: "Return ferry and speedboat options to Phuket.",
    price: "Final price on partner",
    duration: "1h – 3h",
    image: "/assets/routes/koh-phi-phi-to-phuket.png",
    href: "/routes/koh-phi-phi-to-phuket",
  },
  {
    id: "koh-chang-bangkok",
    title: "Koh Chang to Bangkok",
    description: "Island return transfer from Koh Chang to Bangkok.",
    price: "Final price on partner",
    duration: "7h – 10h",
    image: "/assets/routes/koh-chang-to-bangkok.png",
    href: "/routes/koh-chang-to-bangkok",
  },
  {
    id: "koh-chang-suvarnabhumi-airport",
    title: "Koh Chang to Suvarnabhumi Airport",
    description: "Airport transfer from Koh Chang to Bangkok Suvarnabhumi Airport.",
    price: "Final price on partner",
    duration: "6h 30m – 9h",
    image: "/assets/routes/koh-chang-to-suvarnabhumi-airport.png",
    href: "/routes/koh-chang-to-suvarnabhumi-airport",
  },
{
  id: "krabi-koh-phi-phi",
  title: "Krabi to Koh Phi Phi",
  description: "Compare ferry and speedboat options from Krabi to Phi Phi.",
  price: "Final price on partner",
  duration: "1h – 3h",
  image: "/assets/routes/krabi-to-koh-phi-phi.png",
  href: "/routes/krabi-to-koh-phi-phi",
},
{
  id: "koh-phi-phi-krabi",
  title: "Koh Phi Phi to Krabi",
  description: "Return ferry and speedboat options from Phi Phi to Krabi.",
  price: "Final price on partner",
  duration: "1h – 3h",
  image: "/assets/routes/koh-phi-phi-to-krabi.png",
  href: "/routes/koh-phi-phi-to-krabi",
},
{
  id: "surat-thani-airport-koh-phangan",
  title: "Surat Thani Airport to Koh Phangan",
  description: "Airport to island transfer with bus, van and ferry options.",
  price: "Final price on partner",
  duration: "4h – 7h",
  image: "/assets/routes/surat-thani-airport-to-koh-phangan.png",
  href: "/routes/surat-thani-airport-to-koh-phangan",
},
{
  id: "koh-phangan-surat-thani-airport",
  title: "Koh Phangan to Surat Thani Airport",
  description: "Island to airport transfer with ferry, bus and van options.",
  price: "Final price on partner",
  duration: "4h – 7h",
  image: "/assets/routes/koh-phangan-to-surat-thani-airport.png",
  href: "/routes/koh-phangan-to-surat-thani-airport",
},
{
  id: "chiang-mai-bangkok",
  title: "Chiang Mai to Bangkok",
  description: "Compare train, bus and flight options back to Bangkok.",
  price: "Final price on partner",
  duration: "1h 15m – 14h",
  image: "/assets/routes/chiang-mai-to-bangkok.png",
  href: "/routes/chiang-mai-to-bangkok",
},
];

export const returnRouteSeoPlan = [
  {
    id: "pattaya-bangkok-airport",
    title: "Pattaya to Bangkok Airport",
    slug: "pattaya-to-bangkok-airport",
    from: "Pattaya",
    to: "Bangkok Airport",
    description:
      "Compare return transfer options from Pattaya to Bangkok Airport, including taxi, van and bus connections.",
    priority: "high",
    affiliateUrl:
      "https://12go.asia/en/travel/Pattaya/Suvarnabhumi-Airport/?z=15791301&sub_id=pattaya-bangkok-airport-general",
  },
  {
    id: "hua-hin-bangkok",
    title: "Hua Hin to Bangkok",
    slug: "hua-hin-to-bangkok",
    from: "Hua Hin",
    to: "Bangkok",
    description:
      "Compare return transfer options from Hua Hin to Bangkok by taxi, van, bus or train.",
    priority: "high",
    affiliateUrl:
      "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-general",
  },
  {
    id: "koh-phi-phi-phuket",
    title: "Koh Phi Phi to Phuket",
    slug: "koh-phi-phi-to-phuket",
    from: "Koh Phi Phi",
    to: "Phuket",
    description:
      "Compare ferry and speedboat options from Koh Phi Phi back to Phuket.",
    priority: "high",
    affiliateUrl:
      "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-general",
  },
];

export const highDemandRouteSearches = [
  {
    id: "suvarnabhumi-bangkok-city",
    title: "Suvarnabhumi Airport to Bangkok",
    type: "Airport city transfer",
    description:
      "Partner search for taxis, vans, buses and city transfer options after landing at BKK.",
    affiliateUrl:
      "https://12go.asia/en/travel/suvarnabhumi-airport/bangkok/?z=15791301&sub_id=suvarnabhumi-bangkok-live-search",
    trackingId: "click_12go_live_suvarnabhumi_bangkok",
  },
  {
    id: "suvarnabhumi-don-mueang",
    title: "Suvarnabhumi Airport to Don Mueang Airport",
    type: "Airport-to-airport",
    description:
      "Partner search for BKK to DMK transfers when you need a same-day airport connection.",
    affiliateUrl:
      "https://12go.asia/en/travel/suvarnabhumi-airport/don-mueang-airport/?z=15791301&sub_id=suvarnabhumi-dmk-live-search",
    trackingId: "click_12go_live_suvarnabhumi_dmk",
  },
  {
    id: "bangkok-koh-tao",
    title: "Bangkok to Koh Tao",
    type: "Island connection",
    description:
      "Partner search for combined bus, ferry, train, flight and transfer options to Koh Tao.",
    affiliateUrl:
      "https://12go.asia/en/travel/bangkok/koh-tao/?z=15791301&sub_id=bangkok-koh-tao-live-search",
    trackingId: "click_12go_live_bangkok_koh_tao",
  },
  {
    id: "bangkok-koh-samui",
    title: "Bangkok to Koh Samui",
    type: "Island connection",
    description:
      "Partner search for ferry, bus, train, flight and private transfer combinations to Koh Samui.",
    affiliateUrl:
      "https://12go.asia/en/travel/bangkok-transfer/koh-samui/?z=15791301&sub_id=bangkok-koh-samui-live-search",
    trackingId: "click_12go_live_bangkok_koh_samui",
  },
  {
    id: "bangkok-koh-phangan",
    title: "Bangkok to Koh Phangan",
    type: "Island connection",
    description:
      "Partner search for ferry, bus, train, flight and transfer options to Koh Phangan.",
    affiliateUrl:
      "https://12go.asia/en/travel/bangkok/koh-phangan/?z=15791301&sub_id=bangkok-koh-phangan-live-search",
    trackingId: "click_12go_live_bangkok_koh_phangan",
  },
  {
    id: "phuket-krabi",
    title: "Phuket to Krabi",
    type: "South Thailand route",
    description:
      "Partner search for vans, buses, ferries, flights and taxis between Phuket and Krabi.",
    affiliateUrl:
      "https://12go.asia/en/travel/phuket/krabi/?z=15791301&sub_id=phuket-krabi-live-search",
    trackingId: "click_12go_live_phuket_krabi",
  },
  {
    id: "chiang-mai-pai",
    title: "Chiang Mai to Pai",
    type: "Northern route",
    description:
      "Partner search for van, bus and taxi options between Chiang Mai and Pai.",
    affiliateUrl:
      "https://12go.asia/en/travel/chiang-mai/pai/?z=15791301&sub_id=chiang-mai-pai-live-search",
    trackingId: "click_12go_live_chiang_mai_pai",
  },
  {
    id: "bangkok-ayutthaya",
    title: "Bangkok to Ayutthaya",
    type: "Day-trip route",
    description:
      "Partner search for trains, vans, buses and taxis between Bangkok and Ayutthaya.",
    affiliateUrl:
      "https://12go.asia/en/travel/bangkok/ayutthaya/?z=15791301&sub_id=bangkok-ayutthaya-live-search",
    trackingId: "click_12go_live_bangkok_ayutthaya",
  },
  {
    id: "krabi-airport-koh-lanta",
    title: "Krabi Airport to Koh Lanta",
    type: "Airport to island",
    description:
      "Partner search for van, bus, ferry and taxi options from Krabi Airport to Koh Lanta.",
    affiliateUrl:
      "https://12go.asia/en/travel/krabi-airport/koh-lanta/?z=15791301&sub_id=krabi-airport-koh-lanta-live-search",
    trackingId: "click_12go_live_krabi_airport_koh_lanta",
  },
];

export const promoCards = [
  {
    id: "sim-card",
    title: "Thailand Tourist SIM",
    description: "Stay online after landing with a tourist SIM or eSIM.",
    image: "/assets/promo/sim-card.png",
    href: "/travel-extras/thailand-tourist-sim",
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
  {
    id: "pattaya-bkk",
    title: "Pattaya to Suvarnabhumi Airport (BKK)",
    slug: "pattaya-to-bangkok-airport",
    status: "planned",
  },
  {
    id: "pattaya-dmk",
    title: "Pattaya to Don Mueang Airport (DMK)",
    slug: "pattaya-to-don-mueang-airport",
    status: "planned",
  },
  {
    id: "hua-hin-bangkok",
    title: "Hua Hin to Bangkok",
    slug: "hua-hin-to-bangkok",
    status: "planned",
  },
  {
    id: "koh-chang-bangkok",
    title: "Koh Chang to Bangkok",
    slug: "koh-chang-to-bangkok",
    status: "planned",
  },
  {
    id: "patong-phuket-airport",
    title: "Patong to Phuket Airport",
    slug: "patong-to-phuket-airport",
    status: "planned",
  },
  {
    id: "koh-samui-surat-thani",
    title: "Koh Samui to Surat Thani",
    slug: "koh-samui-to-surat-thani",
    status: "planned",
  },
  {
    id: "koh-phi-phi-phuket",
    title: "Koh Phi Phi to Phuket",
    slug: "koh-phi-phi-to-phuket",
    status: "planned",
  },
];




