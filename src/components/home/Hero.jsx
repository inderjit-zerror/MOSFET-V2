import React from "react";


const Hero = () => {
  return (
    <div className="w-full h-svh overflow-hidden relative z-99">
      <div className="relative w-full h-full">
        <video src={`/video/HEROHOME.mp4`} muted loop autoPlay className="w-full h-full object-cover object-center"></video>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="w-full h-full px-5 pb-10 sm:px-10 sm:pb-20 absolute bottom-0 left-0 flex flex-col text-center items-center justify-center">
        <h1 className="heading1 text-[3.25rem]! sm:text-[4.25rem]! lg:text-[6rem]! text-[#FBFBF7] ">
          THE INTELLIGENCE <br className="hidden sm:block" />
          BEHIND SAFER <br className="hidden sm:block" />
          DRIVES
          <span className="text-[#EE2F2E]">
            !
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;