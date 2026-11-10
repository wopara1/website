import { links } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-serif text-lg font-medium tracking-tight">
          Emmanuel Wopara
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm sm:gap-6">
            {links.map((l) => (
              <li key={l.hash} className={l.name === "Experience" || l.name === "About" ? "hidden sm:block" : ""}>
                <a href={l.hash} className="text-muted transition-colors hover:text-ink">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
