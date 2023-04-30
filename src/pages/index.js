import { useState } from 'react'

import Layout from '@/components/layouts/layout'
import { Box, Button, FormControl, Input, Spinner, Text, Textarea } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  const [error, setError] = useState('')
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { book, prompt } = Object.fromEntries(new FormData(e.target))
    if (!book || !prompt) setError('Por favor, llena todos los campos 🤨')
    else {
      setLoading(true)
      fetch('/api/resume', {
        method: 'POST',
        body: JSON.stringify({ book, prompt })
      })
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          if (data.code !== 200) return setError(data.msg)
          setError('')
          setAnswer(data.answer)
        })
    }
  }

  return (
    <Layout>
      <Box
        className={inter.className}
        w={{ base: '90%', md: '50%' }}
      >
        <Text
          as='h2'
          my={3}
        >
          Tan sencillo como poner el nombre del libro y lo que quieras saber sobre él.
        </Text>
        <FormControl
          as='form'
          display='flex'
          flexDir='column'
          gap={3}
          onSubmit={handleSubmit}
        >
          <Input
            placeholder='Nombre del libro y autor'
            type='text'
            name='book'
          />
          <Textarea
            name='prompt'
            placeholder='¿Qué quieres saber sobre el libro?'
          />
          {error && <Box color='red'>{error}</Box>}
          <Button
            colorScheme='blue'
            type='submit'
            isDisabled={loading}
          >
            Enviar
          </Button>
        </FormControl>
        {
          loading && (
            <Box w='100%' mt={10} textAlign='center'>
              <Spinner size='xl' />
            </Box>
          )
        }
        {
          answer && !loading && (
            <Box
              mt={5}
              p={5}
              border='1px solid black'
              borderRadius='md'
            >
              <Box
                as='h3'
                fontSize='xl'
                fontWeight='bold'
                mb={3}
              >
                {answer}
              </Box>
            </Box>
          )
          }
      </Box>
    </Layout>
  )
}
