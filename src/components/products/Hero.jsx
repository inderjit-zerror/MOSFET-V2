"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-title span",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
          "-=0.3"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.35"
        )
        .fromTo(
          ".hero-frame",
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 1.1 },
          "-=0.9"
        );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const title = "BUILT FOR THE DRIVE";

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-mosfet-dark pt-24"
    >
      <div className="hero-frame absolute inset-0">
        <img
          src="https://picsum.photos/seed/mosfet-hero/1800/1200"
          alt="MOSFET performance car accessories"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mosfet-black via-mosfet-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-mosfet-black/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <p className="hero-eyebrow mb-4 text-xs uppercase tracking-widest2 text-mosfet-amber">
          Dash Cams · Sound · Lighting · PPF · Amplifiers
        </p>
        <h1 className="hero-title max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
          {title.split(" ").map((word, i) => (
            <span key={i} className="mr-4 inline-block overflow-hidden">
              {word}
            </span>
          ))}
        </h1>
        <p className="hero-sub mt-6 max-w-md text-sm text-mosfet-muted md:text-base">
          MOSFET engineers premium car tech and protection — from 4K dash
          cams to full-body PPF — designed to perform when it matters most.
        </p>
        <div className="hero-cta mt-8">
          <a
            href="#products"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-7 py-3 text-xs font-semibold uppercase tracking-widest text-mosfet-black transition-colors hover:bg-mosfet-amber hover:text-white"
          >
            Explore the range
          </a>
        </div>
      </div>
    </section>
  );
}
