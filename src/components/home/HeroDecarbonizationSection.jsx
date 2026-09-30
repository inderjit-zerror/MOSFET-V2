"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button2 from "../common/Button2";
import GridLine from "../common/GridLine";

gsap.registerPlugin(ScrollTrigger);

export default function HeroDecarbonizationSection() {
  const sectionRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image 1 - moves up slower/faster than scroll (parallax)
      gsap.to(img1Ref.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Image 2 - opposite direction for depth variation
      gsap.to(img2Ref.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Cross lines animation
      gsap.fromTo(
        ".cross-line-svg",
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-4 py-10 sm:px-[3.2vw] sm:py-[2.5vw] BGTint overflow-hidden z-99">
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden BGRed py-16 sm:py-28 lg:py-32"
      >

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6 text-center">

          {/* New Text Block from Image */}
          <div className=" w-full">
            <h2 className="heading2 text-[#ECEEE9] uppercase text-center tracking-tight mb-16">
              NOW IMAGINE IT <span className="text-[#ECEEE9]">DONE BETTER.</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 sm:gap-6 w-full mx-auto">
              {[
                { from: 'COMPLEX', to: 'SIMPLE' },
                { from: 'UNCERTAIN', to: 'DEPENDABLE' },
                { from: 'COST', to: 'VALUE' },
                { from: 'PROBLEM', to: 'SOLUTION' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="relative text-[#ECEEE9] tracking-[0.15em] uppercase heading4">
                    {item.from}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] pointer-events-none overflow-visible">
                      <line
                        className="cross-line-svg"
                        x1="0" y1="0" x2="100%" y2="100%"
                        stroke="white" strokeWidth="2"
                        pathLength="1"
                        style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
                      />
                      <line
                        className="cross-line-svg"
                        x1="100%" y1="0" x2="0" y2="100%"
                        stroke="white" strokeWidth="2"
                        pathLength="1"
                        style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
                      />
                    </svg>
                  </div>


                  <div className="text-[#ECEEE9] heading4 tracking-widest uppercase mt-7">
                    {item.to}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}