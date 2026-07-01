export type RouteFact = {
  title: string;
  text: string;
};

export type RouteFaq = {
  question: string;
  answer: string;
};

export type RouteFactSet = {
  intro?: string;
  quickFacts?: RouteFact[];
  tips?: string[];
  faqs?: RouteFaq[];
  warnings?: string[];
  guideFacts?: string[];
  checkedOn: string;
};

export const routeFacts: Record<string, RouteFactSet> = {
  "bangkok-airport-to-pattaya": {
    checkedOn: "2026-07",
    intro:
      // src: RRC Airport-Pattaya route + RRC FAQ + routePrices.ts, checked 2026-07.
      "BKK to Pattaya is one of the rare Thailand airport routes where the cheap option can genuinely work: Roong Reuang Coach runs direct airport coaches from Suvarnabhumi Level 1 / Gate 8 to North Pattaya. The catch is the last mile. If the bus time fits and you are happy to take a local ride after North Pattaya, it is clean and good value; if you land late, carry heavy bags or need Jomtien/Naklua/Pratumnak door-to-door, a taxi is the calmer plan.",
    quickFacts: [
      // src: RRC Airport-Pattaya route, checked 2026-07.
      {
        title: "Direct RRC coach window",
        text: "Roong Reuang Coach publishes Suvarnabhumi Airport to Pattaya buses at 7:30, 9:30, 11:30, 13:30, 15:30, 17:30 and 18:30, with about 2 hours on the road when traffic is normal.",
      },
      // src: RRC Airport-Pattaya route + RRC FAQ, checked 2026-07.
      {
        title: "Where to go after arrivals",
        text: "The RRC counter is listed at the passenger terminal on Level 1, Gate 8; the Pattaya stop is North Pattaya Transport Station on Pattaya Nuea, near Sukhumvit.",
      },
      // src: RRC Airport-Pattaya route + routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Budget vs taxi cost",
        text: "RRC lists a 139 THB direct coach fare; this guide keeps a partner-planning band of THB150-250 per bus seat and THB1,300-1,900 per taxi vehicle.",
      },
    ],
    tips: [
      // src: RRC Airport-Pattaya route, checked 2026-07.
      "If you want the bus, do immigration and baggage first, then go down to Level 1 and look for Gate 8. Do not wander between arrival-floor taxi offers and the bus counter while half-asleep.",
      // src: RRC FAQ, checked 2026-07.
      "RRC asks passengers to check in before departure, and its FAQ says to be at the counter at least 30 minutes early. After a long-haul arrival, build that into your bus choice.",
      // src: RRC FAQ, checked 2026-07.
      "RRC says a delayed-flight missed bus may be changed at the counter to the next available bus with vacant seats, with a THB50 service fee. That is useful, but it is not a guarantee of an immediate seat.",
      // src: RRC Airport-Pattaya route, checked 2026-07.
      "The current official Pattaya bus list ends at 18:30. If your plane lands in the evening, stop treating the coach as Plan A and compare taxi or private transfer.",
      // src: RRC Airport-Pattaya route + local route geography, checked 2026-07.
      "North Pattaya Transport Station is not the beach-road hotel strip. Budget a short local ride if your hotel is in Central Pattaya, Jomtien, Naklua or Pratumnak.",
      // src: RRC FAQ baggage section, checked 2026-07.
      "For the coach, keep luggage simple: RRC allows one 20 kg suitcase plus a small personal bag free, and publishes extra fees for heavier or oversized items.",
      // src: AOT/Suvarnabhumi public taxi context + routePrices.ts, checked 2026-07.
      "Taxi is not just a luxury pick here. It solves late arrivals, family luggage, strollers and exact hotel drop-off in one decision.",
      "The common scam shape at BKK is urgency: a person approaches you before you have checked the counter, quotes a vague 'special' fare, and moves fast. Slow down, use your booking, the official counter or a named driver pickup.",
    ],
    warnings: [
      // src: RRC Airport-Pattaya route, checked 2026-07.
      "The airport bus is a fixed schedule to North Pattaya, not a private hotel transfer. Match the final stop to your hotel area before paying.",
      // src: RRC Airport-Pattaya route, checked 2026-07.
      "The current RRC Pattaya airport timetable published by the operator ends at 18:30. Evening and delayed arrivals need a taxi/private-transfer backup.",
      // src: RRC FAQ baggage section, checked 2026-07.
      "Extra bags, golf bags, bicycles, strollers and surfboards can trigger RRC baggage fees, so do not assume every large item rides free.",
    ],
    faqs: [
      {
        question: "What is the easiest way from Bangkok Airport to Pattaya after a long flight?",
        answer:
          "Private taxi is easiest because it removes the timetable and last-mile problem. The RRC bus is great value when you land early enough, travel light and can continue from North Pattaya by local taxi or songthaew.",
      },
      {
        question: "Where is the BKK to Pattaya bus counter?",
        answer:
          // src: RRC Airport-Pattaya route + RRC FAQ, checked 2026-07.
          "Roong Reuang Coach lists its Suvarnabhumi counter at the passenger terminal on Level 1, Gate 8. After baggage claim, go down to Level 1 and follow the airport transport signs, then use the exact counter or voucher point shown on your ticket.",
      },
      {
        question: "How late can I take the bus to Pattaya?",
        answer:
          // src: RRC Airport-Pattaya route, checked 2026-07.
          "The current RRC Pattaya airport page publishes departures through 18:30. If your flight lands near or after that window, plan on a taxi or private transfer instead of gambling on a coach seat.",
      },
      {
        question: "How much should I budget for BKK to Pattaya?",
        answer:
          // src: RRC Airport-Pattaya route + routePrices.ts routePricesCheckedOn 2026-06.
          "RRC publishes a 139 THB direct coach fare. Inside this guide, the partner planning range is THB150-250 per bus seat and THB1,300-1,900 per taxi vehicle; the final payable price is still the partner or operator price at booking.",
      },
      {
        question: "Does the bus drop me at my Pattaya hotel?",
        answer:
          // src: RRC Airport-Pattaya route, checked 2026-07.
          "No, not by default. The RRC Airport-Pattaya route is listed to North Pattaya Transport Station, so most beach-road, Jomtien, Naklua and Pratumnak hotels still need a local ride after the coach.",
      },
      {
        question: "What if immigration or baggage claim takes too long?",
        answer:
          // src: RRC FAQ, checked 2026-07.
          "RRC says delayed-flight cases should be handled at the counter and may be moved to the next bus with vacant seats for a THB50 service fee. In practice, if the next bus is too late or full, taxi becomes the stress-free fallback.",
      },
      {
        question: "Which option is better with children or lots of luggage?",
        answer:
          // src: RRC FAQ baggage section + routePrices.ts, checked 2026-07.
          "Use a private taxi or private van if you have children, a stroller, golf bags or several suitcases. RRC has specific baggage limits and extra-bag fees; a private vehicle gives you more control over space and hotel drop-off.",
      },
    ],
    guideFacts: [
      // src: RRC Airport-Pattaya route, checked 2026-07.
      "Roong Reuang Coach lists the Suvarnabhumi pickup at Level 1, Gate 8, with direct buses to North Pattaya Transport Station.",
      // src: RRC Airport-Pattaya route, checked 2026-07.
      "Current RRC airport-to-Pattaya departures are 7:30 through 18:30, and the route page says about 2 hours depending on traffic.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "This guide keeps bus planning around THB150-250 per person and taxi around THB1,300-1,900 per vehicle before final partner checks.",
    ],
  },

  "don-mueang-airport-to-pattaya": {
    checkedOn: "2026-07",
    intro:
      // src: AOT Don Mueang transport page + routePrices.ts + donMueangPattayaRoute.ts, checked 2026-07.
      "DMK to Pattaya is a different animal from BKK to Pattaya. Don Mueang does not have the simple RRC Level 1 / Gate 8 Pattaya coach setup at Suvarnabhumi, so you are choosing between a direct taxi/private transfer, a partner van, or a connection through Bangkok transport points. If you arrive late or with luggage, a direct car is usually worth the extra money; if you are on a tight budget, make sure the partner ticket really starts at DMK and does not quietly make you self-transfer across Bangkok.",
    quickFacts: [
      // src: AOT Don Mueang transport page, checked 2026-07.
      {
        title: "DMK public bus fallback",
        text: "AOT lists airport public buses from International Terminal 1st Floor Gate 6 and Domestic Terminal 1st Floor Gate 12, including A1 to BTS Chatuchak and Mo Chit 2 from 06:50 to 23:59 for 30 THB.",
      },
      // src: donMueangPattayaRoute.ts + routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Direct route planning",
        text: "This guide shows DMK-Pattaya taxi around 2h-2h30m at THB1,650-2,200 per vehicle, with shared van planning around 2h30m-3h30m at THB400-500 per person.",
      },
      // src: AOT Don Mueang transport page, checked 2026-07.
      {
        title: "BKK airport-bus workaround",
        text: "AOT lists a free DMK-BKK airport shuttle from International Terminal 1st Floor Gate 6 between 05:00 and 24:00 for passengers with onward air tickets.",
      },
    ],
    tips: [
      // src: AOT Don Mueang transport page, checked 2026-07.
      "First identify your terminal: international arrivals use Terminal 1, domestic arrivals use Terminal 2. AOT lists public bus access on the 1st floor at Gate 6 for T1 and Gate 12 for T2.",
      // src: AOT Don Mueang transport page, checked 2026-07.
      "If a cheap option asks you to go to Mo Chit, remember that A1 is an airport-city bus, not a Pattaya transfer. You still need the onward Pattaya leg after reaching the bus terminal area.",
      // src: donMueangPattayaRoute.ts + routePrices.ts routePricesCheckedOn 2026-06.
      "For most tired arrivals, taxi is the cleanest DMK-Pattaya plan: roughly 2h-2h30m in normal conditions and priced in this guide at THB1,650-2,200 per vehicle.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Shared van only makes sense when the pickup point is clearly at DMK or the operator tells you exactly how to reach the meeting point. Saving money is not worth a mystery transfer across Bangkok.",
      "Be careful with vague taxi quotes in the arrivals area. Pattaya is far enough that a 'meter later' promise can turn into a bad negotiation once your bags are already in the car.",
      // src: AOT Don Mueang transport page, checked 2026-07.
      "The free DMK-BKK shuttle is useful only for eligible airport-to-airport passengers. Do not build a Pattaya plan around it unless you can actually use it and still meet the BKK bus timetable.",
      "For a late flight, stop trying to stitch together A1 plus a bus terminal plus Pattaya. Book a direct car and arrive with your patience intact.",
    ],
    warnings: [
      // src: RRC Airport-Pattaya route + AOT Don Mueang transport page, checked 2026-07.
      "Do not assume the Suvarnabhumi Pattaya coach also starts from Don Mueang. RRC publishes that simple airport coach from BKK, while DMK needs a direct transfer or a Bangkok connection.",
      // src: AOT Don Mueang transport page, checked 2026-07.
      "A1/A2 buses are Bangkok access buses, not Pattaya buses. They can help you reach a city connection, but they do not solve the whole route.",
      "If a driver or tout refuses to give a clear all-in Pattaya price before loading bags, pause and use a booked taxi/private transfer instead.",
    ],
    faqs: [
      {
        question: "Is there a direct airport bus from Don Mueang to Pattaya?",
        answer:
          // src: AOT Don Mueang transport page + RRC Airport-Pattaya route, checked 2026-07.
          "I did not verify a simple official DMK-Pattaya airport coach like the RRC bus from Suvarnabhumi. Treat DMK as taxi, partner van, or self-transfer through Bangkok unless your partner ticket clearly says DMK pickup.",
      },
      {
        question: "What is the best option from DMK to Pattaya late at night?",
        answer:
          "Use a private taxi or pre-booked car. Late at night, the money saved by stitching together public connections is usually lost in waiting, unclear pickup points and the final ride into your Pattaya hotel area.",
      },
      {
        question: "How much does DMK to Pattaya usually cost in this guide?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06.
          "The planning bands in routePrices are THB400-500 per person for shared van, THB180-300 per person for bus or combined options, and THB1,650-2,200 per vehicle for taxi. Final price still comes from the partner.",
      },
      {
        question: "Can I take a public bus from DMK to connect onward?",
        answer:
          // src: AOT Don Mueang transport page, checked 2026-07.
          "Yes, as a connection only. AOT lists A1 from DMK to BTS Chatuchak and Mo Chit 2 from 06:50 to 23:59 for 30 THB. From there you still need the Pattaya leg and a local ride at the end.",
      },
      {
        question: "Should I transfer to Suvarnabhumi first for the Pattaya bus?",
        answer:
          // src: AOT Don Mueang transport page + RRC Airport-Pattaya route, checked 2026-07.
          "Only if you are eligible for the DMK-BKK airport shuttle and the RRC Pattaya timetable still works. AOT lists the airport shuttle from 05:00 to 24:00 for passengers with air tickets, while the current RRC Pattaya bus list from BKK ends at 18:30.",
      },
      {
        question: "Which Pattaya area should I put on the booking?",
        answer:
          "Use your exact hotel or condo area, not just 'Pattaya'. Jomtien, Naklua, Pratumnak and Central Pattaya can add meaningful last-mile time if your ticket ends at a station or operator point.",
      },
    ],
  },

  "suvarnabhumi-airport-to-hua-hin": {
    checkedOn: "2026-07",
    intro:
      // src: RRC Airport-Hua Hin route + RRC FAQ + routePrices.ts, checked 2026-07.
      "BKK to Hua Hin is long enough that the right choice is mostly about your landing time. RRC gives this route a proper airport coach from Level 1 / Gate 8, and it is excellent value when your flight arrives in the daytime. After the last practical coach, or when you have kids, golf bags or a hotel far from the bus station, a private taxi is simply the softer landing.",
    quickFacts: [
      // src: RRC Airport-Hua Hin route, checked 2026-07.
      {
        title: "RRC airport coach schedule",
        text: "RRC publishes Suvarnabhumi to Hua Hin departures at 6:30, 7:30, 8:30, 9:30, 10:30, 12:00, 13:30, 14:30, 16:00, 17:00 and 18:30.",
      },
      // src: RRC Airport-Hua Hin route, checked 2026-07.
      {
        title: "Official coach fare and time",
        text: "The RRC Hua Hin page lists 367 THB per seat and about 4 hours, depending on traffic, with pickup at Suvarnabhumi Level 1 / Gate 8.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Partner price bands",
        text: "This guide keeps planning bands at THB500-600 per airport-bus seat, THB1,000-1,200 for bus + van, and THB1,800-2,800 per taxi vehicle.",
      },
    ],
    tips: [
      // src: RRC Airport-Hua Hin route + RRC FAQ, checked 2026-07.
      "After arrivals, do not rush straight to the coach time on your phone. RRC's FAQ says immigration and bags normally take about 1 hour, and its check-in guidance asks you to be at the counter before departure.",
      // src: RRC Airport-Hua Hin route, checked 2026-07.
      "For the coach, go to Suvarnabhumi Level 1 / Gate 8. This is the same general transport level many airport buses use, so read the counter sign rather than joining any random queue.",
      // src: RRC Airport-Hua Hin route, checked 2026-07.
      "The published RRC airport-to-Hua Hin schedule ends at 18:30. If your flight lands after late afternoon, taxi becomes the honest plan.",
      // src: RRC Airport-Hua Hin route + RRC FAQ, checked 2026-07.
      "RRC lists Hua Hin Bus Station as the main stop, near Hua Hin airport. That is not the same as a hotel drop-off in the night-market, Khao Takiab or beachfront resort area.",
      // src: RRC FAQ, checked 2026-07.
      "RRC's FAQ mentions a Hua Hin hotel shuttle from the bus station for THB100 per person; treat it as an on-arrival add-on, not something to assume is built into every ticket.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Taxi costs more, but for two tired adults plus luggage it can be the difference between one handover and three small decisions at the end of a long flight.",
      "Airport tout pressure is less dangerous when you already know your plan. If you chose coach, go to Gate 8; if you chose taxi, follow the named driver or partner meeting point.",
      "In rainy season or on holiday weekends, do not book the last possible coach after an international arrival. One slow baggage belt can erase the whole buffer.",
    ],
    warnings: [
      // src: RRC Airport-Hua Hin route, checked 2026-07.
      "The current RRC airport coach list ends at 18:30 from Suvarnabhumi. Late arrivals need a private-transfer backup.",
      // src: RRC Airport-Hua Hin route + RRC FAQ, checked 2026-07.
      "The coach is to Hua Hin Bus Station, not automatically to every hotel. Confirm any hotel shuttle or local taxi before you count the trip as door-to-door.",
      "Avoid accepting vague long-distance taxi offers inside arrivals. For Hua Hin, agree the full destination, toll/waiting treatment and luggage fit before leaving the airport.",
    ],
    faqs: [
      {
        question: "Where do I catch the Suvarnabhumi to Hua Hin bus?",
        answer:
          // src: RRC Airport-Hua Hin route, checked 2026-07.
          "RRC lists the Suvarnabhumi pickup at Level 1, Gate 8. After baggage claim, go down to Level 1 and look for the Hua Hin / RRC counter, then follow the ticket or counter instruction.",
      },
      {
        question: "What are the current airport bus times to Hua Hin?",
        answer:
          // src: RRC Airport-Hua Hin route, checked 2026-07.
          "The RRC Hua Hin page currently shows departures from Suvarnabhumi at 6:30, 7:30, 8:30, 9:30, 10:30, 12:00, 13:30, 14:30, 16:00, 17:00 and 18:30.",
      },
      {
        question: "How much is the bus from BKK to Hua Hin?",
        answer:
          // src: RRC Airport-Hua Hin route + routePrices.ts routePricesCheckedOn 2026-06.
          "RRC publishes 367 THB per seat on its route page. This guide's partner-planning band is THB500-600 per bus seat because partner listings can include different booking conditions or availability.",
      },
      {
        question: "How long does BKK to Hua Hin take?",
        answer:
          // src: RRC Airport-Hua Hin route + routePages.ts, checked 2026-07.
          "RRC says about 4 hours by airport coach depending on traffic. The route data in this guide plans 3h30m-5h by airport bus and 2h45m-4h by private taxi.",
      },
      {
        question: "What should I do if my flight is delayed?",
        answer:
          // src: RRC FAQ, checked 2026-07.
          "If you miss a coach because of a flight delay, RRC says to contact the counter; they may move you to the next bus with vacant seats and charge a THB50 service fee. If the next seat is too late, take a taxi.",
      },
      {
        question: "Does the Hua Hin bus go to my hotel?",
        answer:
          // src: RRC Airport-Hua Hin route + RRC FAQ, checked 2026-07.
          "Plan as if the main bus ticket ends at Hua Hin Bus Station. RRC's FAQ mentions a hotel shuttle from the station for THB100 per person, but you should confirm it on arrival or choose taxi for door-to-door.",
      },
      {
        question: "Who should choose taxi instead of the coach?",
        answer:
          "Choose taxi after a late landing, with children, with golf bags or several suitcases, or if your hotel is outside the easy center. The coach is best for daytime arrivals and travelers who are fine with a final local ride.",
      },
    ],
    guideFacts: [
      // src: RRC Airport-Hua Hin route, checked 2026-07.
      "RRC lists Suvarnabhumi Level 1 / Gate 8 as the airport pickup for the Hua Hin coach.",
      // src: RRC Airport-Hua Hin route, checked 2026-07.
      "Current RRC airport-to-Hua Hin departures run from 6:30 to 18:30, with about 4 hours on the road depending on traffic.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "This guide keeps airport-bus planning around THB500-600 per person and taxi around THB1,800-2,800 per vehicle before final partner checks.",
    ],
  },

  "bangkok-to-hua-hin": {
    checkedOn: "2026-07",
    intro:
      // src: routePages.ts + routePrices.ts + SRT D-Ticket, checked 2026-07.
      "Bangkok to Hua Hin is a city-to-beach transfer where the cheap choices are real, but the pickup point matters more than the label. Van, bus and train can all work if you start from the right terminal or station; taxi wins when you want hotel pickup, family luggage space or a late departure without another Bangkok connection.",
    quickFacts: [
      // src: routePages.ts, checked against route data 2026-07.
      {
        title: "Guide travel times",
        text: "The route data plans 3h-5h by shared van, 4h-6h by bus or train, and 2h45m-4h by private taxi.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Checked price bands",
        text: "Planning bands are THB200-300 per van seat, THB180-280 per bus seat, and THB2,300-2,800 per taxi vehicle.",
      },
      // src: SRT D-Ticket official site, checked 2026-07.
      {
        title: "Train booking source",
        text: "State Railway of Thailand sells eligible long-distance tickets through D-Ticket and publishes the 1690 SRT hotline for help.",
      },
    ],
    tips: [
      // src: routePages.ts, checked 2026-07.
      "Do not book 'Bangkok pickup' without reading the pickup field. A van station, bus terminal, rail station and hotel pickup are four different mornings.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Solo travelers usually start with van or bus: the guide bands sit around THB180-300 per seat, far below a private car.",
      // src: routePages.ts + SRT D-Ticket, checked 2026-07.
      "Train is the least road-traffic-sensitive option, but it is not automatically the fastest. Choose it when station access is easy and you like a calmer ride.",
      // src: routePages.ts + routePrices.ts, checked 2026-07.
      "Taxi is best when your Bangkok hotel is not near the departure terminal, when you have children, or when the total seat price starts to approach a private vehicle.",
      "For morning departures, leave your hotel earlier than the map suggests. Bangkok traffic around terminal access roads can be worse than the highway to Hua Hin.",
      "For late departures, choose taxi unless the operator shows a clear evening bus, van or train and a pickup point you can reach without stress.",
      "Scam risk here is usually not exotic; it is the ordinary 'special taxi' quote that hides tolls, waits or a vague Hua Hin drop-off. Get the full destination and inclusions before you agree.",
      "In Hua Hin, ask whether your ticket ends at a bus station, railway station, operator point or hotel. The final 10-20 minutes can be annoying with luggage in the heat.",
    ],
    warnings: [
      // src: routePages.ts, checked 2026-07.
      "Bangkok-to-Hua Hin tickets can start from different Bangkok terminals or stations. The word 'Bangkok' is not a pickup point.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Cheap seat prices only stay cheap if you do not add two taxis across Bangkok and Hua Hin. Compare the total door-to-door cost before choosing.",
      "If your hotel checkout, traffic and terminal transfer leave no buffer, do not book the last scheduled departure of the day.",
    ],
    faqs: [
      {
        question: "What is the best way from Bangkok to Hua Hin?",
        answer:
          "For most budget travelers, shared van or bus is the first comparison. For families, late departures or awkward hotel locations, taxi is usually better. Train is a good calm option when reaching the station is easy.",
      },
      {
        question: "How much should I budget for Bangkok to Hua Hin?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06.
          "The checked guide bands are THB180-280 per bus seat, THB200-300 per van seat, and THB2,300-2,800 per taxi vehicle. Final partner pricing can still change by date, vehicle and pickup.",
      },
      {
        question: "Is train better than bus or van?",
        answer:
          // src: routePages.ts + SRT D-Ticket, checked 2026-07.
          "Train avoids highway traffic but the guide still plans 4h-6h, similar to bus. It is best when the station is convenient and you value a predictable rail ride over door-to-door speed.",
      },
      {
        question: "Where do Bangkok to Hua Hin vans leave from?",
        answer:
          // src: routePages.ts, checked 2026-07.
          "The route data says 'Bangkok van station or operator meeting point' because partner pickup varies. Do not assume hotel pickup unless the ticket explicitly says so.",
      },
      {
        question: "Should I book a taxi from Bangkok to Hua Hin?",
        answer:
          "Book taxi if you have large luggage, children, a late departure, a hotel far from terminals or three to four people sharing the cost. It removes the Bangkok terminal transfer and the Hua Hin last mile.",
      },
      {
        question: "What can go wrong on this route?",
        answer:
          "The common problems are leaving too little time to reach the Bangkok pickup point, buying a seat from the wrong terminal, and forgetting the final Hua Hin ride. The highway itself is usually straightforward; the handovers cause the stress.",
      },
    ],
  },

  "don-mueang-airport-to-hua-hin": {
    checkedOn: "2026-07",
    intro:
      // src: AOT Don Mueang transport page + routePages.ts + SRT D-Ticket, checked 2026-07.
      "DMK to Hua Hin is a long cross-Bangkok decision, not just a beach transfer. Train, bus and bus+van can be sensible if you understand the first handover from Don Mueang; taxi is the clean choice after a late flight, with family luggage, or when you do not want to solve Bangkok transport before the real trip even starts.",
    quickFacts: [
      // src: routePages.ts, checked 2026-07.
      {
        title: "Guide travel times",
        text: "The route data plans 4h-6h by train or bus, 4h30m-6h30m by bus + van, and 3h-4h30m by private taxi.",
      },
      // src: AOT Don Mueang transport page, checked 2026-07.
      {
        title: "DMK city connection",
        text: "AOT lists A1 from DMK to BTS Chatuchak and Mo Chit 2 from 06:50 to 23:59 for 30 THB, with airport bus points on the 1st floor at T1 Gate 6 and T2 Gate 12.",
      },
      // src: SRT D-Ticket official site, checked 2026-07.
      {
        title: "Rail fallback",
        text: "SRT D-Ticket is the official rail booking site for eligible long-distance tickets and publishes the 1690 SRT hotline.",
      },
    ],
    tips: [
      // src: AOT Don Mueang transport page, checked 2026-07.
      "After landing, solve the first handover before comparing options: Terminal 1 international and Terminal 2 domestic have different exits, and AOT lists public bus points separately.",
      // src: routePages.ts, checked 2026-07.
      "If your ticket says train, check whether you are boarding from Don Mueang railway station or making a selected rail connection. Do not guess this after baggage claim.",
      // src: AOT Don Mueang transport page + routePages.ts, checked 2026-07.
      "Bus or bus+van can be cheap, but only when the pickup instruction is unambiguous. A DMK arrival plus a vague 'Bangkok bus terminal' note is a recipe for stress.",
      // src: routePages.ts, checked 2026-07.
      "Taxi is the best late-arrival option because it removes the city connection and usually brings you straight to the Hua Hin address.",
      "If you land before lunch and travel light, rail can be a pleasant way to avoid some road traffic. Just keep a station buffer and do not book the tightest possible connection.",
      "If your flight is delayed into the evening, do not try to rescue a multi-step public route. Take the direct car or sleep near Bangkok and go in the morning.",
      "For scams, watch for vague quotes that do not name tolls, waiting time, vehicle size or exact Hua Hin drop-off. The longer the route, the more expensive ambiguity becomes.",
    ],
    warnings: [
      // src: routePrices.ts absence checked 2026-07.
      "This route does not yet have a checked routePrices band in the local price table, so do not publish a made-up price range here. Use the partner quote before paying.",
      // src: AOT Don Mueang transport page, checked 2026-07.
      "A1 is a useful DMK-to-city connector, not a Hua Hin transfer. It may get you toward Mo Chit, but the Hua Hin leg is separate unless your partner ticket bundles it.",
      "Avoid any airport taxi quote that cannot state the full Hua Hin destination, luggage fit and whether tolls or waiting are included.",
    ],
    faqs: [
      {
        question: "What is the easiest way from Don Mueang Airport to Hua Hin?",
        answer:
          "Private taxi is easiest because it avoids a Bangkok handover after your flight. It is especially sensible for late arrivals, children, large luggage or hotels outside central Hua Hin.",
      },
      {
        question: "Can I take a train from DMK to Hua Hin?",
        answer:
          // src: routePages.ts + SRT D-Ticket, checked 2026-07.
          "The route data includes a train option from Don Mueang railway station or a selected rail connection. Use SRT D-Ticket or the partner ticket to check the actual train, station and departure before you move from arrivals.",
      },
      {
        question: "How long does DMK to Hua Hin take?",
        answer:
          // src: routePages.ts, checked 2026-07.
          "The guide plans 4h-6h by train or bus, 4h30m-6h30m by bus + van, and 3h-4h30m by private taxi. Add airport processing time after landing.",
      },
      {
        question: "Why is there no price range here?",
        answer:
          // src: routePrices.ts absence checked 2026-07.
          "The local routePrices table does not include a checked DMK-Hua Hin band yet. Rather than inventing one, this guide keeps price guidance general and sends you to the current partner quote.",
      },
      {
        question: "Can I use A1 from DMK for this route?",
        answer:
          // src: AOT Don Mueang transport page, checked 2026-07.
          "A1 can help you reach BTS Chatuchak and Mo Chit 2; AOT lists it from 06:50 to 23:59 for 30 THB. It is only a connector, so make sure you still have a confirmed onward Hua Hin ticket.",
      },
      {
        question: "What if my flight arrives at night?",
        answer:
          "Choose a private transfer or sleep near Bangkok and travel in daylight. Late-night DMK plus a multi-step public route to Hua Hin is exactly the kind of plan that looks cheap online and feels bad on the ground.",
      },
    ],
  },

  "phuket-airport-to-patong-beach": {
    checkedOn: "2026-07",
    intro:
      // src: Phuket Smart Bus official pages + routePrices.ts, checked 2026-07.
      "Phuket Airport to Patong is short on the map and often slow in real life. The Smart Bus is the honest budget pick if you land during its service window and can walk from a Patong stop; taxi or pre-booked transfer is the smoother choice for late arrivals, heavy luggage, hillside hotels or anyone who has already used up their patience in the arrivals hall.",
    quickFacts: [
      // src: Phuket Smart Bus Airport-Rawai route, checked 2026-07.
      {
        title: "Smart Bus route",
        text: "Phuket Smart Bus connects Phuket Airport with west-coast stops including Cherng Talay, Surin Beach, Kamala, Patong, Karon, Kata, Rawai Beach and Promthep Cape.",
      },
      // src: Phuket Smart Bus payment page, checked 2026-07.
      {
        title: "Smart Bus fare",
        text: "The official fare table lists Airport-Patong-Rawai as a 100 THB flat ride, with cash, QR/PromptPay and contactless card payment options on board.",
      },
      // src: Phuket Smart Bus airport stop guide + routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Airport stop and backup",
        text: "Smart Bus says its airport stop is outside the Domestic Terminal near Exit 3 and lists daily service from 08:15 to 23:30; this guide keeps taxi planning at THB500-1,200 per vehicle.",
      },
    ],
    tips: [
      // src: Phuket Smart Bus airport stop guide, checked 2026-07.
      "For Smart Bus, collect bags, exit the arrivals area, head toward Domestic Terminal Exit 3, turn left and follow the public transport walkway to the blue bus sign.",
      // src: Phuket Smart Bus timetable + tracking pages, checked 2026-07.
      "Use Smart Bus live tracking before you commit to waiting. Phuket traffic can make 'soon' feel very elastic, especially near Patong.",
      // src: Phuket Smart Bus payment page, checked 2026-07.
      "Have a payment fallback ready. The bus accepts cash and contactless cards, and QR/PromptPay works best if you already have a Thai banking app.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Shared van sits between bus and taxi in this guide, around THB190-400 per person. It is useful when the drop-off is close to your hotel and luggage rules are clear.",
      // src: routePages.ts + routePrices.ts, checked 2026-07.
      "Private taxi is the right call for late flights, families, surf gear, several bags or hotels up the hill from central Patong.",
      "The most common Patong arrival mistake is booking the cheapest seat and then discovering the hotel is far uphill from the stop. Check the hotel location before you choose.",
      "Airport taxi pressure in Phuket is real enough that you should decide the lane before leaving arrivals: official bus stop, pre-booked driver, or a clear airport taxi counter.",
      "In heavy rain, do not over-optimize for price. A direct vehicle can be worth it just to avoid dragging bags between stop, road and hotel entrance.",
    ],
    warnings: [
      // src: Phuket Smart Bus airport stop guide, checked 2026-07.
      "The Smart Bus airport stop is outside the Domestic Terminal, not inside the international arrivals hall. Follow the public transport walkway and blue Smart Bus sign.",
      // src: Phuket Smart Bus airport stop guide, checked 2026-07.
      "Smart Bus publishes airport service hours of 08:15-23:30. If your flight lands outside that window, compare taxi or pre-booked transfer.",
      "Patong hotel addresses can be steep or tucked away from the main beach road. A cheap bus ride can still need a local taxi at the end.",
    ],
    faqs: [
      {
        question: "Is Phuket Smart Bus good from the airport to Patong?",
        answer:
          "Yes, if you land during the service window, travel light and your hotel is near a stop. It is not the best choice for late arrivals, large luggage or hillside hotels where the last walk is the hard part.",
      },
      {
        question: "Where is the Smart Bus stop at Phuket Airport?",
        answer:
          // src: Phuket Smart Bus airport stop guide, checked 2026-07.
          "Phuket Smart Bus says to go toward Domestic Terminal Exit 3, turn left, follow the public transportation path and look for the blue Phuket Smart Bus sign outside the terminal.",
      },
      {
        question: "How much is the Smart Bus to Patong?",
        answer:
          // src: Phuket Smart Bus payment page, checked 2026-07.
          "The official fare table lists the Airport-Patong-Rawai route as a 100 THB flat fare. This guide's partner bus band is THB125-200 per person because partner listings can package or price seats differently.",
      },
      {
        question: "How late does the bus run from Phuket Airport?",
        answer:
          // src: Phuket Smart Bus airport stop guide, checked 2026-07.
          "The official airport stop guide lists daily service from 08:15 to 23:30. For late-night landings, use taxi or pre-booked transfer rather than hoping for a bus.",
      },
      {
        question: "How long does Phuket Airport to Patong take?",
        answer:
          // src: routePages.ts, checked 2026-07.
          "The guide plans 1h-2h by bus or shared van and 45m-1h30m by private taxi. Traffic through Kamala and into Patong can stretch the trip.",
      },
      {
        question: "Which option is best with luggage?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06.
          "Taxi or private transfer is best with several bags, surf gear or a tired family. The guide taxi band is THB500-1,200 per vehicle, while shared seats are cheaper but less flexible.",
      },
      {
        question: "Can I pay cash on the Smart Bus?",
        answer:
          // src: Phuket Smart Bus payment page, checked 2026-07.
          "Yes. Phuket Smart Bus lists cash, contactless Visa/Mastercard/JCB and QR/PromptPay as payment methods. Carry small cash anyway, because it keeps boarding simple.",
      },
    ],
    guideFacts: [
      // src: Phuket Smart Bus Airport-Rawai route, checked 2026-07.
      "Phuket Smart Bus confirms the airport route through Cherng Talay, Surin, Kamala, Patong, Karon, Kata, Rawai and Promthep Cape.",
      // src: Phuket Smart Bus payment page, checked 2026-07.
      "The official Smart Bus fare table lists Airport-Patong-Rawai as a 100 THB flat ride with cash, QR/PromptPay and contactless card options.",
      // src: Phuket Smart Bus tracking page, checked 2026-07.
      "Use the official live tracking page before waiting, because Phuket traffic can shift real travel time.",
    ],
  },

  "krabi-airport-to-ao-nang": {
    checkedOn: "2026-07",
    intro:
      // src: routePages.ts + routePrices.ts + Krabi Shuttle, checked 2026-07.
      "Krabi Airport to Ao Nang is a simple arrival route, but it rewards choosing the right level of certainty. Shared van and airport bus are fine for light luggage and daytime arrivals; private taxi is the cleanest move when you want a driver at arrivals, a direct hotel drop-off, or no waiting after a delayed flight.",
    quickFacts: [
      // src: routePages.ts, checked 2026-07.
      {
        title: "Guide travel times",
        text: "The route data plans 45m-1h30m by airport bus, 30m-1h15m by shared van, and 30m-1h by private taxi.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Checked price bands",
        text: "The checked local price bands are THB145-300 per shared-van seat and THB400-900 per private-taxi vehicle.",
      },
      // src: Krabi Shuttle homepage, checked 2026-07.
      {
        title: "Private pickup style",
        text: "Krabi Shuttle says private-transfer drivers hold your name on a sign as you exit arrivals and operate transfers on a private basis.",
      },
    ],
    tips: [
      // src: routePages.ts, checked 2026-07.
      "If you choose the airport bus, treat it as the budget lane and check the current departure at the airport or partner result. I did not find a current official public timetable reliable enough to quote here.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Shared van is usually the sweet spot for solo travelers and couples: cheaper than taxi, less exposed than waiting for a public bus, but still dependent on operator pickup and drop-off rules.",
      // src: Krabi Shuttle homepage, checked 2026-07.
      "For private transfer, look for a name sign after arrivals and keep your phone reachable. This is the least confusing option when the flight is delayed.",
      // src: routePages.ts, checked 2026-07.
      "Ao Nang is not one single stop. Check whether your drop-off is Ao Nang Beach, Nopparat Thara, a hillside hotel, or a pier-side connection.",
      "The common airport mistake is taking the first voice that says 'Ao Nang' without checking whether it is shared, private, per person, or per vehicle.",
      "If you have an island ferry later the same day, do not cut it fine. Krabi Airport is close enough that people get overconfident, then lose time waiting for a shared van to fill.",
      "Late arrival plan: taxi first, bargain later never. Get the full hotel name and price confirmed before your bags go into the vehicle.",
    ],
    warnings: [
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Do not publish an exact airport-bus fare or last-bus time here without a current official source. Use the partner result or airport counter for that live detail.",
      // src: routePages.ts, checked 2026-07.
      "Shared transfers may end at an operator point or hotel area depending on ticket. Confirm the exact Ao Nang drop-off before paying.",
      "Avoid vague 'same price, faster' offers in arrivals. Ask whether the quote is per person or per vehicle and whether hotel drop-off is included.",
    ],
    faqs: [
      {
        question: "What is the easiest way from Krabi Airport to Ao Nang?",
        answer:
          "Private taxi is easiest because it starts at arrivals and goes straight to your hotel. Shared van is usually a good budget-comfort middle ground if the ticket clearly includes your Ao Nang drop-off.",
      },
      {
        question: "How long does Krabi Airport to Ao Nang take?",
        answer:
          // src: routePages.ts, checked 2026-07.
          "The guide plans 30m-1h by private taxi, 30m-1h15m by shared van and 45m-1h30m by airport bus. Waiting time can matter more than driving time.",
      },
      {
        question: "How much should I budget?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06.
          "The checked guide bands are THB145-300 per shared-van seat and THB400-900 per private-taxi vehicle. Final airport bus or partner prices should be checked live before payment.",
      },
      {
        question: "Can I just buy transport after landing?",
        answer:
          "Usually yes, but tired arrivals make rushed choices. If you arrive late, have children, or need a specific hotel or pier connection, pre-booking a private transfer removes the airport-counter uncertainty.",
      },
      {
        question: "Is the airport bus always the cheapest?",
        answer:
          "Often it is the budget lane, but this guide does not quote a live official bus fare because I did not verify a current official timetable/fare source. Compare the airport counter or partner result with the shared-van band before deciding.",
      },
      {
        question: "What should I check for Ao Nang drop-off?",
        answer:
          "Check whether the ticket drops at your hotel, an Ao Nang operator point, Ao Nang Beach, Nopparat Thara, or a pier connection. The wrong drop-off is annoying with bags even on this short route.",
      },
    ],
  },

  "suvarnabhumi-airport-to-koh-chang": {
    checkedOn: "2026-07",
    intro:
      // src: KohChangFerries passenger info/timetable + 12Go Suvarnabhumi-Koh Chang + routePages.ts, checked 2026-07.
      "BKK to Koh Chang is a Bangkok road transfer plus a ferry crossing, so the real decision is not just bus versus taxi. The clean route uses the mainland ferry area near Laem Ngop, usually Ao Thammachat for Ferry Koh Chang, then arrives at Ao Sapporot on the north-east of the island. If your flight lands in the morning, a combined van/ferry ticket can be sensible. If you land after lunch, start thinking like a tired traveler, not an optimist: a private car still has to beat the last boat, and the calmer backup is a night in Bangkok or Trat followed by the first practical morning crossing.",
    quickFacts: [
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      {
        title: "Main ferry pier pair",
        text: "Ferry Koh Chang uses Ao Thammachat on the mainland and Ao Sapporot on Koh Chang; Trat / Centrepoint Ferry has been suspended since July 2024.",
      },
      // src: KohChangFerries passenger info/timetable + routePages.ts, checked 2026-07.
      {
        title: "Last practical crossing",
        text: "Current Koh Chang ferry guidance shows service from 06:30 to 18:30; from Suvarnabhumi this guide plans 5h30m-8h by taxi and 6h-10h by combined services.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06 + 12Go Suvarnabhumi-Koh Chang, checked 2026-07.
      {
        title: "Ticket shape and budget",
        text: "The checked local price table only gives a bus+ferry planning band of THB600-900 per person; taxi, van and flight-linked options should use the live partner quote.",
      },
    ],
    tips: [
      // src: routePages.ts + 12Go Suvarnabhumi-Koh Chang, checked 2026-07.
      "At Suvarnabhumi, do not leave arrivals until you know whether your ticket starts at an airport counter, a named operator meeting point or a private driver pickup. This route is too long for vague instructions.",
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "Standalone ferry tickets for Koh Chang are not an online advance purchase in the checked ferry guidance; they are bought at the pier with cash on travel day.",
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "The practical ferry window is 06:30-18:30. If your plane lands late, do not buy a same-day island plan unless the ticket clearly protects the connection.",
      // src: KohChangFerries Bangkok-to-Koh Chang guidance + routePages.ts, checked 2026-07.
      "A morning or early midday departure from Bangkok can still work. After that, one slow baggage belt, traffic jam or pier queue can turn a good plan into an overnight in Trat.",
      // src: KohChangFerries pier/drop-off guidance, checked 2026-07.
      "Ao Sapporot is not your beach hotel. Most visitors still need west-coast transport toward White Sand, Klong Prao, Kai Bae or Lonely Beach unless the ticket includes hotel drop-off.",
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "Foot passengers usually have an easier ferry queue than vehicles, but a booked van or taxi may still wait its turn if it is taking the vehicle ferry across.",
      // src: KohChangFerries weather notes, checked 2026-07.
      "Weather cancellations are described as rare on this sheltered crossing, but wind, queues and holiday traffic can still slow the day down.",
      "The common scam shape here is a rushed long-distance quote that sounds door-to-door until the pier. Ask exactly where the price ends: mainland pier, Koh Chang pier, or your hotel.",
    ],
    warnings: [
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "The current checked Koh Chang ferry window is 06:30-18:30. From Bangkok, late-arriving flights need an overnight fallback instead of a hopeful dash to the pier.",
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "Trat / Centrepoint Ferry is listed as suspended since July 2024, so do not plan around it unless an operator explicitly confirms a resumed service.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Only the bus+ferry THB600-900 band is checked in the local price table for this route. Do not invent taxi or van price bands; use the partner quote.",
    ],
    faqs: [
      {
        question: "Which pier do I use for BKK to Koh Chang?",
        answer:
          // src: KohChangFerries passenger info/timetable, checked 2026-07.
          "The checked main crossing is Ferry Koh Chang from Ao Thammachat on the mainland to Ao Sapporot on Koh Chang. Your partner ticket may package the road leg and ferry, but those are the pier names to look for.",
      },
      {
        question: "What is the last practical ferry to Koh Chang?",
        answer:
          // src: KohChangFerries passenger info/timetable, checked 2026-07.
          "Current ferry guidance shows Koh Chang ferries running from 06:30 to 18:30. From Suvarnabhumi, that means a morning or early midday arrival is comfortable; a late-afternoon arrival needs a private-transfer check or an overnight plan.",
      },
      {
        question: "Can I pay by card for the Koh Chang ferry at the pier?",
        answer:
          // src: KohChangFerries passenger info/timetable, checked 2026-07.
          "For standalone ferry tickets, the checked ferry guidance says cash at the pier on the day of travel. Carry Thai baht even if your longer bus/van/taxi ticket was paid online.",
      },
      {
        question: "Does the combined ticket go to my Koh Chang hotel?",
        answer:
          "Only if the ticket says so. Some services continue after Ao Sapporot toward west-coast hotel areas, while others effectively solve only the mainland transfer and ferry. Check the final drop-off before you pay.",
      },
      {
        question: "What if my flight to Bangkok is delayed?",
        answer:
          "If the ferry connection is no longer realistic, do not keep pushing. Sleep near Bangkok or Trat and take a morning crossing. A private car can reduce handovers, but it cannot create a ferry after the service window.",
      },
      {
        question: "Is taxi worth it from Suvarnabhumi to Koh Chang?",
        answer:
          // src: routePages.ts, checked 2026-07.
          "Taxi is worth considering for families, luggage and control over the road leg. This guide plans 5h30m-8h by private taxi, but the ferry crossing and island-side drop-off still need to be included or handled separately.",
      },
      {
        question: "What should I watch for at the airport?",
        answer:
          "Avoid anyone selling a vague 'Koh Chang now' ride without naming the pier, ferry inclusion and final drop-off. For this route, a cheap quote that ends at the mainland pier can become expensive when you are tired.",
      },
    ],
    guideFacts: [
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "The checked main ferry crossing uses Ao Thammachat on the mainland for Koh Chang.",
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "Current ferry guidance shows daily Ferry Koh Chang service from 06:30 to 18:30, with cash-only tickets at the pier.",
      // src: KohChangFerries passenger info/timetable, checked 2026-07.
      "Trat / Centrepoint Ferry has been suspended since July 2024 and has not resumed.",
      "Confirm whether the ticket continues after the ferry to your west-coast hotel area.",
    ],
  },

  "surat-thani-airport-to-koh-samui": {
    checkedOn: "2026-07",
    intro:
      // src: Raja Ferry home/sailing schedule + Seatran Ferry/Coach + 12Go Surat Thani Airport-Koh Samui, checked 2026-07.
      "Surat Thani Airport to Koh Samui is the kind of route where a joint ticket saves real brainpower. After landing, you are usually not looking for a random taxi to the sea; you are looking for the operator desk that puts you on a bus or van toward Don Sak, then onto a ferry to Samui. Raja's checked airport package points to Lipa Noi, Seatran confirms Don Sak to Samui ferry service, and 12Go shows several airport-linked bus/ferry and van/ferry choices. The detail that matters most is the end of the ticket: pier only, shared island van, or something close to your hotel.",
    quickFacts: [
      // src: Raja Ferry home + sailing schedule, checked 2026-07.
      {
        title: "Raja route and pier",
        text: "Raja lists Surat Thani Airport to Koh Samui (Lipa Noi Pier) as a combined trip, and its Don Sak-Samui ferry schedule shows about 1h30m on the water.",
      },
      // src: Seatran Ferry service page + Seatran homepage, checked 2026-07.
      {
        title: "Seatran route shape",
        text: "Seatran publishes Don Sak to Koh Samui ferry service and also advertises coach links from Surat Thani / Nakhon Si Thammarat areas to connect with ferries to Samui.",
      },
      // src: 12Go Surat Thani Airport-Koh Samui + routePages.ts, checked 2026-07.
      {
        title: "Late-day reality",
        text: "The route data plans 3h30m-6h; current 12Go listings include airport-linked Samui options into the late afternoon, but a delayed flight should use the exact partner departure shown for that date.",
      },
    ],
    tips: [
      // src: 12Go Surat Thani Airport-Koh Samui reviews/listings, checked 2026-07.
      "After baggage claim, look for the named company desk or meeting point, not just any person shouting 'Samui'. Recent 12Go reviews mention confusion around signs and island-side transfers, so read the voucher before walking off.",
      // src: Raja Ferry home, checked 2026-07.
      "If your ticket is Raja, expect the island arrival to be Lipa Noi Pier unless the ticket says otherwise. Lipa Noi is quiet and useful, but it is not Chaweng, Lamai or Bophut.",
      // src: Seatran Ferry service page, checked 2026-07.
      "If the ticket uses Seatran, check whether it means ferry to Samui from Don Sak and where the Samui-side arrival or onward van is handled.",
      // src: 12Go Surat Thani Airport-Koh Samui + routePages.ts, checked 2026-07.
      "For most travelers, bus+ferry or van+ferry is enough. Pay extra only when the ticket clearly reduces handovers or includes a useful Samui hotel drop-off.",
      // src: routePrices.ts absence checked 2026-07.
      "There is no checked local routePrices band for this route yet, so use the live partner quote instead of a made-up 'normal' price.",
      // src: 12Go Surat Thani Airport-Koh Samui listings, checked 2026-07.
      "The last practical same-day plan is the last airport-linked ticket actually sold for your travel date. If your flight lands near that edge, sleep in Surat Thani town or choose a clearly protected later ticket.",
      "With children or big bags, avoid adding a separate pier taxi unless you know exactly where it drops you. A joint ticket may be less elegant, but it usually keeps the chain visible.",
      "The usual pressure point is the Samui add-on van. If the hotel shuttle sounds vague or slow, it can be better to buy airport+ferry only and take your own island taxi from the pier.",
    ],
    warnings: [
      // src: Raja Ferry home + Seatran Ferry service page, checked 2026-07.
      "Do not assume every Samui ferry arrives at the same pier. Raja's checked airport package points to Lipa Noi, while Seatran's Samui ferry service uses the Seatran system from Don Sak.",
      // src: 12Go Surat Thani Airport-Koh Samui, checked 2026-07.
      "A late flight can break the bus-to-pier-to-ferry chain. Use the partner's actual departure, not a generic 'Samui ferries run all day' assumption.",
      // src: routePrices.ts absence checked 2026-07.
      "No checked routePrices band exists locally for this route, so exact price claims belong to the partner/operator source only.",
    ],
    faqs: [
      {
        question: "Is Surat Thani Airport to Koh Samui a joint ticket?",
        answer:
          "Often yes. Many listings bundle airport pickup, road transfer to Don Sak and ferry to Samui. Hotel drop-off is the part that varies, so check whether the ticket ends at Lipa Noi, another Samui pier, or your hotel area.",
      },
      {
        question: "Which pier does the ferry arrive at on Koh Samui?",
        answer:
          // src: Raja Ferry home + Seatran Ferry service page, checked 2026-07.
          "Raja's checked airport package lists Koh Samui Lipa Noi Pier. Seatran confirms Don Sak to Samui ferry service in its own system. Your ticket should name the operator and arrival pier before you pay.",
      },
      {
        question: "How long does Surat Thani Airport to Koh Samui take?",
        answer:
          // src: routePages.ts + 12Go Surat Thani Airport-Koh Samui, checked 2026-07.
          "This guide plans about 3h30m-6h depending on bus/van, ferry timing and any island-side transfer. 12Go's current route page also frames the journey as roughly 3-6 hours overall.",
      },
      {
        question: "What is the last practical departure after a flight?",
        answer:
          // src: 12Go Surat Thani Airport-Koh Samui, checked 2026-07.
          "Use the latest airport-linked ticket shown for your exact date. Current 12Go listings show Samui options into the late afternoon, but if your flight is delayed into that window, the sensible fallback is Surat Thani overnight and a morning ferry.",
      },
      {
        question: "Should I add hotel transfer on Samui?",
        answer:
          "Add it if the hotel area is clearly covered and the timing looks reasonable. If reviews or ticket text suggest a long shared-van wait, pier-only plus your own taxi can be calmer.",
      },
      {
        question: "How much should I budget?",
        answer:
          // src: routePrices.ts absence + Raja Ferry home, checked 2026-07.
          "The local routePrices table does not have a checked Samui band. Raja's homepage shows a sample Surat Thani Airport to Samui Lipa Noi package at THB530, and partner listings change by operator and date, so use the live quote before paying.",
      },
      {
        question: "What can go wrong on this route?",
        answer:
          "The common issues are finding the wrong airport desk, missing the bus after a delayed flight, and misunderstanding the Samui drop-off. The ferry crossing itself is only one piece of the chain.",
      },
    ],
    guideFacts: [
      // src: Seatran Ferry homepage/coach page + Raja Ferry home, checked 2026-07.
      "The checked route uses ground transfer from Surat Thani Airport toward Don Sak ferry piers.",
      // src: Seatran Ferry service page, checked 2026-07.
      "Seatran confirms the Don Sak to Koh Samui ferry route; ticketed packages can use different operators.",
      "Flight delays can break tight ferry connections, so avoid the last practical boat of the day.",
    ],
  },

  "surat-thani-airport-to-koh-phangan": {
    checkedOn: "2026-07",
    intro:
      // src: Raja Ferry home/sailing schedule + 12Go Surat Thani Airport-Koh Phangan + routePages.ts, checked 2026-07.
      "Surat Thani Airport to Koh Phangan is a longer, less forgiving version of the Samui connection. You still start with the airport desk or meeting point, but the sea leg is usually Don Sak to Thong Sala, and Raja lists that crossing as about 2h30m. This is not a route where I would improvise late in the day: buy a joint ticket if the timing works, keep the ferry operator visible, and have a Surat Thani overnight plan ready if your flight slips.",
    quickFacts: [
      // src: Raja Ferry sailing schedule, checked 2026-07.
      {
        title: "Pier pair to remember",
        text: "Raja lists Don Sak International Pier to Koh Phangan International Pier at Thong Sala, with about 2h30m crossing time.",
      },
      // src: Raja Ferry home, checked 2026-07.
      {
        title: "Checked airport package",
        text: "Raja's homepage shows a Surat Thani Airport to Koh Phangan (Thong Sala Pier) package at 09:00-13:30 for THB580.",
      },
      // src: 12Go Surat Thani Airport-Koh Phangan + routePages.ts, checked 2026-07.
      {
        title: "Later partner listings",
        text: "12Go's current route page lists Van+Ferry from Surat Thani Airport as starting at 09:30 and running until 16:00, while this guide plans 3h30m-7h overall.",
      },
    ],
    tips: [
      // src: routePages.ts + 12Go Surat Thani Airport-Koh Phangan, checked 2026-07.
      "Treat this as a three-part handover: airport to operator vehicle, vehicle to Don Sak, Don Sak to Thong Sala. Keep your voucher open until you are actually on the boat.",
      // src: Raja Ferry sailing schedule, checked 2026-07.
      "Thong Sala is the correct arrival area to recognize on Koh Phangan. If your hotel is in Haad Rin, Srithanu, Thong Nai Pan or the north, you still need island transport.",
      // src: Raja Ferry home, checked 2026-07.
      "Raja's checked airport package is a morning departure. That is a useful sanity check: Koh Phangan is not a route to casually start after a slow afternoon arrival.",
      // src: 12Go Surat Thani Airport-Koh Phangan, checked 2026-07.
      "12Go shows some later airport-origin van+ferry listings, but buy only a confirmed ticket for your date. Do not assume the pier will have a useful evening rescue.",
      // src: routePrices.ts absence checked 2026-07.
      "There is no checked local routePrices band for this route. Use operator or partner pricing and avoid publishing a guessed range.",
      "If you are traveling near Full Moon Party dates, book earlier and leave more pier buffer. The route is the same, but the queues and shared vans feel very different.",
      "For seasickness, the longer crossing matters. Eat lightly, keep water with you and choose ferry over speedier-but-bumpier options when the sea looks rough.",
      "Watch for 'hotel transfer included' language. On Phangan, shared drop-off may exclude awkward areas or require an extra island taxi.",
    ],
    warnings: [
      // src: Raja Ferry sailing schedule + 12Go Surat Thani Airport-Koh Phangan, checked 2026-07.
      "Don Sak to Thong Sala is a longer crossing than Don Sak to Samui. A delayed flight can break the whole chain, so late arrivals should plan Surat Thani overnight unless a partner sells a confirmed later joint ticket.",
      // src: 12Go Surat Thani Airport-Koh Phangan, checked 2026-07.
      "The latest visible airport-origin category on 12Go is not a promise for every day, season or operator. Use the live ticket for the date you are buying.",
      // src: routePrices.ts absence checked 2026-07.
      "No checked routePrices band exists locally for Surat Thani Airport to Koh Phangan, so exact cost guidance should come from Raja, 12Go or the selected operator.",
    ],
    faqs: [
      {
        question: "Which pier does the ferry use for Koh Phangan?",
        answer:
          // src: Raja Ferry sailing schedule, checked 2026-07.
          "The checked Raja route is Don Sak International Pier to Koh Phangan International Pier at Thong Sala. Thong Sala is the main pier area on Koh Phangan.",
      },
      {
        question: "Is the ticket usually airport plus ferry together?",
        answer:
          "It often is, and that is what you want if landing at Surat Thani Airport. The ticket should name the airport meeting point, road transfer, ferry operator and Thong Sala arrival before you pay.",
      },
      {
        question: "What is the last practical same-day option?",
        answer:
          // src: 12Go Surat Thani Airport-Koh Phangan + Raja Ferry home, checked 2026-07.
          "Raja's checked airport package is 09:00-13:30, while 12Go currently shows some Van+Ferry airport-origin listings until 16:00. For a delayed afternoon flight, do not gamble; use the exact partner ticket or sleep in Surat Thani.",
      },
      {
        question: "How long does the trip take?",
        answer:
          // src: routePages.ts + Raja Ferry sailing schedule, checked 2026-07.
          "The guide plans 3h30m-7h depending on ticket type. Raja lists the Don Sak to Thong Sala ferry crossing itself at about 2h30m, before you add airport transfer and waiting time.",
      },
      {
        question: "How much should I expect to pay?",
        answer:
          // src: Raja Ferry home + routePrices.ts absence, checked 2026-07.
          "The local price table has no checked band for this route. Raja's homepage shows a sample Surat Thani Airport to Koh Phangan package at THB580; use the live partner price for the actual ticket.",
      },
      {
        question: "Does it include my Koh Phangan hotel?",
        answer:
          "Not automatically. Many tickets end at Thong Sala or include only a limited island transfer. Check the hotel area carefully, especially for Haad Rin, Thong Nai Pan and remote hillside stays.",
      },
      {
        question: "What should I do if my flight is delayed?",
        answer:
          "Go straight to the operator desk and ask about the next confirmed connection. If the last reliable ferry chain is gone, overnight in Surat Thani and take a morning joint ticket rather than piecing together a tired late-night route.",
      },
    ],
  },

  "phuket-to-koh-phi-phi": {
    checkedOn: "2026-07",
    intro:
      // src: Andaman Wave Master ferry/speedboat timetables + 12Go Phuket-Koh Phi Phi + routePrices.ts, checked 2026-07.
      "Phuket to Phi Phi looks easy because the islands are close, but the little details decide whether the day feels smooth or chaotic. The standard ferry route to recognize is Phuket Rassada Pier to Phi Phi Tonsai Pier; some services continue to Laemtong, which is useful only if you are actually staying up north. Ferry is the steadier luggage-friendly choice. Speedboat saves time, but it is the one I would think twice about with small children, seasickness or rough Andaman weather.",
    quickFacts: [
      // src: Andaman Wave Master ferry timetable, checked 2026-07.
      {
        title: "Ferry pier pair",
        text: "Andaman Wave Master lists Phuket Rassada Pier to Phi Phi Tonsai Pier at 08:30-10:30 and 13:45-15:45, operating daily.",
      },
      // src: Andaman Wave Master speedboat timetable, checked 2026-07.
      {
        title: "Speedboat window",
        text: "The checked Andaman Wave Master speedboat page lists Rassada Pier to Tonsai Pier at 08:30, 11:30, 12:30 and 13:30, with a 1-hour crossing.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06 + Andaman Wave Master timetables, checked 2026-07.
      {
        title: "Price planning",
        text: "The local guide bands are THB400-650 for ferry and THB700-1,100 for speedboat; Andaman lists THB700 ferry and THB850 speedboat adult one-way fares on the checked pages.",
      },
    ],
    tips: [
      // src: Andaman Wave Master ferry timetable, checked 2026-07.
      "For the classic ferry, look for Rassada Pier on the Phuket side and Tonsai Pier on Phi Phi. If your ticket says Laemtong, make sure your hotel is in that northern area.",
      // src: Andaman Wave Master ferry timetable, checked 2026-07.
      "Andaman's checked ferry schedule gives 13:45 as the last Rassada departure to Tonsai on that operator. Treat later options as partner-specific, not guaranteed ferry common sense.",
      // src: 12Go Phuket-Koh Phi Phi, checked 2026-07.
      "12Go currently shows many Phuket-Phi Phi operators and a latest visible departure around 15:30, but book the exact result rather than turning up at the pier late.",
      // src: Andaman Wave Master speedboat timetable + 12Go Phuket-Koh Phi Phi, checked 2026-07.
      "Speedboat is faster but more weather-sensitive. If the sea is choppy, the slower ferry often feels like the premium choice, not the cheap one.",
      // src: routePages.ts + routePrices.ts routePricesCheckedOn 2026-06.
      "Hotel transfer plus ferry is useful from Kata, Karon, Patong or Phuket Town, but check pickup time carefully. The van may collect you much earlier than the boat time.",
      // src: Andaman Wave Master ferry timetable, checked 2026-07.
      "If you are going to Laemtong, Andaman's checked ferry reaches it after Tonsai and takes longer than the Tonsai-only ride. Do not book Tonsai by habit if your resort is up north.",
      "At Rassada, ignore vague 'faster boat' upgrades unless they match your operator and pier. Stickers, desk names and boat class matter on Phi Phi routes.",
      "On arrival at Tonsai, expect walking, longtail boat or hotel pickup depending on where you sleep. Phi Phi is not a door-to-door taxi island.",
    ],
    warnings: [
      // src: Andaman Wave Master ferry/speedboat timetables, checked 2026-07.
      "Rassada to Tonsai and Rassada to Laemtong are not the same arrival. Laemtong services take longer and serve a different part of Phi Phi Don.",
      // src: Andaman Wave Master speedboat timetable + 12Go Phuket-Koh Phi Phi, checked 2026-07.
      "Speedboats can be uncomfortable in rough sea. If you are prone to seasickness or traveling with very young children, choose the ferry unless timing matters more.",
      // src: 12Go Phuket-Koh Phi Phi + Andaman Wave Master timetables, checked 2026-07.
      "Do not arrive near sunset without a confirmed ticket. Official and partner departures cluster earlier in the day, and missing the last boat means sleeping on Phuket.",
    ],
    faqs: [
      {
        question: "Which pier do boats from Phuket to Phi Phi use?",
        answer:
          // src: Andaman Wave Master ferry/speedboat timetables + 12Go Phuket-Koh Phi Phi, checked 2026-07.
          "The checked operator route uses Phuket Rassada Pier to Phi Phi Tonsai Pier. Some services continue to Laemtong in north Phi Phi, so match the arrival pier to your hotel.",
      },
      {
        question: "Is ferry or speedboat better?",
        answer:
          "Ferry is better for luggage, calmer travel and anyone nervous about sea conditions. Speedboat is better when you value time and the sea is reasonable, but it can feel harsh in chop.",
      },
      {
        question: "What is the last practical boat from Phuket?",
        answer:
          // src: Andaman Wave Master ferry timetable + 12Go Phuket-Koh Phi Phi, checked 2026-07.
          "Andaman's checked ferry timetable lists a 13:45 Rassada departure to Tonsai; 12Go's current route page shows later partner departures around 15:30. After mid-afternoon, book only a confirmed ticket.",
      },
      {
        question: "How much should I budget?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06 + Andaman Wave Master timetables, checked 2026-07.
          "The local planning bands are THB400-650 for ferry and THB700-1,100 for speedboat. Andaman's checked pages list THB700 ferry and THB850 speedboat adult one-way fares, but partner prices can differ.",
      },
      {
        question: "Does hotel pickup from Phuket come included?",
        answer:
          "Only on tickets that say so. If pickup is included, check the hotel area and pickup time; if not, you need your own ride to Rassada Pier before check-in.",
      },
      {
        question: "Do I need a separate boat after Tonsai?",
        answer:
          "Maybe. Tonsai works for the main village, Loh Dalum and many central stays. Long Beach, remote east-coast bays and Laemtong often need hotel boat, longtail or a specific Laemtong-arrival ticket.",
      },
      {
        question: "What if the sea looks rough?",
        answer:
          "Choose the larger ferry where possible, keep seasickness medicine handy and avoid building a tight onward flight connection. Speedboat is the first option I would reconsider in poor conditions.",
      },
    ],
    guideFacts: [
      // src: Andaman Wave Master ferry/speedboat timetables + 12Go Phuket-Koh Phi Phi, checked 2026-07.
      "Checked ferry and speedboat listings use Phuket Rassada Pier to Phi Phi Tonsai Pier.",
      // src: Andaman Wave Master ferry timetable, checked 2026-07.
      "Some services continue to Laemtong Bay, so confirm the exact Phi Phi arrival point before booking.",
      "Ferry is more luggage-friendly; speedboat is faster but more sensitive to sea and weather conditions.",
    ],
  },

  "krabi-to-koh-phi-phi": {
    checkedOn: "2026-07",
    intro:
      // src: Andaman Wave Master Krabi-Phi Phi timetable + 12Go Krabi-Koh Phi Phi + routePrices.ts, checked 2026-07.
      "Krabi to Phi Phi is shorter than the Phuket crossing, but it has one trap: people say 'Krabi' when they mean very different pickup points. The clean ferry fact is Krabi Klong Jilad Pier to Phi Phi Tonsai Pier. If your ticket starts at an Ao Nang hotel, Krabi Town agency or airport-side pickup, that land leg is separate from the boat unless it is clearly bundled. Keep the ferry pier and the hotel pickup in two different boxes in your head and the route becomes much easier.",
    quickFacts: [
      // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
      {
        title: "Ferry pier pair",
        text: "Andaman Wave Master lists Krabi Klong Jilad Pier to Phi Phi Tonsai Pier at 09:00-11:00 and 13:00-15:30, operating daily.",
      },
      // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
      {
        title: "Ticket-only warning",
        text: "The checked Andaman page says its Krabi-Phi Phi prices are for the ferry ticket only and do not include land transfer in Krabi, Lanta or Phi Phi.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06 + Andaman Wave Master timetable, checked 2026-07.
      {
        title: "Budget anchor",
        text: "The local guide band for ferry is THB300-450 per person, and Andaman lists THB450 adult one-way on the checked Krabi-Tonsai page.",
      },
    ],
    tips: [
      // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
      "If your ticket says Klong Jilad, plan the road ride to that pier separately unless the ticket includes pickup. Ao Nang is not the pier.",
      // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
      "The checked Andaman ferry times are 09:00 and 13:00 from Klong Jilad. That makes the 13:00 boat the last practical ferry-only anchor from this source.",
      // src: 12Go Krabi-Koh Phi Phi, checked 2026-07.
      "12Go shows later Krabi-Phi Phi partner listings, including speedboat and van+speedboat choices, but those should be treated as booked-ticket options, not walk-up assumptions.",
      // src: routePages.ts + routePrices.ts routePricesCheckedOn 2026-06.
      "Van+ferry can be worth it from Ao Nang because it solves the annoying land leg. Check whether the pickup is your hotel, an agency point or a main-road meeting place.",
      "With big luggage, choose the bigger ferry unless timing strongly favors speedboat. The short crossing can still feel messy when bags are being handed around at a busy pier.",
      "If you are coming from Krabi Airport the same day, build in road time and ticket check-in. The map looks close enough to tempt bad planning.",
      "At Tonsai, do not follow the first person offering 'hotel boat' unless you know your hotel requires one. Many central stays are walkable; remote bays are a different story.",
      "For scams, watch the phrase 'same same Phi Phi' when the seller cannot name Klong Jilad, Tonsai, or your exact included pickup. Names matter here.",
    ],
    warnings: [
      // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
      "Andaman's checked Krabi-Phi Phi ferry price is ticket-only and excludes land transfer. Do not assume hotel pickup just because the route page says Krabi.",
      // src: Andaman Wave Master Krabi-Phi Phi timetable + 12Go Krabi-Koh Phi Phi, checked 2026-07.
      "The official ferry-only anchor used here ends at the 13:00 Klong Jilad departure. Later partner services may exist, but you need a confirmed ticket.",
      "Bad weather affects speedboats first. If the sea is rough, prefer ferry and leave breathing room after arrival.",
    ],
    faqs: [
      {
        question: "Which pier do I leave from in Krabi?",
        answer:
          // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
          "The checked ferry route is Krabi Klong Jilad Pier to Phi Phi Tonsai Pier. If you are in Ao Nang, Railay or Krabi Airport, check whether your ticket includes the transfer to Klong Jilad.",
      },
      {
        question: "What is the last practical ferry from Krabi to Phi Phi?",
        answer:
          // src: Andaman Wave Master Krabi-Phi Phi timetable + 12Go Krabi-Koh Phi Phi, checked 2026-07.
          "Andaman's checked ferry timetable lists 13:00 from Klong Jilad to Tonsai. 12Go shows some later partner services, but after early afternoon I would only move with a confirmed ticket.",
      },
      {
        question: "Is land transfer included?",
        answer:
          // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
          "Not by default. Andaman explicitly says its listed Krabi-Phi Phi ferry price does not include land transfer in Krabi, Lanta or Phi Phi. Partner van+ferry tickets may include pickup, but check the pickup point.",
      },
      {
        question: "How much is Krabi to Phi Phi?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06 + Andaman Wave Master timetable, checked 2026-07.
          "The local guide band is THB300-450 for ferry. Andaman lists THB450 adult one-way on the checked Klong Jilad to Tonsai route; speedboat and pickup bundles cost more.",
      },
      {
        question: "Is speedboat better than ferry from Krabi?",
        answer:
          "Speedboat is faster, but ferry is usually easier with luggage and rougher weather. For families or travelers prone to seasickness, ferry is the calmer default.",
      },
      {
        question: "Can I do Krabi Airport to Phi Phi on arrival day?",
        answer:
          "Yes if your flight lands early enough and you have a confirmed pier transfer. If you land late morning or afternoon, check the boat time before leaving the airport, not after reaching the pier.",
      },
      {
        question: "Where do I arrive on Phi Phi?",
        answer:
          // src: Andaman Wave Master Krabi-Phi Phi timetable, checked 2026-07.
          "The checked Krabi ferry arrives at Tonsai Pier. Central Phi Phi stays are often walkable from there; remote beaches may need hotel boat or longtail.",
      },
    ],
  },

  "phuket-airport-to-kata-karon": {
    checkedOn: "2026-07",
    intro:
      // src: Phuket Smart Bus official route/payment/airport-stop pages + routePrices.ts + routePages.ts, checked 2026-07.
      "Phuket Airport to Kata or Karon is not a ferry route, but it has the same tired-arrival problem: the cheapest ride is fine only if the stop, hour and luggage work for you. Phuket Smart Bus is the clean budget choice during its service window, with the airport route running down the west coast through Patong, Karon and Kata. If you land late, have children, or your hotel is up a hill away from the main beach roads, a taxi or pre-booked transfer is the more humane option.",
    quickFacts: [
      // src: Phuket Smart Bus Airport-Rawai route, checked 2026-07.
      {
        title: "Smart Bus route",
        text: "Phuket Smart Bus connects Phuket Airport with west-coast stops including Patong, Karon, Kata, Rawai Beach and Promthep Cape.",
      },
      // src: Phuket Smart Bus airport stop guide + payment page, checked 2026-07.
      {
        title: "Bus hours and fare",
        text: "The official airport stop guide lists daily service from 08:15 to 23:30, and the fare table lists Airport-Patong-Rawai as a 100 THB flat ride.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Van and taxi bands",
        text: "The checked local bands are THB250-450 per shared-van seat and THB1,000-1,400 per private-taxi vehicle.",
      },
    ],
    tips: [
      // src: Phuket Smart Bus airport stop guide, checked 2026-07.
      "For Smart Bus, collect luggage, head toward Domestic Terminal Exit 3, turn left and follow the public transport walkway to the blue bus sign.",
      // src: Phuket Smart Bus Airport-Rawai route, checked 2026-07.
      "Karon comes before Kata on the southbound airport route. If you are half-asleep, watch the stop names instead of assuming every beach stop is yours.",
      // src: Phuket Smart Bus payment page, checked 2026-07.
      "Payment is straightforward: cash, QR/PromptPay and contactless Visa/Mastercard/JCB are listed. Carry small cash anyway because it keeps boarding simple.",
      // src: Phuket Smart Bus airport stop guide, checked 2026-07.
      "If your flight lands outside 08:15-23:30, the bus is no longer Plan A. Use taxi, private transfer or a hotel-arranged pickup.",
      // src: routePages.ts + routePrices.ts routePricesCheckedOn 2026-06.
      "Shared van is the middle lane: cheaper than taxi, more direct than bus, but only good if the hotel drop-off and luggage rules are clear.",
      "Kata and Karon hotels can sit uphill from the beach roads. A bus stop that looks close on the map may still mean a sweaty final walk with bags.",
      "Airport taxi pressure in Phuket is predictable. Decide before you exit: bus stop, booked driver, shared van desk or official taxi lane.",
      "In heavy rain, do not make yourself drag luggage between stop and hotel just to save a little. A direct car can be the right call even for budget-minded travelers.",
    ],
    warnings: [
      // src: Phuket Smart Bus airport stop guide, checked 2026-07.
      "The Smart Bus stop is outside the Domestic Terminal near Exit 3, not inside the international arrivals hall.",
      // src: Phuket Smart Bus airport stop guide, checked 2026-07.
      "The checked Smart Bus airport service window is 08:15-23:30. Late-night arrivals need a taxi or booked transfer.",
      "Avoid vague hotel-transfer offers that do not say whether the price is per person or per vehicle. This is a common Phuket airport confusion point.",
    ],
    faqs: [
      {
        question: "Is Phuket Smart Bus good for Kata and Karon?",
        answer:
          "Yes, if you land during the service window, travel reasonably light and your hotel is near a stop. It is less good for late-night flights, heavy bags or hillside hotels.",
      },
      {
        question: "Where is the Smart Bus stop at Phuket Airport?",
        answer:
          // src: Phuket Smart Bus airport stop guide, checked 2026-07.
          "Phuket Smart Bus says the stop is outside the Domestic Terminal: go toward Exit 3, turn left and follow the public transport walkway to the blue bus sign.",
      },
      {
        question: "How much is the bus to Kata or Karon?",
        answer:
          // src: Phuket Smart Bus payment page, checked 2026-07.
          "The official fare table lists Airport-Patong-Rawai as a 100 THB flat ride, which covers the route through Karon and Kata.",
      },
      {
        question: "How late does the bus run from Phuket Airport?",
        answer:
          // src: Phuket Smart Bus airport stop guide, checked 2026-07.
          "The checked airport stop guide lists daily service from 08:15 to 23:30. If you land after that, use taxi or pre-booked transfer.",
      },
      {
        question: "How much are van and taxi options?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06.
          "The checked local planning bands are THB250-450 per shared-van seat and THB1,000-1,400 per private-taxi vehicle. Final partner prices still need live confirmation.",
      },
      {
        question: "Which option is best with children or luggage?",
        answer:
          "Taxi or private transfer is best with children, multiple bags, strollers or a hotel away from the main road. Shared van can work if the drop-off is clear; bus is best for light travelers.",
      },
      {
        question: "Can I pay cash on the Smart Bus?",
        answer:
          // src: Phuket Smart Bus payment page, checked 2026-07.
          "Yes. Phuket Smart Bus lists cash, QR/PromptPay and contactless cards. Use small cash as the easiest fallback.",
      },
    ],
  },
  "bangkok-to-chiang-mai": {
    checkedOn: "2026-07",
    intro:
      // src: 12Go Bangkok-Chiang Mai + SRT D-Ticket + routePages.ts + routePrices.ts, checked 2026-07.
      "Bangkok to Chiang Mai is not a route with one honest winner. Flying is the fast, practical answer when time matters; the overnight train is the slow, classic answer when you want the journey to be part of the trip; the bus is the budget answer when you can sleep in a seat and arrive a little crumpled. The good plan is to choose by energy level, luggage and arrival timing, not by pretending that a 1-hour flight and an overnight overland trip solve the same problem.",
    quickFacts: [
      // src: routePages.ts + 12Go Bangkok-Chiang Mai, checked 2026-07.
      {
        title: "Real options",
        text: "The local route data compares train, bus and flight: flights are listed at 1h 15m-1h 30m, trains at 10h-14h and buses at 9h-12h, with live partner schedules varying by operator.",
      },
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      {
        title: "Checked planning bands",
        text: "The checked local price bands cover bus at THB500-900 per seat and train at THB600-1,400 per seat; flight prices should be checked live because they move with airline inventory.",
      },
      // src: SRT D-Ticket official booking page, checked 2026-07.
      {
        title: "Train booking",
        text: "SRT D-Ticket is the official Thai railway booking channel; it shows train search, seat selection, payment and ticket-printing steps, with hotline 1690 for railway help.",
      },
    ],
    tips: [
      // src: 12Go Bangkok-Chiang Mai + routePages.ts, checked 2026-07.
      "If you only have a few days in the north, fly. The airport time still matters, but it protects a whole evening or morning that the train or bus would consume.",
      // src: 12Go Bangkok-Chiang Mai + SRT D-Ticket, checked 2026-07.
      "If you want the sleeper train, book early and verify the exact station and ticket rules on your voucher. Lower berths and air-conditioned sleepers are the seats people chase first.",
      // src: routePrices.ts routePricesCheckedOn 2026-06.
      "Do not compare a bare bus seat with a good sleeper berth as if they were the same product. The bus is cheaper in the local band; the train buys space, rhythm and a softer arrival.",
      // src: 12Go Bangkok-Chiang Mai schedule examples, checked 2026-07.
      "For overnight travel, look at arrival time more than departure time. A very early Chiang Mai arrival can be awkward if your hotel will not store bags or let you shower.",
      // src: 12Go Bangkok-Chiang Mai operator listings, checked 2026-07.
      "Bangkok has multiple departure points for long-distance transport. Treat 'Bangkok' on a ticket as a city label until you have checked the exact bus terminal, railway station or airport.",
      // src: SRT D-Ticket terms, checked 2026-07.
      "For trains, use the passenger name exactly as it appears on the travel document. Official rail ticket systems are less forgiving than a casual van booking.",
      "The common booking mistake is buying the romantic option for the wrong body. If you sleep badly sitting up, a cheap night bus can steal the first day of Chiang Mai from you.",
    ],
    warnings: [
      // src: routePages.ts + 12Go Bangkok-Chiang Mai, checked 2026-07.
      "A flight listed around 1h 15m is only the airborne part of the decision. Add airport transfer, security, baggage and the Chiang Mai last mile before calling it 'one hour.'",
      // src: SRT D-Ticket official booking page, checked 2026-07.
      "Train details should be checked on the operator or partner booking page before payment. Do not rely on old blog timetables for sleeper availability.",
      "If a seller cannot name the exact departure point, arrival point and included luggage, pause. On a long route, vague transport becomes expensive when you are tired.",
    ],
    faqs: [
      {
        question: "Should I fly, take the train or take the bus from Bangkok to Chiang Mai?",
        answer:
          "Fly if time matters, take the sleeper train if you want the journey and can book the berth you want, and take the bus if price matters most and you can handle a long seated ride.",
      },
      {
        question: "How long is the Bangkok to Chiang Mai flight compared with overland travel?",
        answer:
          // src: routePages.ts + 12Go Bangkok-Chiang Mai, checked 2026-07.
          "The route data lists flights at 1h 15m-1h 30m, trains at 10h-14h and buses at 9h-12h. Add airport time for flights and station or terminal transfer time for overland options.",
      },
      {
        question: "Where should I check train tickets?",
        answer:
          // src: SRT D-Ticket official booking page, checked 2026-07.
          "Use SRT D-Ticket or a checked partner listing. SRT D-Ticket is the official railway booking site and shows train search, seat selection, payment and ticket-printing steps.",
      },
      {
        question: "Are prices fixed for this route?",
        answer:
          // src: routePrices.ts routePricesCheckedOn 2026-06.
          "Only the local planning bands are fixed inside this guide: bus THB500-900 per seat and train THB600-1,400 per seat. Flight and live partner prices should be checked at booking time.",
      },
      {
        question: "Is the overnight train comfortable?",
        answer:
          "It can be, especially in a sleeper berth, but it is still public transport with lights, stops and movement. It is a good experience if you want slow travel, not if you need guaranteed deep sleep.",
      },
      {
        question: "Can I book a bus or train on the same day?",
        answer:
          "Sometimes, but do not count on it around weekends, Thai holidays or peak season. For the sleeper train especially, book as soon as your plan is firm.",
      },
    ],
  },
  "chiang-mai-to-bangkok": {
    checkedOn: "2026-07",
    intro:
      // src: 12Go Chiang Mai-Bangkok + SRT D-Ticket + routePages.ts, checked 2026-07.
      "Chiang Mai to Bangkok feels simple until you are connecting to a flight, a hotel check-in or a meeting. The flight is the control option; the train is the humane overnight option if you can absorb delays; the bus is the budget option when price beats comfort. If Bangkok is your final stop, you can be relaxed. If Bangkok is only the place where an international flight leaves, build the plan around buffer first and transport second.",
    quickFacts: [
      // src: routePages.ts + 12Go Chiang Mai-Bangkok, checked 2026-07.
      {
        title: "Three practical modes",
        text: "The local route data lists flights at 1h 15m-1h 30m, trains at 10h-14h and buses at 9h-12h; 12Go live listings show train, bus, flight and taxi choices.",
      },
      // src: 12Go Chiang Mai-Bangkok, checked 2026-07.
      {
        title: "Bangkok arrival risk",
        text: "12Go describes the overland trip as roughly 9-14 hours depending on transport, so a same-day airport connection should use a large buffer or a flight.",
      },
      // src: SRT D-Ticket official booking page, checked 2026-07.
      {
        title: "Official rail check",
        text: "SRT D-Ticket is the official place to verify railway booking steps, seat selection and ticket conditions before committing to a train.",
      },
    ],
    tips: [
      // src: 12Go Chiang Mai-Bangkok + routePages.ts, checked 2026-07.
      "For a Bangkok flight connection, flying from Chiang Mai is usually the cleanest answer. Still check whether you land at BKK or DMK before booking the onward ticket.",
      // src: 12Go Chiang Mai-Bangkok, checked 2026-07.
      "If you take the night train or bus before an international flight, arrive in Bangkok the previous day whenever the ticket value matters. Morning overland arrival plus same-day flight is fragile.",
      // src: 12Go Chiang Mai-Bangkok schedule, checked 2026-07.
      "Some overland arrivals are early morning and some are late evening. Choose by what happens after arrival: hotel check-in, airport transfer, meeting point or luggage storage.",
      // src: SRT D-Ticket terms + 12Go Chiang Mai-Bangkok, checked 2026-07.
      "For trains, keep the passenger name, coach class and berth choice clean. Fixing a mistake near departure is much harder than checking slowly before payment.",
      // src: routePages.ts + 12Go Chiang Mai-Bangkok, checked 2026-07.
      "Bus is fine when budget is the point, but it is not a premium night's sleep. If your first Bangkok day matters, price the lost energy honestly.",
      "A taxi for this route exists in partner listings, but it is a niche group choice rather than the normal answer. Most travelers should compare flight, train and bus first.",
      "Do not let a cheap late-night ticket create a bad airport handoff. Bangkok traffic and terminal confusion can eat the savings quickly.",
    ],
    warnings: [
      // src: 12Go Chiang Mai-Bangkok, checked 2026-07.
      "For same-day flights from Bangkok, bus or train delays are your risk. The safer plan is an earlier arrival, a flight, or a night in Bangkok before departure.",
      // src: routePages.ts, checked 2026-07.
      "The route ends at Bangkok, not automatically at your airport or hotel. Check the exact arrival terminal, station or operator point.",
      "Avoid booking from a screenshot of an old timetable. Long-distance Thai train and bus availability changes with date and season.",
    ],
    faqs: [
      {
        question: "Can I take the train from Chiang Mai to Bangkok and fly out the same day?",
        answer:
          "It is possible only with a large buffer and a flight you can afford to miss. For international departures, the calmer advice is to arrive in Bangkok the previous day.",
      },
      {
        question: "How long does Chiang Mai to Bangkok take?",
        answer:
          // src: routePages.ts + 12Go Chiang Mai-Bangkok, checked 2026-07.
          "The route data lists flights at 1h 15m-1h 30m, trains at 10h-14h and buses at 9h-12h. Live operator schedules can vary, so always check the specific ticket.",
      },
      {
        question: "Which Bangkok airport will I arrive at if I fly?",
        answer:
          "It depends on the airline and ticket. Some flights use Suvarnabhumi and many low-cost services use Don Mueang, so check the airport code before booking an onward transfer.",
      },
      {
        question: "Is the bus a good option?",
        answer:
          "Yes for budget travelers who can handle a long ride and do not need to be fresh on arrival. It is less attractive before a serious flight connection or a packed first day in Bangkok.",
      },
      {
        question: "Should I book trains directly with SRT?",
        answer:
          // src: SRT D-Ticket official booking page, checked 2026-07.
          "SRT D-Ticket is the official railway booking channel, and partner sites can also be useful for comparison. Whichever you use, verify the station, class, berth and ticket rules.",
      },
    ],
  },
  "pattaya-to-bangkok-airport": {
    checkedOn: "2026-07",
    intro:
      // src: 12Go Pattaya-Suvarnabhumi + routePages.ts, checked 2026-07.
      "Pattaya to Bangkok Airport is a return-to-flight route, so the right question is not 'what is cheapest?' but 'what still works if Pattaya traffic, hotel pickup or Bangkok approach roads run slow?' Bus and van can be good value when your flight is later in the day. For early flights, family luggage or a ticket you cannot miss, a booked door-to-door taxi buys the buffer that this route needs.",
    quickFacts: [
      // src: routePages.ts + 12Go Pattaya-Suvarnabhumi, checked 2026-07.
      {
        title: "Route timing",
        text: "The local route data lists private taxi at 1h 45m-2h 30m and shared van or bus at 2h 30m-3h 30m; 12Go says the route can take 2-6 hours depending on transport.",
      },
      // src: 12Go Pattaya-Suvarnabhumi facts, checked 2026-07.
      {
        title: "Live departures",
        text: "12Go facts for Pattaya to Suvarnabhumi show earliest listed departure 5:30 AM, latest 5:20 PM, 9 daily departures and 122 km by land on the checked date.",
      },
      // src: 12Go Pattaya-Suvarnabhumi operators, checked 2026-07.
      {
        title: "Operators listed",
        text: "12Go lists transport companies including Bell Travel, Roong Reuang Coach, Easyride Services, Kim Transfers Thailand and other taxi, van and bus providers.",
      },
    ],
    tips: [
      // src: routePages.ts, checked 2026-07.
      "For morning flights, treat taxi as the default. A shared pickup that circles Pattaya before leaving town is the wrong place to save a little money.",
      // src: 12Go Pattaya-Suvarnabhumi facts, checked 2026-07.
      "If using bus or van, choose a departure that reaches the airport well before your airline check-in plan, not just before the scheduled flight time.",
      // src: routePages.ts + 12Go Pattaya-Suvarnabhumi, checked 2026-07.
      "Confirm that 'Bangkok Airport' means Suvarnabhumi (BKK). Pattaya sellers sometimes use loose language, and Don Mueang is a different airport across the city.",
      // src: 12Go Pattaya-Suvarnabhumi, checked 2026-07.
      "For van tickets, check whether pickup is hotel, area pickup or operator point. The first two sound similar but create different buffer risk.",
      "Leave extra margin on Sundays, long weekends and Thai holidays. The road can feel easy until everyone else is also returning toward Bangkok.",
      "Keep your passport, flight booking and luggage inside reach during the final hour. You do not want to unpack the van at the curb while the clock is loud.",
      "Avoid street offers that cannot give you driver details, vehicle type and pickup time in writing. The airport clock makes vague promises dangerous.",
    ],
    warnings: [
      // src: 12Go Pattaya-Suvarnabhumi, checked 2026-07.
      "12Go shows the trip can take up to 6 hours depending on transport. Do not build a tight flight connection around the best-case road time.",
      // src: routePages.ts, checked 2026-07.
      "Shared vans and buses may not start at your hotel door. Check the actual pickup point before deciding your alarm time.",
      "For early international flights, the safest version is often a very early private car or staying near the airport the night before.",
    ],
    faqs: [
      {
        question: "How early should I leave Pattaya for Suvarnabhumi Airport?",
        answer:
          "For an important flight, leave with a generous buffer, especially if using shared transport. For early morning flights, a private taxi or an airport-area night before departure is the calmer plan.",
      },
      {
        question: "How long does Pattaya to Bangkok Airport take?",
        answer:
          // src: routePages.ts + 12Go Pattaya-Suvarnabhumi, checked 2026-07.
          "The local data lists taxi at 1h 45m-2h 30m and bus or van at 2h 30m-3h 30m, while 12Go says the full route can take 2-6 hours depending on transport.",
      },
      {
        question: "Is there a bus from Pattaya to Suvarnabhumi?",
        answer:
          // src: 12Go Pattaya-Suvarnabhumi, checked 2026-07.
          "Yes, bus is listed as an available transport type on the checked 12Go route, with Roong Reuang Coach among the listed companies. Check the exact departure point and airport arrival point before booking.",
      },
      {
        question: "Is taxi worth it for this route?",
        answer:
          "Yes when your flight is early, expensive, international, or you have luggage and family logistics. It removes the pickup-point and shared-delay problem.",
      },
      {
        question: "What is the common mistake on this route?",
        answer:
          "Booking by cheapest arrival time and forgetting check-in, traffic and terminal time. On airport returns, the missed-flight cost is much bigger than the transfer saving.",
      },
    ],
  },
  "pattaya-to-don-mueang-airport": {
    checkedOn: "2026-07",
    intro:
      // src: 12Go Pattaya-Don Mueang + routePages.ts, checked 2026-07.
      "Pattaya to Don Mueang is less forgiving than Pattaya to Suvarnabhumi because you have to cross deeper into the Bangkok side. It is a normal route for a private taxi, but a shared van or bus needs a serious buffer and a very clear drop-off. If the flight is domestic and flexible, you can price the cheaper options. If it is your way home, choose control.",
    quickFacts: [
      // src: routePages.ts + 12Go Pattaya-Don Mueang, checked 2026-07.
      {
        title: "Route timing",
        text: "The local route data lists taxi at 2h-3h, shared van at 3h-4h and bus at 3h-4h 30m; 12Go says the route can take 2-16 hours depending on transport.",
      },
      // src: 12Go Pattaya-Don Mueang facts, checked 2026-07.
      {
        title: "Live route facts",
        text: "12Go facts list earliest departure 6:00 AM, latest 6:00 PM, 9 daily departures and 161 km by land for Pattaya to Don Mueang Airport.",
      },
      // src: 12Go Pattaya-Don Mueang transport list, checked 2026-07.
      {
        title: "Available modes",
        text: "12Go lists flight, bus, van and taxi for this route, and its transport section shows no train or ferry option.",
      },
    ],
    tips: [
      // src: routePages.ts, checked 2026-07.
      "For a morning DMK flight, book a private car or move near the airport the night before. The cheap route is least useful when there is no slack.",
      // src: 12Go Pattaya-Don Mueang facts, checked 2026-07.
      "Do not use the earliest public departure as your only safety net. If it leaves at 6:00 AM and your flight is not much later, the plan is already tight.",
      // src: 12Go Pattaya-Don Mueang + routePages.ts, checked 2026-07.
      "Check whether a bus or van drops at Don Mueang itself or at a Bangkok connection point. 'To Bangkok' is not the same as 'to Terminal 1 or Terminal 2.'",
      "Build more margin than you would for Suvarnabhumi. North Bangkok traffic and the final airport approach can be stubborn.",
      "If you are flying low-cost from DMK, read the airline's baggage and check-in rules before choosing a late transfer. Budget airlines are not sentimental about closing times.",
      "For groups, compare the per-seat van total with a taxi. The private car often becomes sensible once there are three people and luggage.",
      "Beware the airport-name trap: Suvarnabhumi is BKK, Don Mueang is DMK. A wrong-airport booking can ruin the day.",
    ],
    warnings: [
      // src: 12Go Pattaya-Don Mueang, checked 2026-07.
      "12Go's checked route page shows a wide 2-16 hour travel-time range. Do not pair slow or indirect options with a tight flight.",
      // src: routePages.ts, checked 2026-07.
      "Shared van pickup may be at a hotel area or operator point. Confirm it before deciding your departure buffer.",
      "If the ticket does not explicitly say Don Mueang Airport drop-off, ask before paying.",
    ],
    faqs: [
      {
        question: "Is taxi the best way from Pattaya to Don Mueang Airport?",
        answer:
          "For most flight departures, yes. It is not always cheapest, but it gives the most control over pickup, luggage and the final Bangkok approach.",
      },
      {
        question: "How long does Pattaya to DMK take?",
        answer:
          // src: routePages.ts + 12Go Pattaya-Don Mueang, checked 2026-07.
          "The local data lists taxi at 2h-3h, van at 3h-4h and bus at 3h-4h 30m. 12Go warns the route can vary much wider depending on transport.",
      },
      {
        question: "Can I take a bus or van for an early flight?",
        answer:
          "Only if the live departure gives a very large buffer. For early flights, a private transfer or airport hotel the night before is the safer plan.",
      },
      {
        question: "What should I verify before booking?",
        answer:
          "Verify pickup point, exact airport drop-off, luggage allowance, departure time and whether the ticket is direct or involves a Bangkok handoff.",
      },
      {
        question: "Is Don Mueang the same as Bangkok Airport?",
        answer:
          "No. Don Mueang is DMK and Suvarnabhumi is BKK. Always book by airport code, not by a vague 'Bangkok airport' label.",
      },
    ],
  },
  "hua-hin-to-bangkok": {
    checkedOn: "2026-07",
    intro:
      // src: 12Go Hua Hin-Bangkok + routePages.ts, checked 2026-07.
      "Hua Hin to Bangkok is a gentle route only if Bangkok is your final stop. If you are continuing to an airport, the route changes character: the buffer matters more than the fare. Train, bus and van can all work for city arrivals; taxi is the cleaner answer for hotel-to-hotel travel, airport connections and anyone carrying luggage from a beach stay.",
    quickFacts: [
      // src: routePages.ts + 12Go Hua Hin-Bangkok, checked 2026-07.
      {
        title: "Route timing",
        text: "The local route data lists taxi at 3h-4h, van at 3h 30m-5h, bus at 4h-5h and train at 4h-5h 30m; 12Go says the route can take 1-5 hours depending on mode.",
      },
      // src: 12Go Hua Hin-Bangkok facts, checked 2026-07.
      {
        title: "Live departures",
        text: "12Go facts show earliest departure 12:00 AM, latest 6:00 PM, 67 daily departures and 250 km by land for Hua Hin to Bangkok on the checked date.",
      },
      // src: 12Go Hua Hin-Bangkok transport list, checked 2026-07.
      {
        title: "Modes shown",
        text: "12Go lists bus, train, van, taxi and flight as possible booking categories for Hua Hin to Bangkok, with no ferry option.",
      },
    ],
    tips: [
      // src: routePages.ts, checked 2026-07.
      "If your Bangkok plan is a flight, decide which airport first. A ticket to central Bangkok does not solve the BKK or DMK transfer.",
      // src: 12Go Hua Hin-Bangkok schedule and facts, checked 2026-07.
      "For bus or van, choose a departure that arrives before rush-hour pressure if possible. The last Bangkok kilometers can be slower than the map suggests.",
      // src: routePages.ts + 12Go Hua Hin-Bangkok, checked 2026-07.
      "The train is pleasant when you are not in a rush. For a flight connection, it needs more margin because station arrival is not airport arrival.",
      "If leaving from a resort outside central Hua Hin, add pickup time before comparing options. The published route time is not the whole morning.",
      "Shared vans are useful for budget travel but can be tight with suitcases. If you have beach gear or family luggage, check luggage rules before paying.",
      "For a morning flight from Bangkok, leave Hua Hin the previous day or book a very early private transfer with a conservative buffer.",
      "Do not let the word 'Bangkok' hide the final destination. Mochit, Southern Terminal, a hotel in Sukhumvit and Suvarnabhumi are not interchangeable.",
    ],
    warnings: [
      // src: routePages.ts + 12Go Hua Hin-Bangkok, checked 2026-07.
      "A Hua Hin to Bangkok ticket is usually a city transfer, not an airport guarantee. Add a separate airport leg unless your ticket clearly includes it.",
      // src: 12Go Hua Hin-Bangkok, checked 2026-07.
      "12Go lists many daily departures, but the right one is the one that leaves enough buffer after Bangkok traffic, not the one with the neatest price.",
      "If you must be in Bangkok by a fixed time, avoid the final public departure of the day.",
    ],
    faqs: [
      {
        question: "What is the best way from Hua Hin to Bangkok?",
        answer:
          "For comfort and exact drop-off, taxi. For budget, bus or van. For a slower, more local trip, train. If you are connecting to a flight, choose by buffer first.",
      },
      {
        question: "How long does Hua Hin to Bangkok take?",
        answer:
          // src: routePages.ts + 12Go Hua Hin-Bangkok, checked 2026-07.
          "The local route data lists taxi at 3h-4h, van at 3h 30m-5h, bus at 4h-5h and train at 4h-5h 30m. Live conditions can shift the road options.",
      },
      {
        question: "Can I go from Hua Hin to Bangkok Airport the same day?",
        answer:
          "Yes, but book the transfer to the correct airport and leave a large buffer. For morning flights, the safer answer is to sleep in Bangkok or near the airport the night before.",
      },
      {
        question: "Is the train good with luggage?",
        answer:
          "It can work with manageable bags, but you still need to get to and from stations. With multiple suitcases, a taxi may be more practical than a romantic train idea.",
      },
      {
        question: "Are bus and van tickets easy to book?",
        answer:
          // src: 12Go Hua Hin-Bangkok, checked 2026-07.
          "12Go shows frequent bus and van availability on the checked route. Still book ahead for weekends, holidays and any connection that matters.",
      },
    ],
  },
  "patong-beach-to-phuket-airport": {
    checkedOn: "2026-07",
    intro:
      // src: 12Go Patong-Phuket Airport + Phuket Smart Bus + routePages.ts, checked 2026-07.
      "Patong to Phuket Airport is short on the map and surprisingly easy to underestimate. The coast road, rain, pickups and Patong traffic can turn a neat plan into an anxious one. The airport bus is the budget move when the timetable fits. Shared vans sit in the middle. Taxi or private transfer is the calm option for early flights, luggage, children or anyone who does not want their last Phuket hour spent watching the clock.",
    quickFacts: [
      // src: routePages.ts + 12Go Patong-Phuket Airport, checked 2026-07.
      {
        title: "Route timing",
        text: "The local route data lists airport bus, shared van and taxi plus van at 1h-2h, with private taxi at 45m-1h 30m; 12Go says the route can take 1-3 hours.",
      },
      // src: 12Go Patong-Phuket Airport facts, checked 2026-07.
      {
        title: "Bus window",
        text: "12Go lists buses from Patong to Phuket Airport starting at 06:00 and running as late as 18:00, with 12 bus trips on the checked date.",
      },
      // src: Phuket Smart Bus official route/payment pages, checked 2026-07.
      {
        title: "Public bus context",
        text: "Phuket Smart Bus serves the west-coast airport route and publishes live tracking plus payment information for passengers.",
      },
    ],
    tips: [
      // src: routePages.ts + 12Go Patong-Phuket Airport, checked 2026-07.
      "For morning departures, taxi is the grown-up answer. A cheap bus is useful only if it leaves early enough for your check-in buffer.",
      // src: 12Go Patong-Phuket Airport, checked 2026-07.
      "If using the bus, check the exact stop and departure direction before the travel day. Patong is busy enough without learning the stop location with bags.",
      // src: Phuket Smart Bus official site, checked 2026-07.
      "Use live tracking when taking the Smart Bus, but do not use live tracking as your whole buffer. It helps you see the bus; it does not remove traffic.",
      // src: 12Go Patong-Phuket Airport + routePages.ts, checked 2026-07.
      "Shared vans can work well, but confirm whether the pickup is at your hotel or a nearby meeting point. A ten-minute walk with luggage is different in tropical rain.",
      "Patong evening traffic can be sticky. If your flight is at night, do not assume the road will be empty just because the beach day is ending.",
      "For families, compare a private car against multiple van seats. The direct car often wins on sanity even when it costs more.",
      "Ignore vague taxi approaches that cannot name the vehicle, pickup time and total price. Airport transfers should be boring and written down.",
    ],
    warnings: [
      // src: 12Go Patong-Phuket Airport, checked 2026-07.
      "12Go lists the route at 1-3 hours depending on transport. Use the slow end when planning a flight.",
      // src: routePages.ts, checked 2026-07.
      "A bus or van pickup point is not always your hotel door. Confirm the meeting place before checkout.",
      "For very early flights, do not rely on a public bus unless the live timetable clearly supports your check-in buffer.",
    ],
    faqs: [
      {
        question: "How long does Patong to Phuket Airport take?",
        answer:
          // src: routePages.ts + 12Go Patong-Phuket Airport, checked 2026-07.
          "The local data lists private taxi at 45m-1h 30m and shared/public options around 1h-2h, while 12Go says the route can take 1-3 hours depending on transport.",
      },
      {
        question: "Can I take the bus from Patong to the airport?",
        answer:
          // src: 12Go Patong-Phuket Airport + Phuket Smart Bus official site, checked 2026-07.
          "Yes, bus is a listed option and Phuket Smart Bus serves the island route. Use it when the timetable fits your flight with plenty of buffer.",
      },
      {
        question: "What should I do for an early flight?",
        answer:
          "Book a taxi or private transfer, or stay closer to the airport if the flight is painfully early. A public bus is only sensible when its first departure leaves enough margin.",
      },
      {
        question: "Is a shared van okay with luggage?",
        answer:
          "Usually for normal bags, but check the rules and pickup point. If you have surf gear, multiple suitcases or children, taxi is much simpler.",
      },
      {
        question: "Does bad weather matter on this route?",
        answer:
          "Yes. Heavy rain can slow pickup, walking to stops and the road itself. Add buffer or choose a direct car in wet-season weather.",
      },
    ],
  },
  "ao-nang-to-krabi-airport": {
    checkedOn: "2026-07",
    intro:
      // src: 12Go Ao Nang-Krabi Airport + routePages.ts, checked 2026-07.
      "Ao Nang to Krabi Airport is the kind of transfer that looks too small to plan, which is exactly how travelers make it stressful. The road leg is manageable, but pickup windows, luggage, rain and a quiet airport timetable still matter. Shared van is the budget default when your flight is not early. Taxi is the safer answer when check-in time, children or a long international connection is involved.",
    quickFacts: [
      // src: routePages.ts + 12Go Ao Nang-Krabi Airport, checked 2026-07.
      {
        title: "Route timing",
        text: "The local route data lists private taxi at 30m-1h, shared van or taxi plus van at 30m-1h 15m and airport bus at 45m-1h 30m; 12Go lists about 1 hour for its checked van route.",
      },
      // src: 12Go Ao Nang-Krabi Airport, checked 2026-07.
      {
        title: "Live partner view",
        text: "12Go currently offers van as the checked bookable option for Ao Nang to Krabi Airport, with about 4 departures a day on the page checked.",
      },
      // src: 12Go Ao Nang-Krabi Airport facts, checked 2026-07.
      {
        title: "Distance and window",
        text: "12Go facts list 50 km distance, earliest departure 8:00 AM and latest departure 3:00 PM for the checked Ao Nang to Krabi Airport van route.",
      },
    ],
    tips: [
      // src: routePages.ts + 12Go Ao Nang-Krabi Airport, checked 2026-07.
      "For early flights, use taxi. The checked van window starts too late for many morning departures, and hotel pickup timing can compress quickly.",
      // src: 12Go Ao Nang-Krabi Airport, checked 2026-07.
      "If booking a van, confirm the hotel pickup time, not only the route departure. Shared pickups may collect other travelers before the airport run.",
      // src: 12Go Ao Nang-Krabi Airport luggage note, checked 2026-07.
      "Travel light for vans. 12Go specifically warns that luggage space in vans is limited and large bags may need an extra seat.",
      // src: routePages.ts, checked 2026-07.
      "Airport bus can be fine when time is loose, but private taxi is better when your checkout, bags and flight time all collide.",
      "Rain changes the feeling of this short route. Waiting outside a hotel or moving luggage to a pickup point is harder in a storm.",
      "Do not plan to leave Ao Nang at the last reasonable minute after an island tour day. Boats, showers, checkout and transfer all stack up.",
      "If your ticket includes a pickup area rather than your exact hotel, message the operator before travel day.",
    ],
    warnings: [
      // src: 12Go Ao Nang-Krabi Airport, checked 2026-07.
      "The checked 12Go route shows van departures from 8:00 AM to 3:00 PM. That does not cover every flight, especially early ones.",
      // src: 12Go Ao Nang-Krabi Airport luggage note, checked 2026-07.
      "Van luggage space is limited. Do not assume a big suitcase, stroller or dive bag fits without checking.",
      "For international connections through Bangkok or another hub, keep a larger buffer than the local road distance suggests.",
    ],
    faqs: [
      {
        question: "How long does Ao Nang to Krabi Airport take?",
        answer:
          // src: routePages.ts + 12Go Ao Nang-Krabi Airport, checked 2026-07.
          "The local data lists taxi at 30m-1h, shared van at 30m-1h 15m and airport bus at 45m-1h 30m. 12Go's checked van route is about 1 hour.",
      },
      {
        question: "Can I take a shared van for a morning flight?",
        answer:
          // src: 12Go Ao Nang-Krabi Airport facts, checked 2026-07.
          "Only if the current departure window fits. The checked 12Go page lists van departures starting at 8:00 AM, so many early flights need a taxi.",
      },
      {
        question: "Is taxi overkill for such a short route?",
        answer:
          "Not when a flight is involved. Taxi is often the most sensible choice for early departures, heavy luggage, families or a tight onward connection.",
      },
      {
        question: "What should I check before booking a van?",
        answer:
          "Check hotel pickup time, exact meeting point, luggage allowance and whether the operator will go directly to the airport or collect other passengers first.",
      },
      {
        question: "How much buffer should I keep?",
        answer:
          "Use your airline check-in plan, then add road and pickup margin. For early or important flights, avoid building the whole plan around the best-case 30-minute road time.",
      },
    ],
  },
  "koh-chang-to-bangkok": {
    checkedOn: "2026-07",
    intro:
      // src: KohChangFerries + 12Go Koh Chang-Bangkok + routePages.ts, checked 2026-07.
      "Koh Chang to Bangkok is a ferry-and-road day, not just a long van ride. The ferry handoff is the part that decides the mood: hotel pickup, island pier, Ao Sapporot to Ao Thammachat, then the road to Bangkok. If Bangkok is your final stop, a morning shared transfer is usually fine. If Bangkok is only a connection point for a flight, treat the ferry like a gate that can close your day.",
    quickFacts: [
      // src: KohChangFerries, checked 2026-07.
      {
        title: "Pier logic",
        text: "The current Koh Chang ferry crossing uses the Koh Chang side at Ao Sapporot and the mainland side at Ao Thammachat; Ferry Koh Chang publishes service to and from the island from 06:30 to 18:30.",
      },
      // src: KohChangFerries, checked 2026-07.
      {
        title: "Standalone ferry payment",
        text: "Ferry Koh Chang says standalone ferry tickets cannot be bought online in advance and must be bought with cash at the pier on the day of travel.",
      },
      // src: routePages.ts + 12Go Koh Chang-Bangkok facts, checked 2026-07.
      {
        title: "Bangkok transfer window",
        text: "The local route data lists ferry plus van at 7h-10h, ferry plus bus at 8h-10h 30m, van at 7h-9h 30m and private taxi at 6h-8h; 12Go lists 517 km by route distance.",
      },
    ],
    tips: [
      // src: KohChangFerries + routePages.ts, checked 2026-07.
      "Leave in the morning if you care about your Bangkok evening. Waiting until late in the day puts the ferry window and road traffic on the same side against you.",
      // src: KohChangFerries, checked 2026-07.
      "If you are buying the ferry separately, bring Thai baht cash. The ferry site explicitly says pier tickets are cash on the travel day.",
      // src: routePages.ts + 12Go Koh Chang-Bangkok, checked 2026-07.
      "For joint tickets, check where Bangkok drop-off actually is: hotel, Khao San area, bus terminal, office or airport-adjacent point. The wording matters after a long day.",
      // src: KohChangFerries + 12Go Koh Chang-Bangkok, checked 2026-07.
      "A first ferry day gives you room for queues and road delays. The last practical ferry is not a good foundation for a same-night flight.",
      "Hotel pickups on Koh Chang can take time because the island road is long and curved. A pickup from Lonely Beach is a different morning from a pickup near the ferry side.",
      "Private taxi is useful for families and groups, but still depends on ferry timing. A car cannot drive across a missed boat.",
      "Do not book a Bangkok train, bus or flight close to the published transfer arrival. This route has too many moving parts for tiny buffers.",
    ],
    warnings: [
      // src: KohChangFerries, checked 2026-07.
      "Ferry Koh Chang publishes service from 06:30 to 18:30. If you miss the practical evening ferry, your Bangkok arrival may move to the next day.",
      // src: routePages.ts + 12Go Koh Chang-Bangkok, checked 2026-07.
      "A joint ticket may include ferry and road transport, but the exact pickup and drop-off differ by operator. Read the inclusions before paying.",
      "If your real destination is a Bangkok airport, use the airport route or add a separate airport transfer buffer.",
    ],
    faqs: [
      {
        question: "Which piers are used from Koh Chang to Bangkok?",
        answer:
          // src: KohChangFerries, checked 2026-07.
          "The ferry crossing runs from Ao Sapporot on Koh Chang to Ao Thammachat on the mainland, then the road leg continues toward Bangkok.",
      },
      {
        question: "What is the first ferry from Koh Chang?",
        answer:
          // src: KohChangFerries, checked 2026-07.
          "Ferry Koh Chang publishes service to and from the island from 06:30 to 18:30, so 06:30 is the checked first ferry window.",
      },
      {
        question: "Can I buy the ferry ticket online?",
        answer:
          // src: KohChangFerries, checked 2026-07.
          "For standalone ferry crossings, Ferry Koh Chang says tickets cannot be bought online in advance and are cash-only at the pier on the travel day. Joint transfer tickets are separate partner products.",
      },
      {
        question: "How long does Koh Chang to Bangkok take?",
        answer:
          // src: routePages.ts + 12Go Koh Chang-Bangkok, checked 2026-07.
          "The local data lists shared and ferry-linked options around 7h-10h 30m, with private taxi around 6h-8h. Treat this as a travel day, not a quick hop.",
      },
      {
        question: "Can I connect to a Bangkok flight the same day?",
        answer:
          "For evening flights, maybe with a first-morning departure and a big buffer. For morning or early afternoon flights, leave Koh Chang the previous day.",
      },
    ],
  },
  "koh-chang-to-suvarnabhumi-airport": {
    checkedOn: "2026-07",
    intro:
      // src: KohChangFerries + 12Go Koh Chang-Suvarnabhumi + routePages.ts, checked 2026-07.
      "Koh Chang to Suvarnabhumi is the Batch 3 route where buffer matters most. You are not just driving to BKK; you are leaving an island, catching a ferry, crossing the mainland and entering Bangkok airport traffic. For afternoon or evening flights, the first practical morning transfer can work. For morning flights, the honest advice is to leave Koh Chang the day before.",
    quickFacts: [
      // src: KohChangFerries, checked 2026-07.
      {
        title: "Ferry gate",
        text: "Ferry Koh Chang publishes ferries to and from Koh Chang from 06:30 to 18:30, using the island side at Ao Sapporot and the mainland side at Ao Thammachat.",
      },
      // src: routePages.ts + 12Go Koh Chang-Suvarnabhumi schedule, checked 2026-07.
      {
        title: "Airport transfer timing",
        text: "The local route data lists ferry plus van at 6h 30m-9h, bus plus ferry at 7h-10h and private taxi at 5h 30m-7h 30m; 12Go checked listings include morning van plus ferry departures around 08:20-11:30.",
      },
      // src: KohChangFerries, checked 2026-07.
      {
        title: "Cash ferry warning",
        text: "Standalone Ferry Koh Chang tickets are cash-only at the pier on the travel day; online joint tickets are different products sold by transport partners.",
      },
    ],
    tips: [
      // src: KohChangFerries + routePages.ts, checked 2026-07.
      "For an international flight, plan backward from airport check-in and then add ferry risk. If the math feels tight, it is tight.",
      // src: KohChangFerries, checked 2026-07.
      "Use the first practical morning ferry/transfer for afternoon flights. A later island departure leaves no room for queues, rain or road trouble.",
      // src: 12Go Koh Chang-Suvarnabhumi schedule, checked 2026-07.
      "Read the 12Go ticket carefully: some options are van plus ferry, some are bus plus ferry, and some are private taxi. The pickup and arrival time are not interchangeable.",
      // src: routePages.ts, checked 2026-07.
      "Private taxi gives more control after the ferry, but it does not remove ferry timing. Ask how the vehicle handles the island-to-mainland crossing.",
      "If your flight leaves before mid-afternoon, sleep near Suvarnabhumi the night before unless you are fully comfortable with risk.",
      "Keep ferry cash even if you booked a driver. If a plan changes at the pier, cash keeps your options open.",
      "Do not book a ticket that only says 'Bangkok' when you need BKK airport. City drop-off plus airport transfer is a different plan.",
    ],
    warnings: [
      // src: KohChangFerries, checked 2026-07.
      "The ferry service window is 06:30-18:30. Once the practical ferry day is gone, your flight buffer is gone too.",
      // src: routePages.ts + 12Go Koh Chang-Suvarnabhumi, checked 2026-07.
      "The route can be 5h 30m-10h depending on option. Build around the slow side for flights.",
      "For morning flights from Suvarnabhumi, leave Koh Chang the previous day.",
    ],
    faqs: [
      {
        question: "Can I travel from Koh Chang to Suvarnabhumi on the day of my flight?",
        answer:
          "For afternoon or evening flights, yes if you leave early and keep a serious buffer. For morning flights, leave Koh Chang the previous day.",
      },
      {
        question: "Which ferry piers are used?",
        answer:
          // src: KohChangFerries, checked 2026-07.
          "The checked ferry route is Ao Sapporot on Koh Chang to Ao Thammachat on the mainland, then onward by road to Suvarnabhumi.",
      },
      {
        question: "What is the first ferry?",
        answer:
          // src: KohChangFerries, checked 2026-07.
          "Ferry Koh Chang publishes service from 06:30 to 18:30, so the first checked ferry window is 06:30.",
      },
      {
        question: "Is a joint ticket better than separate ferry and taxi?",
        answer:
          "A joint ticket is easier when it clearly includes hotel pickup, ferry and airport drop-off. Separate steps give flexibility but require you to manage the pier handoff yourself.",
      },
      {
        question: "Can I pay by card at the ferry pier?",
        answer:
          // src: KohChangFerries, checked 2026-07.
          "For standalone ferry tickets, the ferry site says cash only at the pier. Do not assume QR or card payment will work.",
      },
    ],
  },
  "koh-samui-to-surat-thani-airport": {
    checkedOn: "2026-07",
    intro:
      // src: Raja Ferry + 12Go Koh Samui-Surat Thani Airport + routePages.ts, checked 2026-07.
      "Koh Samui to Surat Thani Airport is a classic joint-ticket route, but the safe version starts with your flight time. The ferry, mainland bus or van and airport drop-off may be sold as one product, which is convenient, but it also means a late ferry can become a late airport arrival. For afternoon flights, use an early island departure. For morning flights, leave Samui the previous day or fly from Samui directly instead.",
    quickFacts: [
      // src: Raja Ferry homepage + sailing schedule, checked 2026-07.
      {
        title: "Raja ferry route",
        text: "Raja lists Koh Samui Lipa Noi to Don Sak at 05:00-06:30 as a ferry crossing, and its schedule page shows hourly Samui-Don Sak service from 05:00 to 19:00.",
      },
      // src: Raja Ferry homepage, checked 2026-07.
      {
        title: "Airport package example",
        text: "Raja lists a Koh Samui Lipa Noi to Surat Thani Airport package at 05:00-10:00 for THB540 on the checked page.",
      },
      // src: 12Go Koh Samui-Surat Thani Airport, checked 2026-07.
      {
        title: "Live partner range",
        text: "12Go says Koh Samui to Surat Thani Airport can take 3-7 hours and lists ferry plus van from 05:00 Lipa Noi or Na Thon-related options depending on operator.",
      },
    ],
    tips: [
      // src: Raja Ferry homepage + 12Go Koh Samui-Surat Thani Airport, checked 2026-07.
      "For afternoon flights from Surat Thani, the first practical morning joint ticket is the one to compare first. Later departures can work only with enough airport buffer.",
      // src: 12Go Koh Samui-Surat Thani Airport, checked 2026-07.
      "Check the departure pier: Lipa Noi, Na Thon and other operator points are not the same place. Your hotel side of Samui changes the pickup morning.",
      // src: routePages.ts + 12Go Koh Samui-Surat Thani Airport, checked 2026-07.
      "A ticket may include hotel pickup, ferry and bus/van to the airport, or it may start at a pier. Read the first meeting point and final drop-off before payment.",
      // src: Raja Ferry sailing schedule, checked 2026-07.
      "Raja's ferry crossing is about 1h 30m on the checked schedule, but the airport route includes island pickup and the mainland road leg too.",
      "If the sea looks rough or storms are forecast, do not plan a tight same-day flight. Ferry delays are not a customer-service inconvenience; they can be a missed flight.",
      "For families, hotel pickup can be worth paying for, but ask the pickup time. It may be much earlier than the ferry time.",
      "If you must fly early, compare the cost of a previous-night Surat Thani hotel against the cost of missing the flight.",
    ],
    warnings: [
      // src: 12Go Koh Samui-Surat Thani Airport, checked 2026-07.
      "12Go lists 3-7 hours for this route. Do not schedule airport arrival on the optimistic edge.",
      // src: Raja Ferry homepage, checked 2026-07.
      "The checked Raja airport package example reaches Surat Thani Airport at 10:00, which is not suitable for early morning flights.",
      "Speed and ferry choices are weather-sensitive. Build margin before flights, especially in rough-season conditions.",
    ],
    faqs: [
      {
        question: "What is the first practical Koh Samui to Surat Thani Airport option?",
        answer:
          // src: Raja Ferry homepage, checked 2026-07.
          "Raja lists a Koh Samui Lipa Noi to Surat Thani Airport package from 05:00 to 10:00 on the checked page. Always verify the live date before booking.",
      },
      {
        question: "Which pier does Raja use on Koh Samui?",
        answer:
          // src: Raja Ferry homepage + sailing schedule, checked 2026-07.
          "Raja lists Koh Samui Lipa Noi for its Samui-Don Sak ferry route.",
      },
      {
        question: "Can I catch a morning flight from Surat Thani Airport?",
        answer:
          "Usually not comfortably from Samui on the same morning. Leave the island the previous day or choose a later flight with a verified early transfer.",
      },
      {
        question: "Is the ticket usually joint or separate?",
        answer:
          "Many airport products are joint tickets that combine ferry and bus or van to the airport, but some options start at a pier. Read the exact inclusions and drop-off.",
      },
      {
        question: "Does weather matter?",
        answer:
          "Yes. Ferry travel is weather-sensitive, and 12Go also warns ferry rides depend on weather conditions. Keep a flight buffer.",
      },
    ],
  },
  "koh-phangan-to-surat-thani-airport": {
    checkedOn: "2026-07",
    intro:
      // src: Raja Ferry + 12Go Koh Phangan-Surat Thani Airport + routePages.ts, checked 2026-07.
      "Koh Phangan to Surat Thani Airport is not the route for heroic same-morning plans. You have a ferry from Thong Sala, the Don Sak handoff and then a road leg to the airport. A joint ticket is the easiest shape, but it only protects you if the departure is early enough for your flight. After Full Moon Party periods or bad weather, add even more margin than feels necessary.",
    quickFacts: [
      // src: Raja Ferry homepage, checked 2026-07.
      {
        title: "Raja pier and timing",
        text: "Raja lists Koh Phangan Thong Sala to Don Sak at 05:00-07:30, and a Koh Phangan to Surat Thani Airport package at 05:00-10:00 for THB600 on the checked page.",
      },
      // src: 12Go Koh Phangan-Surat Thani Airport, checked 2026-07.
      {
        title: "Live partner window",
        text: "12Go lists ferry plus van from Thong Sala Koh Phangan starting at 05:00 and running as late as 22:00, with 23 ferry plus van departures on the checked page.",
      },
      // src: routePages.ts + 12Go Koh Phangan-Surat Thani Airport, checked 2026-07.
      {
        title: "Route timing",
        text: "The local route data lists ferry plus bus at 4h-7h, ferry plus van at 4h-6h 30m and ferry plus taxi at 3h 30m-6h; 12Go says ferry plus van is the quick option.",
      },
    ],
    tips: [
      // src: Raja Ferry homepage, checked 2026-07.
      "For an afternoon flight, start by checking the 05:00 Thong Sala departure. It is the cleanest buffer-builder in the checked Raja data.",
      // src: 12Go Koh Phangan-Surat Thani Airport, checked 2026-07.
      "After big island nights, do not book the latest possible ferry that still appears to work. Sleep, queues and hotel checkout make the morning messier.",
      // src: routePages.ts + 12Go Koh Phangan-Surat Thani Airport, checked 2026-07.
      "Check whether your ticket starts at Thong Sala Pier or includes hotel pickup. If it starts at the pier, your island taxi is a separate risk.",
      // src: Raja Ferry homepage, checked 2026-07.
      "The ferry crossing to Don Sak is only part of the route. The airport package arrival is the number that matters for flights.",
      "If the sea is rough, choose the more conservative option and keep a later flight. Fast boats are not automatically better when conditions are uncomfortable.",
      "For morning Surat Thani flights, leave Koh Phangan the previous day and sleep on the mainland.",
      "Keep your ferry voucher and flight time offline. Mobile signal and rushed pier check-in are a bad combination.",
    ],
    warnings: [
      // src: Raja Ferry homepage, checked 2026-07.
      "The checked Raja airport package reaches Surat Thani Airport at 10:00. That is already too late for many morning flights.",
      // src: routePages.ts + 12Go Koh Phangan-Surat Thani Airport, checked 2026-07.
      "Route duration can run from 3h 30m to 7h depending on ticket type. Do not plan from the fastest edge.",
      "Full Moon Party periods can add demand and friction. Book earlier and add buffer.",
    ],
    faqs: [
      {
        question: "What pier do I leave from on Koh Phangan?",
        answer:
          // src: Raja Ferry homepage + 12Go Koh Phangan-Surat Thani Airport, checked 2026-07.
          "Raja and 12Go checked listings use Thong Sala on Koh Phangan for the airport route. Other operators may still have their own meeting instructions, so check the ticket.",
      },
      {
        question: "What is the first practical ferry for Surat Thani Airport?",
        answer:
          // src: Raja Ferry homepage, checked 2026-07.
          "Raja lists Thong Sala to Don Sak at 05:00-07:30 and a Thong Sala to Surat Thani Airport package at 05:00-10:00 on the checked page.",
      },
      {
        question: "Can I catch a morning flight from Surat Thani Airport?",
        answer:
          "Only if the flight is late enough for a verified early transfer, and even then it is tight. For true morning flights, leave Koh Phangan the previous day.",
      },
      {
        question: "Is ferry plus van better than ferry plus bus?",
        answer:
          "Ferry plus van is often the quicker, more direct shape, while ferry plus bus can be cheaper. For flights, choose by arrival buffer and reliability, not only price.",
      },
      {
        question: "Does my ticket include hotel pickup?",
        answer:
          "Not always. Some tickets start at Thong Sala Pier, while others include a hotel or area pickup. Check the first meeting point before you book.",
      },
    ],
  },
  "koh-phi-phi-to-krabi": {
    checkedOn: "2026-07",
    intro:
      // src: Andaman Wave Master Phi Phi-Krabi + 12Go Koh Phi Phi-Krabi + routePages.ts, checked 2026-07.
      "Koh Phi Phi to Krabi is a short sea crossing with a long list of possible onward plans: Krabi Town, Ao Nang, Railay, Krabi Airport or another island transfer. The pier fact is simple - Tonsai to Klong Jilad for the standard Andaman Wave Master ferry - but the practical question is what happens after Klong Jilad. If a flight is involved, take the first practical morning boat and avoid building the day around the last ferry.",
    quickFacts: [
      // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
      {
        title: "Operator ferry",
        text: "Andaman Wave Master lists Phi Phi Island Tonsai Pier to Krabi Klong Jilad Pier ferries at 10:30-12:30 and 15:30-17:30, operating daily.",
      },
      // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
      {
        title: "Ticket scope",
        text: "Andaman Wave Master says the listed Phi Phi-Krabi prices are for the ferry ticket only and do not include land transfer in Krabi, Lanta or Phi Phi.",
      },
      // src: 12Go Koh Phi Phi-Krabi + routePages.ts, checked 2026-07.
      {
        title: "Live partner range",
        text: "12Go lists ferry plus van from Ton Sai Pier starting at 08:45 and running as late as 16:45 on the checked page; the local route data lists ferry, speedboat and ferry plus van options.",
      },
    ],
    tips: [
      // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
      "If you need Krabi Airport the same day, the 10:30 standard ferry is the safer official ferry to plan around than the 15:30 ferry.",
      // src: 12Go Koh Phi Phi-Krabi, checked 2026-07.
      "For airport or hotel connections, compare joint ferry plus van tickets. They can solve the Klong Jilad onward leg if the inclusions are clear.",
      // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
      "Do not assume a ferry ticket includes Krabi hotel or airport transfer. Andaman Wave Master explicitly says the ferry price is boat-only.",
      // src: routePages.ts, checked 2026-07.
      "Speedboat is faster on paper, but ferry is usually calmer with luggage. Choose speedboat only if sea conditions and your stomach agree.",
      "Arrive at Tonsai Pier early. Phi Phi pier check-in can feel chaotic when multiple boats leave around the same time.",
      "For afternoon flights from Krabi, use the first practical morning departure and keep road transfer time after Klong Jilad.",
      "For morning flights from Krabi, leave Phi Phi the previous day. There is no humane same-morning ferry plan for an early airport check-in.",
    ],
    warnings: [
      // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
      "The checked official ferry times are 10:30 and 15:30 from Tonsai. The afternoon ferry is risky for same-day flights.",
      // src: 12Go Koh Phi Phi-Krabi + Andaman Wave Master, checked 2026-07.
      "Joint tickets and ferry-only tickets end in different places. Read whether your booking ends at Klong Jilad, a Krabi hotel, Ao Nang or the airport.",
      "Bad weather can affect ferry and speedboat comfort or timing. Do not run this route tight before a flight.",
    ],
    faqs: [
      {
        question: "Which pier do I use from Phi Phi to Krabi?",
        answer:
          // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
          "The checked Andaman Wave Master ferry runs from Phi Phi Island Tonsai Pier to Krabi Klong Jilad Pier.",
      },
      {
        question: "What is the first official ferry to Krabi?",
        answer:
          // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
          "Andaman Wave Master lists a 10:30-12:30 Tonsai to Klong Jilad ferry. Live partner listings may show earlier ferry plus van products, so check your date.",
      },
      {
        question: "Does the ferry ticket include hotel transfer?",
        answer:
          // src: Andaman Wave Master Phi Phi-Krabi ferry timetable, checked 2026-07.
          "The Andaman Wave Master ferry listing says its prices are ferry ticket only and do not include land transfer. Joint tickets from partners may include onward van transfer.",
      },
      {
        question: "Can I catch a Krabi Airport flight the same day?",
        answer:
          "For afternoon flights, use the first practical morning boat and a clear onward transfer. For morning flights, leave Phi Phi the previous day.",
      },
      {
        question: "Ferry or speedboat?",
        answer:
          "Ferry is calmer and better with luggage; speedboat is faster but more weather-sensitive. Before a flight, reliability and buffer beat raw speed.",
      },
    ],
  },
  "koh-phi-phi-to-phuket": {
    checkedOn: "2026-07",
    intro:
      // src: Andaman Wave Master Phi Phi-Phuket + 12Go Koh Phi Phi-Phuket + routePages.ts, checked 2026-07.
      "Koh Phi Phi to Phuket looks easy until you add a flight from Phuket Airport. The ferry lands at Rassada Pier near Phuket Town, not at the airport, and the airport road is a second transfer. For Phuket town or beach hotels, you have more room to choose ferry or speedboat. For flights, first practical boat, clear pier transfer and a conservative road buffer are the whole game.",
    quickFacts: [
      // src: Andaman Wave Master Phi Phi-Phuket ferry timetable, checked 2026-07.
      {
        title: "Operator ferry",
        text: "Andaman Wave Master lists Phi Phi Tonsai Pier to Phuket Rassada Pier ferries at 11:00-13:00 and 14:30-16:30, operating daily.",
      },
      // src: Andaman Wave Master Phi Phi-Phuket ferry timetable, checked 2026-07.
      {
        title: "Laemtong note",
        text: "Andaman Wave Master lists Laemtong to Phuket trips at 10:00-13:00 and 13:30-16:30, and asks Laemtong return passengers to confirm with hotel reception at least 1 day before.",
      },
      // src: 12Go Koh Phi Phi-Phuket facts + schedule, checked 2026-07.
      {
        title: "Live partner range",
        text: "12Go facts list earliest departure 8:00 AM, latest 4:30 PM and 38 km distance for Koh Phi Phi to Phuket, with ferry, van, bus and taxi categories shown.",
      },
    ],
    tips: [
      // src: Andaman Wave Master Phi Phi-Phuket ferry timetable, checked 2026-07.
      "If you have a Phuket Airport flight, the 11:00 ferry arrival at Rassada is already only the sea leg. Add baggage, pier exit and the road to the airport.",
      // src: 12Go Koh Phi Phi-Phuket schedule, checked 2026-07.
      "For earlier Phuket arrivals, compare live speedboat listings, but treat rough sea conditions seriously. The fastest ticket is not always the calmest ticket.",
      // src: Andaman Wave Master Phi Phi-Phuket ferry timetable, checked 2026-07.
      "If staying at Laemtong, confirm the return with your hotel the day before as the operator instructs. You may need a shuttle boat to the main departure.",
      // src: routePages.ts + 12Go Koh Phi Phi-Phuket, checked 2026-07.
      "Check where your ticket ends: Rassada Pier, Phuket hotel transfer, Phuket Town, or airport add-on. These are different products.",
      "For afternoon flights, take the first practical morning boat and pre-arrange the Rassada-to-airport leg. For morning flights, leave Phi Phi the previous day.",
      "At Tonsai, arrive early and keep luggage manageable. Pier crowds make last-minute check-in unpleasant.",
      "Do not count on a beach-area hotel shuttle unless the ticket clearly includes it. Phuket is large enough for a wrong assumption to cost an hour.",
    ],
    warnings: [
      // src: Andaman Wave Master Phi Phi-Phuket ferry timetable, checked 2026-07.
      "The checked standard ferry from Tonsai reaches Rassada at 13:00 or 16:30. Those arrivals are not airport arrival times.",
      // src: 12Go Koh Phi Phi-Phuket facts, checked 2026-07.
      "12Go lists departures only through the afternoon on the checked page. Missing the last practical boat usually means another night on Phi Phi.",
      "Speedboats are more exposed to sea conditions than larger ferries. If the sea is rough, protect your flight with time, not optimism.",
    ],
    faqs: [
      {
        question: "Which pier do I arrive at in Phuket?",
        answer:
          // src: Andaman Wave Master Phi Phi-Phuket ferry timetable, checked 2026-07.
          "The checked Andaman Wave Master ferry runs from Phi Phi Tonsai Pier to Phuket Rassada Pier.",
      },
      {
        question: "What is the first standard ferry from Phi Phi to Phuket?",
        answer:
          // src: Andaman Wave Master Phi Phi-Phuket ferry timetable, checked 2026-07.
          "Andaman Wave Master lists the first Tonsai to Rassada standard ferry at 11:00-13:00. Live partner speedboat listings may depart earlier, so check the travel date.",
      },
      {
        question: "Can I catch a Phuket Airport flight the same day?",
        answer:
          "For afternoon or evening flights, yes with the first practical boat and a clear Rassada-to-airport transfer. For morning flights, leave Phi Phi the previous day.",
      },
      {
        question: "Does the ferry go to Phuket Airport?",
        answer:
          "No. The ferry arrives at Rassada Pier. You need a separate or included land transfer to Phuket Airport, depending on the ticket.",
      },
      {
        question: "Should I choose ferry or speedboat?",
        answer:
          "Ferry is steadier with bags; speedboat can arrive earlier but is more sensitive to sea conditions. For flights, choose the option that gives the best buffer and clearest onward transfer.",
      },
    ],
  },
};
