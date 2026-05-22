import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Container } from "./Container";

const helpfulLinks = [
  { name: "Travel Guides", href: "#travel-tips" },
  { name: "Airport Guides", href: "#travel-tips" },
  { name: "Thailand Tips", href: "#travel-tips" },
  { name: "FAQ", href: "/routes/bangkok-airport-to-pattaya/details" },
];

const destinations = [
  { name: "Pattaya", href: "/routes/bangkok-airport-to-pattaya" },
  { name: "Phuket", href: "/routes/bangkok-airport-to-pattaya" },
  { name: "Chiang Mai", href: "/routes/bangkok-airport-to-pattaya" },
  { name: "Koh Samui", href: "/routes/bangkok-airport-to-pattaya" },
];

export function Footer() {
  return (
    <footer className="hidden bg-[#064e45] text-white lg:block">
      <Container>
        <div className="grid gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr_1.1fr]">
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#d5ab47]">
              About us
            </p>

            <p className="mt-4 text-sm leading-6 text-white/75">
              We are building a simple Thailand transfer comparison guide for
              travelers who want clear routes, pickup points and trusted booking
              options before they land.
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
              Support
            </p>

            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#d5ab47]" />
                <span>support@thailandtransfers.co</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d5ab47]" />
                <span>+66 80 123 4567</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d5ab47]" />
                <span>Thailand · 8AM–8PM ICT</span>
              </div>

              <div className="mt-2 flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Facebook className="h-4 w-4" />
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Instagram className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[24px] border border-white/10 bg-white/10 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d5ab47]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-extrabold text-white">Safe & secure</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Your bookings are handled by trusted partners using secure
                    external booking pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 py-5 text-xs text-white/60">
          <p>© 2025 Thailand Transfers. All rights reserved.</p>

          <p>
            Some links may be affiliate links. We may earn a commission at no
            extra cost to you.
          </p>
        </div>
      </Container>
    </footer>
  );
}
