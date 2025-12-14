import { Link } from "react-router-dom";

function StatCard(props: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{props.body}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="pt-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Biosolutions + environmental intelligence
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Restoring ecosystems with
          <span className="text-emerald-300"> data</span> and
          <span className="text-emerald-300"> applied R&D</span>.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
          Lumago is a biosolutions and environmental intelligence initiative focused on restoring and protecting
          ecosystems through data, technology, and applied research.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-xl bg-emerald-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90"
          >
            Explore projects
          </Link>
          <a
            href="https://stream-reader.ai"
            className="rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-800"
            target="_blank"
            rel="noreferrer"
          >
            Open Stream-Reader.ai →
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <StatCard
            title="Real-time dashboards"
            body="Public-facing monitoring and visualization so communities can see what’s happening clearly."
          />
          <StatCard
            title="AI + analytics"
            body="Detection and trend insights to support restoration, planning, and accountability."
          />
          <StatCard
            title="Biosolutions R&D"
            body="Carefully-scoped research into practical methods that can help repair degraded environments."
          />
        </div>
      </section>

      {/* QUICK PROJECTS */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>
            <p className="mt-2 max-w-2xl text-neutral-300">
              Current work is focused on water quality visibility and restoration tooling.
            </p>
          </div>
          <Link className="text-sm text-neutral-300 hover:text-white" to="/projects">
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            to="/projects/stream-reader"
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:bg-neutral-800/50"
          >
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Stream-Reader.ai</div>
              <div className="text-sm text-neutral-400">Project page →</div>
            </div>
            <div className="mt-3 text-sm leading-relaxed text-neutral-300">
              A real-time water quality dashboard and monitoring platform built to support restoration and public clarity.
            </div>
          </Link>

          <Link
            to="/projects/lumago-rd"
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:bg-neutral-800/50"
          >
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Lumago R&D</div>
              <div className="text-sm text-neutral-400">Project page →</div>
            </div>
            <div className="mt-3 text-sm leading-relaxed text-neutral-300">
              High-level applied research into biosolutions and sensing systems—scoped responsibly and iterated publicly.
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
        <h3 className="text-xl font-semibold">Want to collaborate or fund a pilot?</h3>
        <p className="mt-2 max-w-2xl text-neutral-300">
          If you’re a community group, agency, lab, or funder, let’s talk about a scoped deployment with clear outcomes.
        </p>
        <div className="mt-6">
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90"
          >
            Contact Lumago
          </Link>
        </div>
      </section>
    </div>
  );
}
