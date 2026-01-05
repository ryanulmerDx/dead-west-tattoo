"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface PortfolioCategoryFilterProps {
  categories: string[];
}

export function PortfolioCategoryFilter({ categories }: PortfolioCategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2 focus:ring-offset-black",
              activeCategory === category
                ? "bg-olive-700 text-white olive-glow font-bold"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700"
            )}
            aria-pressed={activeCategory === category}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="text-center text-sm text-neutral-500 mt-4">
        Currently showing: {activeCategory}
      </p>
    </div>
  );
}
