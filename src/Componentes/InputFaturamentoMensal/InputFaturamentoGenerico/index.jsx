import styles from './InputFaturamentoGenerico.module.scss';
import React, { useContext } from 'react';


const InputFaturamentoGenerico = ({ faturamentoDb, handleFaturamentoInputChange }) => {
  return (
    <div className={styles.containerPrincipal}>
      {faturamentoDb.faturamentoMensal.map(obj => (
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

export default InputFaturamentoGenerico;
