import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Backrooms } from './pages/Backrooms';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backrooms" element={<Backrooms />} />
      </Routes>
    </Router>
  );
}
