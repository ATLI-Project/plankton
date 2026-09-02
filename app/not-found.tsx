import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide py-32 text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-[2px] w-8 bg-accent" />
        <span className="eyebrow">404</span>
        <span className="h-[2px] w-8 bg-accent" />
      </div>
      <h1 className="mt-6 font-serif text-4xl md:text-6xl text-navy tracking-tightish">
        The page you were looking for is not here.
      </h1>
      <p className="mt-4 text-ink/70">Try the homepage, or write to us and we will point you the right way.</p>
      <div className="mt-8 flex gap-3 justify-center">
        <Link href="/" className="btn-primary no-underline">Home</Link>
        <Link href="/contact" className="btn-ghost no-underline">Contact</Link>
      </div>
    </section>
  );
}
