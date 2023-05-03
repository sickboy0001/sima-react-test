import { useCallback, useState } from "react";

export const useCounter =()=>{
    const [count,setCount]  =useState(1)//状態？
    const [isShow,setIsShow] = useState(true)
  
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
  
    return {count,isShow,handleClick,handleDisplay};
  };