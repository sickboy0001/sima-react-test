import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {


  const [count,setCount]  =useState(1)//状態？
  const [text,setText] = useState("")
  const [isShow,setIsShow] = useState(true)
  const [array,setArray] = useState([])
  const handleDisplay = () => {
    setIsShow(prevIsShow=> ! prevIsShow)
  };
  const handleAdd = useCallback(
    ()=>{
        setArray(
          (prevArray:any)=>
            {
              if(prevArray.some((item: string) => item === text))
              {
                alert("同じ要素があります。")
                return prevArray; 
              }
              const newArray = [...prevArray,text]
              return newArray;
          }
          )
    },[text])

  const handleClick = useCallback(
    (e:any)=>  {
      if(count<100){
        setCount((prevCount)=>prevCount*2)
      }
    },[count]//意識する必要ない。レスポンスのために最適化する設定ぽい？
  );

  const handelChange=useCallback((e:any)=>{
    if(e.target.value.length>10){
      alert("10文字以内にしてください")
      return
    }
    setText(e.target.value.trim());
  },[])

  useEffect(()=> {
    document.body.style.backgroundColor = "lightblue";
    return()=>{
      document.body.style.backgroundColor = "";
    }},[])

  // console.log(text);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
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
        onChange={handelChange}
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
      <Main page="index"/>
      <Footer/>
    </div>
  )
}
