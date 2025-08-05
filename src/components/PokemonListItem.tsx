import React from 'react'

type Props = {
  name: string
  id: number
  selected?: boolean
  onClick: () => void
}

export default function PokemonListItem({ name, id, selected, onClick }: Props) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div
      onClick={onClick}
      className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-200 ${
        selected ? 'bg-blue-200' : ''
      }`}
    >
      <img src={spriteUrl} alt={name} className="w-10 h-10 mr-3" />
      <div>
        <p className="font-bold capitalize">{name}</p>
        <p className="text-sm text-gray-600">#{id.toString().padStart(3, '0')}</p>
      </div>
    </div>
  )
}
