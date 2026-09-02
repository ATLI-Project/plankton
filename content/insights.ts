export type Insight = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: string;
};

export const insights: Insight[] = [
  {
    slug: "diligence-that-changes-the-deal",
    title: "Due diligence that changes the shape of the deal",
    dek: "Why the best M&A diligence work is priced into the transaction, not filed after it.",
    date: "2026-08-14",
    readingTime: "7 min",
    tags: ["M&A", "Advisory"],
    body: `Most M&A due diligence reports are read once and archived. The good ones are not. The good ones change the shape of the deal — the price, the structure, the reps and warranties, the Day-1 integration plan — before anything is signed.

Three habits separate the two.

**One. Ask the questions the seller does not want asked.**

The information memorandum is a marketing document. It is designed to answer the questions that make the target look good. Decision-grade diligence starts from the opposite premise — the two or three questions that, if answered honestly, would change the price. Get to those first.

**Two. Rebuild the numbers.**

Accepting the seller's quality-of-earnings analysis is a decision, not a shortcut. Normalise three years of results yourself. Strip out non-recurring items. Test the working capital assumption against seasonality. The exercise almost always moves the number, and it always changes the conversation.

**Three. Cost the integration in the base case, not the downside.**

Buyers routinely price integration as a downside adjustment. Sellers routinely price it as zero. Neither is right. Model the integration cost in the base case, with owners and dates, and the negotiation becomes an argument about facts rather than adjectives.`,
  },
  {
    slug: "esg-becomes-capital-markets-story",
    title: "When ESG becomes a capital markets story",
    dek: "The disclosure work is the easy part. The financing consequences are the point.",
    date: "2026-07-02",
    readingTime: "6 min",
    tags: ["Sustainability", "ESG", "Capital"],
    body: `For most of the last decade, ESG in emerging markets was a compliance conversation. It is now a capital markets conversation. Lenders price it. Offtakers demand it. Regulators are moving from voluntary to mandatory disclosure on a compressed timeline.

That shift changes what a credible ESG programme has to do.

**One. Materiality has to be double.**

The old question — which ESG issues affect enterprise value — is still necessary. It is no longer sufficient. Under IFRS S1/S2, GRI, and most development finance frameworks, boards are expected to also disclose the outward impact of the business on people and environment. Double materiality is the standard, not a nice-to-have.

**Two. Data infrastructure precedes reporting.**

A sustainability report is only as credible as the systems underneath it. Scope 1 and 2 emissions are usually solvable in a quarter. Scope 3, supply chain metrics, and social indicators are not. The right sequence is to build the data spine first and publish second. The reverse sequence is where most restatements come from.

**Three. Tie the strategy to the balance sheet.**

The ESG programmes that survive management changes are the ones tied to concrete financing outcomes — a re-priced facility, a sustainability-linked loan, a green bond, a lower cost of capital on a specific project. Boards fund what pays back. ESG strategies without a financing thesis quietly lose sponsors.`,
  },
  {
    slug: "strategy-refresh-not-strategy-rewrite",
    title: "Refresh the strategy. Do not rewrite it.",
    dek: "Most corporate strategies fail from over-correction, not from staleness.",
    date: "2026-05-19",
    readingTime: "5 min",
    tags: ["Strategy", "Boards"],
    body: `Every five years, most executive teams face a choice. Refresh the strategy or rewrite it. The rewrite is more exciting. It is also, in most cases, the wrong answer.

A refresh keeps the two or three commitments that built the franchise and revisits everything else. It asks what has changed in the market, what has changed in the customer base, and what has changed in the capabilities of the firm. It updates the plan without breaking the compounding.

A rewrite discards the commitments and starts from a blank page. It is the right answer when the market has moved so far that the old plan cannot be salvaged. That happens. It happens less often than boards think.

Two tests before you commit to a rewrite.

First, are the customers who built the franchise still buying? If yes, the compounding is intact. Refresh. Second, is the operating model still capable of delivering the current plan on time and on budget? If yes, the machinery is intact. Refresh.

If either answer is no, the rewrite is honest work. If both answers are yes, the rewrite is theatre.`,
  },
  {
    slug: "risk-management-that-earns-its-seat",
    title: "Risk management that earns its seat at the table",
    dek: "The risk function stops being a cost centre when it changes decisions.",
    date: "2026-04-08",
    readingTime: "6 min",
    tags: ["Risk", "Governance"],
    body: `Most risk functions are measured on the things they file. The good ones are measured on the decisions they change.

Three shifts we recommend to boards.

One. Move the risk conversation upstream. If the risk committee sees a proposal after the investment committee has approved it, the conversation is a formality. Bring risk into the framing of the option, not the review of the recommendation.

Two. Retire risk registers that no one reads. Every risk function has a register. Most of them are wallpaper. Replace them with a short weekly view of the ten decisions the firm is currently making and the two or three risks that materially shape each one.

Three. Reward the function for saying no well. A risk team that has never blocked an executive decision is either miscalibrated or unheard. A risk team that blocks the wrong ones burns credibility. Neither is what you want. Reward the ones that make the harder judgement calls and can defend them in writing.`,
  },
  {
    slug: "business-transformation-without-the-theatre",
    title: "Business transformation without the theatre",
    dek: "Most transformation programmes fail on execution discipline, not on ambition.",
    date: "2026-02-25",
    readingTime: "5 min",
    tags: ["Transformation", "Operating"],
    body: `Transformation programmes tend to fail in predictable ways. The ambition is oversold, the accountability is diffuse, and the reporting is designed to reassure rather than inform. By month nine, the programme is a slide deck no one reads.

Three disciplines that keep the work honest.

One. Name one accountable executive per workstream. Not a steering committee. Not a working group. One person whose bonus depends on the outcome.

Two. Publish a weekly one-page view. Green, amber, red on the five milestones that matter this month. If everything is green every week, the reporting is broken, not the programme.

Three. Kill the workstreams that stop compounding. Not every initiative deserves to survive to year two. A transformation programme that never closes a workstream is a hoarding operation, not a change effort.`,
  },
];
