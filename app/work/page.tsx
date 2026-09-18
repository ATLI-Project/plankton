import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { cases } from "@/content/cases";

export const metadata = { title: "Selected work" };

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="A small, mostly quiet body of work."
        dek="Illustrative engagements across our practice areas. Client identities are anonymised unless we have written permission to name them. Replace these placeholders with real, approved case studies before publishing."
      />
      <section className="container-wide py-16 grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="group no-underline block">
            <div className="aspect-[16/10] rounded-lg overflow-hidden relative bg-navy border border-navy">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(500px 260px at 30% 40%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(320px 220px at 80% 70%, rgba(227,32,36,0.35), transparent 60%)",
                }}
              />
              <div className="absolute top-4 left-4 h-1 w-10 bg-accent rounded-full" />
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <div className="eyebrow text-white/80">{c.sector}</div>
                  <div className="mt-1 text-sm text-white/80">
                    {c.service} · {c.duration} · {c.year}
                  </div>
                </div>
                <span className="text-white/70 group-hover:text-white transition">→</span>
              </div>
            </div>
            <h2 className="mt-6 font-serif text-2xl md:text-3xl text-navy tracking-tightish group-hover:text-accent transition">
              {c.title}
            </h2>
            <p className="mt-2 text-ink/70">{c.result}</p>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
