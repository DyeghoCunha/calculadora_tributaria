import React from 'react'
import { Link } from 'react-router-dom';
import styles from './LinkNav.module.scss'


export default function LinkNav({titulo}) {
  return (
    <Link to={'/'} className={styles.linknavContainer}>
      <h2 className={styles.titulo}>{titulo}</h2>
    </Link>
  )
}
