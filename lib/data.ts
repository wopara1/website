export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.paradoxequity.com";
/** Single source for the availability line (status pill and ticker). */
export const availability = "Open to connect";
export const email = "ewopara@gmail.com";

export const socials = [
  { name: "GitHub", href: "https://github.com/wopara1" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-w-774359132/" },
] as const;

export const links = [
  { name: "Work", hash: "#work" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Now", hash: "#now" },
  { name: "Contact", hash: "#contact" },
] as const;

/** Facts shown in the top strip. Labels only; no market data. */
export const tickerItems = [
  { label: "EW", value: "Austin, TX", tone: "flat" },
  { label: "STATUS", value: availability, tone: "up" },
  { label: "PARADOX", value: "In build", tone: "up" },
  { label: "COMPTROLLER", value: "Since 2022", tone: "flat" },
  { label: "LEGACY", value: "COBOL / JCL / Natural", tone: "flat" },
  { label: "MODERN", value: "TypeScript / React / Next", tone: "up" },
  { label: "NOW", value: "Learning chess", tone: "flat" },
] as const;

/** Paradox pairs, shown as a hover flip. */
export const pairs = [
  ["developer", "trader"],
  ["legacy", "modern"],
  ["logic", "intuition"],
] as const;

export type Project = {
  symbol: string;
  title: string;
  role: string;
  status: "Building" | "Shipped";
  description: string;
  stack: string[];
  featured?: boolean;
  /** decorative sparkline points (0-100). Not real data. */
  spark: number[];
};

export const projects: Project[] = [
  {
    symbol: "PRDX",
    title: "Paradox",
    role: "Creator, full stack",
    status: "Building",
    featured: true,
    description:
      "A full-stack web application for personal trading: real-time analysis of financial markets in one place. It lives on its own site; this is the short version.",
    stack: ["React", "Redux", "Django", "PostgreSQL", "Python"],
    spark: [62, 58, 64, 60, 70, 66, 74, 72, 82, 90],
  },
  {
    symbol: "SCEC",
    title: "SCEC Attendance Tracker",
    role: "Front-end developer, project manager",
    status: "Shipped",
    description:
      "An organizational meeting tracker with advanced filtering and user feedback. I led the front end and managed the project.",
    stack: ["React", "Tailwind", "Ruby on Rails", "Docker", "RuboCop"],
    spark: [30, 38, 36, 48, 52, 50, 60, 64, 63, 70],
  },
  {
    symbol: "SNAKE",
    title: "Snake",
    role: "Solo, for fun",
    status: "Shipped",
    description: "The classic snake game, rebuilt for the browser.",
    stack: ["React", "Next.js", "Tailwind", "Framer Motion"],
    spark: [50, 52, 49, 55, 53, 57, 54, 58, 56, 59],
  },
];

export const experience = [
  {
    date: "2022 - now",
    role: "IT Programmer",
    place: "Texas Comptroller of Public Accounts, Austin",
    note: "Improving tax processing systems with a focus on security and accuracy. Stack: COBOL, JCL, Natural, SQL, z/OS.",
  },
  {
    date: "2021 - 2022",
    role: "IT Support Technician",
    place: "Texas A&M University, College Station",
    note: "Deployments and technical support across 25 departments, with minimal downtime.",
  },
  {
    date: "2018 - 2022",
    role: "B.S. Computer Science",
    place: "Texas A&M University",
    note: "Graduated 2022.",
  },
] as const;

export const stack = {
  modern: ["TypeScript", "React", "Next.js", "Tailwind", "Framer Motion", "Python", "Django", "PostgreSQL", "GraphQL", "Redux", "Git", "Figma"],
  legacy: ["COBOL", "JCL", "Natural", "SQL", "z/OS", "XML", "C++"],
} as const;

export const now = [
  { title: "Chess", text: "Learning to play. Slowly, and losing instructively." },
  { title: "Charts", text: "Reading markets most days. Paradox started here." },
  { title: "Theology & social psychology", text: "Reading on both. They overlap more than expected." },
  { title: "Basketball & lifting", text: "The offline half of the week." },
] as const;
