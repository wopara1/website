"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Upon earning my degree in <span className="font-medium">Computer Science</span>,
        I enthusiastically embarked on a journey to indulge my passion for programming.
        Currently, I am engaged in enhancing the Texas Tax System.
        <span className="italic"> What captivates me most about programming </span>
        is the creative process. I relish the gratification of unraveling solutions to intricate problems.
        My core stack includes{" "} <span className="font-medium">React, Django, Python, SQL, and PostgresSQL</span>.
        Proficient in TypeScript and Prisma, I am always eager to learn new technologies.
        I'm currently on the lookout for dynamic opportunity
        <span className="font-medium">to contribute my skills</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        basketball, working out, and analyzing financial charts. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">theology and social psychology</span>. I'm also
        learning how to play chess.
      </p>
    </motion.section>
  );
}
