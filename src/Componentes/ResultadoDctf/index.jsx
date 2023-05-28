
import React, { useContext, useState } from 'react';
import { DctfImportContext } from '../../common/contex/DctfImport';
import styles from './ResultadoDctf.module.scss';


export default function ResultadoDctf() {
  const {
    valorEncontradoIr,
    valorEncontradoCsll,
    valorEncontradoPis,
    valorEncontradoCofins, faturamentoCalculadoPis,
    faturamentoCalculadoCofins, faturamentoEstimadoMensal, faturamentoEstimadoCsll
  } = useContext(DctfImportContext);

  let Ir = 0;
  let Csll = 0;
  let Pis = 0;
  let Cofins = 0;
  let FaturamentoPis = 0;
  let FaturamentoCofins = 0;
  let Faturamento = 0;
  let FaturamentoCsll = 0;



  if (valorEncontradoPis > 0) {
    Ir = valorEncontradoIr.toFixed(2);
    Csll = valorEncontradoCsll.toFixed(2);
    Pis = valorEncontradoPis.toFixed(2);
    Cofins = valorEncontradoCofins.toFixed(2);
    FaturamentoPis = faturamentoCalculadoPis.toFixed(2);
    FaturamentoCofins = faturamentoCalculadoCofins.toFixed(2);
    Faturamento = faturamentoEstimadoMensal.toFixed(2);
    FaturamentoCsll = faturamentoEstimadoCsll.toFixed(2);
  }



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