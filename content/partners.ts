export type Partner = {
  slug: string;
  name: string;
  title: string;
  focus: string;
  bio: string;
  outside?: string;
  credentials?: string[];
};

export const partners: Partner[] = [
  {
    slug: "sena-agbo",
    name: "Sena Agbo",
    title: "Team Lead",
    focus: "M&A, ESG advisory, and financial sector strategy",
    bio: "Sena is a seasoned financial services professional with extensive experience across the banking and advisory landscape. He has held senior management and Executive Director–level roles at leading institutions including GT Bank, Access Bank, Deloitte, Strategic Initiatives Limited, and SAS Finance Group. His areas of expertise span ESG advisory, financial advisory services, investment research, asset management, fixed income and equity securities trading, business analysis, banking performance review, and business process re-engineering.",
    credentials: [
      "MA, Economic Policy Management — University of Ghana",
      "BA, Economics — University of Ghana",
    ],
  },
];
