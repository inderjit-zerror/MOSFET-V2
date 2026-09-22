'use client'
import React from "react";
import BlurText from "@/components/common/BlurText";

const Hero = () => {
  return (
    <div className="w-full h-svh overflow-hidden relative z-99">
      <div className="relative w-full h-full">
        <video src={`/video/HV.mp4`} muted loop autoPlay className="w-full h-full object-cover object-center"></video>

        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="w-full h-full px-5 pb-10 sm:px-10 sm:pb-20 absolute bottom-0 left-0 flex flex-col text-center items-center justify-center">
        <BlurText as="h1" className="heading1 text-[#FBFBF7]">
          THE INTELLIGENCE <br className="hidden sm:block" />
          BEHIND <span className="text-[#EE2F2E]">SAFER </span>
          <br className="hidden sm:block" />
          <span className="text-[#EE2F2E]">DRIVES !</span>
        </BlurText>
      </div>
    </div>
  );
};

export default Hero;