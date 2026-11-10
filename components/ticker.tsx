"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tickerItems } from "@/lib/data";

const tone = { up: "text-up", down: "text-down", flat: "text-muted" } as const;

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {tickerItems.map((t) => (
        <span key={t.label} className="flex items-center gap-2 px-5 font-mono text-[0.7rem] uppercase tracking-[0.12em]">
          <span className="text-ink">{t.label}</span>
          <span className={tone[t.tone]}>
            {t.tone === "up" ? "\u25B2 " : ""}
            {t.value}
          </span>
          <span className="pl-3 text-line">|</span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  const reduce = useReducedMotion();
  return (
    <div className="overflow-hidden border-b border-line bg-paper-deep/60 py-2" role="marquee" aria-label="About Emmanuel at a glance">
      {reduce ? (
        <div className="flex overflow-x-auto"><Row /></div>
      ) : (
        <motion.div
          className="flex w-max hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          <Row />
          <Row hidden />
        </motion.div>
      )}
    </div>
  );
}
