import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'src/components/Main'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLigthBlue } from 'src/hooks/useBgLigthBlue'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  
  const {count,isShow,handleClick,handleDisplay} =useCounter();
  const {text,array,handleAdd,handleChange} =useInputArray();
  useBgLigthBlue();

  return (
    <>
      <Head>
        <title>About</title>
    </Head>
      <Header/>

      <div>
          <button onClick={handleDisplay}>
          {!isShow ? "表示":"非表示"}        
          </button>
      </div>  
      {isShow ? <h1>{count}</h1>:null}
      <button onClick={handleClick}>button</button>
      <input type="text" value={text} 
        onChange={handleChange}
        />
        <div>
          <button onClick={handleAdd}>
            handleaAdd
          </button>
        </div>
        <ul>
          {array.map(item => {
            return(
              <li key={item}>{item}</li>
            )
          })}
        </ul>

      <Main page="about"/>
      <Footer/>
    </>
  )
}
