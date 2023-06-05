import React, { createContext, useContext, useEffect, useState } from 'react';
import { CalculoContext } from './Calculos';


const FaturamentoInputContext = createContext();

const FaturamentoInputProvider = ({ children }) => {
  const [faturamentoMensal, setFaturamentoMensal] = useState([]);
  const [faturamentoAnual, setFaturamentoAnual] = useState(0);
  const { setFatCalculo, setQtdMeses, setFaturamentoMesAno } = useContext(CalculoContext);
  const [faturamentoMensalComAno, setFaturamentoMensalComAno] = useState({})
  const [anoSelecionado, setAnoSelecionado] = useState('');
  
  const [anoAtual, setAnoAtual] = useState(0)
  const [anoRetroativo, setAnoRetroativo] = useState(0)

  

 useEffect(() => {
    const currentYear = new Date().getFullYear();
    setAnoAtual(currentYear);
    setAnoRetroativo(currentYear - 5);
  }, []);



  useEffect(() => {

    if (faturamentoMensal.length > 0) {
      const faturamentoPositivo = faturamentoMensal.filter(item => item.valor > 0);
      const somaFaturamentoMensal = faturamentoPositivo.reduce((total, item) => {
        const { valor } = item;
        return total + valor;
      }, 0);
    
      setQtdMeses(faturamentoPositivo.length);

      setFaturamentoAnual({
        ano: faturamentoMensal[0].ano,
        rbt12: somaFaturamentoMensal,
        
      });

      setFatCalculo(faturamentoAnual => ({ ...faturamentoAnual, ...{ rbt12: somaFaturamentoMensal } }));
      
    }
  }, [faturamentoMensal, setFatCalculo, setQtdMeses]);

 useEffect(()=>{

  setFaturamentoMesAno(faturamentoAnual)

 },[faturamentoAnual])

  const value = {
    faturamentoMensal,
    setFaturamentoMensal,
    faturamentoAnual,
    setFaturamentoMensalComAno,
    faturamentoMensalComAno, setAnoAtual, anoAtual, setAnoRetroativo, anoRetroativo,
    anoSelecionado,setAnoSelecionado
  };

  return (
    <FaturamentoInputContext.Provider value={value}>
      {children}
    </FaturamentoInputContext.Provider>
  );
};

export { FaturamentoInputContext, FaturamentoInputProvider };
