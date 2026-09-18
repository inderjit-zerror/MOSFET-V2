"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

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
      gsap.from(".plan-item", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out",
      });
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
          <div className="lg:sticky lg:top-[15vh] lg:self-start">
            <InTitle txt={'FUTURE PLANS FOR 2027'} />

            <h1 className="heading1 text-[#101010]!">
              WHERE WE'RE HEADED.
            </h1>

            <p className="paragraph text-[#101010]! PH mt-10">
              The plans we are building towards, exactly as we share them with partners. Made in India, built for global consumption.
            </p>
          </div>

          {/* Right: List of plans */}
          <div className="plans-container ml-auto w-full lg:w-[46vw] flex flex-col">
            {plans.map((plan, i) => (
              <div
                key={plan.num}
                className={`plan-item flex flex-col sm:flex-row gap-6 sm:gap-10 py-10 ${
                  i !== 0 ? "border-t border-black/10" : "pt-0 lg:pt-0"
                }`}
              >
                <div className="text-[18px] font-bold text-[#EE2F2F] pt-1 shrink-0">
                  {plan.num}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[24px] sm:text-[32px] font-bold leading-[1.1] tracking-tight">
                    {plan.title}
                  </h3>
                  <p className="paragraph PH text-black/80">
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
