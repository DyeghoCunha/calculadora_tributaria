import styles from './BarraLateralGraficos.module.scss'
import { FcComboChart } from "react-icons/fc";
import { TbChartBar, TbChartLine } from "react-icons/tb";
import { TbChartDonut2 } from "react-icons/tb";
import { RiBarChart2Fill } from "react-icons/ri";
import { LuPanelBottomOpen, LuPanelTopOpen } from "react-icons/lu";
import React, { useContext, useEffect, useState } from 'react'
import { BotaoAsideContext } from '../../common/contex/BotoesAside';
import { RiFolderChartLine } from "react-icons/ri";
import { EmpresaContext } from '../../common/contex/Empresa';

export default function BarraLateralGraficos() {

  const { graficoBarra, setGraficoBarra, graficoLinha, setGraficoLinha, graficoCirculo, setGraficoCirculo,
    graficoFaturamento, setGraficoFaturamento, graficoRestituição, setGraficoRestituição, anosMinimizados, setAnosMinimizados, minimizaAba, setMinimizaAba } = useContext(BotaoAsideContext)
 const { dadosFormularioMensal , setDadosFormularioMensal} = useContext(EmpresaContext)

  const [abreBarra, setAbreBarra] = useState(true)

  const [clickBarra, setClickBarra] = useState(0)
  function visibilidadeBarra() {
    setGraficoBarra(!graficoBarra)

    if (graficoFaturamento) {
      setGraficoFaturamento(false)
    }
  }

  function visibilidadeLinha() {
    setGraficoLinha(!graficoLinha)
    if (graficoFaturamento) {
      setGraficoFaturamento(false)
    }
  }


  function visibilidadeCirculo() {
    setGraficoCirculo(!graficoCirculo)
    /* setGraficoFaturamento(!graficoFaturamento) */
  }

  function visibilidadeFaturamento() {
    setGraficoFaturamento(!graficoFaturamento)
    if (graficoBarra && graficoLinha) {
      setGraficoFaturamento(false)
      setGraficoBarra(false)
      setGraficoLinha(false)
    }
  }

  useEffect(() => {
    if (graficoBarra && graficoLinha) {
      setGraficoFaturamento(true)

    }
  }, [graficoBarra, graficoLinha])



  /*   useEffect(() => {
  
      console.log('Fat: ', graficoFaturamento)
      console.log('Linha: ', graficoLinha)
      console.log('Barra :', graficoBarra)
      console.log('------------------\n')
      console.log('AbreBarra: ', abreBarra)
    }, [graficoBarra, graficoLinha, graficoFaturamento, abreBarra]) */

  function close() {
    setAbreBarra(!abreBarra)
  }

  function minimiza() {
    setMinimizaAba(prev => !prev)
  }

/*   useEffect(() => {
    console.log("Minimiza Barra: ", minimizaAba)
  }, [minimizaAba])
 */

  function handleMinimizar(objeto) {
   
      const updatedDadosFormularioMensal = minimizaAba.map(item => {
        if (item.ano === objeto.ano) {
          if (item.visivel===false) {
            return { ...item, visivel: true }; // Altera a propriedade visivel para false
          }
        }
        return item;
      });
      setMinimizaAba(updatedDadosFormularioMensal);


  }
  

  

  return (
    <aside className={`${styles.container} `}>


      <button className={`
      ${styles.botaoNav} 
      ${styles.botaoTop} 
      ${!abreBarra ? styles.botaoTopAtivo : ''}
      ${!abreBarra ? styles.botaoTopHover : ''}
      
      `}
        disabled={abreBarra}
        onClick={close}>
        <LuPanelTopOpen className={styles.iconeNav} />
      </button>

      {abreBarra && (

        <div className={`${styles.containerIcones}  ${abreBarra ? styles.fadeOut1s : ''}`}
        >

          {graficoCirculo && (
            <div className={`${styles.containerGrupo} `} >
              <button className={`${styles.botao} ${styles.botaoCirculo}`}
                onClick={visibilidadeCirculo}><TbChartDonut2 className={styles.icone} /></button>
            </div>)}


          <section className={`${styles.containerGrupo} ${abreBarra ? styles.fadeOut2s : styles.fadeIn2s}`}>

            {graficoFaturamento && (

              <button className={`${styles.botao} ${styles.botaoFaturamento}`}
                onClick={visibilidadeFaturamento}><RiFolderChartLine className={styles.icone} /></button>
            )}
            {graficoLinha && (

              <button className={`${styles.botao} ${styles.botaoLinha}`}
                onClick={visibilidadeLinha} ><TbChartLine className={styles.icone} /></button>
            )}

            {graficoBarra && (
              <button className={`${styles.botao} ${styles.botaoBarra}`}
                onClick={visibilidadeBarra} ><TbChartBar className={styles.icone} /></button>

            )}

          </section>

          
            <section className={`${styles.containerGrupo} ${abreBarra ? styles.fadeOut2s : styles.fadeIn2s}`}>
              {minimizaAba.map((objeto, index) => (
               objeto.visivel===false &&(
                <button key={index} className={`${styles.botao} ${styles.botaoBarra} ${styles.botaoAno}`}
                  onClick={() => handleMinimizar(objeto)}
                >{objeto.ano}</button>
                )
              ))}

            </section>
        
        </div>
      )}

      <button
        className={`
      ${styles.botaoNav} 
      ${styles.botaoBotton} 
      ${!abreBarra ? styles.botaoBottonAtivo : ''}
      ${abreBarra ? styles.botaoBottonHover : ''}
     
      ${abreBarra ? styles.fadeOut3s : styles.fadeIn1s}
      `}
        disabled={!abreBarra}
        onClick={close}>
        <LuPanelBottomOpen className={styles.iconeNav} /></button>


    </aside>
  )
}
