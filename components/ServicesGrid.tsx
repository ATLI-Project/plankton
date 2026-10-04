import Link from "next/link";

const services = [
  {
    title: "Financial Advisory",
    href: "/services#financial-advisory",
    body: "Corporate finance, M&A, infrastructure and project finance, and valuation, from the first financial model to financial close.",
  },
  {
    title: "Corporate Strategy",
    href: "/services#corporate-strategy",
    body: "Strategy, growth plans and market entry the board can stand behind.",
  },
  {
    title: "Environment, Social & Governance",
    href: "/services#esg",
    body: "ESG strategy, reporting and governance that lenders and regulators accept.",
  },
  {
    title: "Business Transformation",
    href: "/services#business-transformation",
    body: "Operating model change, process redesign and turnaround.",
  },
  {
    title: "Organisation & Performance",
    href: "/services#organisation-performance",
    body: "Structure, incentives, governance and capacity building.",
  },
  {
    title: "Risk Management",
    href: "/services#risk-management",
    body: "Risk frameworks and board reporting that change decisions.",
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
          Finance and strategy, from one seasoned professionals
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-ink/75 leading-relaxed">
          We work in two disciplines, and many clients use both: financial advisory to raise capital and complete transactions, and management consulting to build the organisation that delivers them. The work is organised in six practices.
        </p>
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
            <h3 className="mt-6 font-serif text-xl text-navy">{s.title}</h3>
            <p className="mt-3 text-ink/70 text-sm leading-relaxed">{s.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
