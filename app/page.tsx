import Hero from "@/components/hero";
import StatusPill from "@/components/status-pill";
import Work from "@/components/work";
import About from "@/components/about";
import Experience from "@/components/experience";
import Now from "@/components/now";
import Contact from "@/components/contact";

/** Re-render daily so the status date stays current. */
export const revalidate = 86400;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <Hero status={<StatusPill />} />
      <Work />
      <About />
      <Experience />
      <Now />
      <Contact />
    </main>
  );
}
