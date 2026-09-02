const quotes = [
  {
    text: "They asked three questions in the first meeting that we had been avoiding for a year. That is what we paid for.",
    who: "CEO, Series B fintech",
  },
  {
    text: "Quiet, fast, and unusually well-prepared.",
    who: "Managing Partner, European growth fund",
  },
];

export default function Quotes() {
  return (
    <section className="container-wide py-20 grid md:grid-cols-2 gap-10">
      {quotes.map((q) => (
        <figure key={q.who} className="border-l-2 border-teal pl-6">
          <blockquote className="font-serif text-2xl md:text-3xl text-navy leading-snug">
            “{q.text}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-navy/60">— {q.who}</figcaption>
        </figure>
      ))}
    </section>
  );
}
