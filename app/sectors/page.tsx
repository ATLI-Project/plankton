import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const sectors = [
  {
    name: "Financial services",
    body: "Banking, insurance, asset management, and non-bank financial institutions. Our team's operating heritage sits inside this sector.",
  },
  {
    name: "Energy & extractives",
    body: "Upstream, midstream, and downstream operators managing the twin agendas of production growth and energy transition.",
  },
  {
    name: "Manufacturing & industrials",
    body: "Producers and distributors modernising operations and building ESG credentials that stand up to lenders and offtakers.",
  },
  {
    name: "Consumer & agribusiness",
    body: "Regional and multinational brands scaling into new markets and formalising supply chains.",
  },
  {
    name: "Development finance & impact",
    body: "DFIs, impact funds, and public-sector programmes deploying capital against measurable outcomes.",
  },
  {
    name: "Family and owner-managed businesses",
    body: "Founding families and owner-operators formalising governance, professionalising management, and preparing for capital events.",
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
        dek="We deploy proven methods to serve organisations of every size and persuasion — from multinationals to owner-managed businesses, family enterprises, and not-for-profit organisations."
      />
      <section className="container-wide pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((s) => (
          <div key={s.name} className="card">
            <div className="h-1 w-10 bg-teal rounded-full" />
            <h3 className="mt-5 font-serif text-2xl text-navy tracking-tightish">{s.name}</h3>
            <p className="mt-3 text-navy/70 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-sand/50">
        <div className="container-wide py-16">
          <div className="eyebrow">Who we work with</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy tracking-tightish max-w-3xl">
            Organisations of all sizes and persuasions.
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((c) => (
              <div key={c} className="border-t border-navy/15 pt-4 font-serif text-lg text-navy">
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
