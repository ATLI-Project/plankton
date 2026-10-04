export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  photo?: string;
  career?: { org: string; role: string }[];
  transactions?: string[];
  board?: string[];
  expertise?: string[];
  education?: string[];
  placeholder?: boolean;
};

export const team: TeamMember[] = [
  {
    slug: "sena-agbo",
    name: "Sena Agbo",
    title: "Managing Partner",
    bio: "Sena Agbo has more than 18 years' experience in investment banking, across structured finance, M&A, securities advisory and capital markets, with a transaction record exceeding US$1.3 billion across Sub-Saharan Africa. He has advised governments, companies and financial institutions on sovereign and corporate debt, acquisitions, infrastructure financing and balance sheet restructuring.",
    career: [
      { org: "Plankton Partners", role: "Managing Partner, 2026 to present" },
      { org: "SAS Finance Group (Strategic African Securities)", role: "Executive Director, [dates]" },
      { org: "Strategic Initiatives Limited", role: "Director, Strategy & Investments, [dates]" },
      { org: "Deloitte", role: "[Role], [dates]" },
      { org: "Access Bank", role: "[Role], [dates]" },
      { org: "GT Bank", role: "[Role], [dates]" },
    ],
    transactions: [
      "Government of Ghana Adinkra Bond Programme (US$7bn+), Joint Book Runner",
      "US$550 million multi-country infrastructure financing",
      "US$470 million takeover of Golden Star Resources",
      "c.US$245 million receivables discounting facility for Cenpower Generation, co-arranger",
      "Acquisition of the Prestea-Bogoso mine by Heath Goldfields, Lead Transaction Advisor (2025)",
    ],
    board: [
      "Chairman, Credit and Risk Committee, Agave Rural Bank",
      "Has served on five governance boards concurrently",
    ],
    expertise: [
      "Corporate and structured finance",
      "Infrastructure and project finance",
      "Mergers and acquisitions",
      "Debt and equity capital markets",
      "ESG and sustainable finance",
      "Bank strategy, governance and risk",
    ],
    education: [
      "MSc, Economic Policy Management, University of Ghana",
      "BA, Economics, University of Ghana",
    ],
  },
  {
    slug: "team-member",
    name: "[Team member name]",
    title: "[Title]",
    bio: "[Profile: two or three sentences on experience, sectors and the work this person leads.]",
    career: [{ org: "[Career: previous roles and organisations]", role: "" }],
    education: ["[Education and professional qualifications]"],
    placeholder: true,
  },
];
