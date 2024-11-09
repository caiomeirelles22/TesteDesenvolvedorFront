import FormNext from 'next/form'
import { Button } from './Button'
import { sendComment } from '@/utils/sendComment'

interface sendCommentFormProps {
  nomePokemon: string
  idPokemon: number
}

export function SendCommentForm({
  nomePokemon,
  idPokemon,
}: sendCommentFormProps) {
  return (
    <FormNext
      action={'/thanks'}
      className="flex flex-col items-center gap-4 bg-gray-100 p-2"
      //  onSubmit={() => router.push(`/thanks/${nomePokemon}'`)}
      onSubmit={() => sendComment}
    >
      <div className="flex gap-2">
        <input type="hidden" name="nomePokemon" value={nomePokemon} />
        <input type="hidden" name="idPokemon" value={idPokemon} />
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg bg-green-500">
          <input
            required
            id="like"
            type="radio"
            value="like"
            name="likeDislike"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="like"
            className="w-14 py-4 ms-2 text-sm font-medium text-gray-900 "
          >
            Like
          </label>
        </div>

        <div className="flex items-center ps-4 border border-gray-200 rounded-lg bg-red-500">
          <input
            required
            id="dislike"
            type="radio"
            value="dislike"
            name="likeDislike"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="dislike"
            className="w-14 py-4 ms-2 text-sm font-medium text-gray-900"
          >
            Dislike
          </label>
        </div>
      </div>
      <textarea
        name="comentarioPokemon"
        required
        className="border border-solid border-gray-300 p-2 resize-none w-full"
        rows={6}
        placeholder="Seu comentário sobre o pokemón"
      />
      <input
        name="gitHubId"
        required
        className="w-full border border-solid border-gray-200 p-2"
        type="text"
        placeholder="Seu GitHub"
      />
      <Button size="full" color="gray">
        Enviar
      </Button>
    </FormNext>
  )
}
