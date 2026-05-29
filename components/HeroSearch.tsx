import Image from "next/image";
import {
  ArrowDownUp,
  ArrowRight,
  ChevronDown,
  Clock3,
  Landmark,
  MapPin,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

const fromOptions = [
  { value: "bkk", label: "Suvarnabhumi Airport (BKK)", group: "Airports" },
  { value: "dmk", label: "Don Mueang Airport (DMK)", group: "Airports" },
  {
    value: "surat-thani-airport",
    label: "Surat Thani Airport",
    group: "Airports",
  },
  { value: "phuket-airport", label: "Phuket Airport", group: "Airports" },
  { value: "krabi-airport", label: "Krabi Airport", group: "Airports" },
  { value: "bangkok", label: "Bangkok City", group: "Cities" },
  { value: "chiang-mai", label: "Chiang Mai", group: "Cities" },
  { value: "pattaya", label: "Pattaya", group: "Cities" },
  { value: "hua-hin", label: "Hua Hin", group: "Cities" },
  { value: "patong", label: "Patong Beach", group: "Beaches" },
  { value: "phuket", label: "Phuket", group: "Beaches" },
  { value: "koh-samui", label: "Koh Samui", group: "Islands" },
  { value: "koh-phangan", label: "Koh Phangan", group: "Islands" },
  { value: "koh-phi-phi", label: "Koh Phi Phi", group: "Islands" },
  { value: "koh-chang", label: "Koh Chang", group: "Islands" },
  { value: "krabi", label: "Krabi", group: "Other" },
  { value: "ao-nang", label: "Ao Nang", group: "Other" },
];

const toOptions = [
  { value: "pattaya", label: "Pattaya", group: "Cities" },
  { value: "hua-hin", label: "Hua Hin", group: "Cities" },
  { value: "bangkok", label: "Bangkok City", group: "Cities" },
  { value: "koh-chang", label: "Koh Chang", group: "Islands" },
  { value: "koh-samui", label: "Koh Samui", group: "Islands" },
  { value: "koh-phangan", label: "Koh Phangan", group: "Islands" },
  { value: "koh-phi-phi", label: "Koh Phi Phi", group: "Islands" },
  { value: "patong", label: "Patong Beach", group: "Beaches" },
  { value: "kata-karon", label: "Kata / Karon", group: "Beaches" },
  { value: "ao-nang", label: "Ao Nang", group: "Beaches" },
  { value: "phuket", label: "Phuket", group: "Other" },
  { value: "krabi", label: "Krabi", group: "Other" },
  { value: "bkk", label: "Suvarnabhumi Airport (BKK)", group: "Airports" },
  { value: "dmk", label: "Don Mueang Airport (DMK)", group: "Airports" },
  { value: "krabi-airport", label: "Krabi Airport", group: "Airports" },
  { value: "phuket-airport", label: "Phuket Airport", group: "Airports" },
  {
    value: "surat-thani-airport",
    label: "Surat Thani Airport",
    group: "Airports",
  },
  { value: "chiang-mai", label: "Chiang Mai", group: "Northern Thailand" },
];

const arrivalTimeOptions = [
  { value: "now", label: "Arriving now" },
  { value: "morning", label: "Before 14:00" },
  { value: "afternoon", label: "14:00-20:00" },
  { value: "late", label: "After 20:00" },
];

const travelerOptions = [
  { value: "1", label: "1 adult" },
  { value: "2", label: "2 adults" },
  { value: "3", label: "3 adults" },
  { value: "4", label: "4 adults" },
  { value: "5", label: "5+ adults" },
];

const routeDestinationsByFrom = {
  "ao-nang": ["krabi-airport"],
  bangkok: ["hua-hin", "chiang-mai"],
  bkk: ["pattaya", "hua-hin", "koh-chang"],
  "chiang-mai": ["bangkok"],
  dmk: ["pattaya", "hua-hin"],
  "hua-hin": ["bangkok"],
  "koh-chang": ["bangkok", "bkk"],
  "koh-phangan": ["surat-thani-airport"],
  "koh-phi-phi": ["krabi", "phuket"],
  "koh-samui": ["surat-thani-airport"],
  "krabi-airport": ["ao-nang"],
  krabi: ["koh-phi-phi"],
  pattaya: ["bkk", "dmk"],
  patong: ["phuket-airport"],
  "phuket-airport": ["patong", "kata-karon"],
  phuket: ["koh-phi-phi"],
  "surat-thani-airport": ["koh-samui", "koh-phangan"],
} satisfies Record<string, string[]>;

const selectGroups = [
  "Airports",
  "Cities",
  "Islands",
  "Beaches",
  "Northern Thailand",
  "Other",
];

function renderGroupedOptions(
  options: Array<{ value: string; label: string; group: string }>,
) {
  return selectGroups.map((group) => {
    const groupOptions = options.filter((option) => option.group === group);

    if (groupOptions.length === 0) return null;

    return (
      <optgroup key={group} label={group}>
        {groupOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </optgroup>
    );
  });
}

function HeroSelect({
  id,
  name,
  label,
  defaultValue,
  icon,
  children,
  className = "",
  selectClassName = "",
}: {
  id: string;
  name: string;
  label: string;
  defaultValue: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  selectClassName?: string;
}) {
  return (
    <label
      className={`relative block min-h-[52px] rounded-[18px] border border-[#e7e2d8] px-4 py-2 ${className}`}
    >
      <span className="text-[12px] font-semibold text-[#667085]">{label}</span>

      <div className="mt-1 flex items-center gap-2">
        {icon}
        <select
          id={id}
          name={name}
          defaultValue={defaultValue}
          aria-label={label}
          className={`min-w-0 flex-1 appearance-none bg-transparent pr-5 text-[14px] font-semibold leading-snug text-[#10201d] outline-none ${selectClassName}`}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute bottom-3.5 right-3 h-4 w-4 text-[#667085]" />
      </div>
    </label>
  );
}

export function HeroSearch() {
  const routeScript = JSON.stringify(routeDestinationsByFrom);

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
            quality={60}
            sizes="390px"
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
                  aria-label="Current language: English"
                  className="flex h-9 cursor-default items-center rounded-full bg-white/85 px-3.5 text-[11px] font-extrabold text-[#10201d] shadow-md backdrop-blur-sm"
                >
                  EN
                </button>
              </div>
            </div>

            <div className="mt-4 max-w-[215px]">
              <h1 className="text-[26px] font-bold leading-[1.02] tracking-normal text-[#143f3a]">
                Land calmly in Thailand
              </h1>

              <p className="mt-2 text-[12px] font-medium leading-[18px] text-[#364152]">
                Tell us where you land. We show the safest option, a smart
                budget backup and what to avoid.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-20 px-5">
          <form
            id="home-transfer-search"
            action="/transfer-search"
            method="get"
            className="rounded-[22px] border border-[#e7e2d8] bg-white p-1.5 shadow-lg shadow-black/10"
          >
            <div className="grid grid-cols-[1fr_42px] gap-2">
              <div className="space-y-2">
                <HeroSelect
                  id="home-route-from"
                  name="from"
                  label="From"
                  defaultValue="bkk"
                  icon={<Plane className="h-4 w-4 text-[#0c5a4d]" />}
                >
                  {renderGroupedOptions(fromOptions)}
                </HeroSelect>

                <HeroSelect
                  id="home-route-to"
                  name="to"
                  label="To"
                  defaultValue="pattaya"
                  icon={<MapPin className="h-4 w-4 text-[#0c5a4d]" />}
                >
                  {renderGroupedOptions(toOptions)}
                </HeroSelect>
              </div>

              <div className="flex items-start justify-center pt-[28px]">
                <button
                  id="home-route-swap"
                  type="button"
                  aria-label="Swap route"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] bg-white shadow-md"
                >
                  <ArrowDownUp className="h-5 w-5 text-[#0c5a4d] stroke-[2.2]" />
                </button>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
              <HeroSelect
                id="home-arrival-time"
                name="arrival_time"
                label="Arrival time"
                defaultValue="late"
                icon={<Clock3 className="h-4 w-4 text-[#0c5a4d]" />}
              >
                {arrivalTimeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </HeroSelect>

              <HeroSelect
                id="home-travelers"
                name="passengers"
                label="Travelers"
                defaultValue="2"
                className="w-[122px] bg-[#fbfaf7] px-3"
                selectClassName="text-[12px] font-extrabold"
                icon={<Users className="h-3.5 w-3.5 text-[#0c5a4d]" />}
              >
                {travelerOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </HeroSelect>
            </div>

            <button
              type="submit"
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

          <details
            id="just-landed"
            className="mt-2 rounded-[18px] border border-[#e7e2d8] bg-white p-2 shadow-sm"
          >
            <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-3 rounded-2xl bg-[#10201d] px-3 py-2 text-left text-white [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-2 text-sm font-extrabold">
                <Plane className="h-4 w-4 text-[#f4c86a]" />
                I just landed
              </span>
              <span className="text-[11px] font-semibold text-white/70">
                Open quick advice
              </span>
            </summary>

            <form action="/transfer-search" method="get" className="mt-3 grid gap-3">
              <div className="grid grid-cols-2 gap-2">
                <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#667085]">
                    Airport
                  </span>
                  <select
                    name="from"
                    defaultValue="bkk"
                    className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                  >
                    <option value="bkk">BKK</option>
                    <option value="dmk">DMK</option>
                    <option value="phuket-airport">Phuket</option>
                    <option value="krabi-airport">Krabi</option>
                    <option value="surat-thani-airport">Surat Thani</option>
                    <option value="chiang-mai">Chiang Mai</option>
                  </select>
                </label>

                <label className="rounded-2xl border border-[#e7e2d8] px-3 py-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#667085]">
                    Going to
                  </span>
                  <select
                    name="to"
                    defaultValue="pattaya"
                    className="mt-1 w-full bg-transparent text-sm font-extrabold text-[#10201d] outline-none"
                  >
                    <option value="pattaya">Pattaya</option>
                    <option value="hua-hin">Hua Hin</option>
                    <option value="patong">Patong</option>
                    <option value="ao-nang">Ao Nang</option>
                    <option value="koh-samui">Koh Samui</option>
                    <option value="koh-phangan">Koh Phangan</option>
                  </select>
                </label>
              </div>

              <input type="hidden" name="arrival_time" value="now" />
              <input type="hidden" name="passengers" value="2" />

              <div className="rounded-2xl bg-[#f8f4ec] p-3">
                <div className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0c5a4d]" />
                  <p className="text-sm font-extrabold leading-5 text-[#10201d]">
                    Use official counters, pre-booked meeting points or partner
                    ticket instructions. Avoid random drivers inside the
                    terminal.
                  </p>
                </div>
              </div>

              <button className="flex min-h-12 items-center justify-center rounded-2xl bg-[#0c5a4d] px-4 py-3 text-sm font-extrabold text-white">
                Open safest route options
              </button>
            </form>
          </details>
        </div>
      </div>

      <script
        id="home-transfer-search-script"
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const routes = ${routeScript};
              const from = document.getElementById("home-route-from");
              const to = document.getElementById("home-route-to");
              const swap = document.getElementById("home-route-swap");
              const form = document.getElementById("home-transfer-search");

              if (!from || !to || !swap || !form) return;

              const updateDestinations = () => {
                const allowed = routes[from.value] || [];
                let selectedStillAllowed = allowed.includes(to.value);

                for (const option of to.options) {
                  const isAllowed = allowed.includes(option.value);
                  option.disabled = !isAllowed;
                  option.hidden = !isAllowed;
                }

                if (!selectedStillAllowed && allowed.length > 0) {
                  to.value = allowed[0];
                }
              };

              from.addEventListener("change", updateDestinations);
              swap.addEventListener("click", () => {
                const previousFrom = from.value;
                const previousTo = to.value;

                if (!routes[previousTo]?.includes(previousFrom)) return;

                from.value = previousTo;
                updateDestinations();
                to.value = previousFrom;
              });
              form.addEventListener("submit", () => {
                if (window.dataLayer) {
                  window.dataLayer.push({
                    event: "route_search_started",
                    from: from.value,
                    to: to.value,
                    pax: document.getElementById("home-travelers")?.value,
                    arrival_time: document.getElementById("home-arrival-time")?.value,
                    language: "en"
                  });
                }
              });
              updateDestinations();
            })();
          `,
        }}
      />
    </section>
  );
}
