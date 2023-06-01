import styles from './Container.module.scss'

import React from 'react'

export default function ContainerTrib({children,backgroundColor}) {
  return (
    <div className={styles.container} style={{backgroundColor}}>
      {children}
    </div>
  )
}
