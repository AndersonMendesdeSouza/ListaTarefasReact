import React, { useState } from "react";
import style from'./Lista.module.scss'
import Iten from "./iten/Iten";
import { Itarefa } from "../../types/Itarefas";



function Lista({tarefa}:{tarefa:Itarefa[]}){

    return(
 
<aside className={style.listaTarefas}>

<h2> ESTUDOS DO DIA</h2>

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