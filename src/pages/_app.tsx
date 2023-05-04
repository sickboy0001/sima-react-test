import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgColor } from 'src/hooks/useBgColor'


export default function App({ Component, pageProps }: AppProps) {
  const counter=useCounter();
  const inputArray =useInputArray();
  useBgColor();
  return (
    
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} {...counter} {...inputArray} />
      </>
    )
  }
