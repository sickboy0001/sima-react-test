import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect } from 'react'




export default function Home() {
  // const foo = 1
  // //再描画の回避＝UseCallBack
  // const handleClick=useCallback((e:any)=>  {
  //   console.log(e.target)
  //   e.preventDefault();
  //   // aleart(foo);
  //   alert(foo)
  // },[]);
  //マウント、アンマウント　ライフサイクル


  return (
    <div className={styles.container}>
      {/* <div 
      onClick={(e)=>{
        handleClick(e)
      }}>
      test onclick
      </div> */}
      <Head>
        <title>Index</title>
      </Head>
      <Header/>
      {/* <a 
        href='/about'
        onClick={handleClick}
      >button</a> */}
      <Main page="index"/>
      <Footer/>
    </div>
  )
}
