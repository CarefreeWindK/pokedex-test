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
      setError('Pokémon not found')
      setTimeout(() => setError(null), 3000)
    }
  }

  return (
    <div className="flex justify-end items-end relative">
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Pokémon"
          className="bg-light h-10 px-5 pr-10 rounded-full text-sm focus:outline-primary transition-all duration-300 ease-in-out w-12 focus:w-64"
          onFocus={(e) => {
            e.currentTarget.classList.remove('w-12')
            e.currentTarget.classList.add('w-64')
          }}
          onBlur={(e) => {
            if (e.currentTarget.value === '') {
              e.currentTarget.classList.remove('w-64')
              e.currentTarget.classList.add('w-12')
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-3 mr-4"
          onClick={handleSearch}
          aria-label="Buscar Pokémon"
        >
          <svg
            className="h-4 w-4 fill-current text-primary hover:text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </button>
        {error && (
          <div className="absolute -top-8 right-0 bg-red-100 border border-red-400 text-red-700 text-xs rounded px-3 py-1 shadow-md whitespace-nowrap z-10">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
