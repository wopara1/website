export default function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-b border-line pb-3">
      <span className="label">{index}</span>
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{children}</h2>
    </div>
  );
}
