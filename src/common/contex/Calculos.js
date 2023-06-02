import React, { createContext, useContext, useEffect, useState } from "react";

const CalculoContext = createContext();

const CalculoProvider = ({ children }) => {

  const presIrComerico = 0.08;
  const presIrServiço = 0.32;
  const presIrHospital = 0.08;
  const adicionalIr = 0.1;

  const presCsllComercio = 0.12;
  const presCsllServico = 0.32;
  const presCsllHospital = 0.12;

  const alqIr = 0.15;
  const alqCsll = 0.09;
  const alqPis = 0.065;
  const alqCofins = 0.03;


  const [valorIr, setValorIr] = useState(0)
  const [valorAdIr, setValorAdIr] = useState(0)
  const [valorTotalIr, setValorTotalIr] = useState(0)
  const [valorIrHospital, setValorIrHospital] = useState(0)
  const [valorCsllHospital, setValorCsllHospital] = useState(0)
  const [valorAdIrHospital, setValorAdIrHospital] = useState(0)
  const [valorCsll, setValorCsll] = useState(0)
  const [valorPis, setValorPis] = useState(0)
  const [valorCofins, setValorCofins] = useState(0)

  const [fatCalculo, setFatCalculo] = useState(0);


  useEffect(() => {
    if (fatCalculo && fatCalculo.rbt12) {
      const faturamento = fatCalculo.rbt12;

   setValorPis(faturamento * alqPis)
   setValorCofins(faturamento * alqCofins)











    }

   
  }, [fatCalculo]);

if(valorPis){
 console.log('Pis:', valorPis)
}







  const value = {
    fatCalculo,
    setFatCalculo
  };

  return (
    <CalculoContext.Provider value={value}>
      {children}
    </CalculoContext.Provider>
  );
};

export { CalculoContext, CalculoProvider };
