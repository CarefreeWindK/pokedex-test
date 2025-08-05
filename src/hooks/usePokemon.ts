// src/hooks/usePokemonList.ts
import { useEffect, useState } from 'react'
import { getPokemonList } from '../services/pokemonService'

export function usePokemonList() {
  const [pokemonList, setPokemonList] = useState<{ name: string; url: string }[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const limit = 20

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const newPokemons = await getPokemonList(limit, offset)
        if (newPokemons.length === 0) {
          setHasMore(false)
        } else {
          setPokemonList((prev) => [...prev, ...newPokemons])
        }
      } catch (e) {
        console.error('Error al cargar más Pokémon', e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [offset])

  const loadMore = () => {
    if (!loading && hasMore) {
      setOffset((prev) => prev + limit)
    }
  }

  return { pokemonList, loading, loadMore, hasMore }
}
