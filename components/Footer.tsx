import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 bg-navy text-foam">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-xl">{site.name}</div>
          <p className="mt-3 text-sm text-foam/70 max-w-xs">
            A small advisory firm for founders, funds, and operators.
          </p>
          <p className="mt-6 text-sm text-foam/70">
            {site.offices.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-foam/70">
            <a href={`mailto:${site.email.general}`} className="text-foam hover:text-teal no-underline">
              {site.email.general}
            </a>
          </p>
        </div>

        <div>
          <div className="eyebrow text-teal">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-foam/80 hover:text-white no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/work" className="text-foam/80 hover:text-white no-underline">Case studies</Link>
            </li>
            <li>
              <Link href="/careers" className="text-foam/80 hover:text-white no-underline">Careers</Link>
            </li>
            <li>
              <Link href="/contact" className="text-foam/80 hover:text-white no-underline">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-teal">Insights</div>
          <p className="mt-4 text-sm text-foam/80 max-w-xs">
            A short note every other Thursday. No filler, no unsubscribe guilt.
          </p>
          <form className="mt-4 flex gap-2" action="/api/subscribe" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full bg-white/10 px-4 py-2 text-sm text-foam placeholder:text-foam/40 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button className="btn-outline-light" type="submit">Subscribe</button>
          </form>
        </div>

        <div>
          <div className="eyebrow text-teal">Elsewhere</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="text-foam/80 hover:text-white no-underline" href={site.social.linkedin}>LinkedIn</a></li>
            <li><a className="text-foam/80 hover:text-white no-underline" href={site.social.x}>X</a></li>
            <li><a className="text-foam/80 hover:text-white no-underline" href={site.social.rss}>RSS</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-foam/60">
          <div>© {year} {site.name}. Registered in England &amp; Wales.</div>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-white no-underline">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-white no-underline">Terms</Link>
            <Link href="/legal/cookies" className="hover:text-white no-underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
