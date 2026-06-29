import { routePricesCheckedOn } from "@/data/routePrices";

type AffiliateDisclosureProps = {
  className?: string;
};

function formatCheckedMonth(value: string) {
  const [year, month] = value.split("-");

  if (!year || !month) {
    return value;
  }

  return `${month}/${year}`;
}

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-5 text-slate-500 ${className}`}>
      Independent guide · prices checked {formatCheckedMonth(routePricesCheckedOn)}
      {" "}· booking handled by 12Go, an established Asia travel booking
      platform. We may earn a commission at no extra cost; final price,
      schedule and support stay on the partner site.
    </p>
  );
}
