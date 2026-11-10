import SectionHeading from "./section-heading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="pb-24">
      <SectionHeading index="03">Experience</SectionHeading>
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((e) => (
          <li key={e.role} className="grid gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">{e.date}</span>
            <div>
              <h3 className="font-serif text-xl">{e.role}</h3>
              <p className="label mt-1">{e.place}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{e.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
