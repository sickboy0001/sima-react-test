import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor =()=>{
    const router = useRouter()
    const bgcolor=useMemo(()=>{
      switch (router.pathname) {
        case "/":
          return "beige"          
      
        default:
          return "lightblue"          
      }
    },[router.pathname]);
    useEffect(()=> {
      document.body.style.backgroundColor  = bgcolor;
      return()=>{
        document.body.style.backgroundColor = "";
      }},[bgcolor])
  
  }
  