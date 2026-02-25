import { useState, useCallback } from 'react';

type Recipe = {
  name: string;
  prep_time: string;
  energy_level: string;
  ingredients: string[];
};

const MOCK_RECIPES: Recipe[] = [
  {
    name: 'Avocado Toast',
    prep_time: '5 min',
    energy_level: 'Low',
    ingredients: ['bread', 'avocado', 'salt', 'lemon'],
  },
  {
    name: 'Greek Salad',
    prep_time: '15 min',
    energy_level: 'Medium',
    ingredients: ['cucumber', 'tomato', 'feta', 'olives', 'olive oil'],
  },
  {
    name: 'Spicy Rice Bowl',
    prep_time: '25 min',
    energy_level: 'High',
    ingredients: ['rice', 'black beans', 'salsa', 'lime', 'cilantro', 'jalapeño'],
  },
];

function Recommendation() {
  const [index, setIndex] = useState(0);
  const recipe = MOCK_RECIPES[index];

  const shuffle = useCallback(() => {
    const others = MOCK_RECIPES.map((_, i) => i).filter((i) => i !== index);
    const next = others[Math.floor(Math.random() * others.length)];
    setIndex(next);
  }, [index]);

  const accept = useCallback(() => {
    console.log('Accepted');
  }, []);

  return (
    <main className="flex min-h-screen w-full max-w-xl flex-col items-center justify-center gap-8 px-4 py-8">
      <h1 className="text-lg font-semibold text-stone-700">Shuffle food</h1>
      <div key={index} className="recipe-card-entering w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
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
    </main>
  );
}

export default Recommendation;
