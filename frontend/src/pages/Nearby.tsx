import { useState } from 'react';

type NearbyPlace = {
  name: string;
  distance: string;
  healthScore: number;
  orderUrl: string;
  directionsQuery: string;
};

const PLACEHOLDER_OPTIONS: NearbyPlace[] = [
  {
    name: 'Chipotle',
    distance: '0.4 miles',
    healthScore: 82,
    orderUrl: 'https://www.chipotle.com/order',
    directionsQuery: 'Chipotle',
  },
  {
    name: 'Sweetgreen',
    distance: '0.7 miles',
    healthScore: 91,
    orderUrl: 'https://www.sweetgreen.com/',
    directionsQuery: 'Sweetgreen',
  },
  {
    name: 'Campus Market',
    distance: '0.2 miles',
    healthScore: 78,
    orderUrl: 'https://example.com/campus-market',
    directionsQuery: 'Campus Market',
  },
];

function Nearby() {
  const [selected, setSelected] = useState<NearbyPlace | null>(null);

  const openDirections = (place: NearbyPlace) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.directionsQuery)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            <li key={item.name}>
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="flex w-full items-center justify-between rounded-xl border border-stone-200 bg-white p-4 text-left transition-colors hover:bg-stone-50"
              >
                <div>
                  <p className="font-semibold text-stone-900">{item.name}</p>
                  <p className="text-sm text-stone-500">{item.distance}</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                  Health {item.healthScore}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {selected && (
        <>
          <div
            className="fixed inset-0 z-20 bg-stone-900/50"
            aria-hidden
            onClick={() => setSelected(null)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-30 mx-auto max-w-xl rounded-t-2xl border-t border-stone-200 bg-white p-5 pb-20 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-stone-900">{selected.name}</h3>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
                aria-label="Close"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
            <p className="mb-4 text-sm text-stone-500">{selected.distance} away</p>
            <div className="flex flex-col gap-3">
              <a
                href={selected.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl bg-stone-900 py-3 font-semibold text-white transition-colors hover:bg-stone-800"
              >
                Order online
              </a>
              <button
                type="button"
                onClick={() => openDirections(selected)}
                className="flex items-center justify-center rounded-xl border-2 border-stone-300 py-3 font-semibold text-stone-800 transition-colors hover:bg-stone-100"
              >
                Get directions
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Nearby;
