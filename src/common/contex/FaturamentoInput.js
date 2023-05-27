import React, { createContext, useState } from 'react';

const FaturamentoInputContext = createContext();

const FaturamentoInputProvider = ({ children }) => {
  const [faturamentoInputValues, setFaturamentoInputValues] = useState({});
  const [capturedData, setCapturedData] = useState([]);

  const handleFaturamentoInputChange = (inputId, faturamento) => {
    setFaturamentoInputValues((valorAnterior) => ({
      ...valorAnterior,
      [inputId]: faturamento,
    }));
  };

  const handleCaptureData = (data) => {
    setCapturedData(data);
  };

  const value = {
    faturamentoInputValues,
    handleFaturamentoInputChange,
    capturedData,
    handleCaptureData,
  };

  return (
    <FaturamentoInputContext.Provider value={value}>
      {children}
    </FaturamentoInputContext.Provider>
  );
};

export { FaturamentoInputContext, FaturamentoInputProvider };
