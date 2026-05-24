export type RouteTransportOption = {
  id: string;
  name: string;
  price: string;
  duration: string;
  pickup: string;
  bestFor: string;
  trackingId: string;
  affiliateUrl: string;
};

export type RoutePageData = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  from: string;
  to: string;
  intro: string;
  mainAffiliateUrl: string;
  options: RouteTransportOption[];
};

export const routePages: RoutePageData[] = [
  {
    slug: "pattaya-to-bangkok-airport",
    title: "Pattaya to Bangkok Airport transfers",
    seoTitle: "Pattaya to Bangkok Airport Transfers | Taxi, Van & Bus",
    seoDescription:
      "Compare return transfer options from Pattaya to Bangkok Airport. Check taxi, van and bus choices, estimated travel times and partner booking options.",
    from: "Pattaya",
    to: "Bangkok Airport",
    intro:
      "Compare return transfer options from Pattaya to Bangkok Airport, including private taxi, shared van and bus connections.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/Pattaya/Suvarnabhumi-Airport/?z=15791301&sub_id=pattaya-bangkok-airport-general",
    options: [
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Check live price",
        duration: "1h 45m – 2h 30m",
        pickup: "Hotel pickup in Pattaya",
        bestFor: "Comfort and early flights",
        trackingId: "click_12go_taxi_pattaya_bangkok_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/Pattaya/Suvarnabhumi-Airport/?z=15791301&sub_id=pattaya-bangkok-airport-taxi",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Check live price",
        duration: "2h 30m – 3h 30m",
        pickup: "Operator pickup point or hotel area",
        bestFor: "Budget travelers",
        trackingId: "click_12go_van_pattaya_bangkok_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/Pattaya/Suvarnabhumi-Airport/?z=15791301&sub_id=pattaya-bangkok-airport-van",
      },
      {
        id: "bus",
        name: "Bus / Coach",
        price: "Check live price",
        duration: "2h 30m – 3h 30m",
        pickup: "Pattaya bus station or operator point",
        bestFor: "Cheapest return option",
        trackingId: "click_12go_bus_pattaya_bangkok_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/Pattaya/Suvarnabhumi-Airport/?z=15791301&sub_id=pattaya-bangkok-airport-bus",
      },
    ],
  },
  {
    slug: "hua-hin-to-bangkok",
    title: "Hua Hin to Bangkok transfers",
    seoTitle: "Hua Hin to Bangkok Transfers | Taxi, Van, Bus & Train",
    seoDescription:
      "Compare return transfer options from Hua Hin to Bangkok. Check taxi, van, bus and train choices, estimated travel times and partner booking options.",
    from: "Hua Hin",
    to: "Bangkok",
    intro:
      "Compare return transfer options from Hua Hin to Bangkok by private taxi, shared van, bus or train.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-general",
    options: [
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Check live price",
        duration: "3h – 4h",
        pickup: "Hotel pickup in Hua Hin",
        bestFor: "Comfort and door-to-door travel",
        trackingId: "click_12go_taxi_hua_hin_bangkok",
        affiliateUrl:
          "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-taxi",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Check live price",
        duration: "3h 30m – 5h",
        pickup: "Operator pickup point or city area",
        bestFor: "Budget travelers",
        trackingId: "click_12go_van_hua_hin_bangkok",
        affiliateUrl:
          "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-van",
      },
      {
        id: "bus",
        name: "Bus / Coach",
        price: "Check live price",
        duration: "4h – 5h",
        pickup: "Hua Hin bus station or operator point",
        bestFor: "Low-cost return travel",
        trackingId: "click_12go_bus_hua_hin_bangkok",
        affiliateUrl:
          "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-bus",
      },
      {
        id: "train",
        name: "Train",
        price: "Check live price",
        duration: "4h – 5h 30m",
        pickup: "Hua Hin Railway Station",
        bestFor: "Scenic and flexible travel",
        trackingId: "click_12go_train_hua_hin_bangkok",
        affiliateUrl:
          "https://12go.asia/en/travel/Hua-Hin/Bangkok/?z=15791301&sub_id=hua-hin-bangkok-train",
      },
    ],
  },
  {
    slug: "koh-phi-phi-to-phuket",
    title: "Koh Phi Phi to Phuket transfers",
    seoTitle: "Koh Phi Phi to Phuket Transfers | Ferry & Speedboat",
    seoDescription:
      "Compare return transfer options from Koh Phi Phi to Phuket. Check ferry and speedboat choices, estimated travel times and partner booking options.",
    from: "Koh Phi Phi",
    to: "Phuket",
    intro:
      "Compare ferry and speedboat transfer options from Koh Phi Phi back to Phuket.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-general",
    options: [
      {
        id: "ferry",
        name: "Ferry",
        price: "Check live price",
        duration: "1h 30m – 3h",
        pickup: "Tonsai Pier or operator pier",
        bestFor: "Most travelers and luggage",
        trackingId: "click_12go_ferry_koh_phi_phi_phuket",
        affiliateUrl:
          "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-ferry",
      },
      {
        id: "speedboat",
        name: "Speedboat",
        price: "Check live price",
        duration: "1h – 1h 30m",
        pickup: "Tonsai Pier or operator pier",
        bestFor: "Fastest sea transfer",
        trackingId: "click_12go_speedboat_koh_phi_phi_phuket",
        affiliateUrl:
          "https://12go.asia/en/travel/Koh-Phi-Phi/Phuket/?z=15791301&sub_id=koh-phi-phi-phuket-speedboat",
      },
    ],
  },
  {
    slug: "pattaya-to-don-mueang-airport",
    title: "Pattaya to Don Mueang Airport transfers",
    seoTitle: "Pattaya to Don Mueang Airport Transfers | Taxi, Van & Bus",
    seoDescription:
      "Compare return transfer options from Pattaya to Don Mueang Airport. Check taxi, van and bus choices, estimated travel times and partner booking options.",
    from: "Pattaya",
    to: "Don Mueang Airport",
    intro:
      "Compare return transfer options from Pattaya to Don Mueang Airport, including private taxi, shared van and bus connections.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/Pattaya/Don-Mueang-Airport/?z=15791301&sub_id=pattaya-don-mueang-airport-general",
    options: [
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Check live price",
        duration: "2h – 3h",
        pickup: "Hotel pickup in Pattaya",
        bestFor: "Comfort and direct airport transfer",
        trackingId: "click_12go_taxi_pattaya_don_mueang_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/Pattaya/Don-Mueang-Airport/?z=15791301&sub_id=pattaya-don-mueang-airport-taxi",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Check live price",
        duration: "3h – 4h",
        pickup: "Operator pickup point or hotel area",
        bestFor: "Budget travelers",
        trackingId: "click_12go_van_pattaya_don_mueang_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/Pattaya/Don-Mueang-Airport/?z=15791301&sub_id=pattaya-don-mueang-airport-van",
      },
      {
        id: "bus",
        name: "Bus / Coach",
        price: "Check live price",
        duration: "3h – 4h 30m",
        pickup: "Pattaya bus station or operator point",
        bestFor: "Low-cost airport connection",
        trackingId: "click_12go_bus_pattaya_don_mueang_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/Pattaya/Don-Mueang-Airport/?z=15791301&sub_id=pattaya-don-mueang-airport-bus",
      },
    ],
  },
  {
    slug: "koh-chang-to-bangkok",
    title: "Koh Chang to Bangkok Transfers",
    seoTitle: "Koh Chang to Bangkok Transfers | Ferry, Van, Bus & Taxi",
    seoDescription:
      "Compare transfer options from Koh Chang to Bangkok. Check ferry, van, bus and private taxi options, pickup details, estimated travel times and live partner prices.",
    from: "Koh Chang",
    to: "Bangkok",
    intro:
      "Compare travel options from Koh Chang to Bangkok, including ferry plus van, ferry plus bus, shared van and private taxi. This island route usually involves a ferry crossing to the mainland, so always check whether ferry tickets, hotel pickup, pier transfer and Bangkok drop-off are included before booking. Thailand Transfers is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-general",
    options: [
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Check live price",
        duration: "7h – 10h",
        pickup: "Koh Chang hotel, pier or operator pickup point",
        bestFor:
          "Most travelers who want a simple island-to-city transfer with fewer steps",
        trackingId: "koh-chang-bangkok-ferry-van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-ferry-van",
      },
      {
        id: "ferry-bus",
        name: "Ferry + Bus",
        price: "Check live price",
        duration: "8h – 10h 30m",
        pickup: "Koh Chang or mainland pier connection",
        bestFor: "Budget travelers returning from Koh Chang to Bangkok city",
        trackingId: "koh-chang-bangkok-ferry-bus",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-ferry-bus",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Check live price",
        duration: "7h – 9h 30m",
        pickup: "Selected Koh Chang pickup points or operator meeting point",
        bestFor:
          "Travelers who want a shared transfer and will check luggage rules before booking",
        trackingId: "koh-chang-bangkok-van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-van",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Check live price",
        duration: "6h – 8h",
        pickup: "Hotel or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants more comfort",
        trackingId: "koh-chang-bangkok-taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-taxi",
      },
    ],
  },
  {
    slug: "koh-chang-to-suvarnabhumi-airport",
    title: "Koh Chang to Suvarnabhumi Airport Transfers",
    seoTitle:
      "Koh Chang to Suvarnabhumi Airport Transfers | Ferry, Van, Taxi & Flight",
    seoDescription:
      "Compare transfer options from Koh Chang to Suvarnabhumi Airport. Check ferry, van, taxi and flight options, pickup details, travel times and live partner prices.",
    from: "Koh Chang",
    to: "Suvarnabhumi Airport",
    intro:
      "Compare transfer options from Koh Chang to Suvarnabhumi Airport, including ferry plus van, bus plus ferry, private taxi and flight combinations. This airport route usually involves a ferry crossing from Koh Chang to the mainland, so always check whether hotel pickup, ferry crossing, pier transfer, luggage allowance and airport drop-off are included before booking. Allow extra time before your flight. Thailand Transfers is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-general",
    options: [
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Check live price",
        duration: "6h 30m – 9h",
        pickup: "Koh Chang hotel, pier or operator pickup point",
        bestFor:
          "Most travelers going from Koh Chang directly to Suvarnabhumi Airport",
        trackingId: "koh-chang-suvarnabhumi-airport-ferry-van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-ferry-van",
      },
      {
        id: "bus-ferry",
        name: "Bus + Ferry",
        price: "Check live price",
        duration: "7h – 10h",
        pickup: "Koh Chang or mainland pier connection",
        bestFor:
          "Budget travelers who want an airport connection and will check the full route details",
        trackingId: "koh-chang-suvarnabhumi-airport-bus-ferry",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-bus-ferry",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Check live price",
        duration: "5h 30m – 7h 30m",
        pickup: "Hotel or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who needs more control before a flight",
        trackingId: "koh-chang-suvarnabhumi-airport-taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-taxi",
      },
      {
        id: "flight",
        name: "Flight + Transfer",
        price: "Check live price",
        duration: "Check live schedule",
        pickup: "Koh Chang, Trat area or airport connection depending on ticket",
        bestFor:
          "Travelers who prefer flying part of the journey and will check all connection details",
        trackingId: "koh-chang-suvarnabhumi-airport-flight",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-flight",
      },
    ],
  },
  {
    slug: "suvarnabhumi-airport-to-koh-chang",
    title: "Suvarnabhumi Airport to Koh Chang Transfers",
    seoTitle:
      "Suvarnabhumi Airport to Koh Chang Transfers | Ferry, Van, Bus & Taxi",
    seoDescription:
      "Compare transfer options from Suvarnabhumi Airport to Koh Chang. Check ferry, van, bus, taxi and flight options, airport pickup details, travel times and live partner prices.",
    from: "Suvarnabhumi Airport",
    to: "Koh Chang",
    intro:
      "Compare transfer options from Suvarnabhumi Airport to Koh Chang, including ferry plus van, bus plus ferry, private taxi and flight combinations. This route starts at Bangkok Suvarnabhumi Airport and usually involves travel to the mainland pier plus a ferry crossing to Koh Chang, so always check airport pickup point, arrival timing, ferry crossing, pier transfer, luggage allowance and hotel drop-off before booking. If you arrive by plane, allow extra time for immigration, baggage claim and possible flight delays, and check live schedules before choosing a ticket. Thailand Transfers is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-general",
    options: [
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Check live price",
        duration: "6h – 9h",
        pickup: "Suvarnabhumi Airport pickup point or operator meeting point",
        bestFor:
          "Most travelers arriving at Suvarnabhumi Airport and going directly to Koh Chang",
        trackingId: "suvarnabhumi-airport-koh-chang-ferry-van",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-ferry-van",
      },
      {
        id: "bus-ferry",
        name: "Bus + Ferry",
        price: "Check live price",
        duration: "7h – 10h",
        pickup: "Suvarnabhumi Airport or operator meeting point",
        bestFor:
          "Budget travelers who want an airport-to-island connection and will check the full route details",
        trackingId: "suvarnabhumi-airport-koh-chang-bus-ferry",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-bus-ferry",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Check live price",
        duration: "5h 30m – 8h",
        pickup: "Suvarnabhumi Airport arrival area or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants more control after landing",
        trackingId: "suvarnabhumi-airport-koh-chang-taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-taxi",
      },
      {
        id: "flight",
        name: "Flight + Transfer",
        price: "Check live price",
        duration: "Check live schedule",
        pickup:
          "Suvarnabhumi Airport, Trat area or pier connection depending on ticket",
        bestFor:
          "Travelers who prefer flying part of the journey and will check all connection details",
        trackingId: "suvarnabhumi-airport-koh-chang-flight",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-flight",
      },
    ],
  },
  {
    slug: "bangkok-to-hua-hin",
    title: "Bangkok to Hua Hin Transfers",
    seoTitle: "Bangkok to Hua Hin Transfers | Van, Bus, Train & Taxi",
    seoDescription:
      "Compare transfer options from Bangkok to Hua Hin. Check van, bus, train and private taxi options, pickup details, estimated travel times and live partner prices.",
    from: "Bangkok",
    to: "Hua Hin",
    intro:
      "Compare transfer options from Bangkok to Hua Hin, including shared van, bus, train and private taxi. This is one of the most popular city-to-beach routes from Bangkok, especially for travelers going to Hua Hin after spending time in the capital. Check pickup location, Hua Hin drop-off point, luggage allowance, travel time and live partner prices before booking. Thailand Transfers is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-general",
    options: [
      {
        id: "van",
        name: "Shared Van",
        price: "Check live price",
        duration: "3h – 5h",
        pickup: "Bangkok van station or operator meeting point",
        bestFor:
          "Most travelers who want a simple and affordable transfer from Bangkok to Hua Hin",
        trackingId: "bangkok-hua-hin-van",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-van",
      },
      {
        id: "bus",
        name: "Bus",
        price: "Check live price",
        duration: "4h – 6h",
        pickup: "Bangkok bus terminal or selected operator pickup point",
        bestFor:
          "Budget travelers who prefer a larger vehicle and will check the departure station before booking",
        trackingId: "bangkok-hua-hin-bus",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-bus",
      },
      {
        id: "train",
        name: "Train",
        price: "Check live price",
        duration: "4h – 6h",
        pickup: "Bangkok railway station",
        bestFor:
          "Travelers who prefer rail travel and want to arrive close to central Hua Hin",
        trackingId: "bangkok-hua-hin-train",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-train",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Check live price",
        duration: "2h 45m – 4h",
        pickup: "Bangkok hotel, airport or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants door-to-door comfort",
        trackingId: "bangkok-hua-hin-taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-taxi",
      },
    ],
  },
];

export function getRoutePageBySlug(slug: string) {
  return routePages.find((route) => route.slug === slug);
}
