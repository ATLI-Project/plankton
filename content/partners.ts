export type Partner = {
  slug: string;
  name: string;
  title: string;
  focus: string;
  bio: string;
  credentials?: string[];
  placeholder?: boolean;
};

export const partners: Partner[] = [
  {
    slug: "sena-agbo",
    name: "Sena Agbo",
    title: "Managing Partner",
    focus: "ESG advisory, financial advisory services, and financial sector strategy",
    bio: "Sena is a seasoned financial services professional with extensive experience across the banking and advisory landscape. He has worked with leading institutions including GT Bank, Access Bank, Deloitte, Strategic Initiatives Limited, and SAS Finance Group where he held senior management and Executive Director–level roles. His areas of expertise include ESG advisory, financial advisory services, investment research, asset management, fixed income and equity securities trading, business analysis, banking performance review, and business process re-engineering. Sena holds a Master of Arts (MA) degree in Economic Policy Management and a Bachelor of Arts (BA) degree in Economics, both from the University of Ghana.",
    credentials: [
      "MA, Economic Policy Management — University of Ghana",
      "BA, Economics — University of Ghana",
    ],
  },
  {
    slug: "team-member-two",
    name: "[Partner Name]",
    title: "Partner",
    focus: "[Practice area, e.g. Corporate Strategy or M&A]",
    bio: "[Short bio. Background, previous institutions, areas of expertise, and academic credentials. Replace this text with the partner's profile.]",
    placeholder: true,
  },
  {
    slug: "team-member-three",
    name: "[Partner Name]",
    title: "Partner",
    focus: "[Practice area, e.g. Business Transformation or Risk]",
    bio: "[Short bio. Background, previous institutions, areas of expertise, and academic credentials. Replace this text with the partner's profile.]",
    placeholder: true,
  },
];
