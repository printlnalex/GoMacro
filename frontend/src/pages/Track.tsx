import { useState } from 'react';
import { BarChart3, Calendar } from 'lucide-react';

const MOCK_MACROS = {
  protein: { current: 42, target: 120, unit: 'g' },
  carbs: { current: 185, target: 250, unit: 'g' },
  fat: { current: 38, target: 65, unit: 'g' },
  calories: { current: 1240, target: 2000, unit: 'cal' },
};

const MOCK_LOGGED = [
  { name: 'Avocado Toast', time: '8:30 AM', protein: 6, carbs: 28, fat: 14 },
  { name: 'Greek Salad', time: '12:15 PM', protein: 12, carbs: 18, fat: 22 },
];

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MEALS = ['Breakfast', 'Lunch', 'Dinner'] as const;
const MOCK_PLAN: Record<string, Record<string, string>> = {
  Mon: { Breakfast: 'Oatmeal', Lunch: '—', Dinner: 'Veggie Stir-Fry' },
  Tue: { Breakfast: '—', Lunch: 'Caprese Sandwich', Dinner: '—' },
  Wed: { Breakfast: 'Avocado Toast', Lunch: 'Greek Salad', Dinner: 'Black Bean Tacos' },
  Thu: { Breakfast: '—', Lunch: '—', Dinner: 'Spicy Rice Bowl' },
  Fri: { Breakfast: 'Oatmeal', Lunch: '—', Dinner: '—' },
  Sat: { Breakfast: '—', Lunch: 'Sweet Potato Bowl', Dinner: '—' },
  Sun: { Breakfast: '—', Lunch: '—', Dinner: '—' },
};

function MacroBar({ label, current, target, unit }: { label: string; current: number; target: number; unit: string }) {
  const pct = Math.min(100, (current / target) * 100);
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-stone-700">{label}</span>
        <span className="text-stone-500">{current}{unit} / {target}{unit}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Track() {
  const [tab, setTab] = useState<'macros' | 'plan'>('macros');

  return (
    <main className="min-h-screen w-full max-w-xl px-5 py-8">
      <div className="mb-6 flex gap-2 rounded-xl bg-stone-100 p-1">
        <button
          type="button"
          onClick={() => setTab('macros')}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
            tab === 'macros' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-800'
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          Macros
        </button>
        <button
          type="button"
          onClick={() => setTab('plan')}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
            tab === 'plan' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-800'
          }`}
        >
          <Calendar className="h-4 w-4" />
          Plan
        </button>
      </div>

      {tab === 'macros' && (
        <section className="space-y-6">
          <h1 className="text-xl font-bold text-stone-900">Today’s macros</h1>
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
            <MacroBar
              label="Protein"
              current={MOCK_MACROS.protein.current}
              target={MOCK_MACROS.protein.target}
              unit={MOCK_MACROS.protein.unit}
            />
            <MacroBar
              label="Carbs"
              current={MOCK_MACROS.carbs.current}
              target={MOCK_MACROS.carbs.target}
              unit={MOCK_MACROS.carbs.unit}
            />
            <MacroBar
              label="Fat"
              current={MOCK_MACROS.fat.current}
              target={MOCK_MACROS.fat.target}
              unit={MOCK_MACROS.fat.unit}
            />
            <MacroBar
              label="Calories"
              current={MOCK_MACROS.calories.current}
              target={MOCK_MACROS.calories.target}
              unit={MOCK_MACROS.calories.unit}
            />
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold text-stone-800">Logged today</h2>
            <ul className="space-y-2">
              {MOCK_LOGGED.map((meal) => (
                <li
                  key={`${meal.name}-${meal.time}`}
                  className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-stone-900">{meal.name}</p>
                    <p className="text-sm text-stone-500">{meal.time}</p>
                  </div>
                  <div className="text-right text-sm text-stone-600">
                    P {meal.protein}g · C {meal.carbs}g · F {meal.fat}g
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {tab === 'plan' && (
        <section className="space-y-6">
          <h1 className="text-xl font-bold text-stone-900">Meal plan</h1>
          <p className="text-sm text-stone-500">Plan your week (mock)</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="pb-2 pr-3 text-left font-semibold text-stone-500">Day</th>
                  {MEALS.map((m) => (
                    <th key={m} className="pb-2 px-2 text-left font-semibold text-stone-500">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WEEKDAYS.map((day) => (
                  <tr key={day} className="border-b border-stone-100">
                    <td className="py-3 pr-3 font-medium text-stone-700">{day}</td>
                    {MEALS.map((meal) => (
                      <td key={meal} className="py-3 px-2 text-stone-600">
                        {MOCK_PLAN[day]?.[meal] ?? '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}

export default Track;
