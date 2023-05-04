import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main } from 'src/components/Main'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'



const inter = Inter({ subsets: ['latin'] })

const About =(props:any)=> {
  return (
    <>
      <Head>
        <title>About</title>
    </Head>
      <Header/>

      <div>
          <button onClick={props.handleDisplay}>
          {!props.isShow ? "表示":"非表示"}        
          </button>
      </div>  
      {props.isShow ? <h1>{props.count} - {props.doubleCount}</h1>:null}
      <button onClick={props.handleClick}>button</button>
      <input type="text" value={props.text} 
        onChange={props.handleChange}
        />
        <div>
          <button onClick={props.handleAdd}>
            handleaAdd
          </button>
        </div>
        <ul>
          {props.array.map(item => {
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
export default About;

