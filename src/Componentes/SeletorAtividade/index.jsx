import { EmpresaContext } from '../../common/contex/Empresa'
import styles from './SeletorAtividade.module.scss'


import React, { useContext } from 'react'

export default function SeletorAtividade() {

  const { setAtividadeEmpresa } = useContext(EmpresaContext)

  const handleAtividade = (atividade) => {
    setAtividadeEmpresa(atividade);

  };

  return (
    <section className={styles.container}>

      <h1 className={styles.titulo}>Escolha o Ramo de sua Atividade</h1>

      <div className={`${styles.ramo} ${styles.comercio}`}>
        <h1 className={styles.tituloRamo} onClick={() => handleAtividade("comercio")}>
          Comércio
        </h1>
      </div>
      <div className={`${styles.ramo} ${styles.servico}`}>
        <h1 className={styles.tituloRamo} onClick={() => handleAtividade("servico")}>
          Serviço
        </h1>
      </div>
      <div className={`${styles.ramo} ${styles.industria}`}>
        <h1 className={styles.tituloRamo} onClick={() => handleAtividade("industria")}>
          Indústria
        </h1>
      </div>


    </section>
  )
}
