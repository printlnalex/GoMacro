import { Flame, BatteryLow, BatteryMedium, ChefHat, User } from 'lucide-react';
import EnergyButton from '../components/EnergyButton';

function Index() {
  return (
    <main className="min-h-screen w-full max-w-xl mx-auto bg-background px-4 pb-8 pt-6 flex flex-col items-center">
      <header className="mb-6 flex w-full max-w-xl items-start justify-between gap-4">
        <section className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Flame className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-medium text-stone-600">Streak</p>
              <p className="text-lg font-bold text-stone-900">7 days</p>
            </div>
          </div>
          <p className="rounded-lg bg-stone-100 px-3 py-2 text-sm text-stone-700">
            It is lunch time. How’s your energy?
          </p>
        </section>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300"
          aria-label="User profile"
        >
          <User className="h-5 w-5" aria-hidden />
        </button>
      </header>

      <section className="w-full max-w-xl space-y-3">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-stone-500">
          Energy level
        </h2>
        <EnergyButton
          label="Low Battery"
          icon={BatteryLow}
          description="Need a boost"
          variant="low"
        />
        <EnergyButton
          label="Medium"
          icon={BatteryMedium}
          description="Steady and good"
          variant="medium"
        />
        <EnergyButton
          label="Chef Mode"
          icon={ChefHat}
          description="Ready to crush it"
          variant="chef"
        />
      </section>
    </main>
  );
}

export default Index;
