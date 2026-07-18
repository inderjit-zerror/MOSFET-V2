"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getReleaseById } from "@/components/press/PressData";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Accepts either a resolved `post` object directly, or an `id` to look up
// from PressData. Passing `id` is the usual case when this page is rendered
// from a dynamic route like /press/[id].
export default function PressArticlePage({ post: postProp, id }) {
  const post = postProp || (id ? getReleaseById(id) : null);

  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRefs = useRef([]);
  const sidebarRefs = useRef([]);

  useEffect(() => {
    if (!post) return;

    const ctx = gsap.context(() => {
      // Page-load hero sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, { y: 16, opacity: 0, duration: 0.5 })
        .from(titleRef.current, { y: 28, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          imageRef.current,
          { y: 40, opacity: 0, duration: 0.9, scale: 1.02 },
          "-=0.3"
        );

      // Scroll-triggered reveal for each content section
      sectionRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Scroll-triggered reveal for sidebar cards
      sidebarRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, [post]);

  const addToSectionRefs = (el, i) => {
    sectionRefs.current[i] = el;
  };
  const addToSidebarRefs = (el, i) => {
    sidebarRefs.current[i] = el;
  };

  // Graceful fallback if the id doesn't match any release (bad link, typo, etc.)
  if (!post) {
    return (
      <main className="min-h-screen BGTint text-neutral-900 pt-[15vh] pb-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="text-3xl heading1 font-medium text-neutral-900!">
            We couldn't find that press release
          </h1>
          <p className="mt-4 paragraph text-neutral-500!">
            It may have been moved or the link is out of date.
          </p>
          <a
            href="/press"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#EE2F2E]"
          >
            ← Back to Press
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen BGTint text-neutral-900 pt-[15vh]" ref={heroRef}>
      {/* <GridLine /> */}

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 text-center">
        {/* <span ref={eyebrowRef} className="inline-block">
          <InTitle txt={`${post.category} · ${new Date(post.date).getFullYear()}`} />
        </span> */}

        <h1
          ref={titleRef}
          className="mt-4 text-4xl heading1 font-medium leading-tight tracking-tight text-neutral-900! sm:text-5xl"
        >
          {post.title}
        </h1>
        <p ref={subtitleRef} className="mx-auto paragraph mt-5 max-w-xl text-base PH">
          {post.excerpt}
        </p>
      </section>

      {/* Hero image */}
      <div ref={imageRef} className="mx-auto mt-10  px-6">
        <div className="aspect-[16/8] w-full overflow-hidden rounded-sm bg-neutral-200">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Body layout */}
      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-15 px-6 pb-24 md:grid-cols-[160px_1fr_220px]">
        {/* Left share/nav column */}
        <aside className="hidden md:block">
          <div className="sticky top-10 space-y-2 text-sm text-neutral-500">
            <p className="mb-2  font-medium uppercase PH tracking-widest paragraph TextRed">
              Share
            </p>
            <a href="#" className="block hover:text-red-600! PP paragraph">
              LinkedIn
            </a>
            <a href="#" className="block hover:text-red-600! PP paragraph">
              Twitter
            </a>
            <a href="#" className="block hover:text-red-600! PP paragraph">
              Facebook
            </a>
            <a
              href="/press"
              className="block pt-4 mt-4 border-t border-neutral-100 hover:text-red-600! paragraph"
            >
              ← All Press
            </a>
          </div>
        </aside>

        {/* Main article content, generated from PressData for this release */}
        <article className="max-w-2xl space-y-12">
          {post.content.map((section, i) => (
            <div key={section.heading} ref={(el) => addToSectionRefs(el, i)}>
              <h2 className="text-2xl! font-medium heading1 tracking-tight text-neutral-900!">
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="mt-4 leading-7 paragraph PH text-neutral-600!"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>

        {/* Right sidebar */}
        <aside className="space-y-8 ml-5 w-2xl ">
          <div ref={(el) => addToSidebarRefs(el, 0)} className="space-y-4 ">
            <p className="PH font-medium uppercase tracking-widest TextRed">
              Details
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="TextRed paragraph PH">Date</p>
                <p className="text-neutral-800! paragraph PP">{formatDate(post.date)}</p>
              </div>
              <div>
                <p className="TextRed paragraph PH">Category</p>
                <p className="text-neutral-800! paragraph PP">{post.category}</p>
              </div>
              <div>
                <p className="TextRed paragraph PH">Reading time</p>
                <p className="text-neutral-800! paragraph PP">{post.readTime}</p>
              </div>
            </div>
          </div>

          <div ref={(el) => addToSidebarRefs(el, 1)} className="space-y-3 border-t  border-neutral-100 pt-6">
            <p className="PH font-medium uppercase tracking-widest TextRed paragraph">
              Written by
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900! paragraph PP">
                  {post.author.name}
                </p>
                <p className="text-xs TextRed paragraph PP">{post.author.role}</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}