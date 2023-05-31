import GraficoCircular from '../../Componentes/Graficos/GraficoCirculo'
import InputFaturamento from '../../Componentes/InputFaturamento'
import ResultadoDctf from '../../Componentes/ResultadoDctf'
import styles from './PaginaFaturamentoAnual.module.scss'
import React from 'react'

export default function PaginaFaturamentoAnual() {
  return (
  <div className={styles.containerPagina}>
    
  <InputFaturamento/>

  <ResultadoDctf/>

  <div className={styles.graficoContainer}>
   <GraficoCircular/> 
   <GraficoCircular/> 
   <GraficoCircular/>
   <GraficoCircular/>
   </div>
  
  </div>
  )
}
