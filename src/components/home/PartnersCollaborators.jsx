"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

const partners = [
  {
    name: "AUTOYOU",
    href: "#",
    logo: <span className="tracking-widest uppercase font-bold text-sm sm:text-base md:text-lg opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 text-center">AUTOYOU</span>,
  },
  {
    name: "MOBIS",
    href: "#",
    logo: <span className="tracking-widest uppercase font-bold text-sm sm:text-base md:text-lg opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 text-center">MOBIS</span>,
  },
  {
    name: "ADOBE",
    href: "#",
    logo: <Image src="/partners/adobe.png" alt="ADOBE" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "AVL",
    href: "#",
    logo: <Image src="/partners/avl.png" alt="AVL" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "MG",
    href: "#",
    logo: <Image src="/partners/mg.png" alt="MG" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "TATA CARS",
    href: "#",
    logo: <Image src="/partners/tata.svg" alt="TATA CARS" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "SUZUKI",
    href: "#",
    logo: <span className="tracking-widest uppercase font-bold text-sm sm:text-base md:text-lg opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 text-center">SUZUKI</span>,
  },
  {
    name: "HONDA",
    href: "#",
    logo: <Image src="/partners/honda.svg" alt="HONDA" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "CITROËN",
    href: "#",
    logo: <Image src="/partners/citroen.png" alt="CITROËN" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "GOMECHANIC",
    href: "#",
    logo: <Image src="/partners/gomechanic.png" alt="GOMECHANIC" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "MOTHERSON",
    href: "#",
    logo: <Image src="/partners/motherson.png" alt="MOTHERSON" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "DYLECT",
    href: "#",
    // logo: <Image src="/partners/dylect.png" alt="DYLECT" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
    logo: (
      <span className="flex flex-col items-center opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
        <span className="font-bold text-sm sm:text-base md:text-lg">DYLECT</span>
      </span>
    ),
  },
  {
    name: "CATS",
    href: "#",
    logo: (
      <span className="flex flex-col items-center opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
        <span className="font-bold text-sm sm:text-base md:text-lg">CATS</span>
      </span>
    ),
  },
  {
    name: "LANDMARK",
    href: "#",
    logo: (
      <span className="flex flex-col items-center opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
        <span className="font-bold text-sm sm:text-base md:text-lg">LANDMARK</span>
      </span>
    ),
  },
  {
    name: "YOUR BRAND",
    href: "#",
    logo: <Image src="/partners/yourbrand.svg" alt="YOUR BRAND" width={120} height={60} className="object-contain w-auto h-8 sm:h-10 md:h-12 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
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
          <h2 className="heading2 mt-4 !text-white">
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
              <div className="text-white/60 group-hover:text-white font-semibold! transition-colors duration-500 scale-90 sm:scale-100">
                {partner.logo}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}