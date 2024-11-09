'use server '

interface sendPokemonData {
  nomePokemon: string
  idPokemon: string
  comentarioPokemon: string
  likeDislike: boolean
  gitHubId: string
}

export async function sendComment(formData: FormData): Promise<void> {
  const data: sendPokemonData = {
    nomePokemon: formData.get('nomePokemon') as string,
    idPokemon: formData.get('idPokemon') as string,
    comentarioPokemon: formData.get('comentarioPokemon') as string,
    likeDislike: formData.get('likeDislike') === 'like',
    gitHubId: formData.get('gitHubId') as string,
  }

  try {
    const response = await fetch(
      'https://6723fb74493fac3cf24cd48c.mockapi.io/api/v1/pokemon',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    if (!response.ok) {
      throw new Error('Erro ao enviar comentário, tente novamente')
    }

    console.log(
      `Muito obrigado por compartilhar sua opnião conosco, ela será é muito importante para a nossa equipe ${data.nomePokemon} ${data.idPokemon} ${data.comentarioPokemon} ${data.likeDislike} ${data.gitHubId}`,
    )
  } catch (error) {
    console.error('Erro:', error)
  }
}
