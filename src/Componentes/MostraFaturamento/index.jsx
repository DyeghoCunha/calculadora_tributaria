import { CalculoContext } from '../../common/contex/Calculos.js'
import styles from './MostraFaturamento.module.scss'
import React, { useContext, useEffect, useState } from 'react'

export default function MostraFaturamento({inputValor=0}) {

  


  return (
    <>
    {inputValor > 0 && (
    <div className={styles.container}>

      <h1 className={styles.titulo}>Faturamento</h1>
      <p className={styles.valor}>R$ {inputValor}</p>

    </div>)}
    </>
  )
}
