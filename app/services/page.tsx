import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const practices = [
  {
    id: "strategy",
    title: "Strategy & Growth",
    fit: "You have real revenue, real customers, and a growing suspicion that the next chapter needs a different plan.",
    do: [
      "Market segmentation and ICP sharpening",
      "Pricing and packaging",
      "Go-to-market redesign",
      "Competitive positioning",
      "Board-ready growth plans",
    ],
    dont: [
      "Slide factories",
      "Ninety-day frameworks with no owners",
      "Deliverables no one uses after we leave",
    ],
    length: "8 to 14 weeks, two to three partners, weekly working sessions with the executive team.",
  },
  {
    id: "capital",
    title: "Capital & Transactions",
    fit: "You are preparing a Series A through C, a secondary, a strategic sale, or a fund raise.",
    do: [
      "Investor narrative and materials",
      "Financial model review",
      "Data room construction",
      "Buyer or LP mapping",
      "Rehearsal and negotiation coaching",
      "Term sheet interpretation",
    ],
    dont: [
      "Regulated broker activity",
      "Work that duplicates your bankers or lawyers",
    ],
    length: "6 to 20 weeks, tied to process milestones.",
  },
  {
    id: "operating",
    title: "Operating Advisory",
    fit: "A portfolio company needs a steadier hand for two quarters, or a board needs a partner who will actually read the pack.",
    do: [
      "Interim CFO, COO, or CRO cover",
      "Value creation planning",
      "100-day plans",
      "KPI redesign",
      "Board effectiveness reviews",
    ],
    dont: ["Permanent placements — we stabilise, transfer, and step back."],
    length: "One to two quarters, with a written handover.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Three practices. One standard."
        dek="We take on work where a small, senior team can change the trajectory of a company or a fund."
      />
      <section className="container-wide pb-16 space-y-20">
        {practices.map((p, i) => (
          <div key={p.id} id={p.id} className="grid md:grid-cols-12 gap-10 scroll-mt-24">
            <div className="md:col-span-4">
              <div className="text-teal font-serif text-6xl">0{i + 1}</div>
              <h2 className="mt-4 font-serif text-3xl text-navy tracking-tightish">{p.title}</h2>
              <p className="mt-4 text-sm text-navy/70 leading-relaxed">
                <span className="text-navy font-medium">When it fits.</span> {p.fit}
              </p>
              <p className="mt-6 text-xs text-navy/50">{p.length}</p>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="eyebrow">What we do</div>
                <ul className="mt-4 space-y-2 text-sm text-navy/80">
                  {p.do.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-teal">—</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <div className="eyebrow">What we do not</div>
                <ul className="mt-4 space-y-2 text-sm text-navy/60">
                  {p.dont.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-navy/30">—</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
      <CTA
        title="Not sure which one fits? Send a paragraph. We reply within two business days."
        cta="Send a note"
      />
    </>
  );
}
