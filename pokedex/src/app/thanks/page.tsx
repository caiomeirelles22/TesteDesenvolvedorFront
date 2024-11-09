'use client'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Confetti from 'react-confetti'
import thanksPokemon from '../../../public/thankspokemon.jpg'

function ClientOnlyComponent() {
  const searchParams = useSearchParams()
  const pokemonName = searchParams.get('nomePokemon')
  const likeDislike = searchParams.get('likeDislike')
  const comentarioPokemon = searchParams.get('comentarioPokemon')
  const gitHubId = searchParams.get('gitHubId')

  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => setIsLoaded(false), 3000)
  }, [])

  return (
    <>
      {isLoaded && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <div className="flex flex-col flex-wrap gap-1 border border-solid border-gray-400 p-4 rounded-md">
        <h1 className="text-xl font-bold">Comentário recebido</h1>
        <div>
          <div className="flex flex-wrap gap-1">
            <p>
              Olá, <span>{gitHubId}! </span>
            </p>
            <p>
              Obrigado pelo seu comentário sobre o
              <span className="capitalize"> {pokemonName}</span>.
            </p>
            <p>&quot;{comentarioPokemon}&quot;.</p>
          </div>
          <p>
            {likeDislike === 'like'
              ? 'Nós também adoramos esse Pokémon!'
              : 'Uma pena que você não goste dele, mas respeitamos sua opinião!'}
          </p>
        </div>
      </div>
    </>
  )
}

export default function Thanks() {
  return (
    <main className="max-w-5xl w-full mx-auto ">
      <Suspense fallback={<div>Carregando...</div>}>
        <ClientOnlyComponent />
      </Suspense>
      <div className="p-4">
        <Image
          src={thanksPokemon}
          width={1280}
          height={720}
          alt="Pikachu agradecendo"
          quality={100}
        />
      </div>
    </main>
  )
}
