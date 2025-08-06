// src/components/PokemonList.tsx
import React, { useRef, useCallback, useState } from 'react'
import { usePokemonList } from '../hooks/usePokemon'
import styles from "./LessonInfo.module.css";
import PokemonListItem from './PokemonListItem'

type Props = {
  onSelect: (id: number) => void
}

export default function PokemonList({ onSelect }: Props) {
  const { pokemonList, loading, loadMore, hasMore } = usePokemonList()
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const observer = useRef<IntersectionObserver | null>(null)
  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore()
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore, loadMore]
  )

  return (
    <div className="w-64 overflow-y-auto h-screen border-r border-gray-300 bg-white" class="">
      {pokemonList.map((pokemon, index) => {
        const id = pokemon.url.split('/').filter(Boolean).pop() as unknown as number

        if (index === pokemonList.length - 1) {
          return (
            <div ref={lastItemRef} key={pokemon.name}>
              <PokemonListItem
                name={pokemon.name}
                id={id}
                selected={selectedId === id}
                onClick={() => {
                  setSelectedId(id)
                  onSelect(id)
                }}
              />
            </div>
          )
        }

        return (
          <PokemonListItem
            key={pokemon.name}
            name={pokemon.name}
            id={id}
            selected={selectedId === id}
            onClick={() => {
              setSelectedId(id)
              onSelect(id)
            }}
          />
        )
      })}

      {loading && <p className="p-2 text-center text-sm text-gray-400">Cargando más Pokémon…</p>}
      {!hasMore && <p className="p-2 text-center text-sm text-gray-400">No hay más Pokémon</p>}
    </div>
  )
}
