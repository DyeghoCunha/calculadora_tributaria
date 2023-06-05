import React, { createContext, useContext, useEffect, useState } from "react";
import { CalculoContext } from "./Calculos";

const EmpresaContext = createContext()


const EmpresaProvider = ({ children }) => {



  const [empresa, setEmpresa] = useState({});

  const[arreyEmpresa, setArreyEmpresa] = useState([])
  


useEffect(() => {
  if (Object.keys(empresa).length !== 0) {
    setArreyEmpresa(prevEmpresa => {
      return [...prevEmpresa, empresa];
    });
  }
}, [empresa]);

console.log(arreyEmpresa);


  const value = {

    setEmpresa
  }
  
  return (
    <EmpresaContext.Provider value={value}>
      {children}
    </EmpresaContext.Provider>
  )
}

export { EmpresaContext, EmpresaProvider }