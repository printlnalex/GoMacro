import { useState, useCallback } from 'react';
import { Camera, Loader2, ShoppingBag, Utensils } from 'lucide-react';

type ScanState = 'idle' | 'loading' | 'result';

type MakeRecipe = { name: string; ingredients: string };
type BuyItem = { item: string; where: string; price: string };

const REC_PRESETS: Record<string, { make: MakeRecipe[]; buy: BuyItem[] }> = {
  default: {
    make: [
      { name: 'Spinach Fried Rice', ingredients: 'Eggs, Spinach, Rice' },
      { name: 'Veggie Omelette', ingredients: 'Eggs, Bell pepper, Spinach' },
    ],
    buy: [
      { item: 'Organic spinach', where: 'Campus Market', price: '$2.99' },
      { item: 'Free-range eggs', where: 'Campus Market', price: '$4.49' },
      { item: 'Jasmine rice', where: 'Campus Market', price: '$3.29' },
    ],
  },
  pasta: {
    make: [
      { name: 'Tomato Basil Pasta', ingredients: 'Pasta, Tomato, Basil, Garlic' },
      { name: 'Pasta with Greens', ingredients: 'Pasta, Kale, Lemon, Olive oil' },
    ],
    buy: [
      { item: 'Whole wheat pasta', where: 'Campus Market', price: '$2.49' },
      { item: 'Canned tomatoes', where: 'Campus Market', price: '$1.99' },
      { item: 'Fresh basil', where: 'Campus Market', price: '$2.29' },
    ],
  },
  salad: {
    make: [
      { name: 'Chickpea Salad', ingredients: 'Chickpeas, Cucumber, Tomato, Lemon' },
      { name: 'Quinoa Bowl', ingredients: 'Quinoa, Avocado, Black beans, Lime' },
    ],
    buy: [
      { item: 'Canned chickpeas', where: 'Campus Market', price: '$1.79' },
      { item: 'Quinoa', where: 'Campus Market', price: '$4.99' },
      { item: 'Avocado', where: 'Campus Market', price: '$1.49' },
    ],
  },
};

function getPresetKey(input: string): string {
  const q = input.trim().toLowerCase();
  if (q.includes('pasta')) return 'pasta';
  if (q.includes('salad') || q.includes('bowl') || q.includes('quinoa')) return 'salad';
  return 'default';
}

function Scan() {
  const [state, setState] = useState<ScanState>('idle');
  const [recPreset, setRecPreset] = useState<keyof typeof REC_PRESETS>('default');
  const [recInput, setRecInput] = useState('');
  const { make: makeRecs, buy: buyRecs } = REC_PRESETS[recPreset];

  const handleScan = useCallback(() => {
    setState('loading');
    setTimeout(() => setState('result'), 2000);
  }, []);

  const reset = useCallback(() => {
    setState('idle');
    setRecInput('');
    setRecPreset('default');
  }, []);

  return (
    <main className="relative h-[100dvh] w-full max-w-xl overflow-hidden flex flex-col">
      {(state === 'idle' || state === 'loading') && (
        <div className="absolute inset-0 bg-stone-900">
          {state === 'idle' && (
            <>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-stone-500">
                <Camera className="h-24 w-24 opacity-50" aria-hidden />
                <span className="text-base">Point at your fridge or add a photo</span>
              </div>
              <div className="absolute inset-0 border-4 border-white/15 pointer-events-none" />
              <div className="absolute top-6 left-6 h-8 w-8 border-l-2 border-t-2 border-white/50 rounded-tl" />
              <div className="absolute top-6 right-6 h-8 w-8 border-r-2 border-t-2 border-white/50 rounded-tr" />
              <div className="absolute bottom-24 left-6 h-8 w-8 border-l-2 border-b-2 border-white/50 rounded-bl" />
              <div className="absolute bottom-24 right-6 h-8 w-8 border-r-2 border-b-2 border-white/50 rounded-br" />
            </>
          )}
          {state === 'loading' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-stone-900 text-white">
              <Loader2 className="h-16 w-16 animate-spin" aria-hidden />
              <span className="text-base font-medium">Analyzing...</span>
            </div>
          )}
        </div>
      )}

      {state === 'idle' && (
        <div className="absolute bottom-0 left-0 right-0 p-4 pb-20">
          <button
            type="button"
            onClick={handleScan}
            className="w-full max-w-xl mx-auto rounded-xl bg-white/95 py-4 text-lg font-semibold text-stone-900 shadow-lg transition-colors hover:bg-white"
          >
            Scan & process
          </button>
        </div>
      )}

      {state === 'result' && (
        <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24 space-y-6">
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-xl border-2 border-stone-300 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50"
          >
            Scan again
          </button>

          <section className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold text-stone-700">Change recommendations</h2>
            <p className="mb-2 text-xs text-stone-500">Enter what you’d rather see (e.g. pasta, salad) and tap Update to change the foods shown.</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={recInput}
                onChange={(e) => setRecInput(e.target.value)}
                placeholder="e.g. pasta or salad"
                className="flex-1 rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setRecPreset(getPresetKey(recInput) as keyof typeof REC_PRESETS)}
                className="rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
              >
                Update
              </button>
            </div>
          </section>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-stone-800">
              <Utensils className="h-4 w-4" />
              What you can make
            </h2>
            <ul className="space-y-3">
              {makeRecs.map((r) => (
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
              {buyRecs.map((b) => (
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
