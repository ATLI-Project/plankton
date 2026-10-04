import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const sectors = [
  {
    name: "Aviation",
    body: "Airlines, airports and aviation service businesses. Financing, restructuring, strategy and governance.",
  },
  {
    name: "Infrastructure",
    body: "Transport, utilities and social infrastructure. Project structuring, public-private partnerships and financing.",
  },
  {
    name: "Energy & power",
    body: "Power generation, renewables, oil and gas. Project and receivables financing, ESG and the energy transition.",
  },
  {
    name: "Banking & financial services",
    body: "Universal, rural and community banks, securities firms, fund managers, insurers, pension trustees and microfinance companies. Capital, strategy, governance, risk and regulatory readiness.",
  },
  {
    name: "State-owned enterprises & government",
    body: "Ministries, public agencies and state-owned enterprises. Transaction advisory, financing, restructuring, governance and performance.",
  },
  {
    name: "Mining & extractives",
    body: "Mining businesses and their investors. Acquisitions, financing and ESG.",
  },
  {
    name: "Manufacturing & industrials",
    body: "Producers modernising operations and building the ESG record lenders now expect.",
  },
  {
    name: "Agribusiness & consumer",
    body: "Growers, processors and brands formalising supply chains and scaling into new markets.",
  },
];

const clients = [
  "Governments and state-owned enterprises",
  "Boards and shareholders",
  "Investors, lenders and acquirers, including development finance institutions",
  "Family and owner-managed businesses",
  "Not-for-profit organisations",
];

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Our professionals have executed transactions across many sectors."
        dek="From aviation and infrastructure to banking and state-owned enterprises, we bring the same senior, evidence-based approach to every sector we serve."
      />

      <section className="container-wide py-16">
        <div className="eyebrow">Sectors</div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {sectors.map((s) => (
            <div key={s.name} className="card">
              <div className="h-1 w-10 bg-accent rounded-full" />
              <h3 className="mt-5 font-serif text-2xl text-navy tracking-tightish">{s.name}</h3>
              <p className="mt-3 text-ink/70 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream border-y border-line">
        <div className="container-wide py-16">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">Who we work with</span>
          </div>
          <ul className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((c) => (
              <li key={c} className="rule-accent font-serif text-lg text-navy">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
