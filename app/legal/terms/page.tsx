import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Terms of use" };

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of use" dek="The short version." />
      <section className="container-prose pb-24 text-ink/80 space-y-6">
        <p className="leading-relaxed">
          This website provides general information only. Nothing on it is financial, investment, legal or tax advice, and it should not be relied on as such. Engagements are governed by a separate written agreement.
        </p>
        <p className="leading-relaxed">
          All content is © Plankton Partners unless otherwise credited. You may quote short extracts with attribution.
        </p>
        <p className="leading-relaxed">These terms are governed by the laws of Ghana.</p>
      </section>
    </>
  );
}
