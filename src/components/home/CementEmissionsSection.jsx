"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Button2 from "../common/Button2";
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PARAGRAPH_ONE =
  "We engineer OEM-specific camera, telematics and sensory solutions that make automotive businesses safer, simpler and more dependable. Smarter Tech for Safer Vehicles. One partner for camera, telematics, software and Made-in-India certified hardware. Built around your vehicle, not bolted on. ";

export default function CementEmissionsSection() {
  const sectionRef = useRef(null);
  const paraOneRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splitOne = new SplitText(paraOneRef.current, {
        type: "lines",
        linesClass: "cura-line",
      });

      gsap.set(splitOne.lines, {
        opacity: 0,
        filter: "blur(0.6rem)",
        yPercent: 30,
      });
      gsap.set(paraOneRef.current, { autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.to(splitOne.lines, {
        opacity: 1,
        filter: "blur(0rem)",
        yPercent: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden z-99 bg-[#000000] py-24 sm:py-32"
    >
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
            <path d="M0 60H40M80 60H120M60 0V40M60 80V120" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="60" cy="60" r="3" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mosfet-trace)" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full flex-col items-center text-center gap-12">
        <div className="w-[80vw] flex flex-col gap-8">

          <h2 className="heading2 text-[#EE2F2E] ">
            THE INTELLIGENCE <br className="hidden sm:block" />
            BEHIND SAFER DRIVES !
          </h2>

          <h5
            ref={paraOneRef}
            className="heading4  uppercase m-0 text-[#ECEEE9] invisible"
          >
            {PARAGRAPH_ONE}
          </h5>

        </div>

        <div className="w-fit flex flex-wrap justify-center gap-5 mx-auto mt-4">
          <Button txt={'DISCOVER OUR SOLUTIONS'} />
          <Button2 txt={'WHY MOSFET TECH?'} />
        </div>
      </div>
    </section>
  );
}