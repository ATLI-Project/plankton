import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you are working on."
        dek="A member of the team will read your note and reply within two business days. If we are the wrong fit, we will tell you and point you to who is right."
      />

      <section className="container-wide pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-5 space-y-8">
          <div>
            <div className="eyebrow">Get in touch</div>
            <ul className="mt-4 space-y-2 text-navy/80">
              <li>
                Email:{" "}
                <a className="text-teal" href={`mailto:${site.email.general}`}>
                  {site.email.general}
                </a>
              </li>
              <li>Telephone: {site.phone}</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Office</div>
            <ul className="mt-4 space-y-2 text-navy/80">
              <li>{site.offices[0]}, Ghana</li>
              <li>{site.address.postal}</li>
              <li>Digital Address: {site.address.digital}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-sand/40 p-6">
            <div className="eyebrow">What happens next</div>
            <p className="mt-3 text-sm text-navy/80 leading-relaxed">
              Your note goes directly to the partners. We reply within two business days with either a scoping conversation or an honest view on whether we are the right team for the work.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
