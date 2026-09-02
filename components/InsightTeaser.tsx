import Link from "next/link";
import { insights } from "@/content/insights";
import { formatDate } from "@/lib/format";

export default function InsightTeaser() {
  const latest = insights.slice(0, 3);
  return (
    <section className="container-wide py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="eyebrow">From the journal</div>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-navy tracking-tightish">
            Short, written thinking.
          </h2>
        </div>
        <Link href="/insights" className="btn-ghost hidden md:inline-flex no-underline">
          All insights
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {latest.map((p) => (
          <Link key={p.slug} href={`/insights/${p.slug}`} className="card no-underline group">
            <div className="text-xs text-navy/50">
              {formatDate(p.date)} · {p.readingTime}
            </div>
            <h3 className="mt-3 font-serif text-xl text-navy group-hover:text-teal transition">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-navy/70 leading-relaxed">{p.dek}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
