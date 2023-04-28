import Head from 'next/head'

export default function Layout ({ children }) {
  return (
    <div>
      <Head>
        <title>Resumidor IA</title>
        <meta name='description' content='Resume, pregunta y transcribe información sobre cualquier libro o PDF' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  )
}
