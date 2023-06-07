import styles from './BarraLateralGraficos.module.scss'
import { FcComboChart } from "react-icons/fc";
import { TbChartBar, TbChartLine } from "react-icons/tb";
import { TbChartDonut2 } from "react-icons/tb";
import { RiBarChart2Fill } from "react-icons/ri";
import { LuPanelBottomOpen, LuPanelTopOpen } from "react-icons/lu";
import React, { useContext, useEffect, useState } from 'react'
import { BotaoAsideContext } from '../../common/contex/BotoesAside';
import { RiFolderChartLine } from "react-icons/ri";

export default function BarraLateralGraficos() {

  const { graficoBarra, setGraficoBarra, graficoLinha, setGraficoLinha, graficoCirculo, setGraficoCirculo,
    graficoFaturamento, setGraficoFaturamento, graficoRestituição, setGraficoRestituição } = useContext(BotaoAsideContext)

  const [abreBarra, setAbreBarra] = useState(false)

  const [clickBarra, setClickBarra] = useState(0)


  function visibilidadeBarra() {
    setGraficoBarra(!graficoBarra)
  }
  function visibilidadeLinha() {
    setGraficoLinha(!graficoLinha)
   /*  setGraficoFaturamento(!graficoFaturamento) */
  }
  function visibilidadeCirculo() {
    setGraficoCirculo(!graficoCirculo)
   /*   setGraficoFaturamento(!graficoFaturamento) */
  }
  function visibilidadeFaturamento() {
    setGraficoFaturamento(!graficoFaturamento)
/*     setGraficoBarra(!graficoBarra)
    setGraficoLinha(!graficoLinha) */
  }


  return (
    <aside className={styles.container}>

      <button className={`${styles.botaoNav} ${styles.botaoTop}  ${abreBarra ? styles.botaoAtivo : ''} `}>
        <LuPanelTopOpen className={styles.iconeNav} /></button>

      <div className={styles.containerIcones}>

        {graficoCirculo &&( 
        <div className={styles.containerGrupo}>
          <button className={styles.botao} onClick={visibilidadeCirculo}><TbChartDonut2 className={styles.icone} /></button>
        </div> )}

      
        <section className={styles.containerGrupo}>
          {graficoFaturamento&&(
          <button className={styles.botao} onClick={visibilidadeFaturamento}><RiFolderChartLine className={styles.icone} /></button>
)}
          {graficoLinha && (
            <button className={styles.botao} onClick={visibilidadeLinha} ><TbChartLine className={styles.icone} /></button>
          )}

          {graficoBarra && (
            <button className={styles.botao} onClick={visibilidadeBarra} ><TbChartBar className={styles.icone} /></button>
          )}

        </section>

      </div>
      <button className={`${styles.botaoNav} ${styles.botaoBotton} /* ${abreBarra ? styles.botaoAtivo : ''} */`}>
        <LuPanelBottomOpen className={styles.iconeNav} /></button>
    </aside>
  )
}
