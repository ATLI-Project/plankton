import { notFound } from "next/navigation";
import Link from "next/link";
import { cases } from "@/content/cases";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: c.title, description: c.result };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) return notFound();

  return (
    <>
      <article>
        <header className="container-wide pt-20 pb-12 border-b border-line">
          <Link href="/work" className="text-sm text-ink/60 no-underline hover:text-navy">← All work</Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">
              {c.sector} · {c.service} · {c.duration} · {c.year}
            </span>
          </div>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-navy tracking-tightish max-w-4xl">
            {c.title}
          </h1>
          <p className="mt-6 text-xl text-ink/70 max-w-3xl">{c.result}</p>
        </header>

        <div className="container-wide pt-10">
          <div className="aspect-[16/7] rounded-lg overflow-hidden relative bg-navy border border-navy">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(700px 300px at 25% 40%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(500px 260px at 80% 70%, rgba(227,32,36,0.35), transparent 60%)",
              }}
            />
            <div className="absolute top-6 left-6 h-1 w-12 bg-accent rounded-full" />
          </div>
        </div>

        <div className="container-wide py-16 grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="eyebrow">Sector</div>
                <div className="mt-1 text-navy font-medium">{c.sector}</div>
              </div>
              <div>
                <div className="eyebrow">Service</div>
                <div className="mt-1 text-navy font-medium">{c.service}</div>
              </div>
              <div>
                <div className="eyebrow">Duration</div>
                <div className="mt-1 text-navy font-medium">{c.duration}</div>
              </div>
              <div>
                <div className="eyebrow">Year</div>
                <div className="mt-1 text-navy font-medium">{c.year}</div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-8 space-y-12">
            <section>
              <h2 className="font-serif text-2xl text-navy">Situation</h2>
              <p className="mt-4 text-ink/80 leading-relaxed">{c.situation}</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-navy">What we did</h2>
              <ul className="mt-4 space-y-2 text-ink/80">
                {c.actions.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-accent mt-2 inline-block h-1 w-3 bg-accent rounded-full flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-navy">Result</h2>
              <ul className="mt-4 space-y-2 text-ink/80">
                {c.outcome.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-accent mt-2 inline-block h-1 w-3 bg-accent rounded-full flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
            {c.quote && (
              <figure className="rule-accent">
                <blockquote className="font-serif text-2xl text-navy leading-snug">
                  “{c.quote.text}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-ink/60">— {c.quote.attribution}</figcaption>
              </figure>
            )}
            <section>
              <h2 className="font-serif text-2xl text-navy">What we would do differently</h2>
              <p className="mt-4 text-ink/80 leading-relaxed">{c.reflection}</p>
            </section>
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
