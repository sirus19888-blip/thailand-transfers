import Link from "next/link";
import { BookOpen, CalendarDays, House, User } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    active: true,
    icon: House,
  },
  {
    label: "Routes",
    href: "/routes",
    active: false,
    icon: CalendarDays,
  },
  {
    label: "Guides",
    href: "/guides",
    active: false,
    icon: BookOpen,
  },
  {
    label: "Extras",
    href: "/travel-extras/thailand-tourist-sim",
    active: false,
    icon: User,
  },
];

type MobileBottomNavProps = {
  activeLabel?: string;
};

export function MobileBottomNav({ activeLabel = "Home" }: MobileBottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e8e3d9] bg-white px-4 pb-2 pt-2 lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-0.5 text-[11px] font-medium ${
                item.label === activeLabel ? "text-[#0c5a4d]" : "text-[#7b8597]"
              }`}
            >
              <Icon
                className={`h-[22px] w-[22px] ${
                  item.label === activeLabel ? "stroke-[2.3]" : "stroke-[2]"
                }`}
              />
              <span className={item.label === activeLabel ? "font-semibold" : ""}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
