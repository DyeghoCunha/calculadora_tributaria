import React from 'react'
import styles from './PaginaInicial.module.scss'


import TabelaImpostoPresumido from '../../Componentes/TabelaImpostoPresumido'
import { InputDctf } from '../../Componentes/InputDctf'
import Banner from '../../Componentes/Banner'
import InputFaturamento from '../../Componentes/InputFaturamento'
import InputFaturamentoMensal from '../../Componentes/InputFaturamentoMensal'
import GraficoCirculo from '../../Componentes/Graficos/GraficoCirculo'

export default function PaginaInicial() {
  return (

    <div className={styles.container}>
       {/* <Banner/>  */}
      <div>
        <InputFaturamento />
        <InputFaturamentoMensal />
      </div>
      <GraficoCirculo valorPago={900} valorCorreto={570}/>
      <InputDctf />
      <TabelaImpostoPresumido />
    </div>

  )
}
