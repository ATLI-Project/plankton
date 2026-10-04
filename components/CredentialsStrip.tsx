import Link from "next/link";

export default function CredentialsStrip() {
  return (
    <section className="border-t border-line">
      <div className="container-wide py-24 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <span className="eyebrow">Credentials</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy tracking-tightish leading-tight">
            Experience across the economy.
          </h2>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed max-w-2xl">
            Our team has supported clients in aviation, infrastructure, energy and power, banking and financial services, mining, and state-owned enterprises and government.
          </p>
          <div className="mt-8">
            <Link href="/credentials" className="btn-ghost no-underline">
              See our credentials
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-lg border border-line bg-cream p-8">
            <div className="eyebrow">Sectors</div>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>Aviation</li>
              <li>Infrastructure</li>
              <li>Energy &amp; power</li>
              <li>Banking &amp; financial services</li>
              <li>State-owned enterprises &amp; government</li>
              <li>Mining &amp; extractives</li>
              <li>Manufacturing &amp; industrials</li>
              <li>Agribusiness &amp; consumer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
