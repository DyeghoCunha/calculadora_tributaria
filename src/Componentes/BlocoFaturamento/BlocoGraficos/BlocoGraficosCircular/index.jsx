import React, { useState } from 'react'
import ContainerTrib from '../../../ContainerTrib'
import GraficoCircular from '../../../Graficos/GraficoCirculo'
import styles from './BlocoGraficoCircular.module.scss'
import { TbChartDonut2 } from "react-icons/tb";

export default function BlocoGraficoCircular({ nomeImposto, valorPago, valorCorreto }) {

  const [visibilidade, setVisibilidade] = useState(true)

  const mostraConteudo = () => {
    setVisibilidade(!visibilidade)
  }

  return (
    <div className={styles.container}>

      <div className={styles.botao} onClick={mostraConteudo}><TbChartDonut2 className={styles.icone} /></div>
      {visibilidade && (
      <ContainerTrib>


        
          <div className={styles.containerGrafico}>
            <GraficoCircular nomeImposto={nomeImposto = 'IR'} valorPago={valorPago = 1000} valorCorreto={valorCorreto = 600} />
            <GraficoCircular nomeImposto={nomeImposto = 'CSLL'} valorPago={valorPago = 1000} valorCorreto={valorCorreto = 300} />
            <GraficoCircular nomeImposto={nomeImposto = 'PIS'} valorPago={valorPago = 1000} valorCorreto={valorCorreto = 200} />
            <GraficoCircular nomeImposto={nomeImposto = 'COFINS'} valorPago={valorPago = 1000} valorCorreto={valorCorreto = 900} />
          </div>
          
      </ContainerTrib>
        )}

    </div>
  )
}
