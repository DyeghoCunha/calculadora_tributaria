import React, { createContext, useContext, useEffect, useState } from 'react';
import { CalculoContext } from './Calculos';

const FaturamentoInputContext = createContext();

const FaturamentoInputProvider = ({ children }) => {
  const [faturamentoMensal, setFaturamentoMensal] = useState([]);
  const [faturamentoAnual, setFaturamentoAnual] = useState(0);
  const { setFatCalculo } = useContext(CalculoContext);

  useEffect(() => {
    if (faturamentoMensal.length > 0) {
      const somaFaturamentoMensal = faturamentoMensal.reduce((total, item) => {
        const { valor } = item;
        if (valor !== '') {
          return total + valor;
        }
        return total;
      }, 0);

      setFaturamentoAnual({
        ano: faturamentoMensal[0].ano,
        rbt12: somaFaturamentoMensal
      });
      // Removi a chamada para setFatCalculo(faturamentoAnual) pois estava causando o ciclo infinito de atualizações de estado

      setFatCalculo(faturamentoAnual => ({ ...faturamentoAnual, ...{ rbt12: somaFaturamentoMensal } }));
      // Atualizei o setFatCalculo para apenas alterar a propriedade rbt12 do objeto faturamentoAnual, preservando as outras propriedades existentes
    }
  }, [faturamentoMensal, setFatCalculo]);

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
