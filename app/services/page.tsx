import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const practices = [
  {
    id: "financial-advisory",
    number: "01",
    title: "Financial Advisory",
    when: "You need to raise capital, finance a project, buy or sell a business, restructure the balance sheet or test a major financial decision.",
    groups: [
      {
        heading: "Corporate finance",
        items: [
          "Debt and equity capital raising, including private placements",
          "Financial modelling, business planning and capital structure advice",
          "Balance sheet restructuring and recapitalisation",
          "Structured, trade and receivables finance",
        ],
      },
      {
        heading: "Mergers & acquisitions",
        items: [
          "Buy-side and sell-side advisory",
          "Due diligence, managed as one integrated workstream",
          "Target screening, deal structuring and negotiation support",
          "Regulatory approvals and post-deal integration",
        ],
      },
      {
        heading: "Infrastructure & project finance",
        items: [
          "Project structuring, financial modelling and bankability reviews",
          "Public-private partnerships and transaction advisory for government and state-owned enterprises",
          "Engagement with commercial lenders, DFIs and export credit agencies",
          "Energy, power, transport and social infrastructure",
        ],
      },
      {
        heading: "Valuation & investment advisory",
        items: [
          "Independent business, asset and share valuations for boards, shareholders and other stakeholders",
          "Investment research and portfolio review",
        ],
      },
    ],
  },
  {
    id: "corporate-strategy",
    number: "02",
    title: "Corporate Strategy",
    when: "You are setting direction for the next phase and need a plan the board will back.",
    groups: [
      {
        heading: "",
        items: [
          "Corporate and business-unit strategy",
          "Growth and market entry",
          "Market and sector studies, and peer benchmarking",
          "Board strategy sessions",
          "Performance targets and KPIs",
        ],
      },
    ],
  },
  {
    id: "esg",
    number: "03",
    title: "Environment, Social & Governance",
    when: "Lenders, investors or regulators expect a credible ESG position and you need to build one.",
    groups: [
      {
        heading: "",
        items: [
          "Materiality assessment and ESG strategy",
          "Sustainability reporting to IFRS S1/S2 and GRI",
          "Environmental and social management systems",
          "Board ESG oversight and training",
        ],
      },
    ],
  },
  {
    id: "business-transformation",
    number: "04",
    title: "Business Transformation",
    when: "The business needs to run differently, and the change needs discipline to deliver.",
    groups: [
      {
        heading: "",
        items: [
          "Transformation and turnaround programmes",
          "Business process re-engineering",
          "Operating model redesign",
          "Programme management and reporting",
        ],
      },
    ],
  },
  {
    id: "organisation-performance",
    number: "05",
    title: "Organisation & Performance",
    when: "Your structure, people or governance are not keeping pace with the strategy.",
    groups: [
      {
        heading: "",
        items: [
          "Organisation design",
          "Performance management and incentives",
          "Board and governance effectiveness",
          "Training and capacity building",
        ],
      },
    ],
  },
  {
    id: "risk-management",
    number: "06",
    title: "Risk Management",
    when: "Your board needs to see the risks that matter and act on them.",
    groups: [
      {
        heading: "",
        items: [
          "Enterprise risk management frameworks",
          "Credit, market, liquidity and operational risk",
          "Risk appetite and board risk reporting",
          "Regulatory compliance reviews",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Our services"
        dek="Financial advisory sits at the centre of our work, supported by five management consulting practices. Most mandates draw on more than one."
      />
      <section className="container-wide py-16 space-y-16">
        {practices.map((p) => (
          <div key={p.id} id={p.id} className="scroll-mt-28 border-b border-line pb-16 last:border-0 last:pb-0">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <div className="text-accent font-serif text-5xl">{p.number}</div>
                <h2 className="mt-4 font-serif text-3xl text-navy tracking-tightish">{p.title}</h2>
                <p className="mt-4 text-sm text-ink/70 leading-relaxed">
                  <span className="text-navy font-medium">When to call us.</span> {p.when}
                </p>
              </div>
              <div className="md:col-span-8">
                {p.groups.length === 1 && !p.groups[0].heading ? (
                  <div className="card">
                    <ul className="space-y-2 text-sm text-ink/80">
                      {p.groups[0].items.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="text-accent">—</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {p.groups.map((g) => (
                      <div key={g.heading} className="card">
                        <div className="eyebrow">{g.heading}</div>
                        <ul className="mt-4 space-y-2 text-sm text-ink/80">
                          {g.items.map((x) => (
                            <li key={x} className="flex gap-2">
                              <span className="text-accent">—</span>
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-cream border-y border-line">
        <div className="container-wide py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-serif text-2xl md:text-3xl text-navy max-w-2xl">
            Not sure which service fits? Send us a note.
          </p>
          <a href="/contact" className="btn-primary self-start no-underline">Contact us</a>
        </div>
      </section>
    </>
  );
}
