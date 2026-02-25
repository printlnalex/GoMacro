import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import BottomNav from './components/BottomNav';
import Index from './pages/Index';
import Profile from './pages/Profile';
import Recommendation from './pages/Recommendation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <div className="min-h-screen w-full max-w-xl mx-auto bg-background flex flex-col items-center pb-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
