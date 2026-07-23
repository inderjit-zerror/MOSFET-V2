"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reused for both the base line and the pulse overlay.
// Path runs bottom-left ("-40, 913.5") -> top-right ("...2062.5") in raw coordinates.
const PATH_D =
  "M-40 913.5H604C615.046 913.5 624 904.546 624 893.5V483C624 471.954 632.954 463 644 463H905C916.046 463 925 454.046 925 443V228C925 216.954 933.954 208 945 208H1543.5C1554.55 208 1563.5 216.954 1563.5 228V326C1563.5 337.046 1572.45 346 1583.5 346H1704.5C1715.55 346 1724.5 337.046 1724.5 326V21C1724.5 9.9543 1733.45 1 1744.5 1H2062.5";

/**
 * ShrimpLineAnimation
 *
 * - Uses GSAP ScrollTrigger's `pin` (NOT CSS `position: sticky`) to hold the
 *   SVG in view while the page scrolls through the track. This avoids the
 *   classic bug where `overflow-hidden`/`overflow-auto` on any ancestor
 *   breaks `position: sticky`.
 * - The line draws from the TOP-RIGHT end of the path down to the
 *   BOTTOM-LEFT end (negative starting strokeDashoffset reverses the
 *   normal start->end draw direction).
 *
 * Usage:
 *   <ShrimpLineAnimation scrollLength="300vh" />
 *
 * Render it directly in the page. Do NOT wrap it in another tall
 * min-h-[...] section — it creates its own scroll track internally.
 * Also avoid `overflow-hidden` on parent containers if possible; GSAP's
 * pin is more tolerant of it than CSS sticky, but it's still cleaner
 * to keep pinned elements' ancestors free of overflow clipping.
 */
export default function ShrimpLineAnimation({
  className = "",
  scrollLength = "300vh",
}) {
  const wrapperRef = useRef(null); // tall track — defines total scroll distance
  const pinRef = useRef(null); // content that gets pinned in place
  const pathRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // Base line: draws from the path's END (top-right) back to its
      // START (bottom-left) — negative offset reverses direction.
      tl.fromTo(
        pathRef.current,
        { strokeDashoffset: -1000 },
        { strokeDashoffset: 0 },
        0
      );

      // Pulse: short glowing dash chasing the line's tip, same direction
      tl.fromTo(
        pulseRef.current,
        { strokeDashoffset: -1000 },
        { strokeDashoffset: 200 },
        0
      );

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: pinRef.current,
        animation: tl,
        // markers: true, // uncomment while debugging
      });

      // Subtle continuous glow once the line has drawn in
      gsap.to(pulseRef.current, {
        opacity: 0.4,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full bg-transparent ${className}`}
      style={{ minHeight: scrollLength }}
    >
      <div
        ref={pinRef}
        className="h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <svg
          className="w-full h-auto"
          viewBox="0 0 1920 915"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="shrimpGradMain"
              x1="1896"
              y1="-46.9999"
              x2="13.5"
              y2="937.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#044AB3" stopOpacity="0" />
              <stop offset="0.5" stopColor="#044AB3" />
              <stop offset="1" stopColor="#044AB3" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Base line — faint gradient stroke, draws top-right -> bottom-left on scroll */}
          <path
            ref={pathRef}
            d={PATH_D}
            stroke="url(#shrimpGradMain)"
            strokeOpacity="0.35"
            strokeWidth="1"
            pathLength="1000"
            strokeDasharray="1000"
            strokeDashoffset="-1000"
          />

          {/* Pulse — bright travelling highlight along the same path */}
          <path
            ref={pulseRef}
            d={PATH_D}
            stroke="#044AB3"
            fill="none"
            strokeWidth="1"
            pathLength="1000"
            strokeDasharray="120 880"
            strokeDashoffset="-1000"
          />
        </svg>
      </div>
    </div>
  );
}