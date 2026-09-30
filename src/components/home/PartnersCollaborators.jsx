"use client";

import { useRef } from "react";
import Image from "next/image";

const partners = [
  {
    name: "TATA",
    logo: <Image src="/partners/tata_new.svg" alt="TATA CARS" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "MARUTI SUZUKI",
    logo: <Image src="/partners/suzuki_new.svg" alt="SUZUKI" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "MAHINDRA",
    logo: <Image src="/partners/mahindra_twin_peaks.svg" alt="MAHINDRA" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "HYUNDAI",
    logo: <Image src="/partners/hyundai.svg" alt="HYUNDAI" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "KIA",
    logo: <Image src="/partners/kia.svg" alt="KIA" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "TOYOTA",
    logo: <Image src="/partners/toyota.svg" alt="TOYOTA" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "HONDA",
    logo: <Image src="/partners/honda_new.svg" alt="HONDA" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "MG",
    logo: <Image src="/partners/mg_new.svg" alt="MG" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "RENAULT",
    logo: <Image src="/partners/renault.svg" alt="RENAULT" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
  {
    name: "VOLKSWAGEN",
    logo: <Image src="/partners/volkswagen.svg" alt="VOLKSWAGEN" width={180} height={90} className="object-contain w-auto h-12 sm:h-16 md:h-20 opacity-70 brightness-0 invert hover:opacity-100 transition-all duration-300" />,
  },
];

export default function PartnersCollaborators() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-[#050505] text-[#ECEEE9] py-24 sm:py-32 overflow-hidden"
    >
      <style>{`
        @keyframes marqueeLeftToRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        @keyframes marqueeRightToLeft {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 30s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marqueeRightToLeft 30s linear infinite;
        }
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="mx-auto px-4 md:px-12 lg:px-16 mb-16 lg:mb-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="heading2 mt-4 text-[#EE2F2E]! ">
            <span className="">TRUSTED BY THE PEOPLE</span> WHO
            PUT OUR SOLUTIONS TO WORK.
          </h2>
          <p className="paragraph !text-[#ECEEE9]/70 max-w-2xl mt-6">
            MOSFET works with OEMs, fleet operators, dealers, and retail partners across India to bring connected vehicle technology to every kind of driver.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12 sm:gap-16">
        {/* Infinite Logo Marquee Left to Right */}
        <div className="w-full overflow-hidden flex relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[#050505] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-[#050505] after:to-transparent">
          <div className="animate-marquee-ltr flex items-center gap-16 sm:gap-24 pl-16 sm:pl-24">
            {/* Double the list for infinite scrolling effect */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}-ltr`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <div className="group text-[#ECEEE9] hover:text-[#ECEEE9] font-semibold transition-colors duration-500 scale-90 sm:scale-100 flex items-center gap-4 justify-center">
                  {partner.logo}
                  <span className="text-lg md:text-xl tracking-wider uppercase text-[#ECEEE9]/50 group-hover:text-[#ECEEE9] transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Logo Marquee Right to Left */}
        <div className="w-full overflow-hidden flex relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[#050505] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-[#050505] after:to-transparent">
          <div className="animate-marquee-rtl flex items-center gap-16 sm:gap-24 pl-16 sm:pl-24">
            {/* Double the list for infinite scrolling effect */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}-rtl`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <div className="group text-[#ECEEE9] hover:text-[#ECEEE9] font-semibold transition-colors duration-500 scale-90 sm:scale-100 flex items-center gap-4 justify-center">
                  {partner.logo}
                  <span className="text-lg md:text-xl tracking-wider uppercase text-[#ECEEE9]/50 group-hover:text-[#ECEEE9] transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}