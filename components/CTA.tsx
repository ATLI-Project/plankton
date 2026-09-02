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
    <section className="mt-24 bg-navy text-foam">
      <div className="container-wide py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2 className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight text-foam">
          {title}
        </h2>
        <Link href={href} className="btn-outline-light self-start no-underline">
          {cta}
        </Link>
      </div>
    </section>
  );
}
