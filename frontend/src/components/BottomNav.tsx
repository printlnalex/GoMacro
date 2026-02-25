import { Camera, Home, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/scan', icon: Camera, label: 'Scan' },
  { to: '/', icon: Home, label: 'Home' },
  { to: '/nearby', icon: MapPin, label: 'Nearby' },
];

function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-10 w-full max-w-md mx-auto border-t border-stone-200 bg-card"
      aria-label="Main navigation"
    >
      <div className="flex h-14 items-center justify-around">
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
