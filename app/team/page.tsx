import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { team } from "@/content/team";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Our team"
        dek="The people who lead and deliver our mandates."
      />

      <section className="container-wide py-16 space-y-20">
        {team.map((m) => (
          <article key={m.slug} className="border-b border-line pb-20 last:border-0 last:pb-0">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                {/* Photo placeholder — replace with a professional headshot */}
                <div className="aspect-[4/5] rounded-lg relative overflow-hidden bg-navy border border-navy">
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      backgroundImage:
                        "radial-gradient(320px 240px at 60% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(300px 240px at 20% 80%, rgba(227,32,36,0.35), transparent 60%)",
                    }}
                  />
                  <div className="absolute top-4 left-4 h-1 w-10 bg-accent rounded-full" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="eyebrow text-white/80">{m.title}</div>
                    <div className="font-serif text-2xl">{m.name}</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8">
                <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-tightish">
                  {m.name}, {m.title}
                </h2>
                <p className="mt-5 text-lg text-ink/80 leading-relaxed">{m.bio}</p>

                {m.career && m.career.length > 0 && (
                  <div className="mt-10">
                    <div className="eyebrow">Career</div>
                    <ul className="mt-4 space-y-3">
                      {m.career.map((c, i) => (
                        <li key={i} className="grid md:grid-cols-12 gap-2 text-sm">
                          <span className="md:col-span-5 text-navy font-medium">{c.org}</span>
                          {c.role && <span className="md:col-span-7 text-ink/70">{c.role}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {m.transactions && m.transactions.length > 0 && (
                  <div className="mt-10">
                    <div className="eyebrow">Selected transactions</div>
                    <ul className="mt-4 space-y-2 text-sm text-ink/80">
                      {m.transactions.map((t) => (
                        <li key={t} className="flex gap-3">
                          <span className="text-accent mt-2 inline-block h-1 w-3 bg-accent rounded-full flex-shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {m.board && m.board.length > 0 && (
                  <div className="mt-10">
                    <div className="eyebrow">Board and governance</div>
                    <ul className="mt-4 space-y-2 text-sm text-ink/80">
                      {m.board.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="text-accent mt-2 inline-block h-1 w-3 bg-accent rounded-full flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-10 grid md:grid-cols-2 gap-10">
                  {m.expertise && m.expertise.length > 0 && (
                    <div>
                      <div className="eyebrow">Areas of expertise</div>
                      <ul className="mt-4 space-y-2 text-sm text-ink/80">
                        {m.expertise.map((e) => (
                          <li key={e}>· {e}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {m.education && m.education.length > 0 && (
                    <div>
                      <div className="eyebrow">Education</div>
                      <ul className="mt-4 space-y-2 text-sm text-ink/80">
                        {m.education.map((e) => (
                          <li key={e}>· {e}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-cream border-y border-line">
        <div className="container-wide py-16">
          <div className="eyebrow">Specialist associates</div>
          <p className="mt-4 text-lg text-ink/80 leading-relaxed max-w-3xl">
            For larger mandates we bring in specialist associates in valuation, legal and regulatory matters, tax, technology and specific sectors, working under one engagement partner as a single team.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
