import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <main className="min-h-screen w-full max-w-xl px-5 py-8">
      <h1 className="mb-6 text-xl font-bold text-stone-900">Profile</h1>

      <section className="mb-8 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-200 text-stone-600">
            <User className="h-7 w-7" aria-hidden />
          </span>
          <div>
            <p className="text-base font-semibold text-stone-900">Account</p>
            <p className="text-sm text-stone-500">Customize your profile</p>
          </div>
        </div>
        <div className="space-y-3">
          <label className="block">
            <span className="text-sm font-medium text-stone-500">Name</span>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2.5 text-base text-stone-900"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-stone-500">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2.5 text-base text-stone-900"
            />
          </label>
        </div>
      </section>

      <button
        type="button"
        onClick={handleLogout}
        className="w-full rounded-xl border border-stone-300 py-3 text-base font-medium text-stone-700 hover:bg-stone-100"
      >
        Log out
      </button>
    </main>
  );
}

export default Profile;
