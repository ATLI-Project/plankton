import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { partners } from "@/content/partners";
import { site } from "@/lib/site";

const values = [
  { t: "Reliable advice", b: "We provide clients with fit-for-purpose solutions and best-in-class support." },
  { t: "Data-driven insight", b: "Every recommendation is grounded in evidence, not opinion." },
  { t: "Confidentiality first", b: "We name a client only with written permission." },
  { t: "Sustainable growth", b: "We help organisations grow in ways that endure beyond any single engagement." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Plankton Partners"
        title="A firm of management consultants and financial advisors."
        dek="We provide advisory and capacity-building services to organisations of all sizes, with a team of reputable and experienced professionals who have a proven track record of helping clients grow sustainably."
      />

      <section className="container-wide py-16 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-6">
          <div className="eyebrow">Who we are</div>
          <p className="mt-4 text-lg text-ink/80 leading-relaxed">
            Plankton Partners is a firm of Management Consultants, Financial Advisors, and Financial Sector Specialists. We advise clients on the critical areas of M&amp;A, Sustainability and ESG, Strategy, Business Transformation, Financial Management, and Risk — and we help them turn evidence into decisions their boards can defend.
          </p>
        </div>
        <div className="md:col-span-6">
          <div className="eyebrow">Why clients trust us</div>
          <p className="mt-4 text-lg text-ink/80 leading-relaxed">
            We have a demonstrable track record of delivering value and exceeding client expectations. Our collective capabilities as a firm drive the services we offer, and clients are assured of fit-for-purpose solutions delivered by a senior team from first meeting to final handover.
          </p>
        </div>
      </section>

      <section className="container-wide pb-16 grid md:grid-cols-4 gap-6">
        {values.map((v) => (
          <div key={v.t} className="rule-accent">
            <h3 className="font-serif text-lg text-navy">{v.t}</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">{v.b}</p>
          </div>
        ))}
      </section>

      <section className="container-wide py-12">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-accent" />
          <span className="eyebrow">Our team lead</span>
        </div>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy tracking-tightish">
          Led by seasoned practitioners.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {partners.map((p) => (
            <article key={p.slug} className="md:col-span-2">
              <div className="aspect-[16/9] rounded-lg relative overflow-hidden bg-navy border border-navy">
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage:
                      "radial-gradient(400px 240px at 60% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(300px 220px at 20% 80%, rgba(227,32,36,0.35), transparent 60%)",
                  }}
                />
                <div className="absolute top-4 left-4 h-1 w-10 bg-accent rounded-full" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="eyebrow text-white/80">{p.title}</div>
                  <div className="font-serif text-3xl">{p.name}</div>
                </div>
              </div>
              <div className="mt-5 text-sm text-ink/60">{p.focus}</div>
              <p className="mt-4 text-ink/80 leading-relaxed">{p.bio}</p>
              {p.credentials && (
                <ul className="mt-4 space-y-1 text-sm text-ink/60">
                  {p.credentials.map((c) => (
                    <li key={c}>· {c}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream mt-16 border-t border-line">
        <div className="container-wide py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="eyebrow">Firm profile</div>
            <ul className="mt-4 space-y-2 text-ink/80 text-sm">
              <li>Management consulting and financial advisory</li>
              <li>Headquartered in {site.offices[0]}, Ghana</li>
              <li>Advising clients across West Africa and beyond</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">What we do best</div>
            <ul className="mt-4 space-y-2 text-ink/80 text-sm">
              <li>Mergers &amp; Acquisitions and Due Diligence</li>
              <li>Sustainability and ESG advisory</li>
              <li>Corporate Strategy</li>
              <li>Business Transformation</li>
              <li>Organisation &amp; Performance</li>
              <li>Financial Management and Risk</li>
              <li>Financial Sector Research</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Contact</div>
            <ul className="mt-4 space-y-2 text-ink/80 text-sm">
              <li>
                <a href={`mailto:${site.email.general}`} className="text-navy hover:text-accent font-medium">
                  {site.email.general}
                </a>
              </li>
              <li>{site.phone}</li>
              <li>{site.address.postal}</li>
              <li>Digital Address: {site.address.digital}</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
