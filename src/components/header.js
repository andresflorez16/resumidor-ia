import { Box, Text } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header () {
  return (
    <Box
      w='100%'
      textAlign='center'
      position='fixed'
    >
      <Text fontSize='4xl' className={inter.className}>Resumidor IA</Text>
    </Box>
  )
}
