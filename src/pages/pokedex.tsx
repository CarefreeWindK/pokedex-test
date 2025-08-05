// src/pages/Pokedex.tsx
import React, { useState } from 'react'
import PokemonList from '../components/PokemonList'

export default function Pokedex() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="flex">
      <PokemonList onSelect={setSelectedId} />
      <div className="flex-1 p-4">
        {selectedId ? (
          <p className="text-xl">Pokémon seleccionado: #{selectedId}</p>
        ) : (
          <p className="text-gray-500">Selecciona un Pokémon</p>
        )}
      </div>
    </div>
  )
}
