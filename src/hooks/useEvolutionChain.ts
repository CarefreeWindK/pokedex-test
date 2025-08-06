import { useEffect, useState } from 'react'
import { getPokemonSpecies, getEvolutionChainByUrl } from '../services/pokemonService'

export function useEvolutionChain(pokemonId: number | null) {
  const [chain, setChain] = useState<{ name: string; id: number }[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!pokemonId) return

    const fetchEvolution = async () => {
      setLoading(true)
      try {
        const species = await getPokemonSpecies(pokemonId)
        const evoUrl = species.evolution_chain.url
        const evoData = await getEvolutionChainByUrl(evoUrl)

        const chainArray: { name: string; id: number }[] = []

        let current = evoData.chain
        while (current) {
          const name = current.species.name
          const urlParts = current.species.url.split('/').filter(Boolean)
          const id = Number(urlParts[urlParts.length - 1])
          chainArray.push({ name, id })
          current = current.evolves_to?.[0]
        }

        setChain(chainArray)
      } catch (err) {
        console.error(err)
        setChain([])
      } finally {
        setLoading(false)
      }
    }

    fetchEvolution()
  }, [pokemonId])

  return { chain, loading }
}
