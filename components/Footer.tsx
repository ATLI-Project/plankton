import Link from "next/link";
import Image from "next/image";
import { footerNav, site } from "@/lib/site";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const showSocial = Boolean(site.social.linkedin || site.social.x);
  return (
    <footer className="mt-32 bg-white border-t border-line">
      <div className="h-[3px] w-full bg-accent" />
      <div className="container-wide py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/plankton-partners-logo.png"
            alt={site.name}
            width={220}
            height={64}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-ink/70 max-w-xs leading-relaxed">
            {site.footer.about}
          </p>
        </div>

        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/80 hover:text-navy no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="subscribe">
          <div className="eyebrow">Newsletter</div>
          <p className="mt-4 text-sm text-ink/80 max-w-xs leading-relaxed">
            {site.footer.newsletter}
          </p>
          <NewsletterForm />
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li>{site.address.postal}</li>
            <li>
              <a
                href={`mailto:${site.email.general}`}
                className="text-navy hover:text-accent no-underline font-medium"
              >
                {site.email.general}
              </a>
            </li>
            <li>{site.phone}</li>
          </ul>
          {showSocial && (
            <ul className="mt-4 space-y-2 text-sm">
              {site.social.linkedin && (
                <li>
                  <a className="text-ink/80 hover:text-navy no-underline" href={site.social.linkedin}>
                    LinkedIn
                  </a>
                </li>
              )}
              {site.social.x && (
                <li>
                  <a className="text-ink/80 hover:text-navy no-underline" href={site.social.x}>
                    X
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-wide py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink/60">
          <div>{site.footer.bottomBar}</div>
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
