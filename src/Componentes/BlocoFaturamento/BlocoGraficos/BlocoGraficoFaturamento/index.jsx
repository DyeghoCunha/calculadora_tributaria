import styles from './BlocoGraficoFaturamento.module.scss'
import React, { useContext, useState } from 'react'
import BlocoGraficoLinha from '../BlocoGraficoLinha'
import BlocoGraficoBarra from '../BlocoGraficoBarra'

import { RiFolderChartLine } from "react-icons/ri";
import { BotaoAsideContext } from '../../../../common/contex/BotoesAside';



export default function BlocoGraficoFaturamento() {

  const [visivel, setVisivel] = useState(true)
  const { graficoFaturamento, setGraficoFaturamento, graficoLinha, setGraficoLinha, graficoBarra, setGraficoBarra } = useContext(BotaoAsideContext)

  const visibilidade = () => {
    setGraficoFaturamento(!graficoFaturamento)
    setGraficoBarra(!graficoBarra)
    setGraficoLinha(!graficoLinha)

  }

  return (
    <>

      {!graficoFaturamento && (
        <div className={styles.container}>
          <div className={styles.containerTitulo}>
            <h1 className={styles.titulo}>Grafico do Faturamento</h1>
            <div className={styles.botao} onClick={visibilidade}>
              <RiFolderChartLine className={styles.icone} />
            </div>
          </div>

          <BlocoGraficoLinha />
          <BlocoGraficoBarra />

        </div>
      )}
    </>
  );
}