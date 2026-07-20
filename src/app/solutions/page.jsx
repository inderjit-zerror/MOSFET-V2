"use client";

import { useState } from "react";
import { Fraunces, Inter } from "next/font/google";
import InTitle2 from "@/components/common/InTitle2";
import InTitle from "@/components/common/InTitle";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});



/* -------------------------------------------------------------------- */
/*  Page                                                                 */
/* -------------------------------------------------------------------- */

export default function ShapeLandingPage() {
  const [email, setEmail] = useState("");

  return (
    <main
      className={`${fraunces.variable} ${inter.variable} min-h-screen pt-[15vh] BGTint font-body text-[#1E1C18]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <style>{`.font-display { font-family: var(--font-display), serif; }`}</style>


        <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center pb-[6vw] md:pb-[4vw] px-[4vw] border-b border-gray-200">

        <InTitle txt={'industrial process engineering'} />

        <h1 className="heading1 mb-[1.5rem] text-[#212121] max-w-[45rem]">
          Scientific depth.
          <br />
          Industrial perspective.
        </h1>

        <p className="paragraph max-w-[38rem] PH text-[#212121]">
           MOSFET is introducing a suite of advanced solutions that combine precision-engineered hardware with powerful AI-based software.
        </p>
      </div>

      

      {/* bento grid — desktop uses named areas; stacks to a single
          column on small screens */}
      <div
        className="grid grid-cols-1 md:grid-cols-4"
        style={{
          gridTemplateAreas: `
            "hero    hero    small1  small2"
            "hero    hero    story   story"
            "detail  detail  detail  detail"
            "access  parts   stay    stay"
            "crop    crop    stay    stay"
          `,
        }}
      >
        {/* HERO — large tall speaker cell */}
        <div
          style={{ gridArea: "hero" }}
          className="flex min-h-[420px] flex-col justify-between border-b border-r border-[#DAD4C6] md:min-h-[600px] "
        >
          
        <img src="https://images.unsplash.com/photo-1624602482469-3cd73308e649?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZGFzaGNhbXxlbnwwfHwwfHx8MA%3D%3D" alt="IMG" className="w-full h-full object-cover object-center " />
        </div>

        {/* SMALL 1 — soundbar-ish slim device */}
        <div
          style={{ gridArea: "small1" }}
          className="flex min-h-[220px] flex-col justify-between border-b border-r border-[#DAD4C6]"
        >
           <img src="https://images.unsplash.com/photo-1643686978109-499f1e9d4bd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwZGFzaGNhbXxlbnwwfHwwfHx8MA%3D%3D" alt="IMG" className="w-full h-full object-cover object-center " />
        
        </div>

        {/* SMALL 2 — headphone case */}
        <div
          style={{ gridArea: "small2" }}
          className="flex min-h-[220px] overflow-hidden flex-col justify-between border-b border-[#DAD4C6] "
        >
          <img src="https://images.unsplash.com/photo-1621217873309-2046fa41d06f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwZGFzaGNhbXxlbnwwfHwwfHx8MA%3D%3D" alt="IMG" className="w-full h-full object-cover object-center " />
        </div>

        {/* STORY — centered serif moment */}
        <div
          style={{ gridArea: "story" }}
          className="flex min-h-[280px] flex-col border-b border-[#DAD4C6]"
        >
          <img src="https://images.unsplash.com/photo-1624602482469-3cd73308e649?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZGFzaGNhbXxlbnwwfHwwfHx8MA%3D%3D" alt="IMG" className="w-full h-full object-cover object-center " />
        </div>

        {/* DETAIL — full-width dark rear macro */}
        <div style={{ gridArea: "detail" }} className="relative min-h-[300px] overflow-hidden md:min-h-[380px]">
          <img src="https://images.unsplash.com/photo-1621217899086-01f0e603009e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="IMG" className="w-full h-full object-cover object-center " />
        </div>

        {/* ACCESS — accessories cell */}
        <div
          style={{ gridArea: "access" }}
          className="flex min-h-[240px] flex-col justify-between border-r border-t border-[#DAD4C6] "
        >
          <img src="https://images.unsplash.com/photo-1616874946786-787aed76ba0d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" alt="IMG" className="w-full h-full object-cover object-center " />
        </div>

        {/* PARTS — mini speaker cell */}
        <div
          style={{ gridArea: "parts" }}
          className="flex min-h-[240px] flex-col justify-between border-t border-[#DAD4C6] "
        >
          <img src="https://images.unsplash.com/photo-1684239784136-324d4d6d4e90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8" alt="IMG" className="w-full h-full object-cover object-center " />
        </div>

        {/* CROP — partial environment shot, bottom-left */}
        <div style={{ gridArea: "crop" }} className="relative min-h-[220px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1689610368048-bad91d5e83f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8" alt="IMG" className="w-full h-full object-cover object-center " />
        </div>

        {/* STAY — dark newsletter + hero product panel */}
        <div
          style={{ gridArea: "stay" }}
          className="relative flex min-h-[460px] flex-col justify-between overflow-hidden bg-[#1C1B19] text-[#F4F1EA] md:min-h-0"
        >
          
            <img src="https://images.unsplash.com/photo-1659671028317-d627773e4a96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8" alt="IMG" className="w-full h-full object-cover object-center " />
         
        </div>
      </div>
    </main>
  );
}