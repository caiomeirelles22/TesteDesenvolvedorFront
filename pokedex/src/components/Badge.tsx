import React from 'react'

export type PokemonType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'flying'
  | 'fighting'
  | 'poison'
  | 'electric'
  | 'ground'
  | 'rock'
  | 'psychic'
  | 'ice'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'dragon'
  | 'dark'
  | 'fairy'

type BadgeProps = {
  text: string
  type: PokemonType
}

export function Badge({ text, type }: BadgeProps) {
  const getTypeColor = (type: PokemonType) => {
    switch (type) {
      case 'normal':
        return 'bg-gray-400'
      case 'fire':
        return 'bg-red-500'
      case 'water':
        return 'bg-blue-500'
      case 'grass':
        return 'bg-green-500'
      case 'flying':
        return 'bg-indigo-300'
      case 'fighting':
        return 'bg-orange-700'
      case 'poison':
        return 'bg-purple-500'
      case 'electric':
        return 'bg-yellow-400'
      case 'ground':
        return 'bg-yellow-700'
      case 'rock':
        return 'bg-gray-600'
      case 'psychic':
        return 'bg-pink-500'
      case 'ice':
        return 'bg-blue-300'
      case 'bug':
        return 'bg-lime-600'
      case 'ghost':
        return 'bg-indigo-900'
      case 'steel':
        return 'bg-gray-500'
      case 'dragon':
        return 'bg-purple-700'
      case 'dark':
        return 'bg-gray-800'
      case 'fairy':
        return 'bg-pink-300'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-sm font-semibold text-white rounded-full w-fit ${getTypeColor(type)}`}
    >
      {text}
    </span>
  )
}
