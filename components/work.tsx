"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Sparkline from "./sparkline";
import { projects } from "@/lib/data";

export default function Work() {
  const [open, setOpen] = useState<string | null>("PRDX");
  return (
    <section id="work" className="pb-24">
      <SectionHeading index="01">Work</SectionHeading>

      <div className="label hidden grid-cols-[5rem_1fr_6rem_7rem] gap-4 px-3 pb-2 sm:grid">
        <span>Symbol</span><span>Project</span><span>Trend</span><span className="text-right">Status</span>
      </div>

      <ul className="divide-y divide-line border-y border-line">
        {projects.map((p) => {
          const isOpen = open === p.symbol;
          return (
            <li key={p.symbol} className={p.featured ? "bg-paper-deep/50" : ""}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : p.symbol)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[4.5rem_1fr_auto] items-center gap-4 px-3 py-5 text-left transition-colors hover:bg-paper-deep/70 sm:grid-cols-[5rem_1fr_6rem_7rem]"
              >
                <span className="font-mono text-sm font-medium">{p.symbol}</span>
                <span>
                  <span className="block font-serif text-xl sm:text-2xl">{p.title}</span>
                  <span className="label">{p.role}</span>
                </span>
                <span className="hidden sm:block"><Sparkline points={p.spark} /></span>
                <span className={`text-right font-mono text-xs uppercase tracking-widest ${p.status === "Building" ? "text-up" : "text-muted"}`}>
                  {p.status === "Building" ? "\u25B2 " : "\u25CF "}{p.status}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 px-3 pb-7 sm:grid-cols-[5rem_1fr] sm:gap-4">
                      <span />
                      <div className="grid gap-6 md:grid-cols-[1fr_16rem]">
                        <div>
                          <p className="max-w-xl leading-relaxed text-muted">{p.description}</p>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                              <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs">{s}</li>
                            ))}
                          </ul>
                        </div>
                        {p.image && (
                          <Image src={p.image} alt={`${p.title} screenshot`} className="w-full border border-line" sizes="256px" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
