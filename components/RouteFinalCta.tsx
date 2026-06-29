import { mainRoute } from "@/data/routes";
import { affiliateMainCta } from "@/data/ctaCopy";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { Container } from "./Container";

export function RouteFinalCta() {
  return (
    <section className="bg-[#064e45] py-16 text-white lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f0c96a]">
              Ready to compare?
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Check final partner prices before you land
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
              Compare buses, taxis and vans from Bangkok Airport to Pattaya.
              Booking is completed through our trusted travel partner.
            </p>
          </div>

          <a
            href={mainRoute.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#064e45] shadow-sm transition hover:bg-[#f8f4ec]"
          >
            {affiliateMainCta}
          </a>
        </div>
        <AffiliateDisclosure className="mt-4 text-white/70" />
      </Container>
    </section>
  );
}
