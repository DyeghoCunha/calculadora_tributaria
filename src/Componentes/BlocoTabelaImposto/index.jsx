import { EmpresaContext } from '../../common/contex/Empresa'
import ContainerTrib from '../ContainerTrib'
import MostraFaturamento from '../MostraFaturamento'
import TabelaImpostoPresumido from '../TabelaImpostoPresumido'
import styles from './BlocoTabelaImposto.module.scss'
import React, { useContext } from 'react'

export default function BlocoTabelaImposto() {

  const { dadosFormularioMensal } = useContext(EmpresaContext)

   return (
    <ContainerTrib>
      <section className={styles.containerBlocoTabela}>
        {dadosFormularioMensal.map((objeto, index) => (
          <div className={styles.container} key={index}>
            <h1 className={styles.titulo}>{objeto.ano}</h1>
            <MostraFaturamento inputValor={objeto.faturamento} />
            <TabelaImpostoPresumido 
              propsIr={objeto.irT} 
              propsCsll={objeto.csll}
              propsPis={objeto.pis}
              propsCofins={objeto.cofins}
              propsIrRestituir={objeto.irRestituir}
              propsCsllRestituir={objeto.csllRestituir}
              propsCofinsRestituir={objeto.cofinsRestituir}
              propsPisRestituir={objeto.pisRestituir}
            />
          </div>
        ))}
      </section>
    </ContainerTrib>
  )
}
