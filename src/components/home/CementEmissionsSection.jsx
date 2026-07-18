"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PARAGRAPH_ONE =
  "MOSFET has officially announced the expansion of its AI-driven automotive solutions across India, marking a significant step in its global growth strategy and long-term commitment to intelligent mobility. ";

const PARAGRAPH_TWO_PARTS = {
  before: "Smarter Tech for Safer Vehicles",
  after:
    " This initiative is aimed at addressing the increasing demand for connected, data-driven, and safety-focused vehicle technologies in India’s rapidly evolving automotive ecosystem.",
};

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
      className="relative w-full  h-[200vh] overflow-hidden z-99"
     
    >
      <div
        ref={pinRef}
        className=" sticky top-0 left-0 flex h-[100vh] w-full items-center justify-center overflow-hidden bg-[#F7F7F1]"
      >
       {/* <GridLine/> */}

        <img
          src="/images/cura-rock.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-[22vw] max-w-none select-none opacity-90"
        />
        <img
          src="/images/cura-bridge.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[24vw] max-w-none select-none opacity-90"
        />

        <div className="relative z-10 mx-auto flex w-[70vw] max-w-[64rem] flex-col items-center text-center">
          <InTitle txt={"Smarter Tech for Safer Vehicles"} />

          <div className="relative w-full">
            <p
              ref={paraOneRef}
              className="absolute inset-0 m-0 text-[2.75rem] font-medium leading-[1.25] text-black"
            >
              {PARAGRAPH_ONE}
            </p>

            <p
              ref={paraTwoRef}
              className="invisible m-0 text-[2.75rem] font-medium leading-[1.25] text-black"
            >
              {PARAGRAPH_TWO_PARTS.before}
              <sub className="bottom-0 text-[1.75rem]">2</sub>
              {PARAGRAPH_TWO_PARTS.after}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
