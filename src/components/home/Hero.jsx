import Link from "next/link";
import React from "react";
import Button from "../common/Button";
import Button2 from "../common/Button2";

const Hero = () => {
  return (
    <div className="w-full h-svh overflow-hidden relative z-99">
      <div className="relative w-full h-full">
        {/* <img
          src="/images/home/Home_Hero.jpg"
          alt="IMG"
          className="w-full h-full object-cover object-bottom"
        /> */}

        <video src={`/video/HEROHOME.mp4`} muted loop autoPlay className="w-full h-full object-cover object-center"></video>

        {/* Black Tint */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* <div className="absolute inset-0 bg-[linear-gradient(20deg,rgba(238,47,47,0.8)_0%,rgba(238,47,47,0.55)_35%,rgba(238,47,47,0.25)_65%,rgba(238,47,47,0)_100%)]"></div> */}

      <div className="w-full h-full px-5 pb-10 sm:px-10 sm:pb-20 absolute bottom-0 left-0 flex flex-col justify-end">
        <h1 className="heading1 text-[2.25rem]! sm:text-[3.25rem]! lg:text-[5rem]! text-[#FBFBF7] ">
          THE INTELLIGENCE <br className="hidden sm:block" />
          BEHIND SAFER <br className="hidden sm:block" />
          DRIVES!
        </h1>

        <div className="paragraph my-4 sm:my-5 max-w-full sm:max-w-[70vw] lg:max-w-[40vw] text-[#FBFBF7]! PH space-y-2">
          <p>
            We engineer OEM-specific camera, telematics and sensory solutions that make automotive businesses safer, simpler and more dependable.
          </p>
          <p >
            One partner for camera, telematics, software and Made-in-India certified hardware. Built around your vehicle, not bolted on.

          </p>
        </div>

        <div className="w-fit flex gap-5">
          <Button txt={'DISCOVER OUR SOLUTIONS'} />
          <Button2 txt={'WHY MOSFET TECH?'} />
        </div>
      </div>
    </div>
  );
};

export default Hero;