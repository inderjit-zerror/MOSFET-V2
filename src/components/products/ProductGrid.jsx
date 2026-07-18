"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories, productsByCategory } from "@/components/products/products.jsx";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductGrid() {
  const [active, setActive] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDir, setSortDir] = useState(null); // null | "asc" | "desc"
  const gridRef = useRef(null);

  const products = useMemo(() => {
    let list = productsByCategory(active);

    if (searchTerm.trim()) {
      const q = searchTerm.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q)
      );
    }

    if (sortDir) {
      list = [...list].sort((a, b) =>
        sortDir === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    return list;
  }, [active, searchTerm, sortDir]);

  const handleToggleSort = () => {
    setSortDir((prev) =>
      prev === null ? "asc" : prev === "asc" ? "desc" : null
    );
  };

  // Animate cards whenever the filtered/sorted list changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-product-card]");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 28, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, [products]);

  // Scroll-reveal for the whole section on first mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".products-heading",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-heading",
            start: "top 85%",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={gridRef}
      className="mx-auto w-full BGTint px-5 py-10 md:px-8 md:py-[10vh]"
    >

      <h1 className="heading1 mb-5 ">Mosfet Products</h1>
      <p className="paragraph PH mb-[8vh] max-w-[600px]">MOSFET delivers AI-powered automotive products for smart, safe, and connected vehicle performance.</p>

      <div className="mb-10 md:mb-12">
        <FilterBar
          categories={categories}
          active={active}
          onChange={setActive}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onToggleSort={handleToggleSort}
          sortDir={sortDir}
        />
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-mosfet-line py-20 text-center text-sm text-mosfet-muted">
          No products match your search. Try a different keyword or category.
        </div>
      )}
    </section>
  );
}
