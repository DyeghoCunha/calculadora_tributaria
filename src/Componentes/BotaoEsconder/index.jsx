import styles from './BotaoEsconder.module.scss'

import React, { useState } from 'react'

export default function BotaoEsconder({children}) {

  const [visibilidade , setVisibilidade] = useState(true)

  const mostraConteudo = ()=>{
    setVisibilidade(!visibilidade)
  }

  return (
    <div className={styles.container}>
    <button className={styles.botao} onClick={mostraConteudo}></button>
    {visibilidade &&(
      {children}
    )}


    </div>
  )
}
