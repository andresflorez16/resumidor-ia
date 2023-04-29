import NextLink from 'next/link'
import { Box, Text, Link } from '@chakra-ui/react'

export default function Footer () {
  return (
    <Box
      mt={10}
      w='100%'
    >
      <Text textAlign='center'>
        {new Date().getFullYear()} Made with love by {' '}
        <Link href='https://andresflorez.vercel.app' as={NextLink} target='_blank' rel='noreferrer' color='#63b3ed'>Andrés Florez</Link> ❤️
      </Text>
    </Box>
  )
}
