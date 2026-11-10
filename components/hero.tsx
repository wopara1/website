"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PairFlip from "./pair-flip";
import SocialLinks from "./social-links";
import { pairs, email } from "@/lib/data";

export default function Hero({ status }: { status: React.ReactNode }) {
  return (
    <section id="top" className="grid gap-10 pb-20 pt-16 sm:pt-24 md:grid-cols-[1.7fr_1fr] md:items-center">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {status}
        <h1 className="font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]">
          Full-stack developer.
          <br />
          Student of <em className="font-normal italic text-up">markets</em>.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
          I build web software that holds up, from mainframe batch jobs to React
          interfaces. By day I work on the Texas tax system. After hours I am
          building Paradox, a tool for trading analysis.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5">
            Say hello
          </a>
          <a href="/CV.pdf" className="rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper">
            Resume (PDF)
          </a>
          <a href={`mailto:${email}`} className="px-2 py-3 font-mono text-xs text-muted underline-offset-4 hover:text-ink hover:underline">
            {email}
          </a>
        </div>
        <SocialLinks className="mt-6" />
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Interests, hover to flip">
          {pairs.map(([a, b]) => (
            <li key={a}><PairFlip a={a} b={b} /></li>
          ))}
        </ul>
      </motion.div>

      <motion.figure
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto w-full max-w-xs md:max-w-none"
      >
        <div className="rotate-1 border border-line bg-paper-deep p-3 shadow-[6px_6px_0_0_var(--frame)] transition-transform hover:rotate-0">
          <Image
            src="/gallery/headshot.png"
            alt="Portrait of Emmanuel Wopara"
            width={400}
            height={400}
            priority
            className="aspect-square w-full object-cover grayscale-[15%]"
          />
        </div>
        <figcaption className="label mt-4 flex justify-between">
          <span>EW &middot; dev &#8644; trader</span>
          <span className="text-up">&#9650; active</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
