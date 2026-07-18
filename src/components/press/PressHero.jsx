"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function PressHero({ post }) {
  const bannerRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 0.9 }
      ).fromTo(
        metaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      );
    });
    return () => ctx.revert();
  }, []);

  if (!post) return null;

  return (
    // Clicking the featured release opens the corresponding article page at /press/[id]
    <a
      href={`/press/${post.id}`}
      className="group block overflow-hidden  BGLightTint border border-black/[0.06]"
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
        <img
          ref={bannerRef}
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div
        ref={metaRef}
        className="p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full BGTint px-3 py-1 text-[11px] font-semibold TextStandard">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE2F2E]" />
              Featured {post.category}
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
          <h3 className=" leading-snug transition-colors duration-200 group-hover:text-[#EE2F2E]">
            {post.title}
          </h3>
        </div>
      </div>
    </a>
  );
}