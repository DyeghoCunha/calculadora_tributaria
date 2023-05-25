import styles from './InputFaturamento.module.scss'
import React from 'react'

export default function InputFaturamento() {


  function teste(event){
    let texto = event.target.value;
    console.log(texto)
  }

  return (
  <div className={styles.container}>
    <label htmlFor="filteText" className={styles.label}>Faturamento Anual</label>
    <input type="number" id="filteText" onChange={teste}  
    className={styles.input}/>
  </div>
  )
}
