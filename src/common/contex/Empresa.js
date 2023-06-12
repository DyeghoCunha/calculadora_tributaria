import React, { createContext, useContext, useEffect, useState } from "react";
import { CalculoContext } from "./Calculos";
import { FaturamentoInputContext } from "./FaturamentoInput";

const EmpresaContext = createContext()


const EmpresaProvider = ({ children }) => {







  const [anoSelecionado, setAnoSelecionado] = useState('')
  const [dadosFormularioMensal, setDadosFormularioMensal] = useState([]);
  const [anoSide, setAnoSide] = useState([]);


  const[simplesNacional, setSimplesNacional]= useState(false)
  const[lucroPresumido, setLucroPresumido]= useState(false)

  //!Arrumar o Ano e finalizar a empresa
  


  
useEffect(()=>{

  if(dadosFormularioMensal.length>0){
  console.log('Empresa: ',dadosFormularioMensal)}
},[dadosFormularioMensal])
  
  useEffect(() => {
  if (dadosFormularioMensal) {
    const anos = dadosFormularioMensal.map((objeto) => objeto.ano);
    setAnoSide(anos);
  }
}, [dadosFormularioMensal]);






  const value = {
anoSelecionado,
setAnoSelecionado,
dadosFormularioMensal,
setDadosFormularioMensal,anoSide,



  }

  return (
    <EmpresaContext.Provider value={value}>
      {children}
    </EmpresaContext.Provider>
  )
}

export { EmpresaContext, EmpresaProvider }