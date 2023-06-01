import styles from './GraficoLinha.module.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react'
import ContainerTrib from '../../ContainerTrib';





export default function GraficoLinha({width=860,height=300}) {

  
  const color1 = 'rgba(255, 20, 147, 0.5)'; // Rosa Choque (Rosa Vibrante)
  const color2 = 'rgba(0, 255, 128, 1)'; // Verde Neon (Verde Intenso)
  const color3 = 'rgba(255, 102, 0, 0.8)'; // Laranja Escuro (Vermelho Intenso)
  const color4 = 'rgba(255, 255, 0, 1)'; // Amarelo Brilhante (Amarelo Intenso)
  const color5 = 'rgba(68, 209, 201, 0.5)'; // Turquesa (Azul Ciano)



  function faturamentoAleatorio() {
    return Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000;
  }

  const data = [
    {
      mes: '1',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),


    },
    {
      mes: '2',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '3',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '4',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '5',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '6',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '7',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '8',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '9',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '10',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '11',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
    {
      mes: '12',
      '2018': faturamentoAleatorio(),
      '2019': faturamentoAleatorio(),
      '2020': faturamentoAleatorio(),
      '2021': faturamentoAleatorio(),
      '2022': faturamentoAleatorio(),

    },
  ];

  //Alterar para poder receber os meses de faturamento digitados no Faturamento Mensal
  
  const dataKeys = Object.keys(data[0]).filter(key => key !== 'mes');

  function getLineColor(index) {
    const colors = [color1, color2, color3, color4, color5];
    return colors[index % colors.length];
  }

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