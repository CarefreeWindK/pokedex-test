import React from 'react'

export default function PokemonTypes({ types }: { types: string[] }) {
  return (
    <div className="flex gap-2 justify-center mt-2">
      {types.map((type) => (
        <span
          key={type}
          className="px-8 py-1 rounded-lg text-sm capitalize bg-light"
        >
          {type}
        </span>
      ))}
    </div>
  )
}
