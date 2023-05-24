import React from 'react'
import fotoBanner from '../../assets/images/BannerTaiani.png'
import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <img className={styles.banner} src={fotoBanner} alt="Banner com o Logo de Taiani Trindade, Direito da Saude" />
  )
}
