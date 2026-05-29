import Image from "next/image";
import { MonitorSmartphone, Smartphone } from "lucide-react";
import { siteName, siteUrl } from "@/app/site";

export function DesktopComingSoon() {
  const displayUrl = siteUrl.replace(/^https?:\/\//, "");

  return (
    <section
      aria-label="Desktop version coming soon"
      className="relative flex min-h-screen w-full overflow-hidden bg-[#f8f4ec] text-[#10201d]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-10 py-12">
        <div className="max-w-xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#dac9a5] bg-white/70 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0c5a4d] shadow-sm">
            <MonitorSmartphone className="h-4 w-4 text-[#c99a2e]" />
            Mobile version is live
          </div>

          <p className="text-[14px] font-extrabold uppercase tracking-[0.28em] text-[#c99a2e]">
            {siteName}
          </p>

          <div className="mt-5 text-[56px] font-black leading-[0.96] tracking-normal text-[#10201d]">
            Desktop version coming soon.
          </div>

          <p className="mt-6 max-w-lg text-[18px] leading-8 text-[#31433f]">
            Thailand Transfer Guide is currently optimized for mobile travelers.
            Open this page on your phone for the full route search, guides and
            booking links.
          </p>

          <div className="mt-10 flex max-w-xl items-center gap-5 rounded-[24px] border border-[#e2d6bf] bg-white/86 p-4 shadow-[0_18px_55px_rgba(21,37,31,0.12)] backdrop-blur">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-[20px] border border-[#e7ddc9] bg-white p-3">
              <Image
                src="/assets/branding/mobile-qr.svg"
                alt={`QR code for ${siteName} mobile site`}
                width={112}
                height={112}
                className="h-28 w-28"
              />
            </div>

            <div className="min-w-0">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#0c5a4d] text-white">
                <Smartphone className="h-5 w-5" />
              </div>
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#8b6b20]">
                Scan with your phone
              </p>
              <p className="mt-1 break-words text-[16px] font-extrabold text-[#10201d]">
                {displayUrl}
              </p>
              <p className="mt-2 text-[13px] leading-6 text-[#53635e]">
                The full route experience is available on mobile while the
                desktop version is being prepared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
