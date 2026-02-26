import { useState } from 'react';
import { BatteryLow, BatteryMedium, ChefHat, Flame, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnergyButton from '../components/EnergyButton';
import { useStreak } from '../hooks/useStreak';

const TODAY_MACROS = { protein: 42, carbs: 185, fat: 38, calories: 1240 };
const MACRO_TARGETS = { protein: 120, carbs: 250, fat: 65, calories: 2000 };
const MOCK_LOGS = [
  { name: 'Avocado Toast', time: '8:30 AM' },
  { name: 'Greek Salad', time: '12:15 PM' },
];

function Index() {
  const navigate = useNavigate();
  const { streak } = useStreak();
  const [macroSheetOpen, setMacroSheetOpen] = useState(false);

  const insight = {
    protein: Math.round((TODAY_MACROS.protein / MACRO_TARGETS.protein) * 100),
    calories: Math.round((TODAY_MACROS.calories / MACRO_TARGETS.calories) * 100),
  };

  return (
    <main className="flex h-[100dvh] w-full max-w-xl mx-auto flex-col gap-4 overflow-hidden bg-background px-4 pt-6 pb-24">
      {/* Banner: macros left, profile + streak right */}
      <section className="shrink-0 overflow-visible rounded-3xl border border-stone-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <button
            type="button"
            onClick={() => setMacroSheetOpen(true)}
            className="min-w-0 flex-1 rounded-2xl bg-stone-50 p-4 text-left transition-colors hover:bg-stone-100 active:bg-stone-100"
          >
            <p className="text-xs font-medium text-stone-500">Today</p>
            <div className="mt-1 flex gap-3">
              <span className="text-lg font-bold text-stone-900">{TODAY_MACROS.protein}<span className="text-xs font-normal text-stone-500"> P</span></span>
              <span className="text-lg font-bold text-stone-900">{TODAY_MACROS.carbs}<span className="text-xs font-normal text-stone-500"> C</span></span>
              <span className="text-lg font-bold text-stone-900">{TODAY_MACROS.fat}<span className="text-xs font-normal text-stone-500"> F</span></span>
              <span className="text-lg font-bold text-stone-900">{TODAY_MACROS.calories}<span className="text-xs font-normal text-stone-500"> cal</span></span>
            </div>
          </button>
          <button
            type="button"
            onClick={() => navigate('/profile')}
            className="relative flex shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300 focus:outline-none overflow-visible"
            aria-label="Profile"
          >
            {streak > 0 && (
            <span
              className="absolute inset-0 flex items-center justify-center text-orange-500 transition-transform duration-300"
              style={{
                transform: `scale(${0.5 + Math.min(streak, 10) * 0.08})`,
                margin: -8,
              }}
              aria-hidden
            >
              <Flame className="h-24 w-24" fill="currentColor" />
            </span>
          )}
            <span
              className={`absolute inset-0 rounded-full ring-4 ring-offset-2 transition-all duration-300 ${
                streak > 0
                  ? 'ring-orange-400 ring-offset-white'
                  : 'ring-transparent ring-offset-transparent'
              }`}
              style={
                streak > 0
                  ? { boxShadow: `0 0 ${12 + Math.min(streak, 10) * 3}px rgba(251, 146, 60, ${0.25 + Math.min(streak, 10) * 0.04})` }
                  : undefined
              }
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-stone-200">
              <User className="h-7 w-7" aria-hidden />
            </span>
            <span className="absolute -right-0.5 -top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-orange-500 text-[10px] font-bold text-white shadow">
              {streak}
            </span>
          </button>
        </div>
        <p className="mt-3 rounded-xl bg-stone-100 px-3 py-2.5 text-sm text-stone-700">
          It is lunch time. How’s your energy?
        </p>
      </section>

      {/* Energy islands – fill remaining screen */}
      <section className="flex min-h-0 flex-1 flex-col gap-3">
        <h2 className="shrink-0 px-1 text-sm font-semibold uppercase tracking-wide text-stone-500">
          Energy level
        </h2>
        <div className="flex min-h-0 flex-1 flex-col gap-3">
          <div className="min-h-0 flex-1 [&>button]:h-full [&>button]:min-h-0">
            <EnergyButton
              label="Low Battery"
              icon={BatteryLow}
              description="Need a boost"
              variant="low"
              large
              onClick={() => navigate('/recommendation')}
            />
          </div>
          <div className="min-h-0 flex-1 [&>button]:h-full [&>button]:min-h-0">
            <EnergyButton
              label="Medium"
              icon={BatteryMedium}
              description="Steady and good"
              variant="medium"
              large
              onClick={() => navigate('/recommendation')}
            />
          </div>
          <div className="min-h-0 flex-1 [&>button]:h-full [&>button]:min-h-0">
            <EnergyButton
              label="Chef Mode"
              icon={ChefHat}
              description="Ready to crush it"
              variant="chef"
              large
              onClick={() => navigate('/recommendation')}
            />
          </div>
        </div>
      </section>

      {/* Macro sheet: insight + meal logs */}
      {macroSheetOpen && (
        <>
          <div
            className="fixed inset-0 z-20 bg-stone-900/50"
            aria-hidden
            onClick={() => setMacroSheetOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-30 mx-auto max-w-xl rounded-t-3xl border-t border-stone-200 bg-white shadow-lg pb-20">
            <div className="flex items-center justify-between p-4 border-b border-stone-100">
              <h3 className="text-lg font-bold text-stone-900">Today’s macros</h3>
              <button
                type="button"
                onClick={() => setMacroSheetOpen(false)}
                className="rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
                aria-label="Close"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>
            <div className="p-4 space-y-5">
              <div>
                <p className="text-sm font-semibold text-stone-700">Insight</p>
                <p className="mt-1 text-stone-600">
                  Protein at {insight.protein}% of goal. Calories at {insight.calories}% of daily target.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-700">Meal logs</p>
                <ul className="mt-2 space-y-2">
                  {MOCK_LOGS.map((log) => (
                    <li key={log.name} className="flex justify-between rounded-xl bg-stone-50 px-3 py-2.5 text-sm">
                      <span className="font-medium text-stone-900">{log.name}</span>
                      <span className="text-stone-500">{log.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Index;
