import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <main className="relative w-full bg-black text-white selection:bg-brand-accent selection:text-black font-jakarta">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
      </Routes>
    </main>
  );
}
