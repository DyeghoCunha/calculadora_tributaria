import React, { useState } from 'react';
import InputFaturamentoGenerico from './InputFaturamentoGenerico';
import styles from './InputFaturamentoMensal.module.scss';

import faturamentoDb from '../../assets/json/dados.json';

export default function InputFaturamentoMensal() {
  const [faturamentoDbValues, setFaturamentoDbValues] = useState(faturamentoDb);
  const [capturedData, setCapturedData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  const handleFaturamentoInputChange = (id, value) => {
    setFaturamentoDbValues((prevValues) => ({
      ...prevValues,
      faturamentoMensal: prevValues.faturamentoMensal.map((obj) =>
        obj.id === id ? { ...obj, faturamentoMes: Number(value) } : obj
      ),
    }));
  };

  const handleCaptureData = () => {
    const capturedValues = faturamentoDbValues.faturamentoMensal.map((obj) => ({
      id: obj.id,
      valor: obj.faturamentoMes,
      ano: selectedYear,
    }));
    setCapturedData(capturedValues);
    console.log(capturedValues); // Console.log para visualizar a informação armazenada
  };

  const currentYear = new Date().getFullYear();
  const retroativo = currentYear - 5;
  let erro = `O ano é maior do que ${currentYear} ou menor que ${retroativo}`;
  const isButtonDisabled =
    selectedYear < retroativo ||
    selectedYear === '' ||
    selectedYear > currentYear;


    const isErroAno = selectedYear < retroativo || selectedYear > currentYear;
  return (

    <div className={styles.container}>
      <h1 className={styles.titulo}>Faturamento Mensal</h1>
      <div className={styles.mesesContainer}>
        <InputFaturamentoGenerico
          faturamentoDb={faturamentoDbValues}
          handleFaturamentoInputChange={handleFaturamentoInputChange}
        />



        {/* Tentando arrumar o Erro de aparecer o Ano */}
         {isErroAno && (
        <p className={styles.erroAno} style={{ display: 'none' }}>
          {erro}
        </p>
      )}
        <div className={styles.botaoAnoContainer}>
          <button onClick={handleCaptureData} disabled={isButtonDisabled} className={styles.botao}>
            Enviar</button>
          <input
            type="text"
            placeholder="Digite o ano"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className={styles.inputAno}
          />
        </div>

      </div>
    </div>

  );
}
