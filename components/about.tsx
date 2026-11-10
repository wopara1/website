import SectionHeading from "./section-heading";
import { stack } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="pb-24">
      <SectionHeading index="02">About</SectionHeading>
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            I studied computer science at Texas A&amp;M and now write software for the
            State of Texas. What I like most is the moment a hard problem finally
            comes apart into small, solvable ones.
          </p>
          <p className="text-muted">
            My day job is legacy: COBOL, JCL and Natural on z/OS. My own projects
            are modern: TypeScript, React, Python. I treat that as an advantage.
            The older systems are getting rarer, and the newer ones keep changing,
            so knowing both is a way to stay useful.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="label mb-3">Modern</p>
            <ul className="flex flex-wrap gap-2">
              {stack.modern.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs">{s}</li>)}
            </ul>
          </div>
          <div>
            <p className="label mb-3">Legacy</p>
            <ul className="flex flex-wrap gap-2">
              {stack.legacy.map((s) => <li key={s} className="rounded-full border border-ink bg-ink px-3 py-1 font-mono text-xs text-paper">{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
