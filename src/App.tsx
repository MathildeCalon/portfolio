import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presentation from './components/Presentation';
import Parcours from './components/Parcours'
import './App.css'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Presentation/>}></Route>
            <Route path="/parcours" element={<Parcours/>}></Route>
            <Route path="/realisations"></Route>
            <Route path="/contact"></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
