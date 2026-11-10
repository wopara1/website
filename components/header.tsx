import { links } from "@/lib/data";
import SocialLinks from "./social-links";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="whitespace-nowrap font-serif text-base font-medium tracking-tight sm:text-lg">
          Emmanuel Wopara
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm sm:gap-6">
            {links.map((l) => (
              <li key={l.hash} className={l.name === "Experience" || l.name === "About" || l.name === "Now"
                  ? "hidden sm:block"
                  : l.name === "Work"
                    ? "max-[359px]:hidden"
                    : ""}>
                <a href={l.hash} className="text-muted transition-colors hover:text-ink">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks variant="icons" className="border-l border-line pl-3 sm:pl-6" />
        <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
