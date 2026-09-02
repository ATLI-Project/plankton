import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const principles = [
  {
    title: "Fit-for-purpose solutions.",
    body: "Every engagement is shaped around the client's decision, not a shelf methodology. We design the work backwards from the outcome the client has to own.",
  },
  {
    title: "Data-driven insight.",
    body: "We interview customers, read contracts, and rebuild the numbers before we form a view. Advice without evidence is opinion.",
  },
  {
    title: "Senior in the room.",
    body: "The people who sell the work do the work. Every engagement is staffed with experienced professionals accountable to the client from first meeting to final handover.",
  },
  {
    title: "Best-in-class support.",
    body: "We match the standards of the international firms our team came from — the same rigour, the same discretion, closer to the client and faster on their timeline.",
  },
  {
    title: "Confidential by default.",
    body: "We name a client only with written permission. Most of our work is anonymous, and that is the point.",
  },
  {
    title: "A track record of delivering value.",
    body: "Clients are assured of receiving fit-for-purpose solutions to overcome their business and organisational challenges — and of a team that stays until the work compounds.",
  },
];

const steps = [
  { label: "Listen", when: "week 0", body: "A structured first conversation to understand the decision on the table. No pitch deck." },
  { label: "Frame", when: "weeks 1–2", body: "We agree on the two or three decisions that matter and the evidence needed to make them." },
  { label: "Work", when: "weeks 2–N", body: "Weekly working sessions, written interim views, and a small senior team accountable end to end." },
  { label: "Hand over", when: "final week", body: "Owners, dates, and a short written record. We remain reachable for 90 days after close, no charge." },
];

export default function MethodPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our approach"
        title="Six principles behind every engagement."
        dek="At Plankton Partners, our collective capabilities as a firm drive the services we offer. Our method reflects the standards our clients expect of an international advisory firm."
      />
      <section className="container-wide pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div key={p.title} className="border-t border-navy/10 pt-6">
              <div className="text-teal text-sm">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 font-serif text-2xl text-navy tracking-tightish">{p.title}</h3>
              <p className="mt-3 text-navy/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand/50 mt-16">
        <div className="container-wide py-20">
          <div className="eyebrow">How an engagement runs</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy tracking-tightish max-w-2xl">
            Four steps. No surprises.
          </h2>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.label} className="relative">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-navy text-foam flex items-center justify-center text-sm font-serif">
                    {i + 1}
                  </div>
                  <div className="text-xs text-navy/60 uppercase tracking-wider">{s.when}</div>
                </div>
                <h3 className="mt-4 font-serif text-xl text-navy">{s.label}</h3>
                <p className="mt-2 text-sm text-navy/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 grid md:grid-cols-2 gap-10 items-start">
        <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-tightish">
          A note on commercials.
        </h2>
        <p className="text-lg text-navy/75 leading-relaxed">
          We work on fixed fees or retainers scoped to the mandate. The first conversation and scoping are complimentary. A written proposal follows within five business days.
        </p>
      </section>
      <CTA />
    </>
  );
}
