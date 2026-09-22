"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Check } from "lucide-react";
import BlurText from "../common/BlurText";

export default function DragCompareSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", stopDragging);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <section className="relative w-full px-5 pt-16 sm:px-[3vw] sm:pt-[12vh] bg-[#ECEEE9] text-white overflow-hidden">
      <div className="relative flex flex-col items-center text-center pb-8 sm:pb-12 px-2 max-w-4xl mx-auto z-10">
        <BlurText as="h2" className="heading2 text-[#EE2F2E]  uppercase tracking-tight">
          With MOSFET. Or without.
        </BlurText>
        <p className="paragraph mt-4 text-gray-400 max-w-2xl">
          Drag the slider to see the difference between a fragmented ecosystem and a unified, connected experience.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full mx-auto h-[80vh] overflow-hidden cursor-ew-resize select-none "
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* Background Image: WITHOUT MOSFET */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/car_without_mosfet_v3.jpg"
            alt="Without MOSFET"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Floating Boxes: Without MOSFET */}
          <div className="absolute top-[15%] right-[5%] md:right-[10%] pointer-events-none hidden sm:flex items-center gap-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 py-3 px-5 rounded-md shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D97706] shrink-0" />
            <div className="flex flex-col">
              <h4 className="text-white text-sm md:text-base font-bold whitespace-nowrap">Fragmented Systems</h4>
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">DISCONNECTED</span>
            </div>
            <X className="w-5 h-5 md:w-6 md:h-6 text-[#D97706] shrink-0 ml-4" strokeWidth={3} />
          </div>

          <div className="absolute top-[45%] right-[20%] md:right-[30%] pointer-events-none hidden sm:flex items-center gap-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 py-3 px-5 rounded-md shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D97706] shrink-0" />
            <div className="flex flex-col">
              <h4 className="text-white text-sm md:text-base font-bold whitespace-nowrap">Unclear Quality</h4>
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">INCONSISTENT</span>
            </div>
            <X className="w-5 h-5 md:w-6 md:h-6 text-[#D97706] shrink-0 ml-4" strokeWidth={3} />
          </div>

          <div className="absolute bottom-[15%] right-[5%] md:right-[15%] pointer-events-none hidden sm:flex items-center gap-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 py-3 px-5 rounded-md shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D97706] shrink-0" />
            <div className="flex flex-col">
              <h4 className="text-white text-sm md:text-base font-bold whitespace-nowrap">Limited Support</h4>
              <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">RISKY</span>
            </div>
            <X className="w-5 h-5 md:w-6 md:h-6 text-[#D97706] shrink-0 ml-4" strokeWidth={3} />
          </div>
        </div>

        {/* Foreground Image: WITH MOSFET (clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/car_with_mosfet_v3.jpg"
              alt="With MOSFET"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Boxes: With MOSFET */}
            <div className="absolute top-[15%] left-[5%] md:left-[10%] pointer-events-none hidden sm:flex items-center gap-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 py-3 px-5 rounded-md shadow-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EE2F2E] shrink-0" />
              <div className="flex flex-col">
                <h4 className="text-white text-sm md:text-base font-bold whitespace-nowrap">Built for your vehicle</h4>
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">INTEGRATED</span>
              </div>
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#EE2F2E] shrink-0 ml-4" strokeWidth={3} />
            </div>

            <div className="absolute top-[45%] left-[20%] md:left-[30%] pointer-events-none hidden sm:flex items-center gap-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 py-3 px-5 rounded-md shadow-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EE2F2E] shrink-0" />
              <div className="flex flex-col">
                <h4 className="text-white text-sm md:text-base font-bold whitespace-nowrap">Engineered & tested</h4>
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">DEPENDABLE</span>
              </div>
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#EE2F2E] shrink-0 ml-4" strokeWidth={3} />
            </div>

            <div className="absolute bottom-[15%] left-[5%] md:left-[15%] pointer-events-none hidden sm:flex items-center gap-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 py-3 px-5 rounded-md shadow-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EE2F2E] shrink-0" />
              <div className="flex flex-col">
                <h4 className="text-white text-sm md:text-base font-bold whitespace-nowrap">Secure & Compliant</h4>
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">BIS-ALIGNED</span>
              </div>
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#EE2F2E] shrink-0 ml-4" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border-2 border-white rounded-full flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-4 h-4 text-white" />
            <ChevronRight className="w-4 h-4 text-white -ml-1" />
          </div>
        </div>
      </div>

      {/* <div className="text-center mt-6">
        <p className=" text-gray-500 uppercase tracking-[0.2em]">Drag or scroll to compare</p>
      </div> */}
    </section>
  );
}
