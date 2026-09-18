

"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, Cloud, Lock, Box, Link, FileCheck, Shield, Zap, Wrench, Settings, Users, Award, BarChart } from "lucide-react";
import InTitle from "../common/InTitle";
import InTitle2 from "../common/InTitle2";
import GridLine from "../common/GridLine";

const cardTemplates = [
  {
    titleWhite: "Exclusive",
    titleColored: "tools",
    icon: Lock,
    color: "text-[#f59e0b]",
    lineColor: "bg-[#f59e0b]",
    bgImage: "https://images.unsplash.com/photo-1621217873309-2046fa41d06f?q=80&w=687&auto=format&fit=crop",
  },
  {
    titleWhite: "Family",
    titleColored: "moulds",
    icon: Box,
    color: "text-[#3b82f6]",
    lineColor: "bg-[#3b82f6]",
    bgImage: "https://images.unsplash.com/photo-1667893570415-b677afb054ea?q=80&w=687&auto=format&fit=crop",
  },
  {
    titleWhite: "Coupled",
    titleColored: "parts",
    icon: Link,
    color: "text-[#10b981]",
    lineColor: "bg-[#10b981]",
    bgImage: "https://images.unsplash.com/photo-1700934509422-075b6e2830bb?q=80&w=627&auto=format&fit=crop",
  },
  {
    titleWhite: "Trial before",
    titleColored: "tooling",
    icon: FileCheck,
    color: "text-[#a855f7]",
    lineColor: "bg-[#a855f7]",
    bgImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=687&auto=format&fit=crop",
  }
];

const SLIDES = [
  {
    icon: Wrench,
    supportLabel: "SUPPORT 01 - TOOLING",
    title: "Exclusive mould & family mould design capability",
    description:
      "We design and own the tools — for the camera housing and, where the programme needs it, for the vehicle part it sits in.",
    cards: cardTemplates,
  },
  {
    icon: Zap,
    supportLabel: "SUPPORT 02 - ENGINEERING",
    title: "Customised development & product engineering",
    description:
      "Our engineering team works closely with your product managers to ensure every component fits perfectly into your ecosystem.",
    cards: [
      { ...cardTemplates[0], titleWhite: "Custom", titleColored: "designs", icon: Wrench },
      { ...cardTemplates[1], titleWhite: "Rapid", titleColored: "prototypes", icon: Zap },
      { ...cardTemplates[2], titleWhite: "Strict", titleColored: "testing", icon: Shield },
      { ...cardTemplates[3], titleWhite: "System", titleColored: "validation", icon: FileCheck }
    ],
  },
  {
    icon: BarChart,
    supportLabel: "SUPPORT 03 - BENCHMARKING",
    title: "Benchmarked against the closest competition",
    description:
      "We constantly analyze and benchmark our solutions against industry leaders to ensure unparalleled performance and value.",
    cards: [
      { ...cardTemplates[0], titleWhite: "Market", titleColored: "analysis", icon: BarChart },
      { ...cardTemplates[1], titleWhite: "Competitor", titleColored: "insight", icon: Users },
      { ...cardTemplates[2], titleWhite: "Performance", titleColored: "metrics", icon: Settings },
      { ...cardTemplates[3], titleWhite: "Value", titleColored: "proposition", icon: Award }
    ],
  }
];

export default function CementProcessSlider() {
  const [index, setIndex] = useState(0);

  const imageRef = useRef(null);
  const iconRef = useRef(null);
  const labelRef = useRef(null);
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

    // Fade/blur out current content
    tl.to(
      [iconRef.current, labelRef.current, titleRef.current, descRef.current],
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

    // Swap state mid-timeline, once faded out
    tl.call(() => {
      setIndex(nextIndex);
    });

    // Fade/blur in new content

    tl.fromTo(
      [iconRef.current, labelRef.current, titleRef.current, descRef.current],
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
    <section className="relative w-full px-5 py-10 sm:px-[10vw] sm:py-[10vh] BGRed ">


      <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center pb-8 sm:pb-[6vw] md:pb-[4vw] px-2 sm:px-[4vw] border-b border-gray-200">
        <InTitle2 txt={'CUSTOM DEVELOPMENT AND MOULDING'} />
        <h1 className="heading1 mb-[1.5rem] text-[1.75rem]! sm:text-[2.75rem]! lg:text-[3.75rem]! text-[#ECEEE9]! max-w-[55rem]">
          THE PERFECTLY ENGINEERED
          <br />
          PRODUCT FOR YOUR LINEUP.
        </h1>
        <p className="paragraph max-w-[38rem] PH text-[#ECEEE9]!">
          Tooling, product engineering, competitor benchmarking, local assembly, team training and BIS compliance — before the order and after it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:h-fit md:grid-cols-2 ">


        {/* Left: Cards Grid */}
        <div className="relative aspect-[4/3] bg-[#ECEEE9]  w-full overflow-hidden md:aspect-auto md:min-h-[650px] p-4 sm:p-8 flex items-center justify-center">
          <div
            ref={imageRef}
            className="grid grid-cols-2 gap-3 sm:gap-6 w-full h-full max-h-[600px]"
          >
            {slide.cards.map((card, idx) => (
              <div
                key={idx}
                className="relative  overflow-hidden group bg-gray-900 border border-gray-800/50 shadow-lg h-full min-h-[160px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-between z-10">
                  <div className="self-start">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-black/40 backdrop-blur-md border border-gray-700/50">
                      <card.icon className={`w-4 h-4 sm:w-6 sm:h-6 ${card.color}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[13px] sm:text-xl md:text-2xl font-bold leading-tight tracking-wide">
                      <span className="text-white block">{card.titleWhite}</span>
                      <span className={` text-[red] block`}>{card.titleColored}</span>
                    </h3>
                    <div className={`w-4 sm:w-8 h-1 mt-1 sm:mt-4 rounded-full bg-[red]`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className="relative flex min-h-[420px] flex-col items-center justify-center BGTint px-6 py-12 pb-24 sm:px-10 sm:py-16 sm:pb-16 text-center md:min-h-[650px]">

          {/* <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#4a4a42] uppercase absolute top-8 sm:top-12">
            SIX CAPABILITIES BEHIND THE PRODUCT
          </p> */}

          <div
            ref={iconRef}
            className="mb-4 sm:mb-6 mt-4 sm:mt-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl border border-[#e8552f]/60"
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 TextRed" strokeWidth={1.5} />
          </div>

          {/* <p
            ref={labelRef}
            className="text-[#e8552f] font-bold text-xs sm:text-sm tracking-widest mb-3 uppercase"
          >
            {slide.supportLabel}
          </p> */}

          <h2
            ref={titleRef}
            className="max-w-[95%] sm:max-w-[90%] paragraph text-[1.5rem]! sm:text-[2rem]! text-[#1c1c18]"
          >
            {slide.title}
          </h2>

          <p
            ref={descRef}
            className="mx-auto paragraph mt-6 max-w-[95%] text-center sm:max-w-[90%] text-[0.9rem] sm:text-[1rem]  PH leading-[1.6] text-[#4a4a42]"
          >
            {slide.description}
          </p>

          {/* Progress bars */}
          <div className="mt-8 sm:mt-10 flex w-full max-w-md gap-2 sm:gap-3 px-4 sm:px-0">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                ref={(el) => (barsRef.current[i] = el)}
                className="h-[3px] flex-1 rounded-full BGRed"
              />
            ))}
          </div>

          {/* Nav buttons */}
          <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 flex gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full BGRed text-white transition-colors hover:bg-[#da1e1e]/60"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#ff3030] text-white transition-colors hover:bg-[#da1e1e]"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}