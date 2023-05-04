
import styles from 'src/components/Links/Links.module.css'


export const Links=(props:any)=> {

    return (
      <div className={styles.grid}>
        {props.items.map((item:any)  => {
            return(
                <a key={item.title} href={item.href} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
            </a>
            )
        })}
    </div>
    )
  }
  