import { Home, Shuffle, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/recommendation', icon: Shuffle, label: 'Shuffle' },
  { to: '/profile', icon: User, label: 'Profile' },
];

function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-10 border-t border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-14 max-w-xl items-center justify-around">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-4 py-2 text-xs transition-colors ${
                isActive ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-700'
              }`
            }
          >
            <Icon className="h-5 w-5" aria-hidden />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
