"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Button2 from "../common/Button2";
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PARAGRAPH_ONE =
  "We engineer OEM-specific camera, telematics and sensory solutions that make automotive businesses safer, simpler and more dependable. ";

const PARAGRAPH_TWO =
  "Smarter Tech for Safer Vehicles. One partner for camera, telematics, software and Made-in-India certified hardware. Built around your vehicle, not bolted on.";

export default function CementEmissionsSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const paraOneRef = useRef(null);
  const paraTwoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splitOne = new SplitText(paraOneRef.current, {
        type: "lines",
        linesClass: "cura-line",
      });

      const splitTwo = new SplitText(paraTwoRef.current, {
        type: "lines",
        linesClass: "cura-line",
      });

      gsap.set(splitTwo.lines, {
        opacity: 0,
        filter: "blur(0.6rem)",
        yPercent: 30,
      });
      gsap.set(paraTwoRef.current, { autoAlpha: 1 });
      gsap.set(paraOneRef.current, { autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom", // shorter scroll distance = faster feel
          scrub: true,
          pin: pinRef.current,
          anticipatePin: 1,
          // markers: true,
        },
      });

      tl.to(splitOne.lines, {
        opacity: 0,
        filter: "blur(0.6rem)",
        yPercent: -30,
        stagger: 0.04, // was 0.06
        duration: 0.5, // was 0.7
        ease: "power2.in",
      });

      tl.to(
        splitTwo.lines,
        {
          opacity: 1,
          filter: "blur(0rem)",
          yPercent: 0,
          stagger: 0.05, // was 0.08
          duration: 0.7, // was 1
          ease: "power2.out",
        },
        "-=0.15", // slightly tighter overlap
      );

      tl.to({}, { duration: 0.5 }); // was 0.8, shorter hold at end
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full  h-[200vh] overflow-hidden z-99 bg-[#000000]"

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

      <div
        ref={pinRef}
        className=" sticky top-0 left-0 flex h-[100vh] w-full items-center justify-center overflow-hidden "
      >

        <div className="relative z-10 mx-auto flex w-[90vw] sm:w-[80vw] max-w-[64rem] flex-col items-center text-center">

          <div className="relative w-full">
            <h5
              ref={paraOneRef}
              className="absolute heading2 uppercase inset-0 m-0 text-white"
            >
              {PARAGRAPH_ONE}
            </h5>

            <h5
              ref={paraTwoRef}
              className="invisible heading2 uppercase m-0 text-[#EE2F2E]"
            >
              {PARAGRAPH_TWO}
            </h5>

            <div className="w-fit flex gap-5 mt-[10vh] mx-auto">
              <Button txt={'DISCOVER OUR SOLUTIONS'} />
              <Button2 txt={'WHY MOSFET TECH?'} />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}