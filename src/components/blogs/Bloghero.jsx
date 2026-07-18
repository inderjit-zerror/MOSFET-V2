"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { THEMES } from "@/components/blogs/Data.jsx";

function CFMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M28 8H14a8 8 0 0 0-8 8v14l7-6V16a3 3 0 0 1 3-3h12l4-5Z"
        fill="currentColor"
      />
      <path d="M32 16 22 24l10 8V16Z" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

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

export default function BlogHero({ post }) {
  const bannerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 0.9 }
      )
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          metaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.35"
        );
    });
    return () => ctx.revert();
  }, []);

  if (!post) return null;

  return (
    <a
      href={`/blog/${post.id}`}
      className="group block overflow-hidden  BGLightTint border border-black/[0.06]"
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
        <img
          ref={bannerRef}
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${THEMES[post.theme]} mix-blend-multiply opacity-70`}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"
        /> */}

        {/* <div className="relative h-full flex flex-col justify-between p-6 sm:p-10 md:p-12">
          <div className="flex items-start justify-between">
            <span
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 text-white! text-xs paragraph sm:text-sm font-semibold tracking-[0.2em] uppercase opacity-90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE2F2E]! " />
              Featured {post.bannerEyebrow}
            </span>
            
          </div>

          <h2
            ref={titleRef}
            className="text-white heading1 font-extrabold leading-[1.02] tracking-tight text-3xl sm:text-4xl md:text-5xl max-w-2xl"
          >
            {post.bannerTitle}
          </h2>
        </div> */}
      </div>

      <div
        ref={metaRef}
        className="p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full BGTint px-3 py-1 text-[11px] font-semibold TextStandard">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE2F2E]" />
              {post.category}
            </span>
            <time
              dateTime={post.date}
              className="text-[11px] font-medium tracking-wide text-[#202020]/50"
            >
              {formatDate(post.date).toUpperCase()}
            </time>
            <span className="text-[11px] font-medium tracking-wide text-[#202020]/50">
              · {post.readTime}
            </span>
          </div>
          <h3 className="TextStandard PH leading-snug transition-colors duration-200 group-hover:text-[#EE2F2E]">
            {post.title}
          </h3>
        </div>

       
      </div>
    </a>
  );
}