const points = [
  {
    k: "18+ years",
    v: "Leadership experience in banking, capital markets and advisory",
  },
  {
    k: "US$1.3bn+",
    v: "Transactions advised on across Sub-Saharan Africa",
  },
  {
    k: "Senior-led",
    v: "The partner who wins the mandate leads it, start to finish",
  },
  {
    k: "Accra-based",
    v: "Close to our clients, with regional reach",
  },
];

export default function ProofStrip() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
      <div className="container-wide py-20">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-accent" />
          <span className="eyebrow text-white/80">Why Plankton Partners</span>
        </div>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl text-white tracking-tightish max-w-3xl">
          Built for the decisions that matter.
        </h2>
        <p className="mt-6 max-w-3xl text-white/80 leading-relaxed">
          Our team has spent careers in banks, securities firms, international advisory firms and the boardroom. We have arranged sovereign and corporate financings, advised on acquisitions and structured infrastructure financing across Sub-Saharan Africa. Clients call us when the stakes are high: a capital raise, an acquisition, a major infrastructure project, a new strategy or a turnaround.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((s) => (
            <div key={s.k}>
              <div className="font-serif text-3xl md:text-4xl text-white tracking-tightish">{s.k}</div>
              <div className="mt-3 text-sm text-white/75 leading-relaxed">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
