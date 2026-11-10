import SectionHeading from "./section-heading";
import { now } from "@/lib/data";

export default function Now() {
  return (
    <section id="now" className="pb-24">
      <SectionHeading index="04">Now &amp; beyond code</SectionHeading>
      <ul className="grid gap-4 sm:grid-cols-2">
        {now.map((n, i) => (
          <li key={n.title} className="border border-line bg-paper/70 p-6 transition-transform hover:-translate-y-1">
            <span className="label">0{i + 1}</span>
            <h3 className="mt-2 font-serif text-2xl">{n.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{n.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
