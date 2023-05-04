
import styles from 'src/components/Links/Links.module.css'

interface Link {
    title: string;
    link: string;
  }
  
  interface LinksProps {
    items: Link[];
    handleReduce: () => void;
  }
export function Links({items , handleReduce}:LinksProps): JSX.Element {

    return (
      <div className={styles.grid}>
        {items.map((item:any)  => {
            return(
                <a key={item.title} href={item.href} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>
                    {item.description}
                    </p>
            </a>
            )

        })}

    </div>
    )
  }
  