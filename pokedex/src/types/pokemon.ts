interface abilityInfo {
  name: string
  url: string
}

interface pokemonAbility {
  ability: abilityInfo
  is_hidden: boolean
  slot: number
}
interface pokemonType {
  type: {
    name: string
  }
}

export interface pokemon {
  id: number
  name: string
  image: string
  abilities: pokemonAbility[]
  types: pokemonType[]
  height: number
  weight: number
  baseExperience: number
}
