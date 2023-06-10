import React from 'react'
import BlocoFaturamentoMensal from '../../Componentes/BlocoFaturamento/BlocoFaturamentoMensal'
import { FaturamentoInputProvider } from '../../common/contex/FaturamentoInput'
import { CalculoProvider } from '../../common/contex/Calculos'
import BarraLateralGraficos from '../../Componentes/BarraLateralGraficos'
import styles from './PaginaFaturamentoMensal.module.scss'
import { EmpresaProvider } from '../../common/contex/Empresa'
import { BotaoAsideProvider } from '../../common/contex/BotoesAside'

export default function PaginaFaturamentoMensal() {
  return (

    <EmpresaProvider>
      <BotaoAsideProvider>
        <section className={styles.container}>

          <div className={styles.faturamentoMensal}>
            <BlocoFaturamentoMensal />
          </div>

          <div className={styles.barraLateral}>

            <BarraLateralGraficos />
          </div>

        </section>
      </BotaoAsideProvider>
    </EmpresaProvider>
  )
}
