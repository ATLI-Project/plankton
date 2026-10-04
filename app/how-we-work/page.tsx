import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const principles = [
  {
    title: "Start with the decision",
    body: "We shape every mandate around the decision the client has to make, not a standard methodology.",
  },
  {
    title: "Evidence first",
    body: "We read the contracts, rebuild the numbers and speak to the people involved before we form a view. Then we say what the evidence shows, even when it is not what the client hoped to hear.",
  },
  {
    title: "Senior people do the work",
    body: "The partner who wins the mandate leads it, from first meeting to final handover.",
  },
  {
    title: "International standards, local knowledge",
    body: "Our team trained at leading banks and advisory firms. We bring the same rigour, closer to the client and on their timeline.",
  },
  {
    title: "Confidential by default",
    body: "We name a client only with written permission.",
  },
  {
    title: "Leave the client stronger",
    body: "We work alongside internal teams and transfer skills as we go.",
  },
];

const steps = [
  {
    label: "Listen",
    when: "before we start",
    body: "A free first conversation to understand the decision and the timetable.",
  },
  {
    label: "Scope",
    when: "within five business days",
    body: "A written proposal setting out the questions to answer, the team, the timeline and the fee.",
  },
  {
    label: "Deliver",
    when: "",
    body: "Weekly check-ins, early sight of findings and one partner accountable throughout.",
  },
  {
    label: "Hand over",
    when: "",
    body: "A clear written report, agreed next steps with owners and dates, and continued access to the team.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="How we work"
        dek="Six principles and a four-step process sit behind every mandate."
      />

      <section className="container-wide py-16">
        <div className="eyebrow">Our principles</div>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div key={p.title} className="rule-accent">
              <div className="text-accent text-sm font-medium">{i + 1}.</div>
              <h3 className="mt-2 font-serif text-2xl text-navy tracking-tightish">{p.title}</h3>
              <p className="mt-3 text-ink/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream border-y border-line">
        <div className="container-wide py-20">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">How an engagement runs</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-navy tracking-tightish max-w-2xl">
            Four steps. No surprises.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.label}>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-navy text-white flex items-center justify-center text-sm font-serif">
                    {i + 1}
                  </div>
                  {s.when && (
                    <div className="text-xs text-ink/60 uppercase tracking-wider">{s.when}</div>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-xl text-navy">{s.label}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 grid md:grid-cols-2 gap-10 items-start">
        <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-tightish">Fees</h2>
        <p className="text-lg text-ink/75 leading-relaxed">
          We work on fixed fees or retainers agreed up front. Transaction mandates may include a success fee.
        </p>
      </section>

      <CTA />
    </>
  );
}
