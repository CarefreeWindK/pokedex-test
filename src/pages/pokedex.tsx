// src/pages/Pokedex.tsx
import React, { useState } from 'react'
import PokemonList from '../components/PokemonList'
import PokemonDetail from '../components/PokemonDetail'

export default function Pokedex() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

   return (
    <div className="flex h-screen">
      <PokemonList onSelect={setSelectedId} />
      <PokemonDetail id={selectedId} onSelect={setSelectedId} />
    </div>
  )
}
