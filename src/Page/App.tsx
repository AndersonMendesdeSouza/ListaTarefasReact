import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import { Relogio } from '../components/cronometro/relogio/Relogio';
import { Cronometro } from '../components/cronometro/cronometro';

function App() {
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
  return (
    <div className={style.AppStyle}>
    <div className={style.cronometroFormulario}>
   <Formulario setTarefas = {setTarefas}/>

<Cronometro/>
      </div>
<Lista 
tarefa = {tarefa}
/>
    </div>
  );
}

export default App;
