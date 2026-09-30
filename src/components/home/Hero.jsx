'use client'
import React from "react";
import BlurText from "@/components/common/BlurText";

const Hero = () => {
  return (
    <div className="w-full h-svh overflow-hidden relative z-99">
      <div className="relative w-full h-full">
        <video src={`/video/HHvideo.mp4`} muted loop autoPlay className="w-full h-full object-cover object-center"></video>

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 text-white/80 hover:text-white transition-colors cursor-pointer">

        <svg
          width="24" height="24"
          viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="animate-bounce mt-1"
        >
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;