import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLigthBlue } from 'src/hooks/useBgLigthBlue'


export default function App({ Component, pageProps }: AppProps) {
  const counter=useCounter();
  const inputArray =useInputArray();
  useBgLigthBlue();
  return (
    
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} {...counter} {...inputArray} />
      </>
    )
  }
