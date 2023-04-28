import Layout from '@/components/layouts/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <h1 className={inter.className}>Hello world</h1>
    </Layout>
  )
}
