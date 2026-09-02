import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy notice" dek="How we handle the small amount of data we hold." />
      <section className="container-prose pb-24 text-navy/80 space-y-6 leading-relaxed">
        <p>
          Plankton Partners is a data controller for the information you share with us through this website and during engagements. We collect the minimum needed to reply to your inquiry, deliver the work you have hired us to do, and comply with our legal obligations.
        </p>
        <p>
          We do not sell data. We do not run third-party ad trackers. Analytics, when used, is a cookieless, privacy-respecting product (Plausible or Fathom).
        </p>
        <p>
          Contact form submissions are retained for up to twenty-four months unless the contact becomes a client. Engagement records are retained for six years after the last invoice, in line with UK statutory requirements. You can request access, correction, or deletion at any time by writing to hello@planktonpartners.com.
        </p>
      </section>
    </>
  );
}
