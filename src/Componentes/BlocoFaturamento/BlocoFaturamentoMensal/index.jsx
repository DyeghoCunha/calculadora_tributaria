
import { CalculoProvider } from '../../../common/contex/Calculos'
import { FaturamentoInputProvider } from '../../../common/contex/FaturamentoInput'
import InputFaturamentoMensal from '../../InputFaturamentoMensal'
import TabelaImpostoPresumido from '../../TabelaImpostoPresumido'

import BlocoGraficoFaturamento from '../BlocoGraficos/BlocoGraficoFaturamento'

import BlocoGraficoCircular from '../BlocoGraficos/BlocoGraficosCircular'

import styles from './BlocoFaturamentoMensal.module.scss'
import React from 'react'

export default function BlocoFaturamentoMensal() {



  return (
    <CalculoProvider>
      <FaturamentoInputProvider>

        <div className={styles.container}>
          <InputFaturamentoMensal />
          <div className={styles.containerGrafico}>
            <TabelaImpostoPresumido />
            <div className={styles.contailerAll}>
              <div className={styles.containerGraficoCircular}>

                <BlocoGraficoCircular />

              </div>
              <div className={styles.containerGraficosLinhaeBarra}>

                <BlocoGraficoFaturamento />
              </div>
            </div>
          </div>
        </div>
        
      </FaturamentoInputProvider>
    </CalculoProvider>
  );
}
