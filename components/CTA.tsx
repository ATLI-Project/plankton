import Link from "next/link";

export default function CTA({
  title = "If you are quiet about the problem, we are the right people to call.",
  href = "/contact",
  cta = "Contact the partners",
}: {
  title?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="mt-24 bg-navy text-white relative overflow-hidden">
      {/* Red accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(closest-side, #E32024, transparent)" }}
        aria-hidden="true"
      />
      <div className="container-wide py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8 relative">
        <h2 className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight text-white">
          {title}
        </h2>
        <Link href={href} className="btn-accent self-start no-underline">
          {cta}
        </Link>
      </div>
    </section>
  );
}
