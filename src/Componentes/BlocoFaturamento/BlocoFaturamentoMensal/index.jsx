import ContainerTrib from '../../ContainerTrib'
import GraficoCircular from '../../Graficos/GraficoCirculo'
import InputFaturamentoMensal from '../../InputFaturamentoMensal'
import ResultadoDctf from '../../ResultadoDctf'
import styles from './BlocoFaturamentoMensal.module.scss'
import React from 'react'

export default function BlocoFaturamentoMensal() {
  return (

    <ContainerTrib>


      <InputFaturamentoMensal />
      <div className={styles.containerGrafico}>
        <ResultadoDctf />

        <div className={styles.containerGraficoCircular}>
          <GraficoCircular />
          <GraficoCircular />
          <GraficoCircular />
          <GraficoCircular />
          
        </div>
      </div>

    </ContainerTrib>

  )
}
