const badges = [
  {
    title: "Popular routes",
    description: "Clear transfer options",
  },
  {
    title: "Partner booking",
    description: "Compare trusted partner links",
  },
  {
    title: "Arrival guide",
    description: "Know what to do after landing",
  },
];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="rounded-2xl border border-[#e7e2d8] bg-white p-4 shadow-sm"
        >
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f4ec] text-[#c99a2e]">
            ✓
          </div>

          <p className="text-sm font-bold text-[#10201d]">{badge.title}</p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {badge.description}
          </p>
        </div>
      ))}
    </div>
  );
}
