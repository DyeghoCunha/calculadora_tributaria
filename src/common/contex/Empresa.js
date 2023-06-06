import React, { createContext, useContext, useEffect, useState } from "react";
import { CalculoContext } from "./Calculos";
import { FaturamentoInputContext } from "./FaturamentoInput";

const EmpresaContext = createContext()


const EmpresaProvider = ({ children }) => {



  const [empresa, setEmpresa] = useState({});

  const [arreyEmpresa, setArreyEmpresa] = useState([])

  const [anoSelecionado, setAnoSelecionado] = useState('')

  const [dadosFormularioMensal, setDadosFormularioMensal] = useState([]);

  //!Arrumar o Ano e finalizar a empresa
  
useEffect(()=>{
  console.log(dadosFormularioMensal)
},[dadosFormularioMensal])
  

  const value = {
anoSelecionado,
setAnoSelecionado,
dadosFormularioMensal,
setDadosFormularioMensal

  }

  return (
    <EmpresaContext.Provider value={value}>
      {children}
    </EmpresaContext.Provider>
  )
}

export { EmpresaContext, EmpresaProvider }