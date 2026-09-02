const capabilities = [
  "M&A Due Diligence",
  "Sustainability & ESG",
  "Corporate Strategy",
  "Business Transformation",
  "Organisation & Performance",
  "Financial Management",
  "Risk Management",
  "Financial Sector Research",
];

export default function LogoStrip() {
  return (
    <section className="container-wide py-16">
      <div className="flex items-center justify-center gap-3">
        <span className="h-[2px] w-8 bg-accent" />
        <p className="text-xs text-ink/60 uppercase tracking-[0.18em] font-medium">
          Our specialties
        </p>
        <span className="h-[2px] w-8 bg-accent" />
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 items-center">
        {capabilities.map((name) => (
          <div
            key={name}
            className="text-center font-serif text-navy text-sm md:text-base tracking-tightish"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
