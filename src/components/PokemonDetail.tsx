import { usePokemonDetail } from '../hooks/usePokemonDetail'
import PokemonImage from './PokemonImage'
import PokemonTypes from './PokemonTypes'
import PokemonInfo from './PokemonInfo'
import EvolutionChart from './EvolutionChart'
import SearchBar from './SearchBar'

export default function PokemonDetail({ id, onSelect }: { id: number | null, onSelect: (id: number) => void }) {
  const { pokemon, loading, error } = usePokemonDetail(id)

  if (!id) return <div className="my-8 mr-8 p-4 rounded-md w-2/3 bg-white">Select a Pokémon</div>
  if (loading) return <div className="my-8 mr-8 p-4 rounded-md w-2/3 bg-white">Loading...</div>
  if (error) return <div className="my-8 mr-8 p-4 rounded-md text-red-500 w-2/3 bg-white">{error}</div>
  if (!pokemon) return <div className="my-8 mr-8 p-4 rounded-md w-2/3 bg-white">No data available for this Pokémon</div>

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
    <div className="flex flex-col h-full p-4 gap-4">
      <div className="flex-[1]">
        <SearchBar onSelect={onSelect} />
      </div>

      <div className="flex-[5] flex gap-6">
        <div className="w-1/2 flex flex-col items-center gap-4 overflow-auto">
          <PokemonImage src={imageUrl} alt={pokemon.name} />
          <h2 className="text-xl font-semibold capitalize mb-2">{pokemon.name}</h2>
          <PokemonTypes types={types} />
        </div>

        <div className="w-1/2 overflow-auto">
          <PokemonInfo
            height={pokemon.height}
            weight={pokemon.weight}
            species={pokemon.species?.name}
            abilities={pokemon.abilities.map((a: any) => a.ability.name)}
            eggs={pokemon.egg_groups?.map((g: any) => g.name) || []}
          />
        </div>
      </div>

      <div className="h-px bg-primary my-2" />

      <div className="flex-[4] overflow-auto">
        <EvolutionChart id={pokemon.id} />
      </div>
    </div>
  )
}
