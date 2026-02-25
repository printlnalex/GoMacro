import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const AUTH_KEY = 'gomacro-auth';

type AuthContextValue = {
  isAuthenticated: boolean;
  login: (email: string, _password: string) => void;
  signUp: (email: string, _password: string, name?: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStored(): boolean {
  try {
    return localStorage.getItem(AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setAuthenticated] = useState(readStored);

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const login = useCallback((_email: string, _password: string) => {
    setAuthenticated(true);
  }, []);

  const signUp = useCallback((_email: string, _password: string, _name?: string) => {
    setAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
