import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STEPS = 4;

const GOAL_OPTIONS = [
  'Reduce decision fatigue',
  'Stop wasting groceries',
  'Build consistent eating habits',
];

const DIET_OPTIONS = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Nut Allergy', 'None'];

const KITCHEN_OPTIONS = [
  'Dorm (Microwave & Mini-fridge)',
  'Standard Apartment Kitchen',
  'Fully Equipped',
];

const NUDGE_OPTIONS = [
  'Early Afternoon (1-3 PM)',
  'Late Afternoon (4-6 PM)',
  'Late Night (10 PM+)',
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string | null>(null);
  const [diet, setDiet] = useState<string[]>([]);
  const [kitchen, setKitchen] = useState<string | null>(null);
  const [nudge, setNudge] = useState<string | null>(null);

  const progress = (step / STEPS) * 100;

  const toggleDiet = (option: string) => {
    if (option === 'None') {
      setDiet(['None']);
      return;
    }
    setDiet((prev) => {
      const withoutNone = prev.filter((x) => x !== 'None');
      if (prev.includes(option)) {
        const next = withoutNone.filter((x) => x !== option);
        return next.length ? next : ['None'];
      }
      return [...withoutNone, option];
    });
  };

  const handleNext = () => {
    if (step < STEPS) {
      setStep((s) => s + 1);
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <main className="flex min-h-screen w-full max-w-xl flex-col bg-background px-4 py-6 pb-10">
      <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-stone-800 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {step === 1 && (
        <>
          <h1 className="mb-2 text-xl font-bold text-stone-900">
            Welcome to Go Macro. What is your main goal?
          </h1>
          <div className="mt-6 space-y-3">
            {GOAL_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setGoal(option)}
                className={`w-full rounded-xl border-2 px-4 py-4 text-left text-sm font-medium transition-colors ${
                  goal === option
                    ? 'border-stone-800 bg-stone-100 text-stone-900'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="mb-1 text-xl font-bold text-stone-900">
            Any dietary restrictions?
          </h1>
          <p className="mb-6 text-sm text-stone-500">
            This helps us filter your meal recommendations.
          </p>
          <div className="flex flex-wrap gap-2">
            {DIET_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleDiet(option)}
                className={`rounded-full border-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  diet.includes(option)
                    ? 'border-stone-800 bg-stone-800 text-white'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h1 className="mb-6 text-xl font-bold text-stone-900">
            What is your kitchen setup?
          </h1>
          <div className="space-y-3">
            {KITCHEN_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setKitchen(option)}
                className={`w-full rounded-xl border-2 px-4 py-4 text-left text-sm font-medium transition-colors ${
                  kitchen === option
                    ? 'border-stone-800 bg-stone-100 text-stone-900'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h1 className="mb-1 text-xl font-bold text-stone-900">
            When do you usually crash?
          </h1>
          <p className="mb-6 text-sm text-stone-500">
            We can send a reminder before decision fatigue sets in.
          </p>
          <div className="space-y-3">
            {NUDGE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setNudge(option)}
                className={`w-full rounded-xl border-2 px-4 py-4 text-left text-sm font-medium transition-colors ${
                  nudge === option
                    ? 'border-stone-800 bg-stone-100 text-stone-900'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      <div className="mt-auto pt-8">
        <button
          type="button"
          onClick={handleNext}
          className="w-full rounded-xl bg-stone-900 py-3.5 text-base font-semibold text-white transition-colors hover:bg-stone-800"
        >
          {step === STEPS ? 'Get Started' : 'Next'}
        </button>
      </div>
    </main>
  );
}

export default Onboarding;
