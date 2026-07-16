"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { posts as ALL_POSTS, CATEGORIES } from "@/components/blogs/Data.jsx";


import Pagination from "./Pagination";
import BlogCard from "./Blogcard";
import BlogHero from "./Bloghero";
import InTitle from "../common/InTitle";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PAGE_SIZE = 8;

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M21 21l-4.3-4.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SortIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8 6v12M8 6 5 9m3-3 3 3M16 18V6m0 12 3-3m-3 3-3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [page, setPage] = useState(1);

  const gridRef = useRef(null);
  const headerRef = useRef(null);
  const mastheadRef = useRef(null);

  // The most recent post always leads as the hero, mirroring the reference site.
  const heroPost = ALL_POSTS[0];
  const restPosts = ALL_POSTS.slice(1);

  const filtered = useMemo(() => {
    let list = restPosts;

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.bannerTitle.toLowerCase().includes(q)
      );
    }

    list = [...list].sort((a, b) =>
      sortAsc
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

    return list;
  }, [activeCategory, query, sortAsc, restPosts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [activeCategory, query, sortAsc]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // Page-load entrance for the masthead and filter/search header.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mastheadRef.current?.children || [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" }
      );
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.15 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Re-run the stagger reveal whenever the visible set of cards changes
  // (filter switch, search, or page change).
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".blog-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.06,
        clearProps: "transform",
      }
    );
  }, [activeCategory, query, sortAsc, page]);

  return (
    <main className="BGTint min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Masthead */}
        <header
          ref={mastheadRef}
          className="mb-10 sm:mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex flex-col gap-3 max-w-2xl">
           
            <InTitle txt={`Blog`} />
            <h1 className="TextStandard heading1 font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Insights on modern commercial insurance
            </h1>
          </div>
          <p className="text-sm paragraph sm:text-base text-[#202020]/55 max-w-sm sm:text-right">
            Product news, engineering deep dives, and stories from the
            brokers and wholesalers building on CoverForce.
          </p>
        </header>

        {/* Hero */}
        <section className="mb-10 sm:mb-14">
          <BlogHero post={heroPost} />
        </section>

        {/* Filters + Search */}
        <section
          ref={headerRef}
          className=" z-10 -mx-4 px-4 sm:mx-0 sm:px-0 py-4 mb-8 BGLightTint/95 backdrop-blur supports-[backdrop-filter]:bg-opacity-90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-black/[0.06]"
        >
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm  transition-colors ${
                    active
                      ? "bg-[#EE2F2E]  TextTint"
                      : "BGLightTint TextStandard hover:bg-black/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <label className="relative flex-1 sm:flex-none">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#202020]/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="w-full sm:w-64 rounded-full BGLightTint pl-10 pr-4 py-2.5 text-sm TextStandard placeholder:text-[#202020]/40 outline-none focus:ring-2 focus:ring-[#EE2F2E]/30"
              />
            </label>
            <button
              type="button"
              onClick={() => setSortAsc((s) => !s)}
              aria-label="Toggle sort order"
              title={sortAsc ? "Oldest first" : "Newest first"}
              className="shrink-0 grid place-items-center h-10 w-10 rounded-full BGLightTint TextStandard hover:bg-black/10 transition-colors"
            >
              <SortIcon className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Grid */}
        {pageItems.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-semibold TextStandard">No posts match that search.</p>
            <p className="text-sm text-[#202020]/50 mt-1">
              Try a different keyword or clear the filter.
            </p>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {pageItems.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {filtered.length > 0 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            totalItems={filtered.length}
            pageSize={PAGE_SIZE}
            onChange={setPage}
          />
        )}
      </div>
    </main>
  );
}