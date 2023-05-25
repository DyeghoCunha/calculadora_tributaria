import React from 'react'
import InputFaturamentoGenerico from './InputFaturamentoGenerico'
import styles from './InputFaturamentoMensal.module.scss'

export default function InputFaturamentoMensal() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Faturamento Mensal</h1>
      <div className={styles.mesesContainer}>
        <div className={styles.mesesContainer_div}>
          <InputFaturamentoGenerico mes='Janeiro' />
          <InputFaturamentoGenerico mes='Março' />
          <InputFaturamentoGenerico mes='Maio' />
          <InputFaturamentoGenerico mes='Julho' />
          <InputFaturamentoGenerico mes='Setembro' />
          <InputFaturamentoGenerico mes='Novembro' />
        </div>

        <div className={styles.mesesContainer_div}>

          <InputFaturamentoGenerico mes='Fevereiro' />
          <InputFaturamentoGenerico mes='Abril' />
          <InputFaturamentoGenerico mes='Junho' />
          <InputFaturamentoGenerico mes='Agosto' />
          <InputFaturamentoGenerico mes='Outubro' />
          <InputFaturamentoGenerico mes='Dezembro' />
        </div>
      </div>

    </div>

  )
}
