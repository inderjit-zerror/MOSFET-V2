"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";
import BlurText from "../common/BlurText";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    num: "01",
    title: "Made in India",
    desc: "India-based camera and telematics production for global consumption.",
  },
  {
    num: "02",
    title: "Compliance for Global Expansion",
    desc: "Entry into new international markets, backed by globally approved certifications, data privacy policies and compliances.",
  },
  {
    num: "03",
    title: "Benchmark-Ready Quality & Tech",
    desc: "Focus on precision, quality and reliability. Deep vehicle architecture-level partnerships.",
  },
  {
    num: "04",
    title: "Major Supplier",
    desc: "Become an integrated system supplier to major OEMs.",
  },
  {
    num: "05",
    title: "Core Tech Solution",
    desc: 'Position MOSFET as the "core technology layer" in vehicles.',
  },
];

export default function FuturePlansSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Text Animation
      gsap.fromTo(
        ".heading-anim",
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // List Items Animation on Scroll
      gsap.fromTo(
        ".plan-item",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-fit overflow-hidden bg-[#ECEEE9] text-black z-99"
    >
      <GridLine />

      <div className="relative mx-auto max-w-[1900px] px-6 py-20 sm:px-10 lg:px-[3vw] lg:py-[15vh]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,500px)_1fr] lg:gap-[7.5vw]">
          {/* Left: sticky intro */}
          <div className="lg:sticky lg:top-[15vh] lg:self-start heading-anim">
            <BlurText as="h1" className="heading2 text-[#101010]!">
              WHERE WE'RE HEADED.
            </BlurText>

            <p className="paragraph text-[#101010]! PH mt-10">
              The plans we are building towards, exactly as we share them with partners. Made in India, built for global consumption.
            </p>
          </div>

          {/* Right: List of plans with Interactive Hover */}
          <div className="plans-container ml-auto w-full lg:w-[46vw] flex flex-col group/list">
            {plans.map((plan, i) => (
              <div
                key={plan.num}
                className={`plan-item group cursor-pointer flex flex-col sm:flex-row gap-6 sm:gap-10 py-10 transition-all duration-500 ease-out hover:!opacity-100 group-hover/list:opacity-30 ${i !== 0 ? "border-t border-black/10 hover:border-transparent" : "pt-0 lg:pt-0"
                  }`}
              >
                {/* Number */}
                <div className="text-[#EE2F2F] pt-1 shrink-0 text-xl md:text-2xl font-light transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110 origin-left">
                  {plan.num}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="heading4 transition-colors duration-500 text-black group-hover:text-[#EE2F2F]">
                      {plan.title}
                    </h3>
                    {/* Hover Arrow */}
                    <div className="mt-1 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-[#EE2F2F]">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p className="paragraph PH text-black/80 transition-colors duration-500 group-hover:text-black">
                    {plan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
