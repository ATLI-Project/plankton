import Link from "next/link";
import { cases } from "@/content/cases";

export default function CaseTiles() {
  const highlights = cases.slice(0, 3);
  return (
    <section className="container-wide py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="eyebrow">Selected work</div>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-navy tracking-tightish">
            A few of the engagements we can talk about.
          </h2>
        </div>
        <Link href="/work" className="btn-ghost hidden md:inline-flex no-underline">
          All case studies
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="group no-underline">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-gradient-to-br from-navy to-navy/70">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(400px 200px at 30% 40%, rgba(19,168,158,0.35), transparent 60%), radial-gradient(300px 200px at 80% 70%, rgba(233,228,216,0.15), transparent 60%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 text-foam">
                <div className="eyebrow text-teal">{c.sector}</div>
                <div className="mt-1 text-sm text-foam/80">{c.duration} · {c.year}</div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="font-serif text-xl text-navy group-hover:text-teal transition tracking-tightish">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-navy/70">{c.result}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
