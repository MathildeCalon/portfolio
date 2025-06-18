import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presentation from './components/Presentation';
import Parcours from './components/Parcours'
import './App.css'
import Realisations from './components/Realisations';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Presentation/>}></Route>
            <Route path="/parcours" element={<Parcours/>}></Route>
            <Route path="/realisations" element={<Realisations/>}></Route>
            <Route path="/contact"></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
