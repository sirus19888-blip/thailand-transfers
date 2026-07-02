export type RouteTransportOption = {
  id: string;
  name: string;
  price?: string;
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
        price: "Final price on partner",
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
      "Compare transfer options from Koh Chang to Bangkok. Check ferry, van, bus and private taxi options, pickup details, estimated travel times and final partner prices.",
    from: "Koh Chang",
    to: "Bangkok",
    intro:
      "Compare travel options from Koh Chang to Bangkok, including ferry plus van, ferry plus bus, shared van and private taxi. This island route usually involves a ferry crossing to the mainland, so always check whether ferry tickets, hotel pickup, pier transfer and Bangkok drop-off are included before booking. Ferry Koh Chang guidance currently shows daily service from 06:30 to 18:30, cash-only pier tickets for standalone ferry crossings, and Trat / Centrepoint Ferry suspended since July 2024. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-general",
    options: [
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Final price on partner",
        duration: "7h – 10h",
        pickup: "Koh Chang hotel, pier or operator pickup point",
        bestFor:
          "Most travelers who want a simple island-to-city transfer with fewer steps",
        trackingId: "click_12go_koh_chang_bangkok_ferry_van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-ferry-van",
      },
      {
        id: "ferry-bus",
        name: "Ferry + Bus",
        price: "Final price on partner",
        duration: "8h – 10h 30m",
        pickup: "Koh Chang or mainland pier connection",
        bestFor: "Budget travelers returning from Koh Chang to Bangkok city",
        trackingId: "click_12go_koh_chang_bangkok_ferry_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-ferry-bus",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Final price on partner",
        duration: "7h – 9h 30m",
        pickup: "Selected Koh Chang pickup points or operator meeting point",
        bestFor:
          "Travelers who want a shared transfer and will check luggage rules before booking",
        trackingId: "click_12go_koh_chang_bangkok_van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/bangkok/?z=15791301&sub_id=koh-chang-bangkok-van",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "6h – 8h",
        pickup: "Hotel or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants more comfort",
        trackingId: "click_12go_koh_chang_bangkok_taxi",
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
      "Compare transfer options from Koh Chang to Suvarnabhumi Airport. Check ferry, van, taxi and flight options, pickup details, travel times and final partner prices.",
    from: "Koh Chang",
    to: "Suvarnabhumi Airport",
    intro:
      "Compare transfer options from Koh Chang to Suvarnabhumi Airport, including ferry plus van, bus plus ferry, private taxi and flight combinations. This airport route usually involves a ferry crossing from Koh Chang to the mainland, so always check whether hotel pickup, ferry crossing, pier transfer, luggage allowance and airport drop-off are included before booking. Ferry Koh Chang guidance currently shows daily service from 06:30 to 18:30, cash-only pier tickets for standalone ferry crossings, and Trat / Centrepoint Ferry suspended since July 2024. Allow extra time before your flight. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-general",
    options: [
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Final price on partner",
        duration: "6h 30m – 9h",
        pickup: "Koh Chang hotel, pier or operator pickup point",
        bestFor:
          "Most travelers going from Koh Chang directly to Suvarnabhumi Airport",
        trackingId: "click_12go_koh_chang_suvarnabhumi_airport_ferry_van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-ferry-van",
      },
      {
        id: "bus-ferry",
        name: "Bus + Ferry",
        price: "Final price on partner",
        duration: "7h – 10h",
        pickup: "Koh Chang or mainland pier connection",
        bestFor:
          "Budget travelers who want an airport connection and will check the full route details",
        trackingId: "click_12go_koh_chang_suvarnabhumi_airport_bus_ferry",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-bus-ferry",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "5h 30m – 7h 30m",
        pickup: "Hotel or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who needs more control before a flight",
        trackingId: "click_12go_koh_chang_suvarnabhumi_airport_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-chang/suvarnabhumi-airport/?z=15791301&sub_id=koh-chang-suvarnabhumi-airport-taxi",
      },
      {
        id: "flight",
        name: "Flight + Transfer",
        price: "Final price on partner",
        duration: "Check current schedule",
        pickup: "Koh Chang, Trat area or airport connection depending on ticket",
        bestFor:
          "Travelers who prefer flying part of the journey and will check all connection details",
        trackingId: "click_12go_koh_chang_suvarnabhumi_airport_flight",
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
      "Compare transfer options from Suvarnabhumi Airport to Koh Chang. Check ferry, van, bus, taxi and flight options, airport pickup details, travel times and final partner prices.",
    from: "Suvarnabhumi Airport",
    to: "Koh Chang",
    intro:
      "Compare transfer options from Suvarnabhumi Airport to Koh Chang, including ferry plus van, bus plus ferry, private taxi and flight combinations. This route starts at Bangkok Suvarnabhumi Airport and usually involves travel to the mainland pier plus a ferry crossing to Koh Chang, so always check airport pickup point, arrival timing, ferry crossing, pier transfer, luggage allowance and hotel drop-off before booking. Ferry Koh Chang guidance currently shows daily service from 06:30 to 18:30, cash-only pier tickets for standalone ferry crossings, and Trat / Centrepoint Ferry suspended since July 2024. If you arrive by plane, allow extra time for immigration, baggage claim and possible flight delays, and check current schedules before choosing a ticket. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-general",
    options: [
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Final price on partner",
        duration: "6h – 9h",
        pickup: "Suvarnabhumi Airport pickup point or operator meeting point",
        bestFor:
          "Most travelers arriving at Suvarnabhumi Airport and going directly to Koh Chang",
        trackingId: "click_12go_suvarnabhumi_airport_koh_chang_ferry_van",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-ferry-van",
      },
      {
        id: "bus-ferry",
        name: "Bus + Ferry",
        price: "Final price on partner",
        duration: "7h – 10h",
        pickup: "Suvarnabhumi Airport or operator meeting point",
        bestFor:
          "Budget travelers who want an airport-to-island connection and will check the full route details",
        trackingId: "click_12go_suvarnabhumi_airport_koh_chang_bus_ferry",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-bus-ferry",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "5h 30m – 8h",
        pickup: "Suvarnabhumi Airport arrival area or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants more control after landing",
        trackingId: "click_12go_suvarnabhumi_airport_koh_chang_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/koh-chang/?z=15791301&sub_id=suvarnabhumi-airport-koh-chang-taxi",
      },
      {
        id: "flight",
        name: "Flight + Transfer",
        price: "Final price on partner",
        duration: "Check current schedule",
        pickup:
          "Suvarnabhumi Airport, Trat area or pier connection depending on ticket",
        bestFor:
          "Travelers who prefer flying part of the journey and will check all connection details",
        trackingId: "click_12go_suvarnabhumi_airport_koh_chang_flight",
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
      "Compare transfer options from Bangkok to Hua Hin. Check van, bus, train and private taxi options, pickup details, estimated travel times and final partner prices.",
    from: "Bangkok",
    to: "Hua Hin",
    intro:
      "Compare transfer options from Bangkok to Hua Hin, including shared van, bus, train and private taxi. This is one of the most popular city-to-beach routes from Bangkok, especially for travelers going to Hua Hin after spending time in the capital. Check pickup location, Hua Hin drop-off point, luggage allowance, travel time and final partner prices before booking. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-general",
    options: [
      {
        id: "van",
        name: "Shared Van",
        price: "Final price on partner",
        duration: "3h – 5h",
        pickup: "Bangkok van station or operator meeting point",
        bestFor:
          "Most travelers who want a simple and affordable transfer from Bangkok to Hua Hin",
        trackingId: "click_12go_bangkok_hua_hin_van",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-van",
      },
      {
        id: "bus",
        name: "Bus",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Bangkok bus terminal or selected operator pickup point",
        bestFor:
          "Budget travelers who prefer a larger vehicle and will check the departure station before booking",
        trackingId: "click_12go_bangkok_hua_hin_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-bus",
      },
      {
        id: "train",
        name: "Train",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Bangkok railway station",
        bestFor:
          "Travelers who prefer rail travel and want to arrive close to central Hua Hin",
        trackingId: "click_12go_bangkok_hua_hin_train",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-train",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "2h 45m – 4h",
        pickup: "Bangkok hotel, airport or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants door-to-door comfort",
        trackingId: "click_12go_bangkok_hua_hin_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/hua-hin/?z=15791301&sub_id=bangkok-hua-hin-taxi",
      },
    ],
  },
  {
    slug: "suvarnabhumi-airport-to-hua-hin",
    title: "Suvarnabhumi Airport to Hua Hin Transfers",
    seoTitle:
      "Suvarnabhumi Airport to Hua Hin Transfers | Bus, Taxi & Van",
    seoDescription:
      "Compare transfer options from Suvarnabhumi Airport to Hua Hin. Check bus, private taxi, bus plus van and flight transfer options, airport pickup details, travel times and final partner prices.",
    from: "Suvarnabhumi Airport",
    to: "Hua Hin",
    intro:
      "Compare transfer options from Suvarnabhumi Airport to Hua Hin, including airport bus, private taxi, bus plus van and flight transfer combinations. This is a popular airport-to-beach route for travelers landing in Bangkok and going directly to Hua Hin. Check airport pickup point, arrival timing, luggage allowance, Hua Hin drop-off location, travel time and final partner prices before booking. If you arrive by plane, allow extra time for immigration, baggage claim and possible flight delays. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/suvarnabhumi-airport/hua-hin/?z=15791301&sub_id=suvarnabhumi-airport-hua-hin-general",
    options: [
      {
        id: "bus",
        name: "Airport Bus",
        price: "Final price on partner",
        duration: "3h 30m – 5h",
        pickup: "Suvarnabhumi Airport bus pickup point or operator meeting point",
        bestFor:
          "Most travelers who want a simple and affordable airport-to-Hua Hin transfer",
        trackingId: "click_12go_suvarnabhumi_airport_hua_hin_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/hua-hin/?z=15791301&sub_id=suvarnabhumi-airport-hua-hin-bus",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "2h 45m – 4h",
        pickup: "Suvarnabhumi Airport arrival area or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants door-to-door comfort after landing",
        trackingId: "click_12go_suvarnabhumi_airport_hua_hin_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/hua-hin/?z=15791301&sub_id=suvarnabhumi-airport-hua-hin-taxi",
      },
      {
        id: "bus-van",
        name: "Bus + Van",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Suvarnabhumi Airport pickup point or operator meeting point",
        bestFor:
          "Travelers who want a budget connection and will check the full route details before booking",
        trackingId: "click_12go_suvarnabhumi_airport_hua_hin_bus_van",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/hua-hin/?z=15791301&sub_id=suvarnabhumi-airport-hua-hin-bus-van",
      },
      {
        id: "flight",
        name: "Flight + Transfer",
        price: "Final price on partner",
        duration: "Check current schedule",
        pickup:
          "Suvarnabhumi Airport or connecting airport transfer depending on ticket",
        bestFor:
          "Travelers comparing all available partner options and willing to check connection details carefully",
        trackingId: "click_12go_suvarnabhumi_airport_hua_hin_flight",
        affiliateUrl:
          "https://12go.asia/en/travel/suvarnabhumi-airport/hua-hin/?z=15791301&sub_id=suvarnabhumi-airport-hua-hin-flight",
      },
    ],
  },
  {
    slug: "don-mueang-airport-to-hua-hin",
    title: "Don Mueang Airport to Hua Hin Transfers",
    seoTitle:
      "Don Mueang Airport to Hua Hin Transfers | Train, Bus, Van & Taxi",
    seoDescription:
      "Compare transfer options from Don Mueang Airport to Hua Hin. Check train, bus, bus plus van and private taxi options, airport pickup details, travel times and final partner prices.",
    from: "Don Mueang Airport",
    to: "Hua Hin",
    intro:
      "Compare transfer options from Don Mueang Airport to Hua Hin, including train, bus, bus plus van and private taxi. This route is useful for travelers landing at Bangkok Don Mueang Airport and going directly to Hua Hin. Check airport pickup point, station or terminal details, luggage allowance, Hua Hin drop-off location, travel time and final partner prices before booking. If you arrive by plane, allow extra time for immigration, baggage claim and possible flight delays. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/don-mueang-airport/hua-hin/?z=15791301&sub_id=don-mueang-airport-hua-hin-general",
    options: [
      {
        id: "train",
        name: "Train",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Don Mueang railway station or selected rail connection",
        bestFor:
          "Travelers who prefer rail travel and want to avoid some Bangkok road traffic",
        trackingId: "click_12go_don_mueang_airport_hua_hin_train",
        affiliateUrl:
          "https://12go.asia/en/travel/don-mueang-airport/hua-hin/?z=15791301&sub_id=don-mueang-airport-hua-hin-train",
      },
      {
        id: "bus",
        name: "Bus",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Don Mueang Airport, Bangkok bus terminal or operator meeting point",
        bestFor:
          "Budget travelers who want a lower-cost transfer and will check the exact departure point",
        trackingId: "click_12go_don_mueang_airport_hua_hin_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/don-mueang-airport/hua-hin/?z=15791301&sub_id=don-mueang-airport-hua-hin-bus",
      },
      {
        id: "bus-van",
        name: "Bus + Van",
        price: "Final price on partner",
        duration: "4h 30m – 6h 30m",
        pickup: "Don Mueang Airport or operator connection point depending on ticket",
        bestFor:
          "Travelers comparing budget connections and willing to check transfer details carefully",
        trackingId: "click_12go_don_mueang_airport_hua_hin_bus_van",
        affiliateUrl:
          "https://12go.asia/en/travel/don-mueang-airport/hua-hin/?z=15791301&sub_id=don-mueang-airport-hua-hin-bus-van",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "3h – 4h 30m",
        pickup: "Don Mueang Airport arrival area or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants door-to-door comfort after landing",
        trackingId: "click_12go_don_mueang_airport_hua_hin_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/don-mueang-airport/hua-hin/?z=15791301&sub_id=don-mueang-airport-hua-hin-taxi",
      },
    ],
  },
  {
    slug: "surat-thani-airport-to-koh-samui",
    title: "Surat Thani Airport to Koh Samui Transfers",
    seoTitle:
      "Surat Thani Airport to Koh Samui Transfers | Bus, Ferry & Van",
    seoDescription:
      "Compare transfer options from Surat Thani Airport to Koh Samui. Check bus plus ferry, van plus ferry and combined transfer options, airport pickup details, ferry crossing, travel times and final partner prices.",
    from: "Surat Thani Airport",
    to: "Koh Samui",
    intro:
      "Compare transfer options from Surat Thani Airport to Koh Samui, including bus plus ferry, van plus ferry, ferry plus van and combined airport-to-island tickets. This route is useful for travelers landing at Surat Thani Airport and continuing to Koh Samui without booking each leg separately. Check airport pickup point, pier transfer, ferry crossing, Koh Samui arrival pier, hotel drop-off if included, luggage allowance, travel time and final partner prices before booking. If you arrive by plane, allow extra time for baggage claim and possible flight delays. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/surat-thani-airport/koh-samui/?z=15791301&sub_id=surat-thani-airport-koh-samui-general",
    options: [
      {
        id: "bus-ferry",
        name: "Bus + Ferry",
        price: "Final price on partner",
        duration: "3h 30m – 5h",
        pickup: "Surat Thani Airport or operator airport meeting point",
        bestFor:
          "Most travelers who want a simple airport-to-island transfer with ferry included",
        trackingId: "click_12go_surat_thani_airport_koh_samui_bus_ferry",
        affiliateUrl:
          "https://12go.asia/en/travel/surat-thani-airport/koh-samui/?z=15791301&sub_id=surat-thani-airport-koh-samui-bus-ferry",
      },
      {
        id: "van-ferry",
        name: "Van + Ferry",
        price: "Final price on partner",
        duration: "3h 30m – 5h 30m",
        pickup: "Surat Thani Airport or selected operator pickup point",
        bestFor:
          "Travelers who want a smaller shared transfer and will check luggage rules before booking",
        trackingId: "click_12go_surat_thani_airport_koh_samui_van_ferry",
        affiliateUrl:
          "https://12go.asia/en/travel/surat-thani-airport/koh-samui/?z=15791301&sub_id=surat-thani-airport-koh-samui-van-ferry",
      },
      {
        id: "bus-ferry-van",
        name: "Bus + Ferry + Van",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Surat Thani Airport or operator connection point depending on ticket",
        bestFor:
          "Travelers who want a combined ticket and need to check whether Koh Samui hotel drop-off is included",
        trackingId: "click_12go_surat_thani_airport_koh_samui_bus_ferry_van",
        affiliateUrl:
          "https://12go.asia/en/travel/surat-thani-airport/koh-samui/?z=15791301&sub_id=surat-thani-airport-koh-samui-bus-ferry-van",
      },
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Final price on partner",
        duration: "3h 30m – 5h 30m",
        pickup: "Surat Thani Airport, Surat Thani office or pier connection depending on ticket",
        bestFor:
          "Travelers comparing all airport-to-Koh Samui partner options and willing to check connection details carefully",
        trackingId: "click_12go_surat_thani_airport_koh_samui_ferry_van",
        affiliateUrl:
          "https://12go.asia/en/travel/surat-thani-airport/koh-samui/?z=15791301&sub_id=surat-thani-airport-koh-samui-ferry-van",
      },
    ],
  },
  {
    slug: "koh-samui-to-surat-thani-airport",
    title: "Koh Samui to Surat Thani Airport Transfers",
    seoTitle:
      "Koh Samui to Surat Thani Airport Transfers | Ferry, Bus & Van",
    seoDescription:
      "Compare transfer options from Koh Samui to Surat Thani Airport. Check ferry plus bus, ferry plus van and combined transfer options, island pickup details, ferry crossing, travel times and final partner prices.",
    from: "Koh Samui",
    to: "Surat Thani Airport",
    intro:
      "Compare transfer options from Koh Samui to Surat Thani Airport, including ferry plus bus, ferry plus van, bus plus ferry and combined island-to-airport tickets. This route is useful for travelers leaving Koh Samui and connecting to a flight from Surat Thani Airport. Check hotel pickup if included, Koh Samui departure pier, ferry crossing, mainland transfer, airport drop-off, luggage allowance, travel time and final partner prices before booking. Allow extra time before your flight, especially during bad weather, ferry delays or busy travel periods. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/koh-samui/surat-thani-airport/?z=15791301&sub_id=koh-samui-surat-thani-airport-general",
    options: [
      {
        id: "ferry-bus",
        name: "Ferry + Bus",
        price: "Final price on partner",
        duration: "3h – 5h",
        pickup: "Koh Samui pier, hotel pickup or operator meeting point",
        bestFor:
          "Most travelers who want a simple island-to-airport transfer with ferry and bus included",
        trackingId: "click_12go_koh_samui_surat_thani_airport_ferry_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-samui/surat-thani-airport/?z=15791301&sub_id=koh-samui-surat-thani-airport-ferry-bus",
      },
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Final price on partner",
        duration: "3h – 5h 30m",
        pickup: "Koh Samui pier, hotel pickup or selected operator pickup point",
        bestFor:
          "Travelers who want a smaller shared transfer and will check luggage rules before booking",
        trackingId: "click_12go_koh_samui_surat_thani_airport_ferry_van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-samui/surat-thani-airport/?z=15791301&sub_id=koh-samui-surat-thani-airport-ferry-van",
      },
      {
        id: "van-ferry-bus",
        name: "Van + Ferry + Bus",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Koh Samui hotel transfer or operator connection point depending on ticket",
        bestFor:
          "Travelers who want a combined ticket from hotel area to Surat Thani Airport",
        trackingId: "click_12go_koh_samui_surat_thani_airport_van_ferry_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-samui/surat-thani-airport/?z=15791301&sub_id=koh-samui-surat-thani-airport-van-ferry-bus",
      },
      {
        id: "bus-ferry-van",
        name: "Bus + Ferry + Van",
        price: "Final price on partner",
        duration: "4h – 6h",
        pickup: "Koh Samui hotel, town transfer point or departure pier depending on ticket",
        bestFor:
          "Travelers comparing all island-to-airport partner options and checking connection details carefully",
        trackingId: "click_12go_koh_samui_surat_thani_airport_bus_ferry_van",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-samui/surat-thani-airport/?z=15791301&sub_id=koh-samui-surat-thani-airport-bus-ferry-van",
      },
    ],
  },
  {
    slug: "phuket-airport-to-patong-beach",
    title: "Phuket Airport to Patong Beach Transfers",
    seoTitle:
      "Phuket Airport to Patong Beach Transfers | Bus, Van & Taxi",
    seoDescription:
      "Compare transfer options from Phuket Airport to Patong Beach. Check airport bus, shared van, private taxi and taxi plus van options, pickup details, travel times and final partner prices.",
    from: "Phuket Airport",
    to: "Patong Beach",
    intro:
      "Compare transfer options from Phuket Airport to Patong Beach, including airport bus, shared van, private taxi and taxi plus van combinations. This is one of the most popular Phuket arrival routes for travelers going from the airport to hotels near Patong Beach. Check airport pickup point, hotel drop-off area, luggage allowance, travel time and final partner prices before booking. If you arrive by plane, allow extra time for immigration, baggage claim and possible flight delays. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/phuket-airport/patong-beach/?z=15791301&sub_id=phuket-airport-patong-beach-general",
    options: [
      {
        id: "bus",
        name: "Airport Bus",
        price: "Final price on partner",
        duration: "1h – 2h",
        pickup: "Phuket Airport bus pickup point or operator meeting point",
        bestFor:
          "Budget travelers going from Phuket Airport to Patong Beach",
        trackingId: "click_12go_phuket_airport_patong_beach_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/patong-beach/?z=15791301&sub_id=phuket-airport-patong-beach-bus",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Final price on partner",
        duration: "1h – 2h",
        pickup: "Phuket Airport or selected operator pickup point",
        bestFor:
          "Travelers who want a shared transfer and will check luggage rules before booking",
        trackingId: "click_12go_phuket_airport_patong_beach_van",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/patong-beach/?z=15791301&sub_id=phuket-airport-patong-beach-van",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "45m – 1h 30m",
        pickup: "Phuket Airport arrival area or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants door-to-door comfort",
        trackingId: "click_12go_phuket_airport_patong_beach_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/patong-beach/?z=15791301&sub_id=phuket-airport-patong-beach-taxi",
      },
      {
        id: "taxi-van",
        name: "Taxi + Van",
        price: "Final price on partner",
        duration: "1h – 2h",
        pickup: "Phuket Airport or partner meeting point depending on ticket",
        bestFor:
          "Travelers comparing all available airport-to-Patong partner options",
        trackingId: "click_12go_phuket_airport_patong_beach_taxi_van",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/patong-beach/?z=15791301&sub_id=phuket-airport-patong-beach-taxi-van",
      },
    ],
  },
  {
    slug: "patong-beach-to-phuket-airport",
    title: "Patong Beach to Phuket Airport Transfers",
    seoTitle:
      "Patong Beach to Phuket Airport Transfers | Bus, Van & Taxi",
    seoDescription:
      "Compare transfer options from Patong Beach to Phuket Airport. Check airport bus, shared van, private taxi and taxi plus van options, pickup details, travel times and final partner prices.",
    from: "Patong Beach",
    to: "Phuket Airport",
    intro:
      "Compare transfer options from Patong Beach to Phuket Airport, including airport bus, shared van, private taxi and taxi plus van combinations. This route is useful for travelers leaving Patong and connecting to a flight from Phuket Airport. Check hotel pickup area, airport drop-off point, luggage allowance, travel time and final partner prices before booking. Allow extra time before your flight, especially during busy traffic periods or bad weather. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/patong-beach/phuket-airport/?z=15791301&sub_id=patong-beach-phuket-airport-general",
    options: [
      {
        id: "bus",
        name: "Airport Bus",
        price: "Final price on partner",
        duration: "1h – 2h",
        pickup: "Patong Beach bus stop or operator meeting point",
        bestFor:
          "Budget travelers going from Patong Beach to Phuket Airport",
        trackingId: "click_12go_patong_beach_phuket_airport_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/patong-beach/phuket-airport/?z=15791301&sub_id=patong-beach-phuket-airport-bus",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Final price on partner",
        duration: "1h – 2h",
        pickup: "Patong Beach hotel area or selected operator pickup point",
        bestFor:
          "Travelers who want a shared transfer and will check pickup time carefully",
        trackingId: "click_12go_patong_beach_phuket_airport_van",
        affiliateUrl:
          "https://12go.asia/en/travel/patong-beach/phuket-airport/?z=15791301&sub_id=patong-beach-phuket-airport-van",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "45m – 1h 30m",
        pickup: "Patong Beach hotel or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone who wants more control before a flight",
        trackingId: "click_12go_patong_beach_phuket_airport_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/patong-beach/phuket-airport/?z=15791301&sub_id=patong-beach-phuket-airport-taxi",
      },
      {
        id: "taxi-van",
        name: "Taxi + Van",
        price: "Final price on partner",
        duration: "1h – 2h",
        pickup: "Patong Beach hotel area or partner meeting point depending on ticket",
        bestFor:
          "Travelers comparing all Patong-to-airport partner transfer options",
        trackingId: "click_12go_patong_beach_phuket_airport_taxi_van",
        affiliateUrl:
          "https://12go.asia/en/travel/patong-beach/phuket-airport/?z=15791301&sub_id=patong-beach-phuket-airport-taxi-van",
      },
    ],
  },
  {
    slug: "phuket-airport-to-kata-karon",
    title: "Phuket Airport to Kata and Karon Transfers",
    seoTitle:
      "Phuket Airport to Kata and Karon Transfers | Bus, Van & Taxi",
    seoDescription:
      "Compare transfer options from Phuket Airport to Kata and Karon. Check airport bus, shared van, private taxi and taxi plus van options, pickup details, travel times and final partner prices.",
    from: "Phuket Airport",
    to: "Kata and Karon",
    intro:
      "Compare transfer options from Phuket Airport to Kata and Karon, including airport bus, shared van, private taxi and taxi plus van combinations. This route is useful for travelers landing in Phuket and going directly to hotels around Kata Beach or Karon Beach. Check airport pickup point, hotel drop-off area, luggage allowance, travel time and final partner prices before booking. If you arrive by plane, allow extra time for immigration, baggage claim and possible flight delays. Thailand Transfer Guide is an independent travel comparison website. Booking and support are handled by travel partners and operators.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/phuket-airport/kata-karon/?z=15791301&sub_id=phuket-airport-kata-karon-general",
    options: [
      {
        id: "bus",
        name: "Airport Bus",
        price: "Final price on partner",
        duration: "1h 15m – 2h 30m",
        pickup: "Phuket Airport bus pickup point or operator meeting point",
        bestFor:
          "Budget travelers going from Phuket Airport to Kata or Karon",
        trackingId: "click_12go_phuket_airport_kata_karon_bus",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/kata-karon/?z=15791301&sub_id=phuket-airport-kata-karon-bus",
      },
      {
        id: "van",
        name: "Shared Van",
        price: "Final price on partner",
        duration: "1h 15m – 2h 30m",
        pickup: "Phuket Airport or selected operator pickup point",
        bestFor:
          "Travelers who want a shared transfer and will check hotel drop-off details",
        trackingId: "click_12go_phuket_airport_kata_karon_van",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/kata-karon/?z=15791301&sub_id=phuket-airport-kata-karon-van",
      },
      {
        id: "taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "1h – 1h 45m",
        pickup: "Phuket Airport arrival area or selected private pickup point",
        bestFor:
          "Families, groups, travelers with luggage or anyone going directly to a hotel",
        trackingId: "click_12go_phuket_airport_kata_karon_taxi",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/kata-karon/?z=15791301&sub_id=phuket-airport-kata-karon-taxi",
      },
      {
        id: "taxi-van",
        name: "Taxi + Van",
        price: "Final price on partner",
        duration: "1h 15m – 2h 30m",
        pickup: "Phuket Airport or partner meeting point depending on ticket",
        bestFor:
          "Travelers comparing all available airport-to-Kata/Karon partner options",
        trackingId: "click_12go_phuket_airport_kata_karon_taxi_van",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket-airport/kata-karon/?z=15791301&sub_id=phuket-airport-kata-karon-taxi-van",
      },
    ],
  },
{
    slug: "krabi-airport-to-ao-nang",
    title: "Krabi Airport to Ao Nang transfers",
    seoTitle: "Krabi Airport to Ao Nang Transfers | Bus, Van & Taxi",
    seoDescription:
      "Compare transfer options from Krabi Airport to Ao Nang. Check airport bus, shared van, private taxi, pickup details, travel times and final partner prices.",
    from: "Krabi Airport",
    to: "Ao Nang",
    intro:
      "Compare airport transfer options from Krabi Airport to Ao Nang, including airport bus, shared van and private taxi.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/krabi-airport/ao-nang/?z=15791301&sub_id=krabi-airport-ao-nang-general",
    options: [
      {
        id: "airport-bus",
        name: "Airport Bus",
        price: "Final price on partner",
        duration: "45m – 1h 30m",
        pickup: "Krabi Airport bus point",
        bestFor: "Budget travelers",
        trackingId: "click_12go_bus_krabi_airport_ao_nang",
        affiliateUrl:
          "https://12go.asia/en/travel/krabi-airport/ao-nang/?z=15791301&sub_id=krabi-airport-ao-nang-bus",
      },
      {
        id: "shared-van",
        name: "Shared Van",
        price: "Final price on partner",
        duration: "30m – 1h 15m",
        pickup: "Krabi Airport operator point",
        bestFor: "Solo travelers and couples",
        trackingId: "click_12go_van_krabi_airport_ao_nang",
        affiliateUrl:
          "https://12go.asia/en/travel/krabi-airport/ao-nang/?z=15791301&sub_id=krabi-airport-ao-nang-van",
      },
      {
        id: "private-taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "30m – 1h",
        pickup: "Krabi Airport arrivals area",
        bestFor: "Comfort and hotel drop-off",
        trackingId: "click_12go_taxi_krabi_airport_ao_nang",
        affiliateUrl:
          "https://12go.asia/en/travel/krabi-airport/ao-nang/?z=15791301&sub_id=krabi-airport-ao-nang-taxi",
      },
      {
        id: "taxi-van",
        name: "Taxi + Van",
        price: "Final price on partner",
        duration: "30m – 1h 15m",
        pickup: "Krabi Airport pickup point",
        bestFor: "Small groups and luggage",
        trackingId: "click_12go_taxi_van_krabi_airport_ao_nang",
        affiliateUrl:
          "https://12go.asia/en/travel/krabi-airport/ao-nang/?z=15791301&sub_id=krabi-airport-ao-nang-taxi-van",
      },
    ],
  },
  {
    slug: "ao-nang-to-krabi-airport",
    title: "Ao Nang to Krabi Airport transfers",
    seoTitle: "Ao Nang to Krabi Airport Transfers | Bus, Van & Taxi",
    seoDescription:
      "Compare transfer options from Ao Nang to Krabi Airport. Check airport bus, shared van, private taxi, pickup details, travel times and final partner prices.",
    from: "Ao Nang",
    to: "Krabi Airport",
    intro:
      "Compare return airport transfer options from Ao Nang to Krabi Airport, including shared van, airport bus and private taxi.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/ao-nang/krabi-airport/?z=15791301&sub_id=ao-nang-krabi-airport-general",
    options: [
      {
        id: "airport-bus",
        name: "Airport Bus",
        price: "Final price on partner",
        duration: "45m – 1h 30m",
        pickup: "Ao Nang bus or operator point",
        bestFor: "Budget airport transfer",
        trackingId: "click_12go_bus_ao_nang_krabi_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/ao-nang/krabi-airport/?z=15791301&sub_id=ao-nang-krabi-airport-bus",
      },
      {
        id: "shared-van",
        name: "Shared Van",
        price: "Final price on partner",
        duration: "30m – 1h 15m",
        pickup: "Ao Nang hotel area or operator point",
        bestFor: "Solo travelers and couples",
        trackingId: "click_12go_van_ao_nang_krabi_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/ao-nang/krabi-airport/?z=15791301&sub_id=ao-nang-krabi-airport-van",
      },
      {
        id: "private-taxi",
        name: "Private Taxi",
        price: "Final price on partner",
        duration: "30m – 1h",
        pickup: "Ao Nang hotel pickup",
        bestFor: "Comfort and early flights",
        trackingId: "click_12go_taxi_ao_nang_krabi_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/ao-nang/krabi-airport/?z=15791301&sub_id=ao-nang-krabi-airport-taxi",
      },
      {
        id: "taxi-van",
        name: "Taxi + Van",
        price: "Final price on partner",
        duration: "30m – 1h 15m",
        pickup: "Ao Nang hotel or pickup area",
        bestFor: "Small groups and luggage",
        trackingId: "click_12go_taxi_van_ao_nang_krabi_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/ao-nang/krabi-airport/?z=15791301&sub_id=ao-nang-krabi-airport-taxi-van",
      },
    ],
  },
  {
    slug: "phuket-to-koh-phi-phi",
    title: "Phuket to Koh Phi Phi transfers",
    seoTitle: "Phuket to Koh Phi Phi Transfers | Ferry & Speedboat",
    seoDescription:
      "Compare ferry and speedboat options from Phuket to Koh Phi Phi. Check departure pier, arrival pier, luggage rules, travel times and final partner prices.",
    from: "Phuket",
    to: "Koh Phi Phi",
    intro:
      "Compare sea transfer options from Phuket to Koh Phi Phi, including ferry, speedboat and combined hotel transfer options.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/phuket/koh-phi-phi/?z=15791301&sub_id=phuket-koh-phi-phi-general",
    options: [
      {
        id: "ferry",
        name: "Ferry",
        price: "Final price on partner",
        duration: "1h 30m – 3h",
        pickup: "Phuket pier or included hotel pickup",
        bestFor: "Most travelers and luggage",
        trackingId: "click_12go_ferry_phuket_koh_phi_phi",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket/koh-phi-phi/?z=15791301&sub_id=phuket-koh-phi-phi-ferry",
      },
      {
        id: "speedboat",
        name: "Speedboat",
        price: "Final price on partner",
        duration: "1h – 1h 30m",
        pickup: "Phuket pier or operator meeting point",
        bestFor: "Fastest sea transfer",
        trackingId: "click_12go_speedboat_phuket_koh_phi_phi",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket/koh-phi-phi/?z=15791301&sub_id=phuket-koh-phi-phi-speedboat",
      },
      {
        id: "ferry-van",
        name: "Hotel Transfer + Ferry",
        price: "Final price on partner",
        duration: "2h – 4h",
        pickup: "Phuket hotel area if included",
        bestFor: "Door-to-pier convenience",
        trackingId: "click_12go_ferry_van_phuket_koh_phi_phi",
        affiliateUrl:
          "https://12go.asia/en/travel/phuket/koh-phi-phi/?z=15791301&sub_id=phuket-koh-phi-phi-ferry-van",
      },
    ],
  },
  {
    slug: "krabi-to-koh-phi-phi",
    title: "Krabi to Koh Phi Phi transfers",
    seoTitle: "Krabi to Koh Phi Phi Transfers | Ferry & Speedboat",
    seoDescription:
      "Compare ferry and speedboat options from Krabi to Koh Phi Phi. Check departure pier, arrival pier, luggage rules, travel times and final partner prices.",
    from: "Krabi",
    to: "Koh Phi Phi",
    intro:
      "Compare ferry, speedboat and combined transfer options from Krabi to Koh Phi Phi.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/krabi/koh-phi-phi/?z=15791301&sub_id=krabi-koh-phi-phi-general",
    options: [
      {
        id: "ferry",
        name: "Ferry",
        price: "Final price on partner",
        duration: "1h 30m – 3h",
        pickup: "Krabi pier or operator point",
        bestFor: "Most travelers and luggage",
        trackingId: "click_12go_ferry_krabi_koh_phi_phi",
        affiliateUrl:
          "https://12go.asia/en/travel/krabi/koh-phi-phi/?z=15791301&sub_id=krabi-koh-phi-phi-ferry",
      },
      {
        id: "speedboat",
        name: "Speedboat",
        price: "Final price on partner",
        duration: "45m – 1h 30m",
        pickup: "Krabi pier or operator point",
        bestFor: "Fastest island transfer",
        trackingId: "click_12go_speedboat_krabi_koh_phi_phi",
        affiliateUrl:
          "https://12go.asia/en/travel/krabi/koh-phi-phi/?z=15791301&sub_id=krabi-koh-phi-phi-speedboat",
      },
      {
        id: "van-ferry",
        name: "Van + Ferry",
        price: "Final price on partner",
        duration: "2h – 4h",
        pickup: "Krabi hotel area if included",
        bestFor: "Hotel pickup and pier transfer",
        trackingId: "click_12go_van_ferry_krabi_koh_phi_phi",
        affiliateUrl:
          "https://12go.asia/en/travel/krabi/koh-phi-phi/?z=15791301&sub_id=krabi-koh-phi-phi-van-ferry",
      },
    ],
  },
  {
    slug: "koh-phi-phi-to-krabi",
    title: "Koh Phi Phi to Krabi transfers",
    seoTitle: "Koh Phi Phi to Krabi Transfers | Ferry & Speedboat",
    seoDescription:
      "Compare ferry and speedboat options from Koh Phi Phi to Krabi. Check departure pier, arrival pier, luggage rules, travel times and final partner prices.",
    from: "Koh Phi Phi",
    to: "Krabi",
    intro:
      "Compare ferry, speedboat and onward transfer options from Koh Phi Phi to Krabi.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/koh-phi-phi/krabi/?z=15791301&sub_id=koh-phi-phi-krabi-general",
    options: [
      {
        id: "ferry",
        name: "Ferry",
        price: "Final price on partner",
        duration: "1h 30m – 3h",
        pickup: "Tonsai Pier or operator pier",
        bestFor: "Most travelers and luggage",
        trackingId: "click_12go_ferry_koh_phi_phi_krabi",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-phi-phi/krabi/?z=15791301&sub_id=koh-phi-phi-krabi-ferry",
      },
      {
        id: "speedboat",
        name: "Speedboat",
        price: "Final price on partner",
        duration: "45m – 1h 30m",
        pickup: "Tonsai Pier or operator pier",
        bestFor: "Fastest return transfer",
        trackingId: "click_12go_speedboat_koh_phi_phi_krabi",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-phi-phi/krabi/?z=15791301&sub_id=koh-phi-phi-krabi-speedboat",
      },
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Final price on partner",
        duration: "2h – 4h",
        pickup: "Tonsai Pier with onward transfer if included",
        bestFor: "Krabi hotel or airport connections",
        trackingId: "click_12go_ferry_van_koh_phi_phi_krabi",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-phi-phi/krabi/?z=15791301&sub_id=koh-phi-phi-krabi-ferry-van",
      },
    ],
  },
{
    slug: "surat-thani-airport-to-koh-phangan",
    title: "Surat Thani Airport to Koh Phangan transfers",
    seoTitle: "Surat Thani Airport to Koh Phangan Transfers | Bus, Van & Ferry",
    seoDescription:
      "Compare transfer options from Surat Thani Airport to Koh Phangan. Check bus, van, ferry and combined transfer options, pickup details, travel times and final partner prices.",
    from: "Surat Thani Airport",
    to: "Koh Phangan",
    intro:
      "Compare combined airport transfer options from Surat Thani Airport to Koh Phangan, including bus, van and ferry combinations.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/surat-thani-airport/koh-phangan/?z=15791301&sub_id=surat-thani-airport-koh-phangan-general",
    options: [
      {
        id: "bus-ferry",
        name: "Bus + Ferry",
        price: "Final price on partner",
        duration: "4h – 7h",
        pickup: "Surat Thani Airport operator point",
        bestFor: "Budget island transfer",
        trackingId: "click_12go_bus_ferry_surat_thani_airport_koh_phangan",
        affiliateUrl:
          "https://12go.asia/en/travel/surat-thani-airport/koh-phangan/?z=15791301&sub_id=surat-thani-airport-koh-phangan-bus-ferry",
      },
      {
        id: "van-ferry",
        name: "Van + Ferry",
        price: "Final price on partner",
        duration: "4h – 6h 30m",
        pickup: "Surat Thani Airport meeting point",
        bestFor: "Simple airport-to-island connection",
        trackingId: "click_12go_van_ferry_surat_thani_airport_koh_phangan",
        affiliateUrl:
          "https://12go.asia/en/travel/surat-thani-airport/koh-phangan/?z=15791301&sub_id=surat-thani-airport-koh-phangan-van-ferry",
      },
      {
        id: "taxi-ferry",
        name: "Taxi + Ferry",
        price: "Final price on partner",
        duration: "3h 30m – 6h",
        pickup: "Surat Thani Airport arrivals area",
        bestFor: "Comfort and fewer transfers",
        trackingId: "click_12go_taxi_ferry_surat_thani_airport_koh_phangan",
        affiliateUrl:
          "https://12go.asia/en/travel/surat-thani-airport/koh-phangan/?z=15791301&sub_id=surat-thani-airport-koh-phangan-taxi-ferry",
      },
    ],
  },
  {
    slug: "koh-phangan-to-surat-thani-airport",
    title: "Koh Phangan to Surat Thani Airport transfers",
    seoTitle: "Koh Phangan to Surat Thani Airport Transfers | Ferry, Bus & Van",
    seoDescription:
      "Compare transfer options from Koh Phangan to Surat Thani Airport. Check ferry, bus, van and combined transfer options, pickup details, travel times and final partner prices.",
    from: "Koh Phangan",
    to: "Surat Thani Airport",
    intro:
      "Compare return transfer options from Koh Phangan to Surat Thani Airport, including ferry, bus and van combinations.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/koh-phangan/surat-thani-airport/?z=15791301&sub_id=koh-phangan-surat-thani-airport-general",
    options: [
      {
        id: "ferry-bus",
        name: "Ferry + Bus",
        price: "Final price on partner",
        duration: "4h – 7h",
        pickup: "Koh Phangan pier",
        bestFor: "Budget airport connection",
        trackingId: "click_12go_ferry_bus_koh_phangan_surat_thani_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-phangan/surat-thani-airport/?z=15791301&sub_id=koh-phangan-surat-thani-airport-ferry-bus",
      },
      {
        id: "ferry-van",
        name: "Ferry + Van",
        price: "Final price on partner",
        duration: "4h – 6h 30m",
        pickup: "Koh Phangan pier or operator point",
        bestFor: "Airport transfer after island stay",
        trackingId: "click_12go_ferry_van_koh_phangan_surat_thani_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-phangan/surat-thani-airport/?z=15791301&sub_id=koh-phangan-surat-thani-airport-ferry-van",
      },
      {
        id: "ferry-taxi",
        name: "Ferry + Taxi",
        price: "Final price on partner",
        duration: "3h 30m – 6h",
        pickup: "Koh Phangan pier",
        bestFor: "Comfort and early flights",
        trackingId: "click_12go_ferry_taxi_koh_phangan_surat_thani_airport",
        affiliateUrl:
          "https://12go.asia/en/travel/koh-phangan/surat-thani-airport/?z=15791301&sub_id=koh-phangan-surat-thani-airport-ferry-taxi",
      },
    ],
  },
  {
    slug: "bangkok-to-chiang-mai",
    title: "Bangkok to Chiang Mai transfers",
    seoTitle: "Bangkok to Chiang Mai Transfers | Train, Bus & Flight",
    seoDescription:
      "Compare transfer options from Bangkok to Chiang Mai. Check train, bus and flight options, departure points, travel times and final partner prices.",
    from: "Bangkok",
    to: "Chiang Mai",
    intro:
      "Compare long-distance travel options from Bangkok to Chiang Mai, including train, bus and flight connections.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/bangkok/chiang-mai/?z=15791301&sub_id=bangkok-chiang-mai-general",
    options: [
      {
        id: "train",
        name: "Train",
        price: "Final price on partner",
        duration: "10h – 14h",
        pickup: "Bangkok railway station",
        bestFor: "Overnight travel and scenery",
        trackingId: "click_12go_train_bangkok_chiang_mai",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/chiang-mai/?z=15791301&sub_id=bangkok-chiang-mai-train",
      },
      {
        id: "bus",
        name: "Bus",
        price: "Final price on partner",
        duration: "9h – 12h",
        pickup: "Bangkok bus terminal or operator point",
        bestFor: "Budget long-distance travel",
        trackingId: "click_12go_bus_bangkok_chiang_mai",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/chiang-mai/?z=15791301&sub_id=bangkok-chiang-mai-bus",
      },
      {
        id: "flight",
        name: "Flight",
        price: "Final price on partner",
        duration: "1h 15m – 1h 30m",
        pickup: "Bangkok airport",
        bestFor: "Fastest option",
        trackingId: "click_12go_flight_bangkok_chiang_mai",
        affiliateUrl:
          "https://12go.asia/en/travel/bangkok/chiang-mai/?z=15791301&sub_id=bangkok-chiang-mai-flight",
      },
    ],
  },
  {
    slug: "chiang-mai-to-bangkok",
    title: "Chiang Mai to Bangkok transfers",
    seoTitle: "Chiang Mai to Bangkok Transfers | Train, Bus & Flight",
    seoDescription:
      "Compare transfer options from Chiang Mai to Bangkok. Check train, bus and flight options, departure points, travel times and final partner prices.",
    from: "Chiang Mai",
    to: "Bangkok",
    intro:
      "Compare long-distance travel options from Chiang Mai to Bangkok, including train, bus and flight connections.",
    mainAffiliateUrl:
      "https://12go.asia/en/travel/chiang-mai/bangkok/?z=15791301&sub_id=chiang-mai-bangkok-general",
    options: [
      {
        id: "train",
        name: "Train",
        price: "Final price on partner",
        duration: "10h – 14h",
        pickup: "Chiang Mai railway station",
        bestFor: "Overnight travel and scenery",
        trackingId: "click_12go_train_chiang_mai_bangkok",
        affiliateUrl:
          "https://12go.asia/en/travel/chiang-mai/bangkok/?z=15791301&sub_id=chiang-mai-bangkok-train",
      },
      {
        id: "bus",
        name: "Bus",
        price: "Final price on partner",
        duration: "9h – 12h",
        pickup: "Chiang Mai bus terminal or operator point",
        bestFor: "Budget long-distance travel",
        trackingId: "click_12go_bus_chiang_mai_bangkok",
        affiliateUrl:
          "https://12go.asia/en/travel/chiang-mai/bangkok/?z=15791301&sub_id=chiang-mai-bangkok-bus",
      },
      {
        id: "flight",
        name: "Flight",
        price: "Final price on partner",
        duration: "1h 15m – 1h 30m",
        pickup: "Chiang Mai Airport",
        bestFor: "Fastest option",
        trackingId: "click_12go_flight_chiang_mai_bangkok",
        affiliateUrl:
          "https://12go.asia/en/travel/chiang-mai/bangkok/?z=15791301&sub_id=chiang-mai-bangkok-flight",
      },
    ],
  },
];

export function getRoutePageBySlug(slug: string) {
  return routePages.find((route) => route.slug === slug);
}



