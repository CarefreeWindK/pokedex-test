import { usePokemonDetail } from '../hooks/usePokemonDetail'
import PokemonImage from './PokemonImage'
import PokemonTypes from './PokemonTypes'
import PokemonInfo from './PokemonInfo'
import EvolutionChart from './EvolutionChart'
import SearchBar from './SearchBar'

export default function PokemonDetail({ id, onSelect }: { id: number | null , onSelect: (id: number) => void}) {
  const { pokemon, loading, error } = usePokemonDetail(id)

  if (!id) return <div className="p-4">Selecciona un Pokémon</div>
  if (loading) return <div className="p-4">Cargando...</div>
  if (error) return <div className="p-4 text-red-500">{error}</div>
  if (!pokemon) return <div className="p-4">No hay datos del Pokémon</div>

  // ✅ Protege contra estructura incompleta
  const imageUrl =
    pokemon?.sprites?.other?.['official-artwork']?.front_default ||
    pokemon?.sprites?.front_default ||
    ''

  const types = Array.isArray(pokemon.types)
    ? pokemon.types.map((t: any) => t.type.name)
    : []

  const stats = Array.isArray(pokemon.stats)
    ? pokemon.stats.map((s: any) => ({
        name: s.stat.name,
        value: s.base_stat
      }))
    : []

  return (
    <div className="flex-1 p-4">
      <h2 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h2>
      <SearchBar onSelect={onSelect} />
      <PokemonImage src={imageUrl} alt={pokemon.name} />
      <PokemonTypes types={types} />
      <PokemonInfo
        id={pokemon.id}
        height={pokemon.height}
        weight={pokemon.weight}
        stats={stats}
      />
      <EvolutionChart id={pokemon.id} />
    </div>
  )
}
