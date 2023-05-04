import styles from 'src/components/Header/Header.module.css';
import Link from "next/link"

const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/about",label:"About"}
]

export const Header=()=> {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map(item=>{
        return (
        <Link key={item.href} href={item.href} legacyBehavior>
          <a  className={styles.anchor}>{item.label}</a>
        </Link>)

      })}
    </header>
  )
}
