import { useCallback, useMemo, useState } from "react";

export const useCounter =()=>{
    const [count,setCount]  =useState(1)//状態？
    const [isShow,setIsShow] = useState(true)

    
    const doubleCount = useMemo(()=>
    {
      return count*2
    },[count]);
  
    const handleDisplay = () => {
      setIsShow(prevIsShow=> ! prevIsShow)
    };
  
    const handleClick = useCallback(
      (e:any)=>  {
        if(count<100){
          setCount((prevCount)=>prevCount*2)
        }
      },[count]//意識する必要ない。レスポンスのために最適化する設定ぽい？
    );
  
    return {count,doubleCount , isShow,handleClick,handleDisplay};
  };