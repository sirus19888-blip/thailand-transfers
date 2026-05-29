import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { legalLinks } from "@/data/legalPages";

const helpfulLinks = [
  { name: "Travel Guides", href: "#travel-tips" },
  { name: "Airport Guides", href: "#travel-tips" },
  { name: "Thailand Tips", href: "#travel-tips" },
  { name: "FAQ", href: "/routes/bangkok-airport-to-pattaya/details" },
];

const destinations = [
  { name: "Pattaya", href: "/routes/bangkok-airport-to-pattaya" },
  { name: "Phuket", href: "/routes/phuket-airport-to-patong-beach" },
  { name: "Chiang Mai", href: "/routes/bangkok-to-chiang-mai" },
  { name: "Koh Samui", href: "/routes/surat-thani-airport-to-koh-samui" },
];

export function Footer() {
  return (
    <footer id="about-us" className="hidden bg-[#064e45] text-white lg:block">
      <Container>
        <div className="grid gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr_1.1fr]">
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#d5ab47]">
              About us
            </p>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Thailand Transfer Guide is an independent travel comparison guide for
              travelers who want clear route information, pickup tips and
              booking options before they travel.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#d5ab47]">
              Helpful links
            </p>

            <div className="mt-4 grid gap-2">
              {helpfulLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#d5ab47]">
              Top destinations
            </p>

            <div className="mt-4 grid gap-2">
              {destinations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#d5ab47]">
              Important note
            </p>

            <div className="mt-4 grid gap-3 text-sm leading-6 text-white/75">
              <p>We do not operate buses, taxis, vans or ferries.</p>

              <p>
                Booking, availability, changes and customer support are handled
                by the travel partner or transport operator you choose.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-[24px] border border-white/10 bg-white/10 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d5ab47]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-extrabold text-white">
                    Compare before booking
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Use our guides to compare route options, then check final
                    prices, schedules and conditions on the partner booking
                    page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 py-5 text-xs text-white/60">
          <p>
            © 2026 Thailand Transfer Guide. Independent travel comparison website.
          </p>

          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
