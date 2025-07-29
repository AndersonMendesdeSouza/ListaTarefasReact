
export default function Iten({tarefa, tempo} : {tarefa:string, tempo:string}){
    return(

 <li>
    <h3>{tarefa}</h3>
    <span>{tempo}</span>
</li>

    )
}