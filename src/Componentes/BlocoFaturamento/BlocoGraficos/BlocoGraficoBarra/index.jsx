import GraficoBarra from '../../../Graficos/GraficoBarra'
import styles from './BlocoGraficoBarra.module.scss'
import React, { useContext, useState } from 'react'
import { TbChartBar } from "react-icons/tb";
import { RiBarChart2Fill } from "react-icons/ri";

import { BotaoAsideContext } from '../../../../common/contex/BotoesAside'

export default function BlocoGraficoBarra() {

  const [visivel, setVisivel] = useState(true)

  const { graficoBarra, setGraficoBarra } = useContext(BotaoAsideContext)

  const visibilidade = () => {
    setGraficoBarra(!graficoBarra)
  }

 

  return (
    <>
      {!graficoBarra && (
        <div className={styles.container}>
          <button className={styles.botao} onClick={visibilidade}><TbChartBar className={styles.icone} /></button>
          <GraficoBarra />
        </div>)}
    </>
  )
}
