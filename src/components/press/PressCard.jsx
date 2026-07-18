"use client";

import { useRef } from "react";
import gsap from "gsap";

const DOT_COLOR = {
  News: "bg-[#EE2F2E]",
  Insights: "bg-[#5B4CDB]",
  "Case Study": "bg-[#0d8f8f]",
};

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Two-line clamp via inline style keeps this component dependency-free
// (no reliance on the tailwindcss-line-clamp plugin being installed).
const clampTwoLines = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export default function PressCard({ post, className = "", cardRef }) {
  const bannerRef = useRef(null);
  const localRef = useRef(null);
  const setRefs = (node) => {
    localRef.current = node;
    if (typeof cardRef === "function") cardRef(node);
  };

  const handleEnter = () => {
    gsap.to(localRef.current, {
      y: -6,
      boxShadow: "0 24px 48px -16px rgba(0,0,0,0.22)",
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(bannerRef.current, {
      scale: 1.06,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(localRef.current, {
      y: 0,
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      duration: 0.45,
      ease: "power3.out",
    });
    gsap.to(bannerRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <article
      ref={setRefs}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`press-card group relative flex h-full flex-col overflow-hidden bg-white border border-black/[0.06] will-change-transform ${className}`}
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
    >
      {/* Clicking a card opens the corresponding article page at /press/[id] */}
      <a href={`/press/${post.id}`} className="flex h-full flex-col">
        <div className="relative overflow-hidden h-44 sm:h-48 shrink-0">
          <img
            ref={bannerRef}
            src={post.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6 BGLightTint">
          <div className="flex items-center justify-between mb-3 gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full BGTint px-3 py-1 text-[11px] font-semibold TextStandard">
              <span className={`h-1.5 w-1.5 rounded-full  ${DOT_COLOR[post.category]}`} />
              {post.category}
            </span>
            <time
              dateTime={post.date}
              className="shrink-0 text-[11px] font-medium tracking-wide text-[#202020]/50"
            >
              {formatDate(post.date).toUpperCase()}
            </time>
          </div>

          <h4
            className=" mb-4"
            style={clampTwoLines}
          >
            <span className="transition-colors paragraph  PH  duration-200 group-hover:text-[#EE2F2E]">
              {post.title}
            </span>
          </h4>

          <div className="mt-auto flex items-center justify-between pt-3 border-t border-black/[0.06]">
            <span className="text-[11px] font-medium tracking-wide text-[#202020]/45">
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#EE2F2E] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
              Read
              <ArrowIcon className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}