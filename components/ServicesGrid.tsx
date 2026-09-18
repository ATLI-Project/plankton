import Link from "next/link";

const services = [
  { title: "Corporate Strategy", href: "/services#strategy", body: "Corporate and business-unit strategy, growth, and positioning." },
  { title: "Environment, Social & Governance", href: "/services#esg", body: "ESG strategy, disclosure, climate planning, and governance." },
  { title: "Business Transformation", href: "/services#transformation", body: "Programme design, process re-engineering, and operating model change." },
  { title: "Organisation & Performance", href: "/services#organisation", body: "Organisation design, incentives, leadership, and capacity building." },
  { title: "M&A Due Diligence", href: "/services#ma", body: "Buy-side and sell-side diligence and transaction support." },
  { title: "Financial Management", href: "/services#financial", body: "Financial advisory, planning, reporting, and capital support." },
  { title: "Risk Management", href: "/services#risk", body: "Enterprise risk frameworks, governance, and board reporting." },
  { title: "Financial Sector Research", href: "/services#research", body: "Market, sector, and competitor intelligence for decisions." },
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
          Our specialties.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Link key={s.title} href={s.href} className="card no-underline group block">
            <div className="flex items-start justify-between">
              <div className="h-9 w-9 rounded-md bg-navy flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
              <span className="text-navy/40 group-hover:text-accent transition text-lg">→</span>
            </div>
            <h3 className="mt-6 font-serif text-xl text-navy">{s.title}</h3>
            <p className="mt-3 text-ink/70 text-sm leading-relaxed">{s.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
