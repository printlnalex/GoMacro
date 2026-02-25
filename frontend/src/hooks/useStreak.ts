import { useState, useCallback, useEffect } from 'react';

const STREAK_KEY = 'gomacro-streak';

function readStreak(): number {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (raw == null) return 0;
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function writeStreak(value: number): void {
  try {
    localStorage.setItem(STREAK_KEY, String(value));
  } catch {
    // ignore
  }
}

export function useStreak() {
  const [streak, setStreak] = useState(readStreak);

  useEffect(() => {
    writeStreak(streak);
  }, [streak]);

  const incrementStreak = useCallback(() => {
    setStreak((prev) => prev + 1);
  }, []);

  return { streak, incrementStreak };
}
