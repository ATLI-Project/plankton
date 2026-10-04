import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProofStrip from "@/components/ProofStrip";
import CredentialsStrip from "@/components/CredentialsStrip";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProofStrip />
      <CredentialsStrip />
      <CTA />
    </>
  );
}
