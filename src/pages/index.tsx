import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Main } from '../components/Main'
import { Header } from '../components/Header'


export default function Home(props) {
  const{
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  }=props;

  console.log(props.foo);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>

      <div>
          {isShow ? <h1>{count}</h1>:null}
          <button onClick={handleDisplay}>
          {!isShow ? "表示":"非表示"}        
          </button>
      </div>  
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
      <Main page="index"/>
      <Footer/>
    </div>
  )
}

