const stats = [
  { k: "6", v: "Practice areas" },
  { k: "M&A", v: "Due diligence and transactions" },
  { k: "ESG", v: "IFRS S1/S2 and GRI reporting" },
  { k: "Accra", v: "Headquartered in Ghana" },
];

export default function ProofStrip() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
      <div className="container-wide py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="font-serif text-4xl md:text-5xl text-white">{s.k}</div>
            <div className="mt-2 text-sm text-white/70">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
