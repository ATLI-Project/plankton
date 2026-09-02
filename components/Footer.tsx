import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 bg-white border-t border-line">
      {/* Accent hairline in brand red */}
      <div className="h-[3px] w-full bg-accent" />
      <div className="container-wide py-16 grid gap-12 md:grid-cols-4">
        <div>
          <Image
            src="/brand/plankton-partners-logo.png"
            alt={site.name}
            width={220}
            height={64}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-ink/70 max-w-xs">
            Management consultants and financial advisors. Reliable advice on the decisions that shape your business.
          </p>
          <p className="mt-6 text-sm text-ink/70">
            {site.address.postal}
          </p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${site.email.general}`} className="text-navy hover:text-accent no-underline font-medium">
              {site.email.general}
            </a>
          </p>
          <p className="mt-1 text-sm text-ink/70">{site.phone}</p>
        </div>

        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/80 hover:text-navy no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/work" className="text-ink/80 hover:text-navy no-underline">Case studies</Link>
            </li>
            <li>
              <Link href="/careers" className="text-ink/80 hover:text-navy no-underline">Careers</Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink/80 hover:text-navy no-underline">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Insights</div>
          <p className="mt-4 text-sm text-ink/80 max-w-xs">
            A short note every other Thursday on M&amp;A, ESG, and strategy. No filler.
          </p>
          <form className="mt-4 flex gap-2" action="/api/subscribe" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md border border-line bg-white px-4 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-navy/30"
            />
            <button className="btn-primary" type="submit">Subscribe</button>
          </form>
        </div>

        <div>
          <div className="eyebrow">Elsewhere</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="text-ink/80 hover:text-navy no-underline" href={site.social.linkedin}>LinkedIn</a></li>
            <li><a className="text-ink/80 hover:text-navy no-underline" href={site.social.x}>X</a></li>
            <li><a className="text-ink/80 hover:text-navy no-underline" href={site.social.rss}>RSS</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-wide py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink/60">
          <div>© {year} {site.name}. Registered in Ghana.</div>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-navy no-underline">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-navy no-underline">Terms</Link>
            <Link href="/legal/cookies" className="hover:text-navy no-underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
