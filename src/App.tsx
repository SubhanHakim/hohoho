import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Backrooms } from './pages/Backrooms';
import { ScrollManager } from './components/ui/ScrollManager';
import './App.css';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backrooms" element={<Backrooms />} />
        </Routes>
      </Router>
    </>
  );
}
