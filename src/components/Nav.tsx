import { NavLink, Link } from "react-router-dom";

const navItem = "text-sm text-neutral-300 hover:text-white";
const navActive = "text-sm text-white";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-neutral-800 bg-neutral-900" />
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
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:opacity-90"
        >
          Partner with us
        </Link>
      </div>
    </header>
  );
}
