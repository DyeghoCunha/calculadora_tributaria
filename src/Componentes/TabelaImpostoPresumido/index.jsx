import React, { useContext, useEffect, useState } from 'react';
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
  const [IrRestituir, setIrRestituir] = useState(0);
  const [CsllRestituir, setCsllRestituir] = useState(0);
  const [PisRestituir, setPisRestituir] = useState(0);
  const [CofinsRestituir, setCofinsRestituir] = useState(0);
  /* Contextos */
  const {
    valorEncontradoIr,
    valorEncontradoCsll,
    valorEncontradoPis,
    valorEncontradoCofins,
x
  } = useContext(DctfImportContext);

  const {
    valorTotalIr,
    valorCsll,
    valorTotalIrHospital,
    valorPis,
    valorCofins,
    valorIrRestituir,
    valorCsllRestituir,
    valorPisRestituir,
    valorCofinsRestituir
   } = useContext(CalculoContext)

  const { faturamentoAnual } = useContext(FaturamentoInputContext);
  const { setFatCalculo } = useContext(CalculoContext);

//TODO ----  Atualizar estados com base nos valores do contexto */



useEffect(() => {
  if (valorTotalIr > 0) {
    const irRestituir = Number(valorIrRestituir).toFixed(2);
    const csllRestituir = Number(valorCsllRestituir).toFixed(2);

    setIr(valorTotalIr.toFixed(2));
    setCsll(valorCsll.toFixed(2));
    setPis(valorPis.toFixed(2));
    setCofins(valorCofins.toFixed(2));
    setIrRestituir(irRestituir);
    setCsllRestituir(csllRestituir);
    setCofinsRestituir(valorCofinsRestituir);
    setPisRestituir(valorPisRestituir);
  }
}, [valorTotalIr, valorCsll, valorPis, valorCofins, valorIrRestituir, valorCsllRestituir, valorPisRestituir, valorCofinsRestituir]);




  useEffect(() => {
    //!Definir separado para quando o faturamento vier de DCFT ou outros
    if (valorEncontradoPis > 0) {
      setIr(valorEncontradoIr.toFixed(2));
      setCsll(valorEncontradoCsll.toFixed(2));
      setPis(valorEncontradoPis.toFixed(2));
      setCofins(valorEncontradoCofins.toFixed(2));
    }
  }, [valorEncontradoPis]);


  useEffect(()=>{
     if (faturamentoAnual.length > 0) {
      const { rbt12 } = faturamentoAnual[0];
      setFatCalculo(rbt12);
    }
  },[faturamentoAnual])

  return (
    <section className={styles.cardImpostosContainer}>
      <div className={styles.impostosPagosContainer}>
        <h1 className={styles.impostosPagosTitulo}>Impostos Pagos</h1>
        <div className={styles.impostosPagosBorder}>
          <p className={styles.formatacao}>IR      <span>R$ {Ir} </span></p>
          <p className={styles.formatacao}>Csll    <span>R$ {Csll}</span></p>
          <p className={styles.formatacao}>Pis     <span>R$ {Pis}</span></p>
          <p className={styles.formatacao}>Cofins  <span>R$ {Cofins}</span></p>
        </div>
      </div>

      <div className={styles.impostosRestituirContainer}>
        <h1 className={styles.impostosRestituirTitulo}>Impostos Restituir</h1>
        <div className={styles.impostosRestituirBorder}>
          <p className={styles.formatacao}>IR      <span>R$ {IrRestituir}</span></p>
          <p className={styles.formatacao}>Csll    <span>R$ {CsllRestituir}</span></p>
          <p className={styles.formatacao}>Pis     <span>R$ {PisRestituir}</span></p>
          <p className={styles.formatacao}>Cofins  <span>R$ {CofinsRestituir}</span></p>
        </div>
      </div>
    </section>
  );
}
