import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { useStreak } from '../hooks/useStreak';

type Recipe = {
  name: string;
  prep_time: string;
  energy_level: string;
  ingredients: string[];
  image: string;
};

const MOCK_RECIPES: Recipe[] = [
  {
    name: 'Avocado Toast',
    prep_time: '5 min',
    energy_level: 'Low',
    ingredients: ['bread', 'avocado', 'salt', 'lemon'],
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=240&fit=crop',
  },
  {
    name: 'Greek Salad',
    prep_time: '15 min',
    energy_level: 'Medium',
    ingredients: ['cucumber', 'tomato', 'feta', 'olives', 'olive oil'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=240&fit=crop',
  },
  {
    name: 'Spicy Rice Bowl',
    prep_time: '25 min',
    energy_level: 'High',
    ingredients: ['rice', 'black beans', 'salsa', 'lime', 'cilantro', 'jalapeño'],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=240&fit=crop',
  },
  {
    name: 'Oatmeal with Berries',
    prep_time: '10 min',
    energy_level: 'Low',
    ingredients: ['oats', 'mixed berries', 'honey', 'almond milk'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=240&fit=crop',
  },
  {
    name: 'Veggie Stir-Fry',
    prep_time: '20 min',
    energy_level: 'Medium',
    ingredients: ['broccoli', 'bell pepper', 'soy sauce', 'ginger', 'rice'],
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=240&fit=crop',
  },
  {
    name: 'Caprese Sandwich',
    prep_time: '8 min',
    energy_level: 'Low',
    ingredients: ['ciabatta', 'tomato', 'mozzarella', 'basil', 'balsamic'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=240&fit=crop',
  },
  {
    name: 'Black Bean Tacos',
    prep_time: '18 min',
    energy_level: 'Medium',
    ingredients: ['black beans', 'tortillas', 'lime', 'cilantro', 'salsa'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=240&fit=crop',
  },
  {
    name: 'Sweet Potato Bowl',
    prep_time: '30 min',
    energy_level: 'High',
    ingredients: ['sweet potato', 'quinoa', 'kale', 'tahini', 'pumpkin seeds'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=240&fit=crop',
  },
];

function Recommendation() {
  const [index, setIndex] = useState(0);
  const recipe = MOCK_RECIPES[index];
  const { incrementStreak } = useStreak();

  const shuffle = useCallback(() => {
    const others = MOCK_RECIPES.map((_, i) => i).filter((i) => i !== index);
    const next = others[Math.floor(Math.random() * others.length)];
    setIndex(next);
  }, [index]);

  const accept = useCallback(() => {
    incrementStreak();
    toast.success('Meal logged! Streak +1');
  }, [incrementStreak]);

  return (
    <main className="flex min-h-screen w-full max-w-xl flex-col gap-6 px-4 py-8">
      <h1 className="text-lg font-semibold text-stone-700">Shuffle food</h1>

      <div key={index} className="recipe-card-entering w-full max-w-sm overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <img
          src={recipe.image}
          alt=""
          className="h-44 w-full object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-stone-900">{recipe.name}</h2>
          <p className="mt-1 text-sm text-stone-500">
            {recipe.prep_time} · {recipe.energy_level}
          </p>
          <ul className="mt-3 list-inside list-disc text-sm text-stone-600">
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full max-w-sm gap-3">
        <button
          type="button"
          onClick={shuffle}
          className="flex-1 rounded-xl border-2 border-stone-300 bg-stone-100 py-3 font-semibold text-stone-800 transition-colors hover:bg-stone-200"
        >
          Shuffle
        </button>
        <button
          type="button"
          onClick={accept}
          className="flex-1 rounded-xl border-2 border-emerald-600 bg-emerald-500 py-3 font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          Accept
        </button>
      </div>

      <section className="w-full max-w-sm">
        <p className="mb-2 text-sm font-medium text-stone-500">Or scroll to pick</p>
        <div className="max-h-80 overflow-y-auto rounded-xl border border-stone-200 bg-stone-50">
          <ul className="divide-y divide-stone-200">
            {MOCK_RECIPES.map((r, i) => (
              <li key={r.name}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`flex w-full items-center gap-3 px-0 text-left transition-colors hover:bg-stone-100 ${
                    index === i ? 'bg-white font-semibold text-stone-900 ring-1 ring-stone-200' : 'text-stone-700'
                  }`}
                >
                  <img
                    src={r.image}
                    alt=""
                    className="h-20 w-24 shrink-0 object-cover"
                  />
                  <div className="min-w-0 flex-1 py-3 pr-4">
                    <span className="block">{r.name}</span>
                    <span className="text-sm text-stone-500">{r.prep_time} · {r.energy_level}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Recommendation;
