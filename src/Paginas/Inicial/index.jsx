import React from 'react'

import ResultadoDctf from '../../Componentes/ResultadoDctf'
import { InputDctf } from '../../Componentes/InputDctf'
import Banner from '../../Componentes/Banner'
import InputFaturamento from '../../Componentes/InputFaturamento'
import InputFaturamentoMensal from '../../Componentes/InputFaturamentoMensal'

export default function PaginaInicial() {
  return (
    <>
     {/* <Banner/> */}
      <InputFaturamento/>
      <InputFaturamentoMensal/>
      {/* <InputDctf /> */}
      <ResultadoDctf/>
    </>
  )
}
