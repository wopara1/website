import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 sm:px-8">
        <p className="label">&copy; {new Date().getFullYear()} Emmanuel Wopara</p>
        <SocialLinks />
        <p className="label">Built with Next.js, Tailwind and Framer Motion</p>
      </div>
    </footer>
  );
}
