"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

// ---- Replace with your real blog data / CMS fetch ----
const ALL_POSTS = [
  { id: 1, category: "BRANDING, DESIGN", title: "Things to Look for When Comparing Branding Alternatives", img: "https://images.unsplash.com/photo-1557245526-45dc0f1a8745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 2, category: "BRANDING, DESIGN", title: "5 Stand-out Features of Branding You Should Know", img: "https://images.unsplash.com/photo-1565534355217-85fcfb04ce71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww" },
  { id: 3, category: "BRANDING, DESIGN", title: "Branding: What Real Customers Have to Say", img: "https://images.unsplash.com/photo-1614527255138-018e29ff34ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww" },
  { id: 4, category: "BRANDING, DESIGN", title: "Branding: Pros and Cons They Don't Tell You", img: "https://images.unsplash.com/photo-1760552973861-d8816064c802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww" },
  { id: 5, category: "BRANDING, DESIGN", title: "How to Spot the Best Branding for You: Signs and Features", img: "https://images.unsplash.com/photo-1562618817-253b06cf2b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww" },
  { id: 6, category: "BRANDING, DESIGN", title: "How Much Should I Spend on Branding?", img: "https://images.unsplash.com/photo-1615153633779-5c932c7f4cad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, category: "BRANDING, DESIGN", title: "Rookie Mistakes You're Making With Your Branding", img: "https://images.unsplash.com/photo-1615517331072-da8aab44f923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 8, category: "BRANDING, DESIGN", title: "Real Branding Customer Reviews You Need to See", img: "https://images.unsplash.com/photo-1624602482469-3cd73308e649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwZGFzaGNhbXxlbnwwfHwwfHx8MA%3D%3D" },

  { id: 9, category: "BRANDING, DESIGN", title: "Why Consistency Is the Secret Weapon of Great Brands", img: "https://images.unsplash.com/photo-1643686978040-beac9782e58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwZGFzaGNhbXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 10, category: "BRANDING, DESIGN", title: "The Psychology Behind Memorable Logos", img: "https://images.unsplash.com/photo-1621217873309-2046fa41d06f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGRhc2hjYW18ZW58MHx8MHx8fDA%3D" },
  { id: 11, category: "BRANDING, DESIGN", title: "Color Theory 101 for Founders", img: "https://images.unsplash.com/photo-1516579486067-6d7ef4d67c1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhciUyMGRhc2h8ZW58MHx8MHx8fDA%3D" },
  { id: 12, category: "BRANDING, DESIGN", title: "Typography Choices That Make or Break a Brand", img: "https://images.unsplash.com/photo-1627913434632-b4717be3485a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 13, category: "BRANDING, DESIGN", title: "When to Rebrand: A Practical Checklist", img: "https://images.unsplash.com/photo-1557245526-45dc0f1a8745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 14, category: "BRANDING, DESIGN", title: "Building a Brand Voice That Actually Sounds Like You", img: "https://images.unsplash.com/photo-1638602030549-d04078ed0b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww" },
  { id: 15, category: "BRANDING, DESIGN", title: "In-House vs Agency: Who Should Handle Your Branding?", img: "https://images.unsplash.com/photo-1574067081958-78008c91de31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww" },
  { id: 16, category: "BRANDING, DESIGN", title: "Case Study: A Rebrand That Doubled Conversions", img: "https://images.unsplash.com/photo-1760550999867-e67abd5078fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww" },
];

const PAGE_SIZE = 8; // 2 featured + 6 grid
const TOTAL_PAGES = Math.ceil(ALL_POSTS.length / PAGE_SIZE);

export default function BlogGrid() {
  const [page, setPage] = useState(0);
  const contentRef = useRef(null);

  const start = page * PAGE_SIZE;
  const pagePosts = ALL_POSTS.slice(start, start + PAGE_SIZE);
  const featured = pagePosts.slice(0, 2);
  const rest = pagePosts.slice(2);

  const goTo = (nextPage, direction) => {
    if (nextPage < 0 || nextPage >= TOTAL_PAGES) return;
    const el = contentRef.current;
    const cards = el.querySelectorAll(".blog-card");
    const offset = direction === "next" ? -40 : 40;

    gsap.to(cards, {
      opacity: 0,
      x: offset,
      duration: 0.3,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => {
        setPage(nextPage);
        requestAnimationFrame(() => {
          const newCards = el.querySelectorAll(".blog-card");
          gsap.fromTo(
            newCards,
            { opacity: 0, x: -offset },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
          );
        });
      },
    });
  };

  return (
    <section className="min-h-screen BGTint px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h1 className=" text-5xl heading1 text-gray-900">Blog</h1>

            <p className=" max-w-xs paragraph text-sm mt-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
         
        </div>

        <hr className="mt-8 border-gray-300" />

        {/* Animated content */}
        <div ref={contentRef}>
          {/* Featured row */}
          <div className="mt-10 grid grid-cols-1 divide-y divide-gray-300 md:grid-cols-2 md:divide-x md:divide-y-0">
            {featured.map((post, i) => (
              <article
                key={post.id}
                className={`blog-card py-8 md:py-0 ${i === 0 ? "md:pr-10" : "md:pl-10 pt-8 md:pt-0"}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-[13px]! tracking-widest text-gray-400 paragraph TextRed ">
                  {post.category}
                </p>
                <h2 className="mt-2 text-xl font-medium leading-snug text-gray-900 paragraph">
                  {post.title}
                </h2>
              </article>
            ))}
          </div>

          <hr className="mt-10 border-gray-300" />

          {/* Grid of remaining posts */}
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-[13px]! tracking-widest text-gray-400 paragraph TextRed ">
                  {post.category}
                </p>
                <h3 className="mt-1 text-base font-medium leading-snug text-gray-900 paragraph ">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-14 flex items-center justify-between border-t border-gray-300 pt-6">
          <button
            onClick={() => goTo(page - 1, "prev")}
            disabled={page === 0}
            className="rounded-sm border border-gray-300 px-5 py-2 text-xs uppercase tracking-wide text-gray-600 transition hover:bg-red-700 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
          >
            Previous
          </button>
          <span className="text-xs text-gray-400">
            {page + 1} / {TOTAL_PAGES}
          </span>
          <button
            onClick={() => goTo(page + 1, "next")}
            disabled={page === TOTAL_PAGES - 1}
            className="rounded-sm border border-gray-300 px-5 py-2 text-xs uppercase tracking-wide text-gray-600 transition hover:bg-red-700 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}