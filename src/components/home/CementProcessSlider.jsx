"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, Cloud } from "lucide-react";
import InTitle from "../common/InTitle";
import InTitle2 from "../common/InTitle2";
import GridLine from "../common/GridLine";

const SLIDES = [
  {
    icon: Cloud,
    title: "Making the cement that industry uses",
    description:
      "MOSFET has officially announced the expansion of its AI-driven automotive solutions across India, marking a significant step in its global growth strategy and long-term commitment to intelligent mobility. This initiative is aimed at addressing the increasing demand for connected, data-driven, and safety-focused vehicle technologies in India’s rapidly evolving automotive ecosystem.",
    image:
      "https://images.unsplash.com/photo-1621217873309-2046fa41d06f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Cloud,
    title: "Retrofit-ready, not rip-and-replace",
    description:
      "MOSFET is introducing a suite of advanced solutions that combine precision-engineered hardware with powerful AI-based software. These systems are designed to enable real-time data processing, predictive analytics, and enhanced vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication. The goal is to create smarter vehicles that can respond dynamically to road conditions, driver behavior, and environmental factors.",
    image:
      "https://images.unsplash.com/photo-1667893570415-b677afb054ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Cloud,
    title: "Captured carbon, ready to reuse",
    description:
      "The company’s technologies focus heavily on improving road safety and operational efficiency. Features such as intelligent driver assistance, automated alerts, and system diagnostics help reduce risks while optimizing performance. Additionally, MOSFET’s scalable architecture ensures seamless integration with existing automotive platforms, making it easier for OEMs and mobility providers to adopt and deploy these innovations.",
    image:
      "https://images.unsplash.com/photo-1700934509422-075b6e2830bb?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function CementProcessSlider() {
  const [index, setIndex] = useState(0);

  const imageRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const barsRef = useRef([]);

  const isAnimating = useRef(false);

  const goTo = (nextIndex) => {
    if (isAnimating.current || nextIndex === index) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // Fade/blur out current content + image
    tl.to(
      [iconRef.current, titleRef.current, descRef.current],
      {
        opacity: 0,
        y: -14,
        filter: "blur(6px)",
        duration: 0.35,
        ease: "power2.in",
        stagger: 0.04,
      },
      0,
    );

    tl.to(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.04,
        duration: 0.45,
        ease: "power2.in",
      },
      0,
    );

    // Swap state mid-timeline, once faded out
    tl.call(() => {
      setIndex(nextIndex);
    });

    // Fade/blur in new content + image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.04 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
    );

    tl.fromTo(
      [iconRef.current, titleRef.current, descRef.current],
      { opacity: 0, y: 14, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.06,
      },
      "-=0.3",
    );
  };

  const handleNext = () => goTo((index + 1) % SLIDES.length);
  const handlePrev = () => goTo((index - 1 + SLIDES.length) % SLIDES.length);

  // Animate progress bar highlight whenever index changes
  useLayoutEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      gsap.to(bar, {
        backgroundColor: i === index ? "#e8552f" : "#f3d4c6",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, [index]);

  const slide = SLIDES[index];
  const Icon = slide.icon;

  return (
    <section className="relative w-full  px-[10vw] py-10 BGRed ">
      <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center py-[6vw] md:py-[4vw] px-[4vw] border-b border-gray-200">

        <InTitle2 txt={'industrial process engineering'} />

        <h1 className="heading1 mb-[1.5rem] text-[#ECEEE9]! max-w-[45rem]">
          Scientific depth.
          <br />
          Industrial perspective.
        </h1>

        <p className="paragraph max-w-[38rem] text-[#ECEEE9]!">
           MOSFET is introducing a suite of advanced solutions that combine precision-engineered hardware with powerful AI-based software.
        </p>
      </div>

      <GridLine />

      <div className="grid grid-cols-1   h-[100svh] md:grid-cols-2">
        {/* Left: Image */}
        <div className="relative aspect-[4/3] bg-[#ECEEE9]/90 w-full overflow-hidden md:aspect-auto md:min-h-[650px]">
          <div
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>

        {/* Right: Content */}
        <div className="relative flex min-h-[400px] flex-col items-center justify-center BGTint px-10 py-16 text-center md:min-h-[650px]">
          <div
            ref={iconRef}
            className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-[#e8552f]/60"
          >
            <Icon className="h-7 w-7 TextRed" strokeWidth={1.5} />
          </div>

          <h2
            ref={titleRef}
            className="max-w-md paragraph text-[2.25rem] font-semibold leading-[1.15] text-[#1c1c18]"
          >
            {slide.title}
          </h2>

          <p
            ref={descRef}
            className="mx-auto paragraph mt-6 max-w-sm text-[1rem] leading-[1.6] text-[#4a4a42]"
          >
            {slide.description}
          </p>

          {/* Progress bars */}
          <div className="mt-10 flex w-full max-w-md gap-3">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                ref={(el) => (barsRef.current[i] = el)}
                className="h-[3px] flex-1 rounded-full BGRed"
              />
            ))}
          </div>

          {/* Nav buttons */}
          <div className="absolute bottom-8 right-8 flex gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full BGRed text-white transition-colors hover:bg-[#da1e1e]/60"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff3030] text-white transition-colors hover:bg-[#da1e1e]"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
