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
  

  for( let i= 0; i < dadosFormularioMensal.length ; i++){
    <div className={styles.container}>
          <h1 className={styles.titulo}>{dadosFormularioMensal[i].ano}</h1>
          <MostraFaturamento inputValor={dadosFormularioMensal[i].faturamento} />
          <TabelaImpostoPresumido 
          propsIr={dadosFormularioMensal[i].irT} 
          propsCsll={dadosFormularioMensal[i].csll}
          propsPis={dadosFormularioMensal[i].pis}
          propsCofins={dadosFormularioMensal[i].cofins}
          propsIrRestituir={dadosFormularioMensal[i].irRestituir}
          propsCsllRestituir={dadosFormularioMensal[i].csllRestituir}
          propsCofinsRestituir={dadosFormularioMensal[i].cofinsRestituir}
          propsPisRestituir={dadosFormularioMensal[i].pisRestituir}
          />
        </div>

  }

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
