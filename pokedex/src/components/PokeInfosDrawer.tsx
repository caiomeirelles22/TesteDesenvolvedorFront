import { pokemon } from '@/types/pokemon'
import { useEffect, useState } from 'react'
import { Badge, PokemonType } from './Badge'
import Image from 'next/image'

export function PokeInfosDrawer({
  image,
  name,
  id,
  abilities,
  types,
  height,
  weight,
  baseExperience,
}: pokemon) {
  const [selectedPokemonData, setSelectedPokemonData] =
    useState<pokemon | null>(null)

  function getBadgeType(type: string): PokemonType {
    const pokemonTypes: PokemonType[] = [
      'normal',
      'fire',
      'water',
      'grass',
      'flying',
      'fighting',
      'poison',
      'electric',
      'ground',
      'rock',
      'psychic',
      'ice',
      'bug',
      'ghost',
      'steel',
      'dragon',
      'dark',
      'fairy',
    ]
    return pokemonTypes.includes(type as PokemonType)
      ? (type as PokemonType)
      : 'normal'
  }

  useEffect(() => {
    setSelectedPokemonData({
      id,
      name,
      image,
      abilities,
      types,
      height,
      weight,
      baseExperience,
    })
  }, [id, name, image, abilities, types, height, weight, baseExperience])

  return (
    <>
      <div className="flex w-full h-min items-center justify-center">
        <Image src={image} alt={name} width={150} height={150} />
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold capitalize">{name}</p>
        <p className="text-sm text-muted-foreground"># {id}</p>
      </div>
      <div>
        <h2 className="text-sm font-medium">Habilidades:</h2>
        <ul className="flex gap-2 flex-wrap capitalize">
          {selectedPokemonData?.abilities.map((ability, key) => (
            <li key={key}>
              <Badge
                text={ability.ability.name}
                type={getBadgeType(ability.ability.name)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Tipos:</h2>
        <ul className="flex gap-2 flex-wrap capitalize">
          {selectedPokemonData?.types.map((type, key) => (
            <li key={key}>
              <Badge
                text={type.type.name}
                type={getBadgeType(type.type.name)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div className="text-center">
          <p className="text-2xl font-bold">{selectedPokemonData?.height}cm</p>
          <p className="text-xs text-muted-foreground">Altura</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">
            {(selectedPokemonData?.weight ?? 0) / 10}kg
          </p>

          <p className="text-xs text-muted-foreground">Peso</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">
            {selectedPokemonData?.baseExperience}
          </p>
          <p className="text-xs text-muted-foreground">XP base</p>
        </div>
      </div>
    </>
  )
}
