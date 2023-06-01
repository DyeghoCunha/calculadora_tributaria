import styles from './GraficoBarra.module.scss'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ContainerTrib from '../../ContainerTrib';


export default function GraficoBarra({width=860, height=300}) {

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
     <div className={styles.container}>
      <BarChart
        data={data}
        height={height}
        width={width}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="mes" tick={{ fill: 'green', fontSize: 18 }} />
        <YAxis tick={{ fill: 'green', fontSize: 15 }} />
        <Tooltip contentStyle={{ borderRadius: '8px' }} wrapperStyle={{ border: '1px solid green', borderRadius: '8px' }} />
        <Legend />
        {dataKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={getLineColor(index)}



          />
        ))}
      </BarChart>
</div>
    </ContainerTrib>
  );
}
