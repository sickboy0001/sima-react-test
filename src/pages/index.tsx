import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {

  const [count,setCount]  =useState(1)//状態？
  const handleClick = useCallback(
    //再生成？
    (e:any)=>  {
      console.log(count)
      if(count<100){
        setCount((foo)=>foo*2)
      }
    },[count]//意識する必要ない。レスポンスのために最適化する設定ぽい？
  );
  
  useEffect(()=> {
    // console.log(`マウント時:${count}`)
    document.body.style.backgroundColor = "lightblue";
    return()=>{
      document.body.style.backgroundColor = "";
      // console.log(`アンマウント時:${count}`)
    }},[])

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
