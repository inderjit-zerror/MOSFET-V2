"use client";

// Builds a windowed page list with ellipses, e.g. 1 … 4 5 [6] 7 8 … 12
function buildPageWindow(page, totalPages, siblingCount = 1) {
  const totalNumbers = siblingCount * 2 + 5; // first, last, current, 2 ellipses
  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const left = Math.max(page - siblingCount, 2);
  const right = Math.min(page + siblingCount, totalPages - 1);

  const pages = [1];
  if (left > 2) pages.push("ellipsis-left");
  for (let p = left; p <= right; p++) pages.push(p);
  if (right < totalPages - 1) pages.push("ellipsis-right");
  pages.push(totalPages);

  return pages;
}

export default function Pagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onChange,
}) {
  const startItem = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems);
  const pageWindow = buildPageWindow(page, totalPages);

  const goTo = (p) => {
    if (p < 1 || p > totalPages || p === page) return;
    onChange(p);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-4 border-t border-black/[0.06]">
      <div className="flex items-center gap-6 text-xs font-medium tracking-wide text-[#202020]/50 uppercase">
        <span>
          Showing {startItem}–{endItem} of {totalItems}
        </span>
        <span className="hidden sm:inline">
          Page {String(page).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page === 1}
          className="inline-flex items-center gap-2 rounded-full border  border-black/10 px-4 py-2 text-xs font-semibold TextStandard disabled:opacity-30 disabled:cursor-not-allowed hover:BGTint transition-colors"
        >
          <span aria-hidden="true">←</span> Previous
        </button>

        <div className="flex items-center gap-1.5">
          {pageWindow.map((p, i) =>
            typeof p === "number" ? (
              <button
                key={p}
                type="button"
                onClick={() => goTo(p)}
                aria-current={p === page ? "page" : undefined}
                className={`h-9 w-9 rounded-full text-xs font-semibold transition-colors ${
                  p === page
                    ? "bg-[#EE2F2E] TextTint"
                    : "TextStandard hover:BGTint"
                }`}
              >
                {String(p).padStart(2, "0")}
              </button>
            ) : (
              <span
                key={`${p}-${i}`}
                className="h-9 w-9 grid place-items-center text-xs font-semibold text-[#202020]/35"
                aria-hidden="true"
              >
                …
              </span>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          disabled={page === totalPages}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold TextStandard disabled:opacity-30 disabled:cursor-not-allowed hover:BGTint transition-colors"
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}