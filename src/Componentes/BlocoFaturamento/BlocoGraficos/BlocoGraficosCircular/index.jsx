import React, { useContext, useState } from 'react'
import ContainerTrib from '../../../ContainerTrib'
import GraficoCircular from '../../../Graficos/GraficoCirculo'
import styles from './BlocoGraficoCircular.module.scss'
import { TbChartDonut2 } from "react-icons/tb";
import { CalculoContext } from '../../../../common/contex/Calculos';

export default function BlocoGraficoCircular({ nomeImposto, valorPago, valorCorreto }) {

  const [visibilidade, setVisibilidade] = useState(true)
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


  const mostraConteudo = () => {
    setVisibilidade(!visibilidade)
  }

  return (
    <div className={styles.container}>
      <div className={styles.botao} onClick={mostraConteudo}>
        <TbChartDonut2 className={styles.icone} />
      </div>
      {valorTotalIr > 0 && visibilidade && (
        <ContainerTrib>
          <div className={styles.containerGrafico}>
            <GraficoCircular nomeImposto={'IR'} valorPago={valorTotalIr} valorCorreto={valorTotalIrHospital} />
            <GraficoCircular nomeImposto={'CSLL'} valorPago={valorCsll} valorCorreto={valorCsllHospital} />
            {valorPisRestituir > 0 && (
              <GraficoCircular nomeImposto={'PIS'} valorPago={valorPis} valorCorreto={valorPis} />
            )}
            {valorCofinsRestituir > 0 && (
              <GraficoCircular nomeImposto={'COFINS'} valorPago={valorCofins} valorCorreto={valorCofins} />
            )}
          </div>
        </ContainerTrib>
      )}
    </div>
  );
}
