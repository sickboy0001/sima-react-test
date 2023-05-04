import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from '../components/Main'
import { Header } from '../components/Header'


const Home = (props:any)=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>

      <div>
          <button onClick={props.handleDisplay}>
          {!props.isShow ? "表示":"非表示"}        
          </button>
          {props.isShow ? <h1>{props.count} - {props.doubleCount}</h1>:null}
      </div>  
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
      <Main page="index"/>
      <Footer/>
    </div>
  )
}

export default Home;