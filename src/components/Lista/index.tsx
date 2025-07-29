import React, { useState } from "react";
import style from'./Lista.module.scss'
import Iten from "./iten/Iten";

function Lista(){

const [tarefa, setTarefas] = useState([
       {
tarefa:'react',
tempo:'02:00:00'
},
{
tarefa:'javaScript',
tempo: '01:00:00'
},
{
    tarefa:'typeScript',
    tempo:'03:00:00'
}]
)

    return(
 
<aside className={style.listaTarefas}>

<h2 onClick={()=>{
    setTarefas([...tarefa, {tarefa: "HTML", tempo: "01:00:00"}])

}}> ESTUDOS DO DIA</h2>

<ul>
{tarefa.map((iten, index)=> (
<Iten
key={index}
 tarefa ={iten.tarefa}
 tempo ={iten.tempo}
/>

) )}

</ul>
</aside>
)
}
export default Lista;