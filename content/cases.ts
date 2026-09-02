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
    slug: "financial-services-ma-due-diligence",
    sector: "Financial services",
    service: "M&A Advisory",
    year: 2026,
    duration: "10 weeks",
    title: "Buy-side due diligence for a West African financial services acquisition",
    result: "Repriced the transaction and secured a cleaner post-close integration path.",
    situation:
      "A regional financial group was evaluating the acquisition of a mid-sized institution across multiple markets. The seller's information memorandum overstated recurring earnings and understated integration risk. The acquirer needed an independent, decision-grade view before submitting a binding offer.",
    actions: [
      "Ran commercial, financial, and operational due diligence in parallel workstreams.",
      "Rebuilt the target's quality-of-earnings analysis and normalised three years of results.",
      "Mapped regulatory, credit, and technology integration risks with quantified mitigations.",
      "Coached the deal team through negotiation of price adjustments and reps and warranties.",
    ],
    outcome: [
      "Headline price adjusted downward in line with the quality-of-earnings findings.",
      "Escrow and indemnity structure rebuilt to reflect identified risks.",
      "Day-1 integration plan agreed with the seller before signing.",
    ],
    quote: {
      text: "Their diligence changed the shape of the deal. We paid a fair price, not the asking one.",
      attribution: "Managing Director, acquirer",
    },
    reflection:
      "We should have flagged the technology separation cost earlier. It became the largest single line in the revised bid.",
  },
  {
    slug: "esg-strategy-manufacturing",
    sector: "Manufacturing",
    service: "Sustainability & ESG",
    year: 2025,
    duration: "14 weeks",
    title: "Building an ESG strategy and disclosure framework for a manufacturer",
    result: "A board-approved ESG strategy, materiality assessment, and first sustainability report.",
    situation:
      "A large manufacturing group faced growing pressure from lenders, offtakers, and regulators to demonstrate credible environmental and social performance. Internal ESG work was fragmented across functions, and there was no single narrative the board could stand behind.",
    actions: [
      "Facilitated a double materiality assessment across twenty-two stakeholder groups.",
      "Benchmarked disclosure practice against IFRS S1/S2, GRI, and sector-specific standards.",
      "Set baseline metrics for Scope 1, 2, and material Scope 3 emissions.",
      "Wrote the first sustainability report and the board's ESG policy suite.",
    ],
    outcome: [
      "Board-approved ESG strategy aligned to group corporate strategy.",
      "First externally assured sustainability report published within nine months.",
      "Two development finance facilities re-priced on the strength of the new disclosures.",
    ],
    quote: {
      text: "They translated ESG from a compliance exercise into a capital markets story.",
      attribution: "Group CFO",
    },
    reflection:
      "We would spend more time on data infrastructure at the outset. Reporting is only as credible as the systems underneath it.",
  },
  {
    slug: "corporate-strategy-refresh",
    sector: "Financial services",
    service: "Corporate Strategy",
    year: 2025,
    duration: "12 weeks",
    title: "Strategy refresh for a financial institution entering a new growth cycle",
    result: "A five-year plan, revised operating model, and reprioritised investment portfolio.",
    situation:
      "A financial institution had grown quickly on the back of a small number of products and a narrow customer base. Growth had begun to plateau and the executive team wanted a defensible plan for the next five years without abandoning the businesses that had built the franchise.",
    actions: [
      "Ran a structured market and competitor analysis across three candidate growth vectors.",
      "Rebuilt the customer segmentation from primary research and internal data.",
      "Modelled the investment case for each growth option under three macro scenarios.",
      "Rewrote the operating model and KPI set to align execution with the chosen plan.",
    ],
    outcome: [
      "Board-approved five-year strategy with clear owners and stage gates.",
      "Investment portfolio reprioritised, freeing capital for the two highest-return options.",
      "Executive incentives realigned to the new KPI set within a quarter.",
    ],
    reflection:
      "We would have brought the risk function into the growth-option modelling sooner. Their input shaped the final plan more than we expected.",
  },
];
