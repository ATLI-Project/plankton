import { notFound } from "next/navigation";
import Link from "next/link";
import { cases } from "@/content/cases";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: c.title, description: c.result };
}

export default async function CasePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) return notFound();

  return (
    <>
      <article>
        <header className="container-wide pt-24 pb-12">
          <Link href="/work" className="text-sm text-navy/60 no-underline hover:text-navy">← All work</Link>
          <div className="mt-6 eyebrow">
            {c.sector} · {c.service} · {c.duration} · {c.year}
          </div>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-navy tracking-tightish max-w-4xl">
            {c.title}
          </h1>
          <p className="mt-6 text-xl text-navy/70 max-w-3xl">{c.result}</p>
        </header>

        <div className="container-wide">
          <div className="aspect-[16/7] rounded-2xl overflow-hidden relative bg-gradient-to-br from-navy to-navy/70">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(700px 300px at 25% 40%, rgba(19,168,158,0.4), transparent 60%), radial-gradient(500px 260px at 80% 70%, rgba(233,228,216,0.15), transparent 60%)",
              }}
            />
          </div>
        </div>

        <div className="container-wide py-16 grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="eyebrow">Sector</div>
                <div className="mt-1 text-navy">{c.sector}</div>
              </div>
              <div>
                <div className="eyebrow">Service</div>
                <div className="mt-1 text-navy">{c.service}</div>
              </div>
              <div>
                <div className="eyebrow">Duration</div>
                <div className="mt-1 text-navy">{c.duration}</div>
              </div>
              <div>
                <div className="eyebrow">Year</div>
                <div className="mt-1 text-navy">{c.year}</div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-8 space-y-12">
            <section>
              <h2 className="font-serif text-2xl text-navy">Situation</h2>
              <p className="mt-4 text-navy/80 leading-relaxed">{c.situation}</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-navy">What we did</h2>
              <ul className="mt-4 space-y-2 text-navy/80">
                {c.actions.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-teal mt-2 inline-block h-1 w-3 bg-teal rounded-full flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-navy">Result</h2>
              <ul className="mt-4 space-y-2 text-navy/80">
                {c.outcome.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-teal mt-2 inline-block h-1 w-3 bg-teal rounded-full flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
            {c.quote && (
              <figure className="border-l-2 border-teal pl-6">
                <blockquote className="font-serif text-2xl text-navy leading-snug">
                  “{c.quote.text}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-navy/60">— {c.quote.attribution}</figcaption>
              </figure>
            )}
            <section>
              <h2 className="font-serif text-2xl text-navy">What we would do differently</h2>
              <p className="mt-4 text-navy/80 leading-relaxed">{c.reflection}</p>
            </section>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
