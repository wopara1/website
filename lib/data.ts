import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Texas A&M University",
    location: "College Station, TX",
    description:
      "I graduated with a Bachelor of Science degree in Computer Science in the year 2022.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "IT Support Technicians",
    location: "College Station, TX",
    description:
      "Enhanced IT efficiency at Texas A&M, optimizing deployments, providing technical support to 25 departments, and streamlining operations for minimal downtime.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "IT Programmer",
    location: "Austin, TX",
    description:
      "I'm currently a programmer for the state of Texas, employed by the Comptroller of Public Accounts. I specialize in optimizing tax processing systems, with a focus on enhancing security and accuracy in tax transactions.",
    icon: React.createElement(FaDatabase),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Git",
  "Tailwind",
  "C++",
  "SQL",
  "Redux",
  "GraphQL",
  "Cobol",
  "JCL",
  "PostgreSQL",
  "Python",
  "Django",
  "Natural One",
  "Figma",
  "Framer Motion",
] as const;
