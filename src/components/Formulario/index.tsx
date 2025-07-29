import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss';
class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
<form action="" className={style.formulario}>
    <div className={style.formularioInput}>
<div  className={style.inputContainer}>
    <label htmlFor="tarefa">Adicione um novo estudo</label>
    <input type="text" id="tarefa" placeholder="Oque você quer estudar?" required/>
</div>
<div className={style.inputContainer}>
     <label htmlFor="tempo">Tempo</label>
    <input type="time" step="1" id="tempo"
    min="00:00:00"
    max="01:30:00"
    required
    />
</div>
</div>
<Botao>Adicionar</Botao>

</form>
        )
    }
}
export default Formulario;