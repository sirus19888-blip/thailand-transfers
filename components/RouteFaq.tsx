import { Container } from "./Container";

const faqs = [
  {
    question: "What is the cheapest way from Bangkok Airport to Pattaya?",
    answer:
      "The airport bus is usually the cheapest option. It is best for daytime arrivals and travelers with simple luggage.",
  },
  {
    question: "What is the easiest option after a long flight?",
    answer:
      "A private taxi is usually the easiest option because it can take you directly to your hotel or apartment in Pattaya.",
  },
  {
    question: "Should I book before landing?",
    answer:
      "It is usually better to compare and book before landing, especially if you arrive late, travel with family or carry large luggage.",
  },
  {
    question: "Are prices fixed?",
    answer:
      "Prices can change depending on operator, time, route and availability. Always check the live price before booking.",
  },
];

export function RouteFaq() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c99a2e]">
            FAQ
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#10201d] sm:text-4xl">
            Questions about Bangkok Airport to Pattaya
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[2rem] border border-[#e7e2d8] bg-[#fbfaf7] p-5"
            >
              <h3 className="text-lg font-bold text-[#10201d]">
                {faq.question}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
