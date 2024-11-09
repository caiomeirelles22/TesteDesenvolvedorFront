export async function getPokemons() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`)
    const data = await response.json()

    const pokemons = await Promise.all(
      data.results.map(async (pokemon: { name: string; url: string }) => {
        const pokemonDetailsResponse = await fetch(pokemon.url)
        const pokemonDetails = await pokemonDetailsResponse.json()
        return {
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          image: pokemonDetails.sprites.front_default,
          abilities: pokemonDetails.abilities,
          types: pokemonDetails.types,
          height: pokemonDetails.height,
          weight: pokemonDetails.weight,
          baseExperience: pokemonDetails.base_experience,
        }
      }),
    )

    return { pokemons, error: null }
  } catch (error) {
    console.error('Erro ao buscar os Pokémons:', error)
    return { pokemons: [], error: 'Erro ao carregar os dados dos Pokémons.' }
  }
}
