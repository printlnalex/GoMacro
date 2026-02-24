import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full max-w-xl mx-auto bg-background flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
