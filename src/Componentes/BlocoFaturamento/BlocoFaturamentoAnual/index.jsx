import GraficoCircular from '../../Graficos/GraficoCirculo'
import InputFaturamento from '../../InputFaturamento'
import TabelaImpostoPresumido from '../../TabelaImpostoPresumido'
import styles from './BlocoFaturamentoAnual.module.scss'
import React from 'react'










export default function BlocoFaturamentoAnual() {
  return (
  <div className={styles.containerPagina}>
    
  <InputFaturamento/>

  <TabelaImpostoPresumido/>

  <div className={styles.graficoContainer}>
   <GraficoCircular/> 
   <GraficoCircular/> 
   <GraficoCircular/>
   <GraficoCircular/>
   </div>
  
  </div>
  )
}
