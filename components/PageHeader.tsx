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
    <section className="container-wide pt-24 pb-16">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1 className="mt-4 font-serif text-4xl md:text-6xl tracking-tightish text-navy max-w-4xl">
        {title}
      </h1>
      {dek && (
        <p className="mt-6 max-w-2xl text-lg text-navy/70">{dek}</p>
      )}
    </section>
  );
}
