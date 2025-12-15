import { NavLink, Link } from "react-router-dom";
import lumagoMark from "../assets/lumago_logo.png";


const navItem = "text-sm text-white/70 hover:text-glow-white transition";
const navActive = "text-sm text-glow-white";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-obsidian-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={lumagoMark}
            alt="Lumago"
            className="h-9 w-9 object-contain transition
                       drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
                       hover:drop-shadow-[0_0_18px_rgba(34,197,94,0.35)]"
          />
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
          className="rounded-xl bg-growth-500 px-4 py-2 text-sm font-semibold text-obsidian-950 shadow-glow hover:opacity-90"
        >
          Partner with us
        </Link>
      </div>
    </header>
  );
}
