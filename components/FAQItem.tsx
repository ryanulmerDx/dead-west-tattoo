"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <svg
          className={cn(
            "w-5 h-5 text-olive-500 transition-transform duration-200 flex-shrink-0",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800">
          <p className="text-neutral-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
