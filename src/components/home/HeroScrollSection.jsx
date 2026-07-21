// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Button from "../common/Button";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroScrollSection() {
//   const sectionRef = useRef(null);
//   const marqueeTrackRef = useRef(null);
//   const videoWrapRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const TL = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//       });

//       gsap.to(marqueeTrackRef.current, {
//         xPercent: -50,
//         duration: 18,
//         ease: "none",
//         repeat: -1,
//       });

//       TL.fromTo(
//         videoWrapRef.current,
//         {
//           width: "40vw",
//           height: "24vw",
//         },
//         {
//           width: "100vw",
//           height: "100vh",
//           borderRadius: "0rem",
//           ease: "none",
//         },
//       );
//       TL.to(".TopDetailSection", {
//         opacity: 1,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={sectionRef} className=" relative w-full h-[200svh]  z-99">
//       <section className="sticky top-0 left-0 h-[100svh] w-full overflow-hidden BGRed">
//         {/* ---------------- Infinite marquee background text ---------------- */}
//         <div className="pointer-events-none absolute left-0 top-1/2 z-0 w-full -translate-y-1/2 overflow-hidden">
//           <div
//             ref={marqueeTrackRef}
//             className="flex w-max whitespace-nowrap will-change-transform"
//           >
//             {/* Copy 1 */}
//             <span className="pr-[3vw] heading1 text-[9vw]! font-extrabold leading-none tracking-tight TextTint">
//               NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;
//             </span>
//             {/* Copy 2 (identical, required for the seamless loop) */}
//             <span className="pr-[3vw] heading1 text-[9vw]! font-extrabold leading-none tracking-tight TextTint">
//               NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;
//             </span>
//           </div>
//         </div>

//         {/* ---------------- Centered video that grows on scroll ---------------- */}
//         <div className="relative  flex h-full w-full items-center justify-center z-99 ">
//           <div
//             ref={videoWrapRef}
//             className="relative overflow-hidden shadow-2xl "
//             style={{ width: "40vw", height: "24vw" }}
//           >
//             <video
//               className="h-full w-full object-cover"
//               src="https://www.pexels.com/download/video/36330665/"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//           </div>
//         </div>

//         <section className=" TopDetailSection w-full overflow-hidden opacity-0  h-full absolute top-0 left-0 z-99">
//           {/* Background image */}

//           {/* Dark overlay for text legibility */}
//           <div className="absolute inset-0 bg-black/50" />

//           <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[90rem] items-center px-[6vw] py-24">
//             <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
//               {/* Left: Heading */}
//               <h2 className="heading1  leading-[1.1] text-[#ECEEE9]! sm:text-[3.5rem] lg:text-[4rem]">
//                 Smarter Tech <br /> for Safer Vehicles <br />AI-driven automotive solutions across India
//               </h2>

//               {/* Right: Copy + CTA */}
//               <div className="flex flex-col justify-center">
//                 <p className=" paragraph leading-[1.6] text-[#ECEEE9]!">
//                  MOSFET has officially announced the expansion of its AI-driven automotive solutions across India, marking a significant step in its global growth strategy and long-term commitment to intelligent mobility. This initiative is aimed at addressing the increasing demand for connected, data-driven, and safety-focused vehicle technologies in India’s rapidly evolving automotive ecosystem.
//                 </p>

//                 <p className="paragraph mt-6 text-[1.15rem] leading-[1.6] text-[#ECEEE9]!">
//                  As part of this expansion, MOSFET is introducing a suite of advanced solutions that combine precision-engineered hardware with powerful AI-based software.
//                 </p>

//                 <div className="mt-10">
//                   <Button txt={"Learn about our tech"} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </section>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollSection() {
  const sectionRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const videoWrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const TL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(marqueeTrackRef.current, {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      const isMobile = window.matchMedia("(max-width: 640px)").matches;

      TL.fromTo(
        videoWrapRef.current,
        {
          width: isMobile ? "80vw" : "40vw",
          height: isMobile ? "48vw" : "24vw",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0rem",
          ease: "none",
        },
      );
      TL.to(".TopDetailSection", {
        opacity: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className=" relative w-full h-[200svh]  z-99">
      <section className="sticky top-0 left-0 h-[100svh] w-full overflow-hidden BGRed">
        {/* ---------------- Infinite marquee background text ---------------- */}
        <div className="pointer-events-none absolute left-0 top-1/2 z-0 w-full -translate-y-1/2 overflow-hidden">
          <div
            ref={marqueeTrackRef}
            className="flex w-max whitespace-nowrap will-change-transform"
          >
            {/* Copy 1 */}
            <span className="pr-[3vw] heading1 text-[13vw]! sm:text-[9vw]! font-extrabold leading-none tracking-tight TextTint">
              NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;
            </span>
            {/* Copy 2 (identical, required for the seamless loop) */}
            <span className="pr-[3vw] heading1 text-[13vw]! sm:text-[9vw]! font-extrabold leading-none tracking-tight TextTint">
              NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;NATURE&nbsp;AT&nbsp;SOURCE&nbsp;•&nbsp;
            </span>
          </div>
        </div>

        {/* ---------------- Centered video that grows on scroll ---------------- */}
        <div className="relative  flex h-full w-full items-center justify-center z-99 ">
          <div
            ref={videoWrapRef}
            className="relative overflow-hidden shadow-2xl w-[80vw] h-[48vw] sm:w-[40vw] sm:h-[24vw]"
          >
            <video
              className="h-full w-full object-cover"
              src="https://www.pexels.com/download/video/36330665/"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <section className=" TopDetailSection w-full overflow-hidden opacity-0  h-full absolute top-0 left-0 z-99">
          {/* Background image */}

          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[90rem] items-center px-5 py-16 sm:px-[6vw] sm:py-24">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
              {/* Left: Heading */}
              <h2 className="heading1 leading-[1.1] text-[1.9rem]! text-[#ECEEE9]! sm:text-[3.5rem]! lg:text-[4rem]!">
                Smarter Tech <br className="hidden sm:block" /> for Safer Vehicles <br className="hidden sm:block" />AI-driven automotive solutions across India
              </h2>

              {/* Right: Copy + CTA */}
              <div className="flex flex-col justify-center">
                <p className=" paragraph leading-[1.6] text-[#ECEEE9]!">
                 MOSFET has officially announced the expansion of its AI-driven automotive solutions across India, marking a significant step in its global growth strategy and long-term commitment to intelligent mobility. This initiative is aimed at addressing the increasing demand for connected, data-driven, and safety-focused vehicle technologies in India’s rapidly evolving automotive ecosystem.
                </p>

                <p className="paragraph mt-6 text-[1rem] sm:text-[1.15rem] leading-[1.6] text-[#ECEEE9]!">
                 As part of this expansion, MOSFET is introducing a suite of advanced solutions that combine precision-engineered hardware with powerful AI-based software.
                </p>

                <div className="mt-8 sm:mt-10">
                  <Button txt={"Learn about our tech"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}