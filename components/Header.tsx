"use client";

import Link from "next/link";
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
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-foam/85 backdrop-blur border-b border-navy/10" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 no-underline" aria-label={site.name}>
          <Mark />
          <span className="font-serif text-lg text-navy tracking-tightish">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-navy/80 hover:text-navy no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-ghost no-underline">Contact</Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-navy/20 p-2"
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
        <div className="md:hidden border-t border-navy/10 bg-foam">
          <div className="container-wide py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-navy no-underline py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-ghost self-start no-underline">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="12" fill="#0B2545" />
      <circle cx="14" cy="14" r="5" fill="none" stroke="#13A89E" strokeWidth="1.2" />
      <circle cx="14" cy="14" r="9" fill="none" stroke="#13A89E" strokeWidth="0.6" opacity="0.6" />
      <circle cx="14" cy="9" r="1" fill="#13A89E" />
      <circle cx="19" cy="14" r="1" fill="#13A89E" />
      <circle cx="14" cy="19" r="1" fill="#13A89E" />
      <circle cx="9" cy="14" r="1" fill="#13A89E" />
    </svg>
  );
}
