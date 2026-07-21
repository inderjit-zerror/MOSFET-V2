// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import InTitle from "../common/InTitle";
// import GridLine from "../common/GridLine";

// const partners = [
//   {
//     name: "Captura",
//     href: "https://capturacorp.com",
//     image:
//       "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=700&q=80",
//     logo: <span className="text-[30px] font-medium tracking-[-0.06em]">captura</span>,
//   },
//   {
//     name: "UCceed",
//     href: "#",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
//     logo: (
//       <span className="leading-none">
//         <span className="block text-[11px] font-black tracking-[-0.04em]">
//           UNIVERSITY OF CALGARY
//         </span>
//         <span className="block text-[10px] font-medium tracking-[-0.03em]">
//           UCceed Startup Investment Funds
//         </span>
//       </span>
//     ),
//   },
//   {
//     name: "NorthX Climate Tech",
//     href: "#",
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
//     logo: <span className="text-[40px] font-black tracking-[-0.16em]">Nx</span>,
//   },
//   {
//     name: "Amplify Capital",
//     href: "#",
//     image:
//       "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80",
//     logo: (
//       <span className="text-[25px] font-light uppercase leading-[0.76] tracking-[-0.08em]">
//         <span className="block">Amplify</span>
//         <span className="block">Capital</span>
//       </span>
//     ),
//   },
//   {
//     name: "Zacua Ventures",
//     href: "#",
//     image:
//       "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80",
//     logo: (
//       <span className="relative block h-8 w-24">
//         <span className="absolute left-1 top-1 h-4 w-12 skew-x-[-35deg] bg-current" />
//         <span className="absolute left-6 top-4 h-4 w-14 skew-x-[35deg] bg-current" />
//       </span>
//     ),
//   },
//   {
//     name: "Acciona",
//     href: "#",
//     image:
//       "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80",
//     logo: (
//       <span className="flex items-center gap-2">
//         <span className="h-12 w-7 rounded-l-full border-l-2 border-t-2 border-current" />
//         <span className="text-[31px] font-bold tracking-[-0.08em]">acciona</span>
//       </span>
//     ),
//   },
//   {
//     name: "Aecon",
//     href: "#",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
//     logo: <span className="text-[29px] font-black italic tracking-[0.04em]">AECON</span>,
//   },
//   {
//     name: "Grand Forks Concrete",
//     href: "#",
//     image:
//       "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80",
//     logo: (
//       <span className="flex items-center gap-2">
//         <span className="text-[30px] font-black tracking-[-0.04em]">GFC</span>
//         <span className="h-8 w-px bg-current" />
//         <span className="text-[11px] font-black uppercase leading-[0.94] tracking-[-0.03em]">
//           <span className="block">Grand Forks</span>
//           <span className="block">Concrete</span>
//         </span>
//       </span>
//     ),
//   },
// ];

// export default function PartnersCollaborators() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".eyebrow", {
//         y: 12,
//         opacity: 0,
//         duration: 0.65,
//         ease: "power3.out",
//       });

//       gsap.from(".copy-block > *", {
//         y: 26,
//         opacity: 0,
//         duration: 0.9,
//         stagger: 0.12,
//         delay: 0.08,
//         ease: "power3.out",
//       });

//       gsap.from(".partner-card", {
//         y: 34,
//         opacity: 0,
//         scale: 0.97,
//         duration: 0.85,
//         stagger: 0.075,
//         delay: 0.18,
//         ease: "power3.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-fit overflow-hidden bg-[#eceee9] text-black z-99"
//     >

//         <GridLine />

//       <div className="relative mx-auto grid h-fit max-w-[1900px] grid-cols-1 px-6 py-20 sm:px-10 lg:grid-cols-[47.5%_52.5%] lg:px-[3vw] lg:py-[15vh]">
//         <div className="flex max-w-[560px] flex-col items-start lg:pt-0">
//           {/* <div className="eyebrow mb-12 rounded-full bg-[#EE2F2E] px-4 py-3 text-[13px] font-medium uppercase tracking-[-0.02em] text-[white] lg:mb-11">
            
//           </div> */}

//           <InTitle txt={'The Cura Ecosystem'} />

//           <div className="copy-block">
//             <h1 className="heading1 max-w-[520px]">
//               Partners &amp; Collaborators
//             </h1>

//             <div className="paragraph mt-12 max-w-[470px] PH space-y-7">
//               <p>
//                 CURA works alongside industrial operators, academic institutions,
//                 and strategic collaborators to validate and scale its upstream
//                 approach.
//               </p>
//               <p>
//                 Our focus is disciplined progress from laboratory validation
//                 through pilot deployment.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 ml-auto grid  max-w-[46vw] grid-cols-2 gap-5 self-start sm:grid-cols-4 lg:mt-0 lg:gap-[1.12vw]">
//           {partners.map((partner) => (
//             <a
//               key={partner.name}
//               href={partner.href}
//               className="partner-card group w-full relative flex aspect-[0.81] min-h-[210px] overflow-hidden bg-[#fbfbf8] text-[#202320] outline-none sm:min-h-[250px] lg:min-h-[250px]"
//             >
//               <div
//                 className="absolute inset-0 scale-[1.08] bg-cover bg-center opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
//                 style={{ backgroundImage: `url(${partner.image})` }}
//               />
//               <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />

//               <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-8 text-current transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-white group-focus-visible:-translate-y-0.5 group-focus-visible:text-white lg:px-6 lg:py-8">
//                 <div className="flex min-h-16 items-center">{partner.logo}</div>
//                 <p className="text-[16px] font-normal leading-none tracking-[-0.04em]">
//                   {partner.name}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

const partners = [
  {
    name: "Captura",
    href: "https://capturacorp.com",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=700&q=80",
    logo: <span className="text-[30px] font-medium tracking-[-0.06em]">captura</span>,
  },
  {
    name: "UCceed",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
    logo: (
      <span className="leading-none">
        <span className="block text-[11px] font-black tracking-[-0.04em]">
          UNIVERSITY OF CALGARY
        </span>
        <span className="block text-[10px] font-medium tracking-[-0.03em]">
          UCceed Startup Investment Funds
        </span>
      </span>
    ),
  },
  {
    name: "NorthX Climate Tech",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    logo: <span className="text-[40px] font-black tracking-[-0.16em]">Nx</span>,
  },
  {
    name: "Amplify Capital",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80",
    logo: (
      <span className="text-[25px] font-light uppercase leading-[0.76] tracking-[-0.08em]">
        <span className="block">Amplify</span>
        <span className="block">Capital</span>
      </span>
    ),
  },
  {
    name: "Zacua Ventures",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80",
    logo: (
      <span className="relative block h-8 w-24">
        <span className="absolute left-1 top-1 h-4 w-12 skew-x-[-35deg] bg-current" />
        <span className="absolute left-6 top-4 h-4 w-14 skew-x-[35deg] bg-current" />
      </span>
    ),
  },
  {
    name: "Acciona",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80",
    logo: (
      <span className="flex items-center gap-2">
        <span className="h-12 w-7 rounded-l-full border-l-2 border-t-2 border-current" />
        <span className="text-[31px] font-bold tracking-[-0.08em]">acciona</span>
      </span>
    ),
  },
  {
    name: "Aecon",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    logo: <span className="text-[29px] font-black italic tracking-[0.04em]">AECON</span>,
  },
  {
    name: "Grand Forks Concrete",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80",
    logo: (
      <span className="flex items-center gap-2">
        <span className="text-[30px] font-black tracking-[-0.04em]">GFC</span>
        <span className="h-8 w-px bg-current" />
        <span className="text-[11px] font-black uppercase leading-[0.94] tracking-[-0.03em]">
          <span className="block">Grand Forks</span>
          <span className="block">Concrete</span>
        </span>
      </span>
    ),
  },
];

export default function PartnersCollaborators() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".eyebrow", {
        y: 12,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
      });

      gsap.from(".copy-block > *", {
        y: 26,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.08,
        ease: "power3.out",
      });

      gsap.from(".partner-card", {
        y: 34,
        opacity: 0,
        scale: 0.97,
        duration: 0.85,
        stagger: 0.075,
        delay: 0.18,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-fit overflow-hidden bg-[#eceee9] text-black z-99"
    >

        <GridLine />

      <div className="relative mx-auto grid h-fit max-w-[1900px] grid-cols-1 px-6 py-20 sm:px-10 lg:grid-cols-[47.5%_52.5%] lg:px-[3vw] lg:py-[15vh]">
        <div className="flex max-w-[560px] flex-col items-start lg:pt-0">
          {/* <div className="eyebrow mb-12 rounded-full bg-[#EE2F2E] px-4 py-3 text-[13px] font-medium uppercase tracking-[-0.02em] text-[white] lg:mb-11">
            
          </div> */}

          <InTitle txt={'The Cura Ecosystem'} />

          <div className="copy-block">
            <h1 className="heading1 max-w-[520px]">
              Partners &amp; Collaborators
            </h1>

            <div className="paragraph mt-12 max-w-[470px] PH space-y-7">
              <p>
                CURA works alongside industrial operators, academic institutions,
                and strategic collaborators to validate and scale its upstream
                approach.
              </p>
              <p>
                Our focus is disciplined progress from laboratory validation
                through pilot deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 ml-auto grid w-full max-w-full lg:max-w-[46vw] grid-cols-2 gap-5 self-start sm:grid-cols-4 lg:mt-0 lg:gap-[1.12vw]">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              className="partner-card group w-full relative flex aspect-[0.81] min-h-[210px] overflow-hidden bg-[#fbfbf8] text-[#202320] outline-none sm:min-h-[250px] lg:min-h-[250px]"
            >
              <div
                className="absolute inset-0 scale-[1.08] bg-cover bg-center opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
                style={{ backgroundImage: `url(${partner.image})` }}
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />

              <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-8 text-current transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-white group-focus-visible:-translate-y-0.5 group-focus-visible:text-white lg:px-6 lg:py-8">
                <div className="flex min-h-16 items-center">{partner.logo}</div>
                <p className="text-[16px] font-normal leading-none tracking-[-0.04em]">
                  {partner.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}