import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { partners } from "@/content/partners";
import { site } from "@/lib/site";

const values = [
  { t: "Small teams, senior work", b: "The partners do the work. Every engagement, every week." },
  { t: "Written thinking", b: "Every recommendation is written down. Verbal advice is not advice." },
  { t: "Confidentiality first", b: "We do not name clients without written permission." },
  { t: "The client comes back", b: "Roughly seven in ten clients hire us again within two years." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A partner-owned firm, on purpose."
        dek="We started Plankton Partners in 2019 because we wanted to work on fewer things, more carefully, with clients we chose."
      />

      <section className="container-wide pb-16 grid md:grid-cols-4 gap-6">
        {values.map((v) => (
          <div key={v.t} className="border-t border-navy/10 pt-5">
            <h3 className="font-serif text-lg text-navy">{v.t}</h3>
            <p className="mt-2 text-sm text-navy/70 leading-relaxed">{v.b}</p>
          </div>
        ))}
      </section>

      <section className="container-wide py-12">
        <div className="eyebrow">The partners</div>
        <h2 className="mt-3 font-serif text-3xl md:text-5xl text-navy tracking-tightish">
          Three people. No pyramid.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {partners.map((p) => (
            <article key={p.slug}>
              <div className="aspect-[4/5] rounded-2xl relative overflow-hidden bg-gradient-to-b from-navy/90 to-navy/60">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(200px 200px at 60% 30%, rgba(19,168,158,0.35), transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 text-foam">
                  <div className="eyebrow text-teal">{p.title}</div>
                  <div className="font-serif text-2xl">{p.name}</div>
                </div>
              </div>
              <div className="mt-5 text-sm text-navy/60">{p.focus}</div>
              <p className="mt-4 text-navy/80 leading-relaxed">{p.bio}</p>
              <p className="mt-4 text-sm text-navy/50 italic">Outside work: {p.outside}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/50 mt-16">
        <div className="container-wide py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="eyebrow">Firm facts</div>
            <ul className="mt-4 space-y-2 text-navy/80 text-sm">
              <li>Founded {site.founded}</li>
              <li>Headquartered in {site.offices[0]}, with partners in {site.offices.slice(1).join(" and ")}</li>
              <li>100% partner-owned</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Scale</div>
            <ul className="mt-4 space-y-2 text-navy/80 text-sm">
              <li>25–30 engagements per year</li>
              <li>Active clients capped at {site.activeCap}</li>
              <li>Eleven countries served</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Governance</div>
            <ul className="mt-4 space-y-2 text-navy/80 text-sm">
              <li>Independent audit committee since 2022</li>
              <li>Written conflict-of-interest policy, reviewed annually</li>
              <li>Carbon-neutral operations from 2024</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
