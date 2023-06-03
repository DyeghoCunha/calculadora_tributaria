import React, { createContext, useContext, useEffect, useState } from 'react';
import { CalculoContext } from './Calculos';

const FaturamentoInputContext = createContext();

const FaturamentoInputProvider = ({ children }) => {
  const [faturamentoMensal, setFaturamentoMensal] = useState([]);
  const [faturamentoAnual, setFaturamentoAnual] = useState(0);
  const { setFatCalculo, setQtdMeses } = useContext(CalculoContext);

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
        rbt12: somaFaturamentoMensal
      });

      setFatCalculo(faturamentoAnual => ({ ...faturamentoAnual, ...{ rbt12: somaFaturamentoMensal } }));
    }
  }, [faturamentoMensal, setFatCalculo, setQtdMeses]);

  const value = {
    faturamentoMensal,
    setFaturamentoMensal,
    faturamentoAnual
  };

  return (
    <FaturamentoInputContext.Provider value={value}>
      {children}
    </FaturamentoInputContext.Provider>
  );
};

export { FaturamentoInputContext, FaturamentoInputProvider };
