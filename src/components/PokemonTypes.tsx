import React from 'react'

export default function PokemonTypes({ types }: { types: string[] }) {
  return (
    <div className="flex gap-2 justify-center mt-2">
      {types.map((type) => (
        <span
          key={type}
          className="px-3 py-1 text-white rounded-full text-sm capitalize bg-indigo-500"
        >
          {type}
        </span>
      ))}
    </div>
  )
}
