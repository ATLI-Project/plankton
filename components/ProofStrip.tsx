const points = [
  { k: "Fit-for-purpose", v: "Solutions designed around the decision on the table" },
  { k: "Data-driven", v: "Insight grounded in evidence, not opinion" },
  { k: "Best-in-class", v: "Support delivered by experienced professionals" },
  { k: "Accra, Ghana", v: "Serving organisations across the region and beyond" },
];

export default function ProofStrip() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
      <div className="container-wide py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {points.map((s) => (
          <div key={s.k}>
            <div className="font-serif text-2xl md:text-3xl text-white tracking-tightish">{s.k}</div>
            <div className="mt-3 text-sm text-white/75 leading-relaxed">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
