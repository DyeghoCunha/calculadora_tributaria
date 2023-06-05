
import { CalculoContext, CalculoProvider } from '../../../common/contex/Calculos'
import { FaturamentoInputProvider } from '../../../common/contex/FaturamentoInput'
import { GraficoContextProvider } from '../../../common/contex/GraficoContext'

import InputFaturamentoMensal from '../../InputFaturamentoMensal'
import MostraFaturamento from '../../MostraFaturamento'
import TabelaImpostoPresumido from '../../TabelaImpostoPresumido'

import BlocoGraficoFaturamento from '../BlocoGraficos/BlocoGraficoFaturamento'

import BlocoGraficoCircular from '../BlocoGraficos/BlocoGraficosCircular'

import styles from './BlocoFaturamentoMensal.module.scss'
import React, { useContext } from 'react'

export default function BlocoFaturamentoMensal() {




  return (
    <CalculoProvider>
      <FaturamentoInputProvider>

        <div className={styles.container}>
          <InputFaturamentoMensal />
          <div className={styles.containerGrafico}>
            <div className={styles.containerFaturamento}>

              <MostraFaturamento/>
              <TabelaImpostoPresumido />
            </div>
            <div className={styles.contailerAll}>
              <GraficoContextProvider>
                <div className={styles.containerGraficoCircular}>
                  <BlocoGraficoCircular />
                </div>
                <div className={styles.containerGraficosLinhaeBarra}>
                  <BlocoGraficoFaturamento />
                </div>
              </GraficoContextProvider>
            </div>
          </div>
        </div>

      </FaturamentoInputProvider>
    </CalculoProvider>
  );
}
