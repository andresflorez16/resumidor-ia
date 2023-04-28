import { Box, Text } from '@chakra-ui/react'

export default function Footer () {
  return (
    <Box
      position='absolute'
      bottom={0}
      w='100%'
    >
      <Text textAlign='center'>{new Date().getFullYear()} Made with love by Andrés Florez ❤️</Text>
    </Box>
  )
}
