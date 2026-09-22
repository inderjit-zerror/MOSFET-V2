"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ShieldCheck } from "lucide-react";
import InTitle from "../common/InTitle";
import BlurText from "../common/BlurText";

const dependableBullets = [
    { text: "An engineering focus on precision, quality and reliability." },
    { text: "High-quality certified hardware, made in India." },
    { text: "Deep, vehicle-architecture-level partnerships rather than drop-in parts." },
    { text: "A compliance framework planned for 2027: globally approved certifications and data privacy policies.", },
];

export default function MoreDependableSection() {
    const diagramRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                diagramRef.current,
                { opacity: 0, scale: 0.94 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: { trigger: diagramRef.current, start: "top 75%", once: true },
                }
            );
        }, diagramRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-[#EE2F2E] text-white py-24 px-4 md:px-12 lg:px-10">
            <div className=" mx-auto">
                <div className="max-w-3xl ">

                    <BlurText as="h2" className=" heading1 mt-4 text-white">
                        BUILD CONFIDENCE <br className="hidden md:block" />
                        INTO <span className="text-[#202020]">EVERY DRIVE.</span>
                    </BlurText>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center gap-14 lg:gap-20">
                    {/* Left: bullet points */}
                    <div className="w-full md:w-2/5 flex flex-col gap-10">
                        {dependableBullets.map((bullet, i) => (
                            <div key={i} className="flex items-start gap-5">
                                <div className="p-3 bg-white/20 rounded-xl text-white shrink-0 mt-1 shadow-inner shadow-white/10">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <p className=" text-white/95">{bullet.text}</p>
                                    {bullet.tag && (
                                        <span className="inline-block mt-4 tracking-wide text-white bg-[#202020] border border-[#202020] rounded-full px-4 py-1.5 shadow-lg">
                                            {bullet.tag}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: radar / precision diagram */}
                    <div ref={diagramRef} className="w-full md:w-3/5">
                        <div className="relative w-full aspect-square max-w-xl mx-auto bg-black/10  p-8  ">
                            <style>{`
                @keyframes radarPulseWhite {
                  0% { r: 60px; opacity: 0.9; }
                  100% { r: 260px; opacity: 0; }
                }
                .radar-pulse-ring-white {
                  transform-origin: 320px 320px;
                  animation: radarPulseWhite 3s ease-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                  .radar-pulse-ring-white { animation: none; opacity: 0.25; }
                }
              `}</style>
                            <svg viewBox="0 0 640 640" className="w-full h-full drop-shadow-2xl" aria-hidden="true">
                                {/* Concentric radar rings */}
                                <circle cx="320" cy="320" r="90" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
                                <circle cx="320" cy="320" r="150" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="2" />
                                <circle cx="320" cy="320" r="210" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
                                <circle cx="320" cy="320" r="270" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="2" />

                                {/* Pulsing ring */}
                                <circle className="radar-pulse-ring-white" cx="320" cy="320" r="90" fill="none" stroke="#ffffff" strokeWidth="3" />

                                {/* Top-down car outline */}
                                <rect x="272" y="190" width="96" height="260" rx="46" fill="#101010" />
                                <rect x="292" y="212" width="56" height="46" rx="10" fill="#2a2a2a" />
                                <rect x="296" y="378" width="48" height="34" rx="8" fill="#2a2a2a" />
                                <rect x="256" y="228" width="14" height="46" rx="4" fill="#050505" />
                                <rect x="370" y="228" width="14" height="46" rx="4" fill="#050505" />
                                <rect x="256" y="366" width="14" height="46" rx="4" fill="#050505" />
                                <rect x="370" y="366" width="14" height="46" rx="4" fill="#050505" />

                                {/* Beams from the four corner sensors out to the labels */}
                                <line x1="263" y1="228" x2="95" y2="95" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
                                <line x1="377" y1="228" x2="545" y2="95" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
                                <line x1="263" y1="412" x2="95" y2="545" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
                                <line x1="377" y1="412" x2="545" y2="545" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />

                                <circle cx="263" cy="228" r="5" fill="#ffffff" />
                                <circle cx="377" cy="228" r="5" fill="#ffffff" />
                                <circle cx="263" cy="412" r="5" fill="#ffffff" />
                                <circle cx="377" cy="412" r="5" fill="#ffffff" />
                                <circle cx="95" cy="95" r="6" fill="#ffffff" />
                                <circle cx="545" cy="95" r="6" fill="#ffffff" />
                                <circle cx="95" cy="545" r="6" fill="#ffffff" />
                                <circle cx="545" cy="545" r="6" fill="#ffffff" />

                                {/* Labels */}
                                <text x="95" y="74" textAnchor="middle" fontSize="20" fontWeight="800" fill="#ffffff" letterSpacing="1">PRECISION</text>
                                <text x="545" y="74" textAnchor="middle" fontSize="20" fontWeight="800" fill="#ffffff" letterSpacing="1">QUALITY</text>
                                <text x="95" y="584" textAnchor="middle" fontSize="20" fontWeight="800" fill="#ffffff" letterSpacing="1">RELIABILITY</text>
                                <text x="545" y="578" textAnchor="middle" fontSize="18" fontWeight="800" fill="#ffffff" letterSpacing="1">
                                    <tspan x="545" dy="0">CERTIFIED</tspan>
                                    <tspan x="545" dy="24">HARDWARE</tspan>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
