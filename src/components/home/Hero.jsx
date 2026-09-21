'use client'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".char", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.out",
      delay: 0.2
    });
  }, { scope: container });

  const renderChars = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="w-full h-svh overflow-hidden relative z-99" ref={container}>
      <div className="relative w-full h-full">
        <video src={`/video/AboutVideo.mp4`} muted loop autoPlay className="w-full h-full object-cover object-center"></video>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="w-full h-full px-5 pb-10 sm:px-10 sm:pb-20 absolute bottom-0 left-0 flex flex-col text-center items-center justify-center">
        <h1 className="heading1 text-[#FBFBF7] ">
          {renderChars("THE INTELLIGENCE ")}
          <br className="hidden sm:block" />
          {renderChars("BEHIND ")}
          <span className="text-[#EE2F2E]">
            {renderChars("SAFER ")}
          </span>
          <br className="hidden sm:block" />
          <span className="text-[#EE2F2E]">
            {renderChars("DRIVES !")}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;