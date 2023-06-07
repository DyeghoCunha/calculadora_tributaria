import React, { useContext, useState } from 'react'
import ContainerTrib from '../../../ContainerTrib'
import GraficoCircular from '../../../Graficos/GraficoCirculo'
import styles from './BlocoGraficoCircular.module.scss'
import { TbChartDonut2 } from "react-icons/tb";
import { CalculoContext } from '../../../../common/contex/Calculos';
import { FaturamentoInputContext } from '../../../../common/contex/FaturamentoInput';
import { BotaoAsideContext } from '../../../../common/contex/BotoesAside';

export default function BlocoGraficoCircular({ nomeImposto, valorPago, valorCorreto }) {

  const [visibilidade, setVisibilidade] = useState(true)
  const { anoSelecionado } = useContext(FaturamentoInputContext)

  let mostra = 0;



  const {
    valorTotalIr,
    valorCsll,
    valorTotalIrHospital,
    valorCsllHospital,
    valorPis,
    valorCofins,
    valorPisRestituir,
    valorCofinsRestituir } = useContext(CalculoContext)
  const { graficoCirculo, setGraficoCirculo } = useContext(BotaoAsideContext)

  const mostraConteudo = () => {
    setGraficoCirculo(!graficoCirculo)
  }


  return (

    <>
      {valorTotalIr > 0 && (

        <>
        {!graficoCirculo &&(
        <div className={styles.container}>
          <button className={styles.botao} onClick={mostraConteudo}>
            <TbChartDonut2 className={styles.icone} />
          </button>
          <ContainerTrib>
            <div className={styles.containerGrafico}>

              <h1 className={styles.titulo}>{anoSelecionado}</h1>

              <div className={styles.containerCirculo}>
                <GraficoCircular nomeImposto={'IR'} valorPago={valorTotalIr} valorCorreto={valorTotalIrHospital} />
                <GraficoCircular nomeImposto={'CSLL'} valorPago={valorCsll} valorCorreto={valorCsllHospital} />

                {valorPisRestituir > 0 && (<GraficoCircular nomeImposto={'PIS'} valorPago={valorPis} valorCorreto={valorPis} />)}
                {valorCofinsRestituir > 0 && (<GraficoCircular nomeImposto={'COFINS'} valorPago={valorCofins} valorCorreto={valorCofins} />)}

              </div>
            </div>
          </ContainerTrib>
        </div >
)}
     </> )}
    </>
  );
}
