import { CalculoContext } from '../../common/contex/Calculos.js'
import styles from './MostraFaturamento.module.scss'
import React, { useContext, useEffect, useState } from 'react'

export default function MostraFaturamento({inputValor}) {

  const { faturamento, faturamentoSomado } = useContext(CalculoContext)
  const [valor, setValor] = useState(0)



  useEffect(() => {
    const atualizaFaturamento = Number(faturamentoSomado).toFixed(2)
    setValor(atualizaFaturamento)
  }, [faturamento])


  return (
    <>
    {valor > 0 && (
    <div className={styles.container}>

      <h1 className={styles.titulo}>Faturamento</h1>
      <p className={styles.valor}>R$ {valor}</p>

    </div>)}
    </>
  )
}
