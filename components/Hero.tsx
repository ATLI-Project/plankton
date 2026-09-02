"use client";

import Link from "next/link";
import BrandMark from "./BrandMark";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background pattern in brand blue */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#072199 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      {/* Corner accent */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(closest-side, #072199, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative container-wide py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">Management Consulting · Financial Advisory</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tightish text-navy max-w-4xl">
            Reliable advice on the decisions that shape your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/75 leading-relaxed">
            Plankton Partners advises organisations across M&amp;A, Sustainability and ESG, Corporate Strategy, Business Transformation, Financial Management, and Risk — with data-driven insight and a senior team accountable end to end.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary no-underline">Start a conversation</Link>
            <Link href="/services" className="btn-ghost no-underline">Explore our services</Link>
          </div>
        </div>

        <div className="md:col-span-4 flex md:justify-end">
          <div className="relative">
            <BrandMark size={220} className="drop-shadow-sm" />
            <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-md border border-navy/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
