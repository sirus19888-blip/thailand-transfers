import Link from "next/link";
import { Heart, Landmark } from "lucide-react";
import { Container } from "./Container";

const navigation = [
  {
    name: "Airport Transfers",
    href: "/routes#airport-transfers",
  },
  {
    name: "City & Island",
    href: "/routes#city-island-routes",
  },
  {
    name: "Popular Routes",
    href: "/#popular-routes",
  },
  {
    name: "Guides",
    href: "/guides",
  },
  {
    name: "About Us",
    href: "/#about-us",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-[#e7e2d8] bg-white/95 backdrop-blur lg:block">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f0df] text-[#c99a2e]">
              <Landmark className="h-6 w-6" />
            </div>

            <div className="leading-tight">
              <p className="text-[13px] font-extrabold uppercase tracking-[0.07em] text-[#10201d]">
                Thailand Transfer Guide
              </p>
              <div className="flex items-center gap-2">
                <div className="h-px w-6 bg-[#c99a2e]" />
                <p className="text-[9px] font-bold uppercase tracking-[0.11em] text-[#10201d]">
                  Independent transfer advice
                </p>
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-8 text-[14px] font-semibold text-[#263b4a]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 transition hover:text-[#0c5a4d]"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 text-[14px] font-semibold text-[#263b4a]">
            <Link
              href="/routes"
              className="flex items-center gap-2 transition hover:text-[#0c5a4d]"
            >
              <Heart className="h-4 w-4" />
              <span>Routes</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
