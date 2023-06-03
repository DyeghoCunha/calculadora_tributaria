import React, { createContext, useContext, useEffect, useState } from "react";

const CalculoContext = createContext();

const CalculoProvider = ({ children }) => {
  CalculoProvider.displayName = "Calculo";

  const presIrComerico = 0.08;
  const presIrServico = 0.32;
  const presIrHospital = 0.08;
  const adicionalIr = 0.1;

  const presCsllComercio = 0.12;
  const presCsllServico = 0.32;
  const presCsllHospital = 0.12;

  const alqIr = 0.15;
  const alqCsll = 0.09;
  const alqPis = 0.065;
  const alqCofins = 0.03;

  const [qtdMeses, setQtdMeses] = useState(0)
  const [faturamento, setFaturamento] = useState(800000);
  const [ramo, setRamo] = useState('Comercio')
  const [valorIr, setValorIr] = useState(0);
  const [valorAdIr, setValorAdIr] = useState(0);
  const [bcNormalIr, setBcNormalIr] = useState(0);
  const [bcNormalCsll, setBcNormalCsll] = useState(0);
  const [bcHospitalCsll, setBcHospitalCsll] = useState(0);
  const [bcHospitalIr, setBcHospitalIr] = useState(0);
  const [valorTotalIr, setValorTotalIr] = useState(0);
  const [valorIrHospital, setValorIrHospital] = useState(0);
  const [valorCsllHospital, setValorCsllHospital] = useState(0);
  const [valorAdIrHospital, setValorAdIrHospital] = useState(0);
  const [valorCsll, setValorCsll] = useState(0);
  const [valorPis, setValorPis] = useState(0);
  const [valorCofins, setValorCofins] = useState(0);

  const [fatCalculo, setFatCalculo] = useState(0);

  useEffect(() => {
    if (fatCalculo && fatCalculo.rbt12) {
      setFaturamento(fatCalculo.rbt12);
    }
  }, [fatCalculo]);

  useEffect(() => {
    if (faturamento) {

      setValorPis(faturamento * alqPis);
      setValorCofins(faturamento * alqCofins);

      if (ramo) {
        if (ramo == "Comercio") {
          setBcNormalIr(faturamento * presIrComerico);
          setBcNormalCsll(faturamento * presCsllComercio);
        } else if (ramo == "Serviço") {
          setBcNormalIr(faturamento * presIrServico);
          setBcNormalCsll(faturamento * presCsllServico);
        } else if (ramo == "Hospital") {
          setBcHospitalIr(faturamento * presIrHospital);
          setBcHospitalCsll(faturamento * presCsllHospital);
        } else {
          console.log(
            "Como não foi informado um Ramo, a aplicação usou o padrão Comércio, ou apresentou erro"
          );
        }
      }



    }
  }, [faturamento]);

  //! O IR ADICIONAL TEM QUE SER LEVADO EM CONTA COM OS MESES EM QUE ESTAMOS CALCULANDO, DEVE TER UMA LENGTH 

useEffect(() => {

  const bcExcedente = 20000 * qtdMeses;

  if (qtdMeses > 0) {
    console.log('Bc Excedente:', bcExcedente);
  }
   if (valorAdIr) {
    setValorTotalIr(valorIr + valorAdIr);
  } else {
    setValorTotalIr(valorIr);
  }

  if (bcNormalIr) {
    setValorIr(bcNormalIr * alqIr);

    if (bcNormalIr > bcExcedente) {
      const addBc = (bcNormalIr - bcExcedente) * adicionalIr
      setValorAdIr(addBc);
    }
  }

 
}, [bcNormalIr, qtdMeses]);



  /* 
  ! useEffect(()=>{
  !setRamo('Serviço')
  !},[ramo]) 
   */





  if (valorPis) {

    console.log("------------Faturamento---------------");
    console.log('Faturamento: ',faturamento)
    console.log("---------------------------");
    console.log('BcIR: ', bcNormalIr)
    console.log('Valor IRn: ', valorIr)
    console.log('Adicional IRn: ', valorAdIr)
    console.log('IRn Total: ', valorTotalIr)

    console.log("---------------------------");
    console.log("Pis:", valorPis);
    console.log("Cofins:", valorCofins);
    console.log("BcIRn: ", bcNormalIr);
    console.log("BcCslln: ", bcNormalCsll);
    console.log("BcIRhpt: ", bcHospitalIr);
    console.log("BcCsllhpt: ", bcHospitalCsll);
    console.log("----------------------------");
  
    console.log("QtdMeses: ", qtdMeses)
  }

  const value = {
    fatCalculo,
    setFatCalculo,
    setQtdMeses
  };

  return (
    <CalculoContext.Provider value={value}>
      {children}
    </CalculoContext.Provider>
  );
};

export { CalculoContext, CalculoProvider };
