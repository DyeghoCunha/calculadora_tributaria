import { EmpresaContext } from '../../common/contex/Empresa'
import ContainerTrib from '../ContainerTrib'
import MostraFaturamento from '../MostraFaturamento'
import TabelaImpostoPresumido from '../TabelaImpostoPresumido'
import styles from './BlocoTabelaImposto.module.scss'
import React, { useContext } from 'react'

export default function BlocoTabelaImposto() {

  const { dadosFormularioMensal } = useContext(EmpresaContext)

  if (dadosFormularioMensal.length > 0 && dadosFormularioMensal[0].ano > 0) {
    console.log(dadosFormularioMensal[0].ano);
  }
  
  for( const i= 0; i < dadosFormularioMensal.length ; i++){

  }

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
