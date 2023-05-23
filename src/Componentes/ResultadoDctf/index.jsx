
import React, { useContext } from 'react'
import { DctfImportContext } from '../../common/contex/DctfImport';

export default function ResultadoDctf() {
  const {
    valorEncontradoIr,
    valorEncontradoCsll,
    valorEncontradoPis,
    valorEncontradoCofins, faturamentoCalculadoPis,
    faturamentoCalculadoCofins,faturamentoEstimado
  } = useContext(DctfImportContext);

  let Ir = 0;
  let Csll = 0;
  let Pis = 0;
  let Cofins = 0;
  let FaturamentoPis = 0;
  let FaturamentoCofins =0;
  let Faturamento = 0 

  

  if(valorEncontradoPis>0){
     Ir = valorEncontradoIr.toFixed(2);
     Csll = valorEncontradoCsll.toFixed(2);
     Pis = valorEncontradoPis.toFixed(2);
     Cofins = valorEncontradoCofins.toFixed(2);
     FaturamentoPis = faturamentoCalculadoPis.toFixed(2);
     FaturamentoCofins = faturamentoCalculadoCofins.toFixed(2);
     Faturamento = faturamentoEstimado.toFixed(2);
  }


  return (
    <div>
      <p>Valor encontrado do IR: {Ir}</p>
      <p>Valor encontrado do Csll: {Csll}</p>
      <p>Valor encontrado do Pis: {Pis}</p>
      <p>Valor encontrado do Cofins: {Cofins}</p>
      <p>Faturamento Pelo Pis: R$ {FaturamentoPis}</p>
      <p>Faturamento Pelo Cofins: R$ {FaturamentoCofins}</p>
      <p>Faturamento Estimado: R$ {Faturamento}</p>
    </div>
  );
}