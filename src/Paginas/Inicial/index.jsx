import React from 'react'
import styles from './PaginaInicial.module.scss'


import ResultadoDctf from '../../Componentes/ResultadoDctf'
import { InputDctf } from '../../Componentes/InputDctf'
import Banner from '../../Componentes/Banner'
import InputFaturamento from '../../Componentes/InputFaturamento'
import InputFaturamentoMensal from '../../Componentes/InputFaturamentoMensal'

export default function PaginaInicial() {
  return (

    <div className={styles.container}>
      {/* <Banner/> */}
      <div>
        <InputFaturamento />
        <InputFaturamentoMensal />
      </div>
      <InputDctf />
      <ResultadoDctf />
    </div>

  )
}
