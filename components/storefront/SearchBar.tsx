"use client";

import { useState } from "react";

import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { useStore } from "@/lib/StoreContext";

export default function SearchBar() {
   const {
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
  allFilters,
  } = useStore();

  const [showFilters, setShowFilters] =
    useState(false);

  return (
    <section className="space-y-4">
      {/* Search */}

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
          transition-colors
          focus-within:border-violet-300
        "
      >
        <Search
          size={18}
          className="flex-shrink-0 text-slate-400"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Search creator picks..."
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
          onClick={() =>
            setShowFilters(!showFilters)
          }
          className="
            flex
            flex-shrink-0
            items-center
            gap-1.5
            rounded-full
            border
            border-slate-200
            bg-slate-50
            px-4
            py-2
            text-sm
            font-medium
            text-slate-600
            transition-all
            duration-200
            hover:bg-slate-100
          "
        >
          <SlidersHorizontal size={14} />

          Filters

          {showFilters ? (
            <ChevronUp size={14} />
          ) : (
            <ChevronDown size={14} />
          )}
        </button>
      </div>

      {/* Expandable Filters */}

      {showFilters && (
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-sm
            animate-in
            fade-in
            duration-200
          "
        >
          <div className="mb-3 flex items-center justify-between">
            <h3
              className="
                text-sm
                font-semibold
                text-slate-900
              "
            >
              Filter by Tags
            </h3>

            {activeFilter !== "All" && (
              <button
                onClick={() =>
                setActiveFilter("All")
              }
                className="
                  text-xs
                  font-medium
                  text-violet-600
                  hover:text-violet-700
                "
              >
                Clear Filters
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {allFilters.map((filter) => (
              <button
              key={filter}
              onClick={() =>
              setActiveFilter(filter)
            }
                className={`
                  rounded-full
                  px-3.5
                  py-1.5
                  text-xs
                  font-medium
                  transition-all
                  duration-200
                  ${
                    activeFilter === filter
                      ? "bg-violet-600 text-white shadow-sm shadow-violet-200"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-600"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}