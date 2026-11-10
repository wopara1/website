"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Two words that swap on hover or focus: the "paradox" motif. */
export default function PairFlip({ a, b }: { a: string; b: string }) {
  const [flipped, setFlipped] = useState(false);
  const word = flipped ? b : a;
  return (
    <button
      type="button"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      aria-label={`${a} and ${b}`}
      className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-ink hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-up"
    >
      <span className="relative inline-block h-4 w-20 overflow-hidden text-left">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            className="absolute inset-0"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      </span>
      <span aria-hidden className="text-up">&#8644;</span>
    </button>
  );
}
