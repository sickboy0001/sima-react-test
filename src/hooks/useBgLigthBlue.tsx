import { useEffect } from "react";

export const useBgLigthBlue =()=>{
    useEffect(()=> {
      document.body.style.backgroundColor = "lightblue";
      return()=>{
        document.body.style.backgroundColor = "";
      }},[])
  
  }
  