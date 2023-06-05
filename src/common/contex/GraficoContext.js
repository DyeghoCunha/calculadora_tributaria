import React, { createContext, useContext, useEffect, useState } from "react";
import { FaturamentoInputContext } from "./FaturamentoInput.js";


const GraficoContext = createContext();

const GraficoContextProvider = ({ children }) => {
  const { anoAtual, anoRetroativo, faturamentoMensalComAno } = useContext(FaturamentoInputContext);
  const [dataKeys, setDataKeys] = useState([]);
  const [data, setData] = useState([]);

  const color1 = 'rgba(255, 20, 147, 0.5)'; // Rosa Choque (Rosa Vibrante)
  const color2 = 'rgba(0, 255, 128, 1)'; // Verde Neon (Verde Intenso)
  const color3 = 'rgba(255, 102, 0, 0.8)'; // Laranja Escuro (Vermelho Intenso)
  const color4 = 'rgba(255, 255, 0, 1)'; // Amarelo Brilhante (Amarelo Intenso)
  const color5 = 'rgba(68, 209, 201, 0.5)'; // Turquesa (Azul Ciano)

  function getLineColor(index) {
    const colors = [color1, color2, color3, color4, color5];
    return colors[index % colors.length];
  }

  function obterNomeMes(numeroMes) {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    return meses[numeroMes - 1];
  }

  useEffect(() => {
    const dadosGrafico = [];

    // Agrupar os objetos de faturamento por ano e mês
    const groupedFaturamento = {};

    for (const ano in faturamentoMensalComAno) {
      const faturamentoMesAno = faturamentoMensalComAno[ano];

      for (const item of faturamentoMesAno) {
        const { mes } = item;

        if (!groupedFaturamento[ano]) {
          groupedFaturamento[ano] = {};
        }

        if (!groupedFaturamento[ano][mes]) {
          groupedFaturamento[ano][mes] = [];
        }

        groupedFaturamento[ano][mes].push(item);
      }
    }

    for (let mes = 1; mes <= 12; mes++) {
      const monthObj = {
       // mes: obterNomeMes(mes), //* Nomes do Meses
        mes: mes.toString(), //*Numero dos Meses
      };

      for (let ano = anoRetroativo; ano <= anoAtual; ano++) {
        const faturamentoMesAno = groupedFaturamento[ano.toString()] || {};
        const faturamentoMes = faturamentoMesAno[obterNomeMes(mes)] || [];
        const valor = faturamentoMes.reduce((sum, item) => sum + item.valor, 0) || 0;

        monthObj[ano.toString()] = valor;
      }

      dadosGrafico.push(monthObj);
    }

    setData(dadosGrafico);
  }, [faturamentoMensalComAno, anoRetroativo, anoAtual]);

  useEffect(() => {
    if (data.length > 0) {
      const dados = Object.keys(data[0]).filter((key) => key !== 'mes');
      setDataKeys(dados);
    }
  }, [data]);

  const value = {
    getLineColor,
    dataKeys,
    data,
  };

  return (
    <GraficoContext.Provider value={value}>
      {children}
    </GraficoContext.Provider>
  );
};

export { GraficoContext, GraficoContextProvider };
