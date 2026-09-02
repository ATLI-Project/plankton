import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { insights } from "@/content/insights";
import { formatDate } from "@/lib/format";

export const metadata = { title: "Insights" };

export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Short, written thinking."
        dek="Long enough to be useful. Short enough to finish."
      />
      <section className="container-wide pb-24">
        <ul className="divide-y divide-navy/10 border-t border-navy/10">
          {sorted.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/insights/${p.slug}`}
                className="grid md:grid-cols-12 gap-6 py-8 group no-underline"
              >
                <div className="md:col-span-3 text-sm text-navy/60">
                  <div>{formatDate(p.date)}</div>
                  <div className="mt-1">{p.readingTime}</div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider rounded-full bg-navy/5 px-2 py-0.5 text-navy/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-tightish group-hover:text-teal transition">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-navy/70">{p.dek}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CTA
        title="A short note every other Thursday. No filler."
        cta="Subscribe"
        href="#subscribe"
      />
    </>
  );
}
