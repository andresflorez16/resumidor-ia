import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi
} from 'openai'

const apiKey = process.env.api_key
const config = new Configuration({ apiKey })

const openAi = new OpenAIApi(config)

export default function resume (req, res) {
  const { book, prompt } = JSON.parse(req.body)

  if (!book || !prompt) return res.status(400).json({ msg: 'Por favor, llena todos los campos 🤨', code: 400 })

  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: 'Eres una IA que sabe mucho sobre libros y PDFs. Recibirás el nombre de un libro de este modo {{book}} y también recibirás una pregunta sobre el libro que viene de esta forma [[prompt]]. Tu trabajo es responder la pregunta de la mejor manera posible sin responder cosas que no tengan que ver con el libro. Si no sabes la respuesta, puedes decir "No sé, te jodiste".'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: 'Tú libro es {{book}} y la pregunta es [[prompt]].'
    }
  ]

  return openAi.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      ...messages,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: `Tú libro es ${book} y la pregunta es ${prompt}.`
      }
    ]
  })
    .then(completion => {
      if (!completion.data.choices[0]?.message?.content) throw res.json({ msg: 'No se pudo obtener la respuesta', code: 500 })

      const answer = completion.data.choices[0].message.content
      return res.status(200).json({ answer, code: 200 })
    })
    .catch(err => {
      const msg = err?.response?.data?.error?.msg || err.message
      return res.status(500).json({ msg, code: 500 })
    })
}
