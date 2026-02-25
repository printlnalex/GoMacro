import { Flame, BatteryLow, BatteryMedium, ChefHat, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnergyButton from '../components/EnergyButton';
import { useStreak } from '../hooks/useStreak';

const TODAY_MACROS = { protein: 42, carbs: 185, fat: 38, calories: 1240 };

function Index() {
  const navigate = useNavigate();
  const { streak } = useStreak();
  return (
    <main className="min-h-screen w-full max-w-xl mx-auto bg-background px-5 pb-10 pt-8 flex flex-col items-center">
      <header className="mb-6 flex w-full max-w-xl items-start justify-between gap-4">
        <section className="min-w-0 flex-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Flame className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <p className="text-base font-medium text-stone-600">Streak</p>
              <p className="text-xl font-bold text-stone-900">{streak} {streak === 1 ? 'day' : 'days'}</p>
            </div>
          </div>
          <p className="rounded-xl bg-stone-100 px-4 py-3 text-base text-stone-700">
            It is lunch time. How’s your energy?
          </p>
        </section>
        <button
          type="button"
          onClick={() => navigate('/profile')}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300"
          aria-label="User profile"
        >
          <User className="h-6 w-6" aria-hidden />
        </button>
      </header>

      <section className="mb-6 w-full max-w-xl rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-stone-700">Today’s macros</h2>
          <button type="button" onClick={() => navigate('/track')} className="text-xs font-medium text-stone-500 hover:text-stone-700">View all</button>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <p className="text-lg font-bold text-stone-900">{TODAY_MACROS.protein}</p>
            <p className="text-xs text-stone-500">P (g)</p>
          </div>
          <div>
            <p className="text-lg font-bold text-stone-900">{TODAY_MACROS.carbs}</p>
            <p className="text-xs text-stone-500">C (g)</p>
          </div>
          <div>
            <p className="text-lg font-bold text-stone-900">{TODAY_MACROS.fat}</p>
            <p className="text-xs text-stone-500">F (g)</p>
          </div>
          <div>
            <p className="text-lg font-bold text-stone-900">{TODAY_MACROS.calories}</p>
            <p className="text-xs text-stone-500">cal</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-xl space-y-4">
        <h2 className="mb-3 text-base font-semibold uppercase tracking-wide text-stone-500">
          Energy level
        </h2>
        <EnergyButton
          label="Low Battery"
          icon={BatteryLow}
          description="Need a boost"
          variant="low"
          onClick={() => navigate('/recommendation')}
        />
        <EnergyButton
          label="Medium"
          icon={BatteryMedium}
          description="Steady and good"
          variant="medium"
          onClick={() => navigate('/recommendation')}
        />
        <EnergyButton
          label="Chef Mode"
          icon={ChefHat}
          description="Ready to crush it"
          variant="chef"
          onClick={() => navigate('/recommendation')}
        />
      </section>
    </main>
  );
}

export default Index;
