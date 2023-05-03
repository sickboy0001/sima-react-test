import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {

  const [count,setCount]  =useState(1)
  const handleClick = (e:any)=>  {
    setCount((count)=>count*2)
    setCount((count)=>count*2)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>
      <h1>{count}</h1>
      <button
        onClick={handleClick}
      >button</button>
      <Main page="index"/>
      <Footer/>
    </div>
  )
}
