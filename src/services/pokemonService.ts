const API_URL = 'https://pokeapi.co/api/v2'

export async function getPokemonList(limit = 20, offset = 0) {
  const res = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
  if (!res.ok) throw new Error('Error fetching the Pokémon list')
  const data = await res.json()
  return data.results as { name: string; url: string }[]
}

export async function getPokemonById(id: number) {
  const [pokemonRes, speciesRes] = await Promise.all([
    fetch(`${API_URL}/pokemon/${id}`),
    fetch(`${API_URL}/pokemon-species/${id}`)
  ])

  if (!pokemonRes.ok) throw new Error(`Could not load Pokémon #${id}`)
  if (!speciesRes.ok) throw new Error(`Could not load Pokémon species #${id}`)

  const pokemon = await pokemonRes.json()
  const species = await speciesRes.json()

  return {
    ...pokemon,
    egg_groups: species.egg_groups,
  }
}

export async function getPokemonSpecies(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  if (!res.ok) throw new Error('Error fetching the species')
  return await res.json()
}

export async function getEvolutionChainByUrl(url: string) {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error fetching evolution chain')
  return await res.json()
}

export async function getAllPokemonNames() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1300')
  if (!res.ok) throw new Error('Error fetching the list of names')
  const data = await res.json()
  return data.results as { name: string; url: string }[]
}
