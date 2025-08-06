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
      className={`flex justify-between px-10 items-center mb-0.5 h-24 rounded-md cursor-pointer hover:bg-shadow ${selected ? 'bg-accent' : 'bg-secondary'}`}
    >
      <b className="flex items-center text-white">
        <img src={spriteUrl} alt={name} className="w-10 h-10 mr-9" />
        <p className="capitalize">{name}</p>
      </b>
      <p className="text-sm text-gray-300">#{id.toString().padStart(3, '0')}</p>
      
    </div>
  )
}
