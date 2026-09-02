import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say what you are working on."
        dek="You will get a real reply from a partner, usually within two business days. If we are the wrong fit, we will tell you."
      />

      <section className="container-wide pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-5 space-y-8">
          <div>
            <div className="eyebrow">Direct paths</div>
            <ul className="mt-4 space-y-2 text-navy/80">
              <li>
                General:{" "}
                <a className="text-teal" href={`mailto:${site.email.general}`}>
                  {site.email.general}
                </a>
              </li>
              <li>
                Media:{" "}
                <a className="text-teal" href={`mailto:${site.email.press}`}>
                  {site.email.press}
                </a>
              </li>
              <li>
                Careers:{" "}
                <a className="text-teal" href={`mailto:${site.email.careers}`}>
                  {site.email.careers}
                </a>
              </li>
              <li>Phone: {site.phone} (business hours)</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Offices</div>
            <ul className="mt-4 space-y-2 text-navy/80">
              {site.offices.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-sand/40 p-6">
            <div className="eyebrow">What happens next</div>
            <p className="mt-3 text-sm text-navy/80 leading-relaxed">
              A partner reads your note and replies within two business days. If we cannot help, we will say so and, where we can, point you to who is right.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
