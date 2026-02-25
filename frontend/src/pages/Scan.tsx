import { useState, useCallback } from 'react';
import { Camera, Loader2, ShoppingBag, Utensils } from 'lucide-react';

type ScanState = 'idle' | 'loading' | 'result';

const MOCK_MAKE_RECIPES = [
  { name: 'Spinach Fried Rice', ingredients: 'Eggs, Spinach, Rice' },
  { name: 'Veggie Omelette', ingredients: 'Eggs, Bell pepper, Spinach' },
];

const MOCK_BUY = [
  { item: 'Organic spinach', where: 'Campus Market', price: '$2.99' },
  { item: 'Free-range eggs', where: 'Campus Market', price: '$4.49' },
  { item: 'Jasmine rice', where: 'Campus Market', price: '$3.29' },
];

function Scan() {
  const [state, setState] = useState<ScanState>('idle');

  const handleScan = useCallback(() => {
    setState('loading');
    setTimeout(() => setState('result'), 2000);
  }, []);

  const reset = useCallback(() => {
    setState('idle');
  }, []);

  return (
    <main className="flex min-h-screen w-full max-w-xl flex-col px-0 pb-20">
      <div className="relative w-full flex-1 min-h-[60vh] overflow-hidden bg-stone-900">
        {state === 'idle' && (
          <>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-stone-500">
              <Camera className="h-20 w-20 opacity-50" aria-hidden />
              <span className="text-base">Point at your fridge or add a photo</span>
            </div>
            <div className="absolute inset-0 border-4 border-white/15 pointer-events-none rounded-none" />
            <div className="absolute top-4 left-4 h-8 w-8 border-l-2 border-t-2 border-white/50 rounded-tl" />
            <div className="absolute top-4 right-4 h-8 w-8 border-r-2 border-t-2 border-white/50 rounded-tr" />
            <div className="absolute bottom-4 left-4 h-8 w-8 border-l-2 border-b-2 border-white/50 rounded-bl" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-r-2 border-b-2 border-white/50 rounded-br" />
          </>
        )}
        {state === 'loading' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-stone-900 text-white">
            <Loader2 className="h-16 w-16 animate-spin" aria-hidden />
            <span className="text-base font-medium">Analyzing...</span>
          </div>
        )}
        {state === 'result' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-stone-900 p-4">
            <p className="text-sm text-stone-400">Scan complete</p>
          </div>
        )}
      </div>

      {state === 'idle' && (
        <div className="px-4 pt-4">
          <button
            type="button"
            onClick={handleScan}
            className="w-full rounded-xl bg-stone-900 py-4 text-lg font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Scan & process
          </button>
        </div>
      )}

      {state === 'result' && (
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-xl border-2 border-stone-300 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50"
          >
            Scan again
          </button>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-stone-800">
              <Utensils className="h-4 w-4" />
              What you can make
            </h2>
            <ul className="space-y-3">
              {MOCK_MAKE_RECIPES.map((r) => (
                <li key={r.name} className="rounded-xl border border-stone-200 bg-white p-4">
                  <p className="font-semibold text-stone-900">{r.name}</p>
                  <p className="mt-1 text-sm text-stone-500">{r.ingredients}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-stone-800">
              <ShoppingBag className="h-4 w-4" />
              What you can buy
            </h2>
            <ul className="space-y-3">
              {MOCK_BUY.map((b) => (
                <li key={b.item} className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4">
                  <div>
                    <p className="font-medium text-stone-900">{b.item}</p>
                    <p className="text-sm text-stone-500">{b.where}</p>
                  </div>
                  <span className="font-semibold text-stone-700">{b.price}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  );
}

export default Scan;
