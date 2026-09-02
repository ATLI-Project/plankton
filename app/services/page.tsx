import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const practices = [
  {
    id: "ma",
    title: "Mergers & Acquisitions",
    fit: "You are preparing to acquire, divest, or merge, and need decision-grade advice at every stage of the transaction.",
    do: [
      "Buy-side and sell-side due diligence (commercial, financial, and operational)",
      "Quality-of-earnings analysis and financial modelling",
      "Target screening, valuation, and deal structuring support",
      "Negotiation support and reps-and-warranties advisory",
      "Post-merger integration planning and Day-1 readiness",
    ],
    dont: [
      "Regulated broker or placement activity",
      "Work that duplicates your investment bank or legal counsel",
    ],
    length: "6 to 20 weeks, tied to transaction milestones.",
  },
  {
    id: "esg",
    title: "Sustainability & ESG",
    fit: "You need a credible sustainability strategy, disclosure framework, or transition plan that stands up to lenders, regulators, and boards.",
    do: [
      "ESG strategy design and double materiality assessments",
      "Sustainability reporting aligned to IFRS S1/S2, GRI, and sector standards",
      "Climate risk assessment and transition planning",
      "Scope 1, 2, and material Scope 3 emissions baselining",
      "Sustainable finance advisory, including green and sustainability-linked instruments",
      "ESG governance, policy, and board readiness",
    ],
    dont: [
      "Assurance of published sustainability reports (we prepare, independent auditors assure)",
      "Off-the-shelf disclosures with no linkage to strategy",
    ],
    length: "10 to 20 weeks, with an optional retainer for ongoing reporting cycles.",
  },
  {
    id: "strategy",
    title: "Corporate Strategy",
    fit: "You have a growing business and need a defensible plan for the next chapter — organic growth, new markets, or a repositioning.",
    do: [
      "Corporate and business unit strategy development",
      "Market entry, product, and pricing strategy",
      "Growth option modelling under multiple macro scenarios",
      "Operating model and organisation design",
      "Board-ready strategy documents and KPI frameworks",
    ],
    dont: [
      "Slide factories",
      "Deliverables no one uses after we leave",
    ],
    length: "8 to 16 weeks, with senior partners in the room throughout.",
  },
  {
    id: "transformation",
    title: "Business Transformation",
    fit: "A part of the business — or the whole business — needs to run differently, and the change programme needs execution discipline.",
    do: [
      "Business transformation programme design and delivery oversight",
      "Business process re-engineering",
      "Organisation and performance improvement",
      "Cost optimisation and operating model redesign",
      "Change management and capability building",
    ],
    dont: [
      "Permanent operating roles — we transfer capability and step back",
      "Reporting theatre — every workstream ends when it stops compounding",
    ],
    length: "3 to 9 months, with a written handover to internal owners.",
  },
  {
    id: "financial",
    title: "Financial Management & Advisory",
    fit: "The finance function needs to keep pace with the business, or a specific financial decision needs an independent view.",
    do: [
      "Financial advisory services and investment research",
      "Financial planning, analysis, and management reporting design",
      "Capital raising support and lender engagement",
      "Asset management and portfolio review",
      "Banking performance review and financial sector research",
    ],
    dont: [
      "Statutory audit or tax filing",
      "Regulated securities trading on client account",
    ],
    length: "Project-based or retainer, depending on the mandate.",
  },
  {
    id: "risk",
    title: "Risk Management",
    fit: "The risk function needs to change decisions, not just file reports — and the board needs to see the risks that actually matter.",
    do: [
      "Enterprise risk management framework design",
      "Credit, market, operational, and conduct risk review",
      "Governance, policy, and board risk reporting",
      "Internal control and compliance improvement",
      "Risk-adjusted decision support for major investments",
    ],
    dont: [
      "Statutory internal audit",
      "Risk registers no one reads",
    ],
    length: "8 to 16 weeks, or an ongoing advisory retainer.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Six practices. One standard."
        dek="Plankton Partners advises organisations on the decisions that quietly determine whether a business compounds or stalls — across M&A, Sustainability and ESG, Strategy, Business Transformation, Financial Management, and Risk."
      />
      <section className="container-wide pb-16 space-y-20">
        {practices.map((p, i) => (
          <div key={p.id} id={p.id} className="grid md:grid-cols-12 gap-10 scroll-mt-24">
            <div className="md:col-span-4">
              <div className="text-teal font-serif text-6xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-4 font-serif text-3xl text-navy tracking-tightish">{p.title}</h2>
              <p className="mt-4 text-sm text-navy/70 leading-relaxed">
                <span className="text-navy font-medium">When it fits.</span> {p.fit}
              </p>
              <p className="mt-6 text-xs text-navy/50">{p.length}</p>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="eyebrow">What we do</div>
                <ul className="mt-4 space-y-2 text-sm text-navy/80">
                  {p.do.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-teal">—</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <div className="eyebrow">What we do not</div>
                <ul className="mt-4 space-y-2 text-sm text-navy/60">
                  {p.dont.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-navy/30">—</span>
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
        title="Not sure which practice fits? Send a paragraph. We reply within two business days."
        cta="Send a note"
      />
    </>
  );
}
