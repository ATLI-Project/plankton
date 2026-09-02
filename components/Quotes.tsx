const quotes = [
  {
    text: "Their due diligence changed the shape of the deal. We paid a fair price, not the asking one.",
    who: "Managing Director, financial services acquirer",
  },
  {
    text: "They translated ESG from a compliance exercise into a capital markets story.",
    who: "Group CFO, manufacturing",
  },
];

export default function Quotes() {
  return (
    <section className="bg-cream">
      <div className="container-wide py-20 grid md:grid-cols-2 gap-10">
        {quotes.map((q) => (
          <figure key={q.who} className="rule-accent">
            <blockquote className="font-serif text-2xl md:text-3xl text-navy leading-snug">
              “{q.text}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-ink/60">— {q.who}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
