import type { LucideIcon } from 'lucide-react';

type EnergyButtonProps = {
  label: string;
  icon: LucideIcon;
  description?: string;
  variant?: 'low' | 'medium' | 'chef';
  onClick?: () => void;
};

const variantStyles = {
  low: 'border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100',
  medium: 'border-emerald-200 bg-emerald-50 text-emerald-900 hover:bg-emerald-100',
  chef: 'border-orange-200 bg-orange-50 text-orange-900 hover:bg-orange-100',
};

function EnergyButton({ label, icon: Icon, description, variant = 'medium', onClick }: EnergyButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left transition-colors ${variantStyles[variant]}`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/80 text-current">
        <Icon className="h-6 w-6 shrink-0" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="text-base font-semibold">{label}</span>
        {description && (
          <span className="mt-1 block text-base opacity-80">{description}</span>
        )}
      </span>
    </button>
  );
}

export default EnergyButton;
