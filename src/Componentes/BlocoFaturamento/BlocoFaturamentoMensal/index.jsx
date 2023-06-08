
import { CalculoProvider } from '../../../common/contex/Calculos'
import { EmpresaProvider } from '../../../common/contex/Empresa.js'
import { FaturamentoInputProvider } from '../../../common/contex/FaturamentoInput'
import { GraficoContextProvider } from '../../../common/contex/GraficoContext'
import BlocoTabelaImposto from '../../BlocoTabelaImposto'

import InputFaturamentoMensal from '../../InputFaturamentoMensal'
import MostraFaturamento from '../../MostraFaturamento'
import TabelaImpostoPresumido from '../../TabelaImpostoPresumido'

import BlocoGraficoFaturamento from '../BlocoGraficos/BlocoGraficoFaturamento'

import BlocoGraficoCircular from '../BlocoGraficos/BlocoGraficosCircular'

import styles from './BlocoFaturamentoMensal.module.scss'
import React, { useContext } from 'react'
import { BotaoAsideProvider } from '../../../common/contex/BotoesAside'

export default function BlocoFaturamentoMensal() {




  return (
    <EmpresaProvider>
      <CalculoProvider>
        <FaturamentoInputProvider>
          <BotaoAsideProvider></BotaoAsideProvider>
          <div className={styles.container}>
            <InputFaturamentoMensal />
            <div className={styles.containerGrafico}>

              <div className={styles.containerFaturamento}>
                <BlocoTabelaImposto />
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
    </EmpresaProvider>
  );
}
