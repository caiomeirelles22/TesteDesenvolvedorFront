import { getPokemons } from '@/utils/getPokemons'
import { GridAndDrawer } from '@/components/GridAndDrawer'

export default async function Home() {
  const { pokemons, error } = await getPokemons()

  return (
    <main className="max-w-5xl w-full mx-auto">
      <GridAndDrawer pokemons={pokemons} error={error} />
    </main>
  )
}
