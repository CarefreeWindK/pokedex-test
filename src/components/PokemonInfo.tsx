type Props = {
  id: number
  height: number
  weight: number
  stats: { name: string; value: number }[]
}

export default function PokemonInfo({ id, height, weight, stats }: Props) {
  return (
    <div className="mt-4 px-4">
      <p className="text-xl font-semibold mb-2">Información</p>
      <p className="text-sm">ID: #{id}</p>
      <p className="text-sm">Altura: {height / 10} m</p>
      <p className="text-sm">Peso: {weight / 10} kg</p>

      <div className="mt-3">
        <p className="font-semibold">Stats:</p>
        <ul className="text-sm list-disc ml-4">
          {stats.map((s) => (
            <li key={s.name}>
              {s.name}: {s.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

