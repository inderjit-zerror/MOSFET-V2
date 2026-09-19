"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

const partners = [
  {
    name: "AUTOYOU",
    href: "#",
    logo: <span className="text-[20px] lg:text-[24px] font-black tracking-widest uppercase">AUTOYOU</span>,
  },
  {
    name: "MOBIS",
    href: "#",
    logo: <span className="text-[22px] lg:text-[26px] font-bold tracking-wider uppercase">MOBIS</span>,
  },
  {
    name: "ADOBE",
    href: "#",
    logo: <span className="text-[24px] lg:text-[28px] font-black tracking-tight uppercase">ADOBE</span>,
  },
  {
    name: "AVL",
    href: "#",
    logo: <span className="text-[28px] lg:text-[34px] font-black italic tracking-tighter uppercase">AVL</span>,
  },
  {
    name: "MG",
    href: "#",
    logo: (
      <span className="flex flex-col items-center">
        <span className="text-[26px] lg:text-[32px] font-bold leading-none">MG</span>
        <span className="text-[8px] font-medium tracking-widest mt-1 uppercase text-center">Morris Garages</span>
      </span>
    ),
  },
  {
    name: "TATA CARS",
    href: "#",
    logo: <span className="text-[18px] lg:text-[22px] font-black tracking-tighter uppercase text-center">TATA CARS</span>,
  },
  {
    name: "SUZUKI",
    href: "#",
    logo: <span className="text-[22px] lg:text-[26px] font-black tracking-tight uppercase">SUZUKI</span>,
  },
  {
    name: "HONDA",
    href: "#",
    logo: <span className="text-[22px] lg:text-[26px] font-bold tracking-widest uppercase">HONDA</span>,
  },
  {
    name: "CITROËN",
    href: "#",
    logo: <span className="text-[20px] lg:text-[24px] font-light tracking-widest uppercase">CITROËN</span>,
  },
  {
    name: "GOMECHANIC",
    href: "#",
    logo: <span className="text-[16px] lg:text-[20px] font-black tracking-tight uppercase text-center">GOMECHANIC</span>,
  },
  {
    name: "MOTHERSON",
    href: "#",
    logo: <span className="text-[16px] lg:text-[20px] font-bold tracking-widest uppercase text-center">MOTHERSON</span>,
  },
  {
    name: "DYLECT",
    href: "#",
    logo: <span className="text-[20px] lg:text-[24px] font-black tracking-widest uppercase">DYLECT</span>,
  },
  {
    name: "CATS",
    href: "#",
    logo: (
      <span className="flex flex-col items-center">
        <span className="text-[26px] lg:text-[32px] font-black leading-none">CATS</span>
        <span className="text-[7px] font-bold tracking-widest mt-2 text-center uppercase leading-tight">Centralized Ambulance<br />Transport Services</span>
      </span>
    ),
  },
  {
    name: "LANDMARK",
    href: "#",
    logo: (
      <span className="flex flex-col items-center">
        <span className="text-[20px] lg:text-[24px] font-black leading-none">LANDMARK</span>
        <span className="text-[8px] font-bold tracking-widest mt-1 uppercase text-center">You Drive Us</span>
      </span>
    ),
  },
  {
    name: "YOUR BRAND",
    href: "#",
    logo: (
      <span className="text-[12px] lg:text-[14px] font-medium tracking-widest text-white/40 uppercase">
        Join the Network
      </span>
    )
  }
];

export default function PartnersCollaborators() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partner-cell", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#050505] text-white py-24 sm:py-32 px-4 md:px-12 lg:px-16"
    >
      <div className=" mx-auto">

        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <h2 className="heading1 mt-4 !text-white">
            <span className="text-[red]">  TRUSTED BY THE PEOPLE </span> WHO
            PUT OUR SOLUTIONS TO WORK.
          </h2>
          <p className="paragraph !text-white/70 max-w-2xl mt-6">
            MOSFET works with OEMs, fleet operators, dealers, and retail partners across India to bring connected vehicle technology to every kind of driver.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-white/30">
          {partners.map((partner, i) => (
            <a
              key={partner.name}
              href={partner.href}
              className="partner-cell group flex items-center justify-center h-32 sm:h-40 lg:h-48 border-r border-b border-white/30 hover:bg-white/[0.03] transition-colors duration-500"
            >
              <div className="text-white/60 group-hover:text-white transition-colors duration-500 scale-90 sm:scale-100">
                {partner.logo}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}