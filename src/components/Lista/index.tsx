import React from "react";
import './style.scss'

function Lista(){
const tarefa = [
    {
nome:'react',
tempo:'02:00:00'
},
{
nome:'javaScript',
tempo: '01:00:00'
},
{
    nome:'typeScript',
    tempo:'03:00:00'
}
];

    return(
 
<aside className="listaTarefas">

<h2> ESTUDOS DO DIA</h2>

<ul>
{tarefa.map((tarefa, index)=> (
<li key={index}>
    <h3>{tarefa.nome}</h3>
    <span>{tarefa.tempo}</span>
     
</li>

) )}

</ul>
</aside>
)
}
export default Lista;