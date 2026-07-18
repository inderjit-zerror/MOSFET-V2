"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

const milestones = [
  {
    period: "2022–2025",
    title: "Understanding the Basics",
    excerpt:
      "Every electronic system starts with a few key components. Resistors control current flow, capacitors store and release energy. ",
    image:
      "https://images.unsplash.com/photo-1624602482469-3cd73308e649?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    period: "Nov 2025",
    title: "Analog vs Digital Electronics",
    excerpt:
      "Electronics can be broadly divided into analog and digital systems. Analog electronics deal with continuous signals like sound.",
    image:
      "https://images.unsplash.com/photo-1562618817-253b06cf2b6e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    period: "Jan 2026",
    title: "Modern Innovations",
    excerpt:
      "Recent advancements have transformed electronics into intelligent systems. Technologies like Artificial Intelligence (AI).",
    image:
      "https://images.unsplash.com/photo-1619434447196-2a8a745cdcf3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    period: "2026",
    title: "How MOSFET Technology Powers Modern Devices",
    excerpt:
      "Modern electronics power everything from smartphones and smart homes to electric vehicles and AI-driven systems.",
    image:
      "https://images.unsplash.com/photo-1686586362051-95a77f2c0833?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
  {
    period: "2027 →",
    title: "Commercial demonstration facility with Grand Forks Concrete",
    excerpt:
      "Electronics can be broadly divided into analog and digital systems. Analog electronics deal with continuous signals like sound.",
    image:
      "https://images.unsplash.com/photo-1770316937606-ce3e4e6c5faa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "#",
  },
];

export default function NewsPress() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [index, setIndex] = useState(0);
  const [offsets, setOffsets] = useState([]);

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
        x: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.22,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Measure each card's offset (relative to the track) so we know exactly
  // how far to translate for any given index, at any viewport size.
  const measure = () => {
    const cards = cardRefs.current;
    if (!cards.length) return;
    const trackLeft = trackRef.current?.getBoundingClientRect().left ?? 0;
    const next = cards.map((el) =>
      el ? el.getBoundingClientRect().left - trackLeft : 0
    );
    setOffsets(next);
  };

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (nextIndex) => {
    const clamped = Math.max(0, Math.min(milestones.length - 1, nextIndex));
    setIndex(clamped);
  };

  const canGoBack = index > 0;
  const canGoNext = index < milestones.length - 1;
  const translateX = offsets[index] ?? 0;

  return (
    <section
      ref={sectionRef}
      className="relative h-fit overflow-hidden  bg-[black] text-white z-99"
    >

        <GridLine />
     
      <div className="relative mx-auto max-w-[1900px] px-6 py-20 sm:px-10 lg:px-[3vw] lg:py-[9vh]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,500px)_1fr] lg:gap-[7.5vw] ">

          {/* Left: sticky intro */}
          <div className="lg:sticky lg:top-[10vh] lg:self-start">

            <InTitle txt={'Progress Roadmap'} />

            <h1 className="heading1 text-[#ECEEE9]!">
              From validation to commercial deployment
            </h1>

            <p className="paragraph text-[#ECEEE9]! PH mt-10">
              MOSFET is introducing a suite of advanced solutions that combine precision-engineered hardware with powerful AI-based software.
            </p>

            {/* Progress dots */}
            <div className="mt-10 flex gap-2">
              {milestones.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to milestone ${i + 1}`}
                  className={`h-[6px] rounded-full transition-all duration-300 ${i === index ? "w-8 bg-[#EE2F2F]" : "w-[6px] bg-white/25"
                    }`}
                />
              ))}
            </div>

            <div className="mt-10 hidden gap-3 lg:flex">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                disabled={!canGoBack}
                aria-label="Previous milestone"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EE2F2F] text-white transition-opacity duration-300 disabled:opacity-40"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M5 12l7-7M5 12l7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                disabled={!canGoNext}
                aria-label="Next milestone"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EE2F2F] text-white transition-opacity duration-300 hover:bg-[#cd2222] disabled:opacity-40"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m0 0l-7-7m7 7l-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: paginated card viewport */}
          <div ref={viewportRef} className="relative overflow-hidden ml-auto w-[46vw]">
            <div
              ref={trackRef}
              className="flex gap-6 lg:gap-[1.4vw]"
              style={{
                transform: `translateX(-${translateX}px)`,
                transition: "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
                willChange: "transform",
              }}
            >
              {milestones.map((item, i) => (
                <article
                  key={item.title}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="news-card group w-[82%] shrink-0 BGLightTint text-black sm:w-[75%] lg:w-[70%]"
                >
                  <a href={item.href} className="block outline-none">
                    <div className="overflow-hidden BGLightTint">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] group-focus-within:scale-[1.035] lg:h-[340px]"
                      />
                    </div>
                  </a>

                  <div className="p-6 sm:p-7 lg:p-7">
                    {/* <span className="inline-flex rounded-full bg-[#dcefc7] px-4 py-3 text-[13px] font-medium uppercase tracking-[-0.02em] text-[#1f3d1f]">
                      {item.period}
                    </span> */}
                    <InTitle txt={item.period} />

                    <h2 className="mt-6 max-w-[560px] text-[28px] font-medium leading-[1.06] tracking-[-0.03em] lg:text-[32px]">
                      <a href={item.href}>{item.title}</a>
                    </h2>

                    <p className="paragraph mt-5 PH">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile nav */}
          <div className="flex gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={!canGoBack}
              aria-label="Previous milestone"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9c5a45] text-white disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M5 12l7-7M5 12l7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={!canGoNext}
              aria-label="Next milestone"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8703a] text-white disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m0 0l-7-7m7 7l-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}