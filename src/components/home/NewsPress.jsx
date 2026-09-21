"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

const sectors = [
  {
    code: "01",
    title: "AUTOMOTIVE ELECTRONICS",
    image:
      "https://images.unsplash.com/photo-1624602482469-3cd73308e649?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    code: "02",
    title: "CONNECTED VEHICLE TECHNOLOGY",
    image:
      "https://images.unsplash.com/photo-1562618817-253b06cf2b6e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    code: "03",
    title: "ADAS & CAMERA SYSTEMS",
    image:
      "https://images.unsplash.com/photo-1619434447196-2a8a745cdcf3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    code: "04",
    title: "CLOUD TELEMATICS & FLEET AUTOMATION",
    image:
      "https://images.unsplash.com/photo-1686586362051-95a77f2c0833?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    code: "05",
    title: "SMART MOBILITY & EV ECOSYSTEM",
    image:
      "https://images.unsplash.com/photo-1770316937606-ce3e4e6c5faa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
];

// Bento spans — one large lead tile, two mid tiles, two wide tiles beneath.
// Order matters: default grid auto-placement resolves this exact layout.
const SPAN = [
  "sm:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[340px] sm:min-h-[420px] lg:min-h-0",
  "lg:col-span-2 min-h-[220px] lg:min-h-0",
  "lg:col-span-2 min-h-[220px] lg:min-h-0",
  "lg:col-span-3 min-h-[220px] lg:min-h-0",
  "lg:col-span-3 min-h-[220px] lg:min-h-0",
];

export default function NewsPress() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".news-eyebrow", {
        y: 14,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
      });

      gsap.from(".news-title, .news-copy", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        delay: 0.08,
        ease: "power3.out",
      });

      gsap.from(".news-card", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.22,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-fit overflow-hidden text-white z-99 bg-[#EE2F2E]"

    >
      <GridLine />

      <div className="relative mx-auto max-w-[1900px] px-6 py-20 sm:px-10 lg:px-[3vw] lg:py-[9vh]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-[6vw]">
          {/* Left: sticky intro */}
          <div className="lg:sticky lg:top-[10vh] lg:self-start">
            <div className="news-eyebrow">
              <InTitle txt={""} />
            </div>

            <h1 className="heading2 news-title text-[#ECEEE9]!">
              WE DO <br /> OPERATE IN
            </h1>

            <p className="paragraph news-copy text-[#ECEEE9]! PH mt-10 max-w-[420px]">
              Five industries, one engineering partner: from the electronics
              inside the vehicle to the fleets and mobility ecosystems around
              it.
            </p>
          </div>

          {/* Right: bento card grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[190px] lg:gap-5">
            {sectors.map((item, i) => {
              const isHero = i === 0;

              return (
                <article
                  key={item.title}
                  className={`news-card group relative flex flex-col justify-end overflow-hidden 
                     ${SPAN[i]}`}
                >
                  <a href={item.href} className="absolute inset-0" aria-hidden="true" tabIndex={-1}>
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                  </a>

                  {isHero ? (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  ) : (
                    <div className="pointer-events-none absolute inset-0 bg-black/20 " />
                  )}

                  {/* {!isHero && (
                    <span className="pointer-events-none absolute -right-1 -top-3 select-none text-[76px] font-light leading-none text-white/[0.08]">
                      {item.code}
                    </span>
                  )} */}

                  <div className="relative z-10 flex items-start justify-between p-6">
                    {/* {isHero && (
                      <span className="flex h-9 items-center rounded-full bg-white px-4 text-xs font-semibold tracking-[0.02em] text-[#82151A]">
                        Sector {item.code}
                      </span>
                    )} */}

                    {isHero && (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M7 17L17 7M17 7H9M17 7V15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </div>

                  <div className={`relative z-10 p-6 ${isHero ? "pt-0" : ""}`}>
                    <h2
                      className={`tracking-[-0.02em] text-white ${isHero
                        ? "max-w-[420px] text-2xl sm:text-[2rem]"
                        : "max-w-[240px] text-base sm:text-lg"
                        }`}
                    >
                      <a href={item.href}>{item.title}</a>
                    </h2>
                  </div>

                  <div
                    className={`pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset transition-colors duration-300 ${isHero
                      ? "ring-white/15 group-hover:ring-white/35"
                      : "ring-white/10 group-hover:ring-white/25"
                      }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}