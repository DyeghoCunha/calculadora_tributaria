import ContainerTrib from '../../ContainerTrib'
import GraficoBarra from '../../Graficos/GraficoBarra'
import GraficoCircular from '../../Graficos/GraficoCirculo'
import GraficoLinha from '../../Graficos/GraficoLinha'
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

       
          <div className={styles.contailerAll}>
          <div className={styles.containerGraficoCircular}>
            <GraficoCircular />
            <GraficoCircular />
            <GraficoCircular />
            <GraficoCircular />
          </div>

          <div>
            <GraficoLinha />
            <GraficoBarra />
          </div>

      </div>

    
      </div >

    </ContainerTrib >

  )
}
