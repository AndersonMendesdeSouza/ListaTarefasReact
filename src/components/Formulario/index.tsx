import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss';
class Formulario extends React.Component{
state= {
tarefa: "",
tempo: "00:00:00"
}
 adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
 evento.preventDefault();
    console.log(this.state)
  }

    render(): React.ReactNode {
        return(
<form action="" className={style.formulario} onSubmit={this.adicionarTarefa.bind(this)}>
    <div className={style.formularioInput}>
<div  className={style.inputContainer}>
    <label htmlFor="tarefa">Adicione um novo estudo</label>
    <input type="text" id="tarefa" placeholder="Oque você quer estudar?" 
    value={this.state.tarefa}
    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
    required/>
</div>
<div className={style.inputContainer}>
     <label htmlFor="tempo">Tempo</label>
    <input type="time" step="1" id="tempo"
   value={this.state.tempo}
   onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
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