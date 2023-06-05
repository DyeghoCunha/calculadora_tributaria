import ContainerTrib from '../ContainerTrib'
import MostraFaturamento from '../MostraFaturamento'
import TabelaImpostoPresumido from '../TabelaImpostoPresumido'
import styles from './BlocoTabelaImposto.module.scss'
import React from 'react'

export default function BlocoTabelaImposto() {



  

  return (
    <ContainerTrib>
      <section className={styles.containerBlocoTabela}>
        <div className={styles.container}>
          <h1 className={styles.titulo}>Ano</h1>
          <MostraFaturamento />
          <TabelaImpostoPresumido />
        </div>

        <div className={styles.container}>
          <h1 className={styles.titulo}>Ano</h1>
          <MostraFaturamento />
          <TabelaImpostoPresumido />
        </div>

        <div className={styles.container}>
          <h1 className={styles.titulo}>Ano</h1>
          <MostraFaturamento />
          <TabelaImpostoPresumido />
        </div>

        <div className={styles.container}>
          <h1 className={styles.titulo}>Ano</h1>
          <MostraFaturamento />
          <TabelaImpostoPresumido />
        </div>

        <div className={styles.container}>
          <h1 className={styles.titulo}>Ano</h1>
          <MostraFaturamento />
          <TabelaImpostoPresumido />
        </div>

      </section>
    </ContainerTrib>
  )
}
