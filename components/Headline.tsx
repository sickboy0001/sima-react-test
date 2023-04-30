import React from "react";
import styles from '@/styles/Home.module.css';

export function Headline(props) {
    // console.log(props);
    return (
        <React.Fragment>
            <h1 className={styles.title}>
               {props.pagename} page
            </h1>
            <p className={styles.description}>
                {props.description}
            </p>
        </React.Fragment>
          
    )
  };
  