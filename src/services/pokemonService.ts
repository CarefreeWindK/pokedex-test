// src/services/pokemonService.ts
const API_URL = 'https://pokeapi.co/api/v2'

export async function getPokemonList(limit = 20, offset = 0) {
  const res = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
  if (!res.ok) throw new Error('Error al obtener la lista de Pokémon')
  const data = await res.json()
  return data.results as { name: string; url: string }[]
}
