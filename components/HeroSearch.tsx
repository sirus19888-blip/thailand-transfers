"use client";

import {
  type FormEvent,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowDownUp,
  ArrowRight,
  ChevronDown,
  Clock3,
  Landmark,
  MapPin,
  Plane,
  Users,
} from "lucide-react";
import { Container } from "./Container";
import { JustLandedMode } from "./JustLandedMode";
import { supportedLanguages } from "@/data/i18n";

const hasMultipleLanguages = supportedLanguages.length > 1;

type DataLayerWindow = Window & {
  dataLayer?: object[];
};

const mobileFromOptions = [
  { value: "bkk", label: "Suvarnabhumi Airport (BKK)" },
  { value: "dmk", label: "Don Mueang Airport (DMK)" },
  { value: "surat-thani-airport", label: "Surat Thani Airport" },
  { value: "phuket-airport", label: "Phuket Airport" },
  { value: "krabi-airport", label: "Krabi Airport" },
  { value: "bangkok", label: "Bangkok City" },
  { value: "chiang-mai", label: "Chiang Mai" },
  { value: "pattaya", label: "Pattaya" },
  { value: "hua-hin", label: "Hua Hin" },
  { value: "patong", label: "Patong Beach" },
  { value: "phuket", label: "Phuket" },
  { value: "koh-samui", label: "Koh Samui" },
  { value: "koh-phangan", label: "Koh Phangan" },
  { value: "koh-phi-phi", label: "Koh Phi Phi" },
  { value: "koh-chang", label: "Koh Chang" },
  { value: "krabi", label: "Krabi" },
  { value: "ao-nang", label: "Ao Nang" },
];

const mobileToOptions = [
  { value: "pattaya", label: "Pattaya" },
  { value: "hua-hin", label: "Hua Hin" },
  { value: "koh-chang", label: "Koh Chang" },
  { value: "patong", label: "Patong Beach" },
  { value: "kata-karon", label: "Kata / Karon" },
  { value: "ao-nang", label: "Ao Nang" },
  { value: "koh-samui", label: "Koh Samui" },
  { value: "koh-phangan", label: "Koh Phangan" },
  { value: "koh-phi-phi", label: "Koh Phi Phi" },
  { value: "phuket", label: "Phuket" },
  { value: "krabi", label: "Krabi" },
  { value: "bangkok", label: "Bangkok City" },
  { value: "bkk", label: "Suvarnabhumi Airport (BKK)" },
  { value: "dmk", label: "Don Mueang Airport (DMK)" },
  { value: "krabi-airport", label: "Krabi Airport" },
  { value: "phuket-airport", label: "Phuket Airport" },
  { value: "surat-thani-airport", label: "Surat Thani Airport" },
  { value: "chiang-mai", label: "Chiang Mai" },
];

const mobileRouteOptions = [...mobileFromOptions, ...mobileToOptions];

const mobileFromOptionGroups = [
  {
    label: "Airports",
    options: mobileFromOptions.slice(0, 5),
  },
  {
    label: "Cities",
    options: mobileFromOptions.slice(5, 9),
  },
  {
    label: "Beaches",
    options: mobileFromOptions.slice(9, 11),
  },
  {
    label: "Islands",
    options: mobileFromOptions.slice(11, 15),
  },
  {
    label: "Other",
    options: mobileFromOptions.slice(15),
  },
];

const mobileToOptionGroups = [
  {
    label: "Cities",
    options: [
      mobileToOptions.find((option) => option.value === "pattaya"),
      mobileToOptions.find((option) => option.value === "hua-hin"),
      mobileToOptions.find((option) => option.value === "bangkok"),
    ].filter(Boolean) as typeof mobileToOptions,
  },
  {
    label: "Islands",
    options: [
      mobileToOptions[2],
      mobileToOptions[6],
      mobileToOptions[7],
      mobileToOptions[8],
    ],
  },
  {
    label: "Beaches",
    options: mobileToOptions.slice(3, 6),
  },
  {
    label: "Other",
    options: mobileToOptions.slice(9, 11),
  },
  {
    label: "Airports",
    options: [
      mobileToOptions.find((option) => option.value === "bkk"),
      mobileToOptions.find((option) => option.value === "dmk"),
      mobileToOptions.find((option) => option.value === "krabi-airport"),
      mobileToOptions.find((option) => option.value === "phuket-airport"),
      mobileToOptions.find((option) => option.value === "surat-thani-airport"),
    ].filter(Boolean) as typeof mobileToOptions,
  },
  {
    label: "Northern Thailand",
    options: [
      mobileToOptions.find((option) => option.value === "chiang-mai"),
    ].filter(Boolean) as typeof mobileToOptions,
  },
];

const mobileRouteHrefs: Record<string, string> = {
  "bangkok-hua-hin": "/routes/bangkok-to-hua-hin",
  "bangkok-chiang-mai": "/routes/bangkok-to-chiang-mai",
  "bkk-hua-hin": "/routes/suvarnabhumi-airport-to-hua-hin",
  "bkk-koh-chang": "/routes/suvarnabhumi-airport-to-koh-chang",
  "bkk-pattaya": "/routes/bangkok-airport-to-pattaya",
  "chiang-mai-bangkok": "/routes/chiang-mai-to-bangkok",
  "dmk-hua-hin": "/routes/don-mueang-airport-to-hua-hin",
  "dmk-pattaya": "/routes/don-mueang-airport-to-pattaya",
  "hua-hin-bangkok": "/routes/hua-hin-to-bangkok",
  "koh-chang-bangkok": "/routes/koh-chang-to-bangkok",
  "koh-chang-bkk": "/routes/koh-chang-to-suvarnabhumi-airport",
  "koh-phangan-surat-thani-airport": "/routes/koh-phangan-to-surat-thani-airport",
  "koh-phi-phi-krabi": "/routes/koh-phi-phi-to-krabi",
  "koh-phi-phi-phuket": "/routes/koh-phi-phi-to-phuket",
  "koh-samui-surat-thani-airport": "/routes/koh-samui-to-surat-thani-airport",
  "ao-nang-krabi-airport": "/routes/ao-nang-to-krabi-airport",
  "krabi-airport-ao-nang": "/routes/krabi-airport-to-ao-nang",
  "krabi-koh-phi-phi": "/routes/krabi-to-koh-phi-phi",
  "pattaya-bkk": "/routes/pattaya-to-bangkok-airport",
  "pattaya-dmk": "/routes/pattaya-to-don-mueang-airport",
  "patong-phuket-airport": "/routes/patong-beach-to-phuket-airport",
  "phuket-airport-kata-karon": "/routes/phuket-airport-to-kata-karon",
  "phuket-airport-patong": "/routes/phuket-airport-to-patong-beach",
  "phuket-koh-phi-phi": "/routes/phuket-to-koh-phi-phi",
  "surat-thani-airport-koh-phangan": "/routes/surat-thani-airport-to-koh-phangan",
  "surat-thani-airport-koh-samui": "/routes/surat-thani-airport-to-koh-samui",
};

const mobileRouteDestinationsByFrom = Object.keys(mobileRouteHrefs).reduce<
  Record<string, string[]>
>((routesByFrom, routeKey) => {
  const fromValue = mobileRouteOptions.find((option) =>
    routeKey.startsWith(`${option.value}-`),
  )?.value;

  if (!fromValue) {
    return routesByFrom;
  }

  const toValue = routeKey.slice(fromValue.length + 1);

  return {
    ...routesByFrom,
    [fromValue]: [...(routesByFrom[fromValue] ?? []), toValue],
  };
}, {});

const mobilePassengerOptions = [
  { value: "1", label: "1 Adult" },
  { value: "2", label: "2 Adults" },
  { value: "3", label: "3 Adults" },
  { value: "4", label: "4 Adults" },
  { value: "5", label: "5+ Adults" },
];

const mobileArrivalTimeOptions = [
  { value: "now", label: "Arriving now" },
  { value: "morning", label: "Before 14:00" },
  { value: "afternoon", label: "14:00-20:00" },
  { value: "late", label: "After 20:00" },
];

const desktopAirportFromOptions = mobileFromOptions.slice(0, 5);
const desktopCityFromOptions = mobileFromOptions.slice(5);

function useDesktopMediaQuery() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  return isDesktop;
}

function getMobileDestinationOptions(fromValue: string) {
  const destinationValues = mobileRouteDestinationsByFrom[fromValue] ?? [];
  const destinationValueSet = new Set(destinationValues);

  return mobileToOptions.filter((option) =>
    destinationValueSet.has(option.value),
  );
}

function getMobileOptionsWithSelected(
  options: typeof mobileRouteOptions,
  selectedValue: string,
) {
  const selectedOption = mobileRouteOptions.find(
    (option) => option.value === selectedValue,
  );

  if (!selectedOption || options.some((option) => option.value === selectedValue)) {
    return options;
  }

  return [...options, selectedOption];
}

function buildRouteHrefWithParams(
  fromValue: string,
  toValue: string,
  arrivalTime: string,
  passengers: string,
) {
  const routeHref = mobileRouteHrefs[`${fromValue}-${toValue}`] ?? "/routes";
  const searchParams = new URLSearchParams();

  if (arrivalTime) {
    searchParams.set("arrival_time", arrivalTime);
  }

  if (passengers) {
    searchParams.set("passengers", passengers);
  }

  const routeSearch = searchParams.toString();

  return routeSearch ? `${routeHref}?${routeSearch}` : routeHref;
}

function renderMobileOptionGroups(
  groups: typeof mobileFromOptionGroups,
  selectOptions: typeof mobileRouteOptions,
) {
  const renderedValues = new Set<string>();
  const selectOptionValues = new Set(
    selectOptions.map((option) => option.value),
  );

  const groupedOptions = groups.flatMap((group) => {
    const groupOptions = group.options.filter((option) =>
      selectOptionValues.has(option.value),
    );

    if (groupOptions.length === 0) {
      return [];
    }

    return [
      <optgroup key={group.label} label={group.label}>
        {groupOptions.map((option) => {
          renderedValues.add(option.value);

          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </optgroup>,
    ];
  });

  const extraOptions = selectOptions.filter(
    (option) => !renderedValues.has(option.value),
  );

  if (extraOptions.length === 0) {
    return groupedOptions;
  }

  return [
    ...groupedOptions,
    <optgroup key="Selected" label="Selected">
      {extraOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </optgroup>,
  ];
}

function DesktopHero() {
  const [transferType, setTransferType] = useState<"airport" | "city">(
    "airport",
  );
  const [desktopFrom, setDesktopFrom] = useState("bkk");
  const [desktopTo, setDesktopTo] = useState("pattaya");
  const [desktopArrivalTime, setDesktopArrivalTime] = useState("late");
  const [desktopPassengers, setDesktopPassengers] = useState("2");
  const isDesktop = useDesktopMediaQuery();

  const isAirportTransfer = transferType === "airport";
  const desktopFromOptions = isAirportTransfer
    ? desktopAirportFromOptions
    : desktopCityFromOptions;
  const matchingDesktopToOptions = getMobileDestinationOptions(desktopFrom);
  const desktopToOptions = getMobileOptionsWithSelected(
    matchingDesktopToOptions.length > 0
      ? matchingDesktopToOptions
      : mobileToOptions,
    desktopTo,
  );
  const searchHref = buildRouteHrefWithParams(
    desktopFrom,
    desktopTo,
    desktopArrivalTime,
    desktopPassengers,
  );
  const updateDesktopFrom = (nextFrom: string) => {
    const nextDestinationOptions = getMobileDestinationOptions(nextFrom);

    setDesktopFrom(nextFrom);

    if (
      nextDestinationOptions.length > 0 &&
      !nextDestinationOptions.some((option) => option.value === desktopTo)
    ) {
      setDesktopTo(nextDestinationOptions[0].value);
    }
  };
  const updateDesktopTransferType = (nextTransferType: "airport" | "city") => {
    const nextFrom = nextTransferType === "airport" ? "bkk" : "bangkok";
    const nextDestinationOptions = getMobileDestinationOptions(nextFrom);

    setTransferType(nextTransferType);
    setDesktopFrom(nextFrom);
    setDesktopTo(nextDestinationOptions[0]?.value ?? "pattaya");
  };

  return (
    <section className="hidden overflow-hidden bg-[#fbfaf7] lg:block">
      <div className="relative min-h-[560px] border-b border-[#e7e2d8]">
        {isDesktop ? (
          <Image
            src="/assets/hero/hero-desktop.png"
            alt="Thailand airport transfer"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />

        <Container className="relative z-10">
          <div className="grid min-h-[560px] grid-cols-[0.9fr_1.1fr] items-center gap-10 py-7">
            <div className="max-w-[520px]">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#c99a2e]">
                Tourist-friendly transfer guide
              </p>

              <h1 className="mt-2 text-[58px] font-extrabold leading-[0.98] tracking-normal text-[#10201d]">
                Land calmly in Thailand
              </h1>

              <p className="mt-4 max-w-[470px] text-[17px] leading-8 text-[#30465a]">
                Tell us where you land. We show the safest option, a smart
                budget backup and what to avoid.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[520px] rounded-[28px] border border-white/70 bg-white/92 p-4 shadow-2xl shadow-black/15 backdrop-blur-xl">
                <div className="mb-4 grid grid-cols-2 rounded-2xl bg-[#f8f4ec] p-1">
                  <button
                    type="button"
                    onClick={() => updateDesktopTransferType("airport")}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm transition ${
                      isAirportTransfer
                        ? "bg-white font-extrabold text-[#0c5a4d] shadow-sm"
                        : "font-bold text-slate-500 hover:text-[#0c5a4d]"
                    }`}
                  >
                    <Plane className="h-4 w-4" />
                    Airport Transfer
                  </button>

                  <button
                    type="button"
                    onClick={() => updateDesktopTransferType("city")}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm transition ${
                      !isAirportTransfer
                        ? "bg-white font-extrabold text-[#0c5a4d] shadow-sm"
                        : "font-bold text-slate-500 hover:text-[#0c5a4d]"
                    }`}
                  >
                    <Landmark className="h-4 w-4" />
                    City Transfer
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                      From
                    </span>

                    <div className="mt-2 flex items-center gap-3">
                      {isAirportTransfer ? (
                        <Plane className="h-4 w-4 text-[#0c5a4d]" />
                      ) : (
                        <Landmark className="h-4 w-4 text-[#0c5a4d]" />
                      )}

                      <select
                        className="w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                        value={desktopFrom}
                        onChange={(event) =>
                          updateDesktopFrom(event.currentTarget.value)
                        }
                      >
                        {desktopFromOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>

                  <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                      To
                    </span>

                    <div className="mt-2 flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[#0c5a4d]" />

                      <select
                        className="w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                        value={desktopTo}
                        onChange={(event) =>
                          setDesktopTo(event.currentTarget.value)
                        }
                      >
                        {desktopToOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>

                  <div className="grid grid-cols-[1fr_auto] gap-3">
                    <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                        Arrival time
                      </span>

                      <div className="mt-2 flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-[#0c5a4d]" />
                        <select
                          className="w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                          value={desktopArrivalTime}
                          onChange={(event) =>
                            setDesktopArrivalTime(event.currentTarget.value)
                          }
                        >
                          {mobileArrivalTimeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>

                    <label className="block rounded-2xl border border-[#e7e2d8] bg-white px-4 py-3">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                        Travelers
                      </span>

                      <div className="mt-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#0c5a4d]" />
                        <select
                          className="w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                          value={desktopPassengers}
                          onChange={(event) =>
                            setDesktopPassengers(event.currentTarget.value)
                          }
                        >
                          {mobilePassengerOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>
                  </div>

                  <Link
                    href={searchHref}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0c5a4d] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-black/10 transition hover:bg-[#064e45]"
                  >
                    <span>Show safest options</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <p className="text-center text-[11px] font-medium text-slate-500">
                    Independent guide. We may earn a commission from partner
                    links. Final booking is handled by partner sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function MobileHero() {
  const router = useRouter();
  const mobileFromSelectRef = useRef<HTMLSelectElement>(null);
  const mobileToSelectRef = useRef<HTMLSelectElement>(null);
  const mobileArrivalTimeSelectRef = useRef<HTMLSelectElement>(null);
  const mobilePassengersSelectRef = useRef<HTMLSelectElement>(null);
  const [mobileFrom, setMobileFrom] = useState("bkk");
  const [mobileTo, setMobileTo] = useState("pattaya");
  const [mobileArrivalTime, setMobileArrivalTime] = useState("late");
  const [mobilePassengers, setMobilePassengers] = useState("2");
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const updateMobileFrom = (nextFrom: string) => {
    const nextDestinationOptions = getMobileDestinationOptions(nextFrom);

    setMobileFrom(nextFrom);

    if (
      nextDestinationOptions.length > 0 &&
      !nextDestinationOptions.some((option) => option.value === mobileTo)
    ) {
      setMobileTo(nextDestinationOptions[0].value);
    }
  };
  const selectedMobileFrom =
    mobileRouteOptions.find((option) => option.value === mobileFrom) ??
    mobileFromOptions[0];
  const selectedMobileTo =
    mobileRouteOptions.find((option) => option.value === mobileTo) ??
    mobileToOptions[0];
  const mobileFromSelectOptions = getMobileOptionsWithSelected(
    mobileFromOptions,
    mobileFrom,
  );
  const matchingMobileToOptions = getMobileDestinationOptions(mobileFrom);
  const mobileToSelectOptions = getMobileOptionsWithSelected(
    matchingMobileToOptions.length > 0
      ? matchingMobileToOptions
      : mobileToOptions,
    mobileTo,
  );
  const selectedMobilePassengers =
    mobilePassengerOptions.find((option) => option.value === mobilePassengers) ??
    mobilePassengerOptions[1];
  const selectedMobileArrivalTime =
    mobileArrivalTimeOptions.find(
      (option) => option.value === mobileArrivalTime,
    ) ?? mobileArrivalTimeOptions[3];
  const mobileRouteHref =
    mobileRouteHrefs[`${mobileFrom}-${mobileTo}`] ?? "/routes";
  const getMobileRouteHrefWithParams = () => {
    const submittedFrom = mobileFromSelectRef.current?.value ?? mobileFrom;
    const submittedTo = mobileToSelectRef.current?.value ?? mobileTo;
    const submittedArrivalTime =
      mobileArrivalTimeSelectRef.current?.value ?? mobileArrivalTime;
    const submittedPassengers =
      mobilePassengersSelectRef.current?.value ?? mobilePassengers;

    return buildRouteHrefWithParams(
      submittedFrom,
      submittedTo,
      submittedArrivalTime,
      submittedPassengers,
    );
  };
  const navigateMobileRoute = () => {
    const trackingWindow = window as DataLayerWindow;

    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event: "route_search_started",
      from: mobileFrom,
      to: mobileTo,
      pax: mobilePassengers,
      arrival_time: mobileArrivalTime,
      language: "en",
    });
    router.push(getMobileRouteHrefWithParams());
  };
  const handleMobileSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigateMobileRoute();
  };
  const handleMobileSubmitClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigateMobileRoute();
  };

  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] pb-3 lg:hidden">
      <div className="relative mx-auto max-w-md overflow-hidden bg-[#f6f1e8]">
        <div className="relative h-[330px] overflow-hidden">
          <Image
            src="/assets/hero/hero-mobile.png"
            alt="Thailand transfer hero"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-[#f6f1e8]/65" />

          <div className="relative z-10 px-5 pt-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d5ab47] shadow-md">
                  <Landmark className="h-5 w-5 text-white" />
                </div>

                <div className="leading-tight">
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-[#10201d]">
                    THAILAND TRANSFER GUIDE
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-[1.5px] w-6 rounded-full bg-[#d5ab47]" />
                    <p className="text-[9.5px] font-semibold text-[#364152]">
                      Independent transfer advice
                    </p>
                    <div className="h-[1.5px] w-6 rounded-full bg-[#d5ab47]" />
                  </div>
                </div>
              </div>

              <div className="relative mt-1">
                <button
                  type="button"
                  aria-controls={
                    hasMultipleLanguages ? "mobile-language-menu" : undefined
                  }
                  aria-expanded={
                    hasMultipleLanguages ? isMobileLanguageOpen : undefined
                  }
                  aria-label={
                    hasMultipleLanguages
                      ? "Choose language"
                      : "Current language: English"
                  }
                  onClick={() =>
                    hasMultipleLanguages
                      ? setIsMobileLanguageOpen((isOpen) => !isOpen)
                      : undefined
                  }
                  className={`flex h-9 items-center rounded-full bg-white/85 px-3.5 text-[11px] font-extrabold text-[#10201d] shadow-md backdrop-blur-sm ${
                    hasMultipleLanguages ? "" : "cursor-default"
                  }`}
                >
                  EN
                </button>

                {hasMultipleLanguages && isMobileLanguageOpen ? (
                  <div
                    id="mobile-language-menu"
                    className="absolute right-0 top-12 z-30 w-52 rounded-[20px] border border-[#e7e2d8] bg-white/95 p-2 shadow-xl shadow-black/10 backdrop-blur"
                  >
                    {supportedLanguages.map((language) => (
                      <div
                        key={language.code}
                        className="flex items-center justify-between gap-3 rounded-2xl px-3 py-2"
                      >
                        <div>
                          <p className="text-[12px] font-extrabold text-[#10201d]">
                            {language.code}
                          </p>
                          <p className="mt-0.5 text-[10px] font-semibold text-slate-500">
                            {language.label}
                          </p>
                        </div>

                        <span className="rounded-full bg-[#f8f4ec] px-2 py-1 text-[9px] font-extrabold text-[#c99a2e]">
                          {language.status}
                        </span>
                      </div>
                    ))}

                    {hasMultipleLanguages ? (
                      <p className="border-t border-[#e7e2d8] px-3 pt-2 text-[10px] leading-4 text-slate-500">
                        Safety warnings and affiliate disclosures are reviewed
                        before a language goes live.
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-4 max-w-[215px]">
              <div
                role="heading"
                aria-level={1}
                className="text-[26px] font-bold leading-[1.02] tracking-normal text-[#143f3a]"
              >
                Land calmly in Thailand
              </div>

              <p className="mt-2 text-[12px] font-medium leading-[18px] text-[#364152]">
                Tell us where you land. We show the safest option, a smart
                budget backup and what to avoid.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-20 px-5">
          <form
            action={mobileRouteHref}
            method="get"
            onSubmit={handleMobileSubmit}
            className="rounded-[22px] border border-[#e7e2d8] bg-white p-1.5 shadow-lg shadow-black/10"
          >
            <div className="grid grid-cols-[1fr_42px] gap-2">
              <div className="space-y-2">
                <label className="relative block min-h-[52px] rounded-[18px] border border-[#e7e2d8] px-4 py-2">
                  <select
                    aria-label="From"
                    ref={mobileFromSelectRef}
                    value={mobileFrom}
                    onInput={(event) =>
                      updateMobileFrom(event.currentTarget.value)
                    }
                    onChange={(event) =>
                      updateMobileFrom(event.currentTarget.value)
                    }
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                  >
                    {renderMobileOptionGroups(
                      mobileFromOptionGroups,
                      mobileFromSelectOptions,
                    )}
                  </select>

                  <span className="text-[12px] font-semibold text-[#667085]">
                    From
                  </span>

                  <div className="mt-1 flex items-center gap-3">
                    <Plane className="h-4 w-4 text-[#0c5a4d]" />

                    <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                      {selectedMobileFrom.label}
                    </span>

                    <ChevronDown className="h-4 w-4 text-[#667085]" />
                  </div>
                </label>

                <label className="relative block min-h-[52px] rounded-[18px] border border-[#e7e2d8] px-4 py-2">
                  <select
                    aria-label="To"
                    ref={mobileToSelectRef}
                    value={mobileTo}
                    onInput={(event) =>
                      setMobileTo(event.currentTarget.value)
                    }
                    onChange={(event) =>
                      setMobileTo(event.currentTarget.value)
                    }
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                  >
                    {renderMobileOptionGroups(
                      mobileToOptionGroups,
                      mobileToSelectOptions,
                    )}
                  </select>

                  <span className="text-[12px] font-semibold text-[#667085]">
                    To
                  </span>

                  <div className="mt-1 flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#0c5a4d]" />

                    <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                      {selectedMobileTo.label}
                    </span>

                    <ChevronDown className="h-4 w-4 text-[#667085]" />
                  </div>
                </label>
              </div>

              <div className="flex items-start justify-center pt-[28px]">
                <button
                  type="button"
                  aria-label="Swap route"
                  onClick={() => {
                    const reverseDestinationOptions =
                      getMobileDestinationOptions(mobileTo);
                    const hasReverseRoute = reverseDestinationOptions.some(
                      (option) => option.value === mobileFrom,
                    );

                    setMobileFrom(mobileTo);
                    setMobileTo(
                      hasReverseRoute
                        ? mobileFrom
                        : reverseDestinationOptions[0]?.value ?? mobileFrom,
                    );
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] bg-white shadow-md"
                >
                  <ArrowDownUp className="h-5 w-5 text-[#0c5a4d] stroke-[2.2]" />
                </button>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
              <label className="relative block min-h-[52px] rounded-[18px] border border-[#e7e2d8] px-4 py-2">
                <select
                  aria-label="Arrival time"
                  name="arrival_time"
                  ref={mobileArrivalTimeSelectRef}
                  value={mobileArrivalTime}
                  onInput={(event) =>
                    setMobileArrivalTime(event.currentTarget.value)
                  }
                  onChange={(event) =>
                    setMobileArrivalTime(event.currentTarget.value)
                  }
                  className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                >
                  {mobileArrivalTimeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <span className="text-[12px] font-semibold text-[#667085]">
                  Arrival time
                </span>

                <div className="mt-1 flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#0c5a4d]" />

                  <span className="flex-1 text-[14px] font-semibold leading-snug text-[#10201d]">
                    {selectedMobileArrivalTime.label}
                  </span>

                  <ChevronDown className="h-4 w-4 text-[#667085]" />
                </div>
              </label>

              <label className="relative block min-h-[52px] w-[122px] rounded-[18px] border border-[#e7e2d8] bg-[#fbfaf7] px-3 py-2">
                <select
                  aria-label="Travelers"
                  name="passengers"
                  ref={mobilePassengersSelectRef}
                  value={mobilePassengers}
                  onInput={(event) =>
                    setMobilePassengers(event.currentTarget.value)
                  }
                  onChange={(event) =>
                    setMobilePassengers(event.currentTarget.value)
                  }
                  className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                >
                  {mobilePassengerOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <span className="text-[12px] font-semibold text-[#667085]">
                  Travelers
                </span>

                <div className="mt-1 flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-[#0c5a4d]" />

                  <span className="flex-1 whitespace-nowrap text-[12px] font-extrabold text-[#10201d]">
                    {selectedMobilePassengers.label.toLowerCase()}
                  </span>

                  <ChevronDown className="h-3.5 w-3.5 text-[#667085]" />
                </div>
              </label>
            </div>

            <button
              type="submit"
              onClick={handleMobileSubmitClick}
              className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 rounded-[16px] bg-[#0c5a4d] px-5 py-2.5 text-[14px] font-extrabold text-white shadow-lg shadow-black/10"
            >
              <span>Show safest options</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-2 text-center text-[10.5px] font-medium leading-4 text-slate-500">
              Independent guide. We may earn a commission from partner links.
              Final booking is handled by partner sites.
            </p>

          </form>

          <JustLandedMode />
        </div>
      </div>
    </section>
  );
}

export function HeroSearch() {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  );
}
