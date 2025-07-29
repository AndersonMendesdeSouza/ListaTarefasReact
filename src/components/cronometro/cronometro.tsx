import Botao from "../Botao";
import { Relogio } from "./relogio/Relogio";
import style from './cronometro.module.scss'
export function Cronometro(){
    return(
        <div className={ style.cronometro}>
<div>
    <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
</div >
<div className={style.relogioWrapper}>
<Relogio/>
</div>

 <Botao>Começar</Botao>

        </div>
    )
}