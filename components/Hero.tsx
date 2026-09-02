"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number };
    let particles: P[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.6,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: 0.3 + Math.random() * 0.7,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        gradient.addColorStop(0, `rgba(19, 168, 158, ${p.a})`);
        gradient.addColorStop(1, "rgba(19, 168, 158, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(246, 248, 247, ${Math.min(1, p.a + 0.2)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) raf = requestAnimationFrame(draw);
    else draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy text-foam">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(1200px 500px at 80% 20%, rgba(19,168,158,0.18), transparent 60%), radial-gradient(900px 400px at 20% 80%, rgba(19,168,158,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative container-wide py-32 md:py-44 min-h-[80vh] flex flex-col justify-center">
        <div className="eyebrow text-teal">Advisory · Est. 2019</div>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tightish max-w-4xl">
          Small partners.<br />Systemic impact.
        </h1>
        <p className="mt-6 max-w-xl text-foam/80 text-lg">
          We advise founders, investors, and operators on the decisions that quietly determine whether a business compounds or stalls.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary no-underline">Start a conversation</Link>
          <Link href="/work" className="btn-outline-light no-underline">See selected work</Link>
        </div>
      </div>
    </section>
  );
}
