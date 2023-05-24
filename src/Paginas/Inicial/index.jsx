import React from 'react'

import ResultadoDctf from '../../Componentes/ResultadoDctf'
import { InputDctf } from '../../Componentes/InputDctf'
import Banner from '../../Componentes/Banner'

export default function PaginaInicial() {
  return (
    <>
     <Banner/>
      <InputDctf />
      <ResultadoDctf/>
    </>
  )
}
