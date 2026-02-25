import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <main className="flex min-h-screen w-full max-w-xl flex-col items-center justify-center gap-8 px-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-stone-900">GoMacro</h1>
        <p className="mt-2 text-stone-600">Eat better, one meal at a time.</p>
      </div>
      <div className="flex w-full max-w-sm flex-col gap-3">
        <Link
          to="/login"
          className="rounded-xl bg-stone-900 py-3 text-center font-semibold text-white transition-colors hover:bg-stone-800"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="rounded-xl border-2 border-stone-300 py-3 text-center font-semibold text-stone-800 transition-colors hover:bg-stone-50"
        >
          Create account
        </Link>
      </div>
    </main>
  );
}

export default Welcome;
