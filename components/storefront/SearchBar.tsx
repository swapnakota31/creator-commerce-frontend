"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const FILTERS = ["All", "Amazon", "Flipkart", "Myntra", "Budget Picks", "Creator Favorites"];

export default function SearchBar() {
  const [active, setActive] = useState("All");

  return (
    <section className="space-y-3">
      <div
        className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-3.5
        shadow-sm
        focus-within:border-violet-300
        transition-colors
        "
      >
        <Search size={16} className="flex-shrink-0 text-slate-400" />

        <input
          type="text"
          placeholder="Search recommendations, collections..."
          className="
          w-full
          bg-transparent
          text-sm
          text-slate-800
          placeholder:text-slate-400
          outline-none
          "
        />

        <button
          className="
          flex-shrink-0
          flex
          items-center
          gap-1.5
          rounded-full
          border
          border-slate-200
          bg-slate-50
          px-3
          py-1.5
          text-xs
          font-medium
          text-slate-600
          hover:bg-slate-100
          transition-colors
          "
        >
          <SlidersHorizontal size={12} />
          Filter
        </button>
      </div>

      {/* Quick filter chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`
              flex-shrink-0
              rounded-full
              px-3.5
              py-1.5
              text-xs
              font-medium
              transition-all
              duration-200
              ${
                active === f
                  ? "bg-violet-600 text-white shadow-sm shadow-violet-200"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-600"
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>
    </section>
  );
}