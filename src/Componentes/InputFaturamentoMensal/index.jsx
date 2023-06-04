import React, { useContext, useState } from 'react';
import InputFaturamentoGenerico from './InputFaturamentoGenerico';
import styles from './InputFaturamentoMensal.module.scss';

import faturamentoDb from '../../assets/json/dados.json';
import { FaturamentoInputContext } from '../../common/contex/FaturamentoInput';
import { MdOutlineCleaningServices } from "react-icons/md";


export default function InputFaturamentoMensal() {
  const [faturamentoDbValues, setFaturamentoDbValues] = useState(faturamentoDb);
  const [selectedYear, setSelectedYear] = useState('');
  const { faturamentoMensal, setFaturamentoMensal } = useContext(FaturamentoInputContext);





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
      mes:obj.mês,
      ano: selectedYear,
    }));
    setFaturamentoMensal(capturedValues);


   //* console.log('captured',capturedValues); // Console.log para visualizar a informação armazenada

    
  
  };

const limpaFormulario = ()=>{
    setSelectedYear('');
    setFaturamentoDbValues(faturamentoDb);
}

  const currentYear = new Date().getFullYear();
  const retroativo = currentYear - 5;
  let erro = (
    <p className={styles.erroAno}>
      O ano deve ser <span className={styles.menor}>menor</span> que {currentYear}  <span className={styles.maior}>maior</span> que {retroativo}
    </p>
  );

  const isButtonDisabled =
    selectedYear < retroativo ||
    selectedYear === '' ||
    selectedYear > currentYear;


  let isErroAno = selectedYear < retroativo || selectedYear > currentYear;

  return (

    <div className={styles.container}>
      <h1 className={styles.titulo}>Faturamento Mensal</h1>
      <div className={styles.mesesContainer}>

        <InputFaturamentoGenerico
          faturamentoDb={faturamentoDbValues}
          
          handleFaturamentoInputChange={handleFaturamentoInputChange}
        />

        {/* Tentando arrumar o Erro de aparecer o Ano */}
        {isErroAno && selectedYear !== '' && (
          <div className={`${styles.erroContainer} ${isErroAno ? styles.fadeIn : '' || !isErroAno ? styles.fadeOut : ''}`}>
            {erro}
          </div>

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

          <button className={styles.limpaFormulario} onClick={limpaFormulario}><MdOutlineCleaningServices className={styles.iconeLimpa}/></button>
        </div>

      </div>
    </div>

  );
}
