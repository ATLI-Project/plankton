import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Terms" };

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of use" dek="The short version." />
      <section className="container-prose pb-24 text-navy/80 space-y-6 leading-relaxed">
        <p>
          This site is provided for general information. Nothing on it constitutes advice. Engagements are governed by a separate written agreement.
        </p>
        <p>
          All content, including case studies and insights, is © Plankton Partners unless otherwise credited. You may quote reasonable extracts with attribution.
        </p>
      </section>
    </>
  );
}
