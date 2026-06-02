import { mainRoute } from "@/data/routes";

export function MobileStickyCta() {
  return (
    <div
      data-mobile-sticky-cta="true"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e7e2d8] bg-white/95 p-3 shadow-2xl backdrop-blur lg:hidden"
    >
      <a
        href={mainRoute.affiliateUrl}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="flex w-full items-center justify-center rounded-full bg-[#064e45] px-6 py-4 text-sm font-bold text-white shadow-sm"
      >
        Check final price on partner site
      </a>
    </div>
  );
}
