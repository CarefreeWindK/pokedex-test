// src/services/pokemonService.ts
const API_URL = 'https://pokeapi.co/api/v2'

export async function getPokemonList(limit = 20, offset = 0) {
  const res = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
  if (!res.ok) throw new Error('Error al obtener la lista de Pokémon')
  const data = await res.json()
  return data.results as { name: string; url: string }[]
}

export async function getPokemonById(id: number) {
  const res = await fetch(`${API_URL}/pokemon/${id}`)
  if (!res.ok) throw new Error(`No se pudo cargar el Pokémon #${id}`)
  return await res.json()
}

export async function getPokemonSpecies(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  if (!res.ok) throw new Error('Error al obtener la especie')
  return await res.json()
}

export async function getEvolutionChainByUrl(url: string) {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error al obtener cadena evolutiva')
  return await res.json()
}

export async function getAllPokemonNames() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1300')
  if (!res.ok) throw new Error('Error al obtener lista de nombres')
  const data = await res.json()
  return data.results as { name: string; url: string }[]
}