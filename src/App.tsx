import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pokedex from './pages/pokedex'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        {/* Acá podrás agregar más rutas si haces la búsqueda en otra vista */}
      </Routes>
    </Router>
  )
}
