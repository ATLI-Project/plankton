import Link from "next/link";

const services = [
  {
    title: "Strategy & Growth",
    body: "Positioning, market entry, and pricing work for teams past product-market fit but before scale.",
    href: "/services#strategy",
  },
  {
    title: "Capital & Transactions",
    body: "Fundraise preparation, investor narrative, and sell-side support for founders navigating a first meaningful round or exit.",
    href: "/services#capital",
  },
  {
    title: "Operating Advisory",
    body: "Interim leadership, board work, and post-investment value creation with private equity and venture partners.",
    href: "/services#operating",
  },
];

export default function ServicesGrid() {
  return (
    <section className="container-wide py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link key={s.title} href={s.href} className="card no-underline group">
            <div className="flex items-start justify-between">
              <div className="h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-teal" />
              </div>
              <span className="text-navy/40 group-hover:text-teal transition">→</span>
            </div>
            <h3 className="mt-6 font-serif text-2xl text-navy">{s.title}</h3>
            <p className="mt-3 text-navy/70 text-sm leading-relaxed">{s.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
