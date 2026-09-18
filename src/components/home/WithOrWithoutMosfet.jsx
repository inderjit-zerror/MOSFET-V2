"use client";

import React, { useCallback, useState } from "react";
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
  const [states, setStates] = useState(() => FEATURES.map(() => false)); // false = without, true = with
  const allOn = states.every(Boolean);
  const allOff = states.every((s) => !s);

  const toggleOne = useCallback((idx) => {
    setStates((prev) => prev.map((s, i) => (i === idx ? !s : s)));
  }, []);

  const toggleAll = useCallback(() => {
    setStates((prev) => {
      const turnOn = !prev.every(Boolean);
      return prev.map(() => turnOn);
    });
  }, []);

  const handleSwitchKeyDown = (e, idx) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleOne(idx);
    }
  };

  const handlePointerMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--py", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section className="relative w-full overflow-hidden BGTint py-16 sm:py-24">
      <style>{`
        @keyframes mosfetFadeSlide {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mosfet-copy { animation: mosfetFadeSlide 0.35s ease; }
        @media (prefers-reduced-motion: reduce) {
          .mosfet-copy { animation: none; }
        }
      `}</style>

      {/* faint circuit-trace backdrop */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
        <defs>
          <pattern id="mosfet-trace" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 60H40M80 60H120M60 0V40M60 80V120" stroke="#000000" strokeWidth="1" fill="none" />
            <circle cx="60" cy="60" r="3" fill="#000000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mosfet-trace)" />
      </svg>

      <div className="relative z-10  px-5 sm:px-[3vw] flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Heading */}
        <div className="w-full lg:w-[40%]  lg:sticky mb-auto lg:top-0  lg:mb-0">
          <h2 className="heading1 TextStandard mb-6">
            Every accessory is a switch. Flip it and see what changes.
          </h2>
          <p className="paragraph">
            Six differences between running your fleet without MOSFET and running it with MOSFET.
            Click any switch below.
          </p>

          {/* master switch */}
          <div className="mt-6 flex items-center justify-start border-t border-black/5 pt-6 pb-2">
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-3  border border-black/10 bg-gray-50 px-6 py-3 text-xs font-semibold uppercase tracking-widest TextStandard transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE2F2E]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span
                className="h-2 w-2  transition-colors duration-300"
                style={{ backgroundColor: allOn ? "#EE2F2E" : allOff ? "#9ca3af" : "#6b7280" }}
              />
              {allOn ? "All switched to MOSFET" : allOff ? "Flip every switch" : "Flip the rest"}
            </button>
          </div>
        </div>

        {/* Panel */}
        <div className="w-full lg:w-[60%] relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((item, idx) => {
              const on = states[idx];
              return (
                <div
                  key={item.id}
                  onMouseMove={handlePointerMove}
                  className="relative flex flex-col gap-6 border border-black/5 bg-gray-50 p-6 sm:p-8 transition-colors duration-300 hover:bg-gray-100/50"
                  style={{
                    background:
                      "radial-gradient(250px circle at var(--px, 50%) var(--py, 50%), rgba(0,0,0,0.02), transparent 70%), #f9fafb",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="PH font-semibold uppercase tracking-wider TextStandard">
                      {item.label}
                    </h3>

                    {/* rocker switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={on}
                      aria-label={`Toggle ${item.label}`}
                      onClick={() => toggleOne(idx)}
                      onKeyDown={(e) => handleSwitchKeyDown(e, idx)}
                      className="relative h-8 w-14 flex-shrink-0 rounded-full border transition-colors duration-300 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE2F2E]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      style={{
                        backgroundColor: on ? "rgba(238,47,46,0.12)" : "rgba(107,114,128,0.1)",
                        borderColor: on ? "rgba(238,47,46,0.3)" : "rgba(107,114,128,0.2)",
                      }}
                    >
                      <span
                        className="absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-all duration-300 motion-reduce:transition-none"
                        style={{
                          left: on ? "calc(100% - 28px)" : "4px",
                          backgroundColor: on ? "#EE2F2E" : "#9ca3af",
                        }}
                      >
                        {on ? (
                          <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                        ) : (
                          <X className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                        )}
                      </span>
                    </button>
                  </div>

                  <p key={on ? "with" : "without"} className="mosfet-copy PP text-gray-600 min-h-[4rem]">
                    {on ? item.with : item.without}
                  </p>

                  <div className="mt-auto pt-4">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-widest"
                      style={{ color: on ? "#EE2F2E" : "#6b7280" }}
                    >
                      {on ? "With MOSFET" : "Without MOSFET"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
}