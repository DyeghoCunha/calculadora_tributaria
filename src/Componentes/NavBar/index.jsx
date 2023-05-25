import React from 'react'
import styles from './NavBar.module.scss'
import LinkNav from './LinkNav'


export default function NavBar() {
  return (
       <nav className={styles.navbarContainer}>
        <h1 className={styles.logoMarca}>LogoMarca</h1>
        <div className={styles.links}>
          <LinkNav  titulo={'Pagina Inicial'}/>
          <LinkNav  titulo={'Calculo Tributario'}/>
          <h1>Hamburger</h1>
        </div>
       
       </nav>
  )
}
