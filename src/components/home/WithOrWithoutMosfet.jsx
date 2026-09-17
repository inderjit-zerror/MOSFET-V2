"use client";

import React from "react";
import { X, Check } from "lucide-react";
import InTitle2 from "../common/InTitle2";

const withoutFeatures = [
  {
    title: "SYSTEMS THAT BELONG IN YOUR VEHICLE",
    desc: "Systems that feel like an afterthought—added to the vehicle rather than designed around it.",
  },
  {
    title: "ONE ECOSYSTEM. ONE EXPERIENCE.",
    desc: "Multiple devices. Multiple interfaces. Multiple software platforms.",
  },
  {
    title: "QUALITY YOU CAN DEPEND ON",
    desc: "Multiple electronic accessories with inconsistent or unclear quality standards.",
  },
  {
    title: "SUPPORT BEYOND THE SALE",
    desc: "Limited support after installation, leaving businesses to manage hardware and software issues on their own.",
  },
  {
    title: "SECURITY & COMPLIANCE BUILT IN",
    desc: "Unclear security practices and uncertain compliance can create avoidable business risks.",
  },
  {
    title: "COMPLIANCE THAT BUILDS CONFIDENCE",
    desc: "Legal and regulatory compliance can become a question mark.",
  }
];

const withFeatures = [
  {
    title: "SYSTEMS THAT BELONG IN YOUR VEHICLE",
    desc: "Solutions designed specifically for your vehicle, its technology, and its real-world requirements.",
  },
  {
    title: "ONE ECOSYSTEM. ONE EXPERIENCE.",
    desc: "Multiple accessories. One connected software experience.",
  },
  {
    title: "QUALITY YOU CAN DEPEND ON",
    desc: "Engineered, tested, and quality-focused solutions built for dependable automotive performance.",
  },
  {
    title: "SUPPORT BEYOND THE SALE",
    desc: "End-to-end hardware and software support, backed by a partner that stays with you beyond deployment.",
  },
  {
    title: "SECURITY & COMPLIANCE BUILT IN",
    desc: "VAPT, DPDP-aligned practices, and continuous software support designed to keep your technology secure and evolving.",
  },
  {
    title: "COMPLIANCE THAT BUILDS CONFIDENCE",
    desc: "BIS-aligned solutions and a Make in India approach, built with compliance and local requirements in mind.",
  }
];

export default function WithOrWithoutMosfet() {
  return (
    <section className="relative w-full px-5 py-16 sm:px-[10vw] sm:py-[12vh] bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff3030]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header section */}
      <div className="relative flex flex-col items-center text-center pb-12 sm:pb-20 px-2 max-w-4xl mx-auto z-10">
        <InTitle2 txt={'COMPARISON'} />
        <h1 className="heading1 mt-6 mb-6 text-[2rem]! sm:text-[3rem]! lg:text-[3.75rem]! text-white! uppercase tracking-tight">
          <span className="text-gray-500">WITHOUT OR.</span>   WITH MOSFET
        </h1>
        <p className="paragraph max-w-[48rem] PH  text-white! text-sm sm:text-[1.1rem] leading-[1.7]">
          Not a story about bad competitors. A look at the gaps that quietly stay open when camera, telematics, software and hardware come from different generic vendors.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto z-10">

        {/* Divider line for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 -translate-x-1/2" />

        {/* Without MOSFET */}
        <div className="flex flex-col space-y-8 sm:space-y-12 pr-0 lg:pr-10 lg:pb-8">
          <h2 className="text-[#f59e0b] font-bold text-lg sm:text-xl tracking-[0.2em] uppercase text-center mb-2">
            WITHOUT MOSFET
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {withoutFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-6 group">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 group-hover:bg-[#f59e0b]/20 transition-colors">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#f59e0b]" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-gray-300 tracking-wider uppercase mb-1 sm:mb-2 transition-colors group-hover:text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* With MOSFET */}
        <div className="flex flex-col space-y-8 sm:space-y-12 pl-0 lg:pl-10 pt-16 lg:pt-0 border-t border-gray-800 lg:border-t-0">
          <h2 className="text-[#ff3030] font-bold text-lg sm:text-xl tracking-[0.2em] uppercase text-center mb-2">
            WITH MOSFET
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {withFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-6 group">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#ff3030]/10 border border-[#ff3030]/20 group-hover:bg-[#ff3030]/20 transition-colors">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3030]" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-bold text-gray-100 tracking-wider uppercase mb-1 sm:mb-2 transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-gray-400 leading-relaxed">
                    {item.desc}
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
