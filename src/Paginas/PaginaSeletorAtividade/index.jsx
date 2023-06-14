import BlocoSimplesNacional from '../../Componentes/BlocoSimplesNacional'
import SeletorAtividade from '../../Componentes/SeletorAtividade'
import styles from './PaginaSeletorAtividade.module.scss'


import React from 'react'

export default function PaginaSeletorAtividade() {
  return (
    <section className={styles.container}>
    <SeletorAtividade/> 
    </section>

  )
}
