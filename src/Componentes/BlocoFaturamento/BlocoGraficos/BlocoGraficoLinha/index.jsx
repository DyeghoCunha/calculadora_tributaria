
import { BotaoAsideContext } from '../../../../common/contex/BotoesAside';
import GraficoLinha from '../../../Graficos/GraficoLinha'
import styles from './BlocoGraficoLinha.module.scss'
import React, { useContext, useState } from 'react'
import { TbChartLine } from "react-icons/tb";

export default function BlocoGraficoLinha() {

  const [visivel, setVisivel] = useState(true)
  const { graficoBarra, graficoLinha, setGraficoLinha, graficoFaturamento, setGraficoFaturamento } = useContext(BotaoAsideContext)

  const visibilidade = () => {
    setGraficoLinha(!graficoLinha)

    if (graficoFaturamento) {
      setGraficoFaturamento(false)
    }
 
  }

  return (
    <>
      {!graficoLinha && (
        <div className={styles.container}>
          <button onClick={visibilidade} className={styles.botao}><TbChartLine className={styles.icone} /></button>
          <GraficoLinha />
        </div >
      )}
    </>
  )
}
