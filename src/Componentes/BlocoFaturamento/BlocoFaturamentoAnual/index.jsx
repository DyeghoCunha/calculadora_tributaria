import GraficoCircular from '../../Graficos/GraficoCirculo'
import InputFaturamento from '../../InputFaturamento'
import ResultadoDctf from '../../ResultadoDctf'
import styles from './BlocoFaturamentoAnual.module.scss'
import React from 'react'










export default function BlocoFaturamentoAnual() {
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
