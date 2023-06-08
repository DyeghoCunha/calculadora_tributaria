import { EmpresaContext } from '../../common/contex/Empresa'
import ContainerTrib from '../ContainerTrib'
import MostraFaturamento from '../MostraFaturamento'
import TabelaImpostoPresumido from '../TabelaImpostoPresumido'
import styles from './BlocoTabelaImposto.module.scss'
import React, { useContext } from 'react'

export default function BlocoTabelaImposto() {
  const { dadosFormularioMensal } = useContext(EmpresaContext)

  const teste = [
    {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
        {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
        {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
        {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
        {
      ano: 2018,
      faturamento: 10,
      pis: 10,
      irT: 10,
      csll: 10,
      irRestituir: 10,
      csllRestituir: 10,
      cofinsRestituir: 10,
      pisRestituir: 10,
    },
    // Outros objetos de teste
  ]

  return (
    <section className={styles.containerBlocoTabela}>
      <div className={styles.barraSuperior}>
        {teste.map((objeto, index) => (
          <button key={index} className={styles.anoBotao}>
            {objeto.ano}
          </button>
        ))}
      </div>
      <div className={styles.containerTabelas}>
        {teste.map((objeto, index) => (
          <ContainerTrib key={index}>
            <div className={styles.container}>
              <h1 className={styles.titulo}>{objeto.ano}</h1>
              <MostraFaturamento inputValor={objeto.faturamento} />
              <div className={styles.tabelaImposto}>
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
            </div>
          </ContainerTrib>
        ))}
      </div>
    </section>
  )
}
