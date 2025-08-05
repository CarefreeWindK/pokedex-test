import { useEffect, useState } from 'react'
import { getPokemonById } from '../services/pokemonService'

export function usePokemonDetail(id: number | null) {
  const [pokemon, setPokemon] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    getPokemonById(id)
      .then(setPokemon)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  return { pokemon, loading, error }
}