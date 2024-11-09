'use client'

import { DataGrid } from './DataGrid'
import { Drawer } from './Drawer'
import { pokemon } from '@/types/pokemon'
import { useState } from 'react'
import { PokeInfosDrawer } from './PokeInfosDrawer'
import { SendCommentForm } from './SendCommentForm'

interface GridAndDrawerProps {
  pokemons: pokemon[]
  error: string | null
}

export function GridAndDrawer({ pokemons, error }: GridAndDrawerProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null)

  function handleOpenDrawer(id: number) {
    setSelectedPokemon(id)
    setIsDrawerOpen(true)
  }

  function handleCloseDrawer() {
    setSelectedPokemon(null)
    setIsDrawerOpen(false)
  }

  const selectedPokemonData = pokemons.find(
    (pokemon) => pokemon.id === selectedPokemon,
  )

  return (
    <div className="max-h-[calc(100vh-72px-56px-2rem)] bg-red-600 overflow-y-scroll overflow-x-hidden">
      {error && <p className="text-red-500">{error}</p>}

      <DataGrid data={pokemons} onOpenDrawer={handleOpenDrawer} />

      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
        {selectedPokemonData ? (
          <div className="flex flex-col space-y-4">
            <PokeInfosDrawer
              abilities={selectedPokemonData?.abilities}
              baseExperience={selectedPokemonData?.baseExperience}
              height={selectedPokemonData?.height}
              id={selectedPokemonData?.id}
              image={selectedPokemonData?.image}
              name={selectedPokemonData?.name}
              types={selectedPokemonData?.types}
              weight={selectedPokemonData?.weight}
            />
            <SendCommentForm
              idPokemon={selectedPokemonData?.id}
              nomePokemon={selectedPokemonData.name}
            />
          </div>
        ) : (
          <p>Selecione um Pokémon para ver os detalhes</p>
        )}
      </Drawer>
    </div>
  )
}
