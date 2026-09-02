import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import ServicesGrid from "@/components/ServicesGrid";
import ProofStrip from "@/components/ProofStrip";
import CaseTiles from "@/components/CaseTiles";
import Quotes from "@/components/Quotes";
import InsightTeaser from "@/components/InsightTeaser";
import CTA from "@/components/CTA";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <SectionDivider />
      <section className="container-wide py-24 grid md:grid-cols-2 gap-10 items-start">
        <h2 className="font-serif text-3xl md:text-5xl text-navy tracking-tightish leading-tight">
          The most important work is rarely visible.
        </h2>
        <p className="text-lg text-navy/75 leading-relaxed">
          Plankton Partners is a small advisory firm built for founders and investors who prefer signal over ceremony. We embed with a handful of clients each year, help them make a small number of decisions well, and leave the organisation stronger than we found it.
        </p>
      </section>
      <SectionDivider />
      <ServicesGrid />
      <ProofStrip />
      <CaseTiles />
      <SectionDivider />
      <Quotes />
      <SectionDivider />
      <InsightTeaser />
      <CTA />
    </>
  );
}
