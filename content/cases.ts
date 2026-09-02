export type CaseStudy = {
  slug: string;
  sector: string;
  service: string;
  year: number;
  duration: string;
  title: string;
  result: string;
  situation: string;
  actions: string[];
  outcome: string[];
  quote?: { text: string; attribution: string };
  reflection: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "series-b-saas-repositioning",
    sector: "Software",
    service: "Strategy & Growth",
    year: 2025,
    duration: "12 weeks",
    title: "Repositioning a Series B SaaS for enterprise",
    result: "ARR grew from $9M to $31M in 14 months.",
    situation:
      "Founder-led sales had stalled at $9M ARR. Mid-market customers churned within a year, and enterprise deals slipped a quarter every quarter. The board had begun to lose patience, and a planned Series C had been postponed.",
    actions: [
      "Rebuilt the ideal customer profile from thirty-two customer interviews.",
      "Repriced the platform tier and introduced a usage-based add-on.",
      "Introduced a mutual close plan and rewrote the security questionnaire.",
      "Coached the founder through the first three enterprise negotiations.",
    ],
    outcome: [
      "ARR moved from $9M to $31M in 14 months.",
      "Net dollar retention rose from 104% to 128%.",
      "Series C led by a tier-one growth fund at a 2.4x prior valuation.",
    ],
    quote: {
      text: "They asked three questions in the first meeting that we had been avoiding for a year. That is what we paid for.",
      attribution: "CEO, Series B fintech",
    },
    reflection:
      "We should have started the pricing work two months earlier. The founder was ready before we were.",
  },
  {
    slug: "european-pe-carveout",
    sector: "Private capital",
    service: "Operating Advisory",
    year: 2024,
    duration: "18 weeks",
    title: "A carve-out playbook for a European PE portfolio",
    result: "Time-to-value cut from 18 months to 7 across three carve-outs.",
    situation:
      "A five-company portfolio was carving out non-core divisions with no shared method. Each deal team was reinventing the transition service agreement, the Day-1 plan, and the KPI set. The fund's operating partner asked us to help.",
    actions: [
      "Built a repeatable playbook covering TSA scoping, Day-1 readiness, and value capture.",
      "Coached three deal teams through their first full cycles.",
      "Wrote a short internal handbook the operating partner still uses.",
    ],
    outcome: [
      "Time-to-value cut from 18 months to 7 across three carve-outs.",
      "IT separation cost variance reduced from 40% to under 10%.",
      "The playbook is now the fund's operating standard.",
    ],
    quote: {
      text: "Quiet, fast, and unusually well-prepared.",
      attribution: "Managing Partner, European growth fund",
    },
    reflection:
      "We were too polite on IT separation cost estimates in month one. Push harder next time.",
  },
  {
    slug: "climate-tech-series-a",
    sector: "Climate & energy",
    service: "Capital & Transactions",
    year: 2025,
    duration: "9 weeks",
    title: "Seed-to-Series-A narrative for a climate tech founder",
    result: "Oversubscribed at target. Two term sheets within four weeks.",
    situation:
      "The company had strong science but a weak story. A first fundraise had stalled after fifteen investor meetings without a term sheet. The founder had six months of cash and had begun to doubt the plan.",
    actions: [
      "Reframed the market from 'carbon software' to 'grid-edge risk'.",
      "Rebuilt the financial model with clearer unit economics.",
      "Mapped forty-one target investors and prioritised twelve.",
      "Ran three rehearsal sessions with the founding team.",
    ],
    outcome: [
      "Oversubscribed at target size.",
      "Two term sheets within four weeks of first meetings.",
      "Lead investor is a specialist climate fund the founder had not previously met.",
    ],
    reflection:
      "We should have been more disciplined about which meetings to decline. The middle of the process bled time.",
  },
];
