type AffiliateDisclosureProps = {
  className?: string;
};

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-5 text-slate-500 ${className}`}>
      Some links are affiliate links. We may earn a commission at no extra cost
      to you.
    </p>
  );
}
