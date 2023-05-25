import React from 'react'
import styles from './InputFaturamentoGenerico.module.scss'

export default function InputFaturamentoGenerico({ mes }) {
  const handleChange = (event) => {
    const valor = event.target.value;

  };

  return (
    <div className={styles.container}>
      <label htmlFor="filterText" className={styles.label}>
        {mes}
      </label>
      <input
        type="number"
        id="filterText"
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}
