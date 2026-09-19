"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ArrowRight, ArrowDown } from "lucide-react";
import InTitle from "../common/InTitle";
import InTitle2 from "../common/InTitle2";

const flowStages = [
    {
        id: "01",
        label: "PRODUCT",
        items: [
            "OEM-specific camera & telematics",
            "Unified software platform",
            "Made-in-India certified hardware",
        ],
    },
    {
        id: "02",
        label: "CUSTOMER VALUE",
        items: [
            "Safety and visibility that fit the vehicle",
            "Global-grade cabin experience",
            "Dependable operation",
        ],
    },
    {
        id: "03",
        label: "BUSINESS VALUE",
        items: [
            "Differentiated programmes",
            "Simpler sourcing and management",
            "One partner instead of many",
        ],
    },
];

const profitableBullets = [
    "Solutions customised to your OEM programme, not generic parts everyone else can buy too.",
    "Global-grade ambient and sensory integration that lets the cabin experience do the selling.",
    "Made-in-India certified hardware for local, dependable sourcing.",
];

export default function MoreProfitableSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const stages = gsap.utils.toArray(".flow-stage");
            const arrows = gsap.utils.toArray(".flow-arrow");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flow-track",
                    start: "top 70%",
                    once: true,
                },
            });

            stages.forEach((stage, i) => {
                tl.fromTo(
                    stage,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
                    i === 0 ? 0 : "+=0.05"
                );
                if (arrows[i]) {
                    tl.fromTo(
                        arrows[i],
                        { opacity: 0, scale: 0.5 },
                        { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" },
                        "-=0.2"
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#EE2F2E] text-white py-24 px-4 md:px-12 lg:px-10">
            <div className=" mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-16">

                    <InTitle2 txt={'Section 02: More Profitable'} />
                    <h2 className=" heading1 md:text-6xl font-bold leading-tight mt-4 text-white">
                        TURN TECHNOLOGY INTO <br className="hidden md:block" />
                        <span className="text-[#202020]">BUSINESS VALUE.</span>
                    </h2>
                </div>

                {/* Process flow: Product -> Customer Value -> Business Value */}
                <div className="flow-track flex flex-col lg:flex-row items-stretch gap-0 mb-20">
                    {flowStages.map((stage, i) => (
                        <div key={stage.id} className="flex flex-col lg:flex-row items-center flex-1">
                            <div className="flow-stage w-full bg-[#202020] text-white  p-8 md:p-10 flex flex-col h-full shadow-2xl shadow-black/20 border border-white/10">
                                <span className="text-[#EE2F2E] bg-white px-3 py-1 rounded-full w-max text-sm font-bold tracking-wider">{stage.id}</span>
                                <h3 className="text-2xl font-bold mt-6 mb-6 text-white">{stage.label}</h3>
                                <ul className="space-y-4 flex-1">
                                    {stage.items.map((item, ii) => (
                                        <li key={ii} className="text-base text-gray-300 leading-relaxed pl-5 relative font-medium">
                                            <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-[#EE2F2E]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {i < flowStages.length - 1 && (
                                <div className="flow-arrow flex items-center justify-center shrink-0 my-4 lg:my-0 lg:mx-4">
                                    <ArrowDown className="lg:hidden text-white drop-shadow-lg" size={40} />
                                    <ArrowRight className="hidden lg:block text-white drop-shadow-lg" size={40} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Supporting bullet points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 mb-16 pt-16 border-t border-white/20">
                    {profitableBullets.map((bullet, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <span className="text-5xl font-black text-white/20">{String(i + 1).padStart(2, "0")}</span>
                            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">{bullet}</p>
                        </div>
                    ))}
                </div>

                {/* Footer callout */}
                <div className="border-l-4 border-white pl-6 py-2 max-w-3xl">
                    <p className="text-xl md:text-2xl text-white font-bold leading-snug">
                        We don&apos;t publish ROI percentages we can&apos;t stand behind. Bring us a programme and we&apos;ll work through the numbers with you.
                    </p>
                </div>
            </div>
        </section>
    );
}
