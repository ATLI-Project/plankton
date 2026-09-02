import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const principles = [
  {
    title: "Small on purpose.",
    body: "We cap active engagements at eight. The math of attention is not negotiable.",
  },
  {
    title: "Senior in the room.",
    body: "The people who sell the work do the work. No pyramid, no handoff.",
  },
  {
    title: "Decision, not deck.",
    body: "Every engagement ends with a decision the client can defend to a board, a buyer, or their team.",
  },
  {
    title: "Evidence over instinct.",
    body: "We interview customers, read contracts, and look at the data before we form a view.",
  },
  {
    title: "Confidential by default.",
    body: "We name a client only with written permission. Most of our work is anonymous, and that is the point.",
  },
  {
    title: "Straight talk.",
    body: "If the honest answer is that you do not need us, we will say so in the first call.",
  },
];

const steps = [
  { label: "Listen", when: "week 0", body: "A structured first conversation. No pitch deck." },
  { label: "Frame", when: "weeks 1–2", body: "We agree on the two or three decisions that matter." },
  { label: "Work", when: "weeks 2–N", body: "Weekly working sessions, written interim views, no surprises." },
  { label: "Hand over", when: "final week", body: "Owners, dates, and a short written record. Reachable for 90 days after close, no charge." },
];

export default function MethodPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="Six principles behind every engagement."
        dek="No pyramid, no handoff, no deliverables no one uses after we leave."
      />
      <section className="container-wide pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div key={p.title} className="border-t border-navy/10 pt-6">
              <div className="text-teal text-sm">0{i + 1}</div>
              <h3 className="mt-2 font-serif text-2xl text-navy tracking-tightish">{p.title}</h3>
              <p className="mt-3 text-navy/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand/50 mt-16">
        <div className="container-wide py-20">
          <div className="eyebrow">The process</div>
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
          A note on pricing.
        </h2>
        <p className="text-lg text-navy/75 leading-relaxed">
          We work on fixed fees or retainers. We do not bill by the hour. The first conversation and scoping are free. A written proposal follows within five business days.
        </p>
      </section>
      <CTA />
    </>
  );
}
