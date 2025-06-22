import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Parcours from './components/Parcours'
import './styles/App.css'
import Realisations from './components/Realisations';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* toujours affiché, quelle que soit la route */}
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<div>Contact à venir</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
