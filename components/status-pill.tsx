/** Server component. Date is computed at render; the page revalidates daily so it never goes stale. */
export default function StatusPill() {
  const when = new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return (
    <p className="label mb-6 inline-flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-up opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-up" />
      </span>
      Open to connect  &middot; {when}
    </p>
  );
}
