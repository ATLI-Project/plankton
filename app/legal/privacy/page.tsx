import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Privacy notice" };

export default function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy notice"
        dek="How we handle the information you share with us."
      />
      <section className="container-prose pb-24 text-ink/80">
        <p className="leading-relaxed">
          Plankton Partners is the data controller for personal information you share with us through this website or during an engagement. We process it in line with Ghana's Data Protection Act, 2012 (Act 843).
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">What we collect and why</h2>
        <p className="mt-4 leading-relaxed">
          We collect only what we need: your name, contact details and message when you get in touch, your email address if you subscribe to our newsletter, and the information needed to deliver and invoice work you engage us to do.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">How we protect it</h2>
        <p className="mt-4 leading-relaxed">
          We do not sell or share your data for marketing. We do not use advertising trackers. Client information is treated as strictly confidential and shared only with team members and associates working on your mandate, under confidentiality obligations.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">How long we keep it</h2>
        <p className="mt-4 leading-relaxed">
          Enquiries are kept for up to two years unless you become a client. Engagement records are kept for as long as Ghanaian legal, tax and regulatory requirements demand.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Your rights</h2>
        <p className="mt-4 leading-relaxed">
          You may ask to see, correct or delete your personal information, or unsubscribe at any time, by writing to{" "}
          <a className="text-navy hover:text-accent font-medium" href="mailto:connect@planktonpartners.com">
            connect@planktonpartners.com
          </a>
          . You may also contact Ghana's Data Protection Commission.
        </p>
      </section>
    </>
  );
}
