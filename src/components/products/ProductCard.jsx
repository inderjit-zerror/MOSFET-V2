"use client";

import { ArrowRight } from "lucide-react";
import { categoryMeta } from "@/components/products/products.jsx";

export default function ProductCard({ product }) {
  const meta = categoryMeta[product.category] || {
    label: "Accessory",
    dot: "bg-mosfet-amber",
  };
  const isFeatured = product.tag === "Bestseller";

  return (
    <div
      data-product-card
      className="group flex flex-col transition-colors BGLightTint duration-300 relative"
    >
      <div className="relative aspect-[16/12] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="card-hover-image h-full w-full object-cover transition-all duration-200 ease-in group-hover:scale-[1.06]"
        />
      </div>

      <span className="absolute opacity-0 group-hover:opacity-100 -left-[0.25rem] -top-[0.25rem] transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-top-[0.35rem] h-[1.5rem] w-[1.5rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 -left-[0.25rem] -bottom-[0.25rem] transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-bottom-[0.35rem] -rotate-90 h-[1.5rem] w-[1.5rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 -top-[0.25rem] -right-[0.25rem] transition-all duration-150 ease-in group-hover:-top-[0.35rem] group-hover:-right-[0.35rem] -rotate-90 h-[1.5rem] w-[1.5rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 -bottom-[0.25rem] -right-[0.25rem] transition-all duration-150 ease-in group-hover:-bottom-[0.35rem] group-hover:-right-[0.35rem] h-[1.5rem] w-[1.5rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>

      <div className="flex flex-1 flex-col px-5 py-5">
        {/* Badge row: colored dot + category label, tag on the right (like the date) */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 paragraph PP rounded-full BGTint px-3 py-1 text-[11px]! font-medium text-mosfet-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
            {meta.label}
          </span>
          {product.tag && (
            <span className="text-[11px]! uppercase tracking-wide paragraph PP text-mosfet-muted">
              {product.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`mb-4 line-clamp-2 text-base  paragraph PH text-[#212121] group-hover:text-[#EE2F2E] leading-snug`}
        >
          {product.name}
        </h3>

        {/* Divider */}
        <div className="mt-auto flex items-center justify-between border-t border-mosfet-line pt-4">
          <span className="text-sm font-medium text-mosfet-muted paragraph PH">
            INR {product.price.toFixed(2)}
          </span>

          <a
            href={`#product-${product.id}`}
            aria-label={`Explore ${product.name}`}
            className={`explore-link inline-flex items-center gap-1.5 group-hover:text-[#EE2F2E]! text-xs  paragraph PH tracking-wide transition-colors ${
              isFeatured
                ? "text-mosfet-amber2"
                : "text-mosfet-amber hover:text-mosfet-amber2 "
            }`}
          >
            Explore
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#EE2F2E]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
