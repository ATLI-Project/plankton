import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About Plankton Partners"
        dek="Plankton Partners is an independent firm of financial advisors and management consultants, headquartered in Accra and serving public and private sector clients across Ghana and the region."
      />

      <section className="container-wide py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow">Who we are</div>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-ink/80 leading-relaxed">
              Our team has worked inside banks, securities firms and international advisory firms. We know how the numbers are built, how lenders and regulators think and how boards decide. Because we are independent, our advice follows the evidence, and many clients use us for both the financing or transaction and the organisation that has to deliver it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/services" className="btn-primary no-underline">Our services</a>
              <a href="/how-we-work" className="btn-ghost no-underline">How we work</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-line">
        <div className="container-wide py-16">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="eyebrow">Our team</div>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-ink/80 leading-relaxed">
                Plankton Partners is led by Managing Partner Sena Agbo, with advisors and specialist associates brought together for each mandate.
              </p>
              <div className="mt-8">
                <a href="/team" className="btn-primary no-underline">Meet the team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="eyebrow">Firm profile</div>
          <ul className="mt-4 space-y-2 text-ink/80 text-sm">
            <li>Financial advisory and management consulting</li>
            <li>Headquartered in Accra, Ghana</li>
            <li>Serving public and private sector clients across the region</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow">Practices</div>
          <ul className="mt-4 space-y-2 text-ink/80 text-sm">
            <li>Financial Advisory</li>
            <li>Corporate Strategy</li>
            <li>Environment, Social &amp; Governance</li>
            <li>Business Transformation</li>
            <li>Organisation &amp; Performance</li>
            <li>Risk Management</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-ink/80 text-sm">
            <li>
              <a href="mailto:connect@planktonpartners.com" className="text-navy hover:text-accent font-medium">
                connect@planktonpartners.com
              </a>
            </li>
            <li>024 402 8258</li>
            <li>P.O. Box CT 8511, Cantonments, Accra, Ghana</li>
            <li>Digital address: GA-124-6890</li>
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
