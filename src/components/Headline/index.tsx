import styles from 'src/components/Headline/Headline.module.css';

  
export function Headline(props:any) {
    // console.log(props);
    return (
        <div>
            <h1 className={styles.title}>
               {props.page} page
            </h1>
            <p className={styles.description}>
                Get stated by editing  {props.children}              
            </p>
            <div>
            <button onClick={props.handleReduce}>減らす</button>
            </div>
        </div>
    )
  };
  