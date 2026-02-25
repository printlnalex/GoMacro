const PLACEHOLDER_OPTIONS = [
  { name: 'Chipotle', distance: '0.4 miles', healthScore: 82 },
  { name: 'Sweetgreen', distance: '0.7 miles', healthScore: 91 },
  { name: 'Campus Market', distance: '0.2 miles', healthScore: 78 },
];

function Nearby() {
  return (
    <main className="flex min-h-screen w-full max-w-xl flex-col gap-6 px-4 py-8">
      <h1 className="text-lg font-semibold text-stone-700">Nearby</h1>

      <div className="flex h-40 w-full items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-stone-100 text-center">
        <p className="text-sm text-stone-500">Map View (Google Maps Integration Pending)</p>
      </div>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-500">
          Healthy fast food
        </h2>
        <ul className="space-y-3">
          {PLACEHOLDER_OPTIONS.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4"
            >
              <div>
                <p className="font-semibold text-stone-900">{item.name}</p>
                <p className="text-sm text-stone-500">{item.distance}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                Health {item.healthScore}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Nearby;
