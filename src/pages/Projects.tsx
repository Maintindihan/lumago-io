import { Link } from "react-router-dom";

function ProjectCard(props: { title: string; desc: string; to: string }) {
  return (
    <Link to={props.to} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:bg-neutral-800/50">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold">{props.title}</div>
        <div className="text-sm text-neutral-400">Open →</div>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-neutral-300">{props.desc}</div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 max-w-3xl text-neutral-300">
          Lumago’s work spans environmental monitoring, data products, and applied R&D. These pages are kept factual and
          scoped—what exists now, and what’s next.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          title="Stream-Reader.ai"
          to="/projects/stream-reader"
          desc="Real-time water quality dashboards, data pipelines, and modeling—starting in Hawaiʻi."
        />
        <ProjectCard
          title="Lumago R&D"
          to="/projects/lumago-rd"
          desc="Exploration of biosolutions and sensing systems with an emphasis on measurable outcomes."
        />
      </div>
    </div>
  );
}
