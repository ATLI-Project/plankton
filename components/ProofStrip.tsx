const stats = [
  { k: "40+", v: "Engagements since 2019" },
  { k: "11", v: "Countries" },
  { k: "7", v: "Sectors" },
  { k: "8", v: "Active clients, capped" },
];

export default function ProofStrip() {
  return (
    <section className="bg-sand/60">
      <div className="container-wide py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="font-serif text-4xl md:text-5xl text-navy">{s.k}</div>
            <div className="mt-2 text-sm text-navy/60">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
