import styles from './Headline.module.css';

type thisprops = {
    page: string;
    children: string;
  };
  
export function Headline(props:thisprops) {
    // console.log(props);
    return (
        <div>
            <h1 className={styles.title}>
               {props.page} page
            </h1>
            <p className={styles.description}>
                Get stated by editing  {props.children}              
            </p>
        </div>
    )
  };
  