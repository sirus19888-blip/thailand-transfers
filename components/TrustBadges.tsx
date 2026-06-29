import { ShieldCheck } from "lucide-react";
import { routePricesCheckedOn } from "@/data/routePrices";

function formatCheckedMonth(value: string) {
  const [year, month] = value.split("-");

  if (!year || !month) {
    return value;
  }

  return `${month}/${year}`;
}

const badges = [
  {
    title: "Lived in Bangkok 2 years",
    description: "First-hand local experience",
  },
  {
    title: "Independent guide",
    description: "No tickets sold here · final price on 12Go",
  },
  {
    title: "Sources & prices checked",
    description: `Cited sources, last-checked ${formatCheckedMonth(
      routePricesCheckedOn,
    )}`,
  },
];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="rounded-[20px] border border-[#e7e2d8] bg-white p-4 shadow-sm"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d] shadow-sm">
            <ShieldCheck className="h-4 w-4" />
          </div>

          <p className="text-sm font-extrabold text-[#10201d]">
            {badge.title}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {badge.description}
          </p>
        </div>
      ))}
    </div>
  );
}
