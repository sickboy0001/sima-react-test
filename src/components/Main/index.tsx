import styles from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links'

type thisprops ={
  page:string
}
export function Main(props:thisprops) {
  return (
      <main className={`${styles.main} `}>
        <Headline page={props.page}>
            <code className={styles.code}> pages/{props.page} </code>
        </Headline>
        <Links/>
      </main>
  )
}
