import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you are working on."
        dek="A partner reads every note in confidence and replies within two business days. We will suggest a short call to scope the work or, if we are not the right fit, say so and suggest who is."
      />

      <section className="container-wide py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-5">
          <div className="eyebrow">Other ways to reach us</div>
          <ul className="mt-4 space-y-3 text-ink/80">
            <li>
              Email:{" "}
              <a className="text-navy hover:text-accent font-medium" href="mailto:connect@planktonpartners.com">
                connect@planktonpartners.com
              </a>
            </li>
            <li>Telephone: 024 402 8258</li>
            <li>Post: P.O. Box CT 8511, Cantonments, Accra, Ghana</li>
            <li>Digital address: GA-124-6890</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
