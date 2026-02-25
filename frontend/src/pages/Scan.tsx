import { useState, useCallback } from 'react';
import { Camera, Loader2 } from 'lucide-react';

type ScanState = 'idle' | 'loading' | 'result';

const SUGGESTED_MEAL = {
  name: 'Spinach Fried Rice',
  ingredients: ['Eggs', 'Spinach', 'Rice'],
};

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
    <main className="flex min-h-screen w-full max-w-xl flex-col items-center gap-6 px-4 py-8">
      <h1 className="text-lg font-semibold text-stone-700">Fridge Scanner</h1>

      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-stone-800 aspect-[4/3]">
        {state === 'idle' && (
          <>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-stone-500">
              <Camera className="h-12 w-12 opacity-60" aria-hidden />
              <span className="text-sm">Point at your fridge</span>
            </div>
            <div className="absolute inset-0 rounded-2xl border-4 border-white/20 pointer-events-none" />
            <div className="absolute top-3 left-3 h-6 w-6 border-l-2 border-t-2 border-white/40 rounded-tl" />
            <div className="absolute top-3 right-3 h-6 w-6 border-r-2 border-t-2 border-white/40 rounded-tr" />
            <div className="absolute bottom-3 left-3 h-6 w-6 border-l-2 border-b-2 border-white/40 rounded-bl" />
            <div className="absolute bottom-3 right-3 h-6 w-6 border-r-2 border-b-2 border-white/40 rounded-br" />
          </>
        )}
        {state === 'loading' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-stone-800 text-white">
            <Loader2 className="h-12 w-12 animate-spin" aria-hidden />
            <span className="text-sm font-medium">Analyzing...</span>
          </div>
        )}
        {state === 'result' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-stone-800 p-4">
            <div className="w-full rounded-xl bg-white p-4 text-left">
              <p className="text-xs font-medium uppercase text-stone-500">Suggested meal</p>
              <h2 className="mt-1 text-lg font-semibold text-stone-900">{SUGGESTED_MEAL.name}</h2>
              <p className="mt-2 text-sm text-stone-600">
                {SUGGESTED_MEAL.ingredients.join(', ')}
              </p>
            </div>
          </div>
        )}
      </div>

      {state === 'idle' && (
        <button
          type="button"
          onClick={handleScan}
          className="w-full max-w-sm rounded-xl bg-stone-900 py-4 font-semibold text-white transition-colors hover:bg-stone-800"
        >
          Scan Fridge
        </button>
      )}

      {state === 'result' && (
        <button
          type="button"
          onClick={reset}
          className="w-full max-w-sm rounded-xl border-2 border-stone-300 bg-white py-3 font-semibold text-stone-800 transition-colors hover:bg-stone-50"
        >
          Scan again
        </button>
      )}
    </main>
  );
}

export default Scan;
