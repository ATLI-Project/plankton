const logos = [
  "Aeon Labs",
  "Northwind",
  "Cirrus Health",
  "Meridian",
  "Kelvin & Roe",
  "Halcyon",
  "Basalt",
  "Verdant",
];

export default function LogoStrip() {
  return (
    <section className="container-wide py-14">
      <p className="text-xs text-navy/50 uppercase tracking-[0.18em] text-center">
        A selection of firms we have worked alongside. Engagements confidential unless stated.
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
        {logos.map((name) => (
          <div
            key={name}
            className="text-center font-serif text-navy/60 text-sm md:text-base tracking-tightish"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
