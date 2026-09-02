export default function PageHeader({
  eyebrow,
  title,
  dek,
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
}) {
  return (
    <section className="relative bg-white border-b border-line">
      <div className="container-wide pt-20 pb-16">
        {eyebrow && (
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        )}
        <h1 className="mt-5 font-serif text-4xl md:text-6xl tracking-tightish text-navy max-w-4xl">
          {title}
        </h1>
        {dek && (
          <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">{dek}</p>
        )}
      </div>
    </section>
  );
}
