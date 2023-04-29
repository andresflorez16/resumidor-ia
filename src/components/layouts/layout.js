import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import { Box } from '@chakra-ui/react'

export default function Layout ({ children }) {
  return (
    <div>
      <Head>
        <title>Resumidor IA</title>
        <meta name='description' content='Resume, pregunta  información sobre cualquier libro o PDF' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Box
        minH='75vh'
        mt='100px'
        display='flex'
        justifyContent='center'
      >
        {children}
      </Box>
      <Footer />
    </div>
  )
}
