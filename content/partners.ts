export type Partner = {
  slug: string;
  name: string;
  title: string;
  focus: string;
  bio: string;
  outside: string;
};

export const partners: Partner[] = [
  {
    slug: "ana-rowe",
    name: "Ana Rowe",
    title: "Managing Partner",
    focus: "Enterprise SaaS and go-to-market",
    bio: "I spent a decade inside two large advisory firms before starting Plankton Partners with Kenji and Iris in 2019. Most of my work sits with founders between Series B and Series D, where the growth plan that got them here quietly stops working. I care about pricing, segmentation, and the boring parts of enterprise sales that determine whether a company crosses fifty million ARR or stalls.",
    outside: "Long-distance running and a small collection of first-edition cookbooks.",
  },
  {
    slug: "kenji-whitfield",
    name: "Kenji Whitfield",
    title: "Partner",
    focus: "Private capital and transactions",
    bio: "I work with founders raising meaningful rounds and with funds preparing exits. Before Plankton I led transaction advisory in London and Tokyo. My view is that most fundraise problems are narrative problems in disguise, and most exit problems are diligence problems that should have been solved a year earlier.",
    outside: "Bouldering and choral music.",
  },
  {
    slug: "iris-ademola",
    name: "Iris Ademola",
    title: "Partner",
    focus: "Operating advisory and interim leadership",
    bio: "I step into portfolio companies for a quarter or two when the seat needs a steadier hand. I am usually a fractional CFO or COO. My job is to stabilise the operating model, hire my replacement, and leave a clean handover. I have done this fourteen times. It has worked twelve.",
    outside: "Sailing, and a stubborn attempt to learn Portuguese.",
  },
];
