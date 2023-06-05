import styles from './GraficoLinha.module.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useContext } from 'react'
import ContainerTrib from '../../ContainerTrib';
import { FaturamentoInputContext } from '../../../common/contex/FaturamentoInput';





export default function GraficoLinha({width=860,height=300}) {


  const {faturamentoMensal, anoAtual, anoRetroativo, faturamentoMensalComAno} = useContext(FaturamentoInputContext)
  console.log('faturamentoMensalComAno: ', faturamentoMensalComAno)
  
  const color1 = 'rgba(255, 20, 147, 0.5)'; // Rosa Choque (Rosa Vibrante)
  const color2 = 'rgba(0, 255, 128, 1)'; // Verde Neon (Verde Intenso)
  const color3 = 'rgba(255, 102, 0, 0.8)'; // Laranja Escuro (Vermelho Intenso)
  const color4 = 'rgba(255, 255, 0, 1)'; // Amarelo Brilhante (Amarelo Intenso)
  const color5 = 'rgba(68, 209, 201, 0.5)'; // Turquesa (Azul Ciano)

console.log(faturamentoMensal)


 

  function getLineColor(index) {
    const colors = [color1, color2, color3, color4, color5];
    return colors[index % colors.length];
  }

  const data = [];

  //* Agrupar os objetos de faturamento por ano e mês
  
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
      mes: obterNomeMes(mes),
    };
  
    for (let ano = anoRetroativo; ano <= anoAtual; ano++) {
      const faturamentoMesAno = groupedFaturamento[ano.toString()] || {};
      const faturamentoMes = faturamentoMesAno[obterNomeMes(mes)] || [];
      const valor = faturamentoMes.reduce((sum, item) => sum + item.valor, 0) || 0;
  
      monthObj[ano.toString()] = valor;
    }
  
    data.push(monthObj);
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
  
  const dataKeys = Object.keys(data[0]).filter(key => key !== 'mes');
  
  console.log(data);

  return (
    <ContainerTrib>
    <div className={styles.container} >
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="mes" tick={{ fill: 'green', fontSize: 18 }} />
        <YAxis tick={{ fill: 'green', fontSize: 15 }} />
        <Tooltip contentStyle={{ borderRadius: '8px' }} wrapperStyle={{ border: '1px solid green', borderRadius: '8px' }} />
        <Legend />
        {dataKeys.map((key, index) => (
          <Line
            key={index}
            type="monotone"
            strokeWidth={2}
            dataKey={key}
            stroke={getLineColor(index)} // Função fictícia para definir a cor da linha com base no índice
            dot={{ r: 1 }}
            activeDot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </div>
    </ContainerTrib>
  );
}