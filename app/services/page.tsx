import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

// Service descriptions draw only on the specialties named in the firm
// profile. They describe what the firm offers, not specific assignments.
const practices = [
  {
    id: "strategy",
    title: "Corporate Strategy",
    fit: "You are setting the direction for the next phase of the business and need a plan the board can stand behind.",
    do: [
      "Corporate and business-unit strategy development",
      "Growth, market entry, and positioning",
      "Strategic planning and board facilitation",
      "Performance frameworks and KPI design",
    ],
  },
  {
    id: "esg",
    title: "Environment, Social & Governance",
    fit: "You need a credible ESG strategy, disclosure framework, or transition plan that meets lender, regulator, and board expectations.",
    do: [
      "ESG strategy design and materiality assessment",
      "Sustainability reporting aligned to international standards",
      "Climate and transition planning",
      "ESG governance, policy, and board readiness",
    ],
  },
  {
    id: "transformation",
    title: "Business Transformation",
    fit: "A part of the business — or the whole business — needs to run differently, and the change programme needs discipline.",
    do: [
      "Transformation programme design and oversight",
      "Business process re-engineering",
      "Operating model redesign",
      "Change management and capability building",
    ],
  },
  {
    id: "organisation",
    title: "Organisation & Performance",
    fit: "The structure, incentives, or capabilities of the organisation are not keeping pace with the strategy.",
    do: [
      "Organisation design and structure",
      "Performance management and incentives",
      "Talent, leadership, and succession advisory",
      "Capacity building and skills transfer",
    ],
  },
  {
    id: "ma",
    title: "M&A Due Diligence",
    fit: "You are preparing to acquire, divest, or merge, and need an independent, decision-grade view before you commit.",
    do: [
      "Buy-side and sell-side due diligence",
      "Financial, commercial, and operational review",
      "Quality-of-earnings analysis",
      "Transaction support and negotiation advisory",
    ],
  },
  {
    id: "financial",
    title: "Financial Management",
    fit: "The finance function needs to keep pace with the business, or a specific financial decision needs an independent view.",
    do: [
      "Financial planning, analysis, and reporting",
      "Financial advisory services and investment research",
      "Capital raising support and lender engagement",
      "Asset management and portfolio review",
    ],
  },
  {
    id: "risk",
    title: "Risk Management",
    fit: "The risk function needs to change decisions, not just file reports — and the board needs to see the risks that actually matter.",
    do: [
      "Enterprise risk management framework design",
      "Credit, market, and operational risk review",
      "Governance, policy, and board risk reporting",
      "Risk-adjusted decision support",
    ],
  },
  {
    id: "research",
    title: "Financial Sector Research",
    fit: "You need an independent, well-evidenced view of a market, sector, or competitor set before you make a decision.",
    do: [
      "Market and sector analysis",
      "Banking performance review",
      "Competitor and peer benchmarking",
      "Sector intelligence for strategy and transactions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Our specialties."
        dek="At Plankton Partners, our collective capabilities as a firm drive the services we offer. We provide reliable advice and support to help organisations navigate the critical areas of strategy, sustainability, business transformation, financial management, and risk."
      />
      <section className="container-wide py-16 space-y-14">
        {practices.map((p, i) => (
          <div key={p.id} id={p.id} className="grid md:grid-cols-12 gap-10 scroll-mt-28 border-b border-line pb-14 last:border-0 last:pb-0">
            <div className="md:col-span-4">
              <div className="text-accent font-serif text-5xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-4 font-serif text-3xl text-navy tracking-tightish">{p.title}</h2>
              <p className="mt-4 text-sm text-ink/70 leading-relaxed">
                <span className="text-navy font-medium">When it fits.</span> {p.fit}
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="card">
                <div className="eyebrow">What we do</div>
                <ul className="mt-4 space-y-2 text-sm text-ink/80">
                  {p.do.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-accent">—</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
      <CTA
        title="Not sure which practice fits? Send a note. We reply within two business days."
        cta="Send a note"
      />
    </>
  );
}
