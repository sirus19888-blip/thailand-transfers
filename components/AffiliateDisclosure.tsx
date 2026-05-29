type AffiliateDisclosureProps = {
  className?: string;
};

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-5 text-slate-500 ${className}`}>
      Paid partner link. We may earn a commission at no extra cost to you.
      Thailand Transfer Guide is an independent guide, not a transport operator or
      ticket seller. Final price, ticket rules and booking support are handled
      by partner sites or operators.
    </p>
  );
}
