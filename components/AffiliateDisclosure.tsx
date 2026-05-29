type AffiliateDisclosureProps = {
  className?: string;
};

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-5 text-slate-500 ${className}`}>
      Independent guide. We may earn a commission from partner links. Final
      booking is handled by partner sites.
    </p>
  );
}
