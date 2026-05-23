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
    label: "Bookings",
    href: "#",
    active: false,
    icon: CalendarDays,
  },
  {
    label: "Guides",
    href: "/routes/bangkok-airport-to-pattaya/details",
    active: false,
    icon: BookOpen,
  },
  {
    label: "Profile",
    href: "#",
    active: false,
    icon: User,
  },
];

export function MobileBottomNav() {
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
                item.active ? "text-[#0c5a4d]" : "text-[#7b8597]"
              }`}
            >
              <Icon
                className={`h-[22px] w-[22px] ${
                  item.active ? "stroke-[2.3]" : "stroke-[2]"
                }`}
              />
              <span className={item.active ? "font-semibold" : ""}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
