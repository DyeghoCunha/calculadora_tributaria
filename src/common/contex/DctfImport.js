import FileSaver from 'file-saver';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const DctfImportContext = createContext();
DctfImportContext.displayName = "DCTF";

export const DctfImportContextProvider = ({ children }) => {
  const [arquivo, setArquivo] = useState([]);
  const [valorEncontradoIr, setValorEncontradoIr] = useState('');
  const [valorEncontradoCsll, setValorEncontradoCsll] = useState('');
  const [valorEncontradoPis, setValorEncontradoPis] = useState('');
  const [valorEncontradoCofins, setValorEncontradoCofins] = useState('');

  const [faturamentoCalculadoPis, setFaturamentoCalculadoPis] = useState('');
  const [faturamentoCalculadoCofins, setFaturamentoCalculadoCofins] = useState('');
  const [faturamentoEstimado, setFaturamentoEstimado] = useState('');
  const [faturamentoEstimadoCsll, setFaturamentoEstimadoCsll] = useState('');

  const presuncaoIrSemBeneficio = 0.32;
  const presuncaoCsllSemBeneficio = 0.12 //Alterar porque esta para Vendas
  const alqIr = 0.15;
  const alqCsll = 0.09;
  const alqPis = 0.0065;
  const alqCofins = 0.03;
  const baseDivisaoCsll = presuncaoCsllSemBeneficio * alqCsll;
  //Ver questao do Adicional de 10%

  useEffect(() => {
    if (faturamentoCalculadoPis !== valorEncontradoPis / alqPis) {
      setFaturamentoCalculadoPis(valorEncontradoPis / alqPis);
    }
    if (faturamentoCalculadoCofins !== valorEncontradoCofins / alqCofins) {
      setFaturamentoCalculadoCofins(valorEncontradoCofins / alqCofins);
    }
    if (faturamentoEstimado !== (faturamentoCalculadoPis + faturamentoCalculadoCofins) / 2) {
      const fatEstimado = (faturamentoCalculadoPis + faturamentoCalculadoCofins) / 2;
      setFaturamentoEstimado(fatEstimado);
    }
    if (faturamentoEstimadoCsll !== valorEncontradoCsll / baseDivisaoCsll) {
      setFaturamentoEstimadoCsll(valorEncontradoCsll / baseDivisaoCsll);
    }
  }, [valorEncontradoPis, valorEncontradoCofins, faturamentoCalculadoPis, faturamentoCalculadoCofins]);

  const updateArquivo = (file) => {
    setArquivo([...arquivo, { file }]);
  };

  return (
    <DctfImportContext.Provider
      value={{
        valorEncontradoIr,
        valorEncontradoCsll,
        valorEncontradoPis,
        valorEncontradoCofins,
        setValorEncontradoIr,
        setValorEncontradoCsll,
        setValorEncontradoPis,
        setValorEncontradoCofins,
        updateArquivo,
        faturamentoCalculadoPis,
        faturamentoCalculadoCofins,
        faturamentoEstimado,
        faturamentoEstimadoCsll
      }}
    >
      {children}
    </DctfImportContext.Provider>
  );
};

