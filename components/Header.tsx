"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors bg-white ${
        scrolled ? "border-b border-line shadow-sm" : "border-b border-transparent"
      }`}
    >
      {/* Accent hairline in brand red */}
      <div className="h-[3px] w-full bg-accent" />
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 no-underline" aria-label={site.name}>
          <Image
            src="/brand/plankton-partners-logo.png"
            alt={site.name}
            width={200}
            height={60}
            priority
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-navy/80 hover:text-navy no-underline font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary no-underline">Contact</Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-navy/25 p-2 text-navy"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="container-wide py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-navy no-underline py-1 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary self-start no-underline">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
