import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'src/components/Main'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header/>
      <Main page="about"/>
      <Footer/>

</>
  )
}
