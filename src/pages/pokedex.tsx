// src/pages/Pokedex.tsx
import React, { useState } from 'react'
import PokemonList from '../components/PokemonList'
import styles from "../components/PokemonList.module.css";
import PokemonDetail from '../components/PokemonDetail'

export default function Pokedex() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

   return (
    <div className="flex h-screen bg-primary">
      <div className={`${styles['custom-scrollbar']} w-1/3 m-8 overflow-y-auto border-2 rounded-md border-shadow bg-accent scroll-smooth`}>
         <PokemonList onSelect={setSelectedId} />
      </div>
     <div className="my-8 mr-8 p-4 rounded-md w-2/3 bg-white">
        <PokemonDetail id={selectedId} onSelect={setSelectedId} />
      </div>
      
    </div>
  )
}
