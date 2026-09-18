import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const sectors = [
  {
    name: "Financial services",
    body: "Banking, insurance, asset management, and non-bank financial institutions. Our team's operating heritage sits inside this sector.",
  },
  {
    name: "Energy & extractives",
    body: "Operators managing the twin agendas of production growth and energy transition.",
  },
  {
    name: "Manufacturing & industrials",
    body: "Producers and distributors modernising operations and building ESG credentials that stand up to lenders and offtakers.",
  },
  {
    name: "Consumer & agribusiness",
    body: "Brands scaling into new markets and formalising supply chains.",
  },
  {
    name: "Development finance & impact",
    body: "DFIs, impact funds, and public-sector programmes deploying capital against measurable outcomes.",
  },
  {
    name: "Family and owner-managed businesses",
    body: "Founding families and owner-operators formalising governance and preparing for capital events.",
  },
];

const clientTypes = [
  "Multinationals",
  "Owner-managed businesses",
  "Family businesses",
  "Not-for-profit organisations",
];

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Focus areas"
        title="Deep experience across multiple industries and sectors."
        dek="Our cogent experience across multiple industries and sectors is a key differentiator. We deploy proven methods to serve organisations of all sizes and persuasions."
      />
      <section className="container-wide py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((s) => (
          <div key={s.name} className="card">
            <div className="h-1 w-10 bg-accent rounded-full" />
            <h3 className="mt-5 font-serif text-2xl text-navy tracking-tightish">{s.name}</h3>
            <p className="mt-3 text-ink/70 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-cream border-y border-line">
        <div className="container-wide py-16">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">Who we work with</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-navy tracking-tightish max-w-3xl">
            Organisations of all sizes and persuasions.
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((c) => (
              <div key={c} className="rule-accent font-serif text-lg text-navy">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
