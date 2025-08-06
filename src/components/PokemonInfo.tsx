type Props = {
  height: number
  weight: number
  species?: string
  eggs: string[]
  abilities: string[]
}

export default function PokemonInfo({ height, weight, species, abilities, eggs }: Props) {
  return (
    <div className="mt-4 px-4">
      <p className="text-xl font-semibold mb-2">Information</p>
      <p className="text-sm">
        <span className="font-semibold">Height:</span> {height / 10} m
      </p>
      <p className="text-sm">
        <span className="font-semibold">Weight:</span> {weight / 10} kg
      </p>
      {species && (
        <p className="text-sm">
          <span className="font-semibold">Species:</span> {species}
        </p>
      )}
      <div className="mt-3">
        <p className="font-semibold">Egg Groups:</p>
        <ul className="text-sm list-disc ml-4">
          {eggs.map((egg) => (
            <li key={egg}>{egg}</li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <p className="font-semibold">Abilities:</p>
        <ul className="text-sm list-disc ml-4">
          {abilities.map((ability) => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
