
import GraficoLinha from '../../../Graficos/GraficoLinha'
import styles from './BlocoGraficoLinha.module.scss'
import React, { useState } from 'react'
import { TbChartLine } from "react-icons/tb";

export default function BlocoGraficoLinha() {

  const [visivel, setVisivel] = useState(true)

  const visibilidade = () => {
    return setVisivel(!visivel)
  }



  return (
    <div className={styles.container}>
      <div onClick={visibilidade} className={styles.botao}><TbChartLine className={styles.icone}/></div>
      {visivel && ( 
      <GraficoLinha />
      )}
    </div>
  )
}
