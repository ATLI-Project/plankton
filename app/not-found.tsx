import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide py-32 text-center">
      <div className="eyebrow">404</div>
      <h1 className="mt-4 font-serif text-4xl md:text-6xl text-navy tracking-tightish">
        The page you were looking for is out to sea.
      </h1>
      <p className="mt-4 text-navy/70">Try the homepage, or write to us and we will point you the right way.</p>
      <div className="mt-8 flex gap-3 justify-center">
        <Link href="/" className="btn-primary no-underline">Home</Link>
        <Link href="/contact" className="btn-ghost no-underline">Contact</Link>
      </div>
    </section>
  );
}
