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

      // Grid Cards Animation on Scroll
      gsap.fromTo(
        ".plan-card",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".plans-grid",
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-fit overflow-hidden bg-[#ECEEE9] text-black z-99 py-20 lg:py-[12vh]"
    >
      <GridLine />

      <div className="relative mx-auto max-w-[1900px] px-6 sm:px-10 lg:px-[3vw]">

        {/* Top: Centered Intro */}
        <div className="heading-anim flex flex-col items-center text-center mb-16 lg:mb-24">
          <BlurText as="h1" className="heading2 text-[#EE2F2F]! mb-6">
            WHERE WE'RE HEADED.
          </BlurText>
          <p className="paragraph text-[#101010]! PH max-w-2xl">
            The plans we are building towards, exactly as we share them with partners. Made in India, built for global consumption.
          </p>
        </div>

        {/* Bottom: Asymmetrical Bento Grid */}
        <div className="plans-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.num}
              className={`plan-card group relative bg-white/50 backdrop-blur-sm border border-black/5 hover:border-[#EE2F2F]/40 p-8 lg:p-10  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#EE2F2F]/10 flex flex-col justify-between overflow-hidden cursor-pointer
                ${i === 0
                  ? "md:col-span-2 lg:col-span-2" // First item spans 2 columns to create a cool bento layout
                  : "col-span-1"
                }
              `}
            >
              {/* Background gradient accent that fades in on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EE2F2F]/0 to-[#EE2F2F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />

              {/* Top Row of Card: Number & Arrow */}
              <div className="relative z-10 flex justify-between items-start mb-16">
                <div className="text-black/30 group-hover:text-[#EE2F2F] text-4xl lg:text-5xl font-semibold tracking-tighter transition-colors duration-500">
                  {plan.num}
                </div>

                {/* Interactive Arrow Button */}
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white group-hover:bg-[#EE2F2F] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"
                  >
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Bottom Row of Card: Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="heading4 text-2xl font-medium mb-3 uppercase text-black group-hover:text-[#EE2F2F] transition-colors duration-500">
                  {plan.title}
                </h3>
                <p className="paragraph PH text-black/70 group-hover:text-black/90 transition-colors duration-500">
                  {plan.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}