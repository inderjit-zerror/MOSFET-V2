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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className=" px-[5vw] py-[2.5vw] BGTint overflow-hidden z-99">

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden  BGRed py-20 sm:py-28 lg:py-32 "
      >
        {/* Grid lines background — 2 vertical + 1 horizontal, like the reference */}
      <GridLine />

        <img
          ref={img1Ref}
          src="https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69c11bd92b5c0718bbf9b215_im121212121age%202718.avif"
          alt="IMG"
          aria-hidden="true"
          className="pointer-events-none absolute  scale-[4] bottom-[25%] right-[5%] w-[6vw] select-none will-change-transform"
        />
        <img
          ref={img2Ref}
          src="https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69c56aad7c1deab674da18d1_final%20cta.png"
          alt="IMG"
          aria-hidden="true"
          className="pointer-events-none absolute  scale-[4] bottom-[25%] left-[5%] w-[6vw] select-none will-change-transform"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h1 className="heading1 leading-[1.1] text-[#FBFBF8]! sm:text-[3.25rem] lg:text-[4rem]">
            An at-the-source approach to cement decarbonization
          </h1>

          <p className=" paragraph my-6 max-w-2xl text-[1.05rem]  leading-[1.6] text-[#FBFBF8]!">
            MOSFET has officially announced the expansion of its AI-driven
            automotive solutions across India, marking a significant step in its
            global growth strategy and long-term commitment to intelligent
            mobility.
          </p>

          <Button2 txt={"Speak with us"} />

          {/* Small underline accent */}
          <div className="mt-14 h-px w-16 bg-white/25" />
        </div>
      </section>
    </div>
  );
}