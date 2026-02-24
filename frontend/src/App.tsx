import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background max-w-md mx-auto">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
