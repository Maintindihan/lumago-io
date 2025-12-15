import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-obsidian-950 font-sans text-glow-white">
      <Nav />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
