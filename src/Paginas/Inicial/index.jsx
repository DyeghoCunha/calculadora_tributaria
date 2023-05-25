import React from 'react'

import ResultadoDctf from '../../Componentes/ResultadoDctf'
import { InputDctf } from '../../Componentes/InputDctf'
import Banner from '../../Componentes/Banner'
import InputFaturamento from '../../Componentes/InputFaturamento'

export default function PaginaInicial() {
  return (
    <>
     {/* <Banner/> */}
      <InputFaturamento/>
      {/* <InputDctf /> */}
      <ResultadoDctf/>
    </>
  )
}
