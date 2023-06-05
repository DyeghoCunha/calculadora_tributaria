import React from 'react'
import BlocoFaturamentoMensal from '../../Componentes/BlocoFaturamento/BlocoFaturamentoMensal'
import { FaturamentoInputProvider } from '../../common/contex/FaturamentoInput'
import { CalculoProvider } from '../../common/contex/Calculos'


export default function PaginaFaturamentoMensal() {
  return (
    <CalculoProvider>
      <FaturamentoInputProvider>
       
          <BlocoFaturamentoMensal />
      
      </FaturamentoInputProvider>
    </CalculoProvider>
  )
}
