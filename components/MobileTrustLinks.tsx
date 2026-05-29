import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { legalLinks } from "@/data/legalPages";

export function MobileTrustLinks() {
  return (
    <section className="bg-[#fbfaf7] px-5 pt-3 lg:hidden">
      <div className="mx-auto max-w-md rounded-[8px] border border-[#e6ddce] bg-white p-4 shadow-[0_16px_38px_rgba(21,37,31,0.08)]">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6f2] text-[#0c5a4d]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-extrabold text-[#10201d]">
              Independent guide, paid partner links
            </p>
            <p className="mt-1 text-xs leading-5 text-[#4b5d58]">
              We may earn a commission at no extra cost to you. Booking support
              stays with the partner/operator.
            </p>
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full bg-[#f8f4ec] px-3 py-2 text-[11px] font-extrabold text-[#0c5a4d]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
