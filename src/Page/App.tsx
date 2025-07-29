import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import { Relogio } from '../components/cronometro/relogio/Relogio';
import { Cronometro } from '../components/cronometro/cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
    <div className={style.cronometroFormulario}>
        <Formulario/>

<Cronometro/>
      </div>
<Lista/>
    </div>
  );
}

export default App;
