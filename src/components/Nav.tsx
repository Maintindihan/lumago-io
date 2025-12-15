import { NavLink, Link } from "react-router-dom";

const navItem = "text-sm text-white/70 hover:text-glow-white transition";
const navActive = "text-sm text-glow-white";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-obsidian-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-white/10 bg-obsidian-900 shadow-glowSoft" />
          <span className="font-semibold tracking-wide">Lumago</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/projects" className={({ isActive }) => (isActive ? navActive : navItem)}>
            Projects
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? navActive : navItem)}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? navActive : navItem)}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? navActive : navItem)}>
            Contact
          </NavLink>
        </nav>

        <Link
          to="/contact"
          className="rounded-xl bg-growth-300 px-4 py-2 text-sm font-semibold text-obsidian-950 shadow-glow hover:opacity-90"
        >
          Partner with us
        </Link>
      </div>
    </header>
  );
}
