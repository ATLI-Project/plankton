import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import ServicesGrid from "@/components/ServicesGrid";
import ProofStrip from "@/components/ProofStrip";
import CaseTiles from "@/components/CaseTiles";
import Quotes from "@/components/Quotes";
import InsightTeaser from "@/components/InsightTeaser";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <section className="border-t border-line">
        <div className="container-wide py-24 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-accent" />
              <span className="eyebrow">Who we are</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy tracking-tightish leading-tight">
              A firm built for the decisions that matter.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-ink/75 leading-relaxed">
            <p>
              We are a firm of Management Consultants, Financial Advisors, and Financial Sector Specialists. We advise organisations of all sizes on the critical areas of Mergers &amp; Acquisitions, Sustainability and ESG, Corporate Strategy, Business Transformation, Financial Management, and Risk.
            </p>
            <p>
              Our team of reputable and experienced professionals has a proven track record of helping clients grow sustainably — delivering fit-for-purpose solutions grounded in data-driven insight, and staying in the work until it compounds.
            </p>
          </div>
        </div>
      </section>
      <ServicesGrid />
      <ProofStrip />
      <CaseTiles />
      <Quotes />
      <InsightTeaser />
      <CTA />
    </>
  );
}
