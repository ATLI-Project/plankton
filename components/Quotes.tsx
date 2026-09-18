const quotes = [
  {
    text: "[Client quote. Replace with an approved, attributed quote from a recent engagement.]",
    who: "[Name, Title, Organisation]",
  },
  {
    text: "[Client quote. Replace with an approved, attributed quote from a recent engagement.]",
    who: "[Name, Title, Organisation]",
  },
];

export default function Quotes() {
  return (
    <section className="bg-cream border-y border-line">
      <div className="container-wide py-20 grid md:grid-cols-2 gap-10">
        {quotes.map((q, i) => (
          <figure key={i} className="rule-accent">
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
