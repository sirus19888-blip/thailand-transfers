import { Container } from "./Container";

const summaryItems = [
  {
    title: "Cheapest option",
    value: "Airport Bus",
    description: "Best for solo travelers and daytime arrivals.",
  },
  {
    title: "Most comfortable",
    value: "Private Taxi",
    description: "Best after a long flight or with luggage.",
  },
  {
    title: "Good middle option",
    value: "Shared Van",
    description: "Useful for small groups and hotel areas.",
  },
];

export function RouteSummary() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <div className="grid gap-4 lg:grid-cols-3">
          {summaryItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[#e7e2d8] bg-[#fbfaf7] p-5 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c99a2e]">
                {item.title}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#10201d]">
                {item.value}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
