import Link from "next/link";

const services = [
  {
    title: "Mergers & Acquisitions",
    body: "Buy-side and sell-side due diligence, valuation, deal structuring, and post-merger integration for acquirers, sellers, and boards.",
    href: "/services#ma",
  },
  {
    title: "Sustainability & ESG",
    body: "ESG strategy, IFRS S1/S2 and GRI disclosure, climate risk, and sustainable finance advisory for organisations meeting the new standard.",
    href: "/services#esg",
  },
  {
    title: "Corporate Strategy",
    body: "Growth, market entry, and operating model work for management teams planning the next five years without breaking the last five.",
    href: "/services#strategy",
  },
  {
    title: "Business Transformation",
    body: "Programme design, process re-engineering, and organisation performance improvement with the discipline to see change through.",
    href: "/services#transformation",
  },
  {
    title: "Financial Management",
    body: "Financial advisory, investment research, capital raising support, and banking performance review grounded in sector expertise.",
    href: "/services#financial",
  },
  {
    title: "Risk Management",
    body: "Enterprise risk frameworks, governance, and board reporting that change decisions rather than fill folders.",
    href: "/services#risk",
  },
];

export default function ServicesGrid() {
  return (
    <section className="container-wide py-24">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-accent" />
          <span className="eyebrow">What we do</span>
        </div>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy tracking-tightish max-w-3xl">
          Six practices, built around the decisions that matter.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link key={s.title} href={s.href} className="card no-underline group block">
            <div className="flex items-start justify-between">
              <div className="h-9 w-9 rounded-md bg-navy flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
              <span className="text-navy/40 group-hover:text-accent transition text-lg">→</span>
            </div>
            <h3 className="mt-6 font-serif text-2xl text-navy">{s.title}</h3>
            <p className="mt-3 text-ink/70 text-sm leading-relaxed">{s.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
