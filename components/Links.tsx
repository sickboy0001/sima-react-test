import styles from './Links.module.css'

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
        ,title:"examples →"
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

export function Links() {
    return (
      <div className={styles.grid}>
        {ITEMS.map(item  => {
            return(
                <a key={item.title} href={item.href} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>
                    {item.description}
                    </p>
            </a>
            )

        })}

     </div>
    )
  }
  