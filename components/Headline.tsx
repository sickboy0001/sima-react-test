import React from "react";
import styles from '@/styles/Home.module.css';

export function Headline(props) {
    console.log(props);
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
  