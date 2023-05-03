import { useCallback, useState } from "react"

export const useInputArray = () =>{
  const [text,setText] = useState("")
  const [array,setArray] = useState([])

  const handleAdd = useCallback(
    ()=>{
        setArray(
          (prevArray:any)=>
            {
              if(prevArray.some((item: string) => item === text))
              {
                alert("同じ要素があります。")
                return prevArray; 
              }
              const newArray = [...prevArray,text]
              return newArray;
          }
          )
    },[text])


  const handleChange=useCallback((e:any)=>{
    if(e.target.value.length>10){
      alert("10文字以内にしてください")
      return
    }
    setText(e.target.value.trim());
  },[])



  return {text,array,handleAdd,handleChange}

}
