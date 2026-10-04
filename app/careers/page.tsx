import PageHeader from "@/components/PageHeader";
import { CONTACT_EMAIL } from "@/lib/forms";

const looking = [
  "Experience in advisory, banking, capital markets or a relevant operating role",
  "Strong financial analysis and clear, concise writing",
  "The confidence to say \u201cI don't know\u201d, and then find out",
  "The ability to manage a client relationship with little supervision",
  "Integrity and discretion with confidential information",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work with us"
        dek="We are a small, senior team. We hire experienced people who want real responsibility on important mandates, and we work with independent specialists as associates on individual mandates."
      />

      <section className="container-wide py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <h2 className="font-serif text-2xl text-navy">What we look for</h2>
          <ul className="mt-6 space-y-3">
            {looking.map((l) => (
              <li key={l} className="flex gap-3 text-ink/80">
                <span className="text-accent mt-2 inline-block h-1 w-3 bg-accent rounded-full flex-shrink-0" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
          <h2 className="font-serif text-2xl text-navy">How to apply</h2>
          <p className="mt-6 text-ink/80 leading-relaxed">
            We welcome applications from experienced professionals, and from prospective associates, in corporate finance, infrastructure finance, M&amp;A, ESG and risk. Email your CV and a short cover note to{" "}
            <a className="text-navy hover:text-accent font-medium" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            , telling us which practice interests you most and why.
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Application")}`}
              className="btn-primary no-underline"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
