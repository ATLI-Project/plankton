import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const sectors = [
  {
    name: "Financial services",
    body: "Wealth, insurance, and B2B fintech. We know the regulators, the incumbents, and where the moats actually are.",
  },
  {
    name: "Software & AI infrastructure",
    body: "Vertical SaaS, developer tools, and applied AI companies past prototype.",
  },
  {
    name: "Climate & energy transition",
    body: "Hardware-adjacent software, grid-edge, and industrial decarbonisation.",
  },
  {
    name: "Healthcare services",
    body: "Provider groups, digital health, and payer-adjacent platforms.",
  },
  {
    name: "Consumer & marketplaces",
    body: "Categories where retention beats acquisition.",
  },
  {
    name: "Private capital",
    body: "Venture, growth, and lower mid-market private equity, on both sides of the deal.",
  },
];

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Focus areas"
        title="Where we do our best work."
        dek="Six sectors we know deeply. We turn down work outside of them."
      />
      <section className="container-wide pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((s) => (
          <div key={s.name} className="card">
            <div className="h-1 w-10 bg-teal rounded-full" />
            <h3 className="mt-5 font-serif text-2xl text-navy tracking-tightish">{s.name}</h3>
            <p className="mt-3 text-navy/70 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
