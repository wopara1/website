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
    title: "Paradox",
    description:
      "I am currently working on a full-stack development web application to enhance personal trading. Users can retrieve real-time analysis of financial markets.",
    tags: ["React", "Django", "PostgreSQL", "JavaScript", "Pyhton, CSS", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "SCECAttendanceTracker",
    description:
      "Organizational Meeting Tracker: In my role as the front-end developer and project manager. This platform has essential features such as advanced filtering, user feedback mechanisms, and more.",
    tags: ["React", "Docker", "HTML", "Tailwind", "Ruby"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Snake",
    description:
      "A fun desktop application that allows user to play the distinguished snake game. Current a web application",
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
  "Next.js",
] as const;
