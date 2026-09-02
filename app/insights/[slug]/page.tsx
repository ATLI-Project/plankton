import { notFound } from "next/navigation";
import Link from "next/link";
import { insights } from "@/content/insights";
import { formatDate } from "@/lib/format";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = insights.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: p.title, description: p.dek };
}

function renderBody(body: string) {
  return body.split(/\n\n+/).map((block, i) => {
    const bold = block.match(/^\*\*(.+)\*\*$/);
    if (bold) {
      return (
        <h3 key={i} className="mt-10 font-serif text-xl text-navy">
          {bold[1]}
        </h3>
      );
    }
    const parts = block.split(/(\*\*[^*]+\*\*)/g).map((piece, j) => {
      const m = piece.match(/^\*\*(.+)\*\*$/);
      if (m) return <strong key={j} className="text-navy">{m[1]}</strong>;
      return <span key={j}>{piece}</span>;
    });
    return (
      <p key={i} className="mt-5 text-ink/80 leading-relaxed">
        {parts}
      </p>
    );
  });
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const p = insights.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <>
      <article className="container-prose pt-20 pb-16">
        <Link href="/insights" className="text-sm text-ink/60 no-underline hover:text-navy">← All insights</Link>
        <div className="mt-6 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-accent" />
          <span className="eyebrow">{p.tags.join(" · ")}</span>
        </div>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl text-navy tracking-tightish leading-tight">
          {p.title}
        </h1>
        <p className="mt-4 text-ink/60 text-sm">
          {formatDate(p.date)} · {p.readingTime}
        </p>
        <p className="mt-8 font-serif text-2xl text-ink/80 italic leading-snug">{p.dek}</p>
        <div className="mt-10 border-t border-line pt-6">
          {renderBody(p.body)}
        </div>
      </article>
      <CTA />
    </>
  );
}
