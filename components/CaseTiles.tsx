import Link from "next/link";
import { cases } from "@/content/cases";

export default function CaseTiles() {
  const highlights = cases.slice(0, 3);
  return (
    <section className="container-wide py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">Selected work</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy tracking-tightish">
            A few of the engagements we can talk about.
          </h2>
        </div>
        <Link href="/work" className="btn-ghost hidden md:inline-flex no-underline">
          All case studies
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="group no-underline block">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-navy border border-navy">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(500px 260px at 30% 40%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(320px 220px at 80% 70%, rgba(227,32,36,0.35), transparent 60%)",
                }}
              />
              <div className="absolute top-4 left-4 h-1 w-10 bg-accent rounded-full" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="eyebrow text-white/80">{c.sector}</div>
                <div className="mt-1 text-sm text-white/80">
                  {c.duration} · {c.year}
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="font-serif text-xl text-navy group-hover:text-accent transition tracking-tightish">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{c.result}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
