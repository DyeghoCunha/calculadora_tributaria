import React, { useContext, useState } from 'react';
import { DctfImportContext } from '../../common/contex/DctfImport';
import styles from './TabelaImpostoPresumido.module.scss';
import { FaturamentoInputContext } from '../../common/contex/FaturamentoInput';
import { CalculoContext } from '../../common/contex/Calculos';

export default function TabelaImpostoPresumido() {
  /* Variáveis de estado */
  const [Ir, setIr] = useState(0);
  const [Csll, setCsll] = useState(0);
  const [Pis, setPis] = useState(0);
  const [Cofins, setCofins] = useState(0);

  /* Contextos */
  const {
    valorEncontradoIr,
    valorEncontradoCsll,
    valorEncontradoPis,
    valorEncontradoCofins,
x
  } = useContext(DctfImportContext);

  const { faturamentoAnual } = useContext(FaturamentoInputContext);

  
  const { setFatCalculo } = useContext(CalculoContext);

  /* Atualizar estados com base nos valores do contexto */
  useState(() => {
    if (valorEncontradoPis > 0) {
      setIr(valorEncontradoIr.toFixed(2));
      setCsll(valorEncontradoCsll.toFixed(2));
      setPis(valorEncontradoPis.toFixed(2));
      setCofins(valorEncontradoCofins.toFixed(2));
    }

    if (faturamentoAnual.length > 0) {
      const { rbt12 } = faturamentoAnual[0];
      setFatCalculo(rbt12);
    }
  }, [valorEncontradoPis, faturamentoAnual]);

  return (
    <section className={styles.cardImpostosContainer}>
      <div className={styles.impostosPagosContainer}>
        <h1 className={styles.impostosPagosTitulo}>Impostos Pagos</h1>
        <div className={styles.impostosPagosBorder}>
          <p>IR     = R$ {Ir}</p>
          <p>Csll   = R$ {Csll}</p>
          <p>Pis    = R$ {Pis}</p>
          <p>Cofins = R$ {Cofins}</p>
        </div>
      </div>

      <div className={styles.impostosRestituirContainer}>
        <h1 className={styles.impostosRestituirTitulo}>Impostos Restituir</h1>
        <div className={styles.impostosRestituirBorder}>
          <p>IR     = R$ {Ir}</p>
          <p>Csll   = R$ {Csll}</p>
          <p>Pis    = R$ {Pis}</p>
          <p>Cofins = R$ {Cofins}</p>
        </div>
      </div>
    </section>
  );
}
