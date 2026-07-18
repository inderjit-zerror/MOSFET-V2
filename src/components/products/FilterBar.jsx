"use client";

import { Search, ArrowUpDown } from "lucide-react";

export default function FilterBar({
  categories,
  active,
  onChange,
  searchTerm,
  onSearchChange,
  onToggleSort,
  sortDir,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Category pills */}
      <div className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`filter-pill snap-start whitespace-nowrap  rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#EE2F2E] text-white shadow-lg shadow-mosfet-amber/20"
                  : "BGLightTint text-mosfet-muted  hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Search + sort */}
      <div className="flex items-center gap-3">
        <div className="flex w-full items-center gap-2 rounded-full BGLightTint bg-mosfet-card px-4 py-2.5 md:w-64">
          <Search size={16} className="shrink-0 text-mosfet-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-[#212121] outline-none placeholder:text-mosfet-muted"
          />
        </div>

        <button
          onClick={onToggleSort}
          aria-label="Sort by price"
          title={
            sortDir === "asc"
              ? "Sorted: price low to high"
              : sortDir === "desc"
              ? "Sorted: price high to low"
              : "Sort by price"
          }
          className={`flex h-11 w-11 shrink-0 items-center justify-center  BGLightTint rounded-full  transition-colors ${
            sortDir
              ? "border-mosfet-amber text-mosfet-amber"
              : "border-mosfet-line text-mosfet-muted  "
          }`}
        >
          <ArrowUpDown size={16} />
        </button>
      </div>
    </div>
  );
}
