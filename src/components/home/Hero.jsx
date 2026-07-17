import Link from "next/link";
import React from "react";
import Button from "../common/Button";

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

      <div className="w-full h-full px-10 pb-20 absolute bottom-0 left-0 flex flex-col justify-end">
        <h1 className="heading1 text-[5rem]! text-[#FBFBF7] ">
          Mosfet - Smarter Tech <br /> for Safer Vehicles
        </h1>

        <div className="paragraph my-5 max-w-[40vw] text-[#FBFBF7]! space-y-7">
          <p>
            MOSFET is an advanced automotive technology company dedicated to
            building intelligent, connected, and safety-driven vehicle
            ecosystems for modern mobility.
          </p>
        </div>

       <Button txt={'Speak with us'} />
      </div>
    </div>
  );
};

export default Hero;
