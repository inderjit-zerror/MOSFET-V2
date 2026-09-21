"use client";

import React from "react";
import { Check, X } from "lucide-react";

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
  return (
    <section className="bg-[#ECEEE9] py-20 sm:py-32 px-5 sm:px-[3vw]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">

        {/* WITHOUT MOSFET COLUMN */}
        <div className="flex-1">
          <h3 className="text-[#D97706] heading1 tracking-[0.2em] uppercase mb-12 md:text-center">
            Without MOSFET
          </h3>
          <div className="space-y-12">
            {FEATURES.map((item) => (
              <div key={`without-${item.id}`} className="flex items-start gap-5">
                <X className="text-[#D97706] shrink-0 mt-0.5" size={20} strokeWidth={2.5} />
                <div>
                  <h4 className="paragraph  text-[#D97706]!!  uppercase tracking-widest mb-1.5">
                    {item.label}
                  </h4>
                  <p className="paragraph text-black">
                    {item.without}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WITH MOSFET COLUMN */}
        <div className="flex-1">
          <h3 className="text-[#EE2F2E] heading1 tracking-[0.2em] uppercase mb-12 md:text-center">
            With MOSFET
          </h3>
          <div className="space-y-12">
            {FEATURES.map((item) => (
              <div key={`with-${item.id}`} className="flex items-start gap-5">
                <Check className="text-[#EE2F2E] shrink-0 mt-0.5" size={20} strokeWidth={2.5} />
                <div>
                  <h4 className="paragraph! text-[#EE2F2E]!  uppercase tracking-widest mb-1.5">
                    {item.label}
                  </h4>
                  <p className="paragraph text-black">
                    {item.with}
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