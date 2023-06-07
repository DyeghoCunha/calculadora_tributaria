import React from 'react'
import BlocoFaturamentoMensal from '../../Componentes/BlocoFaturamento/BlocoFaturamentoMensal'
import { FaturamentoInputProvider } from '../../common/contex/FaturamentoInput'
import { CalculoProvider } from '../../common/contex/Calculos'
import BarraLateralGraficos from '../../Componentes/BarraLateralGraficos'
import styles from './PaginaFaturamentoMensal.module.scss'

export default function PaginaFaturamentoMensal() {
  return (


    <section className={styles.container}>

      <div className={styles.faturamentoMensal}>
        <BlocoFaturamentoMensal />
      </div>

      <div className={styles.barraLateral}>
        <BarraLateralGraficos />
      </div>

    </section>


  )
}
