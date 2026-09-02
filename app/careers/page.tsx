import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

const looking = [
  "Ten or more years of direct advisory, operating, or investing experience",
  "A written work sample you are proud of",
  "The instinct to say “I do not know” out loud",
  "The ability to run a client relationship without supervision",
  "A view on something the industry gets wrong",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="We hire rarely and slowly."
        dek="Most partners join after working alongside us on a client engagement. If that path is not open to you, the door is still ajar."
      />

      <section className="container-wide pb-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <h2 className="font-serif text-2xl text-navy">What we look for</h2>
          <ul className="mt-6 space-y-3">
            {looking.map((l) => (
              <li key={l} className="flex gap-3 text-navy/80">
                <span className="text-teal mt-2 inline-block h-1 w-3 bg-teal rounded-full flex-shrink-0" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
          <h2 className="font-serif text-2xl text-navy">How to apply</h2>
          <p className="mt-6 text-navy/80 leading-relaxed">
            Send a note to{" "}
            <a
              className="text-teal underline-offset-4"
              href={`mailto:${site.email.careers}`}
            >
              {site.email.careers}
            </a>
            . Include a paragraph on the last time you changed your mind about something important. No CV needed in the first round.
          </p>
          <div className="mt-10 rounded-2xl border border-navy/10 bg-sand/40 p-6">
            <div className="eyebrow">Open roles</div>
            <p className="mt-3 text-navy/80">
              We are not actively hiring, but we always read good notes.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Not a role, but a conversation? We are open to that too."
        cta="Write to us"
        href={`mailto:${site.email.careers}`}
      />
    </>
  );
}
