import styles from './BlocoGraficoFaturamento.module.scss'
import React, { useState } from 'react'
import BlocoGraficoLinha from '../BlocoGraficoLinha'
import BlocoGraficoBarra from '../BlocoGraficoBarra'
import { FcComboChart } from "react-icons/fc";




export default function BlocoGraficoFaturamento() {

  const [visivel, setVisivel] = useState(true)

  const visibilidade = () => {
    return setVisivel(!visivel)
  }

  const [visivel2, setVisivel2] = useState(true)

  const visibilidade2 = () => {
    return setVisivel2(!visivel2)
  }


  return (
    <div className={styles.container}>
      <div className={styles.botaoClose} onClick={visibilidade2}>
        <FcComboChart className={styles.iconeClose} />
      </div>
  
      {visivel2 && (
        <div className={styles.containerTitulo}>
          <h1 className={styles.titulo}>Grafico do Faturamento</h1>
          <div className={styles.botao} onClick={visibilidade}>
            <FcComboChart className={styles.icone} />
          </div>
        </div>
      )}
  
      {visivel && (
        <>
          <BlocoGraficoLinha />
          <BlocoGraficoBarra />
        </>
      )}
    </div>
  );
      }