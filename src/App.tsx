import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/parcours"></Route>
            <Route path="/realisations"></Route>
            <Route path="/contact"></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
