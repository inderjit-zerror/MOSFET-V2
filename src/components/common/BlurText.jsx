"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function BlurText({ as: Tag = "h2", children, className }) {
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;

    // We use split-type here because it works well without a GSAP premium license
    // and is already in package.json
    const split = new SplitType(textRef.current, { types: "chars, words" });

    // Set initial state
    gsap.set(split.chars, {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    });

    // Animate on scroll
    gsap.to(split.chars, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      stagger: 0.02,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%", // Trigger when the top of the text hits 90% down the viewport
        toggleActions: "play none none reverse", // Optional: reverse on scroll up
      },
    });

    return () => {
      split.revert(); // Cleanup SplitType on unmount
    };
  }, { scope: textRef });

  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  );
}
