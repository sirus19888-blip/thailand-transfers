type AffiliateDisclosureProps = {
  className?: string;
};

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-5 text-slate-500 ${className}`}>
      Thailand Transfers is an independent travel comparison guide, not a
      transport operator or ticket seller. Some links are affiliate links; we
      may earn a commission at no extra cost to you. Booking, payment and
      support are handled by partner sites or operators.
    </p>
  );
}
