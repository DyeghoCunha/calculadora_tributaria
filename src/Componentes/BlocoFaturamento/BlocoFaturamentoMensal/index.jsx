
import InputFaturamentoMensal from '../../InputFaturamentoMensal'
import ResultadoDctf from '../../ResultadoDctf'
import BlocoGraficoBarra from '../BlocoGraficos/BlocoGraficoBarra'
import BlocoGraficoLinha from '../BlocoGraficos/BlocoGraficoLinha'
import BlocoGraficoCircular from '../BlocoGraficos/BlocoGraficosCircular'

import styles from './BlocoFaturamentoMensal.module.scss'
import React from 'react'

export default function BlocoFaturamentoMensal() {



  return (
    <div className={styles.container}>
      <InputFaturamentoMensal />
      <div className={styles.containerGrafico}>
        <ResultadoDctf />
        <div className={styles.contailerAll}>
          <div className={styles.containerGraficoCircular}>

            <BlocoGraficoCircular />

          </div>
          <div className={styles.containerGraficosLinhaeBarra}>

            <BlocoGraficoLinha/>
            <BlocoGraficoBarra/>
          </div>
        </div>
      </div>
    </div>
  );
}
