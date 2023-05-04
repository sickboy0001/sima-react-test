import styles from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links'
import { useCallback, useEffect, useState } from 'react'


const ITEMS = [
  {
      href:""
      ,title:"Documment →"
      ,description:'The "path" constructor option and JSON Array with objects as elements.'
  },{
      href:""
      ,title:"The examples →"
      ,description:' The examples on this page attempt to illustrate how the JSON Data Set treats specific formats, and gives examples of the different constructor options that allow the user to tweak its behavior. See our JSON Primer for more information.'
  },{
      href:""
      ,title:"objects as elements →"
      ,description:'The JSON output from different Server APIs can range from simple to highly nested and complex. The examples on this page attempt to illustrate how the JSON Data Set treats specific formats, and gives examples of the different constructor options that allow the user to tweak its behavior. See our JSON Primer for more information.'
  },{
      href:""
      ,title:"constructor →"
      ,description:'gives examples of the different constructor options that allow the user to tweak its behavior. See our JSON Primer for more information.'
  },{
      href:""
      ,title:"extract →"
      ,description:'If the data you want to extract out is not at the top-level of the JSON object, you can tell the JSON data set where to find it by using the "path" constructor option. In this example, we want to extract out all of the "batter" data: '
  },
]


type thisprops ={
  page:string
}
export function Main(props:thisprops) {
  const [items,setItems] = useState(ITEMS);
  const handleReduce = useCallback(()=>{
      setItems(prevItems=>{
          return prevItems.slice(0,prevItems.length-1)
      })
  },[])

  return (
      <main className={`${styles.main} `}>
        <Headline page={props.page} handleReduce={handleReduce}>
            <code className={styles.code}> pages/{props.page} </code>
        </Headline>
        <Links items={items} handleReduce={handleReduce}/>
      </main>
  )
}
