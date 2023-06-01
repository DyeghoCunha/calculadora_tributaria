import GraficoBarra from '../../../Graficos/GraficoBarra'
import styles from './BlocoGraficoBarra.module.scss'
import React, { useState } from 'react'
import { TbChartBar} from "react-icons/tb";



export default function BlocoGraficoBarra() {

const [visivel, setVisivel] = useState(true)

const visibilidade = ()=>{
  return setVisivel(!visivel)
}



  return (
    <div className={styles.container}>
      <button className={styles.botao} onClick={visibilidade}><TbChartBar className={styles.icone}/></button>
      {visivel && (
      <GraficoBarra/>
      )}
    </div>
  )
}
