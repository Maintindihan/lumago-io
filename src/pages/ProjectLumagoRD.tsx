export default function ProjectLumagoRD() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Lumago R&D</h1>
        <p className="max-w-3xl text-neutral-300">
          Lumago R&D explores biosolutions and sensing systems that could support ecosystem restoration.
          This page stays intentionally high-level until specific pilots are funded and validated.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          [
            "Biosolutions exploration",
            "Mycofiltration and other nature-based approaches evaluated through measurable testing and careful scoping.",
          ],
          [
            "Sensing & measurement",
            "Low-maintenance monitoring concepts that improve data coverage and accessibility in the field.",
          ],
          [
            "Restoration support tooling",
            "Decision dashboards and analytics to help partners plan interventions and measure outcomes over time.",
          ],
          [
            "Partnership-driven pilots",
            "Work is advanced through community groups, labs, agencies, and funders—aligned with real constraints.",
          ],
        ].map(([t, b]) => (
          <div key={t} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <div className="text-sm font-semibold">{t}</div>
            <div className="mt-2 text-sm leading-relaxed text-neutral-300">{b}</div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
        <h2 className="text-xl font-semibold">Want to scope a pilot?</h2>
        <p className="mt-2 max-w-3xl text-neutral-300">
          If you have a site, dataset, or restoration program that needs measurement, visibility, or a focused experiment,
          Lumago can propose a clear, testable pilot.
        </p>
        <a className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90" href="/contact">
          Contact Lumago
        </a>
      </section>
    </div>
  );
}
