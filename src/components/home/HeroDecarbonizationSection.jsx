// // "use client";

// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // import Button2 from "../common/Button2";
// // import GridLine from "../common/GridLine";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function HeroDecarbonizationSection() {
// //   const sectionRef = useRef(null);
// //   const img1Ref = useRef(null);
// //   const img2Ref = useRef(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Image 1 - moves up slower/faster than scroll (parallax)
// //       gsap.to(img1Ref.current, {
// //         yPercent: -25,
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: "top bottom",
// //           end: "bottom top",
// //           scrub: true,
// //         },
// //       });

// //       // Image 2 - opposite direction for depth variation
// //       gsap.to(img2Ref.current, {
// //         yPercent: 25,
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: "top bottom",
// //           end: "bottom top",
// //           scrub: true,
// //         },
// //       });
// //     }, sectionRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <div className=" px-[3.2vw] py-[2.5vw] BGTint overflow-hidden z-99">

// //       <section
// //         ref={sectionRef}
// //         className="relative w-full overflow-hidden  BGRed py-20 sm:py-28 lg:py-32 "
// //       >
// //         {/* Grid lines background — 2 vertical + 1 horizontal, like the reference */}
// //       <GridLine />

// //         <img
// //           ref={img1Ref}
// //           src="https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69c11bd92b5c0718bbf9b215_im121212121age%202718.avif"
// //           alt="IMG"
// //           aria-hidden="true"
// //           className="pointer-events-none absolute  scale-[4] bottom-[25%] right-[5%] w-[6vw] select-none will-change-transform"
// //         />
// //         <img
// //           ref={img2Ref}
// //           src="https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69c56aad7c1deab674da18d1_final%20cta.png"
// //           alt="IMG"
// //           aria-hidden="true"
// //           className="pointer-events-none absolute  scale-[4] bottom-[25%] left-[5%] w-[6vw] select-none will-change-transform"
// //         />

// //         {/* Content */}
// //         <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
// //           <h1 className="heading1 text-[#FBFBF8]!">
// //             An at-the-source approach to cement decarbonization
// //           </h1>

// //           <p className=" paragraph my-6 PH max-w-2xl text-[#FBFBF8]!">
// //             MOSFET has officially announced the expansion of its AI-driven
// //             automotive solutions across India, marking a significant step in its
// //             global growth strategy and long-term commitment to intelligent
// //             mobility.
// //           </p>

// //           <Button2 txt={"Speak with us"} />

// //           {/* Small underline accent */}
// //           <div className="mt-14 h-px w-16 bg-white/25" />
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Button2 from "../common/Button2";
// import GridLine from "../common/GridLine";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroDecarbonizationSection() {
//   const sectionRef = useRef(null);
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Image 1 - moves up slower/faster than scroll (parallax)
//       gsap.to(img1Ref.current, {
//         yPercent: -25,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       // Image 2 - opposite direction for depth variation
//       gsap.to(img2Ref.current, {
//         yPercent: 25,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="px-4 py-10 sm:px-[3.2vw] sm:py-[2.5vw] BGTint overflow-hidden z-99">
//       <section
//         ref={sectionRef}
//         className="relative w-full overflow-hidden BGRed py-16 sm:py-28 lg:py-32"
//       >
//         {/* Grid lines background — 2 vertical + 1 horizontal, like the reference */}
//         <GridLine />

//         <img
//           ref={img1Ref}
//           src="https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69c11bd92b5c0718bbf9b215_im121212121age%202718.avif"
//           alt="IMG"
//           aria-hidden="true"
//           className="pointer-events-none absolute hidden sm:block scale-[4] bottom-[25%] right-[5%] w-[6vw] select-none will-change-transform"
//         />
//         <img
//           ref={img2Ref}
//           src="https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69c56aad7c1deab674da18d1_final%20cta.png"
//           alt="IMG"
//           aria-hidden="true"
//           className="pointer-events-none absolute hidden sm:block scale-[4] bottom-[25%] left-[5%] w-[6vw] select-none will-change-transform"
//         />

//         {/* Content */}
//         <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
//           <h1 className="heading1 text-[#FBFBF8]!">
//             An at-the-source approach to cement decarbonization
//           </h1>

//           <p className="paragraph my-5 sm:my-6 PH max-w-2xl text-[#FBFBF8]!">
//             MOSFET has officially announced the expansion of its AI-driven
//             automotive solutions across India, marking a significant step in
//             its global growth strategy and long-term commitment to
//             intelligent mobility.
//           </p>

//           <Button2 txt={"Speak with us"} />

//           {/* Small underline accent */}
//           <div className="mt-10 sm:mt-14 h-px w-16 bg-white/25" />
//         </div>
//       </section>
//     </div>
//   );
// }


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
    <div className="px-4 py-10 sm:px-[3.2vw] sm:py-[2.5vw] BGTint overflow-hidden z-99">
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden BGRed py-16 sm:py-28 lg:py-32"
      >
        {/* Grid lines background — 2 vertical + 1 horizontal, like the reference */}
        <GridLine />

        <img
          ref={img1Ref}
          src="/try4.png"
          alt="IMG"
          aria-hidden="true"
          className="pointer-events-none absolute hidden sm:block scale-[4] bottom-[25%] right-[0%] w-[6vw] select-none will-change-transform"
        />
        <img
          ref={img2Ref}
          src="/try6.png"
          alt="IMG"
          aria-hidden="true"
          className="pointer-events-none absolute hidden sm:block scale-[4] bottom-[25%] left-[0%] w-[6vw] select-none will-change-transform"
        />
        <img
          ref={img1Ref}
          src="/try7.png"
          alt="IMG"
          aria-hidden="true"
          className="pointer-events-none absolute hidden sm:block scale-[3] bottom-[80%] right-[0%] w-[6vw] select-none will-change-transform"
        />

        <img
          ref={img1Ref}
          src="/try9.png"
          alt="IMG"
          aria-hidden="true"
          className="pointer-events-none absolute hidden sm:block scale-[3] bottom-[80%] left-[0%] w-[6vw] select-none will-change-transform"
        />


        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6 text-center">

          {/* New Text Block from Image */}
          <div className=" w-full">
            <h2 className="heading1 text-[#FBFBF8] uppercase text-center tracking-tight mb-16">
              NOW IMAGINE IT <span className="text-[#101010]">DONE BETTER.</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 sm:gap-6 w-full mx-auto">
              {[
                { from: 'COMPLEX', to: 'SIMPLE' },
                { from: 'UNCERTAIN', to: 'DEPENDABLE' },
                { from: 'COST', to: 'VALUE' },
                { from: 'PROBLEM', to: 'SOLUTION' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="relative text-white/70 tracking-[0.15em] uppercase">
                    {item.from}
                    <span className="absolute top-1/2 left-[-10%] w-[120%] h-[2px] bg-[#101010] -translate-y-1/2"></span>
                  </div>

                  <div className="w-[1px] h-8 sm:h-10 bg-white/50 my-5"></div>

                  <div className="text-[#FBFBF8] tracking-widest uppercase">
                    {item.to}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <h1 className="heading1 text-[#FBFBF8]!">
            Ready to Upgrade Your Ride?
          </h1>

          <p className="paragraph my-5 sm:my-6 PH max-w-2xl text-[#FBFBF8]!">
            From dash cams to audio and lighting, MOSFET builds the tech that keeps you safer, informed, and in control — on every route, every time.
          </p>

          <Button2 txt={"Speak with us"} /> */}

          {/* Small underline accent */}
          {/* <div className="mt-10 sm:mt-14 h-px w-16 bg-white/25" /> */}
        </div>
      </section>
    </div>
  );
}