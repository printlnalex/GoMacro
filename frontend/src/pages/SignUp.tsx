import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(email, password, name);
    navigate('/', { replace: true });
  };

  return (
    <main className="flex min-h-screen w-full max-w-xl flex-col px-6 py-12">
      <h1 className="text-xl font-bold text-stone-900">Create account</h1>
      <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-sm flex-col gap-4">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900"
            autoComplete="new-password"
          />
        </label>
        <button
          type="submit"
          className="rounded-xl bg-stone-900 py-3 font-semibold text-white transition-colors hover:bg-stone-800"
        >
          Create account
        </button>
      </form>
      <Link to="/login" className="mt-6 text-sm text-stone-600 underline hover:text-stone-800">
        Already have an account? Log in
      </Link>
    </main>
  );
}

export default SignUp;
