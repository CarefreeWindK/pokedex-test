import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pokedex from './pages/pokedex'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </Router>
  )
}
