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
    slug: "three-questions-pricing",
    title: "The three questions a Series B board should ask about pricing",
    dek: "If you have not asked these in the last quarter, you are probably leaving margin on the table.",
    date: "2026-07-30",
    readingTime: "6 min",
    tags: ["Strategy", "Pricing"],
    body: `Most Series B boards spend eight minutes a quarter on pricing. It is usually the wrong eight minutes. The conversation gets stuck on discount discipline, which is a symptom, not a lever.

Here are the three questions we suggest instead.

**One. What are our best customers actually buying?**

Not what the product page says. What the buyer told their boss when they asked for budget. If the sales team cannot answer this in one sentence per segment, the pricing page is fiction.

**Two. Where is our willingness-to-pay curve steepest?**

There is almost always a feature or usage tier that customers value out of proportion to its cost to serve. Finding it is a research exercise, not a spreadsheet exercise. Thirty customer interviews will tell you more than a year of win-loss data.

**Three. What would we charge if we launched today?**

The honest answer is almost always higher than the current list price. The gap between those two numbers is the size of the pricing debt you are carrying. Paying it down is a project, not a decision.`,
  },
  {
    slug: "carveout-timelines-lie",
    title: "Carve-out timelines are lying to you",
    dek: "Why the standard 100-day plan is the wrong unit of analysis.",
    date: "2026-06-18",
    readingTime: "8 min",
    tags: ["Private capital", "Operating"],
    body: `The 100-day plan is a comforting artefact. It has a beginning, a middle, and an end. It fits on one page. It is also, in most carve-outs we have seen, a fiction.

The real unit of analysis is the transition service agreement. Every dependency on the seller's IT, finance, HR, or procurement systems is a clock. When that clock runs out, either you have built the replacement or you are paying the seller to keep the lights on at rates that were negotiated when you had no leverage.

Three suggestions from the last eight carve-outs we have worked on.

First, map every TSA line item to a system owner on Day 1. Not a workstream. A person. Second, price the cost of extension for each line item in the base case, not the downside case. Third, keep a running weekly view of the ten highest-risk dependencies. If that list is not on the operating partner's desk every Monday, it will surprise you in month nine.`,
  },
  {
    slug: "boring-investor-update",
    title: "A short defence of the boring investor update",
    dek: "What high-signal monthly notes actually look like.",
    date: "2026-05-08",
    readingTime: "5 min",
    tags: ["Founders", "Communication"],
    body: `We read a lot of investor updates. Most of them are performances. The good ones are boring.

A boring update has four sections. What we said we would do. What we did. What surprised us. What we need. In that order. No design work. No emoji. No pull quotes from customers.

The reason is simple. The people reading the update have thirty of them in their inbox. They are looking for signal about whether you are the kind of founder who keeps their promises and notices when reality diverges from the plan. A boring update answers that question in ninety seconds. A polished one does not.`,
  },
  {
    slug: "narratives-that-survive-term-sheets",
    title: "Founder narratives that survive contact with a term sheet",
    dek: "Structure over storytelling.",
    date: "2026-03-22",
    readingTime: "7 min",
    tags: ["Fundraising", "Capital"],
    body: `The best pitch narratives are the ones that survive due diligence. Storytelling is not the point. Structural integrity is.

We use a five-part frame with founders preparing a Series A or B. The market that is changing. The pain that is worth solving now. The wedge you have that no one else has. The system you are building on top of that wedge. The reason the next dollar of capital compounds.

If any one of those five sentences is soft, a partner in a diligence call will find it. The right time to notice is before the meeting, not after the term sheet is retracted.`,
  },
  {
    slug: "fractional-cfo-tests",
    title: "When to hire a fractional CFO, and when not to",
    dek: "Three tests before you post the job.",
    date: "2026-02-04",
    readingTime: "4 min",
    tags: ["Operating", "Founders"],
    body: `Every founder we meet between Series A and B is thinking about a fractional CFO. Most of them should wait a quarter. Some of them should hire full-time. A few should genuinely hire fractional.

Three tests.

One. Is the problem you are solving accounting hygiene or capital allocation? A good bookkeeper and a controller solve the first. A fractional CFO is overkill.

Two. Will the person be in the room when the board debates the next raise? If the answer is no, you are hiring a controller with a nicer title.

Three. Do you have two days a week of real CFO work? Not aspirational work. Real work. If you do not, the fractional will drift toward the work you do have, which is usually the wrong work for them.`,
  },
];
