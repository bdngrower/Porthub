import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const location = useLocation();
  
  return (
    <main className="relative w-full bg-black text-white selection:bg-brand-accent selection:text-black font-jakarta">
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}
