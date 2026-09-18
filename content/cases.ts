export type CaseStudy = {
  slug: string;
  sector: string;
  service: string;
  year: string;
  duration: string;
  title: string;
  result: string;
  situation: string;
  actions: string[];
  outcome: string[];
  quote?: { text: string; attribution: string };
  reflection?: string;
};

// Case studies are illustrative placeholders, built only from the
// service lines and positioning in the firm profile. Replace with
// real, permissioned engagements before publishing.
export const cases: CaseStudy[] = [
  {
    slug: "ma-due-diligence",
    sector: "[Sector]",
    service: "M&A Due Diligence",
    year: "[Year]",
    duration: "[Duration]",
    title: "[Engagement title — M&A due diligence]",
    result: "[One-line outcome. Replace with the headline result of the engagement.]",
    situation:
      "[Describe the client situation. What was on the table, why the client engaged the firm, and what decision had to be made.]",
    actions: [
      "[Action 1 — what the team did]",
      "[Action 2 — what the team did]",
      "[Action 3 — what the team did]",
    ],
    outcome: [
      "[Outcome 1 — measurable result]",
      "[Outcome 2 — measurable result]",
      "[Outcome 3 — measurable result]",
    ],
    reflection: "[Optional. What the team would do differently next time.]",
  },
  {
    slug: "esg-sustainability",
    sector: "[Sector]",
    service: "Environment, Social & Governance",
    year: "[Year]",
    duration: "[Duration]",
    title: "[Engagement title — ESG strategy and reporting]",
    result: "[One-line outcome. Replace with the headline result of the engagement.]",
    situation:
      "[Describe the client situation. What was on the table, why the client engaged the firm, and what decision had to be made.]",
    actions: [
      "[Action 1 — what the team did]",
      "[Action 2 — what the team did]",
      "[Action 3 — what the team did]",
    ],
    outcome: [
      "[Outcome 1 — measurable result]",
      "[Outcome 2 — measurable result]",
      "[Outcome 3 — measurable result]",
    ],
    reflection: "[Optional. What the team would do differently next time.]",
  },
  {
    slug: "business-transformation",
    sector: "[Sector]",
    service: "Business Transformation",
    year: "[Year]",
    duration: "[Duration]",
    title: "[Engagement title — business transformation]",
    result: "[One-line outcome. Replace with the headline result of the engagement.]",
    situation:
      "[Describe the client situation. What was on the table, why the client engaged the firm, and what decision had to be made.]",
    actions: [
      "[Action 1 — what the team did]",
      "[Action 2 — what the team did]",
      "[Action 3 — what the team did]",
    ],
    outcome: [
      "[Outcome 1 — measurable result]",
      "[Outcome 2 — measurable result]",
      "[Outcome 3 — measurable result]",
    ],
    reflection: "[Optional. What the team would do differently next time.]",
  },
];
