import styles from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links'
import { useEffect } from 'react'

type thisprops ={
  page:string
}
export function Main(props:thisprops) {
  useEffect(()=> {
    console.log("Mainマウント時")
    document.body.style.backgroundColor = "lightblue";
    // document.querySelector("main").appendChild()
    //queryselecterから直接Dom触るのはよくない
    return()=>{
      console.log("Mainアンマウント時")
      document.body.style.backgroundColor = "";
    }
  },[])
  
  return (
      <main className={`${styles.main} `}>
        <Headline page={props.page}>
            <code className={styles.code}> pages/{props.page} </code>
        </Headline>
        <Links/>
      </main>
  )
}
