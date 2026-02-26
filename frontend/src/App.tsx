import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useAuth } from './context/AuthContext';
import BottomNav from './components/BottomNav';
import Index from './pages/Index';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Nearby from './pages/Nearby';
import Profile from './pages/Profile';
import Recommendation from './pages/Recommendation';
import Scan from './pages/Scan';
import SignUp from './pages/SignUp';
import Track from './pages/Track';
import Welcome from './pages/Welcome';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Toaster position="top-center" />
        <div className="min-h-screen w-full max-w-xl mx-auto bg-background">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <AppWithNav />
    </BrowserRouter>
  );
}

function AppWithNav() {
  const location = useLocation();
  const isOnboarding = location.pathname === '/onboarding';

  return (
    <div className={`min-h-screen w-full max-w-xl mx-auto bg-background flex flex-col items-center ${isOnboarding ? 'pb-10' : 'pb-16'}`}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/track" element={<Track />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isOnboarding && <BottomNav />}
    </div>
  );
}

export default App;
