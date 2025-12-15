export default function ProjectStreamReader() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Stream-Reader.ai</h1>
        <p className="max-w-3xl text-neutral-300">
          Stream-Reader is a real-time environmental monitoring and dashboard platform designed to make water quality
          visible and actionable for communities, partners, and decision-makers.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-xl bg-growth-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90"
            href="https://stream-reader.ai"
            target="_blank"
            rel="noreferrer"
          >
            Open live site →
          </a>
          <a
            className="rounded-xl border border-neutral-800 bg-growth-500 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-800"
            href="https://github.com/Maintindihan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["What it does", "Aggregates data, visualizes trends, and supports detection/forecasting workflows."],
          ["Why it matters", "Water impacts human health, ecosystems, tourism, and trust in public spaces."],
          ["Current focus", "Hawaiʻi—starting with the Ala Wai and expand-by-partnership approach."],
        ].map(([t, b]) => (
          <div key={t} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <div className="text-sm font-semibold">{t}</div>
            <div className="mt-2 text-sm leading-relaxed text-neutral-300">{b}</div>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Capabilities</h2>
        <ul className="list-disc space-y-2 pl-5 text-neutral-300">
          <li>Public dashboards (location pages, time series, map-first navigation)</li>
          <li>Data ingestion pipelines (scheduled pulls, normalization, provenance)</li>
          <li>Modeling workflows (detection/forecasting support)</li>
          <li>Partner-friendly attribution and source linking</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What’s next</h2>
        <ul className="list-disc space-y-2 pl-5 text-neutral-300">
          <li>More sources + automated refresh</li>
          <li>More metrics (pathogens, nutrients, supporting environmental signals)</li>
          <li>Hardware pilots (as funding + permits allow)</li>
        </ul>
        <p className="text-sm text-neutral-400">
          Note: Hardware and field deployments are scoped with partners; Lumago avoids overpromising timelines on public pages.
        </p>
      </section>
    </div>
  );
}
