import { useEvolutionChain } from '../hooks/useEvolutionChain'
import PokemonImage from './PokemonImage'
export default function EvolutionChart({ id }: { id: number }) {
  const { chain, loading } = useEvolutionChain(id)

  if (loading) return <p className="mt-4">Cargando evolución...</p>
  if (!chain.length) return <p className="mt-4 text-sm text-gray-500">No hay evolución.</p>
  return (
    <div className="mt-6 text-center">
      <h3 className="text-xl font-semibold capitalize mb-2">Cadena Evolutiva</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {chain.map((poke, i) => (
          <div key={poke.id} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                alt={poke.name}
                className="w-52 h-52"
              />
              <p className="capitalize text-sm mt-1">{poke.name}</p>
            </div>

            {i < chain.length - 1 && (
              <span className="text-xl text-gray-400">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
