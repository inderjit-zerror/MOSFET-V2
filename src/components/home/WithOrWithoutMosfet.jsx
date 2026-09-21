"use client";

import React, { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: "fit",
    label: "Systems that belong in your vehicle",
    without:
      "Systems that feel like an afterthought—added to the vehicle rather than designed around it.",
    with: "Solutions designed specifically for your vehicle, its technology, and its real-world requirements.",
  },
  {
    id: "ecosystem",
    label: "One ecosystem, one experience",
    without: "Multiple devices. Multiple interfaces. Multiple software platforms.",
    with: "Multiple accessories. One connected software experience.",
  },
  {
    id: "quality",
    label: "Quality you can depend on",
    without:
      "Multiple electronic accessories with inconsistent or unclear quality standards.",
    with: "Engineered, tested, and quality-focused solutions built for dependable automotive performance.",
  },
  {
    id: "support",
    label: "Support beyond the sale",
    without:
      "Limited support after installation, leaving businesses to manage hardware and software issues on their own.",
    with: "End-to-end hardware and software support, backed by a partner that stays with you beyond deployment.",
  },
  {
    id: "security",
    label: "Security and compliance built in",
    without:
      "Unclear security practices and uncertain compliance can create avoidable business risks.",
    with: "VAPT, DPDP-aligned practices, and continuous software support designed to keep your technology secure and evolving.",
  },
  {
    id: "confidence",
    label: "Compliance that builds confidence",
    without: "Legal and regulatory compliance can become a question mark.",
    with: "BIS-aligned solutions and a Make in India approach, built with compliance and local requirements in mind.",
  },
];

export default function WithOrWithoutMosfet() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main headers
      gsap.from(".header-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".headers-container",
          start: "top 90%",
        },
      });

      // Animate each feature row as it enters the viewport
      gsap.utils.toArray(".feature-row").forEach((row) => {
        gsap.from(row, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            scrub: true
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#ECEEE9] py-20 sm:py-32 px-5 sm:px-[3vw]">
      <div className=" mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row mb-8 md:mb-12 headers-container overflow-hidden">
          {/* With MOSFET Header (Left) */}
          <div className="flex-1 md:pr-12 lg:pr-16 md:border-r border-black/20 mb-8 md:mb-0 header-anim">
            <h2 className="text-[#EE2F2E] heading2 tracking-[0.2em] uppercase md:text-center">
              With MOSFET
            </h2>
          </div>
          {/* Without MOSFET Header (Right) */}
          <div className="flex-1 md:pl-12 lg:pl-16 header-anim">
            <h2 className="text-[black] heading2 tracking-[0.2em] uppercase md:text-center">
              Without MOSFET
            </h2>
          </div>
        </div>

        {/* Grid Content */}
        <div className="border-t border-black/20">
          {FEATURES.map((item) => (
            <div key={item.id} className="feature-row flex flex-col md:flex-row border-b border-black/20">

              {/* With MOSFET Cell (Left) */}
              <div className="flex-1 py-8 md:py-10 md:pr-12 lg:pr-16 md:border-r border-black/20 flex items-start gap-4 md:gap-6">
                <Check className="text-[#EE2F2E] shrink-0 mt-0.5" size={24} strokeWidth={2.5} />
                <div>
                  <h4 className="paragraph! text-[#EE2F2E]! font-semibold uppercase tracking-widest mb-2">
                    {item.label}
                  </h4>
                  <p className="paragraph text-black/80">
                    {item.with}
                  </p>
                </div>
              </div>

              {/* Without MOSFET Cell (Right) */}
              <div className="flex-1 py-8 md:py-10 md:pl-12 lg:pl-16 flex items-start gap-4 md:gap-6 border-t border-black/10 md:border-t-0">
                <X className="text-[black] shrink-0 mt-0.5" size={24} strokeWidth={2.5} />
                <div>
                  <h4 className="paragraph text-[black]! font-semibold! uppercase tracking-widest mb-2">
                    {item.label}
                  </h4>
                  <p className="paragraph text-black/80">
                    {item.without}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}