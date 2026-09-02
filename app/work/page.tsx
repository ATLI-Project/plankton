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
        dek="Illustrative engagements across our practice areas. Client identities are anonymised unless we have written permission to name them."
      />
      <section className="container-wide pb-24 grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="group no-underline">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative bg-gradient-to-br from-navy to-navy/70">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(500px 260px at 30% 40%, rgba(19,168,158,0.35), transparent 60%), radial-gradient(320px 220px at 80% 70%, rgba(233,228,216,0.15), transparent 60%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 text-foam flex items-end justify-between">
                <div>
                  <div className="eyebrow text-teal">{c.sector}</div>
                  <div className="mt-1 text-sm text-foam/80">
                    {c.service} · {c.duration} · {c.year}
                  </div>
                </div>
                <span className="text-foam/70 group-hover:text-white transition">→</span>
              </div>
            </div>
            <h2 className="mt-6 font-serif text-2xl md:text-3xl text-navy tracking-tightish group-hover:text-teal transition">
              {c.title}
            </h2>
            <p className="mt-2 text-navy/70">{c.result}</p>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
