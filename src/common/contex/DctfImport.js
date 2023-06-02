import FileSaver from 'file-saver';
import React, { createContext, useContext, useState, useEffect } from 'react';

import faturamentoDb from '../../assets/json/dados.json'


export const DctfImportContext = createContext();
DctfImportContext.displayName = "DCTF";

export const DctfImportContextProvider = ({ children }) => {
  const [arquivo, setArquivo] = useState([]);

  /* Valores encontrados na DCTF */
  const [valorEncontradoIr, setValorEncontradoIr] = useState('');
  const [valorEncontradoCsll, setValorEncontradoCsll] = useState('');
  const [valorEncontradoPis, setValorEncontradoPis] = useState('');
  const [valorEncontradoCofins, setValorEncontradoCofins] = useState('');

  /* Faturamento calculado a Partir da DCTF */
  const [faturamentoCalculadoPis, setFaturamentoCalculadoPis] = useState('');
  const [faturamentoCalculadoCofins, setFaturamentoCalculadoCofins] = useState('');
  const [faturamentoEstimadoMensal, setFaturamentoEstimado] = useState('');
  const [faturamentoEstimadoTrimestral, setFaturamentoEstimadoCsll] = useState('');

  const presuncaoIrSemBeneficio = 0.32;
  const presuncaoCsllSemBeneficio = 0.12 //Alterar porque esta para Vendas
  const alqIr = 0.15;
  const alqCsll = 0.09;
  const alqPis = 0.0065;
  const alqCofins = 0.03;
  const baseDivisaoCsll = presuncaoCsllSemBeneficio * alqCsll;
  

  useEffect(() => {
    if (faturamentoCalculadoPis !== valorEncontradoPis / alqPis) {
      setFaturamentoCalculadoPis(valorEncontradoPis / alqPis);
    }
    if (faturamentoCalculadoCofins !== valorEncontradoCofins / alqCofins) {
      setFaturamentoCalculadoCofins(valorEncontradoCofins / alqCofins);
    }
    if (faturamentoEstimadoMensal !== (faturamentoCalculadoPis + faturamentoCalculadoCofins) / 2) {
      const fatEstimado = (faturamentoCalculadoPis + faturamentoCalculadoCofins) / 2;
      setFaturamentoEstimado(fatEstimado);
    }
    if (faturamentoEstimadoTrimestral !== valorEncontradoCsll / baseDivisaoCsll) {
      setFaturamentoEstimadoCsll(valorEncontradoCsll / baseDivisaoCsll);
    }
  }, [valorEncontradoPis, valorEncontradoCofins, faturamentoCalculadoPis, faturamentoCalculadoCofins]);
  
/*   console.log(`
  |---------------------------------------------|
  |FatEstimado Mensal pelo Pis/Cofins: ${parseFloat(faturamentoEstimadoMensal).toFixed(2)}|
  |------------------------|
  |FatEstimado Trimestral: ${parseFloat(faturamentoEstimadoTrimestral).toFixed(2)}|
  |--------------------------------------------|
  `);

 */


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
        faturamentoEstimadoMensal,
        faturamentoEstimadoTrimestral
      }}
    >
      {children}
    </DctfImportContext.Provider>
  );
};

