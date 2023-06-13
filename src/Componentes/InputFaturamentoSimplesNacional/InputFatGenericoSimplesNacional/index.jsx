import { EmpresaContext } from '../../../common/contex/Empresa';
import styles from './InputFatGenericoSimplesNacional.module.scss';
import React, { useContext, useEffect, useState } from 'react';


const InputFatGenericoSimplesNacional = ({ empresa, handleFaturamentoInputChange }) => {

  const { mesAtual, mesAnterior, anoAtual, meses} = useContext(EmpresaContext)

  return (
    <div className={styles.containerPrincipal}>
      {empresa.map(obj => (
        <div className={styles.container} key={obj.id}>
          <div className={styles.mesContainer}>
            <label className={styles.label} htmlFor={`faturamentoMes_${obj.id}`}>
              {obj.mês}
            </label>
            <input
              className={styles.input}
              type="text"
              id={`faturamentoMes_${obj.id}`}
              value={obj.faturamentoMes}
              onChange={e => handleFaturamentoInputChange(obj.id, e.target.value)}
             
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputFatGenericoSimplesNacional;
