import { useEffect, useState } from 'react'
import { getAllPokemonNames } from '../services/pokemonService'

type Props = {
  onSelect: (id: number) => void
}

export default function SearchBar({ onSelect }: Props) {
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState<{ name: string; url: string }[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAllPokemonNames().then(setOptions).catch(console.error)
  }, [])

  const handleSearch = () => {
    const match = options.find(
      (p) => p.name.toLowerCase() === search.toLowerCase().trim()
    )
    if (match) {
      const id = Number(match.url.split('/').filter(Boolean).pop())
      onSelect(id)
      setError(null)
    } else {
      setError('Pokémon no encontrado')
    }
  }

  return (
    <div className="mb-4">
      <div className="flex gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Pokémon..."
          className="px-3 py-2 border rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}
